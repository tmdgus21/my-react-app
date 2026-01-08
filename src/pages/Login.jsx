import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import "./Home.jsx"
import "./Signup.jsx"
import Signup from "./Signup.jsx";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!id || !password) {
      alert("please input your ID and Password.");
      return;
    }
    localStorage.setItem("isLogin", "true"); //로그인 상태 저장

    alert("Success Login");

    navigate("/home"); //home으로 이동
  };//from의 기본 동작 = 페이지 새로고침(React에서는 새로고침 X)
//alert : 웹의 기본적인 경고/알람 창
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2 className="login-title">Login</h2>

        <input
          className="login-input"
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <input
          className="login-input"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login-btn" type="submit">
          Login
        </button>

        <button className="forgot-btn" type="button">
          Forgot the password?
        </button>

        <button className="signup-btn" type="button" onClick={() => navigate("/Signup")}>
          Signup
        </button>
      </form>
    </div>
  );
}

export default Login;
