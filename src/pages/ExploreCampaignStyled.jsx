import styled from "styled-components";

export const ExploreCampaignSection = styled.section`
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
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
  @media (max-width: 768px) {
    width: 95%;
    margin-top: 2rem;
    justify-content: center;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  width: 512px;
  @media (max-width: 768px) {
    width: 100%;
  }

  .search-icon {
    position: absolute;
    top: 50%;
    left: 12px;
    transform: translateY(-50%);
    font-size: 1.2rem;
    color: #777;
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
`;

export const ExploreDividerLine = styled.hr`
  width: 100%;
  height: 1px;
  background-color: #dfdfdf;
  border: none;
  margin: 3rem 0;
`;
