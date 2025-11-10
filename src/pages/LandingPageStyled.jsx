// import styled from "styled-components";
// import TransparencyImage from "../assets/trustgreen.png";
// import TraceaidBg from "../assets/FrameImg.png";
// import HeroBg from "../assets/HandsImg.jpg";

// export const LandingContainer = styled.div`
//   width: 100%;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   padding-top: 80px;
// `;
// export const NavBar = styled.nav`
//   width: 100%;
//   padding: 1rem 3%;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   background-color: #f8f9fa;
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
// `;
// export const LeftSection = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 2rem;
// `;

// export const LogoContainer = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;

//   img {
//     height: 35px;
//     object-fit: contain;

//     @media (min-width: 300px) and (max-width: 768px) {
//       height: 28px;
//     }

//     @media (min-width: 600px) and (max-width: 900px) {
//       height: 32px;
//     }
//   }

//   span {
//     font-size: 1.3rem;
//     font-weight: 700;
//     color: #000;
//   }

//   .divider {
//     width: 1.5px;
//     height: 45px;
//     background-color: #a8a8a8;
//     margin-left: 0.8rem;

//     @media (min-width: 300px) and (max-width: 768px) {
//       height: 35px;
//     }

//     @media (min-width: 600px) and (max-width: 900px) {
//       height: 40px;
//     }
//   }
// `;

// export const NavLinks = styled.ul`
//   display: flex;
//   align-items: center;
//   list-style: none;
//   gap: 1.2rem;

//   li {
//     font-size: 0.9rem;
//     color: #333333;
//     font-weight: bold;
//     cursor: pointer;
//     transition: color 0.3s ease;

//     &:hover {
//       color: #3b7a57;
//     }
//   }
// `;
// export const ButtonGroup = styled.div`

//   display: flex;
//   gap:1rem;
//   .login {
//     border: 2px solid #617437;
//     background: #ffffff;
//     color: #333333;
//     font-weight: bold;
//     padding: 0.6rem 1.6rem;
//     border-radius: 6px;
//     cursor: pointer;
//     transition: 0.3s ease;

//     &:hover {
//       background-color: #d5e3b9ff;
//       color: #333333;
//     }

//     @media (min-width: 300px) and (max-width: 768px) {
//       padding: 0.5rem 1.2rem;
//       font-size: 0.85rem;
//     }

//     @media (min-width: 600px) and (max-width: 900px) {
//       padding: 0.55rem 1.4rem;
//       font-size: 0.9rem;
//     }
//   }

//   .create {
//     background-color: #1a1a1a;
//     border: none;
//     color: #c1e86e;
//     font-weight: bold;
//     padding: 0.6rem 1.2rem;
//     border-radius: 6px;
//     cursor: pointer;
//     transition: 0.3s ease;

//     &:hover {
//       background-color: #c1e86e;
//       color: #1a1a1a;
//     }

//     @media (min-width: 300px) and (max-width: 768px) {
//       padding: 0.5rem 1rem;
//       font-size: 0.85rem;
//     }

//     @media (min-width: 600px) and (max-width: 900px) {
//       padding: 0.55rem 1.1rem;
//       font-size: 0.9rem;
//     }
//   }
// `;

// export const HeroSection = styled.section`
//   width: 100%;
//   height: 90vh;
//   background: url(${HeroBg}) center/cover no-repeat;
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding-top: 80px;

//   @media (max-width: 480px) {
//     height: 75vh;
//     padding-top: 60px;
//     background-position: center top;
//   }
// `;

// export const HeroOverlay = styled.div`
//   position: absolute;
//   inset: 0;
//   background: rgba(0, 0, 0, 0.55);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   text-align: center;
//   padding: 0 1.5rem;

//   @media (max-width: 480px) {
//     padding: 0 1rem;
//   }
// `;

// export const HeroContent = styled.div`
//   color: #fff;
//   z-index: 2;
//   max-width: 650px;

//   h1 {
//     font-family: Anton;
//     font-size: 3rem;
//     font-weight: 400;
//     line-height: 100%;
//     margin-bottom: 1rem;

//     @media (min-width: 300px) and (max-width: 768px) {
//       font-size: 2rem;
//     }

//     @media (min-width: 600px) and (max-width: 900px) {
//       font-size: 2.4rem;
//     }
//   }

//   p {
//     font-family: Inter;
//     font-weight: 700;
//     font-size: 1rem;
//     color: #eaeaea;
//     margin-bottom: 2rem;

//     @media (min-width: 300px) and (max-width: 768px) {
//       font-size: 0.95rem;
//     }

//     @media (min-width: 600px) and (max-width: 900px) {
//       font-size: 0.975rem;
//     }
//   }

//   button {
//     background-color: #c1e86e;
//     color: #000;
//     font-weight: 700;
//     border: none;
//     border-radius: 6px;
//     padding: 0.9rem 2rem;
//     cursor: pointer;
//     transition: all 0.3s ease;

//     &:hover {
//       background-color: #67940b;
//     }

//   @media (max-width: 768px) {
//     h1 {
//       font-size: 2.4rem;
//     }
//   }

