import React from "react";
import { Helmet } from "react-helmet-async";

const PHONE = "9844000299";
const WHATSAPP = "919844000299";
const SITE_URL = "https://astsafetynetsinvisiblegrills.com";

function Icon({ type }) {
  const icons = {
    balcony: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="1" />
        <path d="M4 10h16M8 10v10M12 10v10M16 10v10" />
      </>
    ),

    grill: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="1" />
        <path d="M8 3v18M12 3v18M16 3v18" />
      </>
    ),

    bird: (
      <>
        <path d="M4 15c3.7.2 5.4-1.4 7-4 1.5-2.4 3.8-3.6 7-2.8-1 2.4-2.7 4.2-5 5.1 2.2 1.1 4.6 1 7-.1-1.7 3.7-5.4 5.8-9.3 5-2.7-.5-4.9-1.7-6.7-3.2Z" />
        <path d="m18 8 3-1" />
      </>
    ),

    child: (
      <>
        <circle cx="12" cy="6.5" r="3" />
        <path d="M6 20v-3c0-3.3 2.7-6 6-6s6 2.7 6 6v3" />
        <path d="m8 15-3-2M16 15l3-2" />
      </>
    ),

    home: (
      <>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v11h14V10M9 21v-7h6v7" />
      </>
    ),

    tools: (
      <>
        <path d="m14 6 4 4M5 19 15 9M15 5l4 4M3 21l4-4" />
      </>
    ),

    sport: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m7 6 3 4-2 5-4 1M17 6l-3 4 2 5 4 1M10 10h4" />
      </>
    ),

    shield: (
      <>
        <path d="M12 3 20 6v5c0 5-3.3 9.3-8 11-4.7-1.7-8-6-8-11V6l8-3Z" />
        <path d="m8.5 12 2.2 2.2 4.8-4.8" />
      </>
    ),

    pool: (
      <>
        <path d="M3 15c2 0 2 1 4 1s2-1 4-1 2 1 4 1 2-1 4-1 2 1 4 1" />
        <path d="M3 19c2 0 2 1 4 1s2-1 4-1 2 1 4 1 2-1 4-1 2 1 4 1" />
        <path d="M6 14V5h4M6 9h4" />
      </>
    ),

    spike: (
      <>
        <path d="M4 19h16" />
        <path d="m6 18 2-12 2 12M11 18l2-14 2 14M16 18l2-11 2 11" />
      </>
    ),

    hanger: (
      <>
        <path d="M12 6a2 2 0 1 1 2-2" />
        <path d="m12 6-8 8h16l-8-8Z" />
      </>
    ),

    whatsapp: (
      <>
        <path d="M20 11.5A8 8 0 0 1 8.2 18.6L4 20l1.4-4.1A8 8 0 1 1 20 11.5Z" />
        <path d="M8.5 8.5c.5 3 2 4.5 5 5" />
      </>
    ),

    phone: (
      <>
        <path d="M5 3h4l2 5-2.5 2c1.5 3.2 3.6 5.3 6.8 6.8l2-2.5 5 2v4c0 1-.8 1.7-1.8 1.7C10.3 22 2 13.7 2 3.5 2 2.7 2.7 2 3.5 2" />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {icons[type]}
    </svg>
  );
}

