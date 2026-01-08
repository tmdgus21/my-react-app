import "./Home.css";
import Card from "../components/Card.jsx";
import HeroBanner from "../components/HeroBanner.jsx"
import Header from "../components/Header.jsx"
import img1 from "../assets/image1.png";
import img2 from "../assets/image2.png";
import img3 from "../assets/image3.png";

function Home() {
  return (
    <div className="home">
        <Header />
        <HeroBanner />
        
      {/* 최근 노래 */}
      <section className="section">
        <h2>최근 추가된 노래</h2>
        <div className="card-row">
          <Card
            image="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
            title="Live Session"
            artist="Indie Band"
          />
          <Card
            image="https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2"
            title="Vinyl Night"
            artist="DJ Archive"
          />
        </div>
      </section>

      {/* 아카이브 */}
      <section className="section">
        <h2>아카이브</h2>
        <div className="card-grid">
          <Card
            image="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f"
            title="Rock Festival"
            artist="2023"
          />
          <Card
            image="https://images.unsplash.com/photo-1511379938547-c1f69419868d"
            title="Jazz Night"
            artist="Live House"
          />
          <Card
            image="https://images.unsplash.com/photo-1518972559570-7cc1309f3229"
            title="Classic Hall"
            artist="Orchestra"
          />
          <Card
            image="https://images.unsplash.com/photo-1487215078519-e21cc028cb29"
            title="Indie Stage"
            artist="Seoul"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