//   @media (max-width: 480px) {
//     max-width: 95%;

//     h1 {
//       font-size: 1.8rem;
//       line-height: 110%;
//       margin-bottom: 0.7rem;
//     }

//     p {
//       font-size: 0.9rem;
//       font-weight: 600;
//       margin-bottom: 1.6rem;
//     }

//     button {
//       width: 80%;
//       padding: 0.8rem 0;
//       font-size: 0.9rem;
//       border-radius: 8px;
//     }
//   }
// }
// `;
// export const HeroIcons = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;

//   img {
//     position: absolute;
//     width: 90px;
//     opacity: 0.9;

//     @media (min-width: 300px) and (max-width: 768px) {
//       width: 60px;
//     }

//     @media (min-width: 600px) and (max-width: 900px) {
//       width: 75px;
//     }
//   }

//   .top-icon {
//     top: 3rem;
//     left: 3rem;

//     @media (min-width: 300px) and (max-width: 768px) {
//       top: 1.5rem;
//       left: 1.5rem;
//     }

//     @media (min-width: 600px) and (max-width: 900px) {
//       top: 2rem;
//       left: 2rem;
//     }
//   }

//   .bottom-icon {
//     bottom: 3rem;
//     left: 3rem;

//   @media (max-width: 480px) {
//     img {
//       width: 50px;
//       opacity: 0.7;
//     }

//     .top-icon {
//       top: 1rem;
//       left: 1rem;
//     }

//     .bottom-icon {
//       bottom: 1rem;
//       left: 1rem;
//     }

//     @media (min-width: 600px) and (max-width: 900px) {
//       bottom: 2rem;
//       left: 2rem;
//     }
//   }
// }
// `;

// export const ApiSection = styled.section`
//   width: 100%;
//   padding: 4rem 2rem;
//   background-color: #f5f5f5;
//   text-align: center;

//   h2 {
//     font-size: 2rem;
//     font-weight: 800;
//     margin-bottom: 1rem;

//     @media (min-width: 300px) and (max-width: 768px) {
//       font-size: 1.6rem;
//     }

//     @media (min-width: 600px) and (max-width: 900px) {
//       font-size: 1.8rem;
//     }
//   }

//   p {
//     font-size: 1rem;
//     line-height: 1.6;
//     color: #333;

//     @media (min-width: 300px) and (max-width: 768px) {
//       font-size: 0.9rem;
//     }

//     @media (min-width: 600px) and (max-width: 900px) {
//       font-size: 0.95rem;
//     }
//   }
// `;

// export const Header = styled.div`
//   text-align: center;
//   margin-bottom: 2rem;
//   margin-top: 4rem;

//   h1 {
//     font-family: Anton;
//     font-size: 2.9rem;
//     font-weight: 400;
//     color: #000000;
//     font-style: Regular;
//   }

//   p {
//     color: #000000;
//     font-family: Inter;
//     margin-top: 0.5rem;
//     font-weight: 700;
//     font-size: 1.1rem;
//     font-style: bold;
//   }

//   @media (max-width: 768px) {
//     h1 {
//       font-size: 2.2rem;
//     }
//     p {
//       font-size: 0.95rem;
//     }
//   }

//   @media (max-width: 480px) {
//     margin-top: 2.8rem;
//     margin-bottom: 1.5rem;

//     h1 {
//       font-size: 1.6rem;
//       line-height: 1.2;
//     }

//     p {
//       font-size: 0.85rem;
//       font-weight: 600;
//       width: 85%;
//       margin: 0.4rem auto 0 auto;
//       line-height: 1.3rem;
//     }
//   }
// `;
// export const TransparencySection = styled.section`
//   position: relative;
//   width: 85%;
//   margin: 0 auto;
//   padding: 6rem 6%;
//   background: url(${TransparencyImage}) center/cover no-repeat;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   color: #ffffff;
//   overflow: hidden;

//   &::before {
//     content: "";
//     position: absolute;
//     inset: 0;
//     background: rgba(0, 0, 0, 0.25);
//     z-index: 1;
//   }

//   > * {
//     position: relative;
//     z-index: 2;
//   }

//   h2 {
//     font-size: 2.9rem;
//     font-weight: 400;
//     margin-bottom: 1rem;
//     font-family: Anton;
//   }

//   p {
//     max-width: 700px;
//     font-size: 1rem;
//     line-height: 1.6;
//     color: #ffffff;

//     @media (min-width: 300px) and (max-width: 768px) {
//       font-size: 0.9rem;
//       max-width: 90%;
//     }

//     @media (min-width: 600px) and (max-width: 900px) {
//       font-size: 0.95rem;
//       max-width: 80%;
//     }
//   }

//   @media (min-width: 300px) and (max-width: 768px) {
//     width: 95%;
//     padding: 4rem 1rem;
//   }

//   @media (max-width: 480px) {
//     padding: 3rem 1rem;

//     h2 {
//       font-size: 1.8rem;
//       margin-bottom: 0.6rem;
//     }

