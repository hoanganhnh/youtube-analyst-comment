import { createContext, useEffect, useRef, useState, useContext } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext({
  socket: {},
  isSocketConnected: false,
});

export function SocketProvider({ children }) {
  const [isSocketConnected, setIsSocketConnected] = useState(false);
  const socketCurrent = useRef();

  useEffect(() => {
    if (!socketCurrent.current) {
      socketCurrent.current = io("http://localhost:5001/api/socket");
      setIsSocketConnected(socketCurrent.current.connected);
    }

    if (socketCurrent.current) {
      socketCurrent.current.on("connect", () => {
        setIsSocketConnected(socketCurrent.current.connected);
      });
    }
  }, [socketCurrent]);

  return (
    <SocketContext.Provider
      value={{ socket: socketCurrent, isSocketConnected }}
    >
      {children}
    </SocketContext.Provider>
  );
}

export function useSocket() {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error("useSocket must be used within a SocketProvider");
  }
  return context;
}
