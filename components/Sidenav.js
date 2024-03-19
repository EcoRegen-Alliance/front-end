import React from "react";

const Sidenav = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <a href="/" className="nav-link">
            <i className="bi bi-house"></i>
            <span>Dashboard</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="register" className="nav-link collapsed">
            <i className="bi bi-pencil"></i>
            <span>Registration</span>
          </a>
        </li>

        <li className="nav-item">
          <a href="uploadsensor" className="nav-link collapsed">
            <i className="bi bi-plug"></i>
            <span>Connect Sensor Data</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="viewtoken" className="nav-link collapsed">
            <i className="bi bi-eye"></i>
            <span>View Tokens</span>
          </a>
        </li>

        {/* <li className="nav-heading">Pages</li> */}

        <li className="nav-item">
          <a href="/" className="nav-link collapsed">
            <i className="bi bi-cash"></i>
            <span>Financing</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="/support" className="nav-link collapsed">
            <i className="bi bi-people"></i>
            <span>Community and Support</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="/myaccount" className="nav-link collapsed">
            <i className="bi bi-person"></i>
            <span>My Account</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidenav;
