import React from "react";
import Linegraph from "./Linegraph";

function Dashboard() {
  const offers = [
    {
      id: 1,
      tokbalance: "10.00",
      Finance: "7.00%",
      term: "3 Years",
      action: "Apply Now",
    },
    {
      id: 2,
      tokbalance: "10.00",
      Finance: "7.00%",
      term: "3 Years",
      action: "Apply Now",
    },
  ];
  return (
    <>
      <div classNameName="col-lg-12">
        <div className="pagetitle">
          <h1>Dashboard</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>

        <div className="col-lg-12">
          <div className="row">
            <div className="col-xxl-4 col-xl-12">
              <div className="card info-card customers-card">
                <div className="card-body">
                  <h5 className="card-title">
                    Welcome to the EcoReGen Alliance
                  </h5>
                  <div id="content">
                    <p>
                      The EcoReGen Alliance is a group of companies and
                      organizations that have come together to build a better
                      future, naturally. You are part of a community committed
                      to net zero and beyond
                    </p>
                  </div>
                  <section className="section contact">
                    <div className="row gy-4">
                      <div className="col-xl-6">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="info-box card">
                              <div className="d-flex justify-content-between align-items-center">
                                {/* First word with icon */}
                                <div style={{ marginRight: "10px" }}>
                                  <h3>Role</h3>
                                  <span style={{ color: "#e8e0e0" }}>
                                    <select
                                      id="find"
                                      className="form-select mx-2"
                                    >
                                      <option selected>
                                        Supply chain Perticipats
                                      </option>
                                      <option>ACME</option>
                                      <option>ACME</option>
                                    </select>
                                  </span>
                                </div>
                                <div>
                                  <h3>Organization</h3>
                                  <span>
                                    <select
                                      id="find"
                                      className="form-select mx-2"
                                    >
                                      <option selected>ACME</option>
                                      <option>ACME </option>
                                      <option>ACEE</option>
                                    </select>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-12">
                            <div className="info-box card">
                              <div
                                style={{
                                  border: "1px solid gray",
                                  padding: "20px",
                                  width: "100%",
                                  borderRadius: "5px",
                                }}
                                className="d-flex justify-content-between align-items-center"
                              >
                                {/* First word with icon */}
                                <div>
                                  <h4>10.0</h4>
                                  <span>
                                    <p id="tag">TONNES</p>
                                  </span>
                                </div>
                                <div>
                                  <h4>30.0</h4>
                                  <span>
                                    <p id="tag">ECOs</p>
                                  </span>
                                </div>
                              </div>
                              <br></br>
                              <div className="d-flex justify-content-between align-items-center">
                                {/* First word with icon */}
                                <div
                                  style={{
                                    border: "1px solid gray",
                                    padding: "20px",
                                    width: "100%",
                                    borderRadius: "5px",
                                  }}
                                >
                                  <h4>0.0</h4>
                                  <span>
                                    <p id="tag">Verification Tokens</p>
                                  </span>
                                </div>
                                <div
                                  style={{
                                    width: "100%",
                                    marginLeft: "10px",
                                    border: "1px solid gray",
                                    padding: "20px",
                                    borderRadius: "5px",
                                  }}
                                >
                                  <h4>0.0</h4>
                                  <span>
                                    <p id="tag">Governance Tokens</p>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-xl-6">
                        <div className="info-box card">
                          <div className="d-flex justify-content-between align-items-center">
                            {/* First word with icon */}
                            <div style={{ marginRight: "10px" }}>
                              <h3>Analytics</h3>
                            </div>
                            <div>
                              <span>
                                <select id="find" className="form-select mx-2">
                                  <option selected>Last 7 days</option>
                                  <option>1 week </option>
                                  <option>2 weeks</option>
                                </select>
                              </span>
                            </div>
                          </div>
                          <Linegraph />
                        </div>
                        <div className="info-box card">
                          <div className="d-flex justify-content-between align-items-center">
                            {/* First word with icon */}
                            <div style={{ marginRight: "10px" }}>
                              <h3>Status</h3>
                            </div>
                            <div>
                              <i className="bi-search"></i>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between align-items-center">
                            {/* First word with icon */}
                            <div style={{ marginRight: "10px" }}>
                              <span>
                                <p>Carbon Handled</p>
                                <p>0.0T</p>
                                <p>Token Finance</p>
                                <p>0.0 ECO</p>
                              </span>
                            </div>
                            <div>
                              <span>
                                <p>Carbon Sequested</p>
                                <p>0.0T</p>
                                <p>Carbon Sequested (%)</p>
                                <p>0.0%</p>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="info-box card">
                          <div className="d-flex justify-content-between align-items-center">
                            {/* First word with icon */}
                            <div style={{ marginRight: "10px" }}>
                              <h3>Offers</h3>
                            </div>
                            <div>
                              <i className="bi-globe"></i>
                            </div>
                          </div>
                          <p>
                            Financing rate are based on token balance in your
                            account the heigher the balance the better the rate
                          </p>
                          <table className="table datatable">
                            <thead>
                              <tr>
                                <th scope="col">Token Balance</th>
                                <th scope="col">Finance Rate</th>
                                <th scope="col">Time</th>
                                <th scope="col">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {offers &&
                                offers.length > 0 &&
                                offers.map((token) => (
                                  <tr key={token.id}>
                                    <td>
                                      <a
                                        href="/viewtoken"
                                        className="text-primary"
                                      >
                                        {token.tokbalance}
                                      </a>
                                    </td>
                                    <td>{token.Finance}</td>
                                    <td>{token.term}</td>
                                    <td>
                                      <button className="btn btn-primary">
                                        {token.action}
                                      </button>
                                    </td>
                                  </tr>
                                ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
