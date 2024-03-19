import React from "react";

function Support() {
  return (
    <>
      <div classNameName="col-lg-12">
        <div className="pagetitle">
          <h1>Community and Support</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Support</li>
            </ol>
          </nav>
        </div>

        <section className="section contact">
          <div className="row gy-4">
            <div className="col-xl-6">
              <div className="row">
                <div className="col-lg-6">
                  <div className="info-box card">
                    <i className="bi bi-geo-alt"></i>
                    <h3>Address</h3>
                    <p>
                      UK,<br></br>United Kindom, UK 535022
                    </p>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="info-box card">
                    <i className="bi bi-envelope"></i>
                    <h3>Email Us</h3>
                    <p>
                      ecogreen@gmail.com<br></br>ecosupport@mail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="card p-4">
                <form action="" method="post" className="php-email-form">
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        required
                      />
                    </div>

                    <div className="col-md-6 ">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>

                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        placeholder="Subject"
                        required
                      />
                    </div>

                    <div className="col-md-12">
                      <textarea
                        className="form-control"
                        name="message"
                        rows="6"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>

                    <div className="col-md-12 text-center">
                      <div className="loading">Loading</div>
                      <div className="error-message"></div>
                      <div className="sent-message">
                        Your message has been sent. Thank you!
                      </div>

                      <button type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Support;
