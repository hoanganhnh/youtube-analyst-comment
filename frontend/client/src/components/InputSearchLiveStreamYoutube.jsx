import * as React from "react";
import axios from "axios";

import { useViewer } from "../contexts/ViewerContext";
import { youtubeParser } from "../utils/getIdVideoYoutube";
import { useUser } from "../contexts/AuthContext";
import { createHistory } from "../utils/history";

const InputSearchLiveStreamYoutube = () => {
  const [url, setUrl] = React.useState("");

  const { user } = useUser();

  const { setVideo, setVideoDetails } = useViewer();

  const handleSearchLiveStreamVideo = () => {
    if (!url) {
      console.log("require url youtube");
      return;
    }
    axios
      .post("http://127.0.0.1:5002/api/scraper", {
        url,
      })
      .then(() => {
        console.log("send url video stream successful");
        const videoId = youtubeParser(url);
        setVideo(videoId);
        createHistory({ userId: user._id, videoId });

        axios
          .post("http://127.0.0.1:5000/api/video/find-info-by-video-id", {
            videoId,
          })
          .then((res) => {
            setVideoDetails(res.data);
          });
      })
      .catch(() => {
        console.error("error send url video stream");
      })
      .finally(() => {
        setUrl("");
      });
  };

  return (
    <div className="flex items-center justify-center flex-grow">
      <input
        type="text"
        placeholder="Search"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className=" text-gray-800 border rounded-l-xl border-gray-400 h-8  px-4 py-4 focus:outline-none focus:border-blue-600 w-3/5"
      />
      <button
        onClick={handleSearchLiveStreamVideo}
        className=" rounded-r-xl flex items-center justify-center h-8 w-16 border border-gray-400 focus:outline-none border-l-0"
      >
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

export default InputSearchLiveStreamYoutube;