//     p {
//       font-size: 0.85rem;
//       width: 90%;
//       margin: 0 auto;
//       line-height: 1.35rem;
//     }
//   }
// `;

// /* TransparencyCardGrid */
// export const TransparencyCardGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   gap: 2rem;
//   margin-top: 3rem;
//   width: 100%;
//   max-width: 950px;

//   @media (max-width: 480px) {
//     grid-template-columns: 1fr;
//     gap: 1.4rem;
//     margin-top: 2rem;
//   }
// `;

// export const TransparencyCard = styled.div`
//   background: #ffffff;
//   color: #000000;
//   padding: 2rem;
//   border-radius: 12px;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
//   text-align: left;

//   .icon-wrap {
//     width: 55px;
//     height: 55px;
//     margin-bottom: 1rem;

//     img {
//       width: 100%;
//       height: 100%;
//       object-fit: contain;
//     }
//   }

//   h3 {
//     font-family: Anton;
//     color: #000000;
//     font-weight: 700;
//     margin-bottom: 0.8rem;
//     font-size: 1.4rem;
//     font-style: Regular;
//   }

//   p {
//     font-size: 0.95rem;
//     font-weight: 400;
//     line-height: 1.6;
//     color: #000000;
//   }

//   @media (min-width: 300px) and (max-width: 768px) {
//     text-align: center;
//     padding: 1.8rem;

//     .icon-wrap {
//       margin: 0 auto 1rem;
//     }

//     h3 {
//       font-size: 1rem;
//     }

//     p {
//       font-size: 0.85rem;
//     }
//   }

//   @media (min-width: 600px) and (max-width: 900px) {
//     text-align: left;
//     padding: 2rem;

//     h3 {
//       font-size: 1.05rem;
//     }

//     p {
//       font-size: 0.9rem;
//     }
//   }

//   @media (max-width: 480px) {
//     padding: 1.5rem;

//     h3 {
//       font-size: 1.1rem;
//       margin-bottom: 0.6rem;
//     }

//     p {
//       font-size: 0.85rem;
//       line-height: 1.35rem;
//     }
//   }
// `;
// export const TraceaidSection = styled.section`
//   position: relative;
//   width: 100%;
//   padding: 6rem 8%;
//   background: url(${TraceaidBg}) center/cover no-repeat;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   color: #000;
//   overflow: hidden;
//   margin-top: 7.5rem;

//   h2 {
//     font-size: 2rem;
//     font-weight: 800;
//     margin-bottom: 1.5rem;

//     @media (min-width: 300px) and (max-width: 768px) {
//       font-size: 1.6rem;
//     }

//     @media (min-width: 600px) and (max-width: 900px) {
//       font-size: 1.8rem;
//     }
//   }

//   p {
//     max-width: 750px;
//     font-size: 1rem;
//     line-height: 1.6;
//     color: #333;

//     @media (min-width: 300px) and (max-width: 768px) {
//       font-size: 0.9rem;
//       max-width: 95%;
//     }

//     @media (min-width: 600px) and (max-width: 900px) {
//       font-size: 0.95rem;
//       max-width: 90%;
//     }
//   }

//   @media (min-width: 300px) and (max-width: 768px) {
//     padding: 4rem 2rem;
//     margin-top: 2rem;
//   }

//   @media (max-width: 480px) {
//     padding: 3rem 1.2rem;
//     margin-top: 4rem;

//     h2 {
//       font-size: 1.4rem;
//       line-height: 1.3;
//     }

//     p {
//       font-size: 0.85rem;
//       line-height: 1.35rem;
//       width: 90%;
//       margin: 0 auto;
//     }
//   }
// `;

// export const TraceaidCardGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   gap: 2rem;
//   margin-top: 3rem;
//   width: 100%;
//   max-width: 1100px;

//   @media (min-width: 300px) and (max-width: 768px) {
//     grid-template-columns: 1fr;
//     gap: 1.5rem;
//   }

//   @media (min-width: 600px) and (max-width: 900px) {
//     grid-template-columns: repeat(2, 1fr);
//     gap: 1.8rem;
//   }

//   @media (max-width: 480px) {
//     grid-template-columns: 1fr;
//     gap: 1.8rem;
//     margin-top: 2.2rem;
//   }
// `;

// /* TraceaidCard */
// export const TraceaidCard = styled.div`
//   padding: 2rem;
//   border-radius: 12px;
//   text-align: left;

//   .iconfirst {
//     width: 40px;
//     height: 40px;
//     border-radius: 50%;
//     margin-bottom: 1rem;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color: #ffb3ba;
//   }
//   .iconsecond {
//     width: 40px;
//     height: 40px;
//     border-radius: 50%;
//     margin-bottom: 1rem;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color: #ffdfba;
//   }
//   .iconthird {
//     width: 40px;
//     height: 40px;
//     border-radius: 50%;
//     margin-bottom: 1rem;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color: #baffc9;
//   }
//   .iconfourth {
//     width: 40px;
//     height: 40px;
//     border-radius: 50%;
//     margin-bottom: 1rem;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color: #bae1ff;
//   }

