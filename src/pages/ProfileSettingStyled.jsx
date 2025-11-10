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

  @media (min-width: 300px) and (max-width: 768px) {
    padding: 20px 0;
    gap: 22px;
    margin-top: 2rem;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    padding: 25px 0;
    gap: 25px;
    margin-top: 2.5rem;
  }
`;

/* UploadLabel */
export const UploadLabel = styled.label`
  margin-top: 4.5rem;
  align-self: center;
  position: relative;
  cursor: pointer;

  input {
    display: none;
  }

  .edit-icon {
    position: absolute;
    bottom: 5px;
    right: 5px;
    background: #617437;
    color: #fff;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
  }

  &::after {
    content: "Upload";
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
    color: #555;

    @media (min-width: 300px) and (max-width: 768px) {
      font-size: 11px;
    }

    @media (min-width: 600px) and (max-width: 900px) {
      font-size: 11.5px;
    }
  }
`;

export const ProfileImage = styled.img`
  width: 125px;
  height: 125px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #d6d6d6;
  background: #d6d6d6;

  @media (min-width: 300px) and (max-width: 768px) {
    width: 100px;
    height: 100px;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    width: 110px;
    height: 110px;
  }
`;

/* SectionTitle */
export const SectionTitle = styled.h2`
  font-family: Inter;
  font-weight: 700;
  font-style: Bold;
  font-size: 2rem;

  @media (min-width: 300px) and (max-width: 768px) {
    font-size: 1.6rem;
    margin-left: 10px;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    font-size: 1.8rem;
  }
`;

/* FormRow */
export const FormRow = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;

  @media (max-width: 650px) {
    flex-direction: column;
  }

  @media (min-width: 300px) and (max-width: 768px) {
    gap: 15px;
    padding-left: 10px;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    gap: 18px;
  }
`;

/* InputGroup */
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

    @media (min-width: 300px) and (max-width: 768px) {
      font-size: 16px;
    }

    @media (min-width: 600px) and (max-width: 900px) {
      font-size: 17px;
    }
  }
`;

/* Label */
export const Label = styled.label`
  font-size: 14px;
  color: #555;
  margin-bottom: 6px;
  font-weight: 500;

  @media (min-width: 300px) and (max-width: 768px) {
    font-size: 12px;
    margin-left: 10px;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    font-size: 13px;
  }
`;

/* Input */
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

  @media (min-width: 300px) and (max-width: 768px) {
    font-size: 13px;
    padding: 11px 12px;
    padding-left: 38px;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    font-size: 14px;
    padding: 12px 14px;
    padding-left: 40px;
  }
`;

/* ButtonGroup */
export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 14px;
  margin-top: 20px;
  margin-bottom: 1.6rem;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    button {
      width: 95%;


    }
  }

  @media (min-width: 300px) and (max-width: 768px) {
    gap: 10px;
    margin-top: 18px;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    gap: 12px;
    margin-top: 19px;
  }
`;

/* OutlineBtn */
export const OutlineBtn = styled.button`
  padding: 12px 24px;
  border: 1px solid #617437;
  background: #ffffff;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  color: #333333;

  &:hover {
    background: #c1e86e;
    color: #000;
  }

  @media (min-width: 300px) and (max-width: 768px) {
    padding: 10px 20px;
    font-size: 0.85rem;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    padding: 11px 22px;
    font-size: 0.9rem;
  }
`;

/* PrimaryBtn */
export const PrimaryBtn = styled.button`
  padding: 12px 24px;
  border: none;
  background: #1a1a1a;
  color: #c1e86e;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: 0.2s ease;

  &:hover {
    opacity: 0.85;
    background-color: #c1e86e;
    color: #000000;
  }

  &:disabled {
    background: #b3b3b3;
    cursor: not-allowed;
  }

  @media (min-width: 300px) and (max-width: 768px) {
    padding: 10px 20px;
    font-size: 12px;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    padding: 11px 22px;
    font-size: 13px;
  }
`;
