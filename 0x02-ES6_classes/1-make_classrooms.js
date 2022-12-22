import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const maxSizes = [19, 20, 34];
  const arrOfRoom = [];

  for (const size of maxSizes) {
    arrOfRoom.push(new ClassRoom(size));
  }
  return arrOfRoom;	
}
