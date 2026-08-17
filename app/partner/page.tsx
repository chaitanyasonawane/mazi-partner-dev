"use client";

import { useState } from "react";
import Image from "next/image";
import "./Partner.css";

const commissionData = [
  { market: "Forex", commission: "$50/Lot" },
  { market: "Indices", commission: "$45/Lot" },
  { market: "Energy", commission: "$50/Lot" },
  { market: "Metals", commission: "$50/Lot" },
  { market: "Shares", commission: "$40/Lot" },
  { market: "Crypto", commission: "$50/Lot" },
  { market: "Commodities", commission: "$50/Lot" },
];

const steps = [
  {
    number: "01",
    title: "Share Link",
    text: "Share your unique referral link via social media, email, or your website",
  },
  {
    number: "02",
    title: "User Clicks",
    text: "Potential client clicks your link and visits MaziFinance platform",
  },
  {
    number: "03",
    title: "Signs Up",
    text: "User creates account and completes verification process",
  },
  {
    number: "04",
    title: "Start Trading",
    text: "Client deposits funds and begins trading on our platform",
  },
  {
    number: "05",
    title: "Earn Commission",
    text: "You receive instant commission on every lot traded by your referral",
  },
];

const faqs = [
  {
    question: "What is MaziFinance Trading?",
    answer:
      "MaziFinance Trading is a powerful platform designed to help businesses integrate, analyze, and automate data workflows using artificial intelligence.",
  },
  {
    question: "Is my data secure with MaziFinance Trading?",
    answer:
      "Please refer to the current MaziFinance security and privacy policies for the latest information regarding data protection.",
  },
  {
    question: "Can I integrate Fluence AI with my existing tools?",
    answer:
      "Integration availability depends on the tools and services you are using. Contact the MaziFinance team for current integration options.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "MaziFinance provides support for partners and users. Contact the team for information about currently available support channels.",
  },
];

const features = [
  {
    icon: "$",
    title: "$50/Lot Commissions",
    text: "Smart partnerships start here. Get up to $50/lot commissions with MaziFinance.",
  },
  {
    icon: "↗",
    title: "Instant Daily Payouts",
    text: "Smart partnerships start here. Get up to $50/lot commissions with MaziFinance.",
  },
  {
    icon: "◉",
    title: "Real-Time Tracking",
    text: "Smart partnerships start here. Get up to $50/lot commissions with MaziFinance.",
  },
  {
    icon: "♙",
    title: "Dedicated Manager",
    text: "Smart partnerships start here. Get up to $50/lot commissions with MaziFinance.",
  },
  {
    icon: "◈",
    title: "$50/Lot Commissions",
    text: "Smart partnerships start here. Get up to $50/lot commissions with MaziFinance.",
  },
];

