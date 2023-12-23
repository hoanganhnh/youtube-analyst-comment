import React, { useEffect, useState, useRef } from "react";

import VideoMessage from "./VideoMessage";
import { useSocket } from "../contexts/SocketContext";
import { useViewer } from "../contexts/ViewerContext";

const SSEListener = () => {
  const [messages, setMessages] = useState([]);
  const messagesContainerRef = useRef(null);

  const { setVideo, setVideoDetails } = useViewer();
  const { socket } = useSocket();

  React.useEffect(() => {
    if (socket.current) {
      socket.current.on("liveComment", (data) => {
        console.log(data);
        setMessages((prevMessages) => {
          const newMessages = [data, ...prevMessages];
          return newMessages;
        });
      });
    }

    return () => {
      setVideo(null);
      setVideoDetails({});
    };
  }, [socket.current]);
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div ref={messagesContainerRef} className="h-full overflow-y-auto py-10">
      {messages.map((message, index) => (
        <VideoMessage key={index} data={message} />
      ))}
    </div>
  );
};

export default SSEListener;
