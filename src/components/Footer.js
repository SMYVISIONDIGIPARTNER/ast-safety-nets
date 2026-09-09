import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const safetyServices = [
    "Balcony Safety Nets",
    "Pigeon Safety Nets",
    "Anti Bird Nets",
    "Children Safety Nets",
    "Duct Area Safety Nets",
    "Bird Protection Nets",
    "Building Safety Nets",
    "Industrial Safety Nets",
    "Construction Safety Nets",
    "Staircase Safety Nets",
    "Swimming Pool Safety Nets",
    "Bird Spikes",
    "Cricket Practice Nets",
  ];

  const grillServices = [
    "Balcony Invisible Grills",
    "Window Invisible Grills",
    "Kids Safety Invisible Grills",
    "Stainless Steel Invisible Grills",
    "Modern Invisible Grills",
    "Invisible Grills Installation",
    "Premium Invisible Grills",
    "Cloth Hangers",
  ];

  const createWhatsAppLink = (service) => {
    const message = `Hi AST Safety Nets, I am interested in ${service}. Please share pricing and installation details in Bangalore.`;

    return `https://wa.me/919844000299?text=${encodeURIComponent(
      message
    )}`;
  };

  return (
    <>
      <footer className="ast-footer">
        {/* TOP DECORATION */}
        <div className="footer-top-line"></div>

        <div className="footer-container">
          {/* ==============================================
              BRAND / ABOUT
          ============================================== */}

          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img
                src="/logo.png"
                alt="AST Safety Nets & Invisible Grills Bangalore"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling.style.display =
                    "flex";
                }}
              />

              <div className="footer-logo-fallback">
                <strong>AST</strong>
                <span>SAFETY NETS</span>
              </div>
            </Link>

            <p className="footer-about">
              AST Safety Nets & Invisible Grills, based in Bangalore,
              provides reliable mesh and netting solutions for homes,
              apartments, commercial properties and other spaces.
              Our services include balcony safety nets, anti-bird
              protection nets, pigeon safety nets and premium invisible
              grills.
            </p>

            <div className="footer-badges">
              <span>Premium Materials</span>
              <span>Expert Installation</span>
              <span>Bangalore Service</span>
            </div>

            <div className="footer-contact-cards">
              {/* BRANCH */}
              <div className="contact-mini-card">
                <div className="contact-mini-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                </div>

                <div>
                  <small>Our Branch</small>
                  <strong>Bangalore</strong>
                </div>
              </div>

              {/* PHONE */}
              <a
                href="tel:+919844000299"
                className="contact-mini-card"
              >
                <div className="contact-mini-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
                  </svg>
                </div>

                <div>
                  <small>Phone</small>
                  <strong>+91 9844000299</strong>
                </div>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:astsafetynets@gmail.com"
                className="contact-mini-card"
              >
                <div className="contact-mini-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M3 5h18v14H3Z" />
                    <path d="m3 6 9 7 9-7" />
                  </svg>
                </div>

                <div>
                  <small>Email</small>
                  <strong>astsafetynets@gmail.com</strong>
                </div>
              </a>
            </div>
          </div>

          {/* ==============================================
              SAFETY NET SERVICES
          ============================================== */}

          <div className="footer-column">
            <div className="footer-heading">
              <span></span>
              <h3>Safety Net Services</h3>
            </div>

            <div className="footer-service-list">
              {safetyServices.map((service) => (
                <a
                  key={service}
                  href={createWhatsAppLink(service)}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="service-arrow">›</span>
                  {service}
                </a>
              ))}
            </div>
          </div>

          {/* ==============================================
              INVISIBLE GRILL SERVICES
          ============================================== */}

          <div className="footer-column">
            <div className="footer-heading">
              <span></span>
              <h3>Invisible Grill Services</h3>
            </div>

            <div className="footer-service-list">
              {grillServices.map((service) => (
                <a
                  key={service}
                  href={createWhatsAppLink(service)}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="service-arrow">›</span>
                  {service}
                </a>
              ))}
            </div>

            <div className="footer-quick-links">
              <h4>Quick Links</h4>

              <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
              </div>
            </div>
          </div>
        </div>

        {/* ==============================================
            CTA STRIP
        ============================================== */}

        <div className="footer-cta-wrapper">
          <div className="footer-cta">
            <div className="footer-cta-text">
              <span>Need Safety Net Installation?</span>

              <strong>
                Get a Free Quote From AST Safety Nets
              </strong>
            </div>

            <div className="footer-cta-actions">
              <a
                href="tel:+919844000299"
                className="footer-call-btn"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
                </svg>

                Call Now
              </a>

              <a
                href={`https://wa.me/919844000299?text=${encodeURIComponent(
                  "Hi AST Safety Nets, I would like to get a quotation for safety net or invisible grill installation in Bangalore."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="footer-whatsapp-btn"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* ==============================================
            COPYRIGHT
        ============================================== */}

        <div className="footer-bottom">
          <div className="footer-bottom-container">
            <p>
              © 2026 AST Safety Nets & Invisible Grills Bangalore.
              All Rights Reserved.
            </p>

            <p className="developed-by">
              Developed by{" "}
              <a
                href="https://smyvisiontechnologies.com"
                target="_blank"
                rel="noreferrer"
              >
                SMYVISION TECHNOLOGIES
              </a>
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        /* ===============================================
           FOOTER
        =============================================== */

        .ast-footer {
          position: relative;

          width: 100%;

          overflow: hidden;

          color: #ffffff;

          background:
            linear-gradient(
              135deg,
              #041731 0%,
              #06234a 52%,
              #07346b 100%
            );

          font-family:
            Inter,
            "Segoe UI",
            Arial,
            sans-serif;
        }

        .footer-top-line {
          width: 100%;
          height: 4px;

          background:
            linear-gradient(
              90deg,
              #0878d8,
              #06a5e1,
              #0878d8
            );
        }

        .footer-container {
          width:
            min(1380px, calc(100% - 50px));

          margin: 0 auto;

          padding: 70px 0 52px;

          display: grid;

          grid-template-columns:
            1.25fr 0.8fr 0.8fr;

          gap: 65px;
        }

        /* ===============================================
           BRAND
        =============================================== */

        .footer-brand {
          max-width: 520px;
        }

        .footer-logo {
          width: fit-content;

          display: inline-flex;

          align-items: center;

          text-decoration: none;
        }

        .footer-logo img {
          width: 235px;
          height: 80px;

          display: block;

          object-fit: contain;

          object-position: left center;

          filter:
            drop-shadow(
              0 5px 18px
              rgba(0, 0, 0, 0.15)
            );
        }

        .footer-logo-fallback {
          display: none;

          flex-direction: column;
        }

        .footer-logo-fallback strong {
          color: #ffffff;

          font-size: 38px;

          letter-spacing: 2px;
        }

        .footer-logo-fallback span {
          color: #73c9ff;

          font-size: 10px;

          letter-spacing: 4px;
        }

        .footer-about {
          max-width: 490px;

          margin: 22px 0 0;

          color:
            rgba(230, 241, 255, 0.72);

          font-size: 13px;
          line-height: 1.9;
        }

        /* ===============================================
           BADGES
        =============================================== */

        .footer-badges {
          margin-top: 23px;

          display: flex;

          flex-wrap: wrap;

          gap: 9px;
        }

        .footer-badges span {
          padding: 8px 11px;

          border:
            1px solid
            rgba(127, 193, 255, 0.15);

          border-radius: 100px;

          color: #baddfb;

          background:
            rgba(255,255,255,.04);

          font-size: 9px;

          font-weight: 700;

          letter-spacing: .5px;
        }

        /* ===============================================
           CONTACT CARDS
        =============================================== */

        .footer-contact-cards {
          margin-top: 28px;

          display: flex;

          flex-direction: column;

          gap: 11px;
        }

        .contact-mini-card {
          width: 100%;

          max-width: 390px;

          min-height: 61px;

          padding: 10px 13px;

          display: flex;

          align-items: center;

          gap: 12px;

          border:
            1px solid
            rgba(117, 186, 255, 0.1);

          border-radius: 12px;

          color: #ffffff;

          text-decoration: none;

          background:
            rgba(255,255,255,.035);

          transition:
            transform .25s ease,
            background .25s ease,
            border-color .25s ease;
        }

        a.contact-mini-card:hover {
          transform:
            translateX(4px);

          border-color:
            rgba(117,186,255,.24);

          background:
            rgba(255,255,255,.07);
        }

        .contact-mini-icon {
          width: 38px;
          height: 38px;

          flex: 0 0 38px;

          padding: 9px;

          border-radius: 10px;

          color: #68c4ff;

          background:
            rgba(21, 133, 226, 0.13);
        }

        .contact-mini-icon svg {
          width: 100%;
          height: 100%;

          fill: none;

          stroke: currentColor;

          stroke-width: 1.8;

          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .contact-mini-card small,
        .contact-mini-card strong {
          display: block;
        }

        .contact-mini-card small {
          margin-bottom: 3px;

          color:
            rgba(208, 229, 250, 0.56);

          font-size: 9px;

          text-transform: uppercase;

          letter-spacing: 1.1px;
        }

        .contact-mini-card strong {
          color: #ffffff;

          font-size: 13px;

          font-weight: 700;

          word-break: break-word;
        }

        /* ===============================================
           HEADINGS
        =============================================== */

        .footer-heading {
          display: flex;

          align-items: center;

          gap: 10px;

          margin-bottom: 24px;
        }

        .footer-heading > span {
          width: 28px;
          height: 2px;

          flex: 0 0 28px;

          background: #37aef0;
        }

        .footer-heading h3 {
          margin: 0;

          color: #ffffff;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 21px;

          font-weight: 700;
        }

        /* ===============================================
           SERVICES
        =============================================== */

        .footer-service-list {
          display: flex;

          flex-direction: column;

          gap: 10px;
        }

        .footer-service-list a {
          width: fit-content;

          display: inline-flex;

          align-items: center;

          gap: 8px;

          color:
            rgba(219, 235, 250, 0.7);

          text-decoration: none;

          font-size: 12px;

          line-height: 1.4;

          transition:
            color .25s ease,
            transform .25s ease;
        }

        .footer-service-list a:hover {
          color: #ffffff;

          transform:
            translateX(4px);
        }

        .service-arrow {
          color: #39b5f5;

          font-size: 17px;

          line-height: 1;
        }

        /* ===============================================
           QUICK LINKS
        =============================================== */

        .footer-quick-links {
          margin-top: 30px;

          padding-top: 24px;

          border-top:
            1px solid
            rgba(255,255,255,.08);
        }

        .footer-quick-links h4 {
          margin:
            0 0 13px;

          color: #ffffff;

          font-size: 13px;
        }

        .footer-quick-links > div {
          display: flex;

          flex-wrap: wrap;

          gap:
            8px 18px;
        }

        .footer-quick-links a {
          color:
            rgba(220,235,250,.65);

          text-decoration: none;

          font-size: 11px;

          transition:
            color .25s ease;
        }

        .footer-quick-links a:hover {
          color: #53c1ff;
        }

        /* ===============================================
           CTA
        =============================================== */

        .footer-cta-wrapper {
          width: 100%;

          padding:
            0 25px 42px;
        }

        .footer-cta {
          width:
            min(1380px,100%);

          min-height: 115px;

          margin: 0 auto;

          padding: 22px 28px;

          display: flex;

          align-items: center;
          justify-content: space-between;

          gap: 25px;

          border:
            1px solid
            rgba(104,190,255,.18);

          border-radius: 18px;

          background:
            linear-gradient(
              135deg,
              rgba(16, 101, 193, 0.22),
              rgba(255,255,255,.045)
            );
        }

        .footer-cta-text span,
        .footer-cta-text strong {
          display: block;
        }

        .footer-cta-text span {
          margin-bottom: 5px;

          color: #70caff;

          font-size: 10px;

          font-weight: 800;

          letter-spacing: 1.6px;

          text-transform: uppercase;
        }

        .footer-cta-text strong {
          color: #ffffff;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 23px;
        }

        .footer-cta-actions {
          display: flex;

          gap: 10px;

          flex-wrap: wrap;
        }

        .footer-call-btn,
        .footer-whatsapp-btn {
          min-height: 48px;

          padding: 0 20px;

          display: inline-flex;

          align-items: center;
          justify-content: center;

          gap: 8px;

          border-radius: 9px;

          text-decoration: none;

          font-size: 12px;

          font-weight: 800;
        }

        .footer-call-btn {
          color: #075bb8;

          background: #ffffff;
        }

        .footer-call-btn svg {
          width: 17px;
          height: 17px;

          fill: none;

          stroke: currentColor;

          stroke-width: 2;

          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .footer-whatsapp-btn {
          color: #ffffff;

          border:
            1px solid
            rgba(255,255,255,.45);

          background:
            rgba(255,255,255,.05);
        }

        /* ===============================================
           BOTTOM
        =============================================== */

        .footer-bottom {
          border-top:
            1px solid
            rgba(255,255,255,.08);

          background:
            rgba(0,0,0,.12);
        }

        .footer-bottom-container {
          width:
            min(1380px, calc(100% - 50px));

          min-height: 74px;

          margin: 0 auto;

          display: flex;

          align-items: center;
          justify-content: space-between;

          gap: 25px;
        }

        .footer-bottom p {
          margin: 0;

          color:
            rgba(211, 229, 247, 0.58);

          font-size: 10px;
        }

        .developed-by {
          white-space: nowrap;
        }

        .developed-by a {
          color: #69c6ff;

          text-decoration: none;

          font-weight: 800;

          letter-spacing: .3px;

          transition:
            color .25s ease;
        }

        .developed-by a:hover {
          color: #ffffff;
        }

        /* ===============================================
           TABLET
        =============================================== */

        @media (max-width: 1050px) {
          .footer-container {
            grid-template-columns:
              1fr 1fr;

            gap:
              50px 45px;
          }

          .footer-brand {
            grid-column:
              1 / -1;

            max-width: 700px;
          }
        }

        /* ===============================================
           MOBILE
        =============================================== */

        @media (max-width: 700px) {
          .footer-container {
            width:
              calc(100% - 30px);

            padding:
              52px 0 38px;

            grid-template-columns:
              1fr;

            gap: 40px;
          }

          .footer-brand {
            grid-column: auto;
          }

          .footer-logo img {
            width: 220px;

            height: 76px;
          }

          .footer-about {
            font-size: 12px;

            line-height: 1.8;
          }

          .contact-mini-card {
            max-width: 100%;
          }

          .footer-service-list {
            display: grid;

            grid-template-columns:
              1fr 1fr;

            gap:
              11px 12px;
          }

          .footer-service-list a {
            width: 100%;

            align-items: flex-start;

            font-size: 10.5px;
          }

          .footer-cta-wrapper {
            padding:
              0 15px 30px;
          }

          .footer-cta {
            min-height: auto;

            padding: 24px 20px;

            flex-direction: column;

            align-items: flex-start;
          }

          .footer-cta-text strong {
            font-size: 21px;

            line-height: 1.25;
          }

          .footer-cta-actions {
            width: 100%;

            display: grid;

            grid-template-columns:
              1fr 1fr;
          }

          .footer-call-btn,
          .footer-whatsapp-btn {
            padding:
              0 12px;
          }

          .footer-bottom-container {
            width:
              calc(100% - 30px);

            min-height: auto;

            padding: 19px 0;

            flex-direction: column;

            justify-content: center;

            gap: 7px;

            text-align: center;
          }

          .footer-bottom p {
            line-height: 1.6;
          }

          .developed-by {
            white-space: normal;
          }
        }

        /* ===============================================
           SMALL MOBILE
        =============================================== */

        @media (max-width: 430px) {
          .footer-service-list {
            grid-template-columns: 1fr;
          }

          .footer-cta-actions {
            grid-template-columns: 1fr;
          }

          .footer-logo img {
            width: 205px;
          }
        }
      `}</style>
    </>
  );
}

export default Footer;