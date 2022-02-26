import { useSocket } from '../context/socket.context';

import MessagesContainer from '../containers/Messages';
import RoomsContainer from '../containers/Rooms';
import { useRef } from 'react';

export default function Home() {
  const { socket, username, setUsername } = useSocket();
  const userNameRef = useRef(null);

  const handleUserName = () => {
    const value = userNameRef.current.value;
    if (!value) {
      return;
    }

    setUsername(value);
    localStorage.setItem('username', value);
  };
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="flex flex-1 overflow-hidden h-screen max-w-screen-2xl m-auto">
        <div className="p-12 lg:p-20 w-full">
          <div className="max-h-full h-full flex flex-row ">
            {!username && (
              <>
                {/* Left Sidebar */}

                <RoomsContainer />
                {/* Right sidebar */}
                <div className="">
                  <MessagesContainer />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {!username && (
        <div>
          <input
            type="text"
            placeholder="Please enter username"
            ref={userNameRef}
          />
          <button onClick={handleUserName}>Start</button>
        </div>
      )}
    </div>
  );
}
