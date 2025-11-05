import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 1rem;
  background: #ffffff;
`;

export const ContactWrapper = styled.form`
  width: 100%;
  max-width: 950px;
  background: #ffffff;
  padding: 2.5rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: 800;
  margin: 0;
`;

export const Subtitle = styled.p`
  text-align: center;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  color: #777;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1.5px solid #dcdcdc;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
`;

export const Select = styled.select`
  width: 100%;
  padding: 1rem;
  border: 1.5px solid #dcdcdc;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  background: white;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 1.5px solid #dcdcdc;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  resize: none;
  height: 150px;
`;

export const Button = styled.button`
  width: 120px;
  padding: 0.5rem 1rem;
  background: #1A1A1A;
  color: #C1E86E;
  border: none;
  border-radius: 6px;
  font-size: 0.95rem;
  cursor: pointer;
  margin-top: 10px;
  transition: 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;