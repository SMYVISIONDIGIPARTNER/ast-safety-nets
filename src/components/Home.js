import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const PHONE = "9844771499";
const WHATSAPP = "919844771499";

const SITE_URL = "https://astsafetynetsinvisiblegrills.com";

/* =========================================================
   ICON
========================================================= */

function Icon({ type }) {
  const paths = {
    shield: (
      <>
        <path d="M12 3 20 6v5c0 5-3.3 9.3-8 11-4.7-1.7-8-6-8-11V6l8-3Z" />
        <path d="m8.5 12 2.2 2.2 4.8-4.8" />
      </>
    ),

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

    sport: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m7 6 3 4-2 5-4 1M17 6l-3 4 2 5 4 1M10 10h4" />
      </>
    ),

    tools: (
      <>
        <path d="m14 6 4 4M5 19 15 9M15 5l4 4M3 21l4-4" />
      </>
    ),

    quality: (
      <>
        <path d="m12 3 3 2h4v4l2 3-2 3v4h-4l-3 2-3-2H5v-4l-2-3 2-3V5h4l3-2Z" />
        <path d="m8 12 2.5 2.5L16 9" />
      </>
    ),

    custom: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 7v10M7 12h10" />
      </>
    ),

    clean: (
      <>
        <path d="M8 20h8M9 20l1-12h4l1 12M10 8l2-5 2 5" />
      </>
    ),

    price: (
      <>
        <path d="M7 5h10M7 9h10M8 5c6 0 7 7 0 7H7l8 8" />
      </>
    ),

    phone: (
      <>
        <path d="M5 3h4l2 5-2.5 2c1.5 3.2 3.6 5.3 6.8 6.8l2-2.5 5 2v4c0 1-.8 1.7-1.8 1.7C10.3 22 2 13.7 2 3.5 2 2.7 2.7 2 3.5 2" />
      </>
    ),

    arrow: (
      <>
        <path d="M5 12h14M14 7l5 5-5 5" />
      </>
    ),

    check: (
      <>
        <path d="m5 12 4 4 10-10" />
      </>
    ),

    whatsapp: (
      <>
        <path d="M20 11.5A8 8 0 0 1 8.2 18.6L4 20l1.4-4.1A8 8 0 1 1 20 11.5Z" />
        <path d="M8.5 8.5c.5 3 2 4.5 5 5" />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {paths[type]}
    </svg>
  );
}

/* =========================================================
   COUNTER
========================================================= */

function Counter({ end, suffix = "" }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const element = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;

        started.current = true;

        const duration = 1800;
        const start = performance.now();

        const animate = (time) => {
          const progress = Math.min((time - start) / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);

          setValue(Math.floor(end * ease));

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setValue(end);
          }
        };

        requestAnimationFrame(animate);
      },
      {
        threshold: 0.35,
      }
    );

    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [end]);

  return (
    <strong ref={ref}>
      {value}
      {suffix}
    </strong>
  );
}

/* =========================================================
   SECTION LABEL
========================================================= */

function SectionLabel({ children, center = false, light = false }) {
  return (
    <div
      className={`section-label ${
        center ? "section-label-center" : ""
      } ${light ? "section-label-light" : ""}`}
    >
      {children}
    </div>
  );
}

/* =========================================================
   HOME
========================================================= */

