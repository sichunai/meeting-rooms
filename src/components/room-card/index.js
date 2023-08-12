const RoomCard = ({ room }) => {
  const { name, spots, thumbnail } = room;
  return (
    <div className="room-card-container">
      <img src={thumbnail} alt={`${name}`} />
      <div>{name}</div>
      <div>{spots} spots remaining</div>
    </div>
  );
};

export default RoomCard;
