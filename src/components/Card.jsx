import "./Card.css";
import sampleImage from "../assets/sample.jpg";

function Card() {
  return (
    <div className="card">
      <img src={sampleImage} alt="thumbnail" />

      <div className="card-body">
        <span className="badge">FREE</span>
        <h3 className="card-title">Live Concert</h3>
        <p className="card-desc">2025 Winter Stage</p>
      </div>
    </div>
  );
}

export default Card;
