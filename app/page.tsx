"use client";

import { useState } from "react";
import "./page.css";

export default function PartnerPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main>

      {/* ================= HEADER ================= */}

      <header className="header">

        <div className="header-container">
<a href="#home" className="logo">
  <img
    src="/images/partner-logo.png"
    alt="MaziFinance"
  />
</a>

          <nav className="desktop-nav">
            <a href="#home">Home</a>
            <a href="#trading">Trading</a>
            <a href="#partners">Affiliates</a>
            <a href="#company">Company</a>
            <a href="#faq">FAQs</a>
          </nav>

          <div className="header-buttons">
            <button className="login-button">
              Sign in
            </button>

            <button className="account-button">
              Open Account
            </button>
          </div>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>

        {menuOpen && (
          <div className="mobile-menu">

            <a href="#home">Home</a>
            <a href="#trading">Trading</a>
            <a href="#partners">Affiliates</a>
            <a href="#company">Company</a>
            <a href="#faq">FAQs</a>

            <button>Sign in</button>
            <button>Open Account</button>

          </div>
        )}

      </header>


      {/* ================= HERO ================= */}


      <section className="hero" id="home">
  <div className="hero-frame">

    {/* Purple background glow */}
    <div className="hero-glow" aria-hidden="true" />

    {/* Hero content */}
    <div className="hero-content">

      <div className="hero-copy">

        <h1 className="hero-title">
          Maximize Your <span>Earnings</span>
          <br className="desktop-break" />
          with Mazifinance
        </h1>

        <p className="hero-description">
          Boost your earnings with competitive commissions of up to
          $50 per lot, plus enjoy on-demand commission withdrawals
          whenever you&apos;re ready.
        </p>

        <a href="#open-account" className="hero-button">
          Join as Partner
        </a>

      </div>

      {/* Hero image */}
      <div className="hero-image">
        <img
          src="/images/partner-hero.png"
          alt="MaziFinance Partner"
        />
      </div>

      

    </div>

  </div>
</section>

         



<section className="why-section" id="partners">

  {/* Background glow */}
  <img
    src="/images/Gllow.png"
    alt=""
    className="cards-glow"
    aria-hidden="true"
  />

  {/* Top-right decoration */}
  <img
    src="/images/commission-decoration1.png"
    alt=""
    className="why-top-decoration"
    aria-hidden="true"
  />

  <div className="why-container">

    {/* ================= HEADING ================= */}

    <div className="why-heading">

      <h2>
        Why Partner with{" "}
        <span>MaziFinance?</span>
      </h2>
    
    <br />
      
        <p>
          We provide the tools, transparency, and industry-leading
          payouts you need to scale your affiliate business to new heights.
        </p>

    </div>
  


    {/* ================= CARDS ================= */}

    <div className="partner-cards">

  {/* CARD 1 */}
  <article className="partner-card">
    <div className="card-icon">%</div>

    <img
      src="/images/card1.png"
      alt=""
      className="card-decoration card-decoration-1"
      aria-hidden="true"
    />

    <div className="card-content">
      <h3>$50/Lot Commissions</h3>
      <p>
        Smart partnerships start here. Get up to
        $50/lot commissions with MaziFinance.
      </p>
    </div>
  </article>


  {/* CARD 2 */}
  <article className="partner-card">
    <div className="card-icon">$</div>

    <img
      src="/images/card2.png"
      alt=""
      className="card-decoration card-decoration-2"
      aria-hidden="true"
    />

    <div className="card-content">
      <h3>Instant Daily Payouts</h3>
      <p>
        Smart partnerships start here. Get up to
        $50/lot commissions with MaziFinance.
      </p>
    </div>
  </article>


  {/* CARD 3 */}
  <article className="partner-card">
    <div className="card-icon">◴</div>

    <img
      src="/images/card3.png"
      alt=""
      className="card-decoration card-decoration-3"
      aria-hidden="true"
    />

    <div className="card-content">
      <h3>Real-Time Tracking</h3>
      <p>
        Smart partnerships start here. Get up to
        $50/lot commissions with MaziFinance.
      </p>
    </div>
  </article>


  {/* CARD 4 */}
  <article className="partner-card">
    <div className="card-icon">♙</div>

    <img
      src="/images/card4.png"
      alt=""
      className="card-decoration card-decoration-4"
      aria-hidden="true"
    />

    <div className="card-content">
      <h3>Dedicated Manager</h3>
      <p>
        Smart partnerships start here. Get up to
        $50/lot commissions with MaziFinance.
      </p>
    </div>
  </article>


  {/* CARD 5 */}
  <article className="partner-card">
    <div className="card-icon">$</div>

    <img
      src="/images/card5.png"
      alt=""
      className="card-decoration card-decoration-5"
      aria-hidden="true"
    />

    <div className="card-content">
      <h3>$50/Lot Commissions</h3>
      <p>
        Smart partnerships start here. Get up to
        $50/lot commissions with MaziFinance.
      </p>
    </div>
  </article>
  </div>
</div>

</section>






      {/* ================= COMMISSIONS ================= */}

