import React, { useState } from "react";
import styled from "styled-components";
import { IoArrowBack } from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import HeaderNav from "./HeaderNav";

const MyDonations = () => {
  const nav = useNavigate();

  const allDonations = [
    {
      id: 1,
      campaign: "Stationery for the children of Makoko Nursery School",
      amount: "₦5,000.00",
      date: "20/12/2025",
      status: "Ongoing",
    },
    {
      id: 2,
      campaign: "Stationery for the children of Makoko Nursery School",
      amount: "₦10,000.00",
      date: "20/12/2025",
      status: "Completed",
    },
    {
      id: 3,
      campaign: "Stationery for the children of Makoko Nursery School",
      amount: "₦25,000.00",
      date: "20/12/2025",
      status: "Ongoing",
    },
    {
      id: 4,
      campaign: "Stationery for the children of Makoko Nursery School",
      amount: "₦5,000.00",
      date: "20/12/2025",
      status: "Ongoing",
    },
    {
      id: 5,
      campaign: "Stationery for the children of Makoko Nursery School",
      amount: "₦15,000.00",
      date: "20/12/2025",
      status: "Completed",
    },
  ];

  const [filterStatus, setFilterStatus] = useState("All Status");

  const filteredDonations =
    filterStatus === "All Status"
      ? allDonations
      : allDonations.filter((item) => item.status === filterStatus);

  return (
    <>
      <HeaderNav />
      <Container>
        <GoBack onClick={() => nav(-1)}>
          <IoArrowBack size={18} />
          Go Back
        </GoBack>

        <Heading>My Donations</Heading>
        <SubText>
          Track your contributions and the milestones you’ve helped achieve.
        </SubText>

        <StatsRow>
          <StatBox>
            <StatValue>₦120,000</StatValue>
            <StatLabel>Total Donated</StatLabel>
          </StatBox>
          <StatBox>
            <StatValue>5</StatValue>
            <StatLabel>Campaigns Supported</StatLabel>
          </StatBox>
        </StatsRow>

        <HistoryContainer>
          <HistoryHeader>
            <SearchInput placeholder="Search input" />

            <StatusFilter>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option>All Status</option>
                <option>Ongoing</option>
                <option>Completed</option>
              </select>
            </StatusFilter>
          </HistoryHeader>

          <TableHeader>
            <span>Campaign</span>
            <span>Amount Donated</span>
            <span>Date</span>
            <span>Status</span>
            <span></span>
          </TableHeader>

          {filteredDonations.map((item) => (
            <TableRow key={item.id}>
              <span>{item.campaign}</span>
              <span>{item.amount}</span>
              <span>{item.date}</span>
              <StatusPill $status={item.status}>{item.status}</StatusPill>
              <MenuDots>
                <HiOutlineDotsVertical size={20} />
              </MenuDots>
            </TableRow>
          ))}
        </HistoryContainer>
      </Container>
    </>
  );
};

export default MyDonations;


const Container = styled.div`
  width: 100%;
  padding: 3rem 8%;
  background: #ffffff;
  min-height: 80vh;
  margin-top: 5rem;
`;

const GoBack = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: #344054;
  font-size: 0.95rem;
  cursor: pointer;
  margin-bottom: 2rem;
`;

const Heading = styled.h2`
  font-family: Inter;
  font-size: 1.5rem;
  color: #1a1a1a;
  font-weight: 500;
  margin-bottom: 0.3rem;
`;

const SubText = styled.p`
  font-family: Inter;
  font-weight: 400;
  color: #1a1a1a;
  margin-bottom: 3rem;
  font-size: 0.9rem;
`;

const StatsRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 3rem;
  flex-wrap: wrap;
`;

const StatBox = styled.div`
  min-width: 200px;
  padding-right: 3rem;
  position: relative;

  &:not(:last-child) {
    border-right: 2px solid #dcdcdc;
  }

  @media (max-width: 600px) {
    padding-right: 0;
    border-right: none;
  }
`;

const StatValue = styled.h3`
  font-family: Inter;
  font-size: 2.4rem;
  font-weight: 400;
  color: #617437;
  margin-bottom: 0.2rem;
`;

const StatLabel = styled.p`
  font-family: Inter;
  color: #4D4D4D;
  font-weight: 400;
  font-size: 1rem;
`;

const HistoryContainer = styled.div`
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

const HistoryHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const SearchInput = styled.input`
  /* width: 250px; */
  width: 85%;
  background-color: #f3f3f5;
  padding: 0.8rem 1rem;
  border-radius: 8px;
  border: 1px solid #d9d9d9;
  outline: none;
  font-size: 0.95rem;
`;

const StatusFilter = styled.div`
  select {
    padding: 0.8rem 1rem;
    border-radius: 8px;
    border: 1px solid #d9d9d9;
    font-size: 0.95rem;
    cursor: pointer;
    background-color: #f3f3f5;
  }
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 2.5fr 1.2fr 1fr 1fr 0.5fr;
  font-weight: 600;
  color: #2f3a38;
  margin-bottom: 1.2rem;
  font-size: 0.95rem;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 2.5fr 1.2fr 1fr 1fr 0.5fr;
  padding: 1rem 0;
  border-bottom: 1px solid #eaeaea;
  font-size: 0.93rem;
  align-items: center;
  color: #222;
`;

const StatusPill = styled.span`
  background: ${({ $status }) =>
    $status === "Ongoing" ? "#d2efff" : "#e0f2e3"};
  color: ${({ $status }) =>
    $status === "Ongoing" ? "#0077c8" : "#2f8a45"};
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
`;

const MenuDots = styled.span`
  font-size: 1.4rem;
  color: #555;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
