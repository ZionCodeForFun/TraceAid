//This is the second create campaign

import React from "react";
import styled from "styled-components";
import { FiInfo } from "react-icons/fi";
import { MdAttachFile } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";

const CreateCampaign = () => {
  return (
    <Container>
      <Header>
        <h1>Create a Campaign</h1>
        <p>Enter your details to continue</p>
      </Header>

      <Form>
        <FormGroup>
          <label>Campaign Title</label>
          <input type="text" placeholder="Enter campaign title" />
        </FormGroup>

        <FormGroup>
          <label>Campaign Description</label>
          <textarea placeholder="Describe your campaign"></textarea>
        </FormGroup>

        <FormGroup>
          <label>Total Campaign Goal Amount</label>
          <input type="number" placeholder="Enter your total goal amount" />
        </FormGroup>

        <FormGroup>
          <label>Category (Health, Education, Community, etc.)</label>
          <select>
            <option value="">category</option>
            <option value="Health">Health</option>
            <option value="Education">Education</option>
            <option value="Community">Community</option>
            <option value="Environment">Environment</option>
          </select>
        </FormGroup>

        <FormGroup>
          <label>Campaign Cover Image/Video</label>
          <FileUpload>
            <LeftSection>
              <MdAttachFile
                style={{
                  fontSize: "20px",
                  color: "#6fc36a",
                  transform: "rotate(45deg)",
                }}
              />
              <span>File upload</span>
            </LeftSection>
            <Buttoned>Choose file</Buttoned>
          </FileUpload>
        </FormGroup>

        <FormGroup>
          <label>Campaign Duration</label>
          <input type="text" placeholder="Campaign duration" />
        </FormGroup>

        <MilestoneSection>
          <div className="milestone-holder">
            <h3>Milestone 1</h3>
            <span>
              <select></select>
            </span>
          </div>
          <h4>
            <span>
              <IoIosAdd color="#000000" fontWeight={900} size={13} /> Add
              Milestones
            </span>
          </h4>
        </MilestoneSection>

        <SubmitBtn>Submit</SubmitBtn>
      </Form>
    </Container>
  );
};

export default CreateCampaign;

const Container = styled.div`
  width: 100%;
  max-width: 650px;
  margin: 50px auto;
  padding: 20px;
  font-family: "Inter", sans-serif;
  color: #222;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 30px;

  h1 {
    font-size: 40px;
    font-weight: 700;
    color: #333333;
  }

  p {
    color: #666;
    font-size: 16px;
    font-weight: 400;
    margin-top: 4px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  label {
    font-size: 0.85rem;
    color: #444;
  }

  input,
  textarea,
  select {
    border: 1px solid #ddd;
    border-radius: 6px;
    padding: 10px;
    cursor: pointer;
    font-size: 0.9rem;
    outline: none;
    color: #333333;

    &:focus {
      border-color: #6fc36a;
      box-shadow: 0 0 5px rgba(111, 195, 106, 0.5);
    }
  }

  textarea {
    resize: none;
  }
`;
const FileUpload = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 10px 14px;
  font-size: 0.9rem;
  cursor: pointer;

  &:focus {
    border-color: #6fc36a;
    box-shadow: 0 0 5px rgba(111, 195, 106, 0.5);
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    color: #777;
  }
`;

const Buttoned = styled.button`
  background: transparent;
  border: none;
  color: #6fc36a;
  font-weight: 500;
  cursor: pointer;

  &:focus {
    outline: none;
    color: #56a957;
  }
`;

const MilestoneSection = styled.div`
  border-radius: 6px;
  padding: 10px 12px;
  color: #444;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .milestone-holder {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    padding-top: 5px;
    padding-bottom: 15px;
    border-bottom: 1px solid #ddd;

    h3 {
      font-size: 0.95rem;
      font-weight: 600;
    }

    select {
      border: none;
      cursor: pointer;
    }
  }

  h4 {
    font-size: 0.9rem;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    color: #000;
    width: fit-content;
    position: relative;
    gap: 6px;
    cursor: pointer;

    &::after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 1px;
      background: #000;
    }
  }

  p {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.8rem;
    color: #666;
    margin-top: 4px;
  }

  svg {
    color: #6fc36a;
  }
`;

const SubmitBtn = styled.button`
  background: #1a1a1a;
  color: #a8e38b;
  padding: 12px 0;
  margin-top: 10px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;