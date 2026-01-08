import "./HeroBanner.css";
import heroImage from "../assets/banner.jpg";

function HeroBanner() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay">
        <h1>Music Archive</h1>
        <p>노래의 기록</p>
      </div>
    </section>
  );
}

export default HeroBanner;
