import "./ContentSection.css";
import ContentCard from "./Card";

function ContentSection({ title, subtitle, grid }) {
  return (
    <section className="section">
      <div className="section-header">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>

      <div className={grid ? "card-grid" : "card-row"}>
        {[1,2,3,4].map((i) => (
          <ContentCard key={i} />
        ))}
      </div>
    </section>
  );
}

export default ContentSection;
