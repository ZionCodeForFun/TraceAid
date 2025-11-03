import React from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { PiCameraFill } from "react-icons/pi";

const MilestoneVpending = ({ onClose }) => {
  const pictures = [
    {
      id: 1,
      title: "Crayons and Erasers 5,000 saplings",

      image:
        "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 2,
      title: "Pencils and Notepads 2,000 saplings",

      image:
        "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 3,
      title: "Color Pens and Markers 3,500 saplings",
      image:
        "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 4,
      title: "Books and Sheets 4,000 saplings",
      image:
        "https://images.unsplash.com/photo-1553729784-e91953dec042?auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 5,
      title: "Books and Sheets 4,000 saplings",
      image:
        "https://images.unsplash.com/photo-1553729784-e91953dec042?auto=format&fit=crop&w=600&q=60",
    },
  ];

  return (
    <Overlay>
      <ModalContainer>
        <Header>
          <h2>Funds Disbursement Request</h2>
          <IoClose className="close-icon" onClick={onClose} />
          <p>Review evidence and bank details before approving disbursement</p>
        </Header>

        <Content>
          <Section>
            <Label>Campaign Name</Label>
            <Value>Clean Water Initiative</Value>

            <Label>Milestone</Label>
            <Value>Phase 1: Well Construction</Value>

            <Label>Campaign ID</Label>
            <Value>CMP-001</Value>

            <Label>NGO</Label>
            <Value>Hope Foundation</Value>

            <Label>Requested Amount</Label>
            <Value>₦20,000</Value>
          </Section>

          <Divider />

          <Section>
            <Label>Disbursement Description</Label>
            <Value>
              Request for disbursement of funds for completed Phase 1 milestone.
              All 5 water wells have been constructed and are operational.
            </Value>
          </Section>

          <Divider />

          <Section>
            <Label>Bank Account Details</Label>
            <BankBox>
              <div>
                <span>Account Name:</span>
                <strong>Hope Foundation</strong>
              </div>
              <div>
                <span>Account Number:</span>
                <strong>1234567890</strong>
              </div>
            </BankBox>
          </Section>

          <Divider />

          <PictureEvidence>
            <div className="header">
              <h3>Picture Evidence</h3>
              <div className="badge">
                <PiCameraFill /> 5/5 Required
              </div>
            </div>

            <div className="grid">
              {pictures.map((item, index) => (
                <div className="card" key={item.id}>
                  <div className="image-box">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="image_disc">
                    {" "}
                    <span className="img-label">Image {index + 1}</span>
                    <p>{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </PictureEvidence>

          <DisbursementInfo>
            <h4>Disbursement Completed</h4>
            <div className="info-box">
              <div className="row">
                <span>Disbursement Date:</span>
                <strong>2024-10-17</strong>
              </div>
              <div className="row">
                <span>Transaction Reference:</span>
                <strong>TXN-2025-10-17-001</strong>
              </div>
              <div className="row">
                <span>Amount Disbursed:</span>
                <strong>₦30,000</strong>
              </div>
            </div>
          </DisbursementInfo>
        </Content>

        <Footer>
          <button className="reject">Close</button>
        </Footer>
      </ModalContainer>
    </Overlay>
  );
};

export default MilestoneVpending;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  width: 500px;
  height: 600px;
  background: #fff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Header = styled.div`
  position: relative;
  padding: 20px 24px;
  border-bottom: 1px solid #e6e6e6;

  h2 {
    font-size: 18px;
    font-weight: 600;
    color: #111;
    margin-bottom: 4px;
  }

  p {
    font-size: 14px;
    color: #666;
  }

  .close-icon {
    position: absolute;
    top: 22px;
    right: 24px;
    font-size: 20px;
    color: #444;
    cursor: pointer;
  }
`;

const Content = styled.div`
  flex: 1;
  padding: 20px 24px;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.div`
  font-size: 13px;
  color: #888;
  margin-bottom: 2px;
`;

const Value = styled.div`
  font-size: 14px;
  color: #222;
  font-weight: 500;
  margin-bottom: 8px;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #eee;
  margin: 16px 0;
`;

const BankBox = styled.div`
  background: #fafafa;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 12px;

  div {
    margin-bottom: 6px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;

    span {
      color: #666;
    }

    strong {
      color: #000;
    }
  }
`;
const PictureEvidence = styled.div`
  margin-top: 1rem;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;

    h3 {
      font-size: 15px;
      font-weight: 600;
      color: #222;
    }

    .badge {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      background: #111;
      color: #fff;
      padding: 6px 10px;
      border-radius: 20px;
    }
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .card {
    text-align: left;
    display: flex;
    flex-direction: column;

    .image-box {
      width: 100%;
      height: 120px;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
      margin-bottom: 8px;
      background: #fff;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
    }
    .image_disc {
      width: fit-content;
      display: flex;
      align-items: center;
      .img-label {
        display: flex;
        background: #ffffff;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
        justify-content: center;
        color: #1a1a1a;
        font-size: 11px;
        height: 20px;
        border-radius: 20px;
        margin-bottom: 4px;
        margin-right: 4px;
        width: 60px;
      }
      p {
        font-size: 10px;
        color: #333;
        margin: 0;
      }
    }
  }
`;
const DisbursementInfo = styled.div`
  margin-top: 1.5rem;

  h4 {
    font-size: 14px;
    font-weight: 600;
    color: #14ae5c; /* Green title */
    margin-bottom: 8px;
  }

  .info-box {
    background: #f4fff9;
    border: 1px solid #d3f2e1;
    border-radius: 8px;
    padding: 14px 16px;

    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 13px;
      margin-bottom: 6px;

      span {
        color: #555;
      }

      strong {
        color: #111;
        font-weight: 500;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

const Footer = styled.div`
  padding: 16px 24px;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  background: #fff;

  button {
    padding: 10px 18px;
    border-radius: 8px;
    border: none;
    font-weight: 500;
    cursor: pointer;
  }

  .reject {
    background: transparent;
    border: 1px solid #ccc;
    color: #333;
  }

  .approve {
    background: #111;
    color: #fff;
  }
`;
