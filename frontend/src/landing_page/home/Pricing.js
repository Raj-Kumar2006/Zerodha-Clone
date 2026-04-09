import React from "react";

function Pricing() {
  return (
    <div className="container py-5 p-5">
      <div className="row align-items-center p-5">
        {/* LEFT SECTION */}
        <div className="col-md-5">
          <h2 className="mb-4">Unbeatable pricing</h2>

          <p className="fs-5" style={{ lineHeight: "1.8", color: "#666" }}>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>

          <a href="/" className="text-primary text-decoration-none ">
            See pricing →
          </a>
        </div>

        {/* RIGHT SECTION */}
        <div className="col-md-7">
          <div className="row text-center align-items-center ">
            <div className="col-4">
              <img
                src="media/images/pricing0.svg"
                alt="free account"
                style={{ width: "100px" }}
              />
              <p className="mt-2 small text-muted">Free account opening</p>
            </div>

            <div className="col-4">
              <img
                src="media/images/pricing0.svg"
                alt="free equity"
                style={{ width: "100px" }}
              />
              <p className="mt-2 small text-muted">
                Free equity delivery and direct mutual funds
              </p>
            </div>

            <div className="col-4">
              <img
                src="media/images/pricing20.svg"
                alt="intraday"
                style={{ width: "100px" }}
              />
              <p className="mt-2 small text-muted">Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