export default function Partner() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="partner-page">

      {/* ================= HEADER ================= */}

      <header className="partner-header">
        <div className="partner-header-inner">

          <a href="#home" className="partner-logo">
            <span className="partner-logo-symbol">ϟ</span>
            <span>
              Mazi<span>Finance</span>
            </span>
          </a>

          <nav className="partner-nav">
            <a href="#home">Home</a>
            <a href="#trading">Trading</a>
            <a href="#affiliates" className="active">
              Affiliates
            </a>
            <a href="#company">Company</a>
            <a href="#faq">FAQs</a>
          </nav>

          <div className="partner-actions">
            <a href="#signin" className="partner-signin">
              Sign in
            </a>

            <a href="#open-account" className="partner-account">
              Open Account
            </a>
          </div>

          <button
            className="partner-menu-button"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Toggle navigation"
            aria-expanded={mobileMenu}
          >
            <span />
            <span />
            <span />
          </button>

        </div>

        {mobileMenu && (
          <nav className="partner-mobile-nav">

            <a href="#home" onClick={() => setMobileMenu(false)}>
              Home
            </a>

            <a href="#trading" onClick={() => setMobileMenu(false)}>
              Trading
            </a>

            <a href="#affiliates" onClick={() => setMobileMenu(false)}>
              Affiliates
            </a>

            <a href="#company" onClick={() => setMobileMenu(false)}>
              Company
            </a>

            <a href="#faq" onClick={() => setMobileMenu(false)}>
              FAQs
            </a>

            <a href="#signin" onClick={() => setMobileMenu(false)}>
              Sign in
            </a>

            <a
              href="#open-account"
              className="mobile-account"
              onClick={() => setMobileMenu(false)}
            >
              Open Account
            </a>

          </nav>
        )}
      </header>

      {/* ================= HERO ================= */}

      <section className="partner-hero" id="home">

        <div className="hero-glow" />

        <div className="hero-inner">

          <div className="hero-content">

            <h1>
              Maximize Your{" "}
              <span>Earnings</span>
              <br />
              with Mazifinance
            </h1>

            <p>
              Boost your earnings with competitive commissions of up to $50 per
              lot, plus enjoy on-demand commission withdrawals whenever
              you&apos;re ready.
            </p>

            <a href="#open-account" className="hero-button">
              Join as Partner
            </a>

          </div>

          <div className="hero-image">

            {/* Replace with your Figma hero asset */}

            <Image
              src="/images/partner-hero.png"
              alt="MaziFinance Partner"
              width={650}
              height={650}
              priority
            />

          </div>

        </div>

      </section>

      {/* ================= WHY PARTNER ================= */}

      <section className="why-partner" id="affiliates">

        <div className="why-glow" />

        <div className="partner-container">

          <div className="section-title">

            <div className="title-line" />

            <h2>
              Why Partner with{" "}
              <span>MaziFinance?</span>
            </h2>

          </div>

          <div className="feature-grid">

            {features.map((feature, index) => (
              <div
                className={`feature-card feature-${index + 1}`}
                key={feature.title + index}
              >

                <div className="feature-icon">
                  {feature.icon}
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.text}</p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= COMMISSION ================= */}

      <section className="commission-section" id="trading">

        <div className="partner-container commission-inner">

          <h2>
            MaziFinance{" "}
            <span>Affiliate Commissions</span>
          </h2>

          <p className="commission-description">
            Eight integrated AI models working together for analysis, strategy,
            backtesting, simulation, auditing, journaling, news, and risk.
          </p>

          <div className="commission-table-area">

            <table className="commission-table">

              <thead>
                <tr>
                  <th>Market</th>
                  <th>Commission</th>
                </tr>
              </thead>

              <tbody>
                {commissionData.map((item) => (
                  <tr key={item.market}>
                    <td>{item.market}</td>
                    <td>{item.commission}</td>
                  </tr>
                ))}
              </tbody>

            </table>

            {/* Replace with your Figma decorative asset */}

            <Image
              src="/images/commission-decoration.png"
              alt=""
              width={280}
              height={280}
              className="commission-decoration"
            />

          </div>

          <div className="commission-tagline">
            <span>One platform.</span> Multiple markets. Serious commissions.
          </div>

        </div>

      </section>

      {/* ================= PROCESS ================= */}

      <section className="process-section">

        <div className="partner-container">

          <h2>
            How to Start Trading with{" "}
            <span>MaziFinance</span>
          </h2>

          <div className="process-grid">

            {steps.map((step) => (
              <div className="process-item" key={step.number}>

                <div className="process-number">
                  {step.number}
                </div>

                <h3>{step.title}</h3>

                <p>{step.text}</p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= FAQ ================= */}

      <section className="faq-section" id="faq">

        <div className="faq-inner">

          <div className="faq-heading">

            <h2>
              Frequently Asked
              <span>Questions</span>
            </h2>

            <p>
              Eight integrated AI models working together for analysis,
              strategy, backtesting, simulation, auditing, journaling, news,
              and risk.
            </p>

          </div>

          <div className="faq-list">

            {/* Replace with your Figma decorative asset */}

            <Image
              src="/images/faq-decoration.png"
              alt=""
              width={300}
              height={300}
              className="faq-decoration"
            />

            {faqs.map((faq, index) => {

              const isOpen = openFaq === index;

              return (
                <div
                  className={`faq-item ${
                    isOpen ? "open" : ""
                  }`}
                  key={faq.question}
                >

                  <button
                    className="faq-question"
                    onClick={() =>
                      setOpenFaq(isOpen ? -1 : index)
                    }
                    aria-expanded={isOpen}
                  >

                    <span>{faq.question}</span>

                    <strong>
                      {isOpen ? "×" : "+"}
                    </strong>

                  </button>

                  {isOpen && (
                    <div className="faq-answer">
                      {faq.answer}
                    </div>
                  )}

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="partner-cta">

        <div className="cta-box">

          {/* Replace with your Figma assets */}

          <Image
            src="/images/cta-decoration-left.png"
            alt=""
            width={350}
            height={250}
            className="cta-left"
          />

          <Image
            src="/images/cta-decoration-right.png"
            alt=""
            width={250}
            height={250}
            className="cta-right"
          />

          <div className="cta-content">

            <h2>
              Stop Trading Alone,{" "}
              <span>Start with AI</span>
            </h2>

            <p>
              The future of trading isn&apos;t predicting the market alone —
              it&apos;s partnering with intelligent AI while trading through
              one of the fastest-growing zero-spread brokers.
            </p>

            <a href="#open-account" className="cta-button">
              Start Trading with AI
            </a>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="partner-footer" id="company">

        <div className="footer-grid">

          <div className="footer-brand">

            <div className="footer-logo">
              <span>ϟ</span>
              Mazi<span>Finance</span>
            </div>

            <p>
              MaziFinance Markets is a globally recognized institutional
              liquidity partner and Forex &amp; CFD broker.
            </p>

            <div className="socials">
              <a href="#">𝕏</a>
              <a href="#">in</a>
              <a href="#">▶</a>
            </div>

          </div>

          <div className="footer-column">

            <h3>Platforms</h3>

            <a href="#">MetaTrader 5</a>
            <a href="#">TradeLocker Web</a>
            <a href="#">iOS App Companion</a>
            <a href="#">Android APK</a>
            <a href="#">Webtrader Login</a>

          </div>

          <div className="footer-column">

            <h3>Accounts</h3>

            <a href="#">MaziFinance Start Account</a>
            <a href="#">MaziFinance Prime Account</a>
            <a href="#">MaziFinance Elite Account</a>
            <a href="#">Demo Simulator</a>
            <a href="#">Base Conversions</a>

          </div>

          <div className="footer-column">

            <h3>Research</h3>

            <a href="#">Daily Market Reports</a>
            <a href="#">Technical Setup Blogs</a>
            <a href="#">Volatility Indexes</a>
            <a href="#">Economic Calendar</a>
            <a href="#">Education Roster</a>

          </div>

        </div>

        <div className="footer-bottom">

          <div className="footer-bottom-top">

            <span>
              © 2026 MaziFinance Brokers Ltd. All rights reserved
            </span>

            <div>
              <a href="#">Terms &amp; Conditions</a>
              <a href="#">Privacy Policy</a>
            </div>

          </div>

          <p>
            MaziFinance Brokers Ltd. Company Number: 2023-00569, Ground Floor,
            The Sotheby Building Rodney Village, Rodney Bay, Gros-Islet,
            Saint Lucia. MaziFinance s.r.o. Company Number: 55215921,
            Podunajská 23/G Bratislava, Slovakia.
          </p>

          <p>
            All information provided on this site is intended solely for
            educational purposes related to trading on financial markets and
            does not serve in any way as a specific investment recommendation,
            business recommendation, investment opportunity analysis or
            similar general recommendation regarding investment instruments.
          </p>

        </div>

      </footer>

    </main>
  );
}