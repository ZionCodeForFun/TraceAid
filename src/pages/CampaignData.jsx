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
import { toast } from "react-toastify";

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
} from "./CampaignDataStyled.jsx";

import { PaginationWrapper, PageButton, ArrowButton } from "./PaginationStyled";


const CampaignData = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [savedCampaigns, setSavedCampaigns] = useState({});

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const user = useSelector((state) => state.auth?.user);
  const token = useSelector((state) => state.auth?.token);
  const nav = useNavigate();
  const location = useLocation();
  const isExplorePage = location.pathname === "/campaign_data";

  const VITE_campaignBaseUrl = import.meta.env.VITE_campaignBaseUrl;
  const VITE_EngagementBaseUrl = import.meta.env.VITE_EngagementBaseUrl;

  const getCampaigns = async () => {
    try {
      const res = await axios.get(`${VITE_campaignBaseUrl}/get-all-active-campaign`);
      setCampaigns(res.data.data.active);
    } catch {
      setError("Failed to load campaigns");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCampaigns();
  }, []);

  const toggleEngagement = async (campaignId, actionType, token) => {
    try {
      const res = await axios.patch(
        `${VITE_EngagementBaseUrl}/${campaignId}/${actionType}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return res.data;
    } catch (error) {
      throw error.response?.data || "Something went wrong";
    }
  };

  const handleSave = async (id) => {
    if (!token) return toast("You must be logged in to save a campaign.");

    setSavedCampaigns((prev) => ({ ...prev, [id]: !prev[id] }));

    try {
      const res = await toggleEngagement(id, "save", token);
      setSavedCampaigns((prev) => ({ ...prev, [id]: res.isEngaged }));
    } catch {
      setSavedCampaigns((prev) => ({ ...prev, [id]: !prev[id] }));
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

  
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  const totalPages = Math.ceil(filteredCampaigns.length / cardsPerPage);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = isExplorePage
    ? filteredCampaigns.slice(indexOfFirstCard, indexOfLastCard)
    : filteredCampaigns;

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

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
                    setCurrentPage(1);
                  }}
                />
              </SearchWrapper>

              <CategorySelect
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  setCurrentPage(1);
                }}
              >
                <option value="">All Category</option>
                <option value="Health & Wellness">Health & Wellness</option>
                <option value="Education & Schools">Education & Schools</option>
                <option value="Disaster Relief">Disaster Relief</option>
                <option value="Community Development">
                  Community Development
                </option>
              </CategorySelect>
            </ExploreTopBar>

            <ExploreDividerLine />
          </>
        )}

        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

        <CampaignGrid $mode={isExplorePage ? "grid" : "scroll"}>
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <CampaignCard key={i}>
                  <Skeleton height={200} />
                  <div style={{ padding: "18px 20px" }}>
                    <Skeleton height={20} width="60%" />
                    <Skeleton height={15} width="90%" style={{ marginTop: 10 }} />
                    <Skeleton height={15} width="80%" />
                    <Skeleton height={30} width="100%" style={{ marginTop: 15 }} />
                  </div>
                </CampaignCard>
              ))
            : currentCards?.map((item) => {
                const goal = Number(item.totalCampaignGoalAmount) || 0;
                const raised = Number(item.amountRaised) || 0;
                const progress =
                  goal > 0
                    ? Math.min(Math.round((raised / goal) * 100), 100)
                    : 0;

                let progressColor = "#ff4d4f";
                if (progress >= 40 && progress < 100) progressColor = "#f8d34a";
                if (progress === 100) progressColor = "#4CAF50";

                return (
                  <CampaignCard key={item._id} $mode={isExplorePage ? "grid" : "scroll"}>
                    <CampaignImage>
                      <img
                        src={item.campaignCoverImageOrVideo?.imageUrl}
                        alt={item.campaignTitle}
                      />

                      <div className="bookmark" onClick={() => handleSave(item._id)}>
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
                        <p className="daysLeft">{item.durationDays} days left</p>
                      </div>

                     <div className="text_holder">
                         <h3>{item.campaignTitle}</h3>
                      <p>{item.campaignDescription}</p>
                     </div>

                      <ProgressWrapper>
                        <span>
                          <strong>Goal:</strong>
                          <p className="money"> ₦{goal.toLocaleString()}</p>
                        </span>
                        <span>
                          <strong>Raised:</strong>
                          <p className="money">₦{raised.toLocaleString()}</p>
                        </span>
                      </ProgressWrapper>

                      <ProgressRow>
                        <ProgressBar $progress={progress} $color={progressColor} />
                        <ProgressPercent>{progress}%</ProgressPercent>
                      </ProgressRow>
                    </CampaignContent>

                    <DonateButton onClick={() => nav(`/campaign_details/${item._id}`)}>
                      Donate Now
                    </DonateButton>
                  </CampaignCard>
                );
              })}
        </CampaignGrid>

        {isExplorePage && totalPages > 1 && (
  <PaginationWrapper>
    <ArrowButton onClick={handlePrev} disabled={currentPage === 1}>
      ‹
    </ArrowButton>

    {[...Array(totalPages)].map((_, index) => (
      <PageButton
        key={index}
        $active={currentPage === index + 1}
        onClick={() => handlePageChange(index + 1)}
      >
        {index + 1}
      </PageButton>
    ))}

    <ArrowButton onClick={handleNext} disabled={currentPage === totalPages}>
      ›
    </ArrowButton>
  </PaginationWrapper>
)}

      </Container>

      {isExplorePage && <Footer />}
    </>
  );
};

export default CampaignData;