//   h3 {
//     font-size: 1.1rem;
//     font-weight: 700;
//     margin-bottom: 0.5rem;
//     white-space: nowrap;
//     overflow: hidden;
//     text-overflow: ellipsis;
//     width: 100%;
//     display: block;
//   }

//   p {
//     font-size: 0.95rem;
//     color: #444;
//     line-height: 1.5;
//   }

//   @media (min-width: 300px) and (max-width: 768px) {
//     text-align: center;

//     .iconfirst,
//     .iconsecond,
//     .iconthird,
//     .iconfourth {
//       margin: 0 auto 1rem;
//     }

//     h3 {
//       font-size: 1rem;
//     }
//     p {
//       font-size: 0.85rem;
//     }
//   }

//   @media (min-width: 600px) and (max-width: 900px) {
//     text-align: left;
//     h3 {
//       font-size: 1.05rem;
//     }
//     p {
//       font-size: 0.9rem;
//     }
//   }

//   @media (max-width: 480px) {
//     text-align: center;
//     padding: 1.5rem 1rem;

//     .iconfirst,
//     .iconsecond,
//     .iconthird,
//     .iconfourth {
//       margin: 0 auto 0.8rem;
//     }

//     h3 {
//       font-size: 1rem;
//     }

//     p {
//       font-size: 0.85rem;
//       line-height: 1.35rem;
//     }
//   }
// `;

// export const FundraisingSection = styled.section`
//   width: 100%;
//   height: max-content;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 6rem 8%;
//   background-color: #fff;
//   margin-top: 5rem;
//   gap: 4rem;

//   @media (max-width: 1024px) {
//     flex-direction: column;
//     text-align: center;
//     padding: 4rem 5%;
//   }

//   @media (max-width: 480px) {
//     padding: 3rem 1.2rem;
//     margin-top: 3rem;
//     gap: 2rem;
//   }
// `;

// export const FundraisingContent = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: flex-start;
//   margin-top: -1.5rem;

//   h2 {
//     font-family: Inter;
//     font-size: 3rem;
//     font-weight: 400;
//     color: #3a4621;
//     margin-bottom: 1.2rem;

//     @media (min-width: 300px) and (max-width: 768px) {
//       font-size: 1.8rem;
//       text-align: center;
//       width: 100%;
//     }

//     @media (min-width: 600px) and (max-width: 900px) {
//       font-size: 2rem;
//       text-align: center;
//       width: 100%;
//     }
//   }

//   p {
//     font-size: 1rem;
//     color: #333;
//     line-height: 1.7;
//     max-width: 450px;
//     margin-bottom: 2rem;

//     @media (min-width: 300px) and (max-width: 768px) {
//       max-width: 90%;
//       text-align: center;
//       font-size: 0.9rem;
//     }

//     @media (min-width: 600px) and (max-width: 900px) {
//       max-width: 80%;
//       text-align: center;
//       font-size: 0.95rem;
//     }
//   }

//   button {
//     background-color: #1a1a1a;
//     color: #c1e86e;
//     font-weight: 600;
//     border: none;
//     border-radius: 6px;
//     padding: 0.9rem 3rem;
//     cursor: pointer;
//     transition: 0.3s ease;

//     &:hover {
//       background-color: #c1e86e;
//       color: #000;
//     }

//     @media (min-width: 300px) and (max-width: 768px) {
//       padding: 0.8rem 1.8rem;
//       font-size: 0.9rem;
//     }

//     @media (min-width: 600px) and (max-width: 900px) {
//       padding: 0.85rem 1.9rem;
//       font-size: 0.95rem;
//     }
//   }

//   @media (min-width: 300px) and (max-width: 768px) {
//     align-items: center;
//     text-align: center;
//   }

//   @media (min-width: 600px) and (max-width: 900px) {
//     align-items: center;
//     text-align: center;
//   }

//   @media (max-width: 480px) {
//     h2 {
//       font-size: 1.8rem;
//       line-height: 1.25;
//       text-align: center;
//     }

//     p {
//       font-size: 0.9rem;
//       max-width: 95%;
//       margin-bottom: 1.6rem;
//     }

//     button {
//       padding: 0.85rem 2.2rem;
//       font-size: 0.9rem;
//     }
//   }
// `;

// export const FundraisingImage = styled.div`
//   flex: 1;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   img {
//     width: 100%;
//     max-width: 500px;
//     height: max-content;
//     display: block;
//     object-fit: cover;
//     border-radius: 10px;

//     @media (min-width: 300px) and (max-width: 768px) {
//       max-width: 85%;
//     }

//     @media (min-width: 600px) and (max-width: 900px) {
//       max-width: 90%;
//     }
//   }

//   @media (min-width: 300px) and (max-width: 768px) {
//     margin-top: 2rem;
//   }

//   @media (min-width: 600px) and (max-width: 900px) {
//     margin-top: 2.5rem;
//   }

//   @media (max-width: 480px) {
//     margin-top: 1.5rem;

//     img {
//       max-width: 100%;
//       border-radius: 8px;
//     }
//   }
// `;
// export const ImageDividerSection = styled.section`
//   width: 100%;
//   margin-top: 3rem;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   img {
//     width: 100%;
//     height: 7rem;
//     object-fit: cover;
//     display: block;
//   }
// `;

