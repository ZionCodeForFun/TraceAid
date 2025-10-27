import styled from "styled-components";

export const CampaignDetailSection = styled.section`
  width: 100%;
  background-color: #ffffff;
`;

export const CampaignTop = styled.div`
  padding: 5rem 8%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 4rem;
  flex-wrap: wrap;
`;

export const CampaignLeft = styled.div`
  flex: 1;
  min-width: 320px;

  h2 {
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #333333;
    max-width: 500px;
  }

  .org {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin-bottom: 1.5rem;

    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      object-fit: cover;
    }

    span {
      font-weight: 600;
      color: #333;
    }
  }

  .campaign-image {
    width: 100%;
    border-radius: 8px;
    object-fit: cover;
  }
`;

export const CampaignRight = styled.div`
  flex: 1;
  min-width: 320px;
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  /* box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05); */

  h3 {
    font-size: 1.3rem;
    font-weight: 700;
    color: #333333;
    margin-bottom: 1.2rem;
  }

  h4 {
    margin-top: 1.5rem;
    font-size: 1rem;
    font-weight: 600;
  }
`;

export const DonationBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem; 

  .donation-summary {
    background: #fafafa;
    padding: 1.2rem;
    border-radius: 10px;
    border: 1px solid #ececec;
  }

  .goal-info {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    /* margin-bottom: 0.8rem;
    color: #333;
    background: transparent;  */
  }

  .goal-info p {
    width: 50%;
    margin: 0;
    padding: 0;
    font-size: 0.95rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .goal-info p:nth-child(2) {
    align-items: flex-end;
  }

  .goal-info p strong {
    display: block;
    font-size: 0.8rem;
    font-weight: 600;
    color: #666;
  }

  small {
    display: block;
    margin-top: 0.3rem;
    color: #666;
  }

  .donation-actions {
    background: #f9f9f9;
    padding: 1.5rem;
    border-radius: 10px;
    border: 1px solid #ececec;
  }
`;

// export const DonationBox = styled.div`
//   .goal-info {
//     display: flex;
//     justify-content: space-between;
//     margin-bottom: 0.8rem;
//     color: #333;
//     background: #f8f9fa;
//   }

//   small {
//     display: block;
//     margin-bottom: 1rem;
//     color: #666;
//   }
// `;

export const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 0.5rem;
  margin-top: 1.5rem;

  .progress {
    height: 100%;
    background: #4caf50;
    border-radius: 5px;
    transition: width 0.3s ease;
  }
`;

export const AmountButtons = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;
  margin-top: 1.5rem;

  .amount-box {
    border: 1.5px solid #cfd1d0;
    border-radius: 8px;
    background: #fff;
    text-align: center;
    padding: 1.8rem 0;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    p {
      font-size: 0.9rem;
      color: #000;
      margin-bottom: 0.4rem;
      font-weight: 500;
    }

    h3 {
      font-size: 1.3rem;
      font-weight: 700;
      color: #000;
    }

    &:hover {
      border-color: #000;
    }

    &.active {
      border: 2px solid #000;
      transform: scale(1.03);
      background: #fff;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const DonationForm = styled.div`
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 1.8rem;

  h4 {
    margin-top: 0.8rem;
    font-size: 0.95rem;
    color: #111;
  }

  input[type="text"],
  input[type="email"] {
    width: 100%;
    padding: 0.6rem;
    margin-top: 0.4rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 0.95rem;
  }

  label {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    margin: 0.6rem 0;
    font-size: 0.85rem;
    color: #444;
  }

  button {
    width: 100%;
    margin-top: 1rem;
    background: #222;
    color: #fff;
    padding: 0.9rem;
    border: none;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
  }
`;

export const DonorSection = styled.div`
  margin-top: 2rem;
  background: #f9fdf8;
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px solid #e0e0e0;

  h4 {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #222;
  }

  .view-all {
    width: 100%;
    border: 1px solid #ccc;
    background: #fff;
    padding: 0.7rem;
    margin-top: 1rem;
    border-radius: 6px;
    cursor: pointer;
  }
`;

export const DonorItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  background: #fff;
  border: 1px solid #eef0ee;
  border-radius: 8px;
  padding: 0.8rem;
  margin-bottom: 0.8rem;

  .icon {
    font-size: 1.3rem;
    background: #e3f4e3;
    color: #4c6644;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    font-weight: 600;
    color: #333;
  }

  p {
    font-size: 0.9rem;
    color: #666;
  }
`;

export const MilestoneContainer = styled.div`
  width: 100%;
  background: #fff;
  margin-top: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  .tabs {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #e0e0e0;
    text-align: center;
  }

  @media (max-width: 768px) {
    .tabs {
      flex-direction: column;
    }
  }
`;

export const TabHeader = styled.div`
  flex: 1; 
  padding: 1rem 0;
  font-weight: 600;
  color: ${({ active }) => (active ? "#fff" : "#333")};
  background: ${({ active }) => (active ? "#4c6644" : "transparent")};
  border-radius: 6px 6px 0 0;
  cursor: pointer;
  transition: 0.3s ease;
  text-align: center;
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis;

  &:hover {
    background: ${({ active }) => (active ? "#4c6644" : "#f2f2f2")};
  }
`;

export const MilestoneList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
  padding: 0 1.5rem;
`;

export const MilestoneItem = styled.div`
  display: flex;
  align-items: flex-start;
  background: #f9f9f9;
  border-radius: 8px;
  padding: 1rem;
  gap: 1rem;
  border-left: 4px solid #4c6644;

  .number {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: #4c6644;
    color: #fff;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content {
    flex: 1;

    h4 {
      font-size: 1rem;
      font-weight: 700;
      margin-bottom: 0.4rem;
    }

    .desc {
      color: #555;
      margin-bottom: 0.6rem;
      line-height: 1.5;
    }

    p {
      font-size: 0.9rem;
      color: #444;
      margin-bottom: 0.2rem;
    }
  }
`;





// import styled from "styled-components";

// export const CampaignDetailSection = styled.section`
//   width: 100%;
//   background-color: #fafafa;
// `;

// export const CampaignTop = styled.div`
//   padding: 5rem 8%;
//   display: flex;
//   justify-content: space-between;
//   align-items: flex-start;
//   gap: 4rem;
//   flex-wrap: wrap;

//   @media (max-width: 768px) {
//     flex-direction: column;
//   }
// `;

// export const CampaignLeft = styled.div`
//   flex: 1;
//   min-width: 320px;

//   h2 {
//     font-size: 1.6rem;
//     font-weight: 700;
//     margin-bottom: 1rem;
//     color: #1a1a1a;
//     max-width: 500px;
//   }

//   .org {
//     display: flex;
//     align-items: center;
//     gap: 0.6rem;
//     margin-bottom: 1.5rem;

//     img {
//       width: 30px;
//       height: 30px;
//       border-radius: 50%;
//       object-fit: cover;
//     }

//     span {
//       font-weight: 600;
//       color: #333;
//     }
//   }

//   .campaign-image {
//     width: 100%;
//     border-radius: 8px;
//     object-fit: cover;
//   }
// `;

// export const CampaignRight = styled.div`
//   flex: 1;
//   min-width: 320px;
//   background: #fff;
//   padding: 2rem;
//   border-radius: 10px;
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

//   @media (max-width: 768px) {
//     padding: 1.5rem;
//   }

//   h3 {
//     font-size: 1.3rem;
//     font-weight: 700;
//     color: #111;
//     margin-bottom: 1.2rem;
//   }

//   h4 {
//     margin-top: 1.5rem;
//     font-size: 1rem;
//     font-weight: 600;
//   }
// `;

// export const DonationBox = styled.div`
//   .goal-info {
//     display: flex;
//     justify-content: space-between;
//     margin-bottom: 0.8rem;
//     color: #333;
//   }

//   small {
//     display: block;
//     margin-bottom: 1rem;
//     color: #666;
//   }
// `;

// export const ProgressBar = styled.div`
//   width: 100%;
//   height: 10px;
//   background: #e0e0e0;
//   border-radius: 5px;
//   overflow: hidden;
//   margin-bottom: 0.5rem;

//   .progress {
//     height: 100%;
//     background: #4caf50;
//     border-radius: 5px;
//     transition: width 0.3s ease;
//   }
// `;

// export const AmountButtons = styled.div`
//   width: 100%;
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 1.2rem;
//   margin-top: 1.5rem;

//   .amount-box {
//     border: 1.5px solid #cfd1d0;
//     border-radius: 8px;
//     background: #fff;
//     text-align: center;
//     padding: 1.8rem 0;
//     cursor: pointer;
//     transition: all 0.2s ease-in-out;

//     p {
//       font-size: 0.9rem;
//       color: #000;
//       margin-bottom: 0.4rem;
//       font-weight: 500;
//     }

//     h3 {
//       font-size: 1.3rem;
//       font-weight: 700;
//       color: #000;
//     }

//     &:hover {
//       border-color: #000;
//     }

//     &.active {
//       border: 2px solid #000;
//       background: #fff; 
//     }
//   }

//   @media (max-width: 1024px) {
//     grid-template-columns: repeat(3, 1fr);
//     gap: 1rem;
//   }

//   @media (max-width: 768px) {
//     grid-template-columns: repeat(2, 1fr);
//     gap: 1rem;
//   }

//   @media (max-width: 480px) {
//     grid-template-columns: 1fr;
//   }
// `;


// export const DonationForm = styled.div`
//   background: #f9f9f9;
//   padding: 1.5rem;
//   border-radius: 8px;
//   margin-top: 1.8rem;

//   h4 {
//     margin-top: 0.8rem;
//     font-size: 0.95rem;
//     color: #111;
//   }

//   input[type="text"],
//   input[type="email"] {
//     width: 100%;
//     padding: 0.6rem;
//     margin-top: 0.4rem;
//     border: 1px solid #ccc;
//     border-radius: 5px;
//     font-size: 0.95rem;
//   }

//   label {
//     display: flex;
//     align-items: center;
//     gap: 0.4rem;
//     margin: 0.6rem 0;
//     font-size: 0.85rem;
//     color: #444;
//   }

//   button {
//     width: 100%;
//     margin-top: 1rem;
//     background: #222;
//     color: #fff;
//     padding: 0.9rem;
//     border: none;
//     border-radius: 6px;
//     font-weight: 600;
//     cursor: pointer;
//     transition: 0.3s ease;

//     &:hover {
//       background: #000;
//     }
//   }
// `;

// export const DonorSection = styled.div`
//   margin-top: 2rem;
//   background: #f9fdf8;
//   padding: 1.5rem;
//   border-radius: 10px;
//   border: 1px solid #e0e0e0;

//   h4 {
//     font-size: 1rem;
//     font-weight: 700;
//     margin-bottom: 1rem;
//     color: #222;
//   }

//   .view-all {
//     width: 100%;
//     border: 1px solid #ccc;
//     background: #fff;
//     padding: 0.7rem;
//     margin-top: 1rem;
//     border-radius: 6px;
//     cursor: pointer;
//     transition: 0.3s ease;
//     font-weight: 600;

//     &:hover {
//       background: #e9e9e9;
//     }
//   }
// `;

// export const DonorItem = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 0.7rem;
//   background: #fff;
//   border: 1px solid #eef0ee;
//   border-radius: 8px;
//   padding: 0.8rem;
//   margin-bottom: 0.8rem;
//   transition: 0.2s ease;

//   &:hover {
//     background: #f5f7f5;
//   }

//   .icon {
//     font-size: 1.3rem;
//     background: #e3f4e3;
//     color: #4c6644;
//     border-radius: 50%;
//     width: 32px;
//     height: 32px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }

//   span {
//     font-weight: 600;
//     color: #333;
//     display: block;
//   }

//   p {
//     font-size: 0.9rem;
//     color: #666;
//   }
// `;

// export const MilestoneContainer = styled.div`
//   padding: 4rem 8%;
//   background: #fff;

//   .tabs {
//     display: flex;
//     border-bottom: 2px solid #e0e0e0;
//     margin-bottom: 2rem;
//   }
// `;

// export const TabHeader = styled.div`
//   padding: 1rem 2rem;
//   font-weight: 600;
//   color: ${({ active }) => (active ? "#fff" : "#333")};
//   background: ${({ active }) => (active ? "#4c6644" : "transparent")};
//   border-radius: 6px 6px 0 0;
//   cursor: pointer;
//   transition: 0.3s ease;

//   &:hover {
//     background: ${({ active }) => (active ? "#4c6644" : "#f4f4f4")};
//   }
// `;

// export const MilestoneList = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 1.5rem;
// `;

// export const MilestoneItem = styled.div`
//   display: flex;
//   align-items: flex-start;
//   background: #f9f9f9;
//   border-radius: 8px;
//   padding: 1rem;
//   gap: 1rem;
//   border-left: 4px solid #4c6644;

//   .number {
//     width: 35px;
//     height: 35px;
//     border-radius: 50%;
//     background: #4c6644;
//     color: #fff;
//     font-weight: 700;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }

//   .content {
//     flex: 1;

//     h4 {
//       font-size: 1rem;
//       font-weight: 700;
//       margin-bottom: 0.4rem;
//     }

//     .desc {
//       color: #555;
//       margin-bottom: 0.6rem;
//       line-height: 1.5;
//     }

//     p {
//       font-size: 0.9rem;
//       color: #444;
//       margin-bottom: 0.2rem;
//     }
//   }
// `;

