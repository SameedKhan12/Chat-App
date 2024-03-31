import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import { io } from "socket.io-client";
export const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext)
}

export const SocketContextProvider = ({ childern }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();
  useEffect(() => {
    if (authUser) {
      const socket = io("https://chat-app-production-a793.up.railway.app" ,{
        withCredentials: true,
        query:{
            userId:authUser._id
        }
      });

      setSocket(socket);
      socket.on("getOnlineUsers",(users) => {
        setOnlineUsers(users)
      })

      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);
  return <SocketContext.Provider value={{socket,onlineUsers}}>{childern}</SocketContext.Provider>;
};
