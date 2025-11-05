import styled from "styled-components";
import TransparencyImage from "../assets/trustgreen.png";
import TraceaidBg from "../assets/FrameImg.png";
import HeroBg from "../assets/HandsImg.jpg";

/* Landing Container */
export const LandingContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 80px;

  @media (min-width: 480px) and (max-width: 768px) {
    padding-top: 60px;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    padding-top: 70px;
  }
`;

/* Navbar */
export const NavBar = styled.nav`
  width: 100%;
  padding: 1rem 3%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f8f9fa;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  @media (min-width: 480px) and (max-width: 768px) {
    padding: 0.8rem 5%;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    padding: 0.9rem 4%;
  }
`;

/* Left Section */
export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (min-width: 480px) and (max-width: 768px) {
    gap: 1rem;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    gap: 1.5rem;
  }
`;

/* Logo Container */
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    height: 35px;
    object-fit: contain;

    @media (min-width: 480px) and (max-width: 768px) {
      height: 28px;
    }

    @media (min-width: 600px) and (max-width: 900px) {
      height: 32px;
    }
  }

  span {
    font-size: 1.3rem;
    font-weight: 700;
    color: #000;

    @media (min-width: 480px) and (max-width: 768px) {
      font-size: 1rem;
    }

    @media (min-width: 600px) and (max-width: 900px) {
      font-size: 1.15rem;
    }
  }

  .divider {
    width: 1.5px;
    height: 45px;
    background-color: #a8a8a8;
    margin-left: 0.8rem;

    @media (min-width: 480px) and (max-width: 768px) {
      height: 35px;
    }

    @media (min-width: 600px) and (max-width: 900px) {
      height: 40px;
    }
  }
`;

/* Nav Links */
export const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 1.2rem;

  li {
    font-size: 0.9rem;
    color: #333333;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #3b7a57;
    }
  }

  @media (min-width: 480px) and (max-width: 768px) {
    gap: 0.8rem;
    li {
      font-size: 0.8rem;
    }
  }

  @media (min-width: 600px) and (max-width: 900px) {
    gap: 1rem;
    li {
      font-size: 0.85rem;
    }
  }
`;

/* Button Group */
export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;

  .login {
    border: 2px solid #617437;
    background: #ffffff;
    color: #333333;
    font-weight: bold;
    padding: 0.6rem 1.6rem;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
      background-color: #d5e3b9ff;
      color: #333333;
    }

    @media (min-width: 480px) and (max-width: 768px) {
      padding: 0.5rem 1.2rem;
      font-size: 0.85rem;
    }

    @media (min-width: 600px) and (max-width: 900px) {
      padding: 0.55rem 1.4rem;
      font-size: 0.9rem;
    }
  }

  .create {
    background-color: #1a1a1a;
    border: none;
    color: #c1e86e;
    font-weight: bold;
    padding: 0.6rem 1.2rem;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
      background-color: #c1e86e;
      color: #1a1a1a;
    }

    @media (min-width: 480px) and (max-width: 768px) {
      padding: 0.5rem 1rem;
      font-size: 0.85rem;
    }

    @media (min-width: 600px) and (max-width: 900px) {
      padding: 0.55rem 1.1rem;
      font-size: 0.9rem;
    }
  }
`;

/* Hero Section */
export const HeroSection = styled.section`
  width: 100%;
  height: 90vh;
  background: url(${HeroBg}) center/cover no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;

  @media (min-width: 480px) and (max-width: 768px) {
    height: 70vh;
    padding-top: 60px;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    height: 80vh;
    padding-top: 70px;
  }
`;

/* Hero Overlay */
export const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 0 1.5rem;

  @media (min-width: 480px) and (max-width: 768px) {
    padding: 0 1rem;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    padding: 0 1.2rem;
  }
`;

