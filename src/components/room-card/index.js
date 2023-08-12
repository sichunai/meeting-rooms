import "./styles.css";

const RoomCard = ({ room, bookRoom }) => {
  const { name, spots, thumbnail } = room;

  return (
    <div className="room-card-container">
      <img className="room-thumbnail" src={thumbnail} alt={`${name}`} />
      <div className="room-booking-container">
        <div className="room-name">{name}</div>
        {spots !== 0 && (
          <button className="room-book-btn" onClick={() => bookRoom(name)}>
            Book!
          </button>
        )}
      </div>
      <div className="room-spots">{spots} spots remaining</div>
    </div>
  );
};

export default RoomCard;
