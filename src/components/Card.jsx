import "./Card.css";

function Card({ image, title, artist }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-info">
        <h4>{title}</h4>
        <p>{artist}</p>
      </div>
    </div>
  );
}

export default Card;
