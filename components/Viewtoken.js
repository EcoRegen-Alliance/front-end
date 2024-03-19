import React from "react";

function Dashboard() {
  const alliancetokenData = [
    {
      id: 1,
      name: "0.0.20688",
      minted: "Alliance",
      number: "10",
      status: "Bronze",
    },
    {
      id: 2,
      name: "0.0.20688",
      minted: "Alliance",
      number: "10",
      status: "Silver",
    },
  ];
  const companytokenData = [
    {
      id: 1,
      name: "0.0.20688",
      minted: "Alliance",
      number: "10",
      status: "Bronze",
    },
    {
      id: 2,
      name: "0.0.20688",
      minted: "Alliance",
      number: "10",
      status: "Silver",
    },
  ];
  return (
    <>
      <div classNameName="col-lg-12">
        <div className="pagetitle">
          <h1>Viewtoken</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Viewtoken</li>
            </ol>
          </nav>
        </div>

        <div className="col-lg-12">
          <div className="row">
            <div className="col-xxl-4 col-xl-12">
              <div className="card info-card customers-card">
                <div className="card-body">
                  <h5 className="card-title">
                    Viewtoken to the EcoReGen Alliance
                  </h5>
                  <div id="content">
                    <p>
                      Tokens currently minted based on tonnes of carbon derived
                      from algae that have been sequestered in approved end
                      forms. To pay to view more information on each tonne
                      contact Sales. After net zero has been achieved tokens
                      will also be minted based on the creation of approved
                      non-sequestered carbon products, to help balance out the
                      total levels of carbon in the atmosphere sustainably.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card recent-sales overflow-auto">
                <div className="card-body">
                  <h5 className="card-title">Alliance Token minted overall</h5>

                  <table className="table datatable">
                    <thead>
                      <tr>
                        <th scope="col">Token</th>
                        <th scope="col">Minted by</th>
                        <th scope="col">Number of tokens</th>
                        <th scope="col">Token status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {alliancetokenData &&
                        alliancetokenData.length > 0 &&
                        alliancetokenData.map((token) => (
                          <tr key={token.id}>
                            <td>
                              <i className="bi-link"></i>
                              <a href="/viewtoken" className="text-primary">
                                {token.name}
                              </a>
                            </td>
                            <td>{token.minted}</td>
                            <td>{token.number}</td>
                            <td>{token.status}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card recent-sales overflow-auto">
                <div className="card-body">
                  <h5 className="card-title">My Token minted by the company</h5>

                  <table className="table datatable">
                    <thead>
                      <tr>
                        <th scope="col">Token</th>
                        <th scope="col">Minted by</th>
                        <th scope="col">Number of tokens</th>
                        <th scope="col">Token status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {companytokenData &&
                        companytokenData.length > 0 &&
                        companytokenData.map((token) => (
                          <tr key={token.id}>
                            <td>
                              <i className="bi-link"></i>
                              <a href="/viewtoken" className="text-primary">
                                {token.name}
                              </a>
                            </td>
                            <td>{token.minted}</td>
                            <td>{token.number}</td>
                            <td>{token.status}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xxl-4 col-xl-12">
          <div className="card info-card customers-card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                {/* First word with icon */}
                <div>
                  <span>
                    <h5 className="card-title">Buy Tokens</h5>
                  </span>
                </div>
                {/* Second word */}
                <div>
                  <span>
                    <i className="bi bi-cart"></i>
                  </span>
                </div>
              </div>
              <div id="content">
                <p>There are no token avialable to buy</p>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                {/* First word with icon */}
                <div>
                  <span>
                    <h5 className="card-title">Governance Token Ownership</h5>
                  </span>
                </div>
                {/* Second word */}
                <div>
                  <span>0</span>
                </div>
              </div>
              <div id="content">
                <p>You don't own any governace token</p>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                {/* First word with icon */}
                <div>
                  <span>
                    <h5 className="card-title">Verifications</h5>
                  </span>
                </div>
                {/* Second word */}
                <div>
                  <span>0</span>
                </div>
              </div>
              <div id="content">
                <p>Your funder as earn 9 verification token</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
