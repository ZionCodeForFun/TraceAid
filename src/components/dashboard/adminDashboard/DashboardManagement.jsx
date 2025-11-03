import React from "react";
import {
  DashboardContainer,
  InnerContainer,
  StatIconContainer,
  StatsGrid,
  StatCard,
  StatTitle,
  StatHeader,
  StatValue,
  StatChange,
  ChartsContainer,
  ChartCard,
  ChartTitle,
  RecentActivity,
  ActivityItem,
  ActivityInfo,
  ActivityType,
  ProfileHolder,
} from "../../../style/DashboardManagementStyle";

import { TbCurrencyNaira } from "react-icons/tb";
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";
import { BsExclamationCircle } from "react-icons/bs";
import { IoMdContacts } from "react-icons/io";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";

const donationData = [
  { month: "Jan", amount: 45000 },
  { month: "Feb", amount: 52000 },
  { month: "Mar", amount: 49000 },
  { month: "Apr", amount: 68000 },
  { month: "May", amount: 62000 },
  { month: "Jun", amount: 72000 },
];

const campaignPerformance = [
  { name: "Education", Current: 60, Goal: 80 },
  { name: "Healthcare", Current: 85, Goal: 75 },
  { name: "Environment", Current: 35, Goal: 60 },
  { name: "Poverty", Current: 55, Goal: 70 },
  { name: "Animals", Current: 45, Goal: 65 },
];

const activities = [
  {
    type: "Donation",
    text: `New donation of ₦5,000 to "Clean Water Initiative"`,
    user: "John Doe",
    time: "5 min ago",
  },
  {
    type: "Campaign",
    text: `New campaign "Feed the Hungry" created`,
    user: "Hope Foundation",
    time: "15 min ago",
  },
  {
    type: "Verification",
    text: `Verification request from "Green Earth NGO"`,
    user: "Green Earth NGO",
    time: "1 hour ago",
  },
  {
    type: "Donation",
    text: `New donation of ₦10,500 to "Education for All"`,
    user: "Sarah Smith",
    time: "2 hours ago",
  },
  {
    type: "Campaign",
    text: `Campaign "Animal Shelter" completed goal`,
    user: "Pet Rescue",
    time: "3 hours ago",
  },
  {
    type: "Verification",
    text: `NGO "Slum2School" verified`,
    user: "System",
    time: "4 hours ago",
  },
];

const DashboardManagement = () => {
  return (
    <DashboardContainer>
      <InnerContainer>
        <StatsGrid>
          <StatCard bg="#f4e8ff">
            <StatHeader>
              <StatTitle>Total Donations</StatTitle>
              <StatIconContainer bg="#DFCBFF">
                <TbCurrencyNaira size={20} color="#8402E3" />
              </StatIconContainer>
            </StatHeader>
            <StatValue>₦328,400</StatValue>
            <StatChange up>+12.5% from last month</StatChange>
          </StatCard>

          <StatCard bg="#e8f1ff">
            <StatHeader>
              <StatTitle>Active Campaigns</StatTitle>
              <StatIconContainer bg="#DBEAFE">
                <FiTrendingUp size={20} color="#155DFC" />
              </StatIconContainer>
            </StatHeader>
            <StatValue>156</StatValue>
            <StatChange up>+8 from last month</StatChange>
          </StatCard>

          <StatCard bg="#eafff6">
            <StatHeader>
              <StatTitle>Registered NGOs</StatTitle>
              <StatIconContainer bg="#BEFDECD1">
                <IoMdContacts size={20} color="#ffffff" />
              </StatIconContainer>
            </StatHeader>
            <StatValue>89</StatValue>
            <StatChange up>+5 from last month</StatChange>
          </StatCard>

          <StatCard bg="#fff2e8">
            <StatHeader>
              <StatTitle>Pending Verifications</StatTitle>
              <StatIconContainer bg="#FFEDD4">
                <BsExclamationCircle size={20} color="#F54900" />
              </StatIconContainer>
            </StatHeader>
            <StatValue>12</StatValue>
            <StatChange>
              <FiTrendingDown /> -3 from last month
            </StatChange>
          </StatCard>
        </StatsGrid>

        <ChartsContainer>
          <ChartCard>
            <ChartTitle>Donation Trends</ChartTitle>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={donationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="amount"
                  stroke="#67940B"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard>
            <ChartTitle>Campaign Performance</ChartTitle>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={campaignPerformance}
                margin={{ top: 10, right: 20, left: 0, bottom: 5 }}
                barGap={8}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Goal" fill="#67940B" barSize={35} />
                <Bar dataKey="Current" fill="#e0e0e0" barSize={35} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </ChartsContainer>

        <RecentActivity>
          <h3>Recent Activity</h3>
          <p>Latest donations, campaigns, and verifications</p>

          {activities.map((act, index) => (
            <ActivityItem key={index}>
              <div className="left">
                <ProfileHolder type={act.type}>
                  <div className="img-holder">
                    {act.type === "Donation" && (
                      <TbCurrencyNaira size={16} color="#14AE5C" />
                    )}
                    {act.type === "Campaign" && (
                      <FiTrendingUp size={16} color="#155DFC" />
                    )}
                    {act.type === "Verification" && (
                      <BsExclamationCircle size={16} color="#F54900" />
                    )}
                  </div>
                </ProfileHolder>

                <ActivityInfo>
                  <h4>{act.text}</h4>
                  <p>
                    {act.user} • {act.time}
                  </p>
                </ActivityInfo>
              </div>

              <ActivityType>{act.type}</ActivityType>
            </ActivityItem>
          ))}
        </RecentActivity>
      </InnerContainer>
    </DashboardContainer>
  );
};

export default DashboardManagement;