<section className="commission-section" id="trading">

  {/* Background 3D decoration */}
  <img
    src="/images/commission-decoration.png"
    alt=""
    className="commission-decoration"
    aria-hidden="true"
  />

  <div className="container commission-container">

    <h2 className="commission-heading">
      MaziFinance
      <span> Affiliate Commissions</span>
    </h2>

    <p className="commission-description">
      Eight integrated AI models working together for analysis, strategy,
      backtesting, simulation, auditing, journaling, news, and risk.
    </p>


    <div className="commission-table">

      <div className="table-row table-header">
        <div>Market</div>
        <div>Commission</div>
      </div>

      <div className="table-row">
        <div>Forex</div>
        <div>$50/Lot</div>
      </div>

      <div className="table-row">
        <div>Indices</div>
        <div>$45/Lot</div>
      </div>

      <div className="table-row">
        <div>Energy</div>
        <div>$50/Lot</div>
      </div>

      <div className="table-row">
        <div>Metals</div>
        <div>$50/Lot</div>
      </div>

      <div className="table-row">
        <div>Shares</div>
        <div>$40/Lot</div>
      </div>

      <div className="table-row">
        <div>Crypto</div>
        <div>$50/Lot</div>
      </div>

      <div className="table-row">
        <div>Commodities</div>
        <div>$50/Lot</div>
      </div>

    </div>


    <h3 className="commission-tagline">
      <span>One platform.</span>
      Multiple markets. Serious commissions.
    </h3>

  </div>

</section>


      {/* ================= HOW IT WORKS ================= */}

<section className="start-trading-section">

  {/* CSS glow effects */}
  <div className="trading-glow trading-glow-left" />
  <div className="trading-glow trading-glow-right" />

  <div className="start-trading-container">

    <div className="center-heading">
      <h2>
        How to Start Trading with{" "}
        <span>MaziFinance</span>
      </h2>
    </div>

    <div className="steps">

      <div className="step">
        <div className="step-number">1</div>

        <h3>Share Link</h3>

        <p>
          Share your unique referral
          <br />
          link via social media, email,
          <br />
          or your website
        </p>
      </div>


      <div className="step">
        <div className="step-number">2</div>

        <h3>User Clicks</h3>

        <p>
          Potential client clicks your
          <br />
          link and visits MaziFinance
          <br />
          platform
        </p>
      </div>


      <div className="step">
        <div className="step-number">3</div>

        <h3>Signs Up</h3>

        <p>
          User creates account and
          <br />
          completes verification
          <br />
          process
        </p>
      </div>


      <div className="step">
        <div className="step-number">4</div>

        <h3>Start Trading</h3>

        <p>
          Client deposits funds and
          <br />
          begins trading on our
          <br />
          platform
        </p>
      </div>


      <div className="step">
        <div className="step-number">5</div>

        <h3>Earn Commission</h3>

        <p>
          You receive instant
          <br />
          commission on every lot
          <br />
          traded by your referral
        </p>
      </div>

    </div>

  </div>

</section>

      {/* ================= FAQ ================= */}

<section className="faq-section" id="faq">

  {/* Background decoration */}
  <img
    src="/images/faq-decoration.png"
    alt=""
    className="faq-decoration"
    aria-hidden="true"
  />

  <div className="faq-container">

    {/* ================= FAQ TITLE ================= */}

    <div className="faq-title">

      <h2>
        Frequently Asked
        <span> Questions</span>
      </h2>

      <p>
        Eight integrated AI models working together
        for analysis, strategy, backtesting, simulation,
        auditing, journaling, news, and risk.
      </p>

    </div>


    {/* ================= FAQ LIST ================= */}

    <div className="faq-list">

      {[
        {
          q: "What is MaziFinance Trading?",
          a: "MaziFinance Trading is a powerful platform designed to help users access financial markets and trading tools."
        },
        {
          q: "Is my data secure with MaziFinance Trading?",
          a: "MaziFinance follows security practices designed to protect user information and account data."
        },
        {
          q: "Can I integrate Fluence AI with my existing tools?",
          a: "Integration availability depends on the tools and services being used."
        },
        {
          q: "What kind of support do you offer?",
          a: "MaziFinance provides support for partners and users through its available support channels."
        }
      ].map((item, index) => (

        <div
          className={`faq-item ${
            openFaq === index ? "faq-open" : ""
          }`}
          key={index}
        >

          <button
            type="button"
            onClick={() =>
              setOpenFaq(
                openFaq === index
                  ? null
                  : index
              )
            }
            aria-expanded={openFaq === index}
          >

            <span>
              {item.q}
            </span>

            <strong>
              {openFaq === index
                ? "×"
                : "+"}
            </strong>

          </button>


          {openFaq === index && (

            <div className="faq-answer">
              <p>
                {item.a}
              </p>
            </div>

          )}

        </div>

      ))}

    </div>

  </div>

</section>

   {/* ================= CTA ================= */}