function Home() {
  const [slide, setSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  const heroSlides = [
    {
      image: "/images/balcony-net.webp",

      fallback:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1900&q=88",

      label: "SAFETY • SECURITY • PEACE OF MIND",

      title: "Safer Spaces.",

      highlight: "Happier Lifestyles.",

      description:
        "Professional safety nets and invisible grills in Bangalore for balconies, homes, apartments and commercial spaces.",
    },

    {
      image: "/images/pigeon-net.webp",

      fallback:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1900&q=88",

      label: "PREMIUM SAFETY NETS IN BANGALORE",

      title: "Modern Safety.",

      highlight: "Clearer Views.",

      description:
        "Reliable balcony safety nets and invisible grills designed to improve protection without blocking natural light, ventilation or your outside view.",
    },

    {
      image: "/images/staircase-net.webp",

      fallback:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1900&q=88",

      label: "PROFESSIONAL INSTALLATION",

      title: "Protection Built",

      highlight: "Around Your Family.",

      description:
        "Customized safety solutions for balconies, children, pigeons, pets, terraces, ducts, buildings and sports areas.",
    },
  ];

  const services = [
    {
      title: "Balcony Safety Nets",

      image: "/images/balcony-net.webp",

      fallback:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",

      icon: "balcony",

      description:
        "Strong balcony safety nets for apartments and homes, designed to improve safety for children, pets and family members.",
    },

    {
      title: "Balcony Invisible Grills",

      image: "/images/invisible-grill.webp",

      fallback:
        "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1000&q=85",

      icon: "grill",

      description:
        "Premium stainless-steel invisible grills that provide modern safety while preserving your balcony view.",
    },

    {
      title: "Pigeon Safety Nets",

      image: "/images/pigeon-net.webp",

      fallback:
        "https://images.unsplash.com/photo-1551522435-a13afa10f103?auto=format&fit=crop&w=1000&q=85",

      icon: "bird",

      description:
        "Professional pigeon safety nets that help protect balconies, windows and open areas from unwanted bird entry.",
    },

    {
      title: "Children Safety Nets",

      image: "/images/kids-invisible-grill.webp",

      fallback:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85",

      icon: "child",

      description:
        "Protective safety-net installation for balconies, windows and staircases to create safer spaces for children.",
    },

    {
      title: "Duct Area Safety Nets",

      image: "/images/duct-net.webp",

      fallback:
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1000&q=85",

      icon: "grill",

      description:
        "Secure duct-area openings while maintaining airflow and helping prevent birds, debris and pests.",
    },

    {
      title: "Cricket Practice Nets",

      image: "/images/cricket-net.webp",

      fallback:
        "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1000&q=85",

      icon: "sport",

      description:
        "High-strength cricket practice nets for academies, schools, apartments and professional training areas.",
    },

    {
      title: "Building Safety Nets",

      image: "/images/building-net.webp",

      fallback:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85",

      icon: "home",

      description:
        "Professional building safety-net installation for residential, commercial and high-rise properties.",
    },
    {
      title: "Cricket Practice Nets",

      image: "/images/cricket-net.webp",
      fallback:
        "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1000&q=85",
        icon:"home",
      description:
        "Cricket Practice Nets create a professional training environment for schools, academies, clubs and residential spaces while helping contain powerful shots safely.",
    },

    {
      title: "Cloth Hangers",
      
      image: "/images/cloth-hanger.webp",
      fallback:
        "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1000&q=85",

        icon: "grill",

      description:
        "Cloth Hangers provide a practical and space-saving drying solution for homes and apartments with strong load capacity, smooth operation and durable rust-resistant materials.",
    },
  ];

  const whyChoose = [
    {
      icon: "shield",
      title: "Reliable Protection",
      description:
        "Safety solutions designed to provide dependable protection for homes, apartments and families.",
    },

    {
      icon: "tools",
      title: "Expert Installation",
      description:
        "Professional fitting with attention to alignment, strength, durability and neat finishing.",
    },

    {
      icon: "quality",
      title: "Premium Materials",
      description:
        "Quality materials selected for long-term protection and outdoor weather conditions.",
    },

    {
      icon: "custom",
      title: "Custom Fitting",
      description:
        "Every installation can be planned according to the exact dimensions and design of your space.",
    },

    {
      icon: "clean",
      title: "Clean Finish",
      description:
        "Safety installations completed neatly while maintaining the appearance of your property.",
    },

    {
      icon: "price",
      title: "Affordable Pricing",
      description:
        "Professional safety solutions with practical recommendations and competitive pricing.",
    },
  ];

  const testimonials = [
    {
      name: "Priya S",

      text:
        "Excellent safety-net service. Installation was professional, neat and completed quickly.",
    },

    {
      name: "Shankar",

      text:
        "Very good quality materials and clean installation. The team completed everything on time.",
    },

    {
      name: "Sabina",

      text:
        "We are very satisfied with the balcony safety solution. Professional workmanship and good pricing.",
    },

    {
      name: "Arun Kumar",

      text:
        "The invisible grill looks neat and does not disturb the outside view. Excellent service.",
    },

    {
      name: "Deepa",

      text:
        "We installed children safety nets for our balcony. The work was secure and finished neatly.",
    },

    {
      name: "Ramesh",

      text:
        "Good service, excellent fitting and responsive team. I recommend AST Safety Nets.",
    },
  ];

  const faqs = [
    {
      question: "Which safety-net services do you provide in Bangalore?",

      answer:
        "AST Safety Nets provides balcony safety nets, invisible grills, pigeon safety nets, children safety nets, terrace nets, duct-area nets, cricket nets, building safety nets and customized safety solutions in Bangalore.",
    },

    {
      question: "Can safety nets be customized for my balcony?",

      answer:
        "Yes. Safety nets can be customized according to your balcony size, window layout, terrace area, duct opening or other property requirements.",
    },

    {
      question: "Do you provide safety-net installation in Bangalore?",

      answer:
        "Yes. AST Safety Nets provides professional safety-net and invisible-grill installation services across Bangalore.",
    },

    {
      question: "Do invisible grills block the outside view?",

      answer:
        "Invisible grills are designed to provide safety while maintaining natural light, ventilation and clear outside visibility.",
    },

    {
      question: "Are safety nets suitable for children and pets?",

      answer:
        "Yes. Dedicated child and pet safety nets can be installed for balconies, windows, staircases and other open areas.",
    },

    {
      question: "How can I get a safety-net quotation?",

      answer:
        `Call AST Safety Nets on +91 ${PHONE} or send your requirement through WhatsApp for quotation assistance.`,
    },
  ];

  /* =========================================================
     SEO SCHEMAS
  ========================================================= */

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",

    name: "AST Safety Nets & Invisible Grills",

    url: SITE_URL,

    telephone: `+91${PHONE}`,

    description:
      "AST Safety Nets & Invisible Grills provides balcony safety nets, pigeon nets, children safety nets, invisible grills, terrace nets, duct nets, building nets and cricket practice nets in Bangalore.",

    areaServed: [
      {
        "@type": "City",
        name: "Bangalore",
      },
      {
        "@type": "City",
        name: "Bengaluru",
      },
    ],

    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: "12.9716",
      longitude: "77.5946",
    },

    priceRange: "₹₹",

    contactPoint: {
      "@type": "ContactPoint",

      telephone: `+91${PHONE}`,

      contactType: "customer service",

      areaServed: "IN",

      availableLanguage: ["English", "Kannada", "Hindi"],
    },
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

        provider: {
          "@type": "LocalBusiness",
          name: "AST Safety Nets & Invisible Grills",
        },

        areaServed: {
          "@type": "City",
          name: "Bangalore",
        },
      },
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: faqs.map((faq) => ({
      "@type": "Question",

      name: faq.question,

      acceptedAnswer: {
        "@type": "Answer",

        text: faq.answer,
      },
    })),
  };

  /* =========================================================
     HERO AUTOPLAY
  ========================================================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((current) =>
        current === heroSlides.length - 1 ? 0 : current + 1
      );
    }, 5500);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const imageFallback = (event, fallback) => {
    if (event.currentTarget.dataset.fallback === "true") return;

    event.currentTarget.dataset.fallback = "true";
    event.currentTarget.src = fallback;
  };

  const whatsappServiceURL = (service) => {
    const message = `Hi AST Safety Nets, I am interested in ${service}. Please share pricing and installation details for Bangalore.`;

    return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
      message
    )}`;
  };

  return (
    <>
      {/* =====================================================
          SEO
      ===================================================== */}

      <Helmet>
        <title>
          Safety Nets in Bangalore | Invisible Grills | AST Safety Nets
        </title>

        <meta
          name="description"
          content="AST Safety Nets provides balcony safety nets, invisible grills, pigeon nets, children safety nets, terrace nets, duct nets, cricket nets and building safety nets in Bangalore."
        />

        <meta
          name="keywords"
          content="safety nets in Bangalore, safety nets Bangalore, balcony safety nets Bangalore, invisible grills Bangalore, pigeon safety nets Bangalore, children safety nets Bangalore, balcony invisible grills Bangalore, cricket nets Bangalore, terrace safety nets Bangalore, duct area safety nets Bangalore, AST Safety Nets"
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href={SITE_URL} />

        <meta
          property="og:title"
          content="AST Safety Nets & Invisible Grills in Bangalore"
        />

        <meta
          property="og:description"
          content="Professional balcony safety nets, invisible grills, pigeon nets, children safety nets and customized safety solutions in Bangalore."
        />

        <meta property="og:url" content={SITE_URL} />

        <meta property="og:type" content="website" />

        <meta property="og:site_name" content="AST Safety Nets" />

        <meta
          property="og:image"
          content={`${SITE_URL}/logo.png`}
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Safety Nets & Invisible Grills in Bangalore | AST"
        />

        <meta
          name="twitter:description"
          content="Professional safety net and invisible grill installation services in Bangalore."
        />

        <meta name="geo.region" content="IN-KA" />

        <meta name="geo.placename" content="Bangalore" />

        <meta
          name="geo.position"
          content="12.9716;77.5946"
        />

        <meta
          name="ICBM"
          content="12.9716, 77.5946"
        />

        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <main className="home">
        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="hero">
          {heroSlides.map((item, index) => (
            <div
              key={index}
              className={`hero-slide ${
                slide === index ? "active" : ""
              }`}
            >
              <img
                src={item.image}
                alt="Safety nets and invisible grills in Bangalore"
                onError={(event) =>
                  imageFallback(event, item.fallback)
                }
              />

              <div className="hero-overlay" />
            </div>
          ))}

          <div className="hero-container">
            <div
              className="hero-content"
              key={`slide-${slide}`}
            >
              <div className="hero-label">
                <i />
                {heroSlides[slide].label}
              </div>

              <h1>
                {heroSlides[slide].title}

                <span>
                  {heroSlides[slide].highlight}
                </span>
              </h1>

              <p>
                {heroSlides[slide].description}
              </p>

              <div className="hero-buttons">
                <Link
                  to="/contact"
                  className="blue-button"
                >
                  Get a Free Quote

                  <i>
                    <Icon type="arrow" />
                  </i>
                </Link>

                <Link
                  to="/services"
                  className="border-button"
                >
                  Our Services
                </Link>
              </div>

              <div className="hero-benefits">
                <div>
                  <span>
                    <Icon type="shield" />
                  </span>

                  <p>
                    <strong>Reliable</strong>
                    Protection
                  </p>
                </div>

                <div>
                  <span>
                    <Icon type="quality" />
                  </span>

                  <p>
                    <strong>Premium</strong>
                    Materials
                  </p>
                </div>

                <div>
                  <span>
                    <Icon type="tools" />
                  </span>

                  <p>
                    <strong>Expert</strong>
                    Installation
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-navigation">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                aria-label={`Hero slide ${index + 1}`}
                className={
                  slide === index ? "active" : ""
                }
                onClick={() => setSlide(index)}
              />
            ))}
          </div>
        </section>

        {/* =====================================================
            QUICK SERVICES
        ===================================================== */}

        <div className="quick-holder">
          <div className="quick-services">
            {[
              ["grill", "Invisible Grills"],
              ["balcony", "Balcony Nets"],
              ["bird", "Pigeon Nets"],
              ["child", "Children Nets"],
              ["home", "Terrace Nets"],
              ["sport", "Sports Nets"],
            ].map(([icon, text]) => (
              <div key={text}>
                <span>
                  <Icon type={icon} />
                </span>

                <strong>{text}</strong>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            NEW ABOUT - NO EXTRA IMAGE
        ===================================================== */}

        <section className="section premium-about">
          <div className="container">
            <div className="about-center">
              <SectionLabel center>
                ABOUT AST SAFETY NETS
              </SectionLabel>

              <h2>
                Protection Designed
                <span> Around You.</span>
              </h2>

              <p className="about-lead">
                AST Safety Nets provides professional safety-net and
                invisible-grill installation in Bangalore for homes,
                apartments, balconies, commercial properties and sports
                spaces.
              </p>

              <p className="about-subtext">
                Every installation is planned around the actual space so
                you get reliable protection, clean finishing and a solution
                that works naturally with your property.
              </p>

              <div className="about-features">
                <div>
                  <span>
                    <Icon type="quality" />
                  </span>

                  <strong>Premium Materials</strong>
                </div>

                <div>
                  <span>
                    <Icon type="tools" />
                  </span>

                  <strong>Expert Installation</strong>
                </div>

                <div>
                  <span>
                    <Icon type="custom" />
                  </span>

                  <strong>Custom Fitting</strong>
                </div>

                <div>
                  <span>
                    <Icon type="clean" />
                  </span>

                  <strong>Neat Finish</strong>
                </div>
              </div>

              <Link
                to="/about"
                className="premium-about-link"
              >
                Discover AST Safety Nets

                <i>
                  <Icon type="arrow" />
                </i>
              </Link>
            </div>
          </div>
        </section>

        {/* =====================================================
            COUNTERS
        ===================================================== */}

        <section className="counter-area">
          <div className="counter-grid">
            <div>
              <Counter end={85} suffix="K+" />

              <span>Projects Completed</span>
            </div>

            <div>
              <Counter end={92} suffix="K+" />

              <span>Happy Customers</span>
            </div>

            <div>
              <Counter end={19} suffix="+" />

              <span>Safety Solutions</span>
            </div>

            <div>
              <Counter end={25} suffix="+" />

              <span>Years Experience</span>
            </div>
          </div>
        </section>

        {/* =====================================================
            SERVICES
        ===================================================== */}

        <section className="section services">
          <div className="container">
            <div className="section-heading">
              <SectionLabel center>
                SAFETY NET SERVICES IN BANGALORE
              </SectionLabel>

              <h2>
                Safety Solutions For
                <span> Every Space.</span>
              </h2>

              <p>
                Choose the safety solution you need and contact AST Safety
                Nets directly on WhatsApp for installation details and
                pricing in Bangalore.
              </p>
            </div>

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
                        imageFallback(
                          event,
                          service.fallback
                        )
                      }
                    />
                  </div>

                  {/* HALF ON IMAGE / HALF ON BODY */}
                  <div className="service-icon-wrap">
                    <div className="service-icon">
                      <Icon type={service.icon} />
                    </div>
                  </div>

                  <div className="service-body">
                    <h3>{service.title}</h3>

                    <p>{service.description}</p>

                    <a
                      href={whatsappServiceURL(
                        service.title
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="service-whatsapp"
                      aria-label={`Enquire about ${service.title} on WhatsApp`}
                    >
                      <i>
                        <Icon type="whatsapp" />
                      </i>

                      Enquire on WhatsApp
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            WHY CHOOSE
        ===================================================== */}

        <section className="section why">
          <div className="container">
            <div className="section-heading">
              <SectionLabel center>
                WHY CHOOSE AST
              </SectionLabel>

              <h2>
                Better Materials.
                <span> Better Protection.</span>
              </h2>

              <p>
                Professional safety-net installation with a focus on
                strength, clean workmanship and dependable support.
              </p>
            </div>

            <div className="why-grid">
              {whyChoose.map((item) => (
                <article
                  className="why-card"
                  key={item.title}
                >
                  <div className="why-icon">
                    <Icon type={item.icon} />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="cta-wrapper">
          <div className="cta">
            <div className="cta-circle one" />
            <div className="cta-circle two" />

            <div className="cta-content">
              <SectionLabel center light>
                SAFETY NET INSTALLATION IN BANGALORE
              </SectionLabel>

              <h2>
                Make Your Space
                <br />
                Safer Today.
              </h2>

              <p>
                Contact AST Safety Nets for professional installation,
                customized solutions and quotation assistance.
              </p>

              <div className="cta-buttons">
                <a
                  href={`tel:+91${PHONE}`}
                  className="cta-call"
                >
                  <i>
                    <Icon type="phone" />
                  </i>

                  +91 {PHONE}
                </a>

                <a
                  href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                    "Hi AST Safety Nets, I need a quotation for safety net installation in Bangalore."
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="cta-whatsapp"
                >
                  Get Quote on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            TESTIMONIALS
        ===================================================== */}

        <section className="section testimonials">
          <div className="container">
            <div className="section-heading">
              <SectionLabel center>
                TESTIMONIALS
              </SectionLabel>

              <h2>
                What Our Customers
                <span> Say.</span>
              </h2>
            </div>
          </div>

          <div className="marquee-window">
            <div className="marquee-track">
              {[...testimonials, ...testimonials].map(
                (testimonial, index) => (
                  <article
                    className="testimonial-card"
                    key={`${testimonial.name}-${index}`}
                  >
                    <div className="testimonial-header">
                      <div className="avatar">
                        {testimonial.name.charAt(0)}
                      </div>

                      <div>
                        <h3>
                          {testimonial.name}
                        </h3>

                        <span>
                          Verified Customer
                        </span>
                      </div>

                      <strong>“</strong>
                    </div>

                    <div className="stars">
                      ★★★★★
                    </div>

                    <p>{testimonial.text}</p>
                  </article>
                )
              )}
            </div>
          </div>
        </section>

        {/* =====================================================
            FAQ
        ===================================================== */}

        <section className="section faq">
          <div className="container">
            <div className="faq-intro">
              <div>
                <SectionLabel>
                  FAQ'S
                </SectionLabel>

                <h2>
                  Frequently Asked
                  <span> Questions</span>
                </h2>

                <p>
                  Find quick answers about our safety-net products,
                  customization and installation services.
                </p>
              </div>

              <div className="faq-contact">
                <div className="faq-question-mark">
                  ?
                </div>

                <div>
                  <small>
                    Still have questions?
                  </small>

                  <strong>
                    Speak with our team
                  </strong>

                  <a href={`tel:+91${PHONE}`}>
                    +91 {PHONE}
                  </a>
                </div>

                <span className="faq-phone">
                  <Icon type="phone" />
                </span>
              </div>
            </div>

            <div className="faq-list">
              {faqs.map((item, index) => {
                const active =
                  openFaq === index;

                return (
                  <div
                    className={`faq-item ${
                      active ? "active" : ""
                    }`}
                    key={item.question}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenFaq(
                          active ? -1 : index
                        )
                      }
                    >
                      <span>
                        {item.question}
                      </span>

                      <i>
                        {active ? "−" : "+"}
                      </i>
                    </button>

                    <div className="faq-answer">
                      <div>
                        <p>
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <style>{`
        /* ===================================================
           GLOBAL
        =================================================== */

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        html,
        body {
          margin: 0;
          padding: 0;
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
        }

        .home {
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

        .container {
          width:
            min(1280px, calc(100% - 44px));

          margin: 0 auto;
        }

        /*
          REDUCED SECTION SPACING
        */

        .section {
          padding: 72px 0;
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

        /* ===================================================
           COMMON
        =================================================== */

        .section-label {
          display: flex;
          align-items: center;

          gap: 10px;

          margin-bottom: 15px;

          color: #0870d0;

          font-size: 11px;
          font-weight: 800;

          letter-spacing: 2.7px;
        }

        .section-label::before {
          content: "";

          width: 28px;
          height: 2px;

          background: currentColor;
        }

        .section-label-center {
          justify-content: center;
        }

        .section-label-center::before {
          display: none;
        }

        .section-label-light {
          color:
            rgba(255,255,255,.82);
        }

        .section-heading {
          width:
            min(770px, 100%);

          margin:
            0 auto 42px;

          text-align: center;
        }

        .section-heading h2,
        .faq-intro h2 {
          margin: 0;

          color: #061c48;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size:
            clamp(38px, 4vw, 54px);

          font-weight: 700;

          line-height: 1.08;

          letter-spacing: -1.8px;
        }

        .section-heading h2 span,
        .faq-intro h2 span {
          color: #0870cf;
        }

        .section-heading > p {
          width:
            min(650px,100%);

          margin:
            17px auto 0;

          color: #69798d;

          font-size: 14px;
          line-height: 1.75;
        }

        /* ===================================================
           BUTTONS
        =================================================== */

        .blue-button,
        .border-button {
          min-height: 56px;

          padding: 0 26px;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 13px;

          border-radius: 10px;

          text-decoration: none;

          font-size: 14px;
          font-weight: 800;

          transition: .3s ease;
        }

        .blue-button {
          color: white;

          background:
            linear-gradient(
              135deg,
              #0878d8,
              #0751b1
            );

          box-shadow:
            0 12px 28px
            rgba(7,89,189,.20);
        }

        .blue-button i {
          width: 18px;
          height: 18px;
        }

        .blue-button:hover {
          transform:
            translateY(-3px);
        }

        .border-button {
          color: #075ab7;

          border:
            1.5px solid #0870cf;

          background:
            rgba(255,255,255,.65);
        }

        /* ===================================================
           HERO
        =================================================== */

        .hero {
          position: relative;

          height:
            calc(100vh - 104px);

          min-height: 690px;
          max-height: 860px;

          overflow: hidden;

          background: #eaf5ff;
        }

        .hero-slide {
          position: absolute;
          inset: 0;

          opacity: 0;

          transform: scale(1.05);

          transition:
            opacity 1s ease,
            transform 6.5s ease;
        }

        .hero-slide.active {
          opacity: 1;

          transform: scale(1);
        }

        .hero-slide img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              90deg,
              rgba(247,251,255,.99) 0%,
              rgba(247,251,255,.95) 28%,
              rgba(247,251,255,.77) 45%,
              rgba(247,251,255,.08) 74%
            );
        }

        .hero-container {
          position: relative;
          z-index: 3;

          width:
            min(1430px, calc(100% - 70px));

          height: 100%;

          margin: auto;

          display: flex;
          align-items: center;
        }

        .hero-content {
          width:
            min(710px,57%);

          animation:
            heroReveal .65s ease;
        }

        @keyframes heroReveal {
          from {
            opacity: 0;

            transform:
              translateY(22px);
          }

          to {
            opacity: 1;

            transform:
              translateY(0);
          }
        }

        .hero-label {
          display: flex;
          align-items: center;

          gap: 11px;

          margin-bottom: 20px;

          color: #0a315f;

          font-size: 11px;
          font-weight: 800;

          letter-spacing: 3.3px;
        }

        .hero-label i {
          width: 35px;
          height: 2px;

          background: #0870cf;
        }

        .hero-content h1 {
          margin: 0;

          color: #061a49;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size:
            clamp(57px,5.6vw,84px);

          font-weight: 700;

          line-height: .99;

          letter-spacing: -3.5px;
        }

        .hero-content h1 span {
          display: block;

          margin-top: 10px;

          color: #0871d1;
        }

        .hero-content > p {
          max-width: 650px;

          margin:
            25px 0 28px;

          color: #294466;

          font-size: 17px;
          line-height: 1.7;
        }

        .hero-buttons {
          display: flex;

          gap: 13px;

          flex-wrap: wrap;
        }

        .hero-benefits {
          margin-top: 35px;

          display: flex;

          gap: 25px;
        }

        .hero-benefits > div {
          display: flex;
          align-items: center;

          gap: 10px;
        }

        .hero-benefits > div > span {
          width: 43px;
          height: 43px;

          flex: 0 0 43px;

          padding: 10px;

          border-radius: 50%;

          color: #0871d1;

          background:
            rgba(255,255,255,.9);

          box-shadow:
            0 7px 20px
            rgba(8,49,100,.08);
        }

        .hero-benefits p {
          margin: 0;

          color: #475c77;

          font-size: 11px;
        }

        .hero-benefits strong {
          display: block;

          color: #091f4a;

          font-size: 12px;
        }

        .hero-navigation {
          position: absolute;

          right: 35px;
          bottom: 30px;

          z-index: 5;

          display: flex;

          gap: 7px;
        }

        .hero-navigation button {
          width: 9px;
          height: 9px;

          padding: 0;

          border: none;
          border-radius: 30px;

          background:
            rgba(8,69,130,.28);

          cursor: pointer;

          transition: .3s ease;
        }

        .hero-navigation button.active {
          width: 30px;

          background: #0871d1;
        }

        /* ===================================================
           QUICK
        =================================================== */

        .quick-holder {
          position: relative;
          z-index: 8;

          margin-top: -32px;

          padding: 0 24px;
        }

        .quick-services {
          width:
            min(1280px,100%);

          margin: auto;

          padding: 21px 18px;

          display: grid;

          grid-template-columns:
            repeat(6,1fr);

          border-radius: 21px;

          background: white;

          box-shadow:
            0 18px 45px
            rgba(8,39,80,.10);
        }

        .quick-services > div {
          min-height: 58px;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 11px;

          border-right:
            1px solid #e2ebf3;
        }

        .quick-services > div:last-child {
          border-right: none;
        }

        .quick-services span {
          width: 30px;
          height: 30px;

          flex: 0 0 30px;

          color: #078bd9;
        }

        .quick-services strong {
          color: #102b55;

          font-size: 12px;
        }

        /* ===================================================
           PREMIUM ABOUT - CENTER
        =================================================== */

        .premium-about {
          padding-top: 85px;
          padding-bottom: 65px;

          background:
            linear-gradient(
              180deg,
              #ffffff,
              #fbfdff
            );
        }

        .about-center {
          width:
            min(960px,100%);

          margin: auto;

          text-align: center;
        }

        .about-center h2 {
          margin: 0;

          color: #061b48;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size:
            clamp(44px,5vw,66px);

          line-height: 1.04;

          letter-spacing: -2px;

          font-weight: 700;
        }

        .about-center h2 span {
          color: #0870cf;
        }

        .about-lead {
          width:
            min(750px,100%);

          margin:
            23px auto 0;

          color: #415b78;

          font-size: 17px;
          line-height: 1.75;
        }

        .about-subtext {
          width:
            min(670px,100%);

          margin:
            12px auto 0;

          color: #77869a;

          font-size: 14px;
          line-height: 1.8;
        }

        .about-features {
          width:
            min(820px,100%);

          margin:
            33px auto 28px;

          display: grid;

          grid-template-columns:
            repeat(4,1fr);

          gap: 13px;
        }

        .about-features > div {
          min-height: 115px;

          padding: 20px 12px;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          gap: 12px;

          border:
            1px solid #deebf7;

          border-radius: 17px;

          background: #ffffff;

          transition:
            transform .3s ease,
            box-shadow .3s ease;
        }

        .about-features > div:hover {
          transform:
            translateY(-5px);

          box-shadow:
            0 14px 35px
            rgba(7,48,94,.07);
        }

        .about-features span {
          width: 45px;
          height: 45px;

          padding: 11px;

          border-radius: 50%;

          color: #0871d1;

          background: #edf7ff;
        }

        .about-features strong {
          color: #0b2852;

          font-size: 12px;
        }

        .premium-about-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 11px;

          color: #0870cf;

          text-decoration: none;

          font-size: 14px;
          font-weight: 800;
        }

        .premium-about-link i {
          width: 18px;
          height: 18px;

          transition:
            transform .25s ease;
        }

        .premium-about-link:hover i {
          transform:
            translateX(5px);
        }

        /* ===================================================
           COUNTER
        =================================================== */

        .counter-area {
          padding:
            0 22px 70px;
        }

        .counter-grid {
          width:
            min(1280px,100%);

          margin: auto;

          padding:
            39px 24px;

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

        .counter-grid > div {
          position: relative;

          text-align: center;
        }

        .counter-grid > div:not(:last-child)::after {
          content: "";

          position: absolute;

          top: 10%;
          right: 0;

          width: 1px;
          height: 80%;

          background:
            rgba(255,255,255,.13);
        }

        .counter-grid strong {
          display: block;

          color: white;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 43px;
        }

        .counter-grid span {
          display: block;

          margin-top: 7px;

          color: #bed9f2;

          font-size: 12px;
        }

        /* ===================================================
           SERVICES
        =================================================== */

        .services {
          background:
            linear-gradient(
              180deg,
              #f5faff,
              #ffffff
            );
        }

        .services-grid {
          display: grid;

          grid-template-columns:
            repeat(3,minmax(0,1fr));

          gap: 23px;
        }

        .service-card {
          position: relative;

          overflow: visible;

          display: flex;
          flex-direction: column;

          border:
            1px solid #ddeaf5;

          border-radius: 21px;

          background: white;

          box-shadow:
            0 12px 32px
            rgba(7,42,84,.055);

          transition:
            transform .35s ease,
            box-shadow .35s ease,
            border-color .35s ease;
        }

        .service-card:hover {
          transform:
            translateY(-7px);

          border-color: #b5dcff;

          box-shadow:
            0 22px 48px
            rgba(7,42,84,.11);
        }

        .service-image {
          width: 100%;
          height: 230px;

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
            transform .6s ease;
        }

        .service-card:hover
        .service-image img {
          transform:
            scale(1.045);
        }

        /*
          ICON HALF ON IMAGE
          HALF ON BODY
        */

        .service-icon-wrap {
          position: relative;

          height: 0;

          z-index: 5;
        }

        .service-icon {
          position: absolute;

          left: 50%;
          top: 0;

          width: 64px;
          height: 64px;

          padding: 15px;

          display: flex;
          align-items: center;
          justify-content: center;

          border:
            5px solid white;

          border-radius: 50%;

          color: white;

          background:
            linear-gradient(
              135deg,
              #0878d8,
              #0750b1
            );

          box-shadow:
            0 9px 24px
            rgba(7,85,181,.22);

          transform:
            translate(-50%,-50%);
        }

        .service-body {
          flex: 1;

          padding:
            47px 24px 25px;

          display: flex;
          flex-direction: column;
          align-items: center;

          text-align: center;
        }

        .service-body h3 {
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

          width:
            min(340px,100%);

          margin:
            12px auto 21px;

          color: #6b7b90;

          font-size: 13px;
          line-height: 1.75;
        }

        .service-whatsapp {
          width: 100%;
          min-height: 48px;

          padding: 0 17px;

          display: inline-flex;
          justify-content: center;
          align-items: center;

          gap: 9px;

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
          transform:
            translateY(-2px);

          box-shadow:
            0 10px 25px
            rgba(7,80,172,.18);
        }

        .service-whatsapp i {
          width: 18px;
          height: 18px;
        }

        /* ===================================================
           WHY
        =================================================== */

        .why {
          padding-top: 68px;

          background: white;
        }

        .why-grid {
          display: grid;

          grid-template-columns:
            repeat(3,1fr);

          gap: 21px;
        }

        .why-card {
          min-height: 235px;

          padding:
            31px 27px;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          border:
            1px solid #e2ecf5;

          border-radius: 20px;

          text-align: center;

          background:
            linear-gradient(
              180deg,
              #ffffff,
              #fbfdff
            );

          transition:
            .3s ease;
        }

        .why-card:hover {
          transform:
            translateY(-6px);

          border-color:
            #bcdffd;

          box-shadow:
            0 19px 42px
            rgba(7,48,96,.08);
        }

        .why-icon {
          width: 65px;
          height: 65px;

          margin:
            0 auto 18px;

          padding: 16px;

          border-radius: 50%;

          color: #0871d1;

          background: #eaf6ff;

          transition:
            .3s ease;
        }

        .why-card:hover
        .why-icon {
          color: white;

          background:
            linear-gradient(
              135deg,
              #0878d8,
              #0750b1
            );
        }

        .why-card h3 {
          margin:
            0 0 9px;

          color: #092450;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 19px;
        }

        .why-card p {
          max-width: 295px;

          margin: auto;

          color: #6c7b90;

          font-size: 13px;
          line-height: 1.7;
        }

        /* ===================================================
           CTA
        =================================================== */

        .cta-wrapper {
          padding:
            5px 22px 20px;
        }

        .cta {
          position: relative;

          width:
            min(1380px,100%);

          min-height: 390px;

          margin: auto;

          overflow: hidden;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 29px;

          text-align: center;

          color: white;

          background:
            linear-gradient(
              120deg,
              #06347c,
              #076ac8 58%,
              #049bdd
            );
        }

        .cta-content {
          position: relative;
          z-index: 3;

          width:
            min(800px,calc(100% - 40px));
        }

        .cta h2 {
          margin: 0;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size:
            clamp(40px,5vw,60px);

          line-height: 1.05;

          letter-spacing: -2px;
        }

        .cta-content > p {
          margin:
            18px auto 27px;

          color:
            rgba(255,255,255,.82);

          font-size: 14px;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;

          gap: 12px;

          flex-wrap: wrap;
        }

        .cta-call,
        .cta-whatsapp {
          min-height: 53px;

          padding: 0 23px;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 9px;

          border-radius: 10px;

          text-decoration: none;

          font-size: 13px;
          font-weight: 800;
        }

        .cta-call {
          color: #075cb9;

          background: white;
        }

        .cta-call i {
          width: 18px;
          height: 18px;
        }

        .cta-whatsapp {
          color: white;

          border:
            1px solid rgba(255,255,255,.65);

          background:
            rgba(255,255,255,.05);
        }

        .cta-circle {
          position: absolute;

          border:
            1px solid
            rgba(255,255,255,.09);

          border-radius: 50%;
        }

        .cta-circle.one {
          width: 470px;
          height: 470px;

          left: -160px;
          top: -230px;
        }

        .cta-circle.two {
          width: 580px;
          height: 580px;

          right: -200px;
          bottom: -360px;
        }

        /* ===================================================
           TESTIMONIALS
        =================================================== */

        .testimonials {
          padding-top: 70px;
          padding-bottom: 65px;

          overflow: hidden;

          background:
            linear-gradient(
              180deg,
              #ffffff,
              #f7fbff
            );
        }

        .marquee-window {
          width: 100%;

          overflow: hidden;

          padding:
            4px 0 25px;
        }

        .marquee-track {
          width: max-content;

          display: flex;

          gap: 20px;

          animation:
            testimonialMarquee
            42s linear infinite;
        }

        @keyframes testimonialMarquee {
          from {
            transform:
              translateX(0);
          }

          to {
            transform:
              translateX(
                calc(-50% - 10px)
              );
          }
        }

        .marquee-window:hover
        .marquee-track {
          animation-play-state:
            paused;
        }

        .testimonial-card {
          width: 380px;

          flex: 0 0 380px;

          padding: 27px;

          border:
            1px solid #e1eaf4;

          border-radius: 19px;

          background: white;

          box-shadow:
            0 13px 33px
            rgba(8,42,82,.06);
        }

        .testimonial-header {
          display: flex;
          align-items: center;

          gap: 11px;
        }

        .avatar {
          width: 46px;
          height: 46px;

          flex: 0 0 46px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          color: white;

          font-weight: 800;

          background:
            linear-gradient(
              135deg,
              #0878d8,
              #05a3dd
            );
        }

        .testimonial-header h3 {
          margin: 0 0 3px;

          color: #0b2854;

          font-size: 14px;
        }

        .testimonial-header span {
          color: #8996a7;

          font-size: 10px;
        }

        .testimonial-header > strong {
          margin-left: auto;

          color: #dceffc;

          font-family:
            Georgia,
            serif;

          font-size: 51px;
          line-height: 1;
        }

        .stars {
          margin:
            15px 0 9px;

          color: #ffb318;

          font-size: 12px;

          letter-spacing: 2px;
        }

        .testimonial-card > p {
          margin: 0;

          color: #68788c;

          font-size: 13px;
          line-height: 1.75;
        }

        /* ===================================================
           FAQ
        =================================================== */

        .faq {
          padding-top: 65px;

          background: white;
        }

        .faq-intro {
          display: grid;

          grid-template-columns:
            1fr .9fr;

          gap: 60px;

          align-items: center;

          margin-bottom: 42px;
        }

        .faq-intro > div:first-child > p {
          max-width: 570px;

          margin:
            18px 0 0;

          color: #6b7b90;

          font-size: 14px;
          line-height: 1.75;
        }

        .faq-contact {
          min-height: 138px;

          padding: 24px 26px;

          display: flex;
          align-items: center;

          gap: 16px;

          border:
            1px solid #d8eaff;

          border-radius: 20px;

          background:
            linear-gradient(
              135deg,
              #eef8ff,
              #f9fcff
            );
        }

        .faq-question-mark {
          width: 55px;
          height: 55px;

          flex: 0 0 55px;

          display: flex;
          justify-content: center;
          align-items: center;

          border-radius: 50%;

          color: white;

          font-size: 23px;
          font-weight: 800;

          background:
            linear-gradient(
              135deg,
              #0878d8,
              #0750b1
            );
        }

        .faq-contact small,
        .faq-contact strong,
        .faq-contact a {
          display: block;
        }

        .faq-contact small {
          margin-bottom: 4px;

          color: #78889c;

          font-size: 11px;
        }

        .faq-contact strong {
          margin-bottom: 6px;

          color: #0e2b56;

          font-size: 16px;
        }

        .faq-contact a {
          color: #0870cf;

          text-decoration: none;

          font-size: 14px;
          font-weight: 800;
        }

        .faq-phone {
          width: 34px;
          height: 34px;

          margin-left: auto;

          padding: 7px;

          color: #0870cf;
        }

        .faq-list {
          width:
            min(1000px,100%);

          margin: auto;

          display: flex;
          flex-direction: column;

          gap: 11px;
        }

        .faq-item {
          overflow: hidden;

          border:
            1px solid #e0eaf4;

          border-radius: 15px;

          background: white;

          transition:
            .3s ease;
        }

        .faq-item.active {
          border-color:
            #b9dcfc;

          box-shadow:
            0 10px 30px
            rgba(7,62,124,.065);
        }

        .faq-item button {
          width: 100%;
          min-height: 70px;

          padding:
            17px 20px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 20px;

          border: none;

          color: #102b57;

          background: transparent;

          text-align: left;

          font-size: 14px;
          font-weight: 800;

          cursor: pointer;
        }

        .faq-item button i {
          width: 34px;
          height: 34px;

          flex: 0 0 34px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          color: #0870cf;

          background: #edf7ff;

          font-size: 21px;
          font-style: normal;
          font-weight: 400;
        }

        .faq-answer {
          display: grid;

          grid-template-rows:
            0fr;

          transition:
            grid-template-rows
            .35s ease;
        }

        .faq-answer > div {
          overflow: hidden;
        }

        .faq-item.active
        .faq-answer {
          grid-template-rows:
            1fr;
        }

        .faq-answer p {
          margin: 0;

          padding:
            0 68px 21px 20px;

          color: #6c7b90;

          font-size: 13px;
          line-height: 1.8;
        }

        /* ===================================================
           TABLET
        =================================================== */

        @media(max-width:1050px) {
          .hero-content {
            width: 67%;
          }

          .quick-services {
            grid-template-columns:
              repeat(3,1fr);

            row-gap: 14px;
          }

          .quick-services > div:nth-child(3) {
            border-right: none;
          }

          .about-features {
            grid-template-columns:
              repeat(2,1fr);
          }

          .services-grid {
            grid-template-columns:
              repeat(2,1fr);
          }

          .why-grid {
            grid-template-columns:
              repeat(2,1fr);
          }
        }

        /* ===================================================
           MOBILE
        =================================================== */

        @media(max-width:700px) {
          .container {
            width:
              calc(100% - 30px);
          }

          .section {
            padding:
              55px 0;
          }

          .section-heading {
            margin-bottom: 34px;
          }

          .section-heading h2,
          .faq-intro h2 {
            font-size: 34px;

            letter-spacing: -1px;
          }

          /* HERO */

          .hero {
            min-height: 670px;

            height:
              calc(100svh - 74px);

            max-height: 750px;
          }

          .hero-slide img {
            object-position:
              62% center;
          }

          .hero-overlay {
            background:
              linear-gradient(
                180deg,
                rgba(247,251,255,.93),
                rgba(247,251,255,.91) 58%,
                rgba(247,251,255,.58)
              );
          }

          .hero-container {
            width:
              calc(100% - 30px);

            align-items:
              flex-start;

            padding-top: 55px;
          }

          .hero-content {
            width: 100%;
          }

          .hero-label {
            margin-bottom: 13px;

            font-size: 8px;

            letter-spacing: 1.8px;
          }

          .hero-label i {
            width: 24px;
          }

          .hero-content h1 {
            font-size:
              clamp(42px,12vw,54px);

            letter-spacing: -2px;
          }

          .hero-content h1 span {
            margin-top: 5px;
          }

          .hero-content > p {
            max-width: 95%;

            margin:
              18px 0 22px;

            font-size: 14px;
          }

          .blue-button,
          .border-button {
            min-height: 49px;

            padding:
              0 17px;

            font-size: 12px;
          }

          .hero-benefits {
            display: grid;

            grid-template-columns:
              repeat(3,1fr);

            gap: 7px;

            margin-top: 27px;
          }

          .hero-benefits > div {
            flex-direction: column;

            align-items:
              flex-start;

            gap: 5px;
          }

          .hero-benefits > div > span {
            width: 37px;
            height: 37px;

            flex-basis: 37px;

            padding: 8px;
          }

          .hero-benefits strong {
            font-size: 10px;
          }

          .hero-benefits p {
            font-size: 8px;
          }

          /* QUICK */

          .quick-holder {
            margin-top: -5px;

            padding: 0 10px;
          }

          .quick-services {
            padding:
              15px 8px;

            grid-template-columns:
              repeat(3,1fr);

            border-radius: 16px;
          }

          .quick-services > div {
            min-height: 64px;

            flex-direction: column;

            gap: 5px;

            text-align: center;
          }

          .quick-services span {
            width: 27px;
            height: 27px;

            flex-basis: 27px;
          }

          .quick-services strong {
            font-size: 9px;
          }

          /* ABOUT */

          .premium-about {
            padding:
              65px 0 52px;
          }

          .about-center h2 {
            font-size: 39px;

            letter-spacing: -1px;
          }

          .about-lead {
            font-size: 14px;
          }

          .about-subtext {
            font-size: 13px;
          }

          .about-features {
            grid-template-columns:
              repeat(2,1fr);

            gap: 10px;

            margin-top: 27px;
          }

          .about-features > div {
            min-height: 105px;

            padding: 16px 8px;
          }

          .about-features strong {
            font-size: 10px;
          }

          /* COUNTER */

          .counter-area {
            padding:
              0 13px 55px;
          }

          .counter-grid {
            grid-template-columns:
              repeat(2,1fr);

            padding:
              29px 8px;

            row-gap: 28px;

            border-radius: 18px;
          }

          .counter-grid > div:nth-child(2)::after {
            display: none;
          }

          .counter-grid strong {
            font-size: 29px;
          }

          .counter-grid span {
            font-size: 9px;
          }

          /* SERVICES */

          .services-grid {
            grid-template-columns:
              1fr;

            gap: 19px;
          }

          .service-image {
            height: 235px;
          }

          .service-icon {
            width: 60px;
            height: 60px;

            padding: 14px;
          }

          .service-body {
            padding:
              44px 19px 22px;
          }

          .service-body h3 {
            font-size: 19px;
          }

          /* WHY */

          .why-grid {
            grid-template-columns:
              1fr;
          }

          .why-card {
            min-height: 215px;
          }

          /* CTA */

          .cta-wrapper {
            padding:
              0 11px 10px;
          }

          .cta {
            min-height: 390px;

            border-radius: 21px;
          }

          .cta h2 {
            font-size: 38px;
          }

          .cta-buttons {
            flex-direction: column;
          }

          .cta-call,
          .cta-whatsapp {
            width: 100%;
          }

          /* TESTIMONIAL */

          .testimonial-card {
            width: 310px;

            flex-basis: 310px;

            padding: 22px;
          }

          .marquee-track {
            animation-duration: 34s;
          }

          /* FAQ */

          .faq-intro {
            grid-template-columns: 1fr;

            gap: 26px;

            margin-bottom: 32px;
          }

          .faq-contact {
            min-height: auto;

            padding: 18px;
          }

          .faq-question-mark {
            width: 47px;
            height: 47px;

            flex-basis: 47px;
          }

          .faq-phone {
            display: none;
          }

          .faq-item button {
            min-height: 67px;

            padding: 15px;

            font-size: 13px;
          }

          .faq-answer p {
            padding:
              0 50px 18px 15px;
          }
        }

        @media(prefers-reduced-motion:reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}

export default Home;