import { useState } from "react";
import "./Login.css";
import Header from "./Header";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!id || !password) {
      alert("please input your ID and Password.");
      return;
    }
    alert("Success Login");
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
      </form>
    </div>
  );
}

export default Login;
