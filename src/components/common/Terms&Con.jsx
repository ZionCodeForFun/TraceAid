// import React from "react";
import styled from "styled-components";
import HeaderNav from "../../pages/HeaderNav";
import Footer from "../../pages/Footer";

const TermsAndConditions = () => {
  return (
    <Container>
      <HeaderNav />
      <article>
        <h2>Terms & Conditions</h2>
        <p>
          Welcome to TracaAid — a platform that connects donors, NGOs, and
          organizations to fund transparent, impactful causes. <br />
          By using TracaAid, you agree to these Terms and Conditions (“Terms”).
          Please read them carefully before accessing or using our services.
        </p>

        <h3>1. Acceptance of Terms</h3>
        <ul>
          <li>
            By accessing, registering, or starting a fundraiser, you confirm
            that you:
            <ul>
              <li>
                Are 18 years and older, and eligible to enter into legal
                agreements.
              </li>
              <li>
                Have read, agree with these Terms, and do not use TracaAid
                unlawfully.
              </li>
            </ul>
          </li>
        </ul>

        <h3>2. About TracaAid</h3>
        <p>
          TracaAid is a decentralized crowdfunding and accountability platform
          that enables:
        </p>
        <ul>
          <li>
            NGOs and verified organizations to access donors through
            milestone-based tracking and activity updates.
          </li>
          <li>
            Donors to track and verify the use of their funds through visual
            execution — ensuring the digital infrastructure by TracaAid
            functioning and accountability.
          </li>
        </ul>

        <h3>3. Account Types</h3>
        <ul>
          <li>
            <strong>Organization/NGO Account:</strong> Created by a verified
            company and legal impact.
          </li>
          <li>
            <strong>Donor Account:</strong> Can donate to verified campaigns
            after verification.
          </li>
          <li>
            Account must not be misused for personal information gathering or
            fraud.
          </li>
        </ul>

        <h3>4. Account Responsibility</h3>
        <ul>
          <li>
            You are responsible for:
            <ul>
              <li>Keeping your credentials secure.</li>
              <li>Not sharing your account credentials.</li>
              <li>
                Informing TracaAid immediately in case of unauthorized access or
                security breach.
              </li>
              <li>
                TracaAid is not liable for any unauthorized transactions or
                fund’s misusing policies.
              </li>
            </ul>
          </li>
        </ul>

        <h3>5. Donations and Payments</h3>
        <ul>
          <li>
            Donations made through TracaAid are secure and specific cause of
            proven fund or campaign cancellation before disbursement.
          </li>
          <li>
            TracaAid does not refund donations unless the fundraiser violates
            fraud or misrepresentation.
          </li>
          <li>
            TracaAid takes no fee from users but instead charges verified
            organizations from funds provided on the platform.
          </li>
          <li>
            Transactions are irreversible once initiated through verified
            accounts.
          </li>
        </ul>

        <h3>6. Fundraisers (NGO)</h3>
        <ul>
          <li>
            All fundraisers must:
            <ul>
              <li>
                Provide verified information before transactions, and regular
                milestones updates.
              </li>
              <li>Ensure transparency and accountability.</li>
              <li>
                Any fraudulent or misleading activity may result in account
                suspension, refund claims, or legal action.
              </li>
            </ul>
          </li>
        </ul>

        <h3>7. Milestone and Accountability Tracking</h3>
        <ul>
          <li>
            TracaAid enables verified fundraisers to:
            <ul>
              <li>
                Create milestones that display ongoing phases, needs, or
                reports.
              </li>
              <li>
                Ensure updates are visual (photos/videos) and clear for donors
                to provide adequate transparency or verifiable updates.
              </li>
            </ul>
          </li>
        </ul>

        <h3>8. Prohibited Activities</h3>
        <ul>
          <li>
            Users shall not be involved in fraudulent, illegal, or misleading
            activities.
          </li>
          <li>
            Users shall not impersonate any entity or spread misinformation.
          </li>
          <li>Violation may lead to account termination and legal action.</li>
        </ul>

        <h3>9. Service Fees</h3>
        <ul>
          <li>TracaAid charges no service fee on users and organizations.</li>
          <li>
            Verified NGOs may pay applicable deductions on approved system
            improvements.
          </li>
          <li>
            The donor pays directly before completing a transaction, and
            TracaAid will always pass the net amount reaching the fundraiser
            after fees are applied.
          </li>
        </ul>

        <h3>10. Intellectual Property</h3>
        <ul>
          <li>
            All logos, trademarks, and technology used in TracaAid is the
            property of TracaAid.
          </li>
          <li>Unauthorized copying or redistribution is prohibited.</li>
        </ul>

        <h3>11. Limitation of Liability</h3>
        <ul>
          <li>
            TracaAid is not responsible for:
            <ul>
              <li>
                Any user or NGO misconduct, misuse, or data loss for any cause.
              </li>
              <li>Any downtime, interruptions, or service suspension.</li>
            </ul>
          </li>
          <li>
            By using TracaAid, you agree that the platform is used at your own
            risk.
          </li>
        </ul>

        <h3>12. Privacy Policy</h3>
        <p>
          TracaAid respects your data. Please review our Privacy Policy to
          understand how we collect, use, and protect your personal information.
        </p>

        <h3>13. Changes to Terms</h3>
        <ul>
          <li>
            TracaAid reserves the right to modify these Terms from time to time.
          </li>
          <li>
            Users will be notified of significant changes via email or in-app
            notifications.
          </li>
          <li>
            Continued use of the platform after updates constitutes acceptance
            of the revised Terms.
          </li>
        </ul>

        <p>
          For any inquiries, feedback, or complaints, please contact us at:{" "}
          <br />
          <a href="mailto:info@tracaaid.org">info@tracaaid.org</a> <br />
          🌍 <a href="https://www.tracaaid.org">www.tracaaid.org</a>
        </p>
      </article>
      <Footer />
    </Container>
  );
};

export default TermsAndConditions;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  color: #222;
  font-family: "Arial", sans-serif;
  line-height: 1.6;

  article {
    padding: 70px;
    margin-top: 2rem;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }
  
  h2 {
    margin-top: 1.8rem;
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 18px;
    margin-top: 25px;
    font-weight: 600;
  }

  ul {
    margin-left: 20px;
    margin-top: 5px;
  }

  p {
    margin-top: 8px;
  }

  a {
    color: #0066cc;
    text-decoration: none;
  }


  @media (max-width: 350px) {
    article {
      padding: 20px;
    }
    
    h2 {
      margin-top: 20px;
      font-size: 18px;
    }

    h3 {
      font-size: 16px;
    }

    p,
    li {
      font-size: 14px;
    }

    ul {
      margin-left: 15px;
    }
  }

  @media (max-width: 768px) {
    article {
      padding: 30px;
    }

    h2 {
      font-size: 20px;
    }

    h3 {
      font-size: 17px;
    }

    p,
    li {
      font-size: 15px;
    }
  }

  @media (min-width: 600px) and (max-width: 1024px) {
    article {
      padding: 50px;
    }

    h2 {
      font-size: 21px;
    }

    h3 {
      font-size: 17.5px;
    }
  }
`;
