import React from "react";
import Link from "next/link";
const page = () => {
  return (
    <>
      <div className="flex justify-center items-center h-[100vh]">
        <div>
          <h1 className="text-center text-2xl font-bold text-[#333] mb-6">
            Register
          </h1>
          <form className="flex flex-col gap-4 ">
            <input
              type="text"
              placeholder="Enter your fullname"
              className="input input-bordered input-info w-[20rem] p-3 rounded-md"
            />
            <input
              type="email"
              placeholder="Enter your mail"
              className="input input-bordered input-info w-[20rem] p-3 rounded-md"
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered input-info w-full p-3 rounded-md"
            />
            <input
              type="file"
              className="file-input file-input-bordered file-input-accent w-full max-w-xs"
            />
            <button className="btn btn-primary w-full p-3 mt-4 rounded-md hover:bg-blue-700 transition duration-300">
              Register
            </button>
            <h2 className="text-center underline text-primary">
              <Link href="/Register">Already have an account</Link>
            </h2>
          </form>
        </div>
      </div>
    </>
  );
};

export default page;
