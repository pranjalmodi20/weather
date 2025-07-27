import React, { useState } from "react";
import { auth } from "../assets/firebase";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
const provider = new GoogleAuthProvider();

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleRegister = async () => {
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
      <form className="login-card" onSubmit={handleRegister}>
        <h2 className="login-title">Create Your Account</h2>
        <p className="login-subtitle">
          Sign up to check the weather data
        </p>
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
          autoComplete="new-password"
          onChange={e => setPassword(e.target.value)}
          required
        />

        {error && <div className="login-error">{error}</div>}

        <button className="login-btn" type="submit">Register</button>

        <button type="button" className="google-btn" onClick={handleGoogleRegister}>
          <i className="fab fa-google"></i> Register with Google
        </button>

        <div className="login-bottom">
          Already have an account?
          <Link to="/login" className="register-link">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
