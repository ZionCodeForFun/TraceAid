import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 28px;
  background: #ffffff;
`;

export const UploadLabel = styled.label`
margin-top: 4.5rem;
  align-self: center;
  position: relative;
  cursor: pointer;

  input {
    display: none;
  }

  &:hover img {
    opacity: 0.85;
    border-color: #000;
  }

  &::after {
    content: "Upload";
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
    color: #555;
  }
`;

export const ProfileImage = styled.img`
  width: 125px;
  height: 125px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #d6d6d6;
  background: #d6d6d6;
`;

export const SectionTitle = styled.h2`
font-family: Inter;
font-weight: 700;
font-style: Bold;
font-size: 2rem;
/* line-height: 100%;
letter-spacing: 0%; */

`;

export const FormRow = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;

  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .input-icon-wrapper {
    position: relative;
    width: 100%;
  }

  .input-icon {
    position: absolute;
    top: 50%;
    left: 12px;
    transform: translateY(-50%);
    font-size: 19px;
    color: #707070;
    pointer-events: none;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  color: #555;
  margin-bottom: 6px;
  font-weight: 500;
`;

export const Input = styled.input`
  padding: 13px 15px;
  padding-left: 42px;
  border: 1px solid #cfcfcf;
  border-radius: 8px;
  outline: none;
  font-size: 15px;
  width: 100%;
  background: #fff;
  transition: 0.2s ease;

  &:focus {
    border-color: #000;
  }

  &::placeholder {
    color: #9c9c9c;
    font-size: 14px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 14px;
  margin-top: 20px;
  margin-bottom: 2rem;

  @media (max-width: 500px) {
    flex-direction: column;
    button {
      width: 100%;
    }
  }
`;

export const OutlineBtn = styled.button`
  padding: 12px 24px;
  border: 1px solid #617437;
  background: #ffffff;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  color: #333333;

  &:hover {
    background: #ffffff;
  }
`;

export const PrimaryBtn = styled.button`
  padding: 12px 24px;
  border: none;
  background: #1A1A1A;
  color: #C1E86E;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: 0.2s ease;

  &:hover {
    opacity: 0.85;
  }

  &:disabled {
    background: #b3b3b3;
    cursor: not-allowed;
  }
`;