<section className="cta-section">

  <div className="cta">

    {/* ================= GRADIENT GLOWS ================= */}

    <div
      className="cta-gradient cta-gradient-top"
      aria-hidden="true"
    />

    <div
      className="cta-gradient cta-gradient-bottom"
      aria-hidden="true"
    />


    {/* ================= DECORATIONS ================= */}

    <img
      src="/images/cta-decoration-right.png"
      alt=""
      className="cta-decoration cta-decoration-right"
      aria-hidden="true"
    />

    <img
      src="/images/cta-decoration-left.png"
      alt=""
      className="cta-decoration cta-decoration-left"
      aria-hidden="true"
    />


    {/* ================= CONTENT ================= */}

    <div className="cta-content">

      <h2>
        Stop Trading Alone,
        <span> Start with AI</span>
      </h2>

      <p>
        The future of trading isn't predicting the market
        alone — it's partnering with intelligent AI while
        trading through one of the fastest-growing
        zero-spread brokers.
      </p>

      <button className="primary-button">
        Start Trading with AI
      </button>

    </div>

  </div>

</section>


{/* ================= FOOTER ================= */}

<footer className="site-footer" id="company">

  {/* ================= BOTTOM GLOW ================= */}

  <div
    className="footer-bottom-glow"
    aria-hidden="true"
  />


  {/* ================= MAZIFINANCE VECTOR ================= */}

  <img
    src="/images/partner-logo.png"
    alt=""
    className="footer-vector"
    aria-hidden="true"
  />


  <div className="footer-container">

    {/* ================= FOOTER TOP ================= */}

    <div className="footer-top">


      {/* ================= ABOUT ================= */}

      <div className="footer-about">

        <a
          href="#"
          className="footer-logo"
        >

          <img
            src="/images/partner-logo.png"
            alt="MaziFinance"
          />

        </a>


        <p>
          MaziFinance Markets is a globally
          recognized institutional liquidity partner
          and Forex &amp; CFD broker.
        </p>


        <div className="footer-socials">

          <a href="#" aria-label="X">
            𝕏
          </a>

          <a href="#" aria-label="LinkedIn">
            in
          </a>

          <a href="#" aria-label="YouTube">
            ▶
          </a>

        </div>

      </div>


      {/* ================= PLATFORMS ================= */}

      <div className="footer-column">

        <h3>
          Platforms
        </h3>

        <a href="#">
          MetaTrader 5
        </a>

        <a href="#">
          TradeLocker Web
        </a>

        <a href="#">
          iOS App Companion
        </a>

        <a href="#">
          Android APK
        </a>

        <a href="#">
          Webtrader Login
        </a>

      </div>


      {/* ================= ACCOUNTS ================= */}

      <div className="footer-column">

        <h3>
          Accounts
        </h3>

        <a href="#">
          MaziFinance Start Account
        </a>

        <a href="#">
          MaziFinance Prime Account
        </a>

        <a href="#">
          MaziFinance Elite Account
        </a>

        <a href="#">
          Demo Simulator
        </a>

        <a href="#">
          Base Conversions
        </a>

      </div>


      {/* ================= RESEARCH ================= */}

      <div className="footer-column">

        <h3>
          Research
        </h3>

        <a href="#">
          Daily Market Reports
        </a>

        <a href="#">
          Technical Setup Blogs
        </a>

        <a href="#">
          Volatility Indexes
        </a>

        <a href="#">
          Economic Calendar
        </a>

        <a href="#">
          Education Roster
        </a>

      </div>

    </div>


    {/* ================= DIVIDER ================= */}

    <div className="footer-divider" />


    {/* ================= COPYRIGHT ================= */}

    <div className="footer-meta">

      <p className="copyright">
        © 2026{" "}
        <strong>
          MaziFinance Brokers Ltd.
        </strong>{" "}
        All rights reserved.
      </p>


      <div className="footer-legal">

        <a href="#">
          Terms &amp; Conditions
        </a>

        <a href="#">
          Privacy Policy
        </a>

      </div>

    </div>


    {/* ================= COMPANY INFO ================= */}

    <div className="footer-company-info">

      MaziFinance Brokers Ltd. Company Number:
      2023-00569, Ground Floor, The Sotheby Building
      Rodney Village, Rodney Bay, Gros-Islet,
      Saint Lucia


      <br />
      <br />

      MaziFinance s.r.o. Company Number:
      55159221, Podunajská 23G, Bratislava,
      Slovakia

    </div>


    {/* ================= DISCLAIMER ================= */}

    <div className="footer-disclaimer">

      All information provided on this site is intended
      solely for educational purposes related to trading
      on financial markets and does not serve in any way
      as a specific investment recommendation, business
      recommendation, investment opportunity analysis or
      similar general recommendation regarding the
      trading of investment instruments.


      <br />
      <br />

      Monevis Brokers Ltd. only provides services of
      simulated trading and educational tools for traders.
      Trading the financial markets is highly risky and
      you should never risk more than you can afford to
      lose.


      <br />
      <br />

      The information on this site is not directed at
      residents of any country or jurisdiction where such
      distribution or use would be contrary to local laws
      or regulations.

    </div>

  </div>

</footer>

</main> 
); 
}
