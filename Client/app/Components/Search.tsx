import React from "react";

const Search = () => {
  return (
    <>
      <div className="text-center mt-[4rem] px-4">
        <div className="">
          <input
            type="text"
            id="search-query"
            className="border border-[#40BFFF] p-2 w-full max-w-sm rounded-l-md"
            placeholder="Search Query"
          />
          <button
            className="border border-[#40BFFF] bg-[#40BFFF] p-2 rounded-r-md"
            type="submit"
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
