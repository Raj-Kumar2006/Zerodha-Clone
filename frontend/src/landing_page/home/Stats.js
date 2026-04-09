import React from 'react';

function Stats() {
    return ( 
        <div className="container p-5">
      <div className="row">
        <div className="col-6 align-items-center p-5">

          <h3 className="mb-4">Trust with confidence</h3>

          <h5>Customer-first always</h5>
          <p className="text-muted fs-5">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India's largest broker,
            contributing to 15% of daily retail exchange volumes in India.
          </p>

          <h5 className="mt-4">No spam or gimmicks</h5>
          <p className="text-muted fs-5 mb-4">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
            <span className="text-primary"> Our philosophies.</span>
          </p>

          <h5 className="mt-4">The Zerodha universe</h5>
          <p className="text-muted fs-5 mb-4">
            Not just an app, but a whole ecosystem. Our investments in
            30+ fintech startups offer you tailored services specific to your needs.
          </p>

          <h5 className="mt-4">Do better with money</h5>
          <p className="text-muted fs-5 mb-4">
            With initiatives like <span className="text-primary">Nudge</span> and
            <span className="text-primary"> Kill Switch</span>, we don't just
            facilitate transactions, but actively help you do better with your money.
          </p>
        </div>
        <div className="col-6 mt-5 align-items-center p-5">
          <img
            src="media\Images\sponsor.png"
            alt="Zerodha ecosystem"
            className="img-fluid"
          />

          <div className="mt-4 text-center">
            <a href="/" className="me-4 text-decoration-none text-primary">
              Explore our products →
            </a>

            <a href="/" className="text-decoration-none text-primary">
              Try Kite demo →
            </a>
          </div>

        </div>

        <img src="media/Images/press-logos.png" alt="Press logos" style={{width:"60%", margin: "0 auto"}}/>  
      </div>
    </div>
     );
}

export default Stats;