"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav id="nav" className={scrolled ? "scrolled" : ""}>
      <div className="container nav-inner">
        <Link href="/" className="nav-logo">
          <span className="nav-wordmark">Better Days</span>
          <span className="nav-wordmark-sub">HOME HEALTH</span>
        </Link>

        <ul className={`nav-links${menuOpen ? " open" : ""}`} id="navLinks">
          <li><Link href="/" onClick={closeMenu}>Home</Link></li>
          <li><Link href="/about" onClick={closeMenu}>About</Link></li>
          <li><Link href="/services" onClick={closeMenu}>Services</Link></li>
          <li><Link href="/conditions" onClick={closeMenu}>Conditions</Link></li>
          <li><Link href="/insurance" onClick={closeMenu}>Insurance</Link></li>
          <li><Link href="/providers" onClick={closeMenu}>For Providers</Link></li>
          <li><Link href="/careers" onClick={closeMenu}>Careers</Link></li>
          <li><Link href="/contact" className="nav-cta-btn" onClick={closeMenu}>Contact Us</Link></li>
        </ul>

        <button
          className="hamburger"
          id="hamburger"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
