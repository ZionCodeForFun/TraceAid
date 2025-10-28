import React from "react";
import HeaderNav from "./HeaderNav";
import Footer from "./Footer.jsx";
import {
  AboutPageSection,
  AboutIntro,
  VisionMissionSection,
  VisionMissionWrapper,
  VisionMissionText,
  VisionMissionImage,
  CoreValuesSection,
  CoreValuesHeader,
  ValuesGrid,
  ValueCard,
  WhyExistSection,
} from "./AboutPageStyled.jsx";

import AboutPicture from '../assets/AboutImg.jpg'
import backgroundImage from "../assets/Frame44.png";

import { MdOutlineVerifiedUser } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { LiaConnectdevelop } from "react-icons/lia";


const AboutPage = () => {
  return (
    <AboutPageSection>
      <HeaderNav />

      <AboutIntro>
        <h1>About TraceAid</h1>
        <p>
          Building a future where every donation creates visible, verifiable
          impact through transparancy and trust.
        </p>
      </AboutIntro>

     <VisionMissionSection>
        <VisionMissionWrapper>
          <VisionMissionText>
            <h2>Our Vision & Mission</h2>

            <div className="vision">
              <h3>Vision</h3>
              <p>
                Empowering donors with transparency, every contribution tells a
                story. Fundraisers showcase genuine impact, building trust and
                community. Together, we make a difference, clearly and
                effectively.
              </p>
            </div>

            <div className="mission">
              <h3>Mission</h3>
              <p>
                Revolutionizing charitable giving through transparency,
                accountability, and verified impact.
              </p>
            </div>
          </VisionMissionText>

          <VisionMissionImage>
            <img src={AboutPicture} alt="Plant growing on coins" />
          </VisionMissionImage>
        </VisionMissionWrapper>
      </VisionMissionSection>

 <CoreValuesSection background={backgroundImage}>
        <CoreValuesHeader>
          <h2>Our Core Values</h2>
          <p>The principles that guide everything we do</p>
        </CoreValuesHeader>

        <ValuesGrid>
          <ValueCard>
            <div className="icon orange">
              <MdOutlineVerifiedUser size={35} />
            </div>
            <h3>Transparency</h3>
            <p>
              Every transaction, every milestone, every impact is visible and
              verifiable by all stakeholders.
            </p>
          </ValueCard>

          <ValueCard>
            <div className="icon pink">
              <FaUserFriends size={35} />
            </div>
            <h3>Accountability</h3>
            <p>
              Fundraisers are held to the highest standards with verification
              and evidence requirements.
            </p>
          </ValueCard>

          <ValueCard>
            <div className="icon green">
              <CiHeart size={35} />
            </div>
            <h3>Trust</h3>
            <p>
              Building and maintaining trust between donors and fundraisers is
              at the heart of our platform.
            </p>
          </ValueCard>

          <ValueCard>
            <div className="icon blue">
              <LiaConnectdevelop size={35} />
            </div>
            <h3>Innovation</h3>
            <p>
              Continuously improving our technology to serve donors and
              fundraisers better.
            </p>
          </ValueCard>
        </ValuesGrid>
      </CoreValuesSection>

      <WhyExistSection>
        <h2>Why We Exist</h2>
        <h3>
          TraceAid was born from a simple question: "Where did my donation
          really go?"
        </h3>
        <p>
          In 2025, our founders witnessed firsthand how the lack of transparency
          in charitable giving was creating a trust gap between donors and
          fundraisers. Good-hearted people wanted to help, and genuine causes
          needed support, but uncertainty about how funds would be used held
          many back from contributing.
        </p>

        <p>
          We realized that technology could bridge this gap. By combining
          milestone-based funding, KYC verification, and real-time progress
          tracking, we could create a platform where trust isn’t just promised —
          it’s built into every transaction.
        </p>

        <p>
          Today, TraceAid serves thousands of donors and fundraisers across
          Nigeria, processing millions in transparent donations. Every campaign
          on our platform is verified, every milestone is documented, and every
          impact is real.
        </p>
      </WhyExistSection>


      <Footer />
    </AboutPageSection>
  );
};

export default AboutPage;
