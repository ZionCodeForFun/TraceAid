import React, { useState } from "react";
import { Button } from "antd";
import RoleModal from "./RoleModal";

const RoleModalLauncher = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ width: 320, textAlign: "center" }}>
        <h2>Role Modal Launcher (Test)</h2>
        <p>Click the button below to open the role selection modal.</p>
        <Button type="primary" block onClick={() => setOpen(true)}>
          Open Role Modal
        </Button>
      </div>

      {open && <RoleModal onClose={() => setOpen(false)} />}
    </div>
  );
};

export default RoleModalLauncher;
