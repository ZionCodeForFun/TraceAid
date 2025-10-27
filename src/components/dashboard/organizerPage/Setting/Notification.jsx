import React, { useState } from "react";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import styled from "styled-components";
import Button from "../../../common/Button";

const Notification = () => {
  const [settings, setSettings] = useState({
    donations: true,
    payouts: false,
    updates: true,
  });

  const notifications = [
    {
      id: 1,
      title: "Donation notifications",
      desc: "Receive alerts for new donations",
      key: "donations",
    },
    {
      id: 2,
      title: "Donation notifications",
      desc: "Receive alerts for new donations",
      key: "payouts",
    },
    {
      id: 3,
      title: "Donation notifications",
      desc: "Receive alerts for new donations",
      key: "updates",
    },
  ];

  const handleToggle = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <Container>
      <article className="wrapper">
        {notifications.map((item) => (
          <div className="row" key={item.id}>
            <div className="text">
              <p className="title">{item.title}</p>
              <p className="desc">{item.desc}</p>
            </div>

            <div
              className="toggle"
              onClick={() => handleToggle(item.key)}
              role="button"
            >
              <div className="toggle-icon">
                {settings[item.key] ? (
                  <BsToggleOn className="on" />
                ) : (
                  <BsToggleOff className="off" />
                )}
              </div>
            </div>
          </div>
        ))}
        <div className="btn_holder">
          <Button text="Discard Changes" className="btn_left" />
          <Button text="Save Changes" className="btn_right" />
        </div>
      </article>
    </Container>
  );
};

export default Notification;

const Container = styled.div`
  display: flex;
  height: max-content;

  position: relative;

  height: 600px;
  width: 100%;

  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    position: absolute;
    top: -2%;

    .row {
      display: flex;

      justify-content: space-between;

      border-bottom: 1px solid #dcdcdc;
      padding-bottom: 18px;

      .text {
        display: flex;
        flex-direction: column;
        gap: 3px;
        padding-left: 17px;

        .title {
          font-weight: 400;
          font-size: 15px;
          color: #1a1a1a;
        }

        .desc {
          font-size: 13px;
          color: #69727b;
        }
      }

      .toggle {
        display: flex;

        justify-content: center;

        padding-right: 17px;
        .toggle-icon {
          width: 36px;

          transition: all 0.2s ease;
          display: flex;
          align-items: end;

          .on {
            cursor: pointer;
            color: #3a4621;
            font-size: 30px;
          }

          .off {
            cursor: pointer;
            color: #ccc;
            font-size: 30px;
          }
        }
      }
    }
    .btn_holder {
      display: flex;
      height: 43px;
      justify-content: space-between;
      margin-top: 30px;
      .btn_left {
        height: 100%;
        width: 306px;
        border: 2px solid #617437;
        color: var(--NeutralGrey4-Text);
        border-radius: 8px;
        background-color: white;
        font-size: 16px;
        font-weight: 600;
        &:hover {
          background-color: #ecf8d4;
        }
      }
      .btn_right {
        height: 100%;
        width: 306px;
        border-radius: 8px;
        background-color: var(--NeutralBlack);
        color: var(--PrimaryBase);
        font-size: 16px;
        font-weight: 600;
        &:hover {
          background-color: var(--PrimaryBase);
          color: var(--NeutralBlack);
        }
      }
    }
  }
`;
