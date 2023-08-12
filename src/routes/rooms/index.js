import { useEffect, useState } from "react";
import RoomCard from "../../components/room-card/index";
import "../../index.css";

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

  return (
    <div className="rooms-container">
      <h1>Rooms</h1>
      <h2>
        Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor
        ultricies donec risus sodales. Tempus quis et.
      </h2>
      <div className="rooms-grid">
        {roomsArray.map((room) => (
          <RoomCard key={room.name} room={room} />
        ))}
      </div>
    </div>
  );
};

export default Rooms;
