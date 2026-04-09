import React, { useState } from "react";

function CreateTicket() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const supportData = [
    {
      icon: "fa-plus-circle",
      title: "Account Opening",
      items: [
        "Resident individual",
        "Minor",
        "Non Resident Indian (NRI)",
        "Company, Partnership, HUF and LLP",
        "Glossary",
      ],
    },
    {
      icon: "fa-user",
      title: "Your Zerodha Account",
      items: [
        "Your Profile",
        "Account modification",
        "Client Master Report (CMR) and DP",
        "Nomination",
        "Transfer and conversion of securities",
      ],
    },
    {
      icon: "fa-chart-bar",
      title: "Kite",
      items: [
        "IPO",
        "Trading FAQs",
        "Margin Trading Facility (MTF) and Margins",
        "Charts and orders",
        "Alerts and Nudges",
        "General",
      ],
    },
    {
      icon: "fa-wallet",
      title: "Funds",
      items: [
        "Add money",
        "Withdraw money",
        "Add bank accounts",
        "eMandates",
      ],
    },
    {
      icon: "fa-desktop",
      title: "Console",
      items: [
        "Portfolio",
        "Corporate actions",
        "Funds statement",
        "Reports",
        "Profile",
        "Segments",
      ],
    },
    {
      icon: "fa-coins",
      title: "Coin",
      items: [
        "Mutual funds",
        "National Pension Scheme (NPS)",
        "Fixed Deposit (FD)",
        "Features on Coin",
        "Payments and Orders",
        "General",
      ],
    },
  ];

  return (
    <div className="container py-5">
      <div className="row">

        {/* LEFT SIDE */}
        <div className="col-lg-8">

          {supportData.map((section, index) => (
            <div className="support-box mb-3" key={index}>

              {/* HEADER */}
              <div
                className="support-header d-flex justify-content-between align-items-center"
                onClick={() => toggle(index)}
              >
                <div className="header-left">
                  <i className={`fa ${section.icon} icon-primary`}></i>
                  <span className="title-text">{section.title}</span>
                </div>

                <i
                  className={`fa fa-chevron-down arrow ${
                    activeIndex === index ? "rotate" : ""
                  }`}
                ></i>
              </div>

              {/* CONTENT */}
              <div
                className={`support-content ${
                  activeIndex === index ? "open" : ""
                }`}
              >
                <ul className="support-list">
                  {section.items.map((item, i) => (
                    <li key={i}>
                      <a href="/">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}

        </div>

        {/* RIGHT SIDE */}
        <div className="col-lg-4">

          {/* NOTICE BOX */}
          <div className="notice-box mb-4">
            <ul>
              <li>
                <a href="/">
                  Revision in commodity market trading hours from March 09, 2026
                </a>
              </li>
              <li>
                <a href="/">
                  Latest Intraday leverages and Square-off timings
                </a>
              </li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div className="quick-links">
            <h6>Quick links</h6>
            <ol>
              <li><a href="/">Track account opening</a></li>
              <li><a href="/">Track segment activation</a></li>
              <li><a href="/">Intraday margins</a></li>
              <li><a href="/">Kite user manual</a></li>
              <li><a href="/">Learn how to create a ticket</a></li>
            </ol>
          </div>

        </div>

      </div>
    </div>
  );
}

export default CreateTicket;