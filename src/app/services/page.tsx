import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ServicesTabToggle } from "@/components/ServicesTabToggle";

export const metadata: Metadata = {
  title: "Personal Care Services | Better Days Home Health | Hampton Roads, VA",
  description:
    "Better Days Home Health provides certified personal care aides, CNAs, and HHAs throughout Hampton Roads, Virginia — bathing, meal prep, companionship, medication reminders, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <Nav />

      {/* PAGE HERO */}
      <section className="page-hero no-arch">
        <div className="container page-hero-content">
          <span className="page-hero-badge">🧑 &nbsp; Personal Care Services</span>
          <h1>Home Care Services</h1>
          <p>Compassionate, certified personal care that helps you or your loved one live safely and comfortably at home &mdash; on your schedule, on your terms.</p>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="section" id="services" style={{ background: "var(--navy)" }}>
        <div className="container">
          <ServicesTabToggle />
        </div>
      </section>

      {/* WHAT IS PERSONAL CARE */}
      <section className="section services-page-intro">
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "48px" }}>
            <span className="eyebrow">About Personal Care</span>
            <h2 className="display" style={{ fontSize: "clamp(1.9rem,3.5vw,2.6rem)", color: "var(--navy)", marginBottom: "14px" }}>
              What Is Personal Home Care?
            </h2>
            <p style={{ color: "var(--muted)", maxWidth: "640px", margin: "0 auto" }}>Personal care is non-medical support for daily living activities — provided by certified aides who treat every patient with dignity and respect. It&apos;s about keeping people safely at home and making each day a little easier.</p>
          </div>

          <div className="diff-grid">
            <div className="diff-card reveal reveal-delay-1">
              <div style={{ fontSize: "2.5rem", marginBottom: "16px" }}>🧑</div>
              <h3>Who It&apos;s For</h3>
              <p>Personal care is for anyone who needs help with daily activities rather than medical treatment. You may benefit from personal care if you:</p>
              <ul className="diff-list">
                <li>Need help with bathing, dressing, or grooming</li>
                <li>Want a companion to reduce isolation and loneliness</li>
                <li>Need assistance with meal preparation or light housekeeping</li>
                <li>Need an aide to accompany you to medical appointments</li>
                <li>Want medication reminders</li>
                <li>Want to remain safely and independently at home</li>
              </ul>
            </div>

            <div className="diff-card reveal reveal-delay-2">
              <div style={{ fontSize: "2.5rem", marginBottom: "16px" }}>✅</div>
              <h3>How It Works</h3>
              <p>Getting started with personal care at Better Days is straightforward. Here&apos;s what to expect:</p>
              <ul className="diff-list">
                <li>Call us — no physician&apos;s order required for most services</li>
                <li>We verify your Medicaid, insurance, or discuss private pay</li>
                <li>We match you with a certified aide who fits your needs</li>
                <li>Care begins quickly — often within 24&ndash;48 hours of approval</li>
                <li>We check in regularly to make sure everything is working</li>
                <li>Flexible scheduling — morning, afternoon, or evening visits</li>
              </ul>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "48px" }} className="reveal">
            <p style={{ color: "var(--muted)", marginBottom: "24px", fontSize: "1rem" }}>Ready to get started? Our team will walk you through your options at no cost and no obligation.</p>
            <Link href="/contact" className="btn btn-primary" style={{ marginRight: "14px" }}>Talk to Our Team</Link>
            <Link href="tel:7577157829" className="btn btn-outline-dark">(757) 715-7829</Link>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="section cta-band">
        <div className="container">
          <div className="cta-band-inner reveal">
            <div className="cta-band-text">
              <h2>Ready to Get Started?</h2>
              <p>Contact us today to discuss your care needs. No physician&apos;s referral required for most services.</p>
            </div>
            <div className="cta-band-actions">
              <Link href="tel:7577157829" className="cta-phone-link">
                <span className="phone-icon-wrap">📞</span>
                (757) 715-7829
              </Link>
              <Link href="/contact" className="btn btn-gold">Request Care</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <a href="tel:7577157829" className="mobile-call-bar" aria-label="Call Better Days Home Health">
        <span className="mobile-call-icon">📞</span>
        Call Us &mdash; (757) 715-7829
      </a>
    </>
  );
}
