import React from "react";
import { IoSearch } from "react-icons/io5";
import { LuShieldCheck, LuMagnet } from "react-icons/lu";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { TbHeartHandshake } from "react-icons/tb";

import {
  LandingContainer,
  HeroSection,
  HeroOverlay,
  HeroContent,
  HeroIcons,
  Header,
  TransparencySection,
  TransparencyCardGrid,
  TransparencyCard,
  TraceaidSection,
  TraceaidCardGrid,
  TraceaidCard,
  FundraisingSection,
  FundraisingContent,
  FundraisingImage,
  ImageDividerSection,
  JoinUsSection,
  CommunitySection,
  CommunityGrid,
  CommunityContent,
  CommunityStat,
  CommunityButton,
} from "./LandingPageStyled.jsx";


import CampaignData from "./CampaignData.jsx";
import Img1 from "../assets/Rectangle 10.png";
import Img2 from "../assets/Rectangle 11.png";
import Img3 from "../assets/Rectangle 9.png";
import Img4 from "../assets/Rectangle 12.png";
import heroImggg from "../assets/Dashview.png";
import DividerLineImg from "../assets/ToplineImg.png";

import HeartJarIcon from "../assets/Jar.png";
import HandHeartIcon from "../assets/Heart.png";

import ExploreIcon from "../assets/ExploreImg.png";
import DonateIcon from "../assets/DonateImg.png";
import TrackIcon from "../assets/TrackImg.png";
import CelebrateIcon from "../assets/CelebrateImg.png";
import HeaderNav from "./HeaderNav.jsx";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer.jsx";
import { useDispatch, useSelector } from "react-redux";

const LandingPage = () => {
  const nav = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleGetStarted = () => {
    if (user) {
      nav("/campaign_data");
    } else {
      nav("/role_modal");
    }
  };

  return (
    <LandingContainer>
      <HeaderNav />

      <HeroSection>
        <HeroOverlay>
          <HeroContent>
            <h1>
              See the Difference <br /> Your Giving Makes
            </h1>
            <p>
              Know where your support goes and the change it makes through
              trackable milestones.
            </p>
            <button onClick={() => nav("/campaign_data")}>Give a Donation</button>
          </HeroContent>

          <HeroIcons>
            <img
              src={HandHeartIcon}
              alt="Hands Heart Icon"
              className="top-icon"
            />
            <img src={HeartJarIcon} alt="Jar Icon" className="bottom-icon" />
          </HeroIcons>
        </HeroOverlay>
      </HeroSection>

      <Header>
        <h1>Real Stories. Real Change.</h1>
        <p>See the impact your giving creates in real communities.</p>
      </Header>

      <CampaignData />

      <TransparencySection>
        <h2>
          See How We Make <br />
          Giving Transparent
        </h2>
        <p>
          TraceAid bridges the gap between giving and impact — empowering
          fundraisers to build trust and enabling donors to see exactly how
          their support makes a difference.
        </p>

        <TransparencyCardGrid>
          <TransparencyCard>
            <div className="icon-wrap">
              <img src={ExploreIcon} alt="Explore Campaigns" />
            </div>
            <h3>Explore Campaigns</h3>
            <p>
              Discover verified causes in health, education, and community
              growth. Choose a story that matters to you and see milestones turn
              into real, measurable impact.
            </p>
          </TransparencyCard>

          <TransparencyCard>
            <div className="icon-wrap">
              <img src={DonateIcon} alt="Donate Securely" />
            </div>
            <h3>Donate Securely</h3>
            <p>
              Give confidently through TraceAid’s trusted, encrypted payment
              system. Every contribution is transparent and goes directly to
              verified campaigns.
            </p>
          </TransparencyCard>

          <TransparencyCard>
            <div className="icon-wrap">
              <img src={TrackIcon} alt="Track Milestones" />
            </div>
            <h3>Track Milestones</h3>
            <p>
              Follow your donation journey with real-time updates and verified
              progress. See exactly how your support drives change.
            </p>
          </TransparencyCard>

          <TransparencyCard>
            <div className="icon-wrap">
              <img src={CelebrateIcon} alt="Celebrate Change" />
            </div>
            <h3>Celebrate Change</h3>
            <p>
              Witness the transformation your contributions bring — celebrate
              every milestone of change.
            </p>
          </TransparencyCard>
        </TransparencyCardGrid>
      </TransparencySection>

      <TraceaidSection>
        <h2>Why Choose TraceAid For Your Campaign?</h2>

        <TraceaidCardGrid>
          <TraceaidCard>
            <div className="iconfirst">
              <LuShieldCheck size={20} color="#000000" />
            </div>
            <h3>Raise Funds With Trust</h3>
            <p>
              Stand out from the crowd by giving donors real-time proof of your
              impact.
            </p>
          </TraceaidCard>

          <TraceaidCard>
            <div className="iconsecond">
              <IoMdCheckmarkCircleOutline size={20} color="#000000" />
            </div>
            <h3>Simplify Your Campaign</h3>
            <p>
              Launch, manage, and track your campaign effortlessly — all in one
              place.
            </p>
          </TraceaidCard>

          <TraceaidCard>
            <div className="iconthird">
              <LuMagnet size={20} color="#000000" />
            </div>
            <h3>Attract More Donors</h3>
            <p>
              Win donor confidence with transparent milestones and verified
              updates.
            </p>
          </TraceaidCard>

          <TraceaidCard>
            <div className="iconfourth">
              <TbHeartHandshake size={20} color="#000000" />
            </div>
            <h3>Build Lasting Support</h3>
            <p>
              Turn one-time donors into loyal supporters through clear
              accountability.
            </p>
          </TraceaidCard>
        </TraceaidCardGrid>
      </TraceaidSection>

      <FundraisingSection>
        <FundraisingContent>
          <h2>Fundraising Made Effortless</h2>
          <p>
            See, manage, and grow your impact, all from one simple dashboard
            that brings every campaign detail together in one clear view.
          </p>
          <button onClick={handleGetStarted}>Get Started</button>
        </FundraisingContent>

        <FundraisingImage>
          <div className="image-bg">
            <img src={heroImggg} alt="Fundraising Dashboard" />
          </div>
        </FundraisingImage>
      </FundraisingSection>

      <ImageDividerSection>
        <img src={DividerLineImg} alt="Bg Divider" />
      </ImageDividerSection>

      <JoinUsSection>
        <h2>Join Us</h2>
      </JoinUsSection>

      <CommunitySection>
        <CommunityGrid>
          <img src={Img1} alt="Community Image 1" />
          <img src={Img2} alt="Community Image 2" />
          <CommunityContent>
            <h3>Be Part of our Donors and Fundraisers with over</h3>
            <CommunityStat>20,000</CommunityStat>
            <p>People from across Nigeria</p>
            <CommunityButton onClick={handleGetStarted}>
              Get Started
            </CommunityButton>
          </CommunityContent>
          <img src={Img3} alt="Community Image 3" />
          <img src={Img4} alt="Community Image 4" />
        </CommunityGrid>
      </CommunitySection>

      <Footer />
    </LandingContainer>
  );
};

export default LandingPage;


