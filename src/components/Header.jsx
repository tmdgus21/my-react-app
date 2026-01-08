import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  // 컴포넌트 마운트 시 localStorage 체크
  useEffect(() => {
    const loginStatus = localStorage.getItem("isLogin");
    setIsLogin(loginStatus === "true");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLogin"); // 로그인 상태 제거
    alert("did logout.");
    setIsLogin(false);
    navigate("/"); // home 페이지로 이동
  };

  return (
    <header className="header">
      <div className="header-logo">Music Archive</div>

      <nav className="header-nav">
        <a href="/">Home</a>
        <a href="#">Archive</a>
        <a href="#">About</a>

        {isLogin ? (
          <button
            onClick={handleLogout}
            style={{
              background: "none",
              paddingLeft: "25px",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            Logout
          </button>
        ) : (
          <a href="/login">Login</a>
        )}
      </nav>
    </header>
  );
}

export default Header;
