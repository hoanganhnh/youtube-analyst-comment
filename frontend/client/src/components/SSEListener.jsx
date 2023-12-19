import React, { useEffect, useState, useRef } from "react";
import { io } from 'socket.io-client';

import VideoMessage from "./VideoMessage";

const socket = io('http://localhost:5001/api/socket');

const SSEListener = () => {

  const [isConnected, setIsConnected] = useState(socket.connected);

  const [messages, setMessages] = useState([]);
  const messagesContainerRef = useRef(null);

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(socket.connected);
    });

    socket.on('liveComment', (data) => {
      console.log(data)
      setMessages((prevMessages) => {
        const newMessages = [data, ...prevMessages];
        return newMessages;
      });
    });

    return () => {
      socket.on('disconnect', () => {
        setIsConnected(socket.connected);
      });
  
    }

  }, []);

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
