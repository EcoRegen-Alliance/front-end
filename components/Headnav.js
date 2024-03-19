"use client";
import React from "react";
import logo from "../assets/img/slides-1.jpg";
import profile from "../assets/img/slides-1.jpg";
import Image from "next/image";

function Headnav() {
  return (
    <header className="header fixed-top d-flex align-items-center">
      <div className="d-flex align-items-center justify-content-between">
        <a href="/" className="logo d-flex align-items-center">
          <Image style={{ borderRadius: "10px" }} src={logo} alt="logo" />
          <span className="d-none d-lg-block">Ecogreen</span>
        </a>
      </div>

      <nav className="header-nav ms-auto">
        <ul className="d-flex align-items-center">
          <li className="nav-item d-block d-lg-none">
            <a className="nav-link nav-icon search-bar-toggle" href="#">
              <i className="bi bi-search"></i>
            </a>
          </li>

          <li className="nav-item">
            <a class="nav-link nav-icon" href="/" data-bs-toggle="dropdown">
              <i className="bi bi-bell"></i>
              <span className="badge bg-primary badge-number">4</span>
            </a>
          </li>
          {/* End Notification Nav */}

          <li className="nav-item">
            <a class="nav-link nav-icon" href="/" data-bs-toggle="dropdown">
              <i className="bi bi-chat-left-text"></i>
              <span className="badge bg-success badge-number">3</span>
            </a>
          </li>

          <li className="nav-item pe-3">
            <a
              className="nav-link nav-profile d-flex align-items-center pe-0"
              href="/"
              data-bs-toggle="dropdown"
            >
              <Image
                style={{ height: "50px", width: "50px", borderRadius: "50%" }}
                src={profile}
                alt="Profile"
                className="rounded-circle"
              />
              <span className="d-none d-md-block ps-2">username</span>
            </a>
          </li>

          <li className="nav-item pe-3">
            <a href="/register">
              <button type="button" className="btn btn-primary">
                Connect Wallet
              </button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Headnav;
