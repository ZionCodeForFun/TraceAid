import React from "react";
import styled from "styled-components";
import HeaderNav from "../../pages/HeaderNav";
import Footer from "../../pages/Footer";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const TermsAndConditions = () => {
  const nav = useNavigate();
  return (
    <Container>
      <HeaderNav />
      <article>
        <div className="goback">
          <div className="icon" onClick={() => nav(-1)}>
            <IoArrowBackOutline className="i" />
            <p>Go back</p>
          </div>
        </div>

        <h2>Terms & Conditions</h2>
        <p>
          Welcome to TraceAid — a platform that connects donors, NGOs, and
          organizations to fund transparent, impactful causes. <br />
          By using TraceAid, you agree to these Terms and Conditions (“Terms”).
          Please read them carefully before accessing or using our services.
        </p>

        <h3>1. Acceptance of Terms</h3>
        <p>
          By creating an account, donating, or starting a fundraiser, you
          confirm that you:
        </p>
        <ul>
          <li>Have read, understood, and agreed to these Terms.</li>
          <li>
            Are at least 18 years old or have legal capacity to enter into
            agreements.
          </li>
          <li>
            If you do not agree with these Terms, please do not use TraceAid.
          </li>
        </ul>

        <h3>2. About TraceAid</h3>
        <p>
          TraceAid is a web-based crowdfunding and accountability platform that
          enables:
        </p>
        <ul>
          <li>Individuals and organizations to donate to verified causes.</li>
          <li>
            NGOs to create and manage fundraisers with transparency through
            milestone-based tracking and activity updates.
          </li>
        </ul>
        <p>
          TraceAid does not directly organize campaigns or handle project
          execution — we provide the digital infrastructure to facilitate
          funding and accountability.
        </p>
        <h3>3. Account Types</h3>
        <ul>
          <li>
            <strong>Individual:</strong> Can donate to any verified campaign and
            track impact
          </li>
          <li>
            <strong>NGOs/Fundraiser:</strong> Can create and manage fundraising
            campaigns after verification. Each account type must provide
            accurate and complete information during registration
          </li>
        </ul>
        <p>
          Each account type must provide accurate and complete information
          during registration.
        </p>
        <h3>4. Account Responsibility</h3>
        <ul>
          <li>You are responsible for:</li>

          <li>Keeping your credentials secure.</li>
          <li>All activity that occurs under your account.</li>
          <li>
            Promptly notifying TraceAid of any unauthorized access or security
            breach.
          </li>
        </ul>
        <p>
          TraceAid reserves the right to suspend or terminate accounts found
          violating our policies.
        </p>
        <h3>5. Donations and Payments</h3>
        <ul>
          <li>
            All donations are voluntary and non-refundable, except in specific
            cases of proven fraud or campaign cancellation before disbursement.
          </li>
          <li>
            TraceAid partners with secure third-party payment processors to
            ensure safe and transparent transactions.
          </li>
          <li>
            Donors are encouraged to review campaign details and updates before
            donating.
          </li>
        </ul>
        <p>
          TraceAid is not liable for how funds are utilized beyond the
          transparency and reporting tools provided on the platform.
        </p>
        <h3>6. Fundraisers (NGO)</h3>
        <ul>
          <li>Only verified NGOs can create fundraisers on TraceAid.</li>

          <li>
            Fundraisers must provide truthful information, valid documentation,
            and regular milestone updates.
          </li>
          <li>
            Funds must be used strictly for the purposes stated in the campaign.
          </li>
          <li>
            Misuse of funds, false representation, or lack of accountability may
            result in account suspension, refund claims, or legal action.
          </li>
        </ul>

        <h3>7. Transparency and Accountability</h3>
        <ul>
          <li>
            TraceAid promotes transparency through milestone-based fund
            tracking. Fundraisers are required to:
            <ul>
              <li>
                Share milestone updates with evidence such as photos, receipts,
                or reports.
              </li>
              <li>
                Use only approved GPS-enabled camera tools for capturing and
                uploading live proof-of-progress images to ensure authenticity.
              </li>
            </ul>
          </li>
        </ul>
        <ul>
          <li>
            <strong>
              <em>
                A minimum of five (5) live image evidence submissions is
                required for each milestone update.
              </em>
            </strong>
          </li>

          <li>
            <strong>
              <em>
                Only images taken using the approved GPS Camera App are accepted
                for milestone verification.
              </em>
            </strong>
          </li>
        </ul>
        <h3>Download the approved app here:</h3>
        <a href="https://play.google.com/store/apps/details?id=com.hktech.gpscamera&hl=en">
          https://play.google.com/store/apps/details?id=com.hktech.gpscamera&hl=en
        </a>
        <p>
          TraceAid reserves the right to hide, suspend, or flag campaigns that
          fail to provide adequate transparency or verifiable updates.
        </p>

        <h3>8. Prohibited Activities</h3>
        <ul>
          <li>Users must not:</li>
          <li>
            Use the platform for fraudulent, illegal, or misleading activities.
          </li>
          <li>Post offensive, discriminatory, or harmful content.</li>
          <li>Manipulate campaign outcomes or donation data.</li>
          <li>
            Violations may lead to account removal and potential legal action.
          </li>
        </ul>

        <h3>9. Service Fees</h3>
        <ul>
          <li>
            TraceAid charges a 5% platform service fee on each successful
            donation.
          </li>
          <li>
            This fee supports secure payment processing, transparency tools, and
            continued system improvements.
          </li>
          <li>
            All applicable fees will be displayed before completing a
            transaction, and donors will always see the net amount reaching the
            fundraiser after fees are applied.
          </li>
        </ul>

        <h3>10. Intellectual Property</h3>
        <ul>
          <li>
            All logos, trademarks, and technology used in TraceAid is the
            property of TraceAid.
          </li>
          <li>
            They may not be copied, modified, or used without written
            permission.
          </li>
        </ul>

        <h3>11. Limitation of Liability</h3>
        <p>
          TraceAid acts solely as an intermediary platform. We are not liable
          for:
        </p>
        <ul>
          <li>Campaign outcomes, NGO actions, or donor expectations</li>
          <li>Delays, losses, or misuse of funds beyond our control.</li>
          <li>
            Any indirect, incidental, or consequential damages arising from the
            use of the platform.
          </li>
        </ul>

        <h3>12. Privacy Policy</h3>
        <p>
          Your privacy matters to us. Please review our Privacy Policy to
          understand how we collect, use, and protect your personal information.
        </p>

        <h3>13. Changes to Terms</h3>
        <div>
          <p>
            TraceAid may update these Terms from time to time. Users will be
            notified of significant changes via email or in-app notifications.{" "}
          </p>
          <p>
            Continued use of the platform after updates constitutes acceptance
            of the revised Terms.
          </p>
        </div>
        <h3> 14. Contact Us</h3>
        <p>
          For any inquiries, feedback, or complaints, please contact us at:{" "}
          <br />
          <a href="mailto:traceaidinfo25@gmail.com">info@traceaid.org</a> <br />
          🌍 <a href="https://trace-aid.vercel.app/">www.traceAid.org</a>
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
    .goback {
      margin: 20px 0;

      width: 100%;

      .icon {
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
      }
    }
  }
  h2 {
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

  @media (max-width: 480px) {
    article {
      padding: 1.8rem 1.2rem;
      margin-top: 1.2rem;
      background: #fafafa;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    }

    h2 {
      font-size: 1.25rem;
      margin-bottom: 0.6rem;
      line-height: 1.3;
    }

    h3 {
      font-size: 1.05rem;
      margin-top: 1.2rem;
      line-height: 1.35;
    }

    p {
      font-size: 0.95rem;
      line-height: 1.55;
      color: #444;
    }

    ul {
      margin-left: 1.1rem;
      margin-top: 0.4rem;

      li {
        font-size: 0.9rem;
        line-height: 1.5;
        margin-bottom: 0.3rem;
      }
    }

    a {
      font-size: 0.9rem;
      color: #0073e6;
    }
  }
`;
