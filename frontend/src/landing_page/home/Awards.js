import React from "react";

function Awards() {
  return (
    <div className="container mt-5 p-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media\Images\largestBroker.svg" alt="Largest broker" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1 className="fw-semibold mb-3">Largest stock broker in India</h1>
          <p className="text-muted mb-5 fs-5">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row mt-4">
            <div className="col-6">
              <ul>
                <li className="mb-3"> Futures and Options</li>
                <li className="mb-3">Commodity derivatives</li>
                <li className="mb-3">Currency derivatives</li>
              </ul>
            </div>

            <div className="col-6">
              <ul>
                <li className="mb-3">Stocks & IPOs</li>
                <li className="mb-3">Direct mutual funds</li>
                <li className="mb-3">Bonds and Govt securities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
