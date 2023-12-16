import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import HistoryPage from "./pages/History";
import VideoLiveStreamPage from "./pages/VideoLiveStream";
import VideoStatic from "./pages/VideoStatic";
import SignUpPage from "./pages/SignUp";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/live-static" element={<VideoStatic />} />
      <Route path="/live-stream" element={<VideoLiveStreamPage />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
};

export default App;
