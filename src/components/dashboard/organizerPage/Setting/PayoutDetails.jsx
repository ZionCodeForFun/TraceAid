import React, { useState } from "react";
import { Container, Aside_holder2 } from "../../../../style/SettingsStyle";
import InputField from "../../../common/InputField";


import { FiTrash2 } from "react-icons/fi";
import Button from "../../../common/Button";
import { FaRegEdit } from "react-icons/fa";
const PayoutDetails = () => {
  const [selected, setSelected] = useState(null);
  const payoutAccounts = [
    {
      id: 1,
      accountNumber: "002233453",
      accountName: "Slum2School Africa",
      bank: "Union Bank",
    },
  ];
  return (
    <Container>
      <Aside_holder2>
        <div className="title">
          <p>Payout Details</p>
        </div>
        <div className="account_list">
          {payoutAccounts.map((acct) => {
            const isActive = selected === acct.id;

            return (
              <div
                key={acct.id}
                className={`account_card ${isActive ? "active" : ""}`}
                onClick={() => setSelected(acct.id)}
              >
              
                <div className="radio_col">
                  <input
                    type="radio"
                    checked={isActive}
                    onChange={() => setSelected(acct.id)}
                  />
                </div>

              
                <div className="account_info">
                  <p className="number">{acct.accountNumber}</p>
                  <p className="name">{acct.accountName}</p>
                  <p className="bank">{acct.bank}</p>
                </div>

             
                <div className="actions">
                  <FiTrash2 className="icon delete" />
                  <FaRegEdit className="icon edit" />

                </div>
              </div>
            );
          })}
        </div>
        <div className="input_holder">
        <div className="add_account">
          <p>Add account details</p>
        </div>
          <div className="name_holder">
            <label>Bank Account Name</label>
            <InputField
              type="text"
              placeholder="Enter your bank account name"
            />
          </div>
          <div className="name_holder">
            <label>Bank Account Number</label>
            <InputField
              type="text"
              placeholder="Enter your bank account number"
            />
          </div>
          <div className="name_holder">
            <label>Bank Name</label>
            <InputField type="text" placeholder="Enter your bank name" />
          </div>
          <div className="btn_holder">
            <Button text="Discard Changes" className="btn_left" />
            <Button text="Save Changes" className="btn_right" />
          </div>
        </div>
      </Aside_holder2>
    </Container>
  );
};

export default PayoutDetails;
