import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const AllDonorsPage = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const token = useSelector((state) => state?.auth?.token);

  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  const VITE_Payemt_BaseUrl = import.meta.env.VITE_Payemt_BaseUrl;

  const formatAmount = (num) =>
    "₦" + Number(num || 0).toLocaleString();

  const getInitials = (name) => {
    if (!name || !name.trim()) return "AN";
    const parts = name.trim().split(" ");
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
    return (parts[0].charAt(0) + parts[1].charAt(0)).toUpperCase();
  };

  const formatDate = (iso) => {
    if (!iso) return "";
    return new Date(iso).toLocaleString();
  };

  const fetchData = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        `${VITE_Payemt_BaseUrl}/campaign/${id}/donations`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (res?.data?.statusCode) {
        setDonations(Array.isArray(res.data.data) ? res.data.data : []);
      } else {
        toast.error(res?.data?.message || "Failed to load donors");
      }
    } catch (err) {
      console.error("All donors error:", err?.response?.data || err);
      toast.error("Unable to fetch donors");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) fetchData();
  }, [id]);

  return (
    <PageWrap>
      <HeaderBar>
        <button className="back" onClick={() => nav(-1)}>← Back</button>
        <h2>All Donors</h2>
      </HeaderBar>

      {loading ? (
        <Empty>Loading donors…</Empty>
      ) : donations.length === 0 ? (
        <Empty>No donors yet for this campaign.</Empty>
      ) : (
        <Grid>
          {donations.map((d, i) => {
            const name = (d?.donorName || "").trim() || "Anonymous";
            const initials = getInitials(name);
            const amount = d?.amount ?? d?.totalDonated ?? 0;
            const when = d?.createdAt ?? d?.date;
            const count = d?.donationCount;

            return (
              <Card key={i}>
                <div className="top">
                  <div className="avatar-circle">{initials}</div>
                  <div className="meta">
                    <h4>{name}</h4>
                    {when ? <small>{formatDate(when)}</small> : null}
                  </div>
                </div>

                <div className="bottom">
                  <div className="amount">{formatAmount(amount)}</div>
                  {typeof count === "number" && (
                    <div className="count">
                      {count} {count > 1 ? "donations" : "donation"}
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </Grid>
      )}
    </PageWrap>
  );
};

export default AllDonorsPage;


const PageWrap = styled.section`
  width: 100%;
  max-width: 1200px;
  padding: 2.5rem 6%;
  margin: 0 auto;
  background: #ffffff;
`;

const HeaderBar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.4rem;

  .back {
    border: 1px solid #e0e0e0;
    background: #fff;
    padding: 0.5rem 0.8rem;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 700;
  }

  h2 {
    font-size: 1.4rem;
    font-weight: 800;
    color: #1f1f1f;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  border: 1px solid #eef0ee;
  background: #fff;
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  transition: 0.2s ease;

  &:hover {
    background: #f9faf9;
  }

  .top {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .avatar-circle {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: #e9e3ff;
    color: #5b3fe1;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    text-transform: uppercase;
  }

  .meta h4 {
    font-size: 1rem;
    font-weight: 800;
    color: #1f1f1f;
    line-height: 1.1;
  }

  .meta small {
    color: #666;
  }

  .bottom {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-top: 0.35rem;
  }

  .amount {
    font-weight: 800;
    font-size: 1.1rem;
    color: #1f1f1f;
  }

  .count {
    font-size: 0.9rem;
    color: #4a4a4a;
  }
`;

const Empty = styled.div`
  border: 1px dashed #dfe3df;
  background: #fafafa;
  color: #666;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
`;
