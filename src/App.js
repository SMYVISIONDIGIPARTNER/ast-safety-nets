import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

const PHONE = "9844000299";
const WHATSAPP = "919844000299";

/* =========================================================
   SCROLL TO TOP WHEN PAGE CHANGES

   This gives the user a fresh-page feeling when navigating
   without causing an unnecessary browser reload.
========================================================= */

function RouteHandler() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location.pathname]);

  return null;
}

/* =========================================================
   FLOATING CONTACT BUTTONS
========================================================= */

function FloatingContactButtons() {
  return (
    <div className="ast-floating-contact">
      {/* CALL */}

      <a
        href={`tel:+91${PHONE}`}
        className="floating-button floating-call"
        aria-label="Call AST Safety Nets"
      >
        <span className="floating-tooltip">
          Call Now
        </span>

        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
        </svg>
      </a>

      {/* WHATSAPP */}

      <a
        href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
          "Hi AST Safety Nets, I would like to know more about your safety net and invisible grill services in Bangalore."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-button floating-whatsapp"
        aria-label="WhatsApp AST Safety Nets"
      >
        <span className="floating-tooltip">
          WhatsApp Us
        </span>

        {/* WhatsApp Icon */}
        <svg
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M16.04 3C9.39 3 4 8.28 4 14.8c0 2.08.55 4.11 1.6 5.89L4 26.5l6.02-1.55a12.2 12.2 0 0 0 6.02 1.6h.01C22.69 26.55 28 21.27 28 14.8 28 8.28 22.69 3 16.04 3Zm0 21.56a10.2 10.2 0 0 1-5.2-1.42l-.37-.22-3.57.92.95-3.41-.24-.38a9.64 9.64 0 0 1-1.58-5.25c0-5.42 4.49-9.83 10.01-9.83 5.51 0 9.99 4.41 9.99 9.83 0 5.38-4.48 9.76-9.99 9.76Zm5.49-7.32c-.3-.15-1.78-.86-2.05-.96-.28-.1-.48-.15-.68.15-.2.29-.78.96-.96 1.16-.18.19-.35.22-.65.07-.3-.14-1.27-.46-2.42-1.47-.89-.78-1.5-1.75-1.67-2.04-.18-.29-.02-.45.13-.59.14-.13.3-.34.45-.51.15-.17.2-.29.3-.49.1-.19.05-.36-.03-.51-.07-.14-.67-1.59-.92-2.17-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.53.07-.8.36-.28.29-1.05 1.01-1.05 2.46s1.08 2.85 1.23 3.04c.15.19 2.12 3.18 5.14 4.46.72.3 1.28.48 1.72.62.72.22 1.37.19 1.89.12.58-.09 1.78-.72 2.03-1.41.25-.7.25-1.3.18-1.42-.08-.12-.28-.19-.58-.34Z"
          />
        </svg>
      </a>
    </div>
  );
}

/* =========================================================
   APP CONTENT
========================================================= */

function AppContent() {
  return (
    <>
      <RouteHandler />

      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>

      <Footer />

      <FloatingContactButtons />

      <style>{`
        /* =============================================
           FLOATING CONTACT BUTTONS
        ============================================= */

        .ast-floating-contact {
          position: fixed;

          right: 22px;
          bottom: 25px;

          z-index: 9995;

          display: flex;
          flex-direction: column;

          gap: 12px;
        }

        .floating-button {
          position: relative;

          width: 58px;
          height: 58px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 50%;

          color: #ffffff;

          text-decoration: none;

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .floating-button svg {
          width: 25px;
          height: 25px;

          display: block;
        }

        /* =============================================
           CALL
        ============================================= */

        .floating-call {
          background:
            linear-gradient(
              135deg,
              #0878d8,
              #0750b1
            );

          box-shadow:
            0 10px 28px
            rgba(7, 81, 177, 0.3);
        }

        .floating-call svg {
          fill: none;

          stroke: currentColor;

          stroke-width: 2;

          stroke-linecap: round;
          stroke-linejoin: round;
        }

        /* =============================================
           WHATSAPP
        ============================================= */

        .floating-whatsapp {
          background: #25d366;

          box-shadow:
            0 10px 28px
            rgba(37, 211, 102, 0.3);
        }

        .floating-whatsapp svg {
          width: 30px;
          height: 30px;
        }

        /* =============================================
           HOVER
        ============================================= */

        .floating-button:hover {
          transform:
            translateY(-4px)
            scale(1.04);
        }

        .floating-call:hover {
          box-shadow:
            0 15px 35px
            rgba(7, 81, 177, 0.4);
        }

        .floating-whatsapp:hover {
          box-shadow:
            0 15px 35px
            rgba(37, 211, 102, 0.4);
        }

        /* =============================================
           TOOLTIP
        ============================================= */

        .floating-tooltip {
          position: absolute;

          top: 50%;
          right: 70px;

          min-width: max-content;

          padding: 8px 12px;

          border-radius: 7px;

          color: #ffffff;

          background: #082650;

          font-size: 11px;
          font-weight: 700;

          pointer-events: none;

          opacity: 0;

          visibility: hidden;

          transform:
            translateY(-50%)
            translateX(7px);

          transition:
            opacity 0.25s ease,
            transform 0.25s ease,
            visibility 0.25s ease;

          box-shadow:
            0 8px 22px
            rgba(0, 0, 0, 0.15);
        }

        .floating-tooltip::after {
          content: "";

          position: absolute;

          top: 50%;
          right: -5px;

          width: 10px;
          height: 10px;

          background: #082650;

          transform:
            translateY(-50%)
            rotate(45deg);
        }

        .floating-button:hover
        .floating-tooltip {
          opacity: 1;

          visibility: visible;

          transform:
            translateY(-50%)
            translateX(0);
        }

        /* =============================================
           WHATSAPP PULSE
        ============================================= */

        .floating-whatsapp::before {
          content: "";

          position: absolute;

          inset: -5px;

          border:
            1px solid
            rgba(37, 211, 102, 0.45);

          border-radius: 50%;

          animation:
            whatsappPulse 2s
            infinite;
        }

        @keyframes whatsappPulse {
          0% {
            transform: scale(0.9);
            opacity: 0.8;
          }

          70% {
            transform: scale(1.25);
            opacity: 0;
          }

          100% {
            transform: scale(1.25);
            opacity: 0;
          }
        }

        /* =============================================
           MOBILE
        ============================================= */

        @media (max-width: 700px) {
          .ast-floating-contact {
            right: 14px;
            bottom: 18px;

            gap: 10px;
          }

          .floating-button {
            width: 52px;
            height: 52px;
          }

          .floating-call svg {
            width: 22px;
            height: 22px;
          }

          .floating-whatsapp svg {
            width: 27px;
            height: 27px;
          }

          /*
            Tooltips removed on mobile because
            hover isn't useful on touch devices.
          */

          .floating-tooltip {
            display: none;
          }
        }

        @media (max-width: 380px) {
          .floating-button {
            width: 49px;
            height: 49px;
          }

          .ast-floating-contact {
            right: 12px;
            bottom: 15px;
          }
        }
      `}</style>
    </>
  );
}

/* =========================================================
   MAIN APP
========================================================= */

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;