/* Hero Content */
export const HeroContent = styled.div`
  color: #fff;
  z-index: 2;
  max-width: 650px;

  h1 {
    font-size: 2.8rem;
    font-weight: 800;
    line-height: 1.3;
    margin-bottom: 1rem;

    @media (min-width: 480px) and (max-width: 768px) {
      font-size: 2rem;
    }

    @media (min-width: 600px) and (max-width: 900px) {
      font-size: 2.4rem;
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #eaeaea;
    margin-bottom: 2rem;

    @media (min-width: 480px) and (max-width: 768px) {
      font-size: 0.95rem;
    }

    @media (min-width: 600px) and (max-width: 900px) {
      font-size: 0.975rem;
    }
  }

  button {
    background-color: #c1e86e;
    color: #000;
    font-weight: 700;
    border: none;
    border-radius: 6px;
    padding: 0.9rem 2rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: #67940b;
    }

    @media (min-width: 480px) and (max-width: 768px) {
      padding: 0.7rem 1.6rem;
      font-size: 0.9rem;
    }

    @media (min-width: 600px) and (max-width: 900px) {
      padding: 0.8rem 1.8rem;
      font-size: 0.95rem;
    }
  }
`;
/* HeroIcons */
export const HeroIcons = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  img {
    position: absolute;
    width: 90px;
    opacity: 0.9;

    @media (min-width: 480px) and (max-width: 768px) {
      width: 60px;
    }

    @media (min-width: 600px) and (max-width: 900px) {
      width: 75px;
    }
  }

  .top-icon {
    top: 3rem;
    left: 3rem;

    @media (min-width: 480px) and (max-width: 768px) {
      top: 1.5rem;
      left: 1.5rem;
    }

    @media (min-width: 600px) and (max-width: 900px) {
      top: 2rem;
      left: 2rem;
    }
  }

  .bottom-icon {
    bottom: 3rem;
    left: 3rem;

    @media (min-width: 480px) and (max-width: 768px) {
      bottom: 1.5rem;
      left: 1.5rem;
    }

    @media (min-width: 600px) and (max-width: 900px) {
      bottom: 2rem;
      left: 2rem;
    }
  }
}

/* ApiSection */
export const ApiSection = styled.section`
  width: 100%;
  padding: 4rem 2rem;
  background-color: #f5f5f5;
  text-align: center;

  h2 {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 1rem;

    @media (min-width: 480px) and (max-width: 768px) {
      font-size: 1.6rem;
    }

    @media (min-width: 600px) and (max-width: 900px) {
      font-size: 1.8rem;
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #333;

    @media (min-width: 480px) and (max-width: 768px) {
      font-size: 0.9rem;
    }

    @media (min-width: 600px) and (max-width: 900px) {
      font-size: 0.95rem;
    }
  }
`;
export const TransparencySection = styled.section`
  position: relative;
  width: 85%;
  margin: 0 auto;
  padding: 6rem 6%;
  background: url(${TransparencyImage}) center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #ffffff;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.25);
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }

  h2 {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 1rem;

    @media (min-width: 480px) and (max-width: 768px) {
      font-size: 1.6rem;
    }

    @media (min-width: 600px) and (max-width: 900px) {
      font-size: 1.8rem;
    }
  }

  p {
    max-width: 700px;
    font-size: 1rem;
    line-height: 1.6;
    color: #ffffff;

    @media (min-width: 480px) and (max-width: 768px) {
      font-size: 0.9rem;
      max-width: 90%;
    }

    @media (min-width: 600px) and (max-width: 900px) {
      font-size: 0.95rem;
      max-width: 80%;
    }
  }

  @media (min-width: 480px) and (max-width: 768px) {
    width: 95%;
    padding: 4rem 1rem;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    width: 90%;
    padding: 5rem 3%;
  }
`;

/* TransparencyCardGrid */
export const TransparencyCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  width: 100%;
  max-width: 950px;

  @media (min-width: 480px) and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.8rem;
  }
