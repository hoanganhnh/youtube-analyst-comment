import React from "react";

const InputSearchYoutube = () => {
  return (
    <div className="flex items-center justify-center flex-grow">
      <input
        type="text"
        placeholder="Search"
        className=" text-gray-800 border rounded-l-xl border-gray-400 h-8  px-4 py-4 focus:outline-none focus:border-blue-600 w-3/5"
      />
      <button className=" rounded-r-xl flex items-center justify-center h-8 w-16 border border-gray-400 focus:outline-none border-l-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </div>
  );
};

export default InputSearchYoutube;
