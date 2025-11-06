import React, { useEffect, useMemo, useState } from "react";
import { RiBookmarkLine, RiBookmarkFill } from "react-icons/ri";
import { RiSearchLine } from "react-icons/ri";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import HeaderNav from "./HeaderNav";
import Footer from "./Footer";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useSelector } from "react-redux";
import user from "../global/authSlice";

import {
  Container,
  ExploreHeader,
  ExploreTopBar,
  SearchWrapper,
  SearchInput,
  CategorySelect,
  ExploreDividerLine,
  CampaignGrid,
  CampaignCard,
  CampaignImage,
  CampaignContent,
  ProgressWrapper,
  ProgressBar,
  ProgressRow,
  ProgressPercent,
  DonateButton,
  SeeMoreWrapper,
  SeeMoreButton,
} from "./CampaignDataStyled.jsx";
import { toast } from "react-toastify";

const CampaignData = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [savedCampaigns, setSavedCampaigns] = useState({});

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  const user = useSelector((state) => state.auth?.user);
  const token = useSelector((state) => state.auth?.token);
  const nav = useNavigate();
  const location = useLocation();
  const isExplorePage = location.pathname === "/campaign_data";

  console.log("My User token:", token);

  const VITE_campaignBaseUrl = import.meta.env.VITE_campaignBaseUrl;

  const VITE_EngagementBaseUrl = import.meta.env.VITE_EngagementBaseUrl;

  const getCampaigns = async () => {
    try {
      const res = await axios.get(`${VITE_campaignBaseUrl}/get-all-campaign`);
      setCampaigns(res.data.data.all);
    } catch (err) {
      setError("Failed to load campaigns");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCampaigns();
  }, []);

  const toggleEngagement = async (campaignId, actionType, token) => {
    // console.log("Food is ready", campaignId, actionType, token);
    try {
      const res = await axios.patch(
        `${VITE_EngagementBaseUrl}/${campaignId}/${actionType}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data;
    } catch (error) {
      throw error.response?.data || "Something went wrong";
    }
  };

  const handleSave = async (id) => {
    if (!token) return toast("You must be logged in to save a campaign.");

    setSavedCampaigns((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));

    try {
      const res = await toggleEngagement(id, "save", token);
      console.log("SAVE RESPONSE:", res);

      setSavedCampaigns((prev) => ({
        ...prev,
        [id]: res.isEngaged,
      }));
    } catch (err) {
      console.error("SAVE ERROR:", err);

      setSavedCampaigns((prev) => ({
        ...prev,
        [id]: !prev[id],
      }));
    }
  };

  const filteredCampaigns = useMemo(() => {
    let data = campaigns;

    if (search.trim()) {
      const q = search.toLowerCase();
      data = data.filter((c) =>
        (c.campaignTitle || "").toLowerCase().includes(q)
      );
    }

    if (category) {
      data = data.filter((c) => (c.campaignCategory || "") === category);
    }

    return data;
  }, [campaigns, search, category]);

  const currentCards = filteredCampaigns.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <>
      {isExplorePage && <HeaderNav />}

      <Container>
        {isExplorePage && (
          <>
            <ExploreHeader>
              <h1>Explore Campaign</h1>
              <p>
                Discover powerful causes that need your support and make a real
                difference with every donation.
              </p>
            </ExploreHeader>

            <ExploreTopBar>
              <SearchWrapper>
                <RiSearchLine className="search-icon" />
                <SearchInput
                  type="text"
                  placeholder="Search projects"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setVisibleCount(6);
                  }}
                />
              </SearchWrapper>

              <CategorySelect
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  setVisibleCount(6);
                }}
              >
                <option value="">All Categories</option>
                <option value="Education & Schools">Education & Schools</option>
                <option value="Health">Health</option>
                <option value="Community">Community</option>
                <option value="Food">Food</option>
              </CategorySelect>
            </ExploreTopBar>

            <ExploreDividerLine />
          </>
        )}

        {error && (
          <p
            style={{ color: "red", textAlign: "center", marginBottom: "20px" }}
          >
            {error}
          </p>
        )}

        <CampaignGrid>
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <CampaignCard key={i}>
                  <Skeleton height={200} />
                  <div style={{ padding: "18px 20px" }}>
                    <Skeleton height={20} width="60%" />
                    <Skeleton
                      height={15}
                      width="90%"
                      style={{ marginTop: 10 }}
                    />
                    <Skeleton height={15} width="80%" />
                    <Skeleton
                      height={30}
                      width="100%"
                      style={{ marginTop: 15 }}
                    />
                  </div>
                </CampaignCard>
              ))
            : currentCards.map((item) => {
                const goal = item.totalCampaignGoalAmount || 0;
                const raised = item.amountRaised || 0;
                const progress = item.progressPercentage || 0;

                return (
                  <CampaignCard key={item._id} style={{ cursor: "pointer" }}>
                    <CampaignImage>
                      <img
                        src={item.campaignCoverImageOrVideo?.imageUrl}
                        alt={item.campaignTitle}
                      />

                      <div
                        className="bookmark"
                        onClick={() => handleSave(item._id)}
                      >
                        {savedCampaigns[item._id] ? (
                          <RiBookmarkFill style={{ color: "#8133f1" }} />
                        ) : (
                          <RiBookmarkLine />
                        )}
                      </div>
                    </CampaignImage>

                    <CampaignContent>
                      <div className="topRow">
                        <h4>{item.campaignCategory}</h4>
                        <p className="daysLeft">
                          {item.durationDays} days left
                        </p>
                      </div>

                      <h3>{item.campaignTitle}</h3>
                      <p>{item.campaignDescription}</p>

                      <ProgressWrapper>
                        <span>
                          <strong>Goal:</strong> ₦{goal.toLocaleString()}
                        </span>
                        <span>
                          <strong>Raised:</strong> ₦{raised.toLocaleString()}
                        </span>
                      </ProgressWrapper>

                      <ProgressRow>
                        <ProgressBar $progress={progress} />
                        <ProgressPercent>{progress}%</ProgressPercent>
                      </ProgressRow>
                    </CampaignContent>

                    <DonateButton
                      onClick={() => nav(`/campaign_details/${item._id}`)}
                    >
                      Donate Now
                    </DonateButton>
                  </CampaignCard>
                );
              })}
        </CampaignGrid>

        {!loading && currentCards.length < filteredCampaigns.length && (
          <SeeMoreWrapper>
            <SeeMoreButton onClick={handleLoadMore}>See More</SeeMoreButton>
          </SeeMoreWrapper>
        )}
      </Container>

      {isExplorePage && <Footer />}
    </>
  );
};

export default CampaignData;
