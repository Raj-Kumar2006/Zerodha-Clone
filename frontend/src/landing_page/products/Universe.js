import React from "react";

function Universe() {
  return (
    <>
      <div className="text-center pb-5">
        <p className="tech-text mb-0">
          Want to know more about our technology stack? Check out the{" "}
          <a href="/" className="tech-link">
            Zerodha.tech
          </a>{" "}
          blog.
        </p>
      </div>
      <div className="container py-5 text-center">
        {/* Heading */}
        <h3 className="fw-semibold">The Zerodha Universe</h3>
        <p className=" my-4">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        {/* Grid */}
        <div className="row g-5 mx-5 my-2 px-5">
          {/* Item 1 */}
          <div className="col-md-4 universe-card text-center">
            <img
              src="media\Images\zerodhaFundhouse.png"
              alt="Fund House"
              className="universe-img"
            />
            <p className="text-muted mt-3 small">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>

          {/* Item 2 */}
          <div className="col-md-4 universe-card text-center">
            <img
              src="media\Images\sensibullLogo.svg"
              alt="Sensibull"
              className="universe-img"
            />
            <p className="text-muted mt-3 small">
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>

          {/* Item 3 */}
          <div className="col-md-4 universe-card text-center">
            <img
              src="media/Images/tijori.svg"
              alt="Tijori"
              className="universe-img"
            />
            <p className="text-muted mt-3 small">
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>

          {/* Item 4 */}
          <div className="col-md-4 universe-card text-center">
            <img
              src="media\Images\streakLogo.png"
              alt="Streak"
              className="universe-img"
            />
            <p className="text-muted mt-3 small">
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>

          {/* Item 5 */}
          <div className="col-md-4 universe-card text-center">
            <img
              src="media\Images\smallcaseLogo.png"
              alt="Smallcase"
              className="universe-img"
            />
            <p className="text-muted mt-3 small">
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>

          {/* Item 6 */}
          <div className="col-md-4 universe-card text-center">
            <img
              src="media\Images\dittoLogo.png"
              alt="Ditto"
              className="universe-img"
            />
            <p className="text-muted mt-3 small">
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-5">
          <button
            className="p-2 btn btn-primary fs-5 fw-semibold mb-5"
            style={{ width: "20%", margin: "0 auto" }}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </>
  );
}

export default Universe;
