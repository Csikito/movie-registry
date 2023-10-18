import React from "react";

const Filter = ({ searchTitle, setSearchTitle, searchAge, setSearchAge }) => {
  return (
    <>
      <div className="w-1/2 text-left">
        <label htmlFor="titleFilter"></label>
        <input
          type="text"
          className="bg-white bg-opacity-30 p-1 rounded-md border-[bg-light] border"
          placeholder="Search by title..."
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
        />
      </div>
      <div className="w-1/3 ">
        <label htmlFor="titleFilter"></label>
        <input
          type="number"
          className=" bg-white bg-opacity-30 w-[100px] p-1 rounded-md border-[bg-light] border"
          placeholder="Age..."
          value={searchAge}
          onChange={(e) => setSearchAge(e.target.value)}
          max="18"
          min="0"
        />
      </div>
    </>
  );
};

export default Filter;
