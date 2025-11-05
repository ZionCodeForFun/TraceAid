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
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 960px) {
    padding: 3.5rem 6%;
    gap: 2rem;
  }
`;

export const CampaignLeft = styled.div`
  flex: 1.2;
  min-width: 320px;
  max-width: 840px;

  h2 {
    font-size: 1.8rem;
    font-weight: 800;
    line-height: 1.25;
    margin-bottom: 1rem;
    color: #1f1f1f;
    word-wrap: break-word;
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
    border-radius: 10px;
    object-fit: cover;
    max-height: 520px;
  }
`;

export const CampaignRight = styled.div`
  flex: 1;
  min-width: 320px;
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid #ececec;

  @media (max-width: 960px) {
    padding: 1.5rem;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 800;
    color: #1f1f1f;
    margin-bottom: 1.2rem;
  }

  h4 {
    margin-top: 1.5rem;
    font-size: 1rem;
    font-weight: 700;
    color: #111;
  }
`;

export const DonationBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  .donation-summary {
    background: #fafafa;
    padding: 1.2rem;
    border-radius: 12px;
    border: 1px solid #ececec;
  }

  .goal-info {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .goal-info p {
    width: 48%;
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
    margin-top: 0.5rem;
    color: #666;
  }

  .donation-actions {
    background: #f9f9f9;
    padding: 1.4rem;
    border-radius: 12px;
    border: 1px solid #ececec;
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background: #e9ece7;
  border-radius: 999px;
  overflow: hidden;
  margin: 1rem 0 0.5rem;

  .progress {
    height: 100%;
    background: linear-gradient(90deg, #5d7a52, #4c6644);
    border-radius: 999px;
    transition: width 0.35s ease;
  }
`;

export const AmountButtons = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 1rem;

  .amount-box {
    border: 1.5px solid #cfd1d0;
    border-radius: 10px;
    background: #fff;
    text-align: center;
    padding: 1.4rem 0;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    p {
      font-size: 0.9rem;
      color: #000;
      margin-bottom: 0.35rem;
      font-weight: 600;
    }

    h3 {
      font-size: 1.2rem;
      font-weight: 800;
      color: #000;
    }

    &:hover {
      border-color: #1a1a1a;
    }

    &.active {
      border: 2px solid #1a1a1a;
      background: #fff;
      transform: scale(1.02);
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const DonationForm = styled.div`
  background: #f9f9f9;
  padding: 1.2rem;
  border-radius: 10px;
  margin-top: 1rem;

  h4 {
    margin-top: 0.6rem;
    font-size: 0.95rem;
    color: #111;
  }

  input[type="text"],
  input[type="email"] {
    width: 100%;
    padding: 0.65rem;
    margin-top: 0.45rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 0.95rem;
  }

  label {
    display: flex;
    align-items: center;
    gap: 0.45rem;
    margin: 0.6rem 0;
    font-size: 0.9rem;
    color: #444;
  }

  button {
    width: 100%;
    margin-top: 0.9rem;
    background: #222;
    color: #fff;
    padding: 0.9rem;
    border: none;
    border-radius: 8px;
    font-weight: 700;
    cursor: pointer;
    transition: 0.25s ease;

    &:hover {
      background: #000;
    }
  }
`;

export const DonorSection = styled.div`
  margin-top: 0.2rem;
  background: #f9fdf8;
  padding: 1.2rem;
  border-radius: 12px;
  border: 1px solid #e0e0e0;

  h4 {
    font-size: 1rem;
    font-weight: 800;
    margin-bottom: 0.9rem;
    color: #222;
  }

  .view-all {
    width: 100%;
    border: 1px solid #cfd1d0;
    background: #fff;
    padding: 0.75rem;
    margin-top: 0.8rem;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 700;
    transition: 0.2s ease;

    &:hover {
      background: #eef1ed;
    }
  }
`;

export const DonorItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  background: #fff;
  border: 1px solid #eef0ee;
  border-radius: 10px;
  padding: 0.8rem;
  margin-bottom: 0.8rem;
  transition: 0.2s ease;

  &:hover {
    background: #f5f7f5;
  }

  .icon {
    font-size: 1.2rem;
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
    font-weight: 700;
    color: #333;
    display: block;
  }

  p {
    font-size: 0.9rem;
    color: #666;
  }
`;

export const MilestoneContainer = styled.div`
  width: 100%;
  background: #fff;
  margin-top: 1.6rem;

  .tabs {
    display: flex;
    gap: 0.6rem;
    align-items: center;
    width: 100%;
    overflow-x: auto;
    padding-bottom: 0.4rem;
  }

  @media (max-width: 768px) {
    .tabs {
      gap: 0.5rem;
    }
  }
`;

export const TabHeader = styled.button`
  appearance: none;
  border: 1px solid ${({ active }) => (active ? "#4c6644" : "#dcdedd")};
  background: ${({ active }) => (active ? "#4c6644" : "#fff")};
  color: ${({ active }) => (active ? "#fff" : "#1f1f1f")};
  font-weight: 800;
  padding: 0.6rem 1rem;
  border-radius: 999px;
  cursor: pointer;
  transition: 0.25s ease;
  white-space: nowrap;

  &:hover {
    background: ${({ active }) => (active ? "#445c3d" : "#f5f7f5")};
    border-color: #4c6644;
  }
`;

export const MilestoneList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.1rem;
`;

export const MilestoneItem = styled.div`
  display: flex;
  align-items: flex-start;
  background: #fafafa;
  border-radius: 12px;
  padding: 1rem;
  gap: 0.9rem;
  border: 1px solid #ececec;

  .number {
    min-width: 38px;
    min-height: 38px;
    border-radius: 50%;
    border: 2px solid #4c6644;  
    background: #ffffff;
    color: #4c6644;
    font-weight: 800;
    font-size: 0.95rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content {
    flex: 1;
    min-width: 0;

    h4 {
      font-size: 1rem;
      font-weight: 800;
      margin-bottom: 0.35rem;
      color: #1f1f1f;
    }

    .desc {
      color: #4a4a4a;
      margin-bottom: 0.5rem;
      line-height: 1.55;
    }

    p {
      font-size: 0.92rem;
      color: #3b3b3b;
      margin-bottom: 0.15rem;
    }
  }
`;
