import React, { useState } from "react";
import { auth } from "../assets/firebase";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";


const provider = new GoogleAuthProvider();

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    try {
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-bg">
      <form className="login-card" onSubmit={handleLogin}>
        <h2 className="login-title">Sign in with email</h2>
        <p className="login-subtitle">Login to access weather data</p>
        <input
          className="login-input"
          type="email"
          placeholder="Email"
          value={email}
          autoComplete="username"
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          className="login-input"
          type="password"
          placeholder="Password"
          value={password}
          autoComplete="current-password"
          onChange={e => setPassword(e.target.value)}
          required
        />
        <div className="login-options">
          <Link to="#" className="login-forgot">Forgot password?</Link>
        </div>
        {error && <div className="login-error">{error}</div>}
        <button className="login-btn" type="submit">Get Started</button>
        <button type="button" className="google-btn" onClick={handleGoogleLogin}>
          <i className="fab fa-google"></i> Sign in with Google
        </button>
        <div className="login-bottom">
          Don’t have an account? <Link to="/register" className="register-link">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
