import { useEffect, useState } from "react";
import RoomCard from "../../components/room-card/index";
import AlertSuccess from "../../components/alert/index";
import "./styles.css";

const Rooms = () => {
  const [roomsArray, setRoomsArray] = useState([]);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertOpen, setAlertOpen] = useState(false);

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
    setAlertOpen(true);
    setAlertMessage(roomName + " has been booked!");
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

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlertOpen(false);
  };

  return (
    <div className="rooms-container">
      <AlertSuccess
        message={alertMessage}
        open={alertOpen}
        onClose={handleCloseAlert}
      />
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
