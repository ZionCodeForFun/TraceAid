import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 4rem 8%;
  background-color: #ffffff;

  @media (max-width: 480px) {
    padding: 2.8rem 0;
  }
`;

export const ExploreHeader = styled.div`
  text-align: center;
  margin-top: 5rem;

  h1 {
    font-size: 2.5rem;
    font-weight: 800;
    color: #000000;
    margin-bottom: 0.8rem;
  }

  p {
    font-size: 1rem;
    font-weight: bold;
    color: #000000;
    max-width: 400px;
    margin: 0 auto;
    line-height: 1.6;
  }

  @media (max-width: 480px) {
    margin-top: 3rem;

    h1 {
      font-size: 1.9rem;
      line-height: 1.2;
    }

    p {
      font-size: 0.9rem;
      max-width: 90%;
      line-height: 1.45rem;
    }
  }
`;

export const ExploreTopBar = styled.div`
  width: 90%;
  margin: 2.5rem auto 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.2rem;
  margin-top: 5rem;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    width: 100%;
    margin-top: 2rem;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  width: 512px;

  .search-icon {
    position: absolute;
    top: 50%;
    left: 12px;
    transform: translateY(-50%);
    font-size: 1.2rem;
    color: #777;
  }

  @media (max-width: 480px) {
    width: 90%;

    .search-icon {
      font-size: 1.1rem;
      left: 14px;
    }
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 45px;
  padding: 0 1rem 0 2.8rem;
  border: 1px solid #efefef;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  background-color: #ffffff;

  &:focus {
    border-color: #333333;
  }

  @media (max-width: 480px) {
    height: 48px;
    font-size: 0.95rem;
    border-radius: 10px;
  }
`;

export const CategorySelect = styled.select`
  width: 220px;
  height: 45px;
  padding: 0.8rem 1rem;
  border: 1px solid #efefef;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  background-color: #ffffff;
  cursor: pointer;

  &:focus {
    border-color: #efefef;
  }

  @media (max-width: 480px) {
    width: 90%;
    height: 48px;
    font-size: 0.95rem;
    border-radius: 10px;
  }
`;

export const ExploreDividerLine = styled.hr`
  width: 100%;
  height: 1px;
  background-color: #dfdfdf;
  border: none;
  margin: 3rem 0;
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

  ${({ $mode }) =>
    $mode === "scroll" &&
    css`
      @media (max-width: 480px) {
        display: flex;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        gap: 1.2rem;
        padding: 0 1rem 1rem;
        scroll-behavior: smooth;
        -webkit-overflow-scrolling: touch;

        &::-webkit-scrollbar {
          display: none;
        }
      }
    `}
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
  height: max-content;
  max-height: 600px;

  ${({ $mode }) =>
    $mode === "scroll" &&
    css`
      @media (max-width: 480px) {
        flex: 0 0 100%;
        scroll-snap-align: center;
        height: auto;
        display: flex;
        flex-direction: column;
      }
    `}
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
    cursor: pointer;
  }
`;

export const CampaignContent = styled.div`
  padding: 1.2rem;
  flex: 1;
  display: flex;
  flex-direction: column;

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
  .text_holder {
    height: 5rem;
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
    width: ${({ $progress }) =>
      typeof $progress === "number" && !isNaN($progress)
        ? `${$progress}%`
        : "0%"};
    height: 100%;
    background: ${({ $color }) => $color || "#f8d34a"};
    transition: width 0.4s ease, background 0.3s ease;
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
  flex-shrink: 0;

  &:hover {
    background: #c1e86e;
    color: #1a1a1a;
  }

  @media (max-width: 480px) {
    width: 92%;
    padding: 0.95rem;
    font-size: 0.95rem;
    margin-top: auto;
  }
`;

export const SeeMoreWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export const SeeMoreButton = styled.button`
  background: #ffffff;
  color: #333333;
  padding: 0.7rem 2rem;
  border: 2px solid #617437;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: #c1e86e;
    color: #1a1a1a;
  }
`;
