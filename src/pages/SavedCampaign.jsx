import React from "react";
import styled from "styled-components";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


import HeaderNav from "./HeaderNav";
import SavedMappedCampaign from "./SavedMappedCampaign";

const MySavedCampaigns = () => {
  const nav = useNavigate();

  return (
    <>
      <HeaderNav />

      <SavedContainer>
        <GoBack onClick={() => nav(-1)}>
          <IoArrowBack size={18} />
          <span>Go Back</span>
        </GoBack>

        <Heading>Saved Campaigns</Heading>
        <SubText>
          Your saved campaigns are waiting for your support. Come back anytime to
          make a difference.
        </SubText>


        <SavedMappedCampaign />

      </SavedContainer>

    </>
  );
};

export default MySavedCampaigns;

// const SavedContainer = styled.div`
//   width: 100%;
//   padding: 5rem 8%;
//   margin-top: 3rem;
// `;

// const GoBack = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 7px;
//   font-size: 0.95rem;
//   cursor: pointer;
//   color: #444;
//   margin-bottom: 2rem;

//   span {
//     margin-top: 2px;
//   }

//   &:hover {
//     color: #000;
//   }
// `;

// const Heading = styled.h2`
//   font-size: 1.2rem;
//   font-weight: 600;
//   color: #000000;
//   margin-top: 5rem;
// `;

// const SubText = styled.p`
//   color: #6a6a6a;
//   font-size: 0.8rem;
//   margin-top: 0.5rem;
//   color: #000000;
// `;










 const SavedContainer = styled.div`
  width: 100%;
  padding: clamp(2rem, 5vw, 5rem) clamp(3%, 8vw, 8%);
  margin-top: clamp(1.5rem, 3vw, 3rem);
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 3vw, 3rem); /* Fluid spacing between child elements */
`;

 const GoBack = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(5px, 1vw, 7px);
  font-size: clamp(0.8rem, 1vw, 0.95rem);
  cursor: pointer;
  color: #444;
  margin-bottom: clamp(1rem, 2vw, 2rem);

  span {
    margin-top: 2px;
  }

  &:hover {
    color: #000;
  }
`;

 const Heading = styled.h2`
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: 600;
  color: #000000;
  margin-top: clamp(3rem, 5vw, 5rem);
`;

 const SubText = styled.p`
  color: #000000;
  font-size: clamp(0.7rem, 1vw, 0.8rem);
  margin-top: clamp(0.25rem, 0.5vw, 0.5rem);
`;
