import React, { useState, useContext } from "react";

import { Link, useNavigate } from "react-router-dom";

import GeneralContext from "./GeneralContext";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const { user, logout } = useContext(GeneralContext);
  const navigate = useNavigate();

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = () => {
    logout();
    navigate("/signup");
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="kitelogo.png" alt="kite-logo" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick} style={{ position: "relative" }}>
          <div className="avatar" style={{ cursor: "pointer" }}>
            {user ? user.charAt(0).toUpperCase() : "U"}
          </div>
          <p className="username" style={{ cursor: "pointer" }}>
            {user ? user.toUpperCase() : "USERID"}
          </p>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="12" 
            height="12" 
            fill="currentColor" 
            viewBox="0 0 16 16"
            style={{ cursor: "pointer", marginLeft: "5px" }}
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0-1.1-.9-2-2-2s-2 .9-2 2V12H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V7h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2v-.5z"/>
          </svg>
        </div>
        {isProfileDropdownOpen && (
          <div className="profile-dropdown" style={{ display: "block" }}>
            <button 
              onClick={handleLogout} 
              className="logout-btn" 
              style={{ width: "100%", textAlign: "left", display: "flex", alignItems: "center", gap: "8px", background: "#d32f2f", border: "none" }}
            >
              <span style={{ fontSize: "14px" }}>↪</span>
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;