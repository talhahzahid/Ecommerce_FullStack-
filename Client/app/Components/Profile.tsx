import Link from "next/link";
import React from "react";

const Profile = () => {
  return (
    <>
      <div className="avatar flex justify-end px-4 ">
        <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
          <Link href="/profile">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Profile;
