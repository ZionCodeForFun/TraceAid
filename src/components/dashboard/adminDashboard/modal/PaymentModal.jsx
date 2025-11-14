import React, { useState } from "react";
import styled from "styled-components";
import { X, FileText, Image as ImageIcon } from "lucide-react";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const PaymentModal = ({ onClose, data }) => {
  const { token } = useSelector((state) => state.adminAuth);
  const [loading, setLoading] = useState(false);
  const [note, setNote] = useState("");

  const handlePay = async () => {
    try {
      setLoading(true);
      const body = {
        fundraiserId: data?.fundraiser?._id || data?.fundraiser,
        campaignId: data?.campaign?._id || data?.campaign,
        payoutId: data?._id,
        milestoneId: data?.milestone?._id || data?.milestone,
        note: note || "",
      };

      console.log("REQUEST BODY:", body);

      const res = await axios.post(
        `${import.meta.env.VITE_CraetePayout_BaseUrl}/create-payout`,
        body,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(res.data?.data?.message);
      console.log("PAYOUT RESPONSE:", res.data);
      onClose();
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Failed to process payout");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Holder>
        <Wrapper>
          <Header>
            <Title>Milestone Payout Details</Title>
            <Subtitle>Review payout information before proceeding</Subtitle>
            <CloseBtn onClick={onClose}>
              <X size={18} />
            </CloseBtn>
          </Header>

          <Content>
            <Row>
              <div>
                <Label>CampaignId</Label>
                <Value>{data?.campaign._id}</Value>
              </div>

              <div>
                <Label>NGO</Label>
                <Value>{data?.fundraiser._id}</Value>
              </div>
            </Row>

            <Row>
              <div>
                <Label>Milestone ID</Label>
                <Value>{data?.milestone}</Value>
              </div>

              <div>
                <Label>Submitted Date</Label>
                <Value>
                  {data?.createdAt
                    ? new Date(data.createdAt).toLocaleDateString()
                    : "—"}
                </Value>
              </div>
            </Row>

            <SectionTitle>Payout Amount</SectionTitle>

            <AmountBoxWrapper>
              <AmountBox>
                <Currency>₦{data?.amount?.toLocaleString() || "0"}</Currency>
                <BoxLabel>Amount Requested</BoxLabel>
              </AmountBox>

              <AmountBox>
                <Currency>₦{data?.amount?.toLocaleString() || "0"}</Currency>
                <BoxLabel>Amount Approved</BoxLabel>
              </AmountBox>
            </AmountBoxWrapper>

            <SectionTitle>Notes (Optional)</SectionTitle>
            <Textarea
              placeholder="Add any notes about this payout..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </Content>

          <Footer>
            <CancelBtn onClick={onClose}>Cancel</CancelBtn>
            <PayBtn onClick={handlePay}>{loading ? "Paying" : "Pay"}</PayBtn>
          </Footer>
        </Wrapper>
      </Holder>
    </Container>
  );
};

export default PaymentModal;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const Holder = styled.article`
  width: 520px;
  height: 540px;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Header = styled.div`
  padding: 20px 24px;
  position: relative;
  border-bottom: 1px solid #e5e5e5;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  color: #1e1e1e;
`;

const Subtitle = styled.p`
  font-size: 13px;
  color: #6b6b6b;
  margin-top: 4px;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #666;
`;

const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px 24px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
`;

const Label = styled.p`
  font-size: 13px;
  color: #7a7a7a;
  margin-bottom: 3px;
`;

const Value = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #1e1e1e;
`;

const SectionTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: #1e1e1e;
  margin: 18px 0 10px;
`;

const AmountBoxWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

const AmountBox = styled.div`
  flex: 1;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  text-align: center;
  padding: 10px;
`;

const Currency = styled.h4`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
`;

const BoxLabel = styled.p`
  font-size: 12px;
  color: #6b6b6b;
  margin-top: 5px;
`;

const ProofList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ProofItem = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e5e5e5;
  background: #fafafa;
  border-radius: 8px;
  padding: 10px 14px;
  gap: 10px;
`;

const FileName = styled.span`
  font-size: 13px;
  color: #1e1e1e;
`;

const SmallText = styled.p`
  font-size: 12px;
  color: #888;
`;

const Textarea = styled.textarea`
  width: 100%;
  min-height: 70px;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 10px;
  font-size: 13px;
  outline: none;
  resize: none;
  &::placeholder {
    color: #999;
  }
`;

const Footer = styled.div`
  padding: 12px 24px;
  border-top: 1px solid #e5e5e5;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

const CancelBtn = styled.button`
  background: transparent;
  border: 1px solid #ccc;
  color: #333;
  padding: 8px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background: #f5f5f5;
  }
`;

const PayBtn = styled.button`
  background: #1a1a1a;
  color: white;
  border: none;
  padding: 8px 22px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    opacity: 0.9;
  }
`;
