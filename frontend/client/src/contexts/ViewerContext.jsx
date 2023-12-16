import React, { createContext, useContext, useState } from "react";

const ViewerContext = createContext();

export function ViewerProvider({ children }) {
  const [viewerCount, setViewerCount] = useState(0);
  const [isLive, setIsLive] = useState(false);
  const [video, setVideo] = useState(null);
  const [videoDetails, setVideoDetails] = useState({});

  return (
    <ViewerContext.Provider
      value={{
        viewerCount,
        setViewerCount,
        setIsLive,
        isLive,
        video,
        setVideo,
        videoDetails,
        setVideoDetails,
      }}
    >
      {children}
    </ViewerContext.Provider>
  );
}

export function useViewer() {
  const context = useContext(ViewerContext);
  if (!context) {
    throw new Error("useViewer must be used within a ViewerProvider");
  }
  return context;
}