// export const JoinUsSection = styled.div`
//   width: 100%;
//   text-align: center;
//   margin-top: 4rem;

//   h2 {
//     font-family: Anton;
//     font-size: 3.5rem;
//     font-weight: 400;
//     color: #000000;
//     font-style: Regular;
//   }

//     @media (min-width: 300px) and (max-width: 768px) {
//       font-size: 2rem;
//     }

//     @media (min-width: 600px) and (max-width: 900px) {
//       font-size: 2.3rem;
//     }
//   }
// `;

// export const CommunitySection = styled.section`
//   width: 100%;
//   padding: 4rem 8%;
//   background-color: #ffffff;
//   display: flex;
//   justify-content: center;
//   align-items: center;

// <<<<<<< HEAD
//   @media (min-width: 300px) and (max-width: 768px) {
//     padding: 3rem 4%;
//   }

//   @media (min-width: 600px) and (max-width: 900px) {
//     padding: 3.5rem 5%;
//   }
// `;

// =======
//   @media (max-width: 480px) {
//     padding: 2.5rem 1.2rem;
//   }
// `;

// export const CommunityContent = styled.div`
//   grid-column: 2 / 3;
//   grid-row: 1 / span 2;
//   text-align: center;

//   h3 {
//     color: #333333;
//     margin-bottom: 1rem;
//     width: 100%;
//     text-align: center;
//     white-space: nowrap;
//   }

//   p {
//     font-size: 1.2rem;
//     font-weight: 700;
//     color: #333333;
//     margin-top: 1rem;
//     margin-bottom: 0.5rem;
//   }

//   @media (max-width: 480px) {
//     h3 {
//       white-space: normal;
//       line-height: 1.4;
//       font-size: 0.95rem;
//     }

//     p {
//       font-size: 0.9rem;
//       margin-top: 0.4rem;
//     }
//   }
// `;

// >>>>>>> a62cfda61f1ae1114d9ba1c98a0101fa84a18017
// export const CommunityGrid = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr;
//   grid-template-rows: repeat(2, auto);
//   gap: 1.5rem;
//   align-items: center;
//   justify-items: center;
//   width: 100%;
//   height: 450px;

//   img {
//     width: 100%;
//     max-width: 280px;
//     border-radius: 12px;
//     object-fit: cover;
//   }
// <<<<<<< HEAD

//   @media (min-width: 300px) and (max-width: 768px) {
// =======
//   @media (max-width: 768px) {
// >>>>>>> a62cfda61f1ae1114d9ba1c98a0101fa84a18017
//     grid-template-columns: 1fr;
//     height: auto;

//     img {
//       max-width: 90%;
//     }
//   }

//   @media (min-width: 600px) and (max-width: 900px) {
//     grid-template-columns: 1fr 1fr;
//     height: auto;

//     img {
//       max-width: 80%;
//     }
//   }
// <<<<<<< HEAD
// `;

// export const CommunityContent = styled.div`
//   grid-column: 2 / 3;
//   grid-row: 1 / span 2;
//   text-align: center;

//   h3 {
//     color: #333333;
//     margin-bottom: 1rem;
//     width: 100%;
//     text-align: center;
//     white-space: nowrap;
//   }

//   p {
//     font-size: 1.2rem;
//     font-weight: 700;
//     color: #333333;
//     margin-top: 1rem;
//     margin-bottom: 0.5rem;
//   }

//   @media (min-width: 300px) and (max-width: 768px) {
//     grid-column: 1 / 2;
//     grid-row: 2 / 3;

//     h3 {
//       font-size: 1rem;
//       white-space: normal;
//     }

//     p {
//       font-size: 1rem;
//     }
//   }

//   @media (min-width: 600px) and (max-width: 900px) {
//     grid-column: 1 / 3;
//     grid-row: 2 / 3;

//     h3 {
//       font-size: 1.05rem;
//     }

//     p {
//       font-size: 1.05rem;
//     }
// =======

//   /* ✅ MOBILE FIX FOR 480px */
//   @media (max-width: 480px) {
//     grid-template-columns: 1fr;
//     grid-template-rows: auto;
//     height: auto;
//     gap: 1.2rem;

//     img {
//       max-width: 100%;
//     }

//     ${CommunityContent} {
//       grid-column: 1;
//       grid-row: auto;
//       margin: 1rem 0 2rem;
//     }
//   }
// `;

// export const CommunityStat = styled.h1`
//   font-size: 5rem;
//   font-weight: 900;
//   color: #9aba58;
// `;
// export const CommunityButton = styled.button`
//   background-color: #1a1a1a;
//   border: none;
//   color: #c1e86e;
//   font-weight: 700;
//   padding: 0.6rem 1.2rem;
//   border-radius: 8px;
//   cursor: pointer;
//   transition: 0.3s ease;
//   margin-top: 1rem;
//   width: 200px;

//   &:hover {
//     background-color: #c1e86e;
//     color: #1a1a1a;
// >>>>>>> a62cfda61f1ae1114d9ba1c98a0101fa84a18017
//   }
// `;

