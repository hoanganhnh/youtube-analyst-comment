import React from "react";
import ReactPlayer from "react-player";
import Avatar from "react-avatar";

import Header from "../components/Header";
import InputSearchYoutube from "../components/InputSearchYoutube";
import ListCommentStaticVideo from "../components/ListCommentStaticVideo";
import { useViewer } from "../contexts/ViewerContext";

const VideoStatic = () => {
  const { video, videoDetails } = useViewer();

  return (
    <div className="w-full flex flex-col p-3 bg-gray-800 text-gray-200 h-screen">
      <Header />
      <div className="mt-6">
        <InputSearchYoutube />
      </div>
      <div className="flex flex-col lg:flex-row w-full h-screen overflow-y-scroll justify-around gap-1 space-x-4 px-10 py-10">
        {video ? (
          <>
            <div className="w-full px-4 mx-auto h-screen lg:w-2/3 aspect-auto overflow-hidden">
              <div className="w-full h-full lg:h-4/5 overflow-hidden rounded-xl">
                <ReactPlayer
                  width={"100%"}
                  height={"100%"}
                  controls
                  url={`https://www.youtube.com/embed/${video}`}
                />
              </div>
              {videoDetails && (
                <div className="pt-4 space-y-2">
                  <h1 className="text-xl">{videoDetails?.video_title}</h1>
                  <div className="flex gap-3 items-center p-2 justify-start">
                    <Avatar
                      round
                      size="30"
                      className={videoDetails ? "block" : "hidden"}
                      name={videoDetails?.channel_name}
                    />
                    <span className="font-semibold tracking-wider text-gray-200">
                      {videoDetails?.channel_name}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="flex h-screen w-full justify-center items-center">
            <h2 className="text-xl text-gray-700 animate-bounce">
              Waiting to get first message from the video
            </h2>
          </div>
        )}
        <div className="px-4 flex flex-col bg-transparent w-full lg:w-1/3 overflow-hidden h-full border border-1 border-gray-400/50 rounded-md py-2 shadow-md ">
          <div className="flex justify-between p-2 shadow-md">
            <span>Chats</span>
            <div className="flex gap-2 items-center">
              <span className={`bg-green-400 rounded-full h-2 w-2`}></span>
              <h2 className="text-sm text-emerald-200 space-x-2">
                <span>Watching</span>
              </h2>
            </div>
          </div>
          <div className="w-full overflow-y-auto h-full overflow-hidden">
            <ListCommentStaticVideo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoStatic;
