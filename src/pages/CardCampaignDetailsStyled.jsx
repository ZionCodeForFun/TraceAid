import styled from "styled-components";

export const CardWrapper = styled.section`
  width: 100%;
  background: #fff;
  min-height: 100vh;
`;

export const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 3rem;
  padding: 3rem 8%;
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 2.5rem;

  @media (max-width: 960px) {
    flex-direction: column;
    padding: 2rem 5%;
  }
`;

export const CardLeft = styled.div`
  flex: 1.2;

  .back-button {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  color: #333333;
  font-weight: 600;
  font-size: 0.95rem;
  margin-bottom: 1rem;
  transition: color 0.2s ease;

  svg {
    color: #333333;
  }
}
  h2 {
    font-size: 1.8rem;
    font-weight: 800;
    color: #111;
    margin-bottom: 1rem;
  }

  .cover-img {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 1.5rem;
    object-fit: cover;
    max-height: 420px;
  }
`;

export const CardRight = styled.div`
  flex: 0.8;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  max-width: 420px;
  width: 100%;
`;

export const TabContainer = styled.div`
  width: 100%;
  background: #fafafa;
  border-radius: 10px;
  margin-top: 1rem;
  padding: 0;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  align-self: stretch;

  .tab-buttons {
    display: flex;
    align-items: center;
    gap: 12px;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 0.5rem;
    width: 100%;
  }

  .tab-body {
    width: 100%;
    margin-top: 1rem;
    color: #333;

    h4 {
      font-size: 1.1rem;
      font-weight: 700;
      margin-bottom: 0.4rem;
      color: #111;
    }

    p {
      line-height: 1.6;
      color: #444;
      margin-bottom: 0.8rem;
    }

    small {
      color: #777;
      font-size: 0.85rem;
    }
  }

  @media (max-width: 768px) {
    padding: 1rem 1.2rem;
    margin-top: 0.8rem;

    .tab-buttons {
      flex-wrap: wrap;
      justify-content: center;
      gap: 8px;
    }
  }
`;

export const TabButton = styled.button`
  flex: 1;
  border: none;
  background: ${({ active }) => (active ? "#1a1a1a" : "#f8f9fa")};
  color: ${({ active }) => (active ? "#CDED8B" : "#333333")};
  font-weight: 600;
  padding: 1rem 0;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.25s ease;
`;

export const MilestoneBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MilestoneCard = styled.div`
  display: flex;
  align-items: flex-start;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 1rem;
  gap: 1rem;

  .num {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #1a1a1a;
    color: #ffffff;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .info {
    flex: 1;

    h4 {
      font-size: 1rem;
      font-weight: 700;
      margin-bottom: 4px;
      color: #222;
    }

    p {
      font-size: 0.9rem;
      color: #555;
      margin-bottom: 4px;
    }
  }
`;

export const DonorContainer = styled.div`
  background: #f9fafb;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.03);

  h4 {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .view-btn {
    width: 100%;
    margin-top: 0.8rem;
    background: transparent;
    border: 1px solid #ccc;
    border-radius: 6px;
    padding: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.25s ease;

    &:hover {
      background: #efefef;
    }
  }
`;

export const DonorCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.8rem;

  &:last-child {
    border-bottom: none;
  }

  .avatar {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: #dedcf4;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    color: #333;
  }

  .details {
    span {
      font-weight: 600;
      color: #111;
    }

    p {
      color: #666;
      font-size: 0.9rem;
      margin-top: 2px;
    }
  }
`;
