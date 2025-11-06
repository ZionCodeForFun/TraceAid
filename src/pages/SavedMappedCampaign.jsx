import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { RiBookmarkFill } from "react-icons/ri";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";
import { useSelector } from "react-redux";

const SavedMappedCampaign = () => {
  const [savedCampaigns, setSavedCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = useSelector((state) => state.auth.token);

  const savedCampaignBaseUrl = import.meta.env.VITE_SavedCampaignBaseUrl;

  useEffect(() => {
    const fetchSavedCampaigns = async () => {
      try {
        const res = await axios.get(
          `${savedCampaignBaseUrl}/all-saved-campaign`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setSavedCampaigns(res.data.data);
      } catch (err) {
        console.error("Error fetching saved campaigns:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSavedCampaigns();
  }, [token]);

  return (
    <SavedMappedSection>
      <CampaignGrid>
        {loading ? (
          Array.from({ length: 6 }).map((_, i) => (
            <CampaignCard key={i}>
              <Skeleton height={220} />

              <div style={{ padding: "18px 20px" }}>
                <Skeleton height={20} width="60%" />
                <Skeleton height={15} width="90%" style={{ marginTop: 10 }} />
                <Skeleton height={15} width="80%" />
                <Skeleton height={30} width="100%" style={{ marginTop: 15 }} />
              </div>
            </CampaignCard>
          ))
        ) : savedCampaigns.length === 0 ? (
          <p style={{ textAlign: "center", width: "100%" }}>
            You have no saved campaigns yet.
          </p>
        ) : (
          savedCampaigns.map((card) => {
            const progress = Math.floor(
              (card.currentAmount / card.goalAmount) * 100
            );

            return (
              <CampaignCard key={card._id}>
                <CampaignImage>
                  <img
                    src={card.campaignCoverImageOrVideo?.imageUrl}
                    alt={card.title}
                  />
                  <div className="bookmark">
                    <RiBookmarkFill />
                  </div>
                </CampaignImage>

                <CampaignContent>
                  <div className="topRow">
                    <h4>{card.campaignCategory}</h4>
                    <p className="daysLeft">{card.durationDays} days left</p>
                  </div>

                  <h3>{card.campaignTitle}</h3>
                  <p>{card.campaignDescription}</p>

                  <ProgressWrapper>
                    <span>
                      <strong>Goal:</strong>
                      <p className="money">
                        ₦{(card.totalCampaignGoalAmount || 0).toLocaleString()}
                      </p>
                    </span>

                    <span>
                      <strong>Raised:</strong>
                      <p className="money">
                        ₦{(card.amountRaised || 0).toLocaleString()}
                      </p>
                    </span>
                  </ProgressWrapper>

                  <ProgressRow>
                    <ProgressBar $progress={card.progressPercentage} />
                    <ProgressPercent>
                      {card.progressPercentage}%
                    </ProgressPercent>
                  </ProgressRow>
                </CampaignContent>

                <DonateButton>Donate Now</DonateButton>
              </CampaignCard>
            );
          })
        )}
      </CampaignGrid>
    </SavedMappedSection>
  );
};

export default SavedMappedCampaign;

export const SavedMappedSection = styled.section`
  width: 100%;
  /* padding: 5rem 8%; */
  /* width: 90%; */
  /* margin: 0 auto; */
  /* padding-top: 2.5rem; */
  margin-top: 4rem;
  background-color: #ffffff;
`;
export const CampaignGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  column-gap: 1.8rem;
  row-gap: 2.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const CampaignCard = styled.div`
  background: #ffffff;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px,
    rgba(255, 255, 255, 0.25) 0px 1px 0px inset;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
`;

export const CampaignImage = styled.div`
  position: relative;
  width: 100%;
  height: 220px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .bookmark {
    position: absolute;
    top: 10px;
    right: 10px;
    background: #d6f4b3;
    color: #000;
    padding: 0.4rem;
    border-radius: 50%;
    font-size: 1.1rem;
  }
`;

export const CampaignContent = styled.div`
  padding: 1.2rem;

  .topRow {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.6rem;
    line-height: 1;
  }

  h4 {
    font-size: 0.9rem;
    font-weight: 600;
    color: #666;
    margin: 0;
    line-height: 1;
  }

  .daysLeft {
    font-size: 0.85rem;
    color: #888;
    margin: 0;
    line-height: 1;
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  h3 {
    font-size: 1rem;
    font-weight: 700;
    color: #222;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    color: #555;
    margin-bottom: 1rem;
  }

  .funded {
    font-size: 0.8rem;
    color: #666;
    margin-top: 0.3rem;
  }
`;

export const ProgressWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: #333;
  margin-top: 0.6rem;
  background-color: #f9fdf2;

  .money {
  margin-top: 4px;
  font-weight: 600;
  font-size: 0.9rem;
  color: #222;
}
`;

export const ProgressBar = styled.div`
  position: relative;
  background: #eee;
  border-radius: 50px;
  height: 8px;
  flex: 1;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ $progress }) => $progress || 0}%;
    height: 100%;
    background: linear-gradient(to right, #f8d34a, #f9c700);
    transition: width 0.4s ease;
  }
`;

export const ProgressRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-top: 0.7rem;
`;

export const ProgressPercent = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  color: #444;
  min-width: 38px;
  text-align: right;
`;

export const DonateButton = styled.button`
  width: 90%;
  align-self: center;
  margin: 1.2rem 0 1.4rem;
  padding: 0.8rem;
  background-color: #1a1a1a;
  color: #c1e86e;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #c1e86e;
    color: #1a1a1a;
  }
`;
