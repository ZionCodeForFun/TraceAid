import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IoArrowBack } from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import HeaderNav from "./HeaderNav";
import ShareModal from "./ShareModal"; 

const Container = styled.div`
  width: 100%;
  padding: 3rem 8%;
  background: #ffffff;
  min-height: 80vh;
  margin-top: 5rem;
`;

const GoBack = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: #344054;
  font-size: 0.95rem;
  cursor: pointer;
  margin-bottom: 2rem;
`;

const Heading = styled.h2`
  font-family: Inter;
  font-size: 1.5rem;
  color: #1a1a1a;
  font-weight: 500;
  margin-bottom: 0.3rem;
`;

const SubText = styled.p`
  font-family: Inter;
  font-weight: 400;
  color: #1a1a1a;
  margin-bottom: 3rem;
  font-size: 0.9rem;
`;

const StatsRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 3rem;
  flex-wrap: wrap;
`;

const StatBox = styled.div`
  min-width: 200px;
  padding-right: 3rem;
  position: relative;

  &:not(:last-child) {
    border-right: 2px solid #dcdcdc;
  }

  @media (max-width: 600px) {
    padding-right: 0;
    border-right: none;
  }
`;

const StatValue = styled.h3`
  font-family: Inter;
  font-size: 2.4rem;
  font-weight: 400;
  color: #617437;
  margin-bottom: 0.2rem;
`;

const StatLabel = styled.p`
  font-family: Inter;
  color: #4d4d4d;
  font-weight: 400;
  font-size: 1rem;
`;

const HistoryContainer = styled.div`
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

const HistoryHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const SearchInput = styled.input`
  width: 85%;
  background-color: #f3f3f5;
  padding: 0.8rem 1rem;
  border-radius: 8px;
  border: 1px solid #d9d9d9;
  outline: none;
  font-size: 0.95rem;
`;

const StatusFilter = styled.div`
  select {
    padding: 0.8rem 1rem;
    border-radius: 8px;
    border: 1px solid #d9d9d9;
    font-size: 0.95rem;
    cursor: pointer;
    background-color: #f3f3f5;
  }
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 2.5fr 1.2fr 1fr 1fr 0.5fr;
  font-weight: 600;
  color: #2f3a38;
  margin-bottom: 1.2rem;
  font-size: 0.95rem;

    @media (max-width: 480px) {
    margin-bottom: 2rem;
  }

    @media (max-width: 430px) {
    margin-bottom: 2.4rem;
  }
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 2.5fr 1.2fr 1fr 1fr 0.5fr;
  padding: 1rem 0;
  border-bottom: 1px solid #eaeaea;
  font-size: 0.93rem;
  align-items: center;
  color: #222;
  position: relative;

   @media (max-width: 480px) {
    padding: 1.4rem 0;
  }

   @media (max-width: 430px) {
    padding: 1.6rem 0;
  }
`;

const StatusPill = styled.span`
  background: ${({ $status }) =>
    $status === "Pending"
      ? "#FFF8E1"
      : $status === "Failed"
      ? "#FFE1E1"
      : "#E0F2E3"};
  color: ${({ $status }) =>
    $status === "Pending"
      ? "#B38900"
      : $status === "Failed"
      ? "#C62828"
      : "#2f8a45"};
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;

  @media (max-width: 480px) {
    margin-top: 0.8rem;    
    margin-bottom: 0.8rem;  
  }

   @media (max-width: 430px) {
    margin-top: 1rem;
    margin-bottom: 1rem; 
  }
`;


const MenuDots = styled.span`
  position: relative;
  font-size: 1.4rem;
  color: #555;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 25px;
  right: 0;
  background: #fff;
  border: 1px solid #ddd;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  z-index: 100;
  width: 160px;

  p {
    margin: 0;
    padding: 10px 15px;
    font-size: 0.9rem;
    color: #333;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: #f3f3f3;
    }

    &:not(:last-child) {
      border-bottom: 1px solid #eee;
    }
  }