// export const CommunityStat = styled.h1`
//   font-size: 5rem;
//   font-weight: 900;
//   color: #9aba58;

//   @media (min-width: 300px) and (max-width: 768px) {
//     font-size: 3rem;
//   }

//   @media (min-width: 600px) and (max-width: 900px) {
//     font-size: 4rem;
//   }
// `;

// export const CommunityButton = styled.button`
//   background-color: #1a1a1a;
//   border: none;
//   color: #c1e86e;
//   font-weight: 700;
//   padding: 0.6rem 1.2rem;
//   border-radius: 8px;
//   cursor: pointer;
//   transition: 0.3s ease;
//   margin-top: 1rem;
//   width: 200px;

//   &:hover {
//     background-color: #c1e86e;
//     color: #1a1a1a;
//   }

//   @media (min-width: 300px) and (max-width: 768px) {
//     width: 150px;
//     padding: 0.5rem 1rem;
//     font-size: 0.85rem;
//   }

//   @media (min-width: 600px) and (max-width: 900px) {
//     width: 180px;
//     padding: 0.55rem 1.1rem;
//     font-size: 0.9rem;
//   }
// `;

// export const FooterContainer = styled.footer`
//   width: 100%;
//   background-color: #1a1a1a;
//   color: #ffffff;
//   padding: 4rem 8%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-top: 4.5rem;

//   @media (min-width: 300px) and (max-width: 768px) {
//     padding: 3rem 4%;
//   }

//   @media (min-width: 600px) and (max-width: 900px) {
//     padding: 3.5rem 5%;
//   }
// `;

// export const FooterContent = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   flex-wrap: wrap;
//   align-items: flex-start;
//   gap: 2rem;

//   @media (min-width: 300px) and (max-width: 768px) {
//     flex-direction: column;
//     align-items: center;
//     text-align: center;
//   }

//   @media (min-width: 600px) and (max-width: 900px) {
//     flex-direction: column;
//     align-items: center;
//     text-align: center;
//   }
// `;

// export const FooterLogo = styled.div`
//   flex: 1;
//   width: 100%;
//   min-width: 450px;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;

//   img {
//     width: 120px;
//     height: 40px;
//     object-fit: contain;
//     margin-bottom: 1rem;

//     @media (min-width: 300px) and (max-width: 768px) {
//       width: 100px;
//       height: 35px;
//     }

//     @media (min-width: 600px) and (max-width: 900px) {
//       width: 110px;
//       height: 38px;
//     }
//   }

//   h3 {
//     color: #ffffff;
//     margin-bottom: 0.8rem;
//     font-size: 1.3rem;
//     font-weight: 600;

//     @media (min-width: 300px) and (max-width: 768px) {
//       font-size: 1.1rem;
//     }

//     @media (min-width: 600px) and (max-width: 900px) {
//       font-size: 1.2rem;
//     }
//   }

//   p {
//     color: #ffffff;
//     font-size: 0.9rem;
//     line-height: 1.6;
//     margin-bottom: 1.2rem;
//     width: 100%;

//     @media (min-width: 300px) and (max-width: 768px) {
//       font-size: 0.8rem;
//     }

//     @media (min-width: 600px) and (max-width: 900px) {
//       font-size: 0.85rem;
//     }
//   }
// `;

// export const SocialIcons = styled.div`
//   display: flex;
//   gap: 1rem;

//   a {
//     color: #000000;
//     background: #ffffff;
//     width: 38px;
//     height: 38px;
//     border-radius: 50%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     font-size: 1.2rem;
//     transition: all 0.3s ease;
// <<<<<<< HEAD

//     @media (min-width: 300px) and (max-width: 768px) {
//       width: 30px;
//       height: 30px;
//       font-size: 1rem;
//     }

//     @media (min-width: 600px) and (max-width: 900px) {
//       width: 34px;
//       height: 34px;
//       font-size: 1.05rem;
//     }
// =======
// >>>>>>> a62cfda61f1ae1114d9ba1c98a0101fa84a18017
//   }
// `;

// export const FooterColumn = styled.div`
//   flex: 1;
//   min-width: 180px;

//   h4 {
//     color: #ffffff;
//     font-size: 1rem;
//     margin-bottom: 1rem;
//     font-weight: 600;

//     @media (min-width: 300px) and (max-width: 768px) {
//       font-size: 0.9rem;
//     }

//     @media (min-width: 600px) and (max-width: 900px) {
//       font-size: 0.95rem;
//     }
//   }

//   ul {
//     list-style: none;
//     padding: 0;

//     li {
//       font-size: 0.9rem;
//       font-weight: 300;
//       margin-bottom: 0.6rem;
//       color: #ffffff;
//       cursor: pointer;
//       transition: color 0.3s ease;

//       &:hover {
//         color: #ffffff;
//       }

//       @media (min-width: 300px) and (max-width: 768px) {
//         font-size: 0.8rem;
//       }

//       @media (min-width: 600px) and (max-width: 900px) {
//         font-size: 0.85rem;
//       }
//     }
//   }
// `;

