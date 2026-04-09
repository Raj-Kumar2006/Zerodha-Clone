import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./Login.css";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CircularProgress from "@mui/material/CircularProgress";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { login } = useContext(GeneralContext);

  const showSuccessMessage = (msg) => {
    setSuccessMsg(msg);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setTimeout(() => setSuccessMsg(""), 300);
    }, 3000);
  };

  const showErrorMessage = (msg) => {
    setError(msg);
    setShowError(true);
    setTimeout(() => {
      setShowError(false);
      setTimeout(() => setError(""), 300);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setShowError(false);
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:3002/login", {
        username,
        password,
      });

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", res.data.username);
        localStorage.setItem("userId", res.data.userId);
        login(res.data.username, res.data.userId);
        
        const token = res.data.token;
        axios.post("http://localhost:3002/seedData", {}, {
          headers: { Authorization: `Bearer ${token}` }
        }).then(() => {
          showSuccessMessage(`Welcome, ${res.data.username}!`);
          setTimeout(() => navigate("/"), 1500);
        }).catch(() => {
          showSuccessMessage(`Welcome, ${res.data.username}!`);
          setTimeout(() => navigate("/"), 1500);
        });
      }
    } catch (err) {
      setLoading(false);
      showErrorMessage(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <a href="http://localhost:3000">
          <img
            src="https://zerodha.com/static/images/logo.svg"
            alt="Zerodha"
            className="logo"
          />
        </a>
        <h2>Login to your account</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          {/* Password field with centered toggle icon */}
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="password-input"
            />
            <span
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <VisibilityOffIcon sx={{ fontSize: 20 }} />
              ) : (
                <VisibilityIcon sx={{ fontSize: 20 }} />
              )}
            </span>
          </div>

          {error && (
            <div className={`error-message ${showError ? "show" : "hide"}`}>
              {error}
            </div>
          )}
          {successMsg && (
            <div className={`success-message ${showSuccess ? "show" : "hide"}`}>
              {successMsg}
            </div>
          )}
          <button type="submit" className="btn btn-blue" disabled={loading}>
            {loading ? <CircularProgress size={20} color="inherit" /> : "Login"}
          </button>
        </form>
        <p className="switch-auth">
          Don't have an account? <a href="/signup"><b>Sign up</b></a>
        </p>
      </div>
    </div>
  );
};

export default Login;