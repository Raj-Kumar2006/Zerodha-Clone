import React from "react";

function Education() {
  return (
    <div className="container">
      <div className="row align-items-center ">
        {/* LEFT IMAGE */}
        <div className="col-md-6 text-center">
          <img
            src="media/Images/education.svg"
            alt="Varsity"
            className="img-fluid"
            style={{ maxWidth: "100%" }}
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="col-md-6 mt-5 p-5">
          <h3 className="mb-4">Free and open market education</h3>

          <p className="fs-5" style={{ lineHeight: "1.8", color: "#666" }}>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <a href="/" className="text-primary text-decoration-none">
            Varsity →
          </a>

          <p className="mt-4 fs-5" style={{ lineHeight: "1.8", color: "#666" }}>
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>

          <a href="/" className="text-primary text-decoration-none">
            TradingQ&A →
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
