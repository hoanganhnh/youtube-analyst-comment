import React, { useEffect, useState, useRef } from "react";

import VideoMessage from "./VideoMessage";
import { useViewer } from "../contexts/ViewerContext";

const MAX_MESSAGES = 150; // Maximum number of messages to display

const SSEListener = () => {
  const [messages, setMessages] = useState([]);
  const messagesContainerRef = useRef(null);

  const { setViewerCount, setIsLive, video, setVideo } = useViewer();

  useEffect(() => {
    const handleStream = (event) => {
      const rawData = event.data;
      const validJSONData = rawData
        .replace(/'/g, '"')
        .replace(/True/g, "true")
        .replace(/False/g, "false");
      const eventData = JSON.parse(validJSONData);
      console.log(eventData);
      if (video == null) {
        setVideo(eventData.video_id);
      }
      setViewerCount(eventData?.viewers_count);
      setIsLive(eventSource?.is_live);

      // Update messages array while maintaining the maximum limit
      // setMessages((prevMessages) => {
      //   const newMessages = [eventData, ...prevMessages].slice(0, MAX_MESSAGES);
      //   return newMessages;
      // });

      setMessages((prevMessages) => {
        const newMessages = [...prevMessages, eventData].slice(-MAX_MESSAGES);
        return newMessages;
      });
    };

    const handleStreamError = (error) => {
      console.error("SSE Error:", error);
    };

    const eventSource = new EventSource("http://localhost:3000/stream");

    eventSource.addEventListener("message", handleStream);
    eventSource.addEventListener("interval", handleStream);
    eventSource.addEventListener("error", handleStreamError);

    return () => {
      eventSource.close();
      eventSource.removeEventListener("message", handleStream);
      eventSource.removeEventListener("interval", handleStream);
      eventSource.removeEventListener("error", handleStreamError);
    };
  }, []);

  useEffect(() => {
    // Scroll to the bottom when messages change
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
