import React from 'react';
import { RiSearchLine } from "react-icons/ri";
import HeaderNav from './HeaderNav';
import Footer from './Footer.jsx';
import {
  ExploreCampaignSection,
  ExploreHeader,
  ExploreTopBar,
  SearchWrapper,
  SearchInput,
  CategorySelect,
  ExploreDividerLine,
} from './ExploreCampaignStyled.jsx';

import ExploreData from "./ExploreData.jsx";

const ExploreCampaign = () => {
  return (
    <ExploreCampaignSection>
      <HeaderNav />

      <ExploreHeader>
        <h1>Explore Campaign</h1>
        <p>
          Discover powerful causes that need your support and make a real difference with every donation.
        </p>
      </ExploreHeader>

      <ExploreTopBar>
        <SearchWrapper>
          <RiSearchLine className="search-icon" />
          <SearchInput type="text" placeholder="Search projects" />
        </SearchWrapper>

        <CategorySelect>
          <option value="">All Categories</option>
          <option value="education">Education</option>
          <option value="community">Community</option>
          <option value="health">Health</option>
          <option value="food">Food</option>
        </CategorySelect>
      </ExploreTopBar>

      <ExploreDividerLine />

      <ExploreData />

      <Footer />
    </ExploreCampaignSection>
  );
};

export default ExploreCampaign;
