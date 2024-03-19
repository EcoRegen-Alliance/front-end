"use client";
import React, { useState } from "react";

function Dashboard() {
  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });

  const [email, setEmail] = useState("");

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes({ ...checkboxes, [name]: checked });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with values:", checkboxes, "Email:", email);
    // Add your form submission logic here
  };
  return (
    <>
      <div classNameName="col-lg-12">
        <div className="pagetitle">
          <h1>Upload sensor</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Uploadsensor</li>
            </ol>
          </nav>
        </div>

        <div className="col-lg-12">
          <div className="row">
            <div className="col-xxl-4 col-xl-12">
              <div className="card info-card customers-card">
                <div className="card-body">
                  <h5 className="card-title">
                    Upload sensor to the EcoReGen Alliance
                  </h5>
                  <div id="content">
                    <p>Choose how you want to upload your sensor data.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-4 col-xl-12">
              <div className="card info-card customers-card">
                <div className="card-body">
                  <h5 className="card-title">
                    API connection via Virtual Routz
                  </h5>
                  <div className="d-flex justify-content-between align-items-center">
                    {/* First word with icon */}
                    <div>
                      <span style={{ color: "#b1bad3" }}>
                        <button
                          id="apicon"
                          type="submit"
                          className="button button-a button-big button-rounded"
                        >
                          <i className="bi-plug"></i>
                          API Connection
                        </button>
                      </span>
                    </div>
                    {/* Second word */}
                    <div>
                      <span>
                        <button
                          id="connectsen"
                          type="submit"
                          className="button button-a button-big button-rounded"
                        >
                          <i className="bi-link"></i> Connect
                        </button>
                      </span>
                    </div>
                  </div>
                  <br></br>
                  <div id="content">
                    <p>
                      Choosing API will redirect you to the VR web interface
                      where you can connect your sensors and data feeds.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-4 col-xl-12">
              <div className="card info-card customers-card">
                <div className="card-body">
                  <h5 className="card-title">API connection via G17Eco</h5>
                  <div className="d-flex justify-content-between align-items-center">
                    {/* First word with icon */}
                    <div>
                      <span style={{ color: "#b1bad3" }}>
                        <button
                          id="apicon"
                          type="submit"
                          className="button button-a button-big button-rounded"
                        >
                          <i className="bi-plug"></i>
                          API Connection
                        </button>
                      </span>
                    </div>
                    {/* Second word */}
                    <div>
                      <span>
                        <button
                          id="connectsen"
                          type="submit"
                          className="button button-a button-big button-rounded"
                        >
                          <i className="bi-link"></i> Connect
                        </button>
                      </span>
                    </div>
                  </div>
                  <br></br>
                  <div id="content">
                    <p>
                      Choosing API will redirect you to the G17 Eco interface to
                      create reports for certification providers/investors
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-4 col-xl-12">
              <h5 className="card-title">
                Upload sensor to the EcoReGen Alliance
              </h5>

              <form onSubmit={handleSubmit}>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      name="checkbox1"
                      checked={checkboxes.checkbox1}
                      onChange={handleCheckboxChange}
                    />
                    I agree to have my data assessed by a paid third party
                    verifier who can contact me
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      name="checkbox2"
                      checked={checkboxes.checkbox2}
                      onChange={handleCheckboxChange}
                    />
                    Upfront
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      name="checkbox3"
                      checked={checkboxes.checkbox3}
                      onChange={handleCheckboxChange}
                    />
                    Finance
                  </label>
                </div>
                <div>
                  <p>Enter your Gmail:</p>
                  <input
                    type="email"
                    className="form-control"
                    id="Email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="example@gmail.com"
                  />
                </div>
                <div id="content">
                  <p>
                    Confirm by entering your email, and pressing Submit below:
                  </p>
                </div>
                <br></br>
                <button id="submitbut" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
