import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col p-3 bg-gray-800 text-gray-200 h-screen">
      <Header />
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="mb-5">
          <Link to="live-static" className="p-6 hover:underline">
            Video Static
          </Link>
        </div>
        <div>
          <Link to="live-stream" className="hover:underline">
            Video Live Stream
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
