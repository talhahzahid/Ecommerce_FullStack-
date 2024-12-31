import React from "react";

const page = () => {
  return (
    <>
      <h1 className="text-2xl ml-[3rem] mt-3">Dashboard</h1>
      <div className="flex justify-center items-center h-[70vh] px-3  ">
        <form
          action=""
          className="flex flex-col gap-3 bg-base-100 rounded-lg p-10 shadow-2xl"
        >
          <input
            type="text"
            placeholder="Product name"
            className="input input-bordered input-accent w-full max-w-xs
"
          />
          <textarea
            placeholder="Enter product description"
            rows={4}
            cols={40}
            className=" border border-[#00b6ff] input-bordered input-info w-full max-w-xs 
"
          ></textarea>
          <select
            name="cars"
            id="cars"
            className="border border-[#00b6ff] input info w-full max-w-xs cursor-pointer
  "
          >
            <option value="shoes">Shoes</option>
            <option value="wallets">Wallets</option>
            <option value="colthes">Clothes</option>
            <option value="electronic">Electronic</option>
          </select>
          <input
            type="number"
            placeholder="price"
            className="input input-bordered input-accent w-full max-w-xs
"
          />
          <input
            type="file"
            className="file-input file-input-bordered file-input-accent w-full max-w-xs cursor-pointer
"
          />
          <button className="btn btn-primary"> Product List </button>
        </form>
      </div>
    </>
  );
};

export default page;
