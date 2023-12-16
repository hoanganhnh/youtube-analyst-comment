import React from "react";

import Header from "../components/Header";
import InputSearchYoutube from "../components/InputSearchYoutube";

const VideoStatic = () => {
  return (
    <div className="w-full flex flex-col p-3 bg-gray-800 text-gray-200 h-screen">
      <Header />
      <div className="mt-6">
        <InputSearchYoutube />
      </div>
    </div>
  );
};

export default VideoStatic;
