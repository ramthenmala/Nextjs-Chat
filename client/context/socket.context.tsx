import { createContext, useContext, useState } from 'react';
import io, { Socket } from 'socket.io-client';
import { SOCKET_URL } from '../config/default';

interface IContext {
  socket: Socket;
  username: string;
  setUsername: Function;
  roomId?: string;
  rooms: object;
}

const socket = io(SOCKET_URL);
const SocketContext = createContext({ socket, setUsername: () => false });

function SocketsProvider(props: any) {
  const [username, setUsername] = useState('');
  const [roomId, setRoomId] = useState('');
  const [rooms, setRoom] = useState([]);
  return (
    <SocketContext.Provider
      value={{ socket, username, setUsername, roomId, rooms }}
      {...props}
    />
  );
}

export const useSocket = () => useContext(SocketContext);

export default SocketsProvider;
