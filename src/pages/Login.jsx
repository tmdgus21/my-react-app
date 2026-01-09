import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Signup from "./Signup.jsx";
import Home from "./Home.jsx"

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const handleLogin = (e) => {
    e.preventDefault();
    if (!id || !password) {
      alert("Please input your ID and Password.");
      return;
    }
      // 이메일 형식 체크
    if(!emailRegex.test(id)) {
      alert("Please enter a valid email address.");
      return;
    }

    localStorage.setItem("isLogin", "true"); // 로그인 상태 저장
    alert("Success Login");
    navigate("/"); // Home으로 이동
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2 className="login-title">Welcome Back</h2>

        <input
          className="login-input"
          type="email"
          placeholder="Email"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <input
          className="login-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login-btn" type="submit">
          Login
        </button>

        <button className="forgot-btn" type="button">
          Forgot your password?
        </button>

        <button
          className="signup-btn"
          type="button"
          onClick={() => navigate("/signup")}
        >
          Don't have an account? Sign Up
        </button>
      </form>
    </div>
  );
}

export default Login;
