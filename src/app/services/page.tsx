import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ServicesTabToggle } from "@/components/ServicesTabToggle";

export const metadata: Metadata = {
  title: "Home Health Services | Better Days Home Health | Hampton Roads, VA",
  description:
    "Better Days Home Health offers skilled nursing, physical therapy, occupational therapy, and personal care services throughout Hampton Roads, Virginia.",
};

export default function ServicesPage() {
  return (
    <>
      <Nav />

      {/* PAGE HERO */}
      <section className="page-hero no-arch">
        <div className="container page-hero-content">
          <span className="page-hero-badge">🏥 &nbsp; Skilled &amp; Non-Skilled Care</span>
          <h1>Home Health Services</h1>
          <p>From complex clinical care to daily personal support &mdash; we provide the full spectrum of home health services your family needs.</p>
        </div>
      </section>

      {/* SERVICES TABS SECTION */}
      <section className="section" id="services" style={{ background: "var(--navy)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px", marginBottom: "48px" }} className="reveal">
            <div style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.12)", borderRadius: "16px", padding: "28px 24px" }}>
              <div style={{ fontSize: "1.6rem", marginBottom: "12px" }}>🤓</div>
              <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "var(--white)", marginBottom: "8px" }}>Need Skilled Care?</h3>
              <p style={{ fontSize: ".86rem", color: "rgba(255,255,255,.55)", lineHeight: "1.7" }}>Skilled care is for patients who need medical treatment that can only be provided by a licensed professional — a nurse or therapist. It requires a physician&apos;s order and is typically covered by Medicaid or insurance.</p>
            </div>
            <div style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.12)", borderRadius: "16px", padding: "28px 24px" }}>
              <div style={{ fontSize: "1.6rem", marginBottom: "12px" }}>🤝</div>
              <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "var(--white)", marginBottom: "8px" }}>Need Personal Care?</h3>
              <p style={{ fontSize: ".86rem", color: "rgba(255,255,255,.55)", lineHeight: "1.7" }}>Personal care is for patients who need help with daily activities — bathing, dressing, meals, and companionship. No physician&apos;s order is required for most services and Medicaid often covers it.</p>
            </div>
          </div>

          <ServicesTabToggle />
        </div>
      </section>

      {/* NOT SURE WHICH CARE */}
      <section className="section services-page-intro">
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "48px" }}>
            <span className="eyebrow">Need Guidance?</span>
            <h2 className="display" style={{ fontSize: "clamp(1.9rem,3.5vw,2.6rem)", color: "var(--navy)", marginBottom: "14px" }}>
              Not Sure Which Care You Need?
            </h2>
            <p style={{ color: "var(--muted)", maxWidth: "600px", margin: "0 auto" }}>Skilled care and personal care serve different needs, and many patients benefit from both. Here&apos;s a simple way to understand the difference.</p>
          </div>

          <div className="diff-grid">
            <div className="diff-card reveal reveal-delay-1">
              <div style={{ fontSize: "2.5rem", marginBottom: "16px" }}>🏥</div>
              <h3>Skilled Care</h3>
              <p>Skilled care is for patients who require clinical treatment ordered by a physician. It involves licensed medical professionals and is typically covered by Medicaid, Medicare (where applicable), or commercial insurance. You may need skilled care if you:</p>
              <ul className="diff-list">
                <li>Were recently discharged from a hospital or rehab facility</li>
                <li>Have an open wound that needs professional treatment</li>
                <li>Require IV antibiotics or other infusion therapies at home</li>
                <li>Need help managing complex medications safely</li>
                <li>Are recovering from surgery and need physical or occupational therapy</li>
                <li>Have been diagnosed with a new or worsening chronic condition</li>
              </ul>
            </div>

            <div className="diff-card reveal reveal-delay-2">
              <div style={{ fontSize: "2.5rem", marginBottom: "16px" }}>🧑</div>
              <h3>Personal Care</h3>
              <p>Personal care is for patients who need assistance with daily activities rather than medical treatment. It is provided by certified aides and may be covered by Medicaid, long-term care insurance, or private pay. You may need personal care if you:</p>
              <ul className="diff-list">
                <li>Need help with bathing, dressing, or grooming</li>
                <li>Want a companion to reduce isolation and loneliness</li>
                <li>Need assistance with meal preparation or light housekeeping</li>
                <li>Need an aide to accompany you to medical appointments</li>
                <li>Want medication reminders without clinical administration</li>
                <li>Need support to remain safely and independently at home</li>
              </ul>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "48px" }} className="reveal">
            <p style={{ color: "var(--muted)", marginBottom: "24px", fontSize: "1rem" }}>Still not sure? Our team will help you determine the right level of care &mdash; at no obligation.</p>
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
              <p>Contact us today to discuss your care needs. A physician&apos;s referral or self-referral is welcome.</p>
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
