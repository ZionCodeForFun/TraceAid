import React from "react";
import styled from "styled-components";
import { X, FileText, Image as ImageIcon } from "lucide-react";

const MilestoneVrejected = ({ onClose, data }) => {
  return (
    <Container>
      <Holder>
        <Wrapper>
          <Header>
            <Title>Rejected Milestone Details</Title>
            <Subtitle>Review reason and uploaded proofs for this rejected milestone</Subtitle>
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

            <SectionTitle>Rejection Reason</SectionTitle>
            <DescriptionText>
              The milestone proof did not meet verification standards. Some documents were unclear or incomplete.
            </DescriptionText>

            <SectionTitle>Uploaded Proofs</SectionTitle>
            <ProofList>
              <ProofItem>
                <FileText size={18} color="#c0392b" />
                <FileName>Incomplete_Report.pdf</FileName>
              </ProofItem>

              <ProofItem>
                <ImageIcon size={18} color="#e74c3c" />
                <FileName>Blurred_Photo.jpg</FileName>
              </ProofItem>

              <ProofItem>
                <FileText size={18} color="#c0392b" />
                <FileName>Verification_Missing.pdf</FileName>
              </ProofItem>
            </ProofList>

            <SectionTitle>Rejection reason</SectionTitle>
            <Textarea
              placeholder="E.g. Uploaded documents were not legible, resubmission required..."
              readOnly
              defaultValue="Uploaded proofs were not clear enough to verify project completion. Please resubmit with clearer photos and reports."
            />
          </Content>

          <Footer>
            <CloseOnlyBtn onClick={onClose}>Close</CloseOnlyBtn>
          </Footer>
        </Wrapper>
      </Holder>
    </Container>
  );
};

export default MilestoneVrejected;


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
  background: #e74c3c;
`;

const ProgressText = styled.p`
  font-size: 12px;
  color: #e74c3c;
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
  border: 1px solid #f5b7b1;
  border-radius: 8px;
  padding: 10px 14px;
  gap: 10px;
  background: #fef5f5;
`;

const FileName = styled.span`
  font-size: 13px;
  color: #c0392b;
`;

const Textarea = styled.textarea`
  width: 100%;
  min-height: 70px;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 10px;
  font-size: 13px;
  color: #e74c3c;
  resize: none;
  outline: none;
  background: #fafafa;

  &::placeholder {
    color: #999;
  }
`;

const Footer = styled.div`
  padding: 12px 24px;
  border-top: 1px solid #e5e5e5;
  display: flex;
  justify-content: flex-end;
  background: #fff;
`;

const CloseOnlyBtn = styled.button`
  background: #fff;
  color: #333333;
  border: none;
  padding: 8px 22px;
  border-radius: 8px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  &:hover {
    background: #c1bebe;
  }
`;