function Services() {
  const services = [
    {
      title: "Balcony Safety Nets",
      icon: "balcony",
      image: "/images/balcony-net.webp",
      fallback:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",
      description:
        "Balcony Safety Nets provide reliable protection for children, pets and elderly family members while helping prevent accidental falls. Durable and weather-resistant materials provide long-lasting safety without disturbing your balcony appearance.",
    },

    {
      title: "Balcony Invisible Grills",
      icon: "grill",
      image: "/images/invisible-grill.webp",
      fallback:
        "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1000&q=85",
      description:
        "Balcony Invisible Grills provide modern safety using high-quality stainless steel cables while maintaining clear outdoor views, ventilation and a clean contemporary appearance.",
    },

    {
      title: "Pigeon Safety Nets",
      icon: "bird",
      image: "/images/pigeon-net.webp",
      fallback:
        "https://images.unsplash.com/photo-1551522435-a13afa10f103?auto=format&fit=crop&w=1000&q=85",
      description:
        "Pigeon Safety Nets help prevent pigeons and other birds from entering balconies, windows and open spaces while maintaining ventilation, cleanliness and a comfortable living environment.",
    },

    {
      title: "Anti Bird Nets",
      icon: "bird",
      image: "/images/anti-bird-net.webp",
      fallback:
        "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=1000&q=85",
      description:
        "Anti Bird Nets offer an effective and humane solution for balconies, windows, terraces and other open areas, helping keep spaces cleaner and reducing bird-related damage.",
    },

    {
      title: "Window Invisible Grills",
      icon: "grill",
      image: "/images/window-invisible-grill.webp",
      fallback:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=85",
      description:
        "Window Invisible Grills provide protection for children and pets without blocking natural light, airflow or outside views, while offering excellent durability and low maintenance.",
    },

    {
      title: "Children Safety Nets",
      icon: "child",
      image: "/images/children-net.webp",
      fallback:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85",
      description:
        "Children Safety Nets provide dependable protection for balconies, windows, staircases and open areas, helping create a safer environment for children while maintaining ventilation and visibility.",
    },

    {
      title: "Duct Area Safety Nets",
      icon: "shield",
      image: "/images/duct-net.webp",
      fallback:
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1000&q=85",
      description:
        "Duct Area Safety Nets cover open duct spaces and help prevent accidental falls, bird entry and debris accumulation while allowing proper ventilation in residential and commercial buildings.",
    },

    {
      title: "Kids Safety Invisible Grills",
      icon: "child",
      image: "/images/kids-invisible-grill.webp",
      fallback:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85",
      description:
        "Kids Safety Invisible Grills offer advanced protection for children while maintaining the modern look of your property with premium stainless steel cables and clear outdoor visibility.",
    },

    {
      title: "Bird Protection Nets",
      icon: "bird",
      image: "/images/bird-protection-net.webp",
      fallback:
        "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=1000&q=85",
      description:
        "Bird Protection Nets help protect balconies, windows, terraces and open spaces from nesting, droppings and bird-related damage while preserving ventilation and cleanliness.",
    },

    {
      title: "Building Safety Nets",
      icon: "home",
      image: "/images/building-net.webp",
      fallback:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85",
      description:
        "Building Safety Nets provide dependable fall and debris protection for residential buildings, commercial properties and construction environments using high-strength materials.",
    },

    {
      title: "Stainless Steel Invisible Grills",
      icon: "grill",
      image: "/images/stainless-steel-grill.webp",
      fallback:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
      description:
        "Stainless Steel Invisible Grills provide premium safety for balconies, windows and staircases with a sleek appearance, corrosion resistance and clear visibility.",
    },

    {
      title: "Construction Safety Nets",
      icon: "tools",
      image: "/images/construction-net.webp",
      fallback:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=85",
      description:
        "Construction Safety Nets help protect workers and surrounding areas from falls and debris using durable, high-strength netting designed for demanding construction environments.",
    },

    {
      title: "Industrial Safety Nets",
      icon: "shield",
      image: "/images/industrial-net.webp",
      fallback:
        "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1000&q=85",
      description:
        "Industrial Safety Nets provide protection for workers, equipment and materials in factories, warehouses and industrial sites while helping reduce operational risks.",
    },

    {
      title: "Staircase Safety Nets",
      icon: "shield",
      image: "/images/staircase-net.webp",
      fallback:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
      description:
        "Staircase Safety Nets help prevent accidental falls through staircase openings and provide added protection for children, pets and elderly family members.",
    },

    {
      title: "Swimming Pool Safety Nets",
      icon: "pool",
      image: "/images/swimming-pool-net.webp",
      fallback:
        "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?auto=format&fit=crop&w=1000&q=85",
      description:
        "Swimming Pool Safety Nets help reduce accidental access to pool areas by children and pets while maintaining visibility and offering durable outdoor performance.",
    },

    {
      title: "Bird Spikes",
      icon: "spike",
      image: "/images/bird-spikes.webp",
      fallback:
        "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=1000&q=85",
      description:
        "Bird Spikes provide a humane way to discourage pigeons and other birds from perching on ledges, walls, rooftops and windows while helping protect buildings from droppings and nesting.",
    },

    {
      title: "Cricket Practice Nets",
      icon: "sport",
      image: "/images/cricket-net.webp",
      fallback:
        "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1000&q=85",
      description:
        "Cricket Practice Nets create a professional training environment for schools, academies, clubs and residential spaces while helping contain powerful shots safely.",
    },

    {
      title: "Cloth Hangers",
      icon: "hanger",
      image: "/images/cloth-hanger.webp",
      fallback:
        "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1000&q=85",
      description:
        "Cloth Hangers provide a practical and space-saving drying solution for homes and apartments with strong load capacity, smooth operation and durable rust-resistant materials.",
    },
  ];

  const handleImageError = (event, fallback) => {
    if (event.currentTarget.dataset.fallback === "true") return;

    event.currentTarget.dataset.fallback = "true";
    event.currentTarget.src = fallback;
  };

  const createWhatsAppLink = (service) => {
    const message = `Hi AST Safety Nets, I am interested in ${service}. Please share pricing and installation details in Bangalore.`;

    return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
      message
    )}`;
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        areaServed: {
          "@type": "City",
          name: "Bangalore",
        },
        provider: {
          "@type": "LocalBusiness",
          name: "AST Safety Nets & Invisible Grills",
          url: SITE_URL,
          telephone: `+91${PHONE}`,
        },
      },
    })),
  };

  return (
    <>
      <Helmet>
        <title>
          Safety Net Services in Bangalore | AST Safety Nets & Invisible Grills
        </title>

        <meta
          name="description"
          content="Explore AST Safety Nets services in Bangalore including balcony safety nets, pigeon nets, invisible grills, children safety nets, bird protection nets, duct nets, construction nets, cricket nets and more."
        />

        <meta
          name="keywords"
          content="safety net services Bangalore, balcony safety nets Bangalore, pigeon safety nets Bangalore, invisible grills Bangalore, children safety nets Bangalore, bird protection nets Bangalore, construction safety nets Bangalore, cricket nets Bangalore"
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href={`${SITE_URL}/services`}
        />

        <meta
          property="og:title"
          content="Safety Net Services in Bangalore | AST Safety Nets"
        />

        <meta
          property="og:description"
          content="Professional safety nets and invisible grill installation services in Bangalore for homes, apartments, buildings, industries and sports areas."
        />

        <meta
          property="og:url"
          content={`${SITE_URL}/services`}
        />

        <meta property="og:type" content="website" />

        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bangalore" />

        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>

      <main className="services-page">
        {/* HERO */}

        <section className="services-hero">
          <div className="services-hero-bg">
            <img
              src="/images/staircase-net.webp"
              alt="Safety net services in Bangalore"
              onError={(event) =>
                handleImageError(
                  event,
                  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1900&q=88"
                )
              }
            />

            <div className="services-hero-overlay" />
          </div>

          <div className="services-hero-container">
            <div className="services-hero-content">
              <span className="hero-label">
                OUR SERVICES
              </span>

              <h1>
                Professional Safety Solutions
                <span> For Every Space.</span>
              </h1>

              <p>
                AST Safety Nets & Invisible Grills provides professional
                safety-net, bird-control and invisible-grill installation
                services across Bangalore.
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
                    "Hi AST Safety Nets, I would like to know about your safety net services in Bangalore."
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hero-whatsapp"
                >
                  Get Free Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}

        <section className="services-intro">
          <div className="services-container">
            <div className="intro-heading">
              <span>SAFETY NET SERVICES IN BANGALORE</span>

              <h2>
                Choose The Right
                <strong> Safety Solution.</strong>
              </h2>

              <p>
                Select the service you need and contact AST Safety Nets
                directly on WhatsApp for pricing and installation details.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES GRID */}

        <section className="services-main">
          <div className="services-container">
            <div className="services-grid">
              {services.map((service) => (
                <article
                  className="service-card"
                  key={service.title}
                >
                  <div className="service-image">
                    <img
                      src={service.image}
                      alt={`${service.title} in Bangalore`}
                      loading="lazy"
                      onError={(event) =>
                        handleImageError(
                          event,
                          service.fallback
                        )
                      }
                    />
                  </div>

                  <div className="service-icon-holder">
                    <div className="service-icon">
                      <Icon type={service.icon} />
                    </div>
                  </div>

                  <div className="service-body">
                    <h2>{service.title}</h2>

                    <p>{service.description}</p>

                    <div className="service-actions">
                      <a
                        href={createWhatsAppLink(
                          service.title
                        )}
                        target="_blank"
                        rel="noreferrer"
                        className="service-whatsapp"
                      >
                        <span>
                          <Icon type="whatsapp" />
                        </span>

                        Enquire on WhatsApp
                      </a>

                      <a
                        href={`tel:+91${PHONE}`}
                        className="service-call"
                        aria-label={`Call about ${service.title}`}
                      >
                        <Icon type="phone" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}

        <section className="service-cta-wrapper">
          <div className="service-cta">
            <div className="cta-content">
              <span>
                NEED HELP CHOOSING A SERVICE?
              </span>

              <h2>
                Tell Us What You Need.
              </h2>

              <p>
                Share your balcony, window, building, bird-control or
                other safety requirement and our team can help you
                choose a suitable solution.
              </p>
            </div>

            <div className="cta-buttons">
              <a
                href={`tel:+91${PHONE}`}
                className="cta-call"
              >
                Call +91 {PHONE}
              </a>

              <a
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                  "Hi AST Safety Nets, I need help choosing the right safety net or invisible grill solution in Bangalore."
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

        .services-page {
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

        .services-container {
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

        /* =============================================
           HERO
        ============================================= */

        .services-hero {
          position: relative;

          min-height: 520px;

          overflow: hidden;
        }

        .services-hero-bg {
          position: absolute;
          inset: 0;
        }

        .services-hero-bg img {
          width: 100%;
          height: 100%;

          object-fit: cover;
          object-position: center;
        }

        .services-hero-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              90deg,
              rgba(5, 27, 65, 0.96) 0%,
              rgba(5, 40, 86, 0.88) 40%,
              rgba(5, 39, 83, 0.35) 75%,
              rgba(5, 39, 83, 0.1) 100%
            );
        }

        .services-hero-container {
          position: relative;
          z-index: 3;

          width:
            min(1380px, calc(100% - 60px));

          min-height: 520px;

          margin: 0 auto;

          display: flex;
          align-items: center;
        }

        .services-hero-content {
          width: min(700px, 60%);
        }

        .hero-label {
          display: inline-flex;
          align-items: center;

          gap: 11px;

          color: #52bbfa;

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

        .services-hero h1 {
          margin: 19px 0 0;

          color: #ffffff;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size:
            clamp(47px, 5vw, 71px);

          line-height: 1.04;

          letter-spacing: -2.4px;
        }

        .services-hero h1 span {
          display: block;

          color: #60c3ff;
        }

        .services-hero-content > p {
          max-width: 640px;

          margin: 22px 0 27px;

          color:
            rgba(237, 247, 255, 0.82);

          font-size: 15px;

          line-height: 1.8;
        }

        .hero-actions {
          display: flex;

          gap: 12px;

          flex-wrap: wrap;
        }

        .hero-call,
        .hero-whatsapp {
          min-height: 53px;

          padding: 0 22px;

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

        .hero-call span {
          width: 18px;
          height: 18px;
        }

        .hero-whatsapp {
          color: #ffffff;

          border:
            1px solid rgba(255,255,255,.55);

          background:
            rgba(255,255,255,.06);
        }

        /* =============================================
           INTRO
        ============================================= */

        .services-intro {
          padding: 68px 0 42px;

          background:
            linear-gradient(
              180deg,
              #ffffff,
              #f8fbff
            );
        }

        .intro-heading {
          width: min(800px, 100%);

          margin: 0 auto;

          text-align: center;
        }

        .intro-heading > span {
          color: #0870cf;

          font-size: 10px;
          font-weight: 800;

          letter-spacing: 2.7px;
        }

        .intro-heading h2 {
          margin: 15px 0 0;

          color: #071e4b;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size:
            clamp(38px, 4vw, 54px);

          line-height: 1.08;

          letter-spacing: -1.8px;
        }

        .intro-heading h2 strong {
          color: #0870cf;

          font-weight: inherit;
        }

        .intro-heading p {
          width: min(650px, 100%);

          margin: 17px auto 0;

          color: #6a7a8f;

          font-size: 14px;

          line-height: 1.75;
        }

        /* =============================================
           SERVICES
        ============================================= */

        .services-main {
          padding: 10px 0 75px;

          background:
            linear-gradient(
              180deg,
              #f8fbff,
              #ffffff
            );
        }

        .services-grid {
          display: grid;

          grid-template-columns:
            repeat(3, minmax(0, 1fr));

          gap: 24px;
        }

        .service-card {
          position: relative;

          overflow: visible;

          display: flex;
          flex-direction: column;

          border:
            1px solid #deebf6;

          border-radius: 21px;

          background: #ffffff;

          box-shadow:
            0 13px 34px rgba(7, 42, 84, 0.055);

          transition:
            transform .35s ease,
            box-shadow .35s ease,
            border-color .35s ease;
        }

        .service-card:hover {
          transform: translateY(-7px);

          border-color: #b8ddff;

          box-shadow:
            0 23px 50px rgba(7, 42, 84, 0.11);
        }

        .service-image {
          width: 100%;
          height: 240px;

          overflow: hidden;

          border-radius:
            20px 20px 0 0;

          background: #edf6fd;
        }

        .service-image img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
          object-position: center;

          transition:
            transform .65s ease;
        }

        .service-card:hover
        .service-image img {
          transform: scale(1.05);
        }

        /* ICON HALF IMAGE / HALF CONTENT */

        .service-icon-holder {
          position: relative;

          height: 0;

          z-index: 6;
        }

        .service-icon {
          position: absolute;

          top: 0;
          left: 50%;

          width: 64px;
          height: 64px;

          padding: 15px;

          display: flex;
          justify-content: center;
          align-items: center;

          border:
            5px solid #ffffff;

          border-radius: 50%;

          color: #ffffff;

          background:
            linear-gradient(
              135deg,
              #0878d8,
              #0750b1
            );

          box-shadow:
            0 9px 25px rgba(7, 85, 181, 0.22);

          transform:
            translate(-50%, -50%);

          transition:
            transform .3s ease;
        }

        .service-card:hover
        .service-icon {
          transform:
            translate(-50%, -55%);
        }

        .service-body {
          flex: 1;

          padding:
            48px 24px 24px;

          display: flex;
          flex-direction: column;
          align-items: center;

          text-align: center;
        }

        .service-body h2 {
          margin: 0;

          color: #092450;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 20px;

          line-height: 1.3;
        }

        .service-body > p {
          flex: 1;

          width: min(350px, 100%);

          margin: 12px auto 22px;

          color: #6c7b8f;

          font-size: 13px;

          line-height: 1.78;
        }

        /* =============================================
           BUTTONS
        ============================================= */

        .service-actions {
          width: 100%;

          display: grid;

          grid-template-columns:
            1fr 48px;

          gap: 9px;
        }

        .service-whatsapp {
          min-height: 48px;

          padding: 0 15px;

          display: inline-flex;

          align-items: center;
          justify-content: center;

          gap: 8px;

          border-radius: 10px;

          color: #ffffff;

          text-decoration: none;

          font-size: 12px;
          font-weight: 800;

          background:
            linear-gradient(
              135deg,
              #0878d8,
              #0750b1
            );

          transition:
            transform .25s ease,
            box-shadow .25s ease;
        }

        .service-whatsapp:hover {
          transform: translateY(-2px);

          box-shadow:
            0 10px 24px rgba(7, 80, 172, 0.18);
        }

        .service-whatsapp span {
          width: 18px;
          height: 18px;
        }

        .service-call {
          width: 48px;
          height: 48px;

          padding: 13px;

          display: flex;

          align-items: center;
          justify-content: center;

          border:
            1px solid #cfe5fa;

          border-radius: 10px;

          color: #0870cf;

          background: #eef8ff;

          transition:
            color .25s ease,
            background .25s ease;
        }

        .service-call:hover {
          color: white;

          background: #0870cf;
        }

        /* =============================================
           CTA
        ============================================= */

        .service-cta-wrapper {
          padding: 0 22px 38px;
        }

        .service-cta {
          width: min(1280px, 100%);

          min-height: 205px;

          margin: auto;

          padding: 36px 42px;

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

        .cta-content > span {
          color:
            rgba(255,255,255,.75);

          font-size: 9px;
          font-weight: 800;

          letter-spacing: 2px;
        }

        .cta-content h2 {
          margin: 8px 0;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 35px;
        }

        .cta-content p {
          max-width: 650px;

          margin: 0;

          color:
            rgba(255,255,255,.78);

          font-size: 13px;

          line-height: 1.7;
        }

        .cta-buttons {
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
            1px solid rgba(255,255,255,.55);

          background:
            rgba(255,255,255,.06);
        }

        /* =============================================
           TABLET
        ============================================= */

        @media(max-width: 1050px) {
          .services-grid {
            grid-template-columns:
              repeat(2, minmax(0,1fr));
          }

          .service-cta {
            flex-direction: column;

            align-items: flex-start;
          }
        }

        /* =============================================
           MOBILE
        ============================================= */

        @media(max-width: 700px) {
          .services-container {
            width:
              calc(100% - 30px);
          }

          .services-hero {
            min-height: 500px;
          }

          .services-hero-container {
            width:
              calc(100% - 30px);

            min-height: 500px;
          }

          .services-hero-content {
            width: 100%;
          }

          .services-hero-overlay {
            background:
              linear-gradient(
                180deg,
                rgba(5,27,65,.9),
                rgba(5,39,83,.74)
              );
          }

          .services-hero h1 {
            font-size: 42px;

            letter-spacing: -1.4px;
          }

          .services-hero-content > p {
            font-size: 14px;
          }

          .services-intro {
            padding:
              55px 0 34px;
          }

          .intro-heading h2 {
            font-size: 34px;
          }

          .services-main {
            padding:
              5px 0 55px;
          }

          .services-grid {
            grid-template-columns: 1fr;

            gap: 20px;
          }

          .service-image {
            height: 245px;
          }

          .service-icon {
            width: 61px;
            height: 61px;

            padding: 14px;
          }

          .service-body {
            padding:
              45px 19px 21px;
          }

          .service-body h2 {
            font-size: 19px;
          }

          .service-body > p {
            font-size: 13px;
          }

          .service-cta-wrapper {
            padding:
              0 11px 25px;
          }

          .service-cta {
            padding:
              28px 20px;

            border-radius: 20px;
          }

          .cta-content h2 {
            font-size: 30px;
          }

          .cta-buttons {
            width: 100%;

            flex-direction: column;
          }

          .cta-call,
          .cta-whatsapp {
            width: 100%;
          }
        }

        @media(max-width: 380px) {
          .hero-actions {
            flex-direction: column;
          }

          .hero-call,
          .hero-whatsapp {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}

export default Services;