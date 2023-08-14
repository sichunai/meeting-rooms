import "./styles.css";

const RoomCard = ({ room, bookRoom }) => {
  const { name, spots, thumbnail } = room;

  return (
    <div className="room-card-container">
      <img className="room-thumbnail" src={thumbnail} alt={`${name}`} />
      <div className="room-booking-container">
        <div data-testid="room-name-test" className="room-name">
          {name}
        </div>
        {spots !== 0 && (
          <button
            data-testid="room-book-btn-test"
            className="room-book-btn"
            onClick={() => bookRoom(name)}
          >
            Book!
          </button>
        )}
      </div>
      <div className="room-spots">{spots} spots remaining</div>
    </div>
  );
};

export default RoomCard;