`;

/* TransparencyCard */
export const TransparencyCard = styled.div`
  background: #ffffff;
  color: #1a1a1a;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  text-align: left;

  .icon-wrap {
    width: 55px;
    height: 55px;
    margin-bottom: 1rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  h3 {
    font-weight: 700;
    margin-bottom: 0.8rem;
    font-size: 1.1rem;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.6;
    color: #444;
  }

  @media (min-width: 480px) and (max-width: 768px) {
    text-align: center;
    padding: 1.8rem;

    .icon-wrap {
      margin: 0 auto 1rem;
    }

    h3 {
      font-size: 1rem;
    }

    p {
      font-size: 0.85rem;
    }
  }

  @media (min-width: 600px) and (max-width: 900px) {
    text-align: left;
    padding: 2rem;

    h3 {
      font-size: 1.05rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;
/* TraceaidSection */
export const TraceaidSection = styled.section`
  position: relative;
  width: 100%;
  padding: 6rem 8%;
  background: url(${TraceaidBg}) center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #000; 
  overflow: hidden;
  margin-top: 7.5rem;

  h2 {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 1.5rem;

    @media (min-width: 480px) and (max-width: 768px) {
      font-size: 1.6rem;
    }

    @media (min-width: 600px) and (max-width: 900px) {
      font-size: 1.8rem;
    }
  }

  p {
    max-width: 750px;
    font-size: 1rem;
    line-height: 1.6;
    color: #333;

    @media (min-width: 480px) and (max-width: 768px) {
      font-size: 0.9rem;
      max-width: 95%;
    }

    @media (min-width: 600px) and (max-width: 900px) {
      font-size: 0.95rem;
      max-width: 90%;
    }
  }

  @media (min-width: 480px) and (max-width: 768px) {
    padding: 4rem 2rem;
    margin-top: 2rem;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    padding: 5rem 5%;
    margin-top: 3rem;
  }
`;

/* TraceaidCardGrid */
export const TraceaidCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  width: 100%;
  max-width: 1100px;

  @media (min-width: 480px) and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.8rem;
  }
`;

/* TraceaidCard */
export const TraceaidCard = styled.div`
  padding: 2rem;
  border-radius: 12px;
  text-align: left;
  
  .iconfirst,
  .iconsecond,
  .iconthird,
  .iconfourth {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .iconfirst { background-color: #ffb3ba; }
  .iconsecond { background-color: #ffdfba; }
  .iconthird { background-color: #baffc9; }
  .iconfourth { background-color: #bae1ff; }

  h3 {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    display: block;
  }

  p {
    font-size: 0.95rem;
    color: #444;
    line-height: 1.5;
  }

  @media (min-width: 480px) and (max-width: 768px) {
    text-align: center;

    .iconfirst,
    .iconsecond,
    .iconthird,
    .iconfourth {
      margin: 0 auto 1rem;
    }

    h3 { font-size: 1rem; }
    p { font-size: 0.85rem; }
  }

  @media (min-width: 600px) and (max-width: 900px) {
    text-align: left;
    h3 { font-size: 1.05rem; }
    p { font-size: 0.9rem; }
  }
`;

/* FundraisingSection */
export const FundraisingSection = styled.section`
  width: 100%;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6rem 8%;
  background-color: #fff;
  margin-top: 5rem;
  gap: 4rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    padding: 4rem 5%;
  }

  @media (min-width: 480px) and (max-width: 768px) {
    padding: 3rem 4%;
    gap: 2rem;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    padding: 4rem 5%;
    gap: 3rem;
  }
`;

/* FundraisingContent */
export const FundraisingContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: -1.5rem;

  h2 {
    font-size: 2.3rem;
    font-weight: 800;
    color: #3b4f25; 
    margin-bottom: 1.2rem;

    @media (min-width: 480px) and (max-width: 768px) {
      font-size: 1.8rem;
      text-align: center;
      width: 100%;
    }

    @media (min-width: 600px) and (max-width: 900px) {
      font-size: 2rem;
      text-align: center;
      width: 100%;
    }
  }

  p {
    font-size: 1rem;
    color: #333;
    line-height: 1.7;
    max-width: 450px;
    margin-bottom: 2rem;

    @media (min-width: 480px) and (max-width: 768px) {
      max-width: 90%;
      text-align: center;
      font-size: 0.9rem;
    }

    @media (min-width: 600px) and (max-width: 900px) {
      max-width: 80%;
      text-align: center;
      font-size: 0.95rem;
    }
  }

  button {
    background-color: #000;
    color: #c1e86e;
    font-weight: 600;
    border: none;
    border-radius: 6px;
    padding: 0.9rem 2rem;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
      background-color: #c1e86e;
      color: #000;
    }

    @media (min-width: 480px) and (max-width: 768px) {
      padding: 0.8rem 1.8rem;
      font-size: 0.9rem;
    }

    @media (min-width: 600px) and (max-width: 900px) {
      padding: 0.85rem 1.9rem;
      font-size: 0.95rem;
    }
  }

  @media (min-width: 480px) and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    align-items: center;
    text-align: center;
  }
`;

/* FundraisingImage */
export const FundraisingImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-width: 500px;
    height: max-content;
    display: block;
    object-fit: cover;
    border-radius: 10px;

    @media (min-width: 480px) and (max-width: 768px) {
      max-width: 85%;
    }

    @media (min-width: 600px) and (max-width: 900px) {
      max-width: 90%;
    }
  }

  @media (min-width: 480px) and (max-width: 768px) {
    margin-top: 2rem;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    margin-top: 2.5rem;
  }
`;
/* ImageDividerSection */
export const ImageDividerSection = styled.section`
  width: 100%;
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 7rem;
    object-fit: cover;
    display: block;

    @media (min-width: 480px) and (max-width: 768px) {
      height: 5rem;
    }

    @media (min-width: 600px) and (max-width: 900px) {
      height: 6rem;
    }
  }
`;

/* JoinUsSection */
export const JoinUsSection = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 4rem;

  h2 {
    font-size: 2.8rem;
    font-weight: 800;
    color: #000000;

    @media (min-width: 480px) and (max-width: 768px) {
      font-size: 2rem;
    }

    @media (min-width: 600px) and (max-width: 900px) {
      font-size: 2.3rem;
    }
  }
`;

/* CommunitySection */
export const CommunitySection = styled.section`
  width: 100%;
  padding: 4rem 8%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 480px) and (max-width: 768px) {
    padding: 3rem 4%;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    padding: 3.5rem 5%;
  }
`;

/* CommunityGrid */
export const CommunityGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(2, auto);
  gap: 1.5rem;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 450px;

  img {
    width: 100%;
    max-width: 280px;
    border-radius: 12px;
    object-fit: cover;
  }

  @media (min-width: 480px) and (max-width: 768px) {
    grid-template-columns: 1fr;
    height: auto;

    img {
      max-width: 90%;
    }
  }

  @media (min-width: 600px) and (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    height: auto;

    img {
      max-width: 80%;
    }
  }
`;

/* CommunityContent */
export const CommunityContent = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / span 2;
  text-align: center;

  h3 {
    color: #333333;
    margin-bottom: 1rem;
    width: 100%;
    text-align: center;
    white-space: nowrap;
  }

  p {
    font-size: 1.2rem;
    font-weight: 700;
    color: #333333;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  @media (min-width: 480px) and (max-width: 768px) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;

    h3 {
      font-size: 1rem;
      white-space: normal;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (min-width: 600px) and (max-width: 900px) {
    grid-column: 1 / 3;
    grid-row: 2 / 3;

    h3 {
      font-size: 1.05rem;
    }

    p {
      font-size: 1.05rem;
    }
  }
`;

/* CommunityStat */
export const CommunityStat = styled.h1`
  font-size: 5rem;
  font-weight: 900;
  color: #9aba58;

  @media (min-width: 480px) and (max-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    font-size: 4rem;
  }
`;

/* CommunityButton */
export const CommunityButton = styled.button`
  background-color: #1a1a1a;
  border: none;
  color: #c1e86e;
  font-weight: 700;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s ease;
  margin-top: 1rem;
  width: 200px;

  &:hover {
    background-color: #c1e86e;
    color: #1a1a1a;
  }

  @media (min-width: 480px) and (max-width: 768px) {
    width: 150px;
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    width: 180px;
    padding: 0.55rem 1.1rem;
    font-size: 0.9rem;
  }
`;

/* FooterContainer */
export const FooterContainer = styled.footer`
  width: 100%;
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 4rem 8%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4.5rem;

  @media (min-width: 480px) and (max-width: 768px) {
    padding: 3rem 4%;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    padding: 3.5rem 5%;
  }
`;

/* FooterContent */
export const FooterContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 2rem;

  @media (min-width: 480px) and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

/* FooterLogo */
export const FooterLogo = styled.div`
  flex: 1;
  width: 100%;
  min-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  img {
    width: 120px;
    height: 40px;
    object-fit: contain;
    margin-bottom: 1rem;

    @media (min-width: 480px) and (max-width: 768px) {
      width: 100px;
      height: 35px;
    }

    @media (min-width: 600px) and (max-width: 900px) {
      width: 110px;
      height: 38px;
    }
  }

  h3 {
    color: #ffffff;
    margin-bottom: 0.8rem;
    font-size: 1.3rem;
    font-weight: 600;

    @media (min-width: 480px) and (max-width: 768px) {
      font-size: 1.1rem;
    }

    @media (min-width: 600px) and (max-width: 900px) {
      font-size: 1.2rem;
    }
  }

  p {
    color: #ffffff;
    font-size: 0.9rem;
    line-height: 1.6;
    margin-bottom: 1.2rem;
    width: 100%;

    @media (min-width: 480px) and (max-width: 768px) {
      font-size: 0.8rem;
    }

    @media (min-width: 600px) and (max-width: 900px) {
      font-size: 0.85rem;
    }
  }
`;

/* SocialIcons */
export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: #000000;
    background: #ffffff;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    transition: all 0.3s ease;

    @media (min-width: 480px) and (max-width: 768px) {
      width: 30px;
      height: 30px;
      font-size: 1rem;
    }

    @media (min-width: 600px) and (max-width: 900px) {
      width: 34px;
      height: 34px;
      font-size: 1.05rem;
    }
  }
`;

/* FooterColumn */
export const FooterColumn = styled.div`
  flex: 1;
  min-width: 180px;

  h4 {
    color: #ffffff;
    font-size: 1rem;
    margin-bottom: 1rem;
    font-weight: 600;

    @media (min-width: 480px) and (max-width: 768px) {
      font-size: 0.9rem;
    }

    @media (min-width: 600px) and (max-width: 900px) {
      font-size: 0.95rem;
    }
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      font-size: 0.9rem;
      font-weight: 300;
      margin-bottom: 0.6rem;
      color: #ffffff;
      cursor: pointer;
      transition: color 0.3s ease;

      &:hover {
        color: #ffffff;
      }

      @media (min-width: 480px) and (max-width: 768px) {
        font-size: 0.8rem;
      }

      @media (min-width: 600px) and (max-width: 900px) {
        font-size: 0.85rem;
      }
    }
  }
`;

/* FooterCopyright */
export const FooterCopyright = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 5.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #3b3b3b;
  font-size: 0.9rem;
  color: #ffffff;
  letter-spacing: 0.3px;

  @media (min-width: 480px) and (max-width: 768px) {
    font-size: 0.8rem;
    margin-top: 4rem;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    font-size: 0.85rem;
    margin-top: 4.5rem;
  }
`;
