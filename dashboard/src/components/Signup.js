import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./Login.css";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CircularProgress from "@mui/material/CircularProgress";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
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

    if (password !== confirmPassword) {
      setLoading(false);
      showErrorMessage("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3002/signup", {
        username,
        email,
        phone,
        password,
      });

      if (res.data.message === "User created successfully") {
        showSuccessMessage(`Welcome, ${username}! Your account has been created.`);
        setSuccess(true);
        setTimeout(async () => {
          const loginRes = await axios.post("http://localhost:3002/login", {
            username,
            password,
          });
          if (loginRes.data.token) {
            localStorage.setItem("token", loginRes.data.token);
            localStorage.setItem("username", loginRes.data.username);
            localStorage.setItem("userId", loginRes.data.userId);
            login(loginRes.data.username, loginRes.data.userId);
            
            const token = loginRes.data.token;
            axios.post("http://localhost:3002/seedData", {}, {
              headers: { Authorization: `Bearer ${token}` }
            }).then(() => {
              setTimeout(() => navigate("/"), 1500);
            }).catch(() => {
              setTimeout(() => navigate("/"), 1500);
            });
          }
        }, 1500);
      }
    } catch (err) {
      setLoading(false);
      showErrorMessage(err.response?.data?.message || "Signup failed");
    }
  };

  if (success) {
    return (
      <div className="auth-container">
        <div className="auth-box">
          <div className="success-message">
            <h2>Account Created!</h2>
            <p>Redirecting to dashboard...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <div className="auth-box">
        <img
          src="https://zerodha.com/static/images/logo.svg"
          alt="Zerodha"
          className="logo"
        />
        <h2>Create your account</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Phone (optional)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: "100%", padding: "12px", paddingRight: "40px", boxSizing: "border-box" }}
            />
<span
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "24px",
                height: "24px",
              }}
            >
              {showPassword ? <VisibilityOffIcon sx={{ fontSize: 20 }} /> : <VisibilityIcon sx={{ fontSize: 20 }} />}
            </span>
          </div>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
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
            {loading ? <CircularProgress size={20} color="inherit" /> : "Sign Up"}
          </button>
        </form>
        <p className="switch-auth">
          Already have an account? <Link to="/login"><b>Login</b></Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;