import React from "react";
import styled from "styled-components";
import { IoIosLink } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoCopyOutline } from "react-icons/io5";
import { toast } from "react-toastify";

const ShareModal = ({ open, onClose, campaign, onRecordShare, }) => {
  if (!open) return null;

  const shareLink = `https://traceaid.com/campaign/${campaign?._id}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareLink);
    toast.success("Link copied!");
    onRecordShare("CopyLink");
  };

  return (
    <Overlay>
      <ModalBox>
        <CloseBtn onClick={onClose}>
          <IoClose size={22} />
        </CloseBtn>

        <Circle>
          <IoIosLink size={22} />
        </Circle>

        <Title>Share with friends</Title>

        <Message>
          I just supported this cause! You can too. <br />
          Every little bit counts
        </Message>

        <LinkBox>
          <LinkInput value={shareLink} readOnly />
          <CopyIcon onClick={copyToClipboard}>
            <IoCopyOutline size={22} />
          </CopyIcon>
        </LinkBox>

        <SocialRow>

          <SocialIcon
            href={`https://www.facebook.com/sharer/sharer.php?u=${shareLink}`}
            target="_blank"
            onClick={() => onRecordShare("Facebook")}  
          >
            <FaFacebookF size={20} />
          </SocialIcon>

          <SocialIcon
            href="https://www.instagram.com/"
            target="_blank"
            onClick={() => onRecordShare("Instagram")} 
          >
            <FaInstagram size={20} />
          </SocialIcon>

          <SocialIcon
            href={`https://twitter.com/intent/tweet?url=${shareLink}`}
            target="_blank"
            onClick={() => onRecordShare("X")}          
          >
            <FaXTwitter size={20} />
          </SocialIcon>

        </SocialRow>
      </ModalBox>
    </Overlay>
  );
};

export default ShareModal;



const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ModalBox = styled.div`
  width: 90%;
  max-width: 380px;
  background: #fff;
  padding: 25px;
  border-radius: 14px;
  position: relative;
  text-align: center;
`;

const CloseBtn = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
`;

const Circle = styled.div`
  width: 50px;
  height: 50px;
  margin: 10px auto 20px;
  border-radius: 50%;
  background: #ecf8d4;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
`;

const Title = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 8px;
`;

const Message = styled.p`
  font-size: 0.9rem;
  line-height: 1.4;
  color: #666;
  margin-bottom: 15px;
`;

const LinkBox = styled.div`
  width: 100%;
  background: #f3f3f3;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const LinkInput = styled.input`
  width: 100%;
  border: none;
  background: transparent;
  font-size: 0.85rem;
  color: #444;
  outline: none;
`;

const CopyIcon = styled.div`
  cursor: pointer;
  color: #555;
`;

const SocialRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const SocialIcon = styled.a`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: #222;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;
