// src/components/Card.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ image, title, artist }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/card-detail/${encodeURIComponent(title)}/${encodeURIComponent(artist)}`);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        cursor: "pointer",
        borderRadius: "12px",
        overflow: "hidden",
        width: "200px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
      }}
    >
      <img src={image} alt={title} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
      <div style={{ padding: "10px", textAlign: "center" }}>
        <h3>{title}</h3>
        <p>{artist}</p>
      </div>
    </div>
  );
};

export default Card;
