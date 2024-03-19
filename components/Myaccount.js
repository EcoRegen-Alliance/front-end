import React from "react";

function Dashboard() {
  return (
    <>
      <div classNameName="col-lg-12">
        <div className="pagetitle">
          <h1>Myaccount</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Myaccount</li>
            </ol>
          </nav>
        </div>

        <div className="col-lg-12">
          <div className="row">
            <div className="col-xxl-4 col-xl-12">
              <div className="card info-card customers-card">
                <div className="card-body">
                  <h5 className="card-title">
                    Myaccount to the EcoReGen Alliance
                  </h5>
                  <div id="content">
                    <p>
                      Myaccount to EcoReGen Alliance is a group of companies and
                      organizations that have come together to build a better
                      future, naturally. You are part of a community committed
                      to net zero and beyond
                    </p>
                  </div>
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
