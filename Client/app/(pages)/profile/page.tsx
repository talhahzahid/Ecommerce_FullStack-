import React from "react";
import { Pencil } from "lucide-react";

const page = () => {
  return (
    <>
      <div className="flex justify-around items-center flex-wrap h-[80vh]">
        <div>
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-44 rounded-full ring ring-offset-2">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="User Avatar"
              />
            </div>
          </div>
        </div> 
        <div className="px-4 flex flex-col gap-4">
          <input
            type="password"
            placeholder="Change Name"
            className="input input-bordered input-info w-full p-3 rounded-md mb-4"
          />
          <input
            type="email"
            placeholder="change email"
            className="input input-bordered input-info w-full p-3 rounded-md mb-4"
          />
          <input
            type="password"
            placeholder="change password"
            className="input input-bordered input-info w-full p-3 rounded-md mb-4"
          />
         <input type="file" className="file-input file-input-bordered file-input-accent w-full max-w-xs" />
          <button className="btn btn-primary">Update Profile</button>
        </div>
      </div>
    </>
  );
};

export default page;
