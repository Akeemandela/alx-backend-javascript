import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const sizes = [19, 20, 34];
  const arrayOfRoom = [];

  for (const size of sizes) {
    arrayOfRoom.push(new ClassRoom(size));
  }
  return arrayOfRoom;
}
