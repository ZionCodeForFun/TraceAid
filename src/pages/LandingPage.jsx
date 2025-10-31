import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";

import {
  LandingContainer,
  NavBar,
  LogoContainer,
  LeftSection,
  NavLinks,
  ButtonGroup,
  HeroSection,
  HeroOverlay,
  HeroContent,
  HeroIcons,
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
  FooterContainer,
  FooterContent,
  FooterLogo,
  SocialIcons,
  FooterColumn,
  FooterCopyright,
} from "./LandingPageStyled.jsx";

import CampaignData from "./CampaignData.jsx";
import logoImg from "../assets/logo2.png";
import Img1 from "../assets/Rectangle 10.png";
import Img2 from "../assets/Rectangle 11.png";
import Img3 from "../assets/Rectangle 9.png";
import Img4 from "../assets/Rectangle 12.png";
import FooterImg from "../assets/logo1.png";
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

const LandingPage = () => {

  const nav = useNavigate();
  return (
    <LandingContainer>
      {/* <NavBar>
        <LeftSection>
          <LogoContainer>
            <img src={logoImg} alt="TraceAid Logo" />
            <div className="divider"></div>
          </LogoContainer>

          <NavLinks>
            <li>Explore Campaigns</li>
            <li>How it Works</li>
            <li>Start a Campaign</li>
          </NavLinks>
        </LeftSection>

        <ButtonGroup>
          <button className="login">Login</button>
          <button className="create">Create an Account</button>
        </ButtonGroup>
      </NavBar> */}
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
            <button onClick={()=> nav("/explore")}>Give a Donation</button>
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
              <IoSearch size={20} color="#000000" />
            </div>
            <h3>Raise Funds With Trust</h3>
            <p>
              Stand out from the crowd by giving donors real-time proof of your
              impact.
            </p>
          </TraceaidCard>

          <TraceaidCard>
            <div className="iconsecond">
              <IoSearch size={20} color="#000000" />
            </div>
            <h3>Simplify Your Campaign</h3>
            <p>
              Launch, manage, and track your campaign effortlessly — all in one
              place.
            </p>
          </TraceaidCard>

          <TraceaidCard>
            <div className="iconthird">
              <IoSearch size={20} color="#000000" />
            </div>
            <h3>Attract More Donors</h3>
            <p>
              Win donor confidence with transparent milestones and verified
              updates.
            </p>
          </TraceaidCard>

          <TraceaidCard>
            <div className="iconfourth">
              <IoSearch size={20} color="#000000" />
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
          <button onClick={() => nav("/role_modal")}>Get Started</button>
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
            <CommunityButton onClick={()=> nav("/role_modal")}>Get Started</CommunityButton>
          </CommunityContent>
          <img src={Img3} alt="Community Image 3" />
          <img src={Img4} alt="Community Image 4" />
        </CommunityGrid>
      </CommunitySection>

      {/* <FooterContainer>
        <FooterContent>
          <FooterLogo>
            <img src={FooterImg} alt="TraceAid Logo" />
            <h3>Join our Community</h3>
            <p>
              Get exclusive updates from the TraceAid community, explore <br />
              the social impact landscape across Africa and beyond.
            </p>
            <SocialIcons>
              <a href="#" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Twitter">
                <RiTwitterXLine />
              </a>
            </SocialIcons>
          </FooterLogo>

          <FooterColumn>
            <h4>Product</h4>
            <ul>
              <li>For Individuals</li>
              <li>For Organizations</li>
              <li>Pricing</li>
              <li>Explore Campaigns</li>
            </ul>
          </FooterColumn>

          <FooterColumn>
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Blog</li>
              <li>Terms & Conditions</li>
              <li>Contact Us</li>
            </ul>
          </FooterColumn>
        </FooterContent>

        <FooterCopyright>
          © 2025 TraceAid | All rights reserved.
        </FooterCopyright>
      </FooterContainer> */}

      <Footer />
    </LandingContainer>
  );
};

export default LandingPage;

// import React from "react";
// import { FaFacebook, FaInstagram} from "react-icons/fa";
// import { RiTwitterXLine } from "react-icons/ri";

