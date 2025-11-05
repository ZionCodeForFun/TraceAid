import styled from "styled-components";

export const AboutPageSection = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
`;

export const AboutIntro = styled.div`
  text-align: center;
  margin: 6rem 0 4rem 0;
  color: #2b2b2b;

  h1 {
    font-size: 3rem;
    font-weight: 800;
    color: #000000;
    margin-bottom: 1rem;

    @media (max-width: 1024px) {
      font-size: 2.5rem;
    }
    @media (max-width: 768px) {
      font-size: 2.2rem;
    }
    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }

  p {
    font-size: 1.2rem;
    color: #000000;
    line-height: 1.7;
    max-width: 664px;
    margin: 0 auto;

    @media (max-width: 1024px) {
      font-size: 1.1rem;
    }
    @media (max-width: 768px) {
      font-size: 1rem;
      padding: 0 1rem;
    }
    @media (max-width: 480px) {
      font-size: 0.95rem;
    }
  }
`;

export const VisionMissionSection = styled.section`
  width: 90%;
  padding: 5rem 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    padding: 3rem 1rem;
  }
`;

export const VisionMissionWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  gap: 3rem;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

export const VisionMissionText = styled.div`
  flex: 1;

  h2 {
    font-size: 1.4rem;
    font-weight: 800;
    color: #000000;
    margin-bottom: 2rem;

    @media (max-width: 900px) {
      font-size: 1.2rem;
      text-align: center;
    }

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }

  .vision,
  .mission {
    margin-bottom: 2rem;
    position: relative;
    padding: 1.2rem 1.2rem 1.2rem 1.5rem;
    border-radius: 10px;

    @media (max-width: 900px) {
      padding: 1rem 1rem 1rem 1.2rem;
      max-width: 450px;
      margin: 1rem auto;
    }

    @media (max-width: 768px) {
      padding: 0.9rem 0.9rem 0.9rem 1rem;
    }
  }

  .vision::before,
  .mission::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 4px;
    height: 100%;
    border-radius: 4px;

    @media (max-width: 768px) {
      width: 3px;
    }
  }

  h3 {
    font-size: 0.9rem;
    font-weight: 700;
    color: #000000;
    margin-bottom: 0.5rem;

    @media (max-width: 900px) {
      font-size: 0.85rem;
    }

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }

  p {
    color: #656563;
    line-height: 1.7;
    font-size: 0.9rem;
    max-width: 500px;
    margin: 0;

    @media (max-width: 900px) {
      font-size: 0.85rem;
      max-width: 400px;
    }

    @media (max-width: 768px) {
      font-size: 0.8rem;
      max-width: 90%;
    }
  }
`;

export const VisionMissionImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  img {
    width: 100%;
    max-width: 480px;
    border-radius: 12px;
    object-fit: cover;

    @media (max-width: 900px) {
      max-width: 400px;
    }

    @media (max-width: 768px) {
      max-width: 320px;
    }

    @media (max-width: 480px) {
      max-width: 90%;
    }
  }
`;

export const CoreValuesSection = styled.section`
  width: 100%;
  background: ${({ background }) =>
    `url(${background}) center/cover no-repeat`};
  padding: 6rem 8%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 1024px) {
    padding: 4rem 5%;
  }

  @media (max-width: 768px) {
    padding: 3rem 2%;
  }
`;

export const CoreValuesHeader = styled.div`
  margin-bottom: 3rem;

  h2 {
    font-size: 2.3rem;
    font-weight: 800;
    color: #1a1a1a;
    margin-bottom: 0.6rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.7rem;
    }
  }

  p {
    font-size: 1.1rem;
    color: #333333;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }
`;

export const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 900px;
`;

export const ValueCard = styled.div`
  background: #ffffff;
  border-radius: 14px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  padding: 2.5rem 2rem;
  text-align: center;

  .icon {
    font-size: 2.5rem;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 1.2rem auto;

    @media (max-width: 768px) {
      width: 50px;
      height: 50px;
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }

  p {
    font-size: 1rem;
    color: #333333;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 0.95rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }
`;

export const WhyExistSection = styled.section`
  width: 80%;
  margin: 6rem auto;
  text-align: center;
  color: #333333;
  line-height: 1.8;
  background: #ffffff;

  h2 {
    font-size: 2.4rem;
    font-weight: 800;
    color: #333333;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.6rem;
    }
  }

  h3 {
    font-size: 1rem;
    font-weight: 600;
    color: #333333;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      font-size: 0.95rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }

  p {
    font-size: 1rem;
    color: #333333;
    max-width: 850px;
    margin: 0 auto 1.5rem auto;

    @media (max-width: 768px) {
      font-size: 0.95rem;
      max-width: 90%;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;
