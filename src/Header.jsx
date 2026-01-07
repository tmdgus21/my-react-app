import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h2 className="header-title">MY React App Login</h2>
      <nav className="header-nav">
          <a href="/login">로그인</a>
          <a href="/signup">회원가입</a>
      </nav>
    </header>
  );
}

export default Header;
