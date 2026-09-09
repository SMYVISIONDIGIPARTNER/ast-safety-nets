import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const PHONE = "9844000299";
const WHATSAPP = "919844000299";
const EMAIL = "astsafetynets@gmail.com";
const SITE_URL = "https://astsafetynetsinvisiblegrills.com";

function Icon({ type }) {
  const icons = {
    phone: (
      <>
        <path d="M5 3h4l2 5-2.5 2c1.5 3.2 3.6 5.3 6.8 6.8l2-2.5 5 2v4c0 1-.8 1.7-1.8 1.7C10.3 22 2 13.7 2 3.5 2 2.7 2.7 2 3.5 2" />
      </>
    ),

    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),

    location: (
      <>
        <path d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z" />
        <circle cx="12" cy="9" r="2.5" />
      </>
    ),

    whatsapp: (
      <>
        <path d="M20 11.5A8 8 0 0 1 8.2 18.6L4 20l1.4-4.1A8 8 0 1 1 20 11.5Z" />
        <path d="M8.5 8.5c.5 3 2 4.5 5 5" />
      </>
    ),

    user: (
      <>
        <circle cx="12" cy="7" r="4" />
        <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
      </>
    ),

    message: (
      <>
        <path d="M4 4h16v12H8l-4 4V4Z" />
      </>
    ),

    service: (
      <>
        <path d="m14 6 4 4M5 19 15 9M15 5l4 4M3 21l4-4" />
      </>
    ),

    arrow: (
      <>
        <path d="M5 12h14M14 7l5 5-5 5" />
      </>
    ),

    shield: (
      <>
        <path d="M12 3 20 6v5c0 5-3.3 9.3-8 11-4.7-1.7-8-6-8-11V6l8-3Z" />
        <path d="m8.5 12 2.2 2.2 4.8-4.8" />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {icons[type]}
    </svg>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const services = [
    "Balcony Safety Nets",
    "Balcony Invisible Grills",
    "Pigeon Safety Nets",
    "Anti Bird Nets",
    "Window Invisible Grills",
    "Children Safety Nets",
    "Duct Area Safety Nets",
    "Kids Safety Invisible Grills",
    "Bird Protection Nets",
    "Building Safety Nets",
    "Stainless Steel Invisible Grills",
    "Construction Safety Nets",
    "Industrial Safety Nets",
    "Staircase Safety Nets",
    "Swimming Pool Safety Nets",
    "Bird Spikes",
    "Cricket Practice Nets",
    "Cloth Hangers",
    "Other",
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = `
Hi AST Safety Nets,

Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}
Message: ${formData.message}

I would like to know the pricing and installation details in Bangalore.
    `.trim();

    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact AST Safety Nets & Invisible Grills Bangalore",
    url: `${SITE_URL}/contact`,
    description:
      "Contact AST Safety Nets & Invisible Grills Bangalore for balcony safety nets, pigeon nets, invisible grills, children safety nets, bird protection nets and other safety net installation services.",
    mainEntity: {
      "@type": "LocalBusiness",
      name: "AST Safety Nets & Invisible Grills",
      url: SITE_URL,
      telephone: `+91${PHONE}`,
      email: EMAIL,
      areaServed: {
        "@type": "City",
        name: "Bangalore",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bangalore",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>
          Contact AST Safety Nets Bangalore | Call +91 9844000299
        </title>

        <meta
          name="description"
          content="Contact AST Safety Nets & Invisible Grills Bangalore for balcony safety nets, pigeon nets, invisible grills, children safety nets, bird protection nets and installation services. Call +91 9844000299."
        />

        <meta
          name="keywords"
          content="contact AST Safety Nets Bangalore, safety nets Bangalore contact, balcony safety nets Bangalore phone number, invisible grills Bangalore contact, pigeon nets Bangalore contact"
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href={`${SITE_URL}/contact`}
        />

        <meta
          property="og:title"
          content="Contact AST Safety Nets & Invisible Grills Bangalore"
        />

        <meta
          property="og:description"
          content="Call or WhatsApp AST Safety Nets for safety net and invisible grill installation services in Bangalore."
        />

        <meta
          property="og:url"
          content={`${SITE_URL}/contact`}
        />

        <meta property="og:type" content="website" />

        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bangalore" />

        <script type="application/ld+json">
          {JSON.stringify(contactSchema)}
        </script>
      </Helmet>

      <main className="contact-page">
        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="contact-hero">
          <div className="contact-hero-background">
            <img
              src="/images/staircase-net.webp"
              alt="AST Safety Nets contact Bangalore"
              onError={(event) => {
                if (
                  event.currentTarget.dataset.fallback ===
                  "true"
                ) {
                  return;
                }

                event.currentTarget.dataset.fallback = "true";

                event.currentTarget.src =
                  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1900&q=88";
              }}
            />

            <div className="contact-hero-overlay" />
          </div>

          <div className="contact-hero-container">
            <div className="contact-hero-content">
              <span className="hero-label">
                CONTACT AST SAFETY NETS
              </span>

              <h1>
                Let's Make Your Space
                <span> Safer.</span>
              </h1>

              <p>
                Contact AST Safety Nets & Invisible Grills for
                professional safety-net installation, invisible grills,
                bird-control solutions and customized protection across
                Bangalore.
              </p>

              <div className="hero-actions">
                <a
                  href={`tel:+91${PHONE}`}
                  className="hero-call"
                >
                  <span>
                    <Icon type="phone" />
                  </span>

                  +91 {PHONE}
                </a>

                <a
                  href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                    "Hi AST Safety Nets, I would like to get a quotation for safety net or invisible grill installation in Bangalore."
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hero-whatsapp"
                >
                  <span>
                    <Icon type="whatsapp" />
                  </span>

                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTACT DETAILS
        ===================================================== */}

        <section className="contact-info-section">
          <div className="contact-container">
            <div className="contact-info-grid">
              <div className="info-card">
                <div className="info-icon">
                  <Icon type="location" />
                </div>

                <div>
                  <span>Our Branch</span>

                  <h3>Bangalore</h3>

                  <p>
                    Professional safety-net and invisible-grill
                    installation across Bangalore.
                  </p>
                </div>
              </div>

              <a
                href={`tel:+91${PHONE}`}
                className="info-card"
              >
                <div className="info-icon">
                  <Icon type="phone" />
                </div>

                <div>
                  <span>Call Us</span>

                  <h3>+91 {PHONE}</h3>

                  <p>
                    Speak directly with our team for pricing and
                    installation assistance.
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="info-card"
              >
                <div className="info-icon">
                  <Icon type="mail" />
                </div>

                <div>
                  <span>Email</span>

                  <h3>{EMAIL}</h3>

                  <p>
                    Send your requirements and our team can assist you.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTACT FORM
        ===================================================== */}

        <section className="contact-main-section">
          <div className="contact-container contact-main-grid">
            <div className="contact-copy">
              <span className="section-label">
                GET A FREE QUOTE
              </span>

              <h2>
                Tell Us What
                <span> You Need.</span>
              </h2>

              <p>
                Whether you need balcony safety nets, invisible grills,
                pigeon protection, children safety nets, construction
                nets or another solution, share your requirement and our
                team can assist you.
              </p>

              <div className="contact-benefits">
                <div>
                  <span>
                    <Icon type="shield" />
                  </span>

                  <div>
                    <strong>Professional Guidance</strong>
                    <small>
                      Get help choosing a suitable solution.
                    </small>
                  </div>
                </div>

                <div>
                  <span>
                    <Icon type="service" />
                  </span>

                  <div>
                    <strong>Customized Installation</strong>
                    <small>
                      Solutions planned according to your space.
                    </small>
                  </div>
                </div>

                <div>
                  <span>
                    <Icon type="whatsapp" />
                  </span>

                  <div>
                    <strong>Quick WhatsApp Enquiry</strong>
                    <small>
                      Send your requirement directly to our team.
                    </small>
                  </div>
                </div>
              </div>

              <div className="direct-contact-box">
                <small>
                  Need immediate assistance?
                </small>

                <strong>
                  Call AST Safety Nets
                </strong>

                <a href={`tel:+91${PHONE}`}>
                  +91 {PHONE}
                </a>
              </div>
            </div>

            <div className="contact-form-card">
              <div className="form-heading">
                <span>FREE QUOTATION</span>

                <h3>
                  Request a Callback
                </h3>

                <p>
                  Fill in your details and continue the enquiry directly
                  on WhatsApp.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">
                    Your Name
                  </label>

                  <div className="input-wrap">
                    <span>
                      <Icon type="user" />
                    </span>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    Phone Number
                  </label>

                  <div className="input-wrap">
                    <span>
                      <Icon type="phone" />
                    </span>

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service">
                    Select Service
                  </label>

                  <div className="input-wrap">
                    <span>
                      <Icon type="service" />
                    </span>

                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">
                        Choose a service
                      </option>

                      {services.map((service) => (
                        <option
                          key={service}
                          value={service}
                        >
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    Message
                  </label>

                  <div className="input-wrap textarea-wrap">
                    <span>
                      <Icon type="message" />
                    </span>

                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="Tell us about your requirement"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="submit-button"
                >
                  <span>
                    <Icon type="whatsapp" />
                  </span>

                  Send Enquiry on WhatsApp

                  <i>
                    <Icon type="arrow" />
                  </i>
                </button>

                <p className="form-note">
                  By submitting, your enquiry will open in WhatsApp.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* =====================================================
            MAP
        ===================================================== */}

        <section className="map-section">
          <div className="contact-container">
            <div className="map-heading">
              <span className="section-label">
                OUR SERVICE LOCATION
              </span>

              <h2>
                Safety Net Services
                <span> Across Bangalore.</span>
              </h2>

              <p>
                AST Safety Nets & Invisible Grills provides
                professional installation services across Bangalore.
              </p>
            </div>

            <div className="map-wrapper">
              <iframe
                title="AST Safety Nets Bangalore"
                src="https://www.google.com/maps?q=Bangalore%20Karnataka&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}

        <section className="contact-cta-wrapper">
          <div className="contact-cta">
            <div>
              <span>
                READY TO GET STARTED?
              </span>

              <h2>
                Get Your Free Quote Today.
              </h2>

              <p>
                Call or WhatsApp AST Safety Nets for pricing and
                installation assistance in Bangalore.
              </p>
            </div>

            <div className="contact-cta-actions">
              <a
                href={`tel:+91${PHONE}`}
                className="cta-call"
              >
                <span>
                  <Icon type="phone" />
                </span>

                Call Now
              </a>

              <a
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                  "Hi AST Safety Nets, I would like to get a free quotation for safety net installation in Bangalore."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="cta-whatsapp"
              >
                <span>
                  <Icon type="whatsapp" />
                </span>

                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <style>{`
        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;

          width: 100%;
          max-width: 100%;

          overflow-x: hidden;
        }

        .contact-page {
          width: 100%;

          overflow: hidden;

          color: #071f4b;

          background: #ffffff;

          font-family:
            Inter,
            "Segoe UI",
            Arial,
            sans-serif;
        }

        .contact-container {
          width:
            min(1280px, calc(100% - 44px));

          margin: 0 auto;
        }

        svg {
          width: 100%;
          height: 100%;

          display: block;

          fill: none;

          stroke: currentColor;

          stroke-width: 1.8;

          stroke-linecap: round;
          stroke-linejoin: round;
        }

        /* ==================================================
           HERO
        ================================================== */

        .contact-hero {
          position: relative;

          min-height: 500px;

          overflow: hidden;
        }

        .contact-hero-background {
          position: absolute;

          inset: 0;
        }

        .contact-hero-background img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
        }

        .contact-hero-overlay {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              90deg,
              rgba(5,27,65,.96) 0%,
              rgba(5,40,86,.87) 40%,
              rgba(5,39,83,.35) 75%,
              rgba(5,39,83,.1) 100%
            );
        }

        .contact-hero-container {
          position: relative;

          z-index: 3;

          width:
            min(1380px, calc(100% - 60px));

          min-height: 500px;

          margin: auto;

          display: flex;

          align-items: center;
        }

        .contact-hero-content {
          width:
            min(700px, 60%);
        }

        .hero-label {
          display: inline-flex;

          align-items: center;

          gap: 10px;

          color: #58c0fb;

          font-size: 11px;
          font-weight: 800;

          letter-spacing: 3px;
        }

        .hero-label::before {
          content: "";

          width: 31px;
          height: 2px;

          background: currentColor;
        }

        .contact-hero h1 {
          margin:
            18px 0 0;

          color: #ffffff;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size:
            clamp(48px, 5vw, 72px);

          line-height: 1.04;

          letter-spacing: -2.5px;
        }

        .contact-hero h1 span {
          display: block;

          color: #61c4ff;
        }

        .contact-hero-content > p {
          max-width: 650px;

          margin:
            22px 0 27px;

          color:
            rgba(237,247,255,.82);

          font-size: 15px;

          line-height: 1.8;
        }

        .hero-actions {
          display: flex;

          flex-wrap: wrap;

          gap: 11px;
        }

        .hero-call,
        .hero-whatsapp {
          min-height: 53px;

          padding:
            0 22px;

          display: inline-flex;

          align-items: center;
          justify-content: center;

          gap: 9px;

          border-radius: 9px;

          text-decoration: none;

          font-size: 13px;

          font-weight: 800;
        }

        .hero-call {
          color: #075bb9;

          background: #ffffff;
        }

        .hero-whatsapp {
          color: #ffffff;

          border:
            1px solid
            rgba(255,255,255,.55);

          background:
            rgba(255,255,255,.06);
        }

        .hero-call span,
        .hero-whatsapp span {
          width: 18px;
          height: 18px;
        }

        /* ==================================================
           INFO CARDS
        ================================================== */

        .contact-info-section {
          position: relative;

          z-index: 5;

          margin-top: -45px;

          padding:
            0 0 55px;
        }

        .contact-info-grid {
          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap: 19px;
        }

        .info-card {
          min-height: 170px;

          padding:
            28px 25px;

          display: flex;

          align-items: center;

          gap: 17px;

          border:
            1px solid #ddeaf6;

          border-radius: 20px;

          color: inherit;

          text-decoration: none;

          background: #ffffff;

          box-shadow:
            0 18px 42px
            rgba(7,42,84,.08);

          transition:
            transform .3s ease,
            box-shadow .3s ease,
            border-color .3s ease;
        }

        .info-card:hover {
          transform:
            translateY(-5px);

          border-color:
            #b9dcfc;

          box-shadow:
            0 24px 50px
            rgba(7,42,84,.12);
        }

        .info-icon {
          width: 59px;
          height: 59px;

          flex: 0 0 59px;

          padding: 15px;

          border-radius: 17px;

          color: #ffffff;

          background:
            linear-gradient(
              135deg,
              #0878d8,
              #0750b1
            );

          box-shadow:
            0 10px 24px
            rgba(7,83,180,.18);
        }

        .info-card span {
          display: block;

          margin-bottom: 5px;

          color: #8290a2;

          font-size: 10px;

          text-transform: uppercase;

          letter-spacing: 1.3px;

          font-weight: 700;
        }

        .info-card h3 {
          margin: 0;

          color: #0a2853;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 20px;

          word-break: break-word;
        }

        .info-card p {
          margin:
            8px 0 0;

          color: #6c7b8f;

          font-size: 12px;

          line-height: 1.7;
        }

        /* ==================================================
           MAIN CONTACT
        ================================================== */

        .contact-main-section {
          padding:
            30px 0 72px;

          background:
            linear-gradient(
              180deg,
              #ffffff,
              #f7fbff
            );
        }

        .contact-main-grid {
          display: grid;

          grid-template-columns:
            .9fr 1.1fr;

          gap: 65px;

          align-items: center;
        }

        .section-label {
          display: inline-flex;

          align-items: center;

          gap: 10px;

          color: #0870cf;

          font-size: 10px;
          font-weight: 800;

          letter-spacing: 2.7px;
        }

        .section-label::before {
          content: "";

          width: 29px;
          height: 2px;

          background: currentColor;
        }

        .contact-copy h2,
        .map-heading h2 {
          margin:
            16px 0 0;

          color: #061d49;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size:
            clamp(39px,4vw,55px);

          line-height: 1.08;

          letter-spacing: -1.8px;
        }

        .contact-copy h2 span,
        .map-heading h2 span {
          color: #0870cf;
        }

        .contact-copy > p {
          margin:
            19px 0 0;

          color: #69798d;

          font-size: 14px;

          line-height: 1.85;
        }

        /* ==================================================
           BENEFITS
        ================================================== */

        .contact-benefits {
          margin-top: 29px;

          display: flex;

          flex-direction: column;

          gap: 14px;
        }

        .contact-benefits > div {
          min-height: 72px;

          padding:
            12px 14px;

          display: flex;

          align-items: center;

          gap: 13px;

          border:
            1px solid #e0ebf5;

          border-radius: 14px;

          background: #ffffff;
        }

        .contact-benefits > div > span {
          width: 43px;
          height: 43px;

          flex: 0 0 43px;

          padding: 10px;

          border-radius: 50%;

          color: #0870cf;

          background: #edf7ff;
        }

        .contact-benefits strong,
        .contact-benefits small {
          display: block;
        }

        .contact-benefits strong {
          margin-bottom: 4px;

          color: #0b2b56;

          font-size: 13px;
        }

        .contact-benefits small {
          color: #7c8999;

          font-size: 11px;
        }

        .direct-contact-box {
          margin-top: 23px;

          padding:
            20px 22px;

          border-radius: 15px;

          color: #ffffff;

          background:
            linear-gradient(
              135deg,
              #073779,
              #0871cc
            );
        }

        .direct-contact-box small,
        .direct-contact-box strong,
        .direct-contact-box a {
          display: block;
        }

        .direct-contact-box small {
          color:
            rgba(255,255,255,.67);

          font-size: 10px;
        }

        .direct-contact-box strong {
          margin:
            5px 0;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 18px;
        }

        .direct-contact-box a {
          width: fit-content;

          color: #ffffff;

          text-decoration: none;

          font-size: 14px;

          font-weight: 800;
        }

        /* ==================================================
           FORM
        ================================================== */

        .contact-form-card {
          padding:
            38px 34px;

          border:
            1px solid #dfeaf5;

          border-radius: 23px;

          background: #ffffff;

          box-shadow:
            0 20px 50px
            rgba(7,42,84,.08);
        }

        .form-heading {
          margin-bottom: 27px;
        }

        .form-heading > span {
          color: #0870cf;

          font-size: 9px;

          font-weight: 800;

          letter-spacing: 2px;
        }

        .form-heading h3 {
          margin:
            8px 0 7px;

          color: #082650;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 31px;
        }

        .form-heading p {
          margin: 0;

          color: #7b899a;

          font-size: 12px;

          line-height: 1.7;
        }

        .form-group {
          margin-bottom: 16px;
        }

        .form-group label {
          display: block;

          margin-bottom: 7px;

          color: #18395f;

          font-size: 11px;

          font-weight: 750;
        }

        .input-wrap {
          position: relative;
        }

        .input-wrap > span {
          position: absolute;

          left: 15px;

          top: 50%;

          width: 19px;
          height: 19px;

          color: #0870cf;

          transform:
            translateY(-50%);
        }

        .input-wrap input,
        .input-wrap select,
        .input-wrap textarea {
          width: 100%;

          border:
            1px solid #dbe7f1;

          border-radius: 11px;

          outline: none;

          color: #17365d;

          background: #fbfdff;

          font: inherit;

          font-size: 13px;

          transition:
            border-color .25s ease,
            box-shadow .25s ease,
            background .25s ease;
        }

        .input-wrap input,
        .input-wrap select {
          height: 53px;

          padding:
            0 15px 0 46px;
        }

        .input-wrap textarea {
          min-height: 125px;

          resize: vertical;

          padding:
            15px 15px 15px 46px;
        }

        .textarea-wrap > span {
          top: 17px;

          transform: none;
        }

        .input-wrap input:focus,
        .input-wrap select:focus,
        .input-wrap textarea:focus {
          border-color:
            #8cc9f7;

          background: #ffffff;

          box-shadow:
            0 0 0 4px
            rgba(8,112,207,.07);
        }

        .input-wrap input::placeholder,
        .input-wrap textarea::placeholder {
          color: #a1acb9;
        }

        .submit-button {
          width: 100%;

          min-height: 54px;

          margin-top: 4px;

          padding: 0 18px;

          display: flex;

          align-items: center;
          justify-content: center;

          gap: 10px;

          border: none;

          border-radius: 10px;

          color: #ffffff;

          background:
            linear-gradient(
              135deg,
              #0878d8,
              #0750b1
            );

          font-size: 13px;

          font-weight: 800;

          cursor: pointer;

          box-shadow:
            0 11px 25px
            rgba(7,83,178,.17);

          transition:
            transform .25s ease,
            box-shadow .25s ease;
        }

        .submit-button:hover {
          transform:
            translateY(-2px);

          box-shadow:
            0 16px 33px
            rgba(7,83,178,.23);
        }

        .submit-button span,
        .submit-button i {
          width: 18px;
          height: 18px;
        }

        .submit-button i {
          margin-left: 3px;

          font-style: normal;
        }

        .form-note {
          margin:
            11px 0 0;

          color: #94a0ae;

          text-align: center;

          font-size: 9px;
        }

        /* ==================================================
           MAP
        ================================================== */

        .map-section {
          padding:
            70px 0;

          background: #ffffff;
        }

        .map-heading {
          width:
            min(750px,100%);

          margin:
            0 auto 34px;

          text-align: center;
        }

        .map-heading .section-label {
          justify-content: center;
        }

        .map-heading .section-label::before {
          display: none;
        }

        .map-heading p {
          max-width: 600px;

          margin:
            16px auto 0;

          color: #6b7b8f;

          font-size: 13px;

          line-height: 1.8;
        }

        .map-wrapper {
          width: 100%;

          height: 420px;

          overflow: hidden;

          border:
            1px solid #dce9f4;

          border-radius: 22px;

          background: #eef6fc;

          box-shadow:
            0 16px 40px
            rgba(8,42,80,.07);
        }

        /* ==================================================
           BOTTOM CTA
        ================================================== */

        .contact-cta-wrapper {
          padding:
            0 22px 35px;
        }

        .contact-cta {
          width:
            min(1280px,100%);

          min-height: 205px;

          margin: auto;

          padding:
            35px 40px;

          display: flex;

          align-items: center;
          justify-content: space-between;

          gap: 35px;

          border-radius: 24px;

          color: #ffffff;

          background:
            linear-gradient(
              120deg,
              #06347c,
              #076ac8 58%,
              #049bdd
            );
        }

        .contact-cta > div:first-child > span {
          color:
            rgba(255,255,255,.72);

          font-size: 9px;

          font-weight: 800;

          letter-spacing: 2px;
        }

        .contact-cta h2 {
          margin:
            8px 0;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 34px;
        }

        .contact-cta p {
          max-width: 650px;

          margin: 0;

          color:
            rgba(255,255,255,.77);

          font-size: 13px;
        }

        .contact-cta-actions {
          display: flex;

          gap: 10px;

          flex-wrap: wrap;
        }

        .cta-call,
        .cta-whatsapp {
          min-height: 50px;

          padding:
            0 20px;

          display: inline-flex;

          align-items: center;
          justify-content: center;

          gap: 8px;

          border-radius: 9px;

          text-decoration: none;

          font-size: 12px;

          font-weight: 800;
        }

        .cta-call {
          color: #075ab7;

          background: #ffffff;
        }

        .cta-whatsapp {
          color: #ffffff;

          border:
            1px solid
            rgba(255,255,255,.55);

          background:
            rgba(255,255,255,.06);
        }

        .cta-call span,
        .cta-whatsapp span {
          width: 17px;
          height: 17px;
        }

        /* ==================================================
           TABLET
        ================================================== */

        @media(max-width:1050px) {
          .contact-info-grid {
            grid-template-columns:
              1fr 1fr;
          }

          .info-card:first-child {
            grid-column:
              1 / -1;
          }

          .contact-main-grid {
            grid-template-columns:
              1fr;

            gap: 40px;
          }

          .contact-cta {
            flex-direction: column;

            align-items:
              flex-start;
          }
        }

        /* ==================================================
           MOBILE
        ================================================== */

        @media(max-width:700px) {
          .contact-container {
            width:
              calc(100% - 30px);
          }

          .contact-hero {
            min-height: 500px;
          }

          .contact-hero-container {
            width:
              calc(100% - 30px);

            min-height: 500px;
          }

          .contact-hero-content {
            width: 100%;
          }

          .contact-hero-overlay {
            background:
              linear-gradient(
                180deg,
                rgba(5,27,65,.9),
                rgba(5,39,83,.75)
              );
          }

          .contact-hero h1 {
            font-size: 42px;

            letter-spacing: -1.5px;
          }

          .contact-hero-content > p {
            font-size: 14px;
          }

          .hero-actions {
            width: 100%;

            display: grid;

            grid-template-columns:
              1fr 1fr;
          }

          .hero-call,
          .hero-whatsapp {
            padding:
              0 12px;

            font-size: 11px;
          }

          .contact-info-section {
            margin-top: -25px;

            padding-bottom: 45px;
          }

          .contact-info-grid {
            grid-template-columns: 1fr;

            gap: 13px;
          }

          .info-card:first-child {
            grid-column: auto;
          }

          .info-card {
            min-height: 135px;

            padding:
              20px 18px;

            border-radius: 16px;
          }

          .info-icon {
            width: 51px;
            height: 51px;

            flex-basis: 51px;

            padding: 13px;
          }

          .info-card h3 {
            font-size: 17px;
          }

          .contact-main-section {
            padding:
              10px 0 55px;
          }

          .contact-copy h2,
          .map-heading h2 {
            font-size: 34px;

            letter-spacing: -1px;
          }

          .contact-form-card {
            padding:
              27px 20px;

            border-radius: 19px;
          }

          .form-heading h3 {
            font-size: 27px;
          }

          .map-section {
            padding:
              55px 0;
          }

          .map-wrapper {
            height: 330px;

            border-radius: 17px;
          }

          .contact-cta-wrapper {
            padding:
              0 11px 25px;
          }

          .contact-cta {
            padding:
              28px 20px;

            border-radius: 20px;
          }

          .contact-cta h2 {
            font-size: 30px;
          }

          .contact-cta-actions {
            width: 100%;

            flex-direction: column;
          }

          .cta-call,
          .cta-whatsapp {
            width: 100%;
          }
        }

        @media(max-width:390px) {
          .hero-actions {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}

export default Contact;