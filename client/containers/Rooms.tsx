import { useRef } from 'react';
import EVENTS from '../config/events';
import { useSocket } from '../context/socket.context';

function RoomsContainer() {
  const { socket, roomId, rooms } = useSocket();
  const newRoom = useRef(null);
  const handleCreateRoom = () => {
    // Get room name
    const roomName = newRoom.current.value || '';
    if (!String(roomName).trim()) return;
    // Set Room
    socket.emit(EVENTS.CLIENT.CREATE_ROOM, { roomName });

    // Clear Room Name from input
    newRoom.current.value = '';
  };
  return (
    <nav className="w-full bg-white lg:w-2/6 dark:bg-gray-900 rounded-lg mr-5">
      <div className="w-full max-w-full h-full flex flex-col">
        <div className="text-4xl font-semibold dark:text-white text-gray-900">
          <input
            type="text"
            placeholder="Please enter your name"
            ref={newRoom}
          />
          <button onClick={handleCreateRoom}>Create Room</button>
        </div>
      </div>
    </nav>
  );
}
export default RoomsContainer;
