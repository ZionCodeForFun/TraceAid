import React, { useState } from "react";
import { RiBookmarkLine } from "react-icons/ri";
import ExploreCards from "../global/ExploreCards";
import {
  ExploreCampaignSection,
  CampaignGrid,
  CampaignCard,
  CampaignImage,
  CampaignContent,
  ProgressWrapper,
  ProgressBar,
  ProgressRow,
  ProgressPercent,
  DonateButton,
  PaginationContainer,
} from "./ExploreDataStyled";

const ExploreData = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  const totalPages = Math.ceil(ExploreCards.length / cardsPerPage);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = ExploreCards.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <ExploreCampaignSection>
      <CampaignGrid>
        {currentCards.map((card) => (  
          <CampaignCard key={card.id}>
            <CampaignImage>
              <img src={card.image} alt={card.title} />
              <div className="bookmark">
                <RiBookmarkLine />
              </div>
            </CampaignImage>

            <CampaignContent>
              <div className="topRow">
                <h4>{card.organization}</h4>
                <p className="daysLeft">{card.daysLeft} days left</p>
              </div>

              <h3>{card.title}</h3>
              <p>{card.description}</p>

              <ProgressWrapper>
                <span>
                  <strong>Goal:</strong> {card.goal}
                </span>
                <span>
                  <strong>Raised:</strong> {card.raised}
                </span>
              </ProgressWrapper>

              <ProgressRow>
                <ProgressBar $progress={card.progress} />
                <ProgressPercent>{card.progress}%</ProgressPercent>
              </ProgressRow>
            </CampaignContent>

            <DonateButton>Donate Now</DonateButton>
          </CampaignCard>
        ))}
      </CampaignGrid>

      <PaginationContainer>
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={currentPage === index + 1 ? "active" : ""}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </PaginationContainer>
    </ExploreCampaignSection>
  );
};

export default ExploreData;
