import styled from 'styled-components';

export const HowitworksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: #ffffff;
  margin-top: 5rem;
  gap: 2rem;
`;

export const StepSection = styled.section`
  width: 100%;
  text-align: center;
  margin-top: 3rem;
  padding: 0 8%;

  h2 {
    font-family: Anton;
    font-style: Regular;
    font-weight: bold;
    color: #333333;
    font-size: 3.5rem;
  }

  h3 {
    font-family: Inter;
    font-weight: 400;
    font-style: medium;
    color: #333333;
    font-size: 1.3rem;
  }

  p {
    color: #333333;
    font-weight: 500;
    margin-top: 0.6rem;

  }

  @media (max-width: 768px) {
    h2, h3 {
      font-size: 1.6rem;
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  width: 90%;
  margin-top: 2.5rem;
  border-top: 1px solid transparent;
  flex-wrap: wrap;
`;

export const InfoCard = styled.div`
  flex: 1;
  min-width: 280px;
  max-width: 320px;
  background: #fff;
  padding: 1.8rem 1.5rem;
  text-align: center;
  border-right: 1px solid #efefef;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h4 {
    font-size: 1rem;
    font-weight: 500;
    margin-top: 1rem;
    color: #333333;
  }

  p {
    color: #666;
    margin-top: 0.5rem;
    font-size: 0.95rem;
    line-height: 1.5;
  }

  &:last-child {
    border-right: none;
  }

  @media (max-width: 768px) {
    border-right: none;
    border-bottom: 1px solid #ddd;

    &:last-child {
      border-bottom: none;
    }
  }
`;

export const Icon = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #9772fe;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Icon2 = styled(Icon)`
  background-color: #4edffe;
`;
export const Icon3 = styled(Icon)`
  background-color: #f2b8eb;
`;
export const Icon4 = styled(Icon)`
  background-color: #ffdfba;
`;
export const Icon5 = styled(Icon)`
  background-color: #baffc9;
`;
export const Icon6 = styled(Icon)`
  background-color: #bae1ff;
`;

export const CTASection = styled.section`
  position: relative;
  width: 100%;
  height: max-content;
  text-align: center;
  margin-top: 5rem;
  padding: 6rem 1rem;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #1a1a1a;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.75);
  }

  h2, p, button {
    position: relative;
    z-index: 2;
  }

  h2 {
    font-size: 2rem;
    font-weight: 800;
    color: #333333;
  }

  p {
    color: #1d1f1d;
    margin-top: 0.6rem;
  }

  button {
    background-color: #1a1a1a;
    border: none;
    color: #c1e86e;
    font-weight: bold;
    padding: 0.9rem 1.4rem;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 1.5rem;
    transition: 0.3s ease;

    &:hover {
      background-color: #c1e86e;
      color: #1a1a1a;
    }
  }


  @media (max-width: 768px) {
    padding: 4rem 1rem;

    h2 {
      font-size: 1.6rem;
    }
  }
`;










// import styled from 'styled-components';

// export const HowitworksContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;
//   background: #fff;
// `;

// export const StepSection = styled.section`
//   width: 100%;
//   text-align: center;
//   margin-top: 3rem;
//   padding: 0 8%;

//   h2, h3 {
//     font-weight: 800;
//     color: #1a1a1a;
//   }

//   p {
//     color: #555;
//     margin-top: 0.6rem;
//   }

//   @media (max-width: 768px) {
//     h2, h3 {
//       font-size: 1.6rem;
//     }
//   }
// `;

// export const InfoContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: flex-start;
//   gap: 2rem;
//   margin-top: 2.5rem;
//   width: 90%;
//   flex-wrap: wrap;
// `;

// export const InfoCard = styled.div`
//   flex: 1;
//   min-width: 280px;
//   max-width: 320px;
//   background: #fff;
//   padding: 1.5rem;
//   border-radius: 12px;
//   text-align: center;
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

//   h4 {
//     font-size: 1.1rem;
//     font-weight: 700;
//     margin-top: 1rem;
//     color: #222;
//   }

//   p {
//     color: #666;
//     margin-top: 0.5rem;
//     font-size: 0.95rem;
//   }
// `;

// export const Icon = styled.div`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   background-color: #9772fe;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   justify-self: center;
// `;
// export const Icon2 = styled.div`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   background-color: #4edffe;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   justify-self: center;
// `;
// export const Icon3 = styled.div`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   background-color: #f2b8eb;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   justify-self: center;
// `;
// export const Icon4 = styled.div`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   background-color: #ffdfba;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   justify-self: center;
// `;
// export const Icon5 = styled.div`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   background-color: #baffc9;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   justify-self: center;
// `;
// export const Icon6 = styled.div`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   background-color: #bae1ff;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   justify-self: center;
// `;