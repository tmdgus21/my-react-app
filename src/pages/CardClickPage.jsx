// src/pages/CardClickPage.jsx
import React from "react";
import { useParams } from "react-router-dom";

const CardClickPage = () => {
  const { title, artist } = useParams(); // URL에서 카드 정보 가져오기

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Card Detail Page</h1>
      <p>Title: {decodeURIComponent(title)}</p>
      <p>Artist: {decodeURIComponent(artist)}</p>
      <p>This page is accessible only to logged-in users</p>
    </div>
  );
};

export default CardClickPage;
