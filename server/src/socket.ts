import { Server, Socket } from 'socket.io';
import logger from './utils/logger';

const EVENTS = {
  connection: 'connection',
  CLIENT: {
    CREATE_ROOM: 'CREATE_ROOM',
  },
};

function socket({ io }: { io: Server }) {
  io.on(EVENTS.connection, (socket: Socket) => {
    logger.info(`User connected ${socket.id}`);
    socket.on(EVENTS.CLIENT.CREATE_ROOM, ({ roomName }) => {
      logger.info({ roomName });
    });
  });
}

export default socket;
