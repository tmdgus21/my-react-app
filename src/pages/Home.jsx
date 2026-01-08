import "./Home.css";
import Card from "../components/Card.jsx";
import HeroBanner from "../components/HeroBanner.jsx"
import Header from "../components/Header.jsx"

function Home() {
  return (
    <div className="home">
        <Header />
        <HeroBanner />
        
      <section className="content">
        <h2>Popular</h2>

        <div className="card-list">
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </div>
  );
}

export default Home;
