import React, { useRef, useState } from "react";
import { Container } from "../../../../style/SettingsStyle";
import { AiOutlineUser } from "react-icons/ai";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { FiBell, FiLock } from "react-icons/fi";
import { LuIdCard, LuWalletCards } from "react-icons/lu";
import profile from "../../../../assets/profile.png";
import { CiEdit } from "react-icons/ci";
import { updateOrganization } from "../../../../api/updateorgProfile";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setUser } from "../../../../global/authSlice";
const infor = [
  { id: 1, name: "Personal Information", icon: <AiOutlineUser />, path: "" },
  { id: 2, name: "KYC Verification", icon: <LuIdCard />, path: "kycVerify" },
  { id: 3, name: "Security", icon: <FiLock />, path: "security" },
  {
    id: 4,
    name: "Payout Details",
    icon: <LuWalletCards />,
    path: "payoutDetails",
  },
  { id: 5, name: "Notifications", icon: <FiBell />, path: "notification" },
];

const Settings = () => {
  const nav = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.toLowerCase();

  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.user.token);
  const userId = useSelector((state) => state.auth.user._id);
  const userData = useSelector((state) => state.auth.user);
  console.log(userData)
  console.log(token);
  const [profilePic, setProfilePic] = useState(
    userData?.profilePicture || profile
  );

  const fileInputRef = useRef(null);

  const handleProfileClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setProfilePic(URL.createObjectURL(file));

      const response = await updateOrganization(
        userId,
        { profilePicture: file },
        token
      );

    
      const updatedPicture = response?.data?.data?.update?.profilePicture;

      if (!updatedPicture) {
        console.warn("No updated picture found in response:", response);
        toast.error("No updated picture returned from server.");
        return;
      }

      const updatedUser = {
        ...userData,
        profilePicture: {
          imageUrl: updatedPicture.imageUrl,
          publicId: updatedPicture.publicId,
        },
      };

      dispatch(setUser(updatedUser));
      toast.success("Profile picture updated successfully!");
    } catch (error) {
      console.error("Profile update error:", error);
      toast.error("Failed to update profile picture.");
    }
  };

  return (
    <Container>
      <article className="wrapper">
        <aside className="left">
          <header className="top_profile">
            <div className="profile_holder" onClick={handleProfileClick}>
              <img src={profilePic} alt="profile" style={{borderRadius:"50px"}}/>
            </div>
            <div className="name_holder">
              <p className="name">
                {userData?.organizationName || "Organization"}
              </p>
              <p className="role">{userData?.role || "NGO"}</p>
            </div>

            <CiEdit className="edit_icon" onClick={handleProfileClick} />

        
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </header>

          <section className="infor_holder">
            {infor.map((item) => {
              const itemFullPath =
                item.path === ""
                  ? "/organization/settings"
                  : `/organization/settings/${item.path.toLowerCase()}`;

              const isActive = currentPath === itemFullPath;

              return (
                <div
                  key={item.id}
                  className={`infor ${isActive ? "active" : ""}`}
                  onClick={() => nav(itemFullPath)}
                >
                  <i>{item.icon}</i>
                  <p>{item.name}</p>
                </div>
              );
            })}
          </section>
        </aside>

        <Outlet />
      </article>
    </Container>
  );
};

export default Settings;
