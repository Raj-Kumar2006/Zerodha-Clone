import React from "react";

function Team() {
  return (
    <div className="container">
      {/* SECTION HEADING */}
      <h2 className="text-center mb-5 fw-normal">People</h2>

      <div className="row justify-content-center align-items-start px-md-5 py-5">
        
        {/* LEFT SIDE: Profile Section */}
        <div className="col-md-5 text-center mb-4 mb-md-0">
          <img
            src="media/Images/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="img-fluid rounded-circle shadow-sm"
            style={{ width: "300px", height: "300px", objectFit: "cover" }}
          />
          <h4 className="mt-4 mb-1 fw-semibold">Nithin Kamath</h4>
          <p className="text-muted  mt-3">Founder, CEO</p>
        </div>

        {/* RIGHT SIDE: Bio Section */}
        <div className="col-md-6 text-secondary" style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

          <div className="mt-4">
            <span>Connect on </span>
            <a href="/" className="text-decoration-none fw-medium">Homepage</a>
            <span className="mx-1">/</span>
            <a href="/" className="text-decoration-none fw-medium">TradingQnA</a>
            <span className="mx-1">/</span>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none fw-medium">Twitter</a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Team;