import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";

const PHONE = "9844000299";
const SITE_URL = "https://astsafetynetsinvisiblegrills.com";

function Counter({ end, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const element = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;

        started.current = true;

        const duration = 1800;
        const startTime = performance.now();

        const animate = (time) => {
          const progress = Math.min((time - startTime) / duration, 1);
          const easeOut = 1 - Math.pow(1 - progress, 3);

          setCount(Math.floor(end * easeOut));

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setCount(end);
          }
        };

        requestAnimationFrame(animate);
      },
      {
        threshold: 0.35,
      }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [end]);

  return (
    <strong ref={ref}>
      {count}
      {suffix}
    </strong>
  );
}

function About() {
  const handleImageError = (event, fallback) => {
    if (event.currentTarget.dataset.fallback === "true") return;

    event.currentTarget.dataset.fallback = "true";
    event.currentTarget.src = fallback;
  };

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About AST Safety Nets & Invisible Grills Bangalore",
    url: `${SITE_URL}/about`,
    description:
      "Learn about AST Safety Nets & Invisible Grills Bangalore, providing balcony safety nets, pigeon safety nets, bird protection nets, invisible grills and customized safety net solutions in Bangalore.",
    mainEntity: {
      "@type": "LocalBusiness",
      name: "AST Safety Nets & Invisible Grills",
      url: SITE_URL,
      telephone: `+91${PHONE}`,
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
          About AST Safety Nets Bangalore | Invisible Grills & Safety Nets
        </title>

        <meta
          name="description"
          content="About AST Safety Nets & Invisible Grills Bangalore. We provide balcony safety nets, pigeon nets, bird protection nets, sports nets and invisible grills for homes, apartments and commercial spaces."
        />

        <meta
          name="keywords"
          content="AST Safety Nets Bangalore, safety nets Bangalore, balcony safety nets Bangalore, invisible grills Bangalore, pigeon safety nets Bangalore, bird protection nets Bangalore, sports nets Bangalore"
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href={`${SITE_URL}/about`} />

        <meta
          property="og:title"
          content="About AST Safety Nets & Invisible Grills Bangalore"
        />

        <meta
          property="og:description"
          content="Professional safety net and invisible grill solutions in Bangalore for homes, apartments, commercial spaces and sports areas."
        />

        <meta
          property="og:url"
          content={`${SITE_URL}/about`}
        />

        <meta property="og:type" content="website" />

        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bangalore" />

        <script type="application/ld+json">
          {JSON.stringify(aboutSchema)}
        </script>
      </Helmet>

      <main className="about-page">
        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="about-hero">
          <div className="about-hero-bg">
            <img
              src="/images/stainless-steel-grill.webp"
              alt="AST Safety Nets and Invisible Grills Bangalore"
              onError={(event) =>
                handleImageError(
                  event,
                  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1900&q=88"
                )
              }
            />

            <div className="about-hero-overlay" />
          </div>

          <div className="about-hero-container">
            <div className="about-hero-content">
              <span className="eyebrow">
                ABOUT AST SAFETY NETS
              </span>

              <h1>
                Safety Solutions Built
                <span> Around Trust.</span>
              </h1>

              <p>
                AST Safety Nets & Invisible Grills provides dependable
                safety-net and invisible-grill solutions across Bangalore
                for homes, apartments, commercial properties and sports
                environments.
              </p>

              <a
                href={`tel:+91${PHONE}`}
                className="hero-call-button"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
                </svg>

                +91 {PHONE}
              </a>
            </div>
          </div>
        </section>

        {/* =====================================================
            INTRO
        ===================================================== */}

        <section className="about-section intro-section">
          <div className="about-container">
            <div className="intro-heading">
              <span className="section-label">
                WELCOME TO AST
              </span>

              <h2>
                Welcome to AST Safety Nets
                <span> & Invisible Grills Bangalore.</span>
              </h2>
            </div>

            <div className="intro-content">
              <div className="intro-copy">
                <p>
                  AST Safety Nets & Invisible Grills, based in Bangalore,
                  is a trusted provider of quality mesh and netting
                  solutions. We provide professional installations for
                  balcony safety nets, anti-bird protection nets, pigeon
                  safety nets, sports nets and other residential and
                  commercial safety requirements.
                </p>

                <p>
                  We value long-term relationships with our customers by
                  focusing on dependable service, quality materials and
                  professional workmanship. Our solutions are designed to
                  provide practical protection while maintaining
                  ventilation, visibility and the appearance of the
                  property.
                </p>
              </div>

              <div className="intro-highlight">
                <div className="highlight-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 3 20 6v5c0 5-3.3 9.3-8 11-4.7-1.7-8-6-8-11V6l8-3Z" />
                    <path d="m8.5 12 2.2 2.2 4.8-4.8" />
                  </svg>
                </div>

                <h3>
                  Safety Is More Than a Product.
                </h3>

                <p>
                  It is about creating secure spaces for families,
                  workers, buildings and communities with solutions
                  designed around real-world needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            IMAGE + CONTENT
        ===================================================== */}

        <section className="about-section story-section">
          <div className="about-container story-grid">
            <div className="story-image">
              <img
                src="/images/staircase-net.webp"
                alt="Safety nets installation in Bangalore"
                onError={(event) =>
                  handleImageError(
                    event,
                    "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1100&q=88"
                  )
                }
              />

              <div className="story-badge">
                <strong>25+</strong>

                <span>
                  Years of
                  <br />
                  Experience
                </span>
              </div>
            </div>

            <div className="story-content">
              <span className="section-label">
                OUR EXPERIENCE
              </span>

              <h2>
                Reliable Safety Solutions
                <span> For Every Environment.</span>
              </h2>

              <p>
                AST Safety Nets & Invisible Grills provides netting
                solutions for residential properties, commercial
                locations, buildings, industrial areas and sports
                spaces.
              </p>

              <p>
                Security is especially important in high-rise
                structures, construction areas, shopping centres,
                offices and recreational spaces. Falling objects,
                open balconies, unprotected windows and other
                exposed areas can create avoidable risks.
              </p>

              <p>
                Our safety-net solutions are designed to help reduce
                those risks with durable materials, professional
                fitting and customized installation based on the
                actual area.
              </p>

              <div className="story-points">
                {[
                  "Residential Safety Solutions",
                  "Commercial Netting Solutions",
                  "High-Rise Safety Protection",
                  "Sports & Practice Nets",
                  "Bird Protection Solutions",
                  "Invisible Grill Installation",
                ].map((item) => (
                  <div key={item}>
                    <span>
                      <svg viewBox="0 0 24 24">
                        <path d="m5 12 4 4 10-10" />
                      </svg>
                    </span>

                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            COUNTERS
        ===================================================== */}

        <section className="stats-section">
          <div className="stats-grid">
            <div className="stat-card">
              <Counter end={85} suffix="K+" />

              <span>
                Successfully Completed Projects
              </span>
            </div>

            <div className="stat-card">
              <Counter end={92} suffix="K+" />

              <span>
                Satisfied Customers
              </span>
            </div>

            <div className="stat-card">
              <Counter end={19} suffix="+" />

              <span>
                Safety Services Available
              </span>
            </div>

            <div className="stat-card">
              <Counter end={25} suffix="+" />

              <span>
                Years of Experience
              </span>
            </div>
          </div>
        </section>

        {/* =====================================================
            VALUES
        ===================================================== */}

        <section className="about-section values-section">
          <div className="about-container">
            <div className="center-heading">
              <span className="section-label center">
                WHY AST SAFETY NETS
              </span>

              <h2>
                Built on Quality.
                <span> Driven by Safety.</span>
              </h2>

              <p>
                We focus on the things that matter most when it comes to
                safety-net and invisible-grill installation.
              </p>
            </div>

            <div className="values-grid">
              <article>
                <div className="value-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="m12 3 3 2h4v4l2 3-2 3v4h-4l-3 2-3-2H5v-4l-2-3 2-3V5h4l3-2Z" />
                    <path d="m8 12 2.5 2.5L16 9" />
                  </svg>
                </div>

                <h3>Quality Materials</h3>

                <p>
                  Durable materials selected for long-term performance
                  and dependable safety.
                </p>
              </article>

              <article>
                <div className="value-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="m14 6 4 4M5 19 15 9M15 5l4 4M3 21l4-4" />
                  </svg>
                </div>

                <h3>Professional Installation</h3>

                <p>
                  Clean and secure fitting completed by an experienced
                  installation team.
                </p>
              </article>

              <article>
                <div className="value-icon">
                  <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="8" />
                    <path d="M12 7v10M7 12h10" />
                  </svg>
                </div>

                <h3>Customized Solutions</h3>

                <p>
                  Every installation can be planned around the exact
                  dimensions and requirements of the space.
                </p>
              </article>

              <article>
                <div className="value-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M7 5h10M7 9h10M8 5c6 0 7 7 0 7H7l8 8" />
                  </svg>
                </div>

                <h3>Competitive Pricing</h3>

                <p>
                  Practical recommendations and professional solutions
                  at competitive rates.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="about-cta-wrapper">
          <div className="about-cta">
            <div>
              <span>
                SAFETY NET INSTALLATION IN BANGALORE
              </span>

              <h2>
                Need a Safer Space?
              </h2>

              <p>
                Talk to AST Safety Nets & Invisible Grills for
                installation details and quotation assistance.
              </p>
            </div>

            <div className="about-cta-buttons">
              <a
                href={`tel:+91${PHONE}`}
                className="cta-call"
              >
                Call +91 {PHONE}
              </a>

              <a
                href={`https://wa.me/91${PHONE}?text=${encodeURIComponent(
                  "Hi AST Safety Nets, I would like to get a quotation for safety net or invisible grill installation in Bangalore."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="cta-whatsapp"
              >
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

        .about-page {
          width: 100%;
          overflow: hidden;

          color: #081f4b;
          background: #ffffff;

          font-family:
            Inter,
            "Segoe UI",
            Arial,
            sans-serif;
        }

        .about-container {
          width:
            min(1280px, calc(100% - 44px));

          margin: 0 auto;
        }

        .about-section {
          padding: 72px 0;
        }

        svg {
          width: 100%;
          height: 100%;

          fill: none;

          stroke: currentColor;

          stroke-width: 1.8;

          stroke-linecap: round;
          stroke-linejoin: round;
        }

        /* ===============================================
           HERO
        =============================================== */

        .about-hero {
          position: relative;

          min-height: 570px;

          overflow: hidden;
        }

        .about-hero-bg {
          position: absolute;
          inset: 0;
        }

        .about-hero-bg img {
          width: 100%;
          height: 100%;

          object-fit: cover;
        }

        .about-hero-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              90deg,
              rgba(5, 28, 67, 0.94) 0%,
              rgba(5, 39, 83, 0.86) 38%,
              rgba(5, 37, 79, 0.36) 72%,
              rgba(5, 37, 79, 0.1) 100%
            );
        }

        .about-hero-container {
          position: relative;
          z-index: 2;

          width:
            min(1380px, calc(100% - 60px));

          min-height: 570px;

          margin: 0 auto;

          display: flex;
          align-items: center;
        }

        .about-hero-content {
          width: min(680px, 60%);
        }

        .eyebrow,
        .section-label {
          display: inline-flex;
          align-items: center;

          gap: 11px;

          color: #1fa0ee;

          font-size: 11px;
          font-weight: 800;

          letter-spacing: 2.8px;
        }

        .eyebrow::before,
        .section-label::before {
          content: "";

          width: 30px;
          height: 2px;

          background: currentColor;
        }

        .about-hero-content h1 {
          margin: 20px 0 0;

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

        .about-hero-content h1 span {
          display: block;

          color: #5fc1ff;
        }

        .about-hero-content > p {
          max-width: 630px;

          margin: 22px 0 27px;

          color:
            rgba(238, 247, 255, 0.81);

          font-size: 16px;
          line-height: 1.8;
        }

        .hero-call-button {
          min-height: 54px;

          padding: 0 23px;

          display: inline-flex;
          align-items: center;

          gap: 10px;

          border-radius: 9px;

          color: #0759b6;

          text-decoration: none;

          background: #ffffff;

          font-size: 14px;
          font-weight: 800;
        }

        .hero-call-button svg {
          width: 18px;
          height: 18px;
        }

        /* ===============================================
           INTRO
        =============================================== */

        .intro-section {
          padding-top: 85px;
        }

        .intro-heading {
          width: min(920px, 100%);

          margin: 0 auto 45px;

          text-align: center;
        }

        .intro-heading .section-label {
          justify-content: center;
        }

        .intro-heading .section-label::before {
          display: none;
        }

        .intro-heading h2,
        .story-content h2,
        .center-heading h2 {
          margin: 16px 0 0;

          color: #061c48;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size:
            clamp(38px, 4vw, 55px);

          line-height: 1.08;

          letter-spacing: -1.8px;
        }

        .intro-heading h2 span,
        .story-content h2 span,
        .center-heading h2 span {
          color: #0870cf;
        }

        .intro-content {
          display: grid;
          grid-template-columns:
            1.2fr 0.8fr;

          gap: 45px;

          align-items: stretch;
        }

        .intro-copy {
          padding: 38px;

          border:
            1px solid #e0ebf5;

          border-radius: 22px;

          background:
            linear-gradient(
              145deg,
              #ffffff,
              #f8fcff
            );
        }

        .intro-copy p {
          margin: 0;

          color: #68788d;

          font-size: 15px;
          line-height: 1.9;
        }

        .intro-copy p + p {
          margin-top: 20px;
        }

        .intro-highlight {
          padding: 38px;

          display: flex;
          flex-direction: column;
          justify-content: center;

          border-radius: 22px;

          color: #ffffff;

          background:
            linear-gradient(
              135deg,
              #073b83,
              #0875d2
            );

          box-shadow:
            0 18px 40px
            rgba(6, 74, 160, 0.17);
        }

        .highlight-icon {
          width: 58px;
          height: 58px;

          margin-bottom: 22px;

          padding: 14px;

          border-radius: 17px;

          color: #ffffff;

          background:
            rgba(255, 255, 255, 0.13);
        }

        .intro-highlight h3 {
          margin: 0 0 13px;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 27px;
          line-height: 1.2;
        }

        .intro-highlight p {
          margin: 0;

          color:
            rgba(255,255,255,.78);

          font-size: 14px;
          line-height: 1.8;
        }

        /* ===============================================
           STORY
        =============================================== */

        .story-section {
          background: #f7fbff;
        }

        .story-grid {
          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 65px;

          align-items: center;
        }

        .story-image {
          position: relative;

          height: 560px;

          overflow: hidden;

          border-radius: 25px;
        }

        .story-image img {
          width: 100%;
          height: 100%;

          object-fit: cover;

          transition:
            transform .7s ease;
        }

        .story-image:hover img {
          transform: scale(1.04);
        }

        .story-badge {
          position: absolute;

          left: 25px;
          bottom: 25px;

          min-width: 190px;

          padding: 18px;

          display: flex;
          align-items: center;

          gap: 13px;

          border:
            1px solid
            rgba(255,255,255,.22);

          border-radius: 14px;

          color: #ffffff;

          background:
            rgba(6, 90, 189, 0.89);

          backdrop-filter:
            blur(10px);
        }

        .story-badge strong {
          font-size: 34px;
        }

        .story-badge span {
          font-size: 11px;
          line-height: 1.45;
        }

        .story-content > p {
          margin: 18px 0 0;

          color: #68788d;

          font-size: 14px;
          line-height: 1.85;
        }

        .story-points {
          margin-top: 28px;

          display: grid;
          grid-template-columns:
            1fr 1fr;

          gap: 13px;
        }

        .story-points > div {
          min-height: 45px;

          display: flex;
          align-items: center;

          gap: 9px;

          color: #17375f;

          font-size: 12px;
          font-weight: 700;
        }

        .story-points span {
          width: 28px;
          height: 28px;

          flex: 0 0 28px;

          padding: 6px;

          border-radius: 50%;

          color: #0870cf;

          background: #e9f6ff;
        }

        /* ===============================================
           STATS
        =============================================== */

        .stats-section {
          padding:
            0 22px 72px;

          background: #f7fbff;
        }

        .stats-grid {
          width:
            min(1280px,100%);

          margin: auto;

          padding:
            40px 24px;

          display: grid;
          grid-template-columns:
            repeat(4,1fr);

          border-radius: 22px;

          background:
            linear-gradient(
              120deg,
              #061c48,
              #07478b
            );

          box-shadow:
            0 18px 45px
            rgba(5,29,67,.16);
        }

        .stat-card {
          position: relative;

          text-align: center;
        }

        .stat-card:not(:last-child)::after {
          content: "";

          position: absolute;

          top: 10%;
          right: 0;

          width: 1px;
          height: 80%;

          background:
            rgba(255,255,255,.12);
        }

        .stat-card strong {
          display: block;

          color: #ffffff;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 43px;
        }

        .stat-card span {
          display: block;

          max-width: 150px;

          margin: 7px auto 0;

          color: #bdd9f3;

          font-size: 11px;
          line-height: 1.5;
        }

        /* ===============================================
           VALUES
        =============================================== */

        .center-heading {
          width: min(770px,100%);

          margin: 0 auto 44px;

          text-align: center;
        }

        .section-label.center {
          justify-content: center;
        }

        .section-label.center::before {
          display: none;
        }

        .center-heading > p {
          max-width: 620px;

          margin: 18px auto 0;

          color: #69798d;

          font-size: 14px;
          line-height: 1.8;
        }

        .values-grid {
          display: grid;
          grid-template-columns:
            repeat(4,1fr);

          gap: 20px;
        }

        .values-grid article {
          min-height: 245px;

          padding: 30px 24px;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          border:
            1px solid #e1ebf5;

          border-radius: 20px;

          text-align: center;

          background:
            linear-gradient(
              180deg,
              #ffffff,
              #fbfdff
            );

          transition:
            transform .3s ease,
            box-shadow .3s ease;
        }

        .values-grid article:hover {
          transform:
            translateY(-6px);

          box-shadow:
            0 18px 40px
            rgba(7,48,96,.08);
        }

        .value-icon {
          width: 62px;
          height: 62px;

          margin-bottom: 18px;

          padding: 15px;

          border-radius: 50%;

          color: #0870cf;

          background: #eaf6ff;
        }

        .values-grid h3 {
          margin: 0 0 9px;

          color: #092450;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 18px;
        }

        .values-grid p {
          margin: 0;

          color: #6b7b90;

          font-size: 12px;
          line-height: 1.75;
        }

        /* ===============================================
           CTA
        =============================================== */

        .about-cta-wrapper {
          padding:
            0 22px 35px;
        }

        .about-cta {
          width:
            min(1280px,100%);

          min-height: 200px;

          margin: auto;

          padding:
            35px 42px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 30px;

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

        .about-cta > div:first-child > span {
          color:
            rgba(255,255,255,.75);

          font-size: 9px;
          font-weight: 800;

          letter-spacing: 2px;
        }

        .about-cta h2 {
          margin: 8px 0 8px;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 34px;
        }

        .about-cta p {
          max-width: 650px;

          margin: 0;

          color:
            rgba(255,255,255,.78);

          font-size: 13px;
        }

        .about-cta-buttons {
          display: flex;

          gap: 10px;

          flex-wrap: wrap;
        }

        .cta-call,
        .cta-whatsapp {
          min-height: 50px;

          padding: 0 20px;

          display: inline-flex;
          align-items: center;
          justify-content: center;

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

        /* ===============================================
           TABLET
        =============================================== */

        @media(max-width: 1050px) {
          .intro-content,
          .story-grid {
            grid-template-columns: 1fr;
          }

          .story-image {
            height: 500px;
          }

          .stats-grid {
            grid-template-columns:
              repeat(2,1fr);

            row-gap: 30px;
          }

          .stat-card:nth-child(2)::after {
            display: none;
          }

          .values-grid {
            grid-template-columns:
              repeat(2,1fr);
          }

          .about-cta {
            flex-direction: column;

            align-items: flex-start;
          }
        }

        /* ===============================================
           MOBILE
        =============================================== */

        @media(max-width:700px) {
          .about-container {
            width:
              calc(100% - 30px);
          }

          .about-section {
            padding: 55px 0;
          }

          .about-hero {
            min-height: 520px;
          }

          .about-hero-container {
            width:
              calc(100% - 30px);

            min-height: 520px;
          }

          .about-hero-content {
            width: 100%;
          }

          .about-hero-overlay {
            background:
              linear-gradient(
                180deg,
                rgba(5,28,67,.88),
                rgba(5,37,79,.75)
              );
          }

          .about-hero-content h1 {
            font-size: 43px;

            letter-spacing: -1.5px;
          }

          .about-hero-content > p {
            font-size: 14px;
          }

          .intro-heading h2,
          .story-content h2,
          .center-heading h2 {
            font-size: 34px;
          }

          .intro-content {
            gap: 16px;
          }

          .intro-copy,
          .intro-highlight {
            padding: 25px 21px;
          }

          .story-image {
            height: 380px;

            border-radius: 19px;
          }

          .story-badge {
            left: 16px;
            bottom: 16px;

            min-width: 155px;

            padding: 13px;
          }

          .story-badge strong {
            font-size: 27px;
          }

          .story-points {
            grid-template-columns: 1fr;
          }

          .stats-section {
            padding:
              0 13px 55px;
          }

          .stats-grid {
            padding:
              29px 8px;

            border-radius: 18px;
          }

          .stat-card strong {
            font-size: 29px;
          }

          .stat-card span {
            font-size: 9px;
          }

          .values-grid {
            grid-template-columns: 1fr;
          }

          .values-grid article {
            min-height: 215px;
          }

          .about-cta-wrapper {
            padding:
              0 11px 25px;
          }

          .about-cta {
            padding:
              29px 20px;

            border-radius: 20px;
          }

          .about-cta h2 {
            font-size: 30px;
          }

          .about-cta-buttons {
            width: 100%;

            flex-direction: column;
          }

          .cta-call,
          .cta-whatsapp {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}

export default About;