// import {
//   LandingContainer,
//   NavBar,
//   LogoContainer,
//   LeftSection,
//   NavLinks,
//   ButtonGroup,
//   HeroSection,
//   TransparencySection,
//   TransparentImage,
//   TraceaidSection,
//   TraceaidImage,
//   CommunitySection,
//   CommunityGrid,
//   CommunityContent,
//   CommunityStat,
//   CommunityButton,
//   FooterContainer,
//   FooterContent,
//   FooterLogo,
//   SocialIcons,
//   FooterColumn,
//   FooterCopyright,
// } from "./LandingPageStyled.jsx";
// import CampaignData from "./CampaignData.jsx";
// import logoImg from "../assets/logo2.png";
// import TransparencyImage from "../assets/Frame2.png";
// import Traceaidpicture from "../assets/Frame3.png";
// import Img1 from "../assets/Rectangle 10.png";
// import Img2 from "../assets/Rectangle 11.png";
// import Img3 from "../assets/Rectangle 9.png";
// import Img4 from "../assets/Rectangle 12.png";
// import  FooterImg from "../assets/logo1.png"

// const LandingPage = () => {
//   return (
//     <LandingContainer>
//       <NavBar>
//         <LeftSection>
//           <LogoContainer>
//             <img src={logoImg} alt="TraceAid Logo" />
//             <div className="divider"></div>
//           </LogoContainer>

//           <NavLinks>
//             <li>Explore Campaigns</li>
//             <li>How it Works</li>
//             <li>Start a Campaign</li>
//           </NavLinks>
//         </LeftSection>

//         <ButtonGroup>
//           <button className="login">Login</button>
//           <button className="create">Create an Account</button>
//         </ButtonGroup>
//       </NavBar>

//       <HeroSection />

//       <CampaignData />

//       <TransparencySection>
//         <TransparentImage
//           src={TransparencyImage} alt="Transparency Illustration" />
//       </TransparencySection>

//       <TraceaidSection>
//         <TraceaidImage
//           src={Traceaidpicture} alt="TraceAid Illustration" />
//       </TraceaidSection>

//       <CommunitySection>
//         <CommunityGrid>
//           <img src={Img1} alt="Community Image 1" />
//           <img src={Img2} alt="Community Image 2" />
//           <CommunityContent>
//             <h3>Be Part of our Donors and Fundraisers with over</h3>
//             <CommunityStat>20,000</CommunityStat>
//             <p>People from across Nigeria</p>
//             <CommunityButton>Get Started</CommunityButton>
//           </CommunityContent>
//           <img src={Img3} alt="Community Image 3" />
//           <img src={Img4} alt="Community Image 4" />
//           </CommunityGrid>
//         </CommunitySection>

//         <FooterContainer>
//           <FooterContent>
//             <FooterLogo>
//               <img src={FooterImg} alt="TraceAid Logo" />
//               <h3>Join our Community</h3>
//               <p>Get exclusive updates from the TraceAid community,explore <br />
//               the social impact landscape across Africa and beyond.</p>
//               <SocialIcons>
//                 <a href="#" aria-label="Facebook">
//                   <FaFacebook />
//                 </a>
//                 <a href="#" aria-label="Instagram">
//                   <FaInstagram />
//                 </a>
//                 <a href="#" aria-label="Twitter">
//                   <RiTwitterXLine />
//                 </a>
//               </SocialIcons>
//             </FooterLogo>
//             <FooterColumn>
//               <h4>Product</h4>
//               <ul>
//                 <li>For Individuals</li>
//                 <li>For Organizations</li>
//                 <li>Pricing</li>
//                 <li>Explore Campaigns</li>
//               </ul>
//             </FooterColumn>
//             <FooterColumn>
//               <h4>Company</h4>
//               <ul>
//                 <li>About</li>
//                 <li>Blog</li>
//                 <li>Terms & Conditions</li>
//                 <li>Contact Us</li>
//               </ul>
//             </FooterColumn>
//         </FooterContent>

//         <FooterCopyright>© 2025 TraceAid|All rights reserved.</FooterCopyright>
//         </FooterContainer>

//     </LandingContainer>
//   );
// };

// export default LandingPage;
