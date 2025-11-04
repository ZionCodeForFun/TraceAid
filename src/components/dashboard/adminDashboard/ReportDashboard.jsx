import React from "react";
import {
  Container,
  ContentGrid,
  ChartCard,
  ChartCardHeader,
  ChartArea,
  TableCard,
  TableHeader,
  TableBody,
  TableRow,
  AmountBadge,
  ControlsRow,
  ExportButton,
  StatsGrid,
  StatCard,
  StatTitle,
  StatHeader,
  StatValue,
  StatChange,
  StatIconContainer,
} from "../../../style/ReportDashoardStyle";
import { TbCurrencyNaira } from "react-icons/tb";
import { BsGraphUp } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { BiCalendar } from "react-icons/bi";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";

const Dashboard = () => {
  const summary = {
    donations: 328400,
    donationsDelta: 12.5,
    totalAmount: 1.2e6,
    totalAmountDelta: 18.2,
    donors: 2847,
    donorsDelta: 8.1,
    avgDonation: 2500,
    avgDelta: 5.3,
  };

  const trendData = [
    { month: "Jan", amount: 45000, count: 120 },
    { month: "Feb", amount: 52000, count: 130 },
    { month: "Mar", amount: 48000, count: 110 },
    { month: "Apr", amount: 68000, count: 200 },
    { month: "May", amount: 56000, count: 170 },
    { month: "Jun", amount: 80000, count: 280 },
  ];

  const pieData = [
    { name: "Education", value: 78 },
    { name: "Healthcare", value: 65 },
    { name: "Environment", value: 52 },
    { name: "Poverty", value: 46 },
    { name: "Animals", value: 33 },
  ];
  const PIE_COLORS = ["#2775FF", "#14AE5C", "#8B5CF6", "#FFA500", "#FF5C5C"];

  const rangesData = [
    { range: "₦500-2500", count: 12, amount: 28000 },
    { range: "₦1000-5000", count: 45, amount: 67000 },
    { range: "₦5000-10000", count: 40, amount: 64000 },
    { range: "₦10000-50000", count: 70, amount: 100000 },
    { range: "₦50000+", count: 30, amount: 68000 },
  ];

  const recent = [
    {
      amount: 5000,
      donor: "John Doe",
      campaign: "Clean Water Initiative",
      date: "2024-10-17",
      time: "10:30 AM",
    },
    {
      amount: 1200,
      donor: "Sarah Smith",
      campaign: "Education for All",
      date: "2024-10-17",
      time: "09:15 AM",
    },
    {
      amount: 8000,
      donor: "Michael Chen",
      campaign: "Animal Shelter",
      date: "2024-10-16",
      time: "04:20 PM",
    },
    {
      amount: 3500,
      donor: "Emily Brown",
      campaign: "Save the Forests",
      date: "2024-10-16",
      time: "02:45 PM",
    },
    {
      amount: 6000,
      donor: "David Wilson",
      campaign: "Medical Aid",
      date: "2024-10-16",
      time: "11:30 AM",
    },
    {
      amount: 2200,
      donor: "Lisa Anderson",
      campaign: "Clean Water Initiative",
      date: "2024-10-15",
      time: "03:15 PM",
    },
    {
      amount: 6500,
      donor: "Robert Taylor",
      campaign: "Education for All",
      date: "2024-10-15",
      time: "01:00 PM",
    },
    {
      amount: 4100,
      donor: "Jennifer Martinez",
      campaign: "Animal Shelter",
      date: "2024-10-15",
      time: "10:45 AM",
    },
  ];

  const formatN = (v) =>
    v >= 1e6 ? `₦${(v / 1e6).toFixed(1)}M` : `₦${v.toLocaleString()}`;

  return (
    <Container>
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
        <StatCard bg="#f4e8ff">
          <StatHeader>
            <StatTitle>Total Amount</StatTitle>
            <StatIconContainer bg="#DFCBFF">
              <BsGraphUp size={20} color="#8402E3" />
            </StatIconContainer>
          </StatHeader>
          <StatValue>{formatN(summary.totalAmount)}</StatValue>
          <StatChange up>
            +{summary.totalAmountDelta}% from last period
          </StatChange>
        </StatCard>

        <StatCard bg="#e8f7ff">
          <StatHeader>
            <StatTitle>Donors</StatTitle>
            <StatIconContainer bg="#B7E3FF">
              <FiUsers size={20} color="#1E90FF" />
            </StatIconContainer>
          </StatHeader>
          <StatValue>{summary.donors.toLocaleString()}</StatValue>
          <StatChange up>+{summary.donorsDelta}% from last period</StatChange>
        </StatCard>

        <StatCard bg="#fff6ea">
          <StatHeader>
            <StatTitle>Avg. Donation</StatTitle>
            <StatIconContainer bg="#FFE0B2">
              <BiCalendar size={20} color="#FF7A45" />
            </StatIconContainer>
          </StatHeader>
          <StatValue>{formatN(summary.avgDonation)}</StatValue>
          <StatChange up>+{summary.avgDelta}% from last period</StatChange>
        </StatCard>
      </StatsGrid>
      <ContentGrid>
        <ChartCard>
          <ChartCardHeader>
            Donation Trends <small>Monthly donation amounts and counts</small>
          </ChartCardHeader>
          <ChartArea>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={trendData}
                margin={{ top: 10, right: 40, left: 10, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="amount"
                  stroke="#2775FF"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                />
                <Line
                  type="monotone"
                  dataKey="count"
                  stroke="#14AE5C"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartArea>
        </ChartCard>

        <ChartCard>
          <ChartCardHeader>
            Donation Distribution by Category
            <small>Total donations per category</small>
          </ChartCardHeader>
          <ChartArea
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ResponsiveContainer width="80%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  label
                >
                  {pieData.map((entry, idx) => (
                    <Cell
                      key={`cell-${idx}`}
                      fill={PIE_COLORS[idx % PIE_COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </ChartArea>
        </ChartCard>

        <ChartCard style={{ gridColumn: "1 / -1" }}>
          <ChartCardHeader>
            Donation Ranges
            <small>Distribution of donations by amount range</small>
          </ChartCardHeader>
          <ChartArea>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart
                data={rangesData}
                margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="range" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="amount" name="Total Amount (₦)" fill="#14AE5C" />
              </BarChart>
            </ResponsiveContainer>
          </ChartArea>
        </ChartCard>

        <TableCard>
          <ChartCardHeader
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              Recent Donations <small>Latest donation transactions</small>
            </div>

            <ControlsRow>
              <select
                style={{
                  padding: "8px 10px",
                  borderRadius: "6px",
                  background: "#ececf0",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "14px",
                  color: "#555",
                  cursor: "pointer",
                }}
              >
                <option>All Time</option>
                <option>Last 7 days</option>
                <option>Last 30 days</option>
              </select>
              <ExportButton>Export Report</ExportButton>
            </ControlsRow>
          </ChartCardHeader>

          <TableHeader>
            <span>Amount</span>
            <span>Donor</span>
            <span>Campaign</span>
            <span>Date</span>
            <span>Time</span>
          </TableHeader>

          <TableBody>
            {recent.map((r, i) => (
              <TableRow key={i}>
                <AmountBadge>₦{r.amount.toLocaleString()}</AmountBadge>
                <span>{r.donor}</span>
                <span>{r.campaign}</span>
                <span>{r.date}</span>
                <span>{r.time}</span>
              </TableRow>
            ))}
          </TableBody>
        </TableCard>
      </ContentGrid>
    </Container>
  );
};

export default Dashboard;
