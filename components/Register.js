"use client";
import React, { useState } from "react";

function Register() {
  const [productDetails, setProductDetails] = useState({
    Companyname: "",
    contact: "",
    Email: "",
    productimgs: "",
    productcategory: "",
    Phonenumber: "",
    productDescription: "",
    barcode: "",
    Annualcarbon: "",
    Annualcost: "",
    Fundsneeded: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      title: productDetails.Companyname,
      Email: productDetails.Email,
      weight: productDetails.Phonenumber,
      category: productDetails.productcategory,
      description: productDetails.productDescription,
      Annualcarbon: productDetails.Annualcarbon,
      Annualcost: productDetails.Annualcost,
      Fundsneeded: productDetails.Fundsneeded,
    };

    // Convert to FormData for sending
    const formData = new FormData();
    for (const key in productData) {
      formData.append(key, productData[key]);
    }
    // Add additional logic for form submission using formData
  };

  return (
    <>
      <div className="col-lg-12">
        <div className="pagetitle">
          <h1>Register</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Register</li>
            </ol>
          </nav>
        </div>

        <div className="col-xl-12">
          <div className="card p-4">
            <form onSubmit={handleSubmit}>
              <div className="row gy-4">
                <div className="col-md-6">
                  <div className="form-group">
                    <label style={{ fontWeight: "bold" }} htmlFor="Companyname">
                      Company Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="Companyname"
                      placeholder="Enter Company Name"
                      value={productDetails.Companyname}
                      onChange={(e) =>
                        setProductDetails({
                          ...productDetails,
                          Companyname: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label style={{ fontWeight: "bold" }} htmlFor="contact">
                      Contact Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="contact"
                      placeholder="Enter Contact Name"
                      value={productDetails.contact}
                      onChange={(e) =>
                        setProductDetails({
                          ...productDetails,
                          contact: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label style={{ fontWeight: "bold" }} htmlFor="Email">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="Email"
                      placeholder="Enter Email"
                      value={productDetails.Email}
                      onChange={(e) =>
                        setProductDetails({
                          ...productDetails,
                          Email: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ fontWeight: "bold" }} htmlFor="Phonenumber">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="Phonenumber"
                      placeholder="Enter Phone number"
                      value={productDetails.Phonenumber}
                      onChange={(e) =>
                        setProductDetails({
                          ...productDetails,
                          Phonenumber: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group">
                    <label style={{ fontWeight: "bold" }}>
                      Product you plan to produce
                    </label>
                    <div>
                      <label>
                        <input
                          type="checkbox"
                          name="productCategory"
                          value="Food"
                          checked={productDetails.productcategory === "Food"}
                          onChange={(e) =>
                            setProductDetails({
                              ...productDetails,
                              productcategory: e.target.value,
                            })
                          }
                        />
                        Food
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type="checkbox"
                          name="productCategory"
                          value="Ink"
                          checked={productDetails.productcategory === "Ink"}
                          onChange={(e) =>
                            setProductDetails({
                              ...productDetails,
                              productcategory: e.target.value,
                            })
                          }
                        />
                        Ink
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type="checkbox"
                          name="productCategory"
                          value="Biochar"
                          checked={productDetails.productcategory === "Biochar"}
                          onChange={(e) =>
                            setProductDetails({
                              ...productDetails,
                              productcategory: e.target.value,
                            })
                          }
                        />
                        Biochar
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type="checkbox"
                          name="productCategory"
                          value="Bioconcrete"
                          checked={
                            productDetails.productcategory === "Bioconcrete"
                          }
                          onChange={(e) =>
                            setProductDetails({
                              ...productDetails,
                              productcategory: e.target.value,
                            })
                          }
                        />
                        Bioconcrete
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type="checkbox"
                          name="productCategory"
                          value="Algae"
                          checked={productDetails.productcategory === "Algae"}
                          onChange={(e) =>
                            setProductDetails({
                              ...productDetails,
                              productcategory: e.target.value,
                            })
                          }
                        />
                        Algae
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label style={{ fontWeight: "bold" }} htmlFor="find">
                      How did you find us?
                    </label>
                    <select
                      id="find"
                      className="form-select mx-2"
                      onChange={(e) =>
                        setProductDetails({
                          ...productDetails,
                          find: e.target.value,
                        })
                      }
                      required
                    >
                      <option selected>Discord</option>
                      <option>Twitter</option>
                      <option>Facebook</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label
                      style={{ fontWeight: "bold" }}
                      htmlFor="Annualcarbon"
                    >
                      Annual Anticipated Carbon production in tonnes at steady
                      state
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="Annualcarbon"
                      placeholder="Enter product quantity"
                      value={productDetails.Annualcarbon}
                      onChange={(e) =>
                        setProductDetails({
                          ...productDetails,
                          Annualcarbon: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label style={{ fontWeight: "bold" }} htmlFor="Annualcost">
                      Annual Cost to Operate
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="Annualcost"
                      placeholder="Enter product price"
                      value={productDetails.Annualcost}
                      onChange={(e) =>
                        setProductDetails({
                          ...productDetails,
                          Annualcost: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ fontWeight: "bold" }} htmlFor="Fundsneeded">
                      Fund needed for the next 3 years to finance your operation
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="Fundsneeded"
                      placeholder="Enter product quantity"
                      value={productDetails.Fundsneeded}
                      onChange={(e) =>
                        setProductDetails({
                          ...productDetails,
                          Fundsneeded: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="text-center">
                  <button
                    id="submitbut"
                    type="submit"
                    className="button button-a button-big button-rounded"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
