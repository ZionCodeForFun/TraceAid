import React from "react";
import RoleModal from "../auth/RoleModal";


const Modal = ({ showModal, setShowModal }) => {
  if (!showModal) return null;

  return (
    <div>
      <RoleModal onClose={() => setShowModal(false)} />
    </div>
  );
};

export default Modal;
