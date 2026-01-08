import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (!id || !password || !confirmPassword) {
      alert("모든 항목을 입력하세요.");
      return;
    }

    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    // 🔥 나중에 API 요청으로 바뀔 부분
    alert("회원가입 성공!");
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
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <input
          className="signup-input"
          type="text"
          placeholder="ID"
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
