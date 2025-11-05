import React, { useState } from "react";
import styled from "styled-components";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "Do I need an account to donate?",
      a: "No, you can browse and donate as a guest. However, creating an account allows you to track donations and save campaigns."
    },
    {
      q: "Who can use TraceAid?",
      a: "Both donors and individuals or organizations looking to raise funds can use TraceAid."
    },
    {
      q: "How does TraceAid ensure transparency?",
      a: "TraceAid provides milestone-based tracking, receipts, and verified updates from fundraisers to ensure full transparency."
    },
    {
      q: "How does TraceAid verify the authenticity of campaigns?",
      a: "Our team reviews documents, verifies identities, and ensures the legitimacy of uploaded claim details before approval."
    },
    {
      q: "What happens if a campaign doesn’t meet its fundraising goal?",
      a: "Funds raised will still be released to the beneficiary unless otherwise stated in the campaign terms."
    },
    {
      q: "How soon can fundraisers access their funds?",
      a: "Funds become available once milestones are reached and verified, or once the campaign ends successfully."
    },
    {
      q: "What if I need to adjust my campaign goal or timeline?",
      a: "Campaign creators can request edits, which will be reviewed and approved by TraceAid’s support team."
    },
    {
      q: "How much does it cost to use TraceAid?",
      a: "TraceAid charges a small processing fee to cover payment gateway and platform maintenance costs."
    },
  ];

  return (
    <FAQContainer>
      <FAQTitle>Frequently Asked Questions</FAQTitle>
      <FAQSubtitle>Got Questions? We’ve Got Answers.</FAQSubtitle>

      {faqs.map((item, index) => (
        <FAQItem key={index}>
          <QuestionRow onClick={() => toggleFAQ(index)}>
            {item.q}
            <PlusIcon isOpen={openIndex === index}>+</PlusIcon>
          </QuestionRow>

          {openIndex === index && <Answer>{item.a}</Answer>}
        </FAQItem>
      ))}
    </FAQContainer>
  );
};

export default FAQSection;


const FAQContainer = styled.div`
  width: 100%;
  max-width: 850px;
  margin: 4rem auto;
  padding: 0 1rem;
`;

const FAQTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: 800;
`;

const FAQSubtitle = styled.p`
  text-align: center;
  color: #555;
  margin-bottom: 2rem;
  font-size: 0.95rem;
`;

const FAQItem = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 1rem 0;
`;

const QuestionRow = styled.div`
  font-size: 1.05rem;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const PlusIcon = styled.span`
  font-size: 1.5rem;
  font-weight: 400;
  transition: transform 0.2s ease;
  transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0deg)")};
`;

const Answer = styled.p`
  margin-top: 0.6rem;
  color: #666;
  font-size: 0.95rem;
  line-height: 1.4rem;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-4px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
