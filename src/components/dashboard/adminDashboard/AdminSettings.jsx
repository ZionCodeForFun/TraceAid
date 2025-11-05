import React, { useState } from "react";
import { FaTrash, FaPlus } from "react-icons/fa";
import {
  PageContainer,
  SettingsSection,
  SectionTitle,
  SectionSubtitle,
  FieldGrid,
  FieldGroup,
  FieldLabel,
  StaticField, 
  SaveButton,
  ButtonRow,
  ToggleContainer,
  ToggleLabel,
  Switch,
  TableHeader,
  AddAdminButton,
  AdminTable,
  StatusTag,
  DeleteButton,
} from "../../../style/AdminSettingStyle";

const ToggleSwitch = ({ label, isChecked, onChange }) => (
  <ToggleContainer>
    <ToggleLabel>{label}</ToggleLabel>
    <Switch>
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      <span />
    </Switch>
  </ToggleContainer>
);

const AdminRow = ({ name, email, role, status }) => (
  <tr>
    <td>{name}</td>
    <td>{email}</td>
    <td>{role}</td>
    <td>
      <StatusTag status={status}>{status}</StatusTag>
    </td>
    <td>
      <DeleteButton title="Delete User">
        <FaTrash />
      </DeleteButton>
    </td>
  </tr>
);

const AdminSettings = () => {
  const [autoApprove, setAutoApprove] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [kycRequired, setKycRequired] = useState(true);

  const adminUsers = [
    { name: "Admin User", email: "admin@traceaid.com", role: "Super Admin", status: "active" },
    { name: "Annabel Ayomide", email: "annabel@traceaid.com", role: "Super Admin", status: "active" },
    { name: "Lanre Adeshina", email: "lanre@traceaid.com", role: "Moderator", status: "active" },
  ];

  const handleSaveGeneral = () => console.log("General Settings Saved!");
  const handleSavePlatform = () => console.log("Platform Settings Saved!");
  const handleAddAdmin = () => console.log("Add Admin Clicked!");

  return (
    <PageContainer>
      <SettingsSection>
        <SectionTitle>General Settings</SectionTitle>
        <SectionSubtitle>Manage basic platform configuration</SectionSubtitle>

        <FieldGrid>
          <FieldGroup>
            <FieldLabel>Site Title</FieldLabel>
            <StaticField>TraceAid Admin Platform</StaticField>
          </FieldGroup>
          <FieldGroup>
            <FieldLabel>Site Tagline</FieldLabel>
            <StaticField>Making a difference together</StaticField>
          </FieldGroup>
        </FieldGrid>

        <FieldGroup>
          <FieldLabel>Site Description</FieldLabel>
          <StaticField>
            A comprehensive donation platform connecting donors with verified NGOs to make a positive impact on the world.
          </StaticField>
        </FieldGroup>

        <SectionTitle style={{ marginTop: "70px", marginBottom: "40px" }}>Contact Information</SectionTitle>
        <FieldGrid>
          <FieldGroup>
            <FieldLabel>Contact Email</FieldLabel>
            <StaticField>support@traceaid.com</StaticField>
          </FieldGroup>
          <FieldGroup>
            <FieldLabel>Contact Phone</FieldLabel>
            <StaticField>+234 091 878 5432</StaticField>
          </FieldGroup>
        </FieldGrid>

        <FieldGroup>
          <FieldLabel>Address</FieldLabel>
          <StaticField>12, Allen Avenue Road, Ikeja</StaticField>
        </FieldGroup>

        <ButtonRow>
          <SaveButton onClick={handleSaveGeneral}>💾 Save Changes</SaveButton>
        </ButtonRow>
      </SettingsSection>

      {/* Platform Settings */}
      <SettingsSection>
        <SectionTitle>Platform Settings</SectionTitle>
        <SectionSubtitle>Configure donation and campaign rules</SectionSubtitle>

        <FieldGrid>
          <FieldGroup>
            <FieldLabel>Platform Fee (%)</FieldLabel>
            <StaticField>5</StaticField>
          </FieldGroup>
          <FieldGroup>
            <FieldLabel>Minimum Donation (₦)</FieldLabel>
            <StaticField>5000</StaticField>
          </FieldGroup>
        </FieldGrid>

        <SectionTitle style={{ marginTop: "20px" }}>Campaign Creation Rules</SectionTitle>

        <ToggleSwitch
          label="Auto-approve verified NGO campaigns"
          isChecked={autoApprove}
          onChange={() => setAutoApprove(!autoApprove)}
        />
        <ToggleSwitch
          label="Email notifications for new campaigns"
          isChecked={emailNotifications}
          onChange={() => setEmailNotifications(!emailNotifications)}
        />
        <ToggleSwitch
          label="KYC verification required"
          isChecked={kycRequired}
          onChange={() => setKycRequired(!kycRequired)}
        />

        <FieldGrid>
          <FieldGroup>
            <FieldLabel>Max Campaign Duration (days)</FieldLabel>
            <StaticField>365</StaticField>
          </FieldGroup>
          <FieldGroup>
            <FieldLabel>Min Campaign Goal (₦)</FieldLabel>
            <StaticField>100000</StaticField>
          </FieldGroup>
        </FieldGrid>

        <ButtonRow>
          <SaveButton onClick={handleSavePlatform}>💾 Save Changes</SaveButton>
        </ButtonRow>
      </SettingsSection>

      <SettingsSection>
        <TableHeader>
          <div>
            <SectionTitle style={{ margin: 0 }}>Admin User Management</SectionTitle>
            <SectionSubtitle style={{ margin: "5px 0 0" }}>
              Manage admin users and their permissions
            </SectionSubtitle>
          </div>
          <AddAdminButton onClick={handleAddAdmin}>
            <FaPlus /> Add Admin
          </AddAdminButton>
        </TableHeader>

        <AdminTable>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {adminUsers.map((user, i) => (
              <AdminRow key={i} {...user} />
            ))}
          </tbody>
        </AdminTable>
      </SettingsSection>
    </PageContainer>
  );
};

export default AdminSettings;
