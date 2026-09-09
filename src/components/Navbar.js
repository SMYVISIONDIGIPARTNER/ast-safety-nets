import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  const PHONE = "9844771499";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (path) => location.pathname === path;

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`ast-navbar ${
          scrolled ? "ast-navbar-scrolled" : ""
        }`}
      >
        <div className="ast-navbar-container">
          {/* LOGO */}
          <Link
            to="/"
            className="ast-logo"
            onClick={closeMenu}
            aria-label="AST Safety Nets Home"
          >
            <img
              src="/logo.png"
              alt="AST Safety Nets & Invisible Grills"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextElementSibling.style.display =
                  "flex";
              }}
            />

            <div className="logo-fallback">
              <div className="fallback-main">
                <span>A</span>
                <strong>ST</strong>
              </div>

              <div className="fallback-sub">
                SAFETY NETS
              </div>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="desktop-nav">
            <Link
              to="/"
              className={`nav-link ${
                isActive("/") ? "active" : ""
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`nav-link ${
                isActive("/about") ? "active" : ""
              }`}
            >
              About
            </Link>

            <Link
              to="/services"
              className={`nav-link ${
                isActive("/services") ? "active" : ""
              }`}
            >
              Services
            </Link>

            <Link
              to="/contact"
              className={`nav-link ${
                isActive("/contact") ? "active" : ""
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* RIGHT */}
          <div className="navbar-right">
            <Link
              to="/contact"
              className="quote-button"
            >
              <span className="phone-svg">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
                </svg>
              </span>

              Get a Quote
            </Link>

            {/* MOBILE HAMBURGER */}
            <button
              type="button"
              className={`hamburger ${
                menuOpen ? "open" : ""
              }`}
              onClick={() =>
                setMenuOpen((prev) => !prev)
              }
              aria-label={
                menuOpen ? "Close menu" : "Open menu"
              }
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* FIXED NAVBAR SPACER */}
      <div className="navbar-spacer" />

      {/* MOBILE MENU */}
      <div
        className={`mobile-menu ${
          menuOpen ? "active" : ""
        }`}
      >
        <div className="mobile-menu-inner">
          <div className="mobile-menu-heading">
            <span>MENU</span>

            <small>
              AST Safety Nets
            </small>
          </div>

          <nav className="mobile-links">
            <Link
              to="/"
              className={
                isActive("/")
                  ? "mobile-active"
                  : ""
              }
              onClick={closeMenu}
            >
              <span>Home</span>

              <i>→</i>
            </Link>

            <Link
              to="/about"
              className={
                isActive("/about")
                  ? "mobile-active"
                  : ""
              }
              onClick={closeMenu}
            >
              <span>About</span>

              <i>→</i>
            </Link>

            <Link
              to="/services"
              className={
                isActive("/services")
                  ? "mobile-active"
                  : ""
              }
              onClick={closeMenu}
            >
              <span>Services</span>

              <i>→</i>
            </Link>

            <Link
              to="/contact"
              className={
                isActive("/contact")
                  ? "mobile-active"
                  : ""
              }
              onClick={closeMenu}
            >
              <span>Contact</span>

              <i>→</i>
            </Link>
          </nav>

          <div className="mobile-contact">
            <Link
              to="/contact"
              className="mobile-quote"
              onClick={closeMenu}
            >
              Get a Free Quote

              <span>→</span>
            </Link>

            <a
              href={`tel:+91${PHONE}`}
              className="mobile-call"
              onClick={closeMenu}
            >
              <span className="mobile-phone-icon">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
                </svg>
              </span>

              <div>
                <small>Call us now</small>
                <strong>
                  +91 {PHONE}
                </strong>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* OVERLAY */}
      <div
        className={`menu-overlay ${
          menuOpen ? "active" : ""
        }`}
        onClick={closeMenu}
      />

      <style>{`
        /* ==========================================
           GLOBAL
        ========================================== */

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

        /* ==========================================
           FIXED NAVBAR
        ========================================== */

        .ast-navbar {
          position: fixed;

          top: 0;
          left: 0;
          right: 0;

          width: 100%;

          z-index: 9999;

          background:
            rgba(255, 255, 255, 0.98);

          border-bottom:
            1px solid rgba(7, 43, 85, 0.055);

          transition:
            box-shadow 0.3s ease,
            background 0.3s ease,
            backdrop-filter 0.3s ease;
        }

        .ast-navbar-scrolled {
          background:
            rgba(255, 255, 255, 0.94);

          backdrop-filter:
            blur(18px);

          -webkit-backdrop-filter:
            blur(18px);

          box-shadow:
            0 8px 35px
            rgba(5, 38, 78, 0.1);
        }

        /*
          Because navbar is FIXED,
          this spacer prevents content
          from hiding underneath it.
        */

        .navbar-spacer {
          width: 100%;
          height: 104px;
        }

        .ast-navbar-container {
          width:
            min(1450px, calc(100% - 50px));

          min-height: 104px;

          margin: 0 auto;

          display: grid;

          grid-template-columns:
            1fr auto 1fr;

          align-items: center;

          gap: 30px;
        }

        /* ==========================================
           LOGO
        ========================================== */

        .ast-logo {
          width: fit-content;

          display: inline-flex;
          align-items: center;

          text-decoration: none;
        }

        .ast-logo img {
          width: 235px;
          height: 84px;

          display: block;

          object-fit: contain;

          object-position:
            left center;
        }

        .logo-fallback {
          display: none;

          flex-direction: column;

          line-height: 1;

          color: #073a82;
        }

        .fallback-main {
          display: flex;
          align-items: center;

          font-size: 34px;
          font-weight: 900;

          letter-spacing: -2px;
        }

        .fallback-main span {
          color: #00a5df;
        }

        .fallback-main strong {
          color: #063d88;
        }

        .fallback-sub {
          margin-top: 5px;

          color: #087ccc;

          font-size: 10px;
          font-weight: 800;

          letter-spacing: 3px;
        }

        /* ==========================================
           DESKTOP NAV
        ========================================== */

        .desktop-nav {
          height: 104px;

          display: flex;
          align-items: center;

          gap: 47px;
        }

        .nav-link {
          position: relative;

          height: 104px;

          display: inline-flex;
          align-items: center;

          color: #071d49;

          text-decoration: none;

          font-family:
            Inter,
            "Segoe UI",
            sans-serif;

          font-size: 17px;
          font-weight: 650;

          transition:
            color 0.25s ease;
        }

        .nav-link::after {
          content: "";

          position: absolute;

          left: 50%;
          bottom: 25px;

          width: 0;
          height: 3px;

          border-radius: 20px;

          background: #0870cf;

          transform:
            translateX(-50%);

          transition:
            width 0.3s ease;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #0870cf;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 50px;
        }

        /* ==========================================
           RIGHT
        ========================================== */

        .navbar-right {
          display: flex;

          align-items: center;
          justify-content: flex-end;

          gap: 15px;
        }

        .quote-button {
          min-width: 185px;
          min-height: 58px;

          padding: 0 25px;

          display: inline-flex;

          align-items: center;
          justify-content: center;

          gap: 11px;

          border-radius: 11px;

          color: #ffffff;

          text-decoration: none;

          font-size: 16px;
          font-weight: 750;

          background:
            linear-gradient(
              135deg,
              #0877d8,
              #0751b3
            );

          box-shadow:
            0 12px 26px
            rgba(7, 85, 181, 0.19);

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .quote-button:hover {
          transform:
            translateY(-2px);

          box-shadow:
            0 16px 34px
            rgba(7, 85, 181, 0.26);
        }

        .phone-svg {
          width: 20px;
          height: 20px;
        }

        .phone-svg svg,
        .mobile-phone-icon svg {
          width: 100%;
          height: 100%;

          fill: none;

          stroke: currentColor;

          stroke-width: 2;

          stroke-linecap: round;
          stroke-linejoin: round;
        }

        /* ==========================================
           HAMBURGER
        ========================================== */

        .hamburger {
          position: relative;

          width: 49px;
          height: 49px;

          flex: 0 0 49px;

          display: none;

          border: none;

          border-radius: 11px;

          background:
            linear-gradient(
              135deg,
              #0876d6,
              #0750b1
            );

          box-shadow:
            0 8px 20px
            rgba(7, 82, 175, 0.18);

          cursor: pointer;

          padding: 0;

          z-index: 10002;
        }

        .hamburger span {
          position: absolute;

          left: 50%;

          width: 22px;
          height: 2px;

          border-radius: 20px;

          background: #ffffff;

          transform:
            translateX(-50%);

          transition:
            top 0.3s ease,
            transform 0.3s ease,
            opacity 0.2s ease;
        }

        .hamburger span:nth-child(1) {
          top: 16px;
        }

        .hamburger span:nth-child(2) {
          top: 23.5px;
        }

        .hamburger span:nth-child(3) {
          top: 31px;
        }

        .hamburger.open
        span:nth-child(1) {
          top: 23.5px;

          transform:
            translateX(-50%)
            rotate(45deg);
        }

        .hamburger.open
        span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open
        span:nth-child(3) {
          top: 23.5px;

          transform:
            translateX(-50%)
            rotate(-45deg);
        }

        /* ==========================================
           MOBILE MENU
        ========================================== */

        .mobile-menu {
          position: fixed;

          top: 104px;
          left: 0;
          right: 0;

          width: 100%;

          max-height: 0;

          overflow: hidden;

          z-index: 9997;

          opacity: 0;

          visibility: hidden;

          transform:
            translateY(-15px);

          background:
            linear-gradient(
              180deg,
              #ffffff 0%,
              #f6faff 100%
            );

          box-shadow:
            0 20px 50px
            rgba(5, 31, 67, 0.12);

          transition:
            max-height 0.45s ease,
            opacity 0.3s ease,
            transform 0.35s ease,
            visibility 0.3s ease;
        }

        .mobile-menu.active {
          max-height:
            calc(100vh - 104px);

          overflow-y: auto;

          opacity: 1;

          visibility: visible;

          transform:
            translateY(0);
        }

        .mobile-menu-inner {
          width:
            min(650px, 100%);

          margin: 0 auto;

          padding:
            23px 22px 32px;
        }

        .mobile-menu-heading {
          padding-bottom: 15px;

          display: flex;
          justify-content: space-between;
          align-items: center;

          border-bottom:
            1px solid
            rgba(7, 49, 99, 0.08);
        }

        .mobile-menu-heading > span {
          color: #0870cf;

          font-size: 10px;
          font-weight: 850;

          letter-spacing: 3px;
        }

        .mobile-menu-heading small {
          color: #8a97a8;

          font-size: 10px;
        }

        .mobile-links {
          display: flex;
          flex-direction: column;
        }

        .mobile-links a {
          width: 100%;

          min-height: 65px;

          padding: 0 3px;

          display: flex;

          align-items: center;
          justify-content: space-between;

          color: #09234d;

          text-decoration: none;

          border-bottom:
            1px solid
            rgba(7, 49, 99, 0.075);

          font-size: 19px;
          font-weight: 750;

          transition:
            color 0.25s ease,
            padding 0.25s ease;
        }

        .mobile-links a:hover,
        .mobile-links a.mobile-active {
          color: #0870cf;

          padding-left: 7px;
        }

        .mobile-links i {
          width: 34px;
          height: 34px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          color: #0870cf;

          background: #edf7ff;

          font-size: 17px;
          font-style: normal;
        }

        /* ==========================================
           MOBILE CONTACT
        ========================================== */

        .mobile-contact {
          margin-top: 25px;

          display: grid;

          gap: 11px;
        }

        .mobile-quote {
          min-height: 55px;

          padding: 0 19px;

          display: flex;

          align-items: center;
          justify-content: space-between;

          border-radius: 11px;

          color: #ffffff;

          text-decoration: none;

          font-size: 14px;
          font-weight: 800;

          background:
            linear-gradient(
              135deg,
              #0877d8,
              #0750b2
            );

          box-shadow:
            0 11px 25px
            rgba(7, 83, 178, 0.17);
        }

        .mobile-quote span {
          font-size: 20px;
        }

        .mobile-call {
          min-height: 62px;

          padding: 10px 17px;

          display: flex;

          align-items: center;

          gap: 12px;

          border:
            1px solid #d5e8fa;

          border-radius: 11px;

          color: #0a2b56;

          text-decoration: none;

          background: #ffffff;
        }

        .mobile-phone-icon {
          width: 37px;
          height: 37px;

          padding: 9px;

          display: block;

          border-radius: 50%;

          color: #0870cf;

          background: #edf7ff;
        }

        .mobile-call small,
        .mobile-call strong {
          display: block;
        }

        .mobile-call small {
          margin-bottom: 3px;

          color: #8390a1;

          font-size: 9px;

          text-transform: uppercase;

          letter-spacing: 1px;
        }

        .mobile-call strong {
          color: #0a2b56;

          font-size: 14px;
        }

        /* ==========================================
           OVERLAY
        ========================================== */

        .menu-overlay {
          position: fixed;

          inset: 0;

          z-index: 9996;

          opacity: 0;

          visibility: hidden;

          background:
            rgba(2, 20, 45, 0.35);

          backdrop-filter:
            blur(3px);

          -webkit-backdrop-filter:
            blur(3px);

          transition:
            opacity 0.3s ease,
            visibility 0.3s ease;
        }

        .menu-overlay.active {
          opacity: 1;

          visibility: visible;
        }

        /* ==========================================
           TABLET
        ========================================== */

        @media (max-width: 1050px) {
          .ast-navbar-container {
            width:
              calc(100% - 30px);

            min-height: 88px;

            grid-template-columns:
              1fr auto;

            gap: 15px;
          }

          .navbar-spacer {
            height: 88px;
          }

          .ast-logo img {
            width: 215px;
            height: 74px;
          }

          .desktop-nav,
          .quote-button {
            display: none;
          }

          .hamburger {
            display: block;
          }

          .mobile-menu {
            top: 88px;
          }

          .mobile-menu.active {
            max-height:
              calc(100vh - 88px);
          }
        }

        /* ==========================================
           MOBILE
        ========================================== */

        @media (max-width: 600px) {
          .ast-navbar {
            background:
              rgba(255, 255, 255, 0.98);
          }

          .ast-navbar-container {
            width:
              calc(100% - 20px);

            min-height: 82px;

            gap: 7px;
          }

          .navbar-spacer {
            height: 82px;
          }

          /*
             BIGGER MOBILE LOGO
          */

          .ast-logo {
            min-width: 0;

            max-width:
              calc(100vw - 76px);
          }

          .ast-logo img {
            width: 220px;

            height: 72px;

            max-width: 100%;

            object-fit: contain;

            object-position:
              left center;
          }

          .hamburger {
            width: 46px;
            height: 46px;

            flex-basis: 46px;

            border-radius: 10px;
          }

          .hamburger span {
            width: 21px;
          }

          .hamburger span:nth-child(1) {
            top: 14.5px;
          }

          .hamburger span:nth-child(2) {
            top: 22px;
          }

          .hamburger span:nth-child(3) {
            top: 29.5px;
          }

          .hamburger.open
          span:nth-child(1),
          .hamburger.open
          span:nth-child(3) {
            top: 22px;
          }

          /*
             Menu begins exactly
             below fixed navbar
          */

          .mobile-menu {
            top: 82px;
          }

          .mobile-menu.active {
            max-height:
              calc(100svh - 82px);
          }

          .mobile-menu-inner {
            padding:
              18px 17px
              max(
                28px,
                env(safe-area-inset-bottom)
              );
          }

          .mobile-links a {
            min-height: 59px;

            font-size: 17px;
          }

          .mobile-links i {
            width: 31px;
            height: 31px;

            font-size: 15px;
          }

          .mobile-contact {
            margin-top: 20px;
          }
        }

        /* ==========================================
           SMALL PHONES
        ========================================== */

        @media (max-width: 390px) {
          .ast-navbar-container {
            width:
              calc(100% - 16px);
          }

          .ast-logo img {
            width: 205px;
            height: 69px;
          }

          .hamburger {
            width: 44px;
            height: 44px;

            flex-basis: 44px;
          }
        }

        /* ==========================================
           VERY SMALL PHONES
        ========================================== */

        @media (max-width: 340px) {
          .ast-logo img {
            width: 185px;
          }

          .hamburger {
            width: 42px;
            height: 42px;

            flex-basis: 42px;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;