// export const FooterCopyright = styled.div`
//   width: 100%;
//   text-align: center;
//   margin-top: 5.5rem;
//   padding-top: 1.5rem;
//   border-top: 1px solid #3b3b3b;
//   font-size: 0.9rem;
//   color: #ffffff;
//   letter-spacing: 0.3px;

//   @media (min-width: 350px) and (max-width: 768px) {
//     font-size: 0.8rem;
//     margin-top: 4rem;
//   }

//   @media (min-width: 600px) and (max-width: 900px) {
//     font-size: 0.85rem;
//     margin-top: 4.5rem;
//   }
// `;
import styled from "styled-components";
import TransparencyImage from "../assets/trustgreen.png";
import TraceaidBg from "../assets/FrameImg.png";
import HeroBg from "../assets/HandsImg.jpg";

export const LandingContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 80px;
`;

export const NavBar = styled.nav`
  width: 100%;
  padding: 1rem 3%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f8f9fa;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    height: 35px;
    object-fit: contain;
  }

  span {
    font-size: 1.3rem;
    font-weight: 700;
    color: #000;
  }

  .divider {
    width: 1.5px;
    height: 45px;
    background-color: #a8a8a8;
    margin-left: 0.8rem;
  }
`;

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
`;

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
  }
`;

export const HeroSection = styled.section`
  width: 100%;
  height: 90vh;
  background: url(${HeroBg}) center/cover no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;

  @media (max-width: 480px) {
    height: 75vh;
    padding-top: 60px;
    background-position: center top;
  }
`;

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

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

export const HeroContent = styled.div`
  color: #fff;
  z-index: 2;
  max-width: 650px;

  h1 {
    font-family: Anton;
    font-size: 3rem;
    font-weight: 400;
    line-height: 100%;
    margin-bottom: 1rem;
  }

  p {
    font-family: Inter;
    font-weight: 700;
    font-size: 1rem;
    color: #eaeaea;
    margin-bottom: 2rem;
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
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.4rem;
    }
  }

  @media (max-width: 480px) {
    max-width: 95%;

    h1 {
      font-size: 1.8rem;
      line-height: 110%;
      margin-bottom: 0.7rem;
    }

    p {
      font-size: 0.9rem;
      font-weight: 600;
      margin-bottom: 1.6rem;
    }

    button {
      width: 80%;
      padding: 0.8rem 0;
      font-size: 0.9rem;
      border-radius: 8px;
    }
  }
`;

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
  }

  .top-icon {
    top: 3rem;
    left: 3rem;
  }

  .bottom-icon {
    bottom: 3rem;
    left: 3rem;
  }

  @media (max-width: 480px) {
    img {
      width: 50px;
      opacity: 0.7;
    }

    .top-icon {
      top: 1rem;
      left: 1rem;
    }

    .bottom-icon {
      bottom: 1rem;
      left: 1rem;
    }
  }
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  margin-top: 4rem;

  h1 {
    font-family: Anton;
    font-size: 2.9rem;
    font-weight: 400;
    color: #000000;
    font-style: Regular;
  }

  p {
    color: #000000;
    font-family: Inter;
    margin-top: 0.5rem;
    font-weight: 700;
    font-size: 1.1rem;
    font-style: bold;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.2rem;
    }
    p {
      font-size: 0.95rem;
    }
  }

  @media (max-width: 480px) {
    margin-top: 2.8rem;
    margin-bottom: 1.5rem;

    h1 {
      font-size: 1.6rem;
      line-height: 1.2;
    }

    p {
      font-size: 0.85rem;
      font-weight: 600;
      width: 85%;
      margin: 0.4rem auto 0 auto;
      line-height: 1.3rem;
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
    font-size: 2.9rem;
    font-weight: 400;
    margin-bottom: 1rem;
    font-family: Anton;
  }

  p {
    max-width: 700px;
    font-size: 1rem;
    line-height: 1.6;
    color: #ffffff;
  }

  @media (max-width: 768px) {
    width: 95%;
    padding: 4rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 1rem;

    h2 {
      font-size: 1.8rem;
      margin-bottom: 0.6rem;
    }

    p {
      font-size: 0.85rem;
      width: 90%;
      margin: 0 auto;
      line-height: 1.35rem;
    }
  }
`;

export const TransparencyCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  width: 100%;
  max-width: 950px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.4rem;
    margin-top: 2rem;
  }
