import React from 'react';
import { CiSearch } from "react-icons/ci";
import { FaArrowTrendUp, FaLock} from "react-icons/fa6";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { HiOutlineShare } from "react-icons/hi";
import bgImg from "../assets/Howitworks.jpg";

import HeaderNav from './HeaderNav';
import Footer from './Footer.jsx';
import {
  HowitworksContainer,
  StepSection,
  InfoContainer,
  InfoCard,
  Icon,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon6,
  CTASection,
} from './HowItWorkStyled.jsx';

const HowItWorks = () => {
  return (
    <HowitworksContainer>
      <HeaderNav />

      <StepSection>
        <h2>How TraceAid Works</h2>
        <p>
          Transparent giving made simple. From donation to impact, every step is tracked and verified.
        </p>
      </StepSection>

      <StepSection>
        <h3>For Donors</h3>
        <p>Simple steps to make a difference and track your impact</p>

        <InfoContainer>
          <InfoCard>
            <Icon>
            <CiSearch size={30} color="#ffffff" />
            </Icon>
            <h4>Browse Verified Campaigns</h4>
            <p>
              Explore causes that align with your values. Every campaign is vetted and comes with clear milestones.
            </p>
          </InfoCard>

          <InfoCard>
            <Icon2>
            <FaArrowTrendUp size={30} color="#ffffff" />
            </Icon2>
            <h4>Track Progress in Real-Time</h4>
            <p>
              Receive updates as milestones are reached. See photos, reports, and verified evidence of impact.
            </p>
          </InfoCard>

          <InfoCard>
            <Icon3>
            <FaLock size={30} color="#ffffff" />
            </Icon3>
            <h4>Give Securely</h4>
            <p>
              Make your donation using trusted payment methods. Your contribution is safely allocated to verified milestones.
            </p>
          </InfoCard>
        </InfoContainer>
      </StepSection>

      <StepSection>
        <h3>For Fundraisers</h3>
        <p>
          Simple steps to launch your campaign and build donor trust through transparency
        </p>

        <InfoContainer>
          <InfoCard>
            <Icon4>
            <MdOutlineVerifiedUser size={30} color="#000000" />
            </Icon4>
            <h4>Complete Verification</h4>
            <p>
              Go through our simple KYC process to build trust with potential donors and ensure accountability.
            </p>
          </InfoCard>

          <InfoCard>
            <Icon5>
            <CiSearch size={30} color="#000000" />
            </Icon5>
            <h4>Create Your Campaign</h4>
            <p>
              Tell your story, set your funding goal, and define clear milestones for your project.
            </p>
          </InfoCard>

          <InfoCard>
            <Icon6>
            <HiOutlineShare size={30} color="" />
            </Icon6>
            <h4>Launch and Promote</h4>
            <p>
              Share your campaign with your network. We provide tools to help you reach more potential supporters.
            </p>
          </InfoCard>
        </InfoContainer>
      </StepSection>

      <CTASection style={{ backgroundImage: `url(${bgImg})` }}>
      <h2>Ready to Get Started?</h2>
    <p>
    Join thousands of donors and fundraisers making transparent giving a reality.
    </p>
  <button>Create an account</button>
</CTASection>

     <Footer /> 
    </HowitworksContainer>
  );
};

export default HowItWorks;
