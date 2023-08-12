import { useEffect, useState } from "react";
import RoomCard from "../../components/room-card/index";
import "./styles.css";

const Rooms = () => {
  const [roomsArray, setRoomsArray] = useState([]);
  useEffect(() => {
    const getRoomsData = async () => {
      const result = await fetch("https://wetransfer.github.io/rooms.json");
      const roomsData = await result.json();
      const { rooms } = roomsData;
      setRoomsArray(rooms);
    };
    getRoomsData();
  }, []);

  const handleOnBookRoom = (roomName) => {
    alert(roomName + " has been booked!");
    const updatedRooms = roomsArray.map((room) => {
      if (room.name === roomName) {
        return {
          name: room.name,
          spots: room.spots - 1,
          thumbnail: room.thumbnail,
        };
      } else {
        return {
          ...room,
        };
      }
    });
    setRoomsArray(updatedRooms);
  };

  return (
    <div className="rooms-container">
      <h1 className="rooms-header">Rooms</h1>
      <h2 className="rooms-description">
        Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor
        ultricies donec risus sodales. Tempus quis et.
      </h2>
      <div className="rooms-grid">
        {roomsArray.map((room) => (
          <RoomCard key={room.name} room={room} bookRoom={handleOnBookRoom} />
        ))}
      </div>
    </div>
  );
};

export default Rooms;