`;

export const TransparencyCard = styled.div`
  background: #ffffff;
  color: #000000;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
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
    font-family: Anton;
    color: #000000;
    font-weight: 700;
    margin-bottom: 0.8rem;
    font-size: 1.4rem;
    font-style: Regular;
  }

  p {
    font-size: 0.95rem;
    font-weight: 400;
    line-height: 1.6;
    color: #000000;
  }

  @media (max-width: 768px) {
    text-align: center;
    padding: 1.8rem;

    .icon-wrap {
      margin: 0 auto 1rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1.5rem;

    h3 {
      font-size: 1.1rem;
      margin-bottom: 0.6rem;
    }

    p {
      font-size: 0.85rem;
      line-height: 1.35rem;
    }
  }
`;
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
  }

  p {
    max-width: 750px;
    font-size: 1rem;
    line-height: 1.6;
    color: #333;
  }

  @media (max-width: 768px) {
    padding: 4rem 2rem;
    margin-top: 2rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 1.2rem;
    margin-top: 4rem;

    h2 {
      font-size: 1.4rem;
      line-height: 1.3;
    }

    p {
      font-size: 0.85rem;
      line-height: 1.35rem;
      width: 90%;
      margin: 0 auto;
    }
  }
`;

export const TraceaidCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.8rem;
    margin-top: 2.2rem;
  }
`;

export const TraceaidCard = styled.div`
  padding: 2rem;
  border-radius: 12px;
  text-align: left;

  .iconfirst {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffb3ba;
  }
  .iconsecond {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffdfba;
  }
  .iconthird {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #baffc9;
  }
  .iconfourth {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #bae1ff;
  }

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

  @media (max-width: 768px) {
    text-align: center;

    .icon {
      margin: 0 auto 1rem;
    }
  }

  @media (max-width: 480px) {
    text-align: center;
    padding: 1.5rem 1rem;

    .iconfirst,
    .iconsecond,
    .iconthird,
    .iconfourth {
      margin: 0 auto 0.8rem;
    }

    h3 {
      font-size: 1rem;
    }

    p {
      font-size: 0.85rem;
      line-height: 1.35rem;
    }
  }
`;

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

  @media (max-width: 480px) {
    padding: 3rem 1.2rem;
    margin-top: 3rem;
    gap: 2rem;
  }
`;

export const FundraisingContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: -1.5rem;

  h2 {
    font-family: Inter;
    font-size: 3rem;
    font-weight: 400;
    color: #3a4621;
    margin-bottom: 1.2rem;
  }

  p {
    font-size: 1rem;
    color: #333;
    line-height: 1.7;
    max-width: 450px;
    margin-bottom: 2rem;
  }

  button {
    background-color: #1a1a1a;
    color: #c1e86e;
    font-weight: 600;
    border: none;
    border-radius: 6px;
    padding: 0.9rem 3rem;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
      background-color: #c1e86e;
      color: #000;
    }
  }

  @media (max-width: 1024px) {
    align-items: center;
    text-align: center;
    p {
      max-width: 90%;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 1.8rem;
      line-height: 1.25;
      text-align: center;
    }

    p {
      font-size: 0.9rem;
      max-width: 95%;
      margin-bottom: 1.6rem;
    }

    button {
      padding: 0.85rem 2.2rem;
      font-size: 0.9rem;
    }
  }
`;

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
  }

  @media (max-width: 1024px) {
    margin-top: 2.5rem;

    img {
      max-width: 85%;
    }
  }

  @media (max-width: 480px) {
    margin-top: 1.5rem;

    img {
      max-width: 100%;
      border-radius: 8px;
    }
  }
`;

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
  }
`;

export const JoinUsSection = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 4rem;
  /* margin-bottom: -3.5rem; */

  h2 {
    font-family: Anton;
    font-size: 3.5rem;
    font-weight: 400;
    color: #000000;
    font-style: Regular;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }
  }
`;

export const CommunitySection = styled.section`
  width: 100%;
  padding: 4rem 8%;
  background-color: #ffffff;
  /* margin-top: 3rem; */
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) {
    padding: 2.5rem 1.2rem;
  }
`;

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

  @media (max-width: 480px) {
    h3 {
      white-space: normal;
      line-height: 1.4;
      font-size: 0.95rem;
    }

    p {
      font-size: 0.9rem;
      margin-top: 0.4rem;
    }
  }
`;

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
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  /* ✅ MOBILE FIX FOR 480px */
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    height: auto;
    gap: 1.2rem;

    img {
      max-width: 100%;
    }

    ${CommunityContent} {
      grid-column: 1;
      grid-row: auto;
      margin: 1rem 0 2rem;
    }
  }
`;

export const CommunityStat = styled.h1`
  font-size: 5rem;
  font-weight: 900;
  color: #9aba58;
`;
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
`;
export const FooterContainer = styled.footer`
  width: 100%;
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 4rem 8%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4.5rem;
`;

export const FooterContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 2rem;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

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
  }

  h3 {
    color: #ffffff;
    margin-bottom: 0.8rem;
    font-size: 1.3rem;
    font-weight: 600;
  }

  p {
    color: #ffffff;
    font-size: 0.9rem;
    line-height: 1.6;
    margin-bottom: 1.2rem;
    width: 100%;
  }
`;

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
  }
`;

export const FooterColumn = styled.div`
  flex: 1;
  min-width: 180px;

  h4 {
    color: #ffffff;
    font-size: 1rem;
    margin-bottom: 1rem;
    font-weight: 600;
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
    }
  }
`;

export const FooterCopyright = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid #3b3b3b;
  font-size: 0.9rem;
  color: #ffffff;
  letter-spacing: 0.3px;
  margin-top: 5.5rem;
`;