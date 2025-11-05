import React, { useState } from "react";
import HeaderNav from "./HeaderNav";
import Footer from "./Footer.jsx";
import {
  ContactContainer,
  ContactWrapper,
  Title,
  Subtitle,
  Input,
  TextArea,
  Select,
  Button,
} from "./ContactUsStyled";
import FAQSection from "./FaqSection";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent!");
  };

  return (
    <>
    <HeaderNav />

    <ContactContainer>
      <ContactWrapper onSubmit={handleSubmit}>
        <Title>How can we help?</Title>
        <Subtitle>Fill out the form below and our team will reach out to you.</Subtitle>

        <Input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <Select name="subject" value={formData.subject} onChange={handleChange} required>
          <option value="">Subject</option>
          <option value="Support">Support</option>
          <option value="General Inquiry">General Inquiry</option>
          <option value="Complaint">Complaint</option>
          <option value="Partnership">Partnership</option>
        </Select>

        <TextArea
          name="message"
          placeholder="Type your message here"
          value={formData.message}
          onChange={handleChange}
          required
        ></TextArea>

        <Button type="submit">Submit</Button>
      </ContactWrapper>
    </ContactContainer>

    <FAQSection />
    
    <Footer />
    </>
  );
};

export default ContactUsPage;