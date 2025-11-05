import React, { useEffect, useMemo, useState } from "react";
import { RiBookmarkLine, RiSearchLine } from "react-icons/ri";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import HeaderNav from "./HeaderNav";
import Footer from "./Footer";

import {
  Container,
  Header,
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

const CampaignData = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  const nav = useNavigate();
  const location = useLocation();
  const isExplorePage = location.pathname === "/campaign_data";

  const VITE_campaignBaseUrl = import.meta.env.VITE_campaignBaseUrl;

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

  if (loading) return <p style={{ textAlign: "center" }}>Loading campaigns...</p>;
  if (error) return <p style={{ color: "red", textAlign: "center" }}>{error}</p>;

  return (
    <>
      {isExplorePage && <HeaderNav />}

      <Container>
        {isExplorePage ? (
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
        ) : (
          <Header>
            <h1>Real Stories. Real Change.</h1>
            <p>See the impact your giving creates in real communities.</p>
          </Header>
        )}

        {filteredCampaigns.length === 0 ? (
          <p style={{ textAlign: "center" }}>No campaigns found</p>
        ) : (
          <>
            <CampaignGrid>
              {currentCards.map((item) => {
                const goal = item.totalCampaignGoalAmount || 0;
                const raised = item.amountRaised || 0;
                const progress = item.progressPercentage || 0;

                return (
                  <CampaignCard
                    key={item._id}
                    onClick={() => nav(`/campaign_details/${item._id}`)}
                    style={{ cursor: "pointer" }}
                  >
                    <CampaignImage>
                      <img
                        src={item.campaignCoverImageOrVideo?.imageUrl}
                        alt={item.campaignTitle}
                      />
                      <div className="bookmark">
                        <RiBookmarkLine />
                      </div>
                    </CampaignImage>

                    <CampaignContent>
                      <div className="topRow">
                        <h4>{item.campaignCategory}</h4>
                        <p className="daysLeft">{item.durationDays} days left</p>
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

                    <DonateButton>Donate Now</DonateButton>
                  </CampaignCard>
                );
              })}
            </CampaignGrid>

            {currentCards.length < filteredCampaigns.length && (
              <SeeMoreWrapper>
                <SeeMoreButton onClick={handleLoadMore}>
                  See More
                </SeeMoreButton>
              </SeeMoreWrapper>
            )}
          </>
        )}
      </Container>

      {isExplorePage && <Footer />}
    </>
  );
};

export default CampaignData;
