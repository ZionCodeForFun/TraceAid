import React from "react";
import styled, { keyframes } from "styled-components";
import { IoCheckmarkCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const SuccessModal = ({ close = () => {}, reference }) => {
  const nav = useNavigate();

  return (
    <Overlay>
      <ModalBox>
        <IoCheckmarkCircle className="icon" />
        <h2>Payment Successful!</h2>
        <p>Your donation has been processed successfully.  
        Thank you for making a difference 🫶</p>

        <button
          className="btn"
          onClick={() => {
            close();
            nav("/my_donations");
          }}
        >
          Go to Dashboard
        </button>
      </ModalBox>
    </Overlay>
  );
};

export default SuccessModal;


const fadeIn = keyframes`
  0% { transform: scale(0.4); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ModalBox = styled.div`
  width: 420px;
  background: #fff;
  border-radius: 18px;
  padding: 35px 30px;
  text-align: center;
  animation: ${fadeIn} 0.35s ease;

  h2 {
    font-size: 24px;
    margin-top: 10px;
    color: #222;
  }

  p {
    color: #555;
    font-size: 15px;
    margin: 10px 0 20px;
    line-height: 1.4;
  }

  .icon {
    font-size: 90px;
    color: #4BB543;
    margin-bottom: 5px;
  }

  .btn {
    width: 100%;
    padding: 12px;
    background: #1a1a1a;
    color: #c1e86e;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    cursor: pointer;
    transition: 0.25s;
  }

  .btn:hover {
    background: #c1e86e;
    color: #1a1a1a;
  }
`;
