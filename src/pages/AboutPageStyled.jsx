import styled from "styled-components";

export const AboutPageSection = styled.div`
  width: 100%;
  padding: 4rem 8%;
  background: #fff;
`;

export const AboutIntro = styled.section`
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 2.4rem;
    font-weight: 800;
  }
  p {
    font-size: 1.1rem;
    color: #444;
  }
`;

export const VisionMissionSection = styled.section``;
export const VisionMissionWrapper = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;
export const VisionMissionText = styled.div`
  flex: 1;
`;
export const VisionMissionImage = styled.div`
  flex: 1;
  img {
    width: 100%;
    border-radius: 8px;
  }
`;

export const CoreValuesSection = styled.section``;
export const CoreValuesHeader = styled.div``;
export const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;
export const ValueCard = styled.div``;
export const WhyExistSection = styled.section``;
