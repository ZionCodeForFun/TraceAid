import React, { useState } from "react";

import {
  PageContainer,
  SettingsSection,
  SectionTitle,
  SectionSubtitle,
  PrimaryButton,
  ButtonRow,
  ToggleItem,
  ToggleContent,
  Switch,
  NotificationsHeader,
  HeaderRight,
  FilterBar,
  SearchInputContainer,
  Dropdown,
  NotificationTable,
  TableHeader,
  TableRow,
  TableData,
  IconWrapper,
  UnreadDot,
  DeleteButton,
} from "../../../style/AdminNotificationStyle";

import {
  FaTrash,
  FaSearch,
  FaBell,
  FaExclamationCircle,
} from "react-icons/fa";
import { MdMonetizationOn, MdVerifiedUser, MdSettings } from "react-icons/md";

const NotificationToggle = ({ title, description, isChecked, onChange }) => (
  <ToggleItem>
    <ToggleContent>
      <h3>{title}</h3>
      <p>{description}</p>
    </ToggleContent>
    <Switch>
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      <span />
    </Switch>
  </ToggleItem>
);

const NotificationIcon = ({ type }) => {
  let icon;
  switch (type) {
    case "Donation":
      icon = <MdMonetizationOn />;
      break;
    case "Campaign":
      icon = <FaBell />;
      break;
    case "Verification":
      icon = <MdVerifiedUser />;
      break;
    case "System":
      icon = <MdSettings />;
      break;
    default:
      icon = <FaExclamationCircle />;
  }
  return <IconWrapper $type={type}>{icon}</IconWrapper>;
};

const NotificationRow = ({ type, message, date, time, isUnread }) => (
  <TableRow $unread={isUnread}>
    <TableData style={{ width: "25%", display: "flex", alignItems: "center", gap: "8px" }}>
      <NotificationIcon type={type} />
      <span style={{ fontWeight: isUnread ? "600" : "400" }}>{type}</span>
    </TableData>

    <TableData style={{ width: "35%", fontWeight: isUnread ? "500" : "400" }}>
      {message}
      {isUnread && <UnreadDot />}
    </TableData>

    <TableData style={{ width: "15%", textAlign: "center" }}>{date}</TableData>

    <TableData style={{ width: "15%", textAlign: "center" }}>{time}</TableData>

    <TableData style={{ width: "10%", textAlign: "center" }}>
      <DeleteButton title="Dismiss Notification">
        <FaTrash />
      </DeleteButton>
    </TableData>
  </TableRow>
);

const AdminNotification = () => {
  const [donation, setDonation] = useState(true);
  const [campaign, setCampaign] = useState(false);
  const [verification, setVerification] = useState(true);
  const [system, setSystem] = useState(false);
  const [email, setEmail] = useState(false);

  const notificationsData = [
    {
      type: "Donation",
      message: 'New donation of ₦10,000 received for "Clean Water Initiative"',
      date: "2024-10-17",
      time: "10:30 AM",
      unread: true,
    },
    {
      type: "Campaign",
      message: 'New campaign "Feed the Hungry" submitted for approval',
      date: "2024-10-17",
      time: "09:15 AM",
      unread: true,
    },
    {
      type: "Verification",
      message: 'KYC verification request from "Green Earth NGO"',
      date: "2024-10-17",
      time: "08:45 AM",
      unread: false,
    },
  ];

  const unreadCount = notificationsData.filter((n) => n.unread).length;

  const handleSavePreferences = () => {
    console.log("Notification Preferences Saved!");
  };

  return (
    <PageContainer>
      <SettingsSection>
        <SectionTitle>Notification Settings</SectionTitle>
        <SectionSubtitle>Customize your notification preferences</SectionSubtitle>

        <NotificationToggle
          title="Donation notifications"
          description="Receive alerts for new donations"
          isChecked={donation}
          onChange={() => setDonation(!donation)}
        />
        <NotificationToggle
          title="Campaign notifications"
          description="Receive alerts for new campaign submissions"
          isChecked={campaign}
          onChange={() => setCampaign(!campaign)}
        />
        <NotificationToggle
          title="Verification notifications"
          description="Receive alerts for KYC verification requests"
          isChecked={verification}
          onChange={() => setVerification(!verification)}
        />
        <NotificationToggle
          title="System notifications"
          description="Receive system and milestone alerts"
          isChecked={system}
          onChange={() => setSystem(!system)}
        />
        <NotificationToggle
          title="Email notifications"
          description="Send notifications to your email"
          isChecked={email}
          onChange={() => setEmail(!email)}
        />

        <ButtonRow>
          <PrimaryButton onClick={handleSavePreferences}>
            Save Preferences
          </PrimaryButton>
        </ButtonRow>
      </SettingsSection>

      <SettingsSection>
        <NotificationsHeader>
          <div>
            <SectionTitle style={{ margin: 0 }}>All Notifications</SectionTitle>
            <SectionSubtitle style={{ margin: "5px", marginBottom: "20px" }}>
              View and manage your notifications
            </SectionSubtitle>
          </div>
          <HeaderRight>
            <span>{unreadCount} Unread</span>
            <button>Mark all as read</button>
          </HeaderRight>
        </NotificationsHeader>

        <FilterBar>
          <SearchInputContainer>
            <FaSearch />
            <input type="text" placeholder="Search notifications..." />
          </SearchInputContainer>
          <Dropdown defaultValue="All Types">
            <option>All Types</option>
            <option>Donation</option>
            <option>Campaign</option>
            <option>Verification</option>
            <option>System</option>
          </Dropdown>
        </FilterBar>

        <NotificationTable>
          <thead>
            <TableHeader>
              <th style={{ width: "25%", textAlign: "left" }}>Type</th>
              <th style={{ width: "35%", textAlign: "left" }}>Message</th>
              <th style={{ width: "15%", textAlign: "center" }}>Date</th>
              <th style={{ width: "15%", textAlign: "center" }}>Time</th>
              <th style={{ width: "10%", textAlign: "center" }}>Actions</th>
            </TableHeader>
          </thead>

          <tbody>
            {notificationsData.map((notification, index) => (
              <NotificationRow key={index} {...notification} />
            ))}
          </tbody>
        </NotificationTable>
      </SettingsSection>
    </PageContainer>
  );
};

export default AdminNotification;
