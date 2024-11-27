import ProfileSection from "@/components/profile/ProfileSection";
import UserSheets from "@/components/profile/Sheets";
import React from "react";

const ProfilePage = () => {
  return (
    <div className="flex flex-col ">
      <div className="mx-auto w-10/12">
        <ProfileSection />
        <UserSheets />
      </div>
    </div>
  );
};

export default ProfilePage;
