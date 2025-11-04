import React from "react";
import styled from "styled-components";
import { X, FileText, Image as ImageIcon } from "lucide-react";

const MilestoneVpending = ({ onClose, data }) => {
  return (
    <Container>
      <Holder>
        <Wrapper>
          <Header>
            <Title>Milestone Verification Details</Title>
            <Subtitle>Review milestone completion and supporting documents</Subtitle>
            <CloseBtn onClick={onClose}>
              <X size={18} />
            </CloseBtn>
          </Header>

          <Content>
            <Row>
              <div>
                <Label>Campaign Name</Label>
                <Value>{data.campaign}</Value>
              </div>
              <div>
                <Label>NGO</Label>
                <Value>{data.ngo}</Value>
              </div>
            </Row>

            <SmallText>{data.subCampaign}</SmallText>

            <Row>
              <div>
                <Label>Milestone Phase</Label>
                <Value>{data.milestone}</Value>
              </div>
              <div>
                <Label>Submitted Date</Label>
                <Value>{data.submitted}</Value>
              </div>
            </Row>

            <PhaseText>{data.subMilestone}</PhaseText>

            <SectionTitle>Milestone Amount</SectionTitle>

            <AmountBoxWrapper>
              <AmountBox>
                <Currency>{data.amount}</Currency>
                <BoxLabel>Target Amount</BoxLabel>
              </AmountBox>
              <AmountBox>
                <Currency>{data.amount}</Currency>
                <BoxLabel>Amount Raised</BoxLabel>
              </AmountBox>
            </AmountBoxWrapper>

            <ProgressBarWrapper>
              <ProgressBar />
            </ProgressBarWrapper>

            <ProgressText>100% Complete</ProgressText>

            <SectionTitle>Milestone Description</SectionTitle>
            <DescriptionText>
              Successfully constructed 5 water wells in rural areas and all have been tested and
              are operational.
            </DescriptionText>

            <SectionTitle>Proof of Completion</SectionTitle>

            <ProofList>
              <ProofItem>
                <FileText size={18} color="#e74c3c" />
                <FileName>Construction_Report.pdf</FileName>
              </ProofItem>

              <ProofItem>
                <ImageIcon size={18} color="#3498db" />
                <FileName>Well_Photos.jpg</FileName>
              </ProofItem>

              <ProofItem>
                <FileText size={18} color="#e74c3c" />
                <FileName>Water_Quality_Test.pdf</FileName>
              </ProofItem>
            </ProofList>

            <SectionTitle>Review Notes (Optional)</SectionTitle>
            <Textarea placeholder="Add any notes about this decision..." />
          </Content>

          <Footer>
            <RejectBtn>Reject</RejectBtn>
            <ApproveBtn>Approve</ApproveBtn>
          </Footer>
        </Wrapper>
      </Holder>
    </Container>
  );
};

export default MilestoneVpending;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const Holder = styled.article`
  width: 512px;
  height: 527px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Header = styled.div`
  padding: 20px 24px 10px;
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
  margin: 6px 0 0;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  background: transparent;
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
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
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

const SmallText = styled.p`
  font-size: 12px;
  color: #8a8a8a;
  margin-bottom: 16px;
`;

const PhaseText = styled.p`
  font-size: 12px;
  color: #999;
  margin-top: -4px;
  margin-bottom: 16px;
`;

const SectionTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: #1e1e1e;
  margin: 16px 0 10px;
`;

const AmountBoxWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
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
  font-weight: 600;
  color: #1e1e1e;
  margin: 0;
`;

const BoxLabel = styled.p`
  font-size: 12px;
  color: #6b6b6b;
  margin: 4px 0 0;
`;

const ProgressBarWrapper = styled.div`
  width: 100%;
  height: 5px;
  background: #eee;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 10px;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 100%;
  background: #6cc04a;
`;

const ProgressText = styled.p`
  font-size: 12px;
  color: #6cc04a;
  margin-top: 4px;
`;

const DescriptionText = styled.p`
  font-size: 13px;
  color: #444;
  line-height: 1.5;
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
  border-radius: 8px;
  padding: 10px 14px;
  gap: 10px;
  background: #fafafa;
`;

const FileName = styled.span`
  font-size: 13px;
  color: #1e1e1e;
`;

const Textarea = styled.textarea`
  width: 100%;
  min-height: 70px;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 10px;
  font-size: 13px;
  color: #333;
  resize: none;
  outline: none;
  &::placeholder {
    color: #999;
  }
`;

const Footer = styled.div`
  padding: 12px 24px;
  border-top: 1px solid #e5e5e5;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  background: #fff;
`;

const RejectBtn = styled.button`
  border: 1px solid #ccc;
  background: transparent;
  color: #333;
  padding: 8px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background: #f2f2f2;
  }
`;

const ApproveBtn = styled.button`
  background: #000;
  color: #fff;
  border: none;
  padding: 8px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    opacity: 0.9;
  }
`;
