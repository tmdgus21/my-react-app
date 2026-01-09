import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const handleSignup = (e) => {
    e.preventDefault();

    if (!username ||!id || !password || !confirmPassword) {
      alert("all input.");
      return;
    }

    if(!emailRegex.test(id)) {
      alert("Please enter a valid email address.");
      return;
    }
    
    if (password.length < 8) {
      alert("Password must be at least 8 characters.");
      return;
    } 

    if (password !== confirmPassword) {
      alert("password do not match.");
      return;
    }

    // 🔥 나중에 API 요청으로 바뀔 부분
    alert("Welcome!");
    navigate("/login");
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSignup}>
        <h2 className="signup-title">Sign Up</h2>

        <input
          className="signup-input"
          type="text"
          placeholder="Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="signup-input"
          type="email"
          placeholder="Email"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <input
          className="signup-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          className="signup-input"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button className="signup-btn" type="submit">
          Sign Up
        </button>

        <button
          type="button"
          className="login-link"
          onClick={() => navigate("/login")}
        >
          Already have an account?
        </button>
      </form>
    </div>
  );
}

export default Signup;