`;

const MyDonations = () => {
  const nav = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const VITE_Payemt_BaseUrl = import.meta.env.VITE_Payemt_BaseUrl;

  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState("All Status");
  const [searchTerm, setSearchTerm] = useState("");
  const [openMenuId, setOpenMenuId] = useState(null);

  const [isShareOpen, setIsShareOpen] = useState(false);
  const [selectedCampaignId, setSelectedCampaignId] = useState(null);

  const fetchDonations = async () => {
    try {
      const res = await axios.get(`${VITE_Payemt_BaseUrl}/my-donations`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDonations(res?.data?.data || []);
    } catch (error) {
      console.log("MY DONATIONS FETCH ERROR:", error.response?.data || error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) fetchDonations();
  }, [token]);

  const formattedDonations = donations.map((item) => ({
    donationId: item._id,
    id: item?.campaign?._id,
    campaignTitle: item?.campaign?.campaignTitle || "Unknown Campaign",
    amount: Number(item?.amount || 0),
    formattedAmount: `₦${Number(item?.amount || 0).toLocaleString()}`,
    date: new Date(item?.createdAt).toLocaleDateString(),
    status:
      item?.paymentStatus === "successful"
        ? "Completed"
        : item?.paymentStatus === "pending"
        ? "Pending"
        : "Failed",
  }));

  const filteredDonations = formattedDonations.filter((item) => {
    const matchesSearch = item.campaignTitle
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === "All Status" || item.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

 const totalDonated = donations
  .filter((d) => d.paymentStatus === "successful")
  .reduce((sum, d) => sum + Number(d.amount || 0), 0);

  const supportedCampaigns = new Set(donations.map((d) => d.campaign?._id))
    .size;

  const handleMenuToggle = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  const handleRecordShare = async (channel) => {
    if (!selectedCampaignId) return;

    try {
      await axios.patch(
        `https://traceaid.onrender.com/engagement/api/v1/recordShare/${selectedCampaignId}`,
        {
          channel,
          userCaption: `Shared this campaign on ${channel}`,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      toast.success("Share recorded!");
    } catch (error) {
      console.log("Record share error:", error);
    }
  };

  const handleOptionClick = (action, campaignId) => {
    if (action === "view") {
      nav(`/card_campaign_details/${campaignId}`);
    } else if (action === "share") {
      setSelectedCampaignId(campaignId); 
      setIsShareOpen(true);
    } else if (action === "close") {
      toast.success("Campaign closed successfully");
    }

    setOpenMenuId(null);
  };

  return (
    <>
      <HeaderNav />
      <Container>
        <GoBack onClick={() => nav(-1)}>
          <IoArrowBack size={18} />
          Go Back
        </GoBack>

        <Heading>My Donations</Heading>
        <SubText>
          Track your contributions and the milestones you’ve helped achieve.
        </SubText>

        <StatsRow>
          <StatBox>
            <StatValue>₦{totalDonated.toLocaleString()}</StatValue>
            <StatLabel>Total Donated</StatLabel>
          </StatBox>
          <StatBox>
            <StatValue>{supportedCampaigns}</StatValue>
            <StatLabel>Campaigns Supported</StatLabel>
          </StatBox>
        </StatsRow>

        <HistoryContainer>
          <HistoryHeader>
            <SearchInput
              placeholder="Search by campaign name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <StatusFilter>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option>All Status</option>
                <option>Completed</option>
                <option>Pending</option>
                <option>Failed</option>
              </select>
            </StatusFilter>
          </HistoryHeader>

          <TableHeader>
            <span>Campaign</span>
            <span>Amount Donated</span>
            <span>Date</span>
            <span>Status</span>
            <span></span>
          </TableHeader>

          {loading ? (
            <p>Loading donations...</p>
          ) : filteredDonations.length === 0 ? (
            <p>No donations found</p>
          ) : (
            filteredDonations.map((item) => (
              <TableRow key={item.donationId}>
                <span>{item.campaignTitle}</span>
                <span>{item.formattedAmount}</span>
                <span>{item.date}</span>
                <StatusPill $status={item.status}>{item.status}</StatusPill>

                <MenuDots onClick={() => handleMenuToggle(item.donationId)}>
                  <HiOutlineDotsVertical size={20} />

                  {openMenuId === item.donationId && (
                    <DropdownMenu>
                      <p onClick={() => handleOptionClick("view", item.id)}>
                        View Details
                      </p>

                      <p
                        onClick={() => {
                          setSelectedCampaignId(item.id);
                          handleOptionClick("share", item.id);
                        }}
                      >
                        Share Campaign
                      </p>

                      <p onClick={() => handleOptionClick("close", item.id)}>
                        Close Campaign
                      </p>
                    </DropdownMenu>
                  )}
                </MenuDots>
              </TableRow>
            ))
          )}
        </HistoryContainer>
      </Container>

      <ShareModal
        open={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        onRecordShare={handleRecordShare}
        campaignId={selectedCampaignId}
      />
    </>
  );
};

export default MyDonations;
