import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SuccessModal from "./SuccessModal"; 

const PaymentSuccessPage = () => {
  const location = useLocation();
  const reference = new URLSearchParams(location.search).get("reference");
  const nav = useNavigate();

  return (
    <div>
      <SuccessModal reference={reference}
      close={() => nav("/my_donations")} />
    </div>
  );
};

export default PaymentSuccessPage;
