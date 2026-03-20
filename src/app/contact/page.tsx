import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ContactFormWrap } from "@/components/ContactFormWrap";

export const metadata: Metadata = {
  title: "Contact Us | Better Days Home Health | Hampton Roads, VA",
  description:
    "Contact Better Days Home Health to request home health services, ask about coverage, or speak with our team. Call (757) 715-7829 or submit a request online.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />

      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container page-hero-content">
          <span className="page-hero-badge">📞 &nbsp; We Are Here to Help</span>
          <h1>Get in Touch</h1>
          <p>Whether you are requesting care for yourself or a loved one, have insurance questions, or want to join our team, we are ready to help.</p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="section">
        <div className="container">
          <div className="contact-page-wrap">

            {/* LEFT: Info Blocks */}
            <div className="reveal">
              <span className="eyebrow">Contact Information</span>
              <h2 className="display" style={{ fontSize: "clamp(1.7rem,3vw,2.3rem)", color: "var(--navy)", marginBottom: "10px" }}>
                We Would Love to Hear From You
              </h2>
              <p style={{ color: "var(--muted)", marginBottom: "32px", fontSize: ".95rem", lineHeight: "1.75" }}>
                Our team responds to all inquiries within one business day. For urgent care needs, please call us directly.
              </p>

              <div className="contact-info-blocks">
                <div className="contact-info-block">
                  <div className="cib-icon">📞</div>
                  <div>
                    <div className="cib-label">Phone</div>
                    <div className="cib-value"><Link href="tel:7577157829">(757) 715-7829</Link></div>
                    <div className="cib-sub">Call for immediate assistance</div>
                  </div>
                </div>

                <div className="contact-info-block">
                  <div className="cib-icon">💌</div>
                  <div>
                    <div className="cib-label">Email</div>
                    <div className="cib-value"><Link href="mailto:admin@abetterdayforyou.com">admin@abetterdayforyou.com</Link></div>
                    <div className="cib-sub">Replies within one business day</div>
                  </div>
                </div>

                <div className="contact-info-block">
                  <div className="cib-icon">📍</div>
                  <div>
                    <div className="cib-label">Service Area</div>
                    <div className="cib-value">Hampton Roads, Virginia</div>
                    <div className="cib-sub">Virginia Beach &bull; Norfolk &bull; Chesapeake &bull; Portsmouth &bull; Hampton &bull; Newport News &bull; Suffolk &bull; Isle of Wight</div>
                  </div>
                </div>

                <div className="contact-info-block">
                  <div className="cib-icon">🕐</div>
                  <div>
                    <div className="cib-label">Office Hours</div>
                    <div className="cib-value">Mon &ndash; Fri: 8:00 AM &ndash; 5:00 PM</div>
                    <div className="cib-sub">After-hours calls answered for urgent needs</div>
                  </div>
                </div>

                <div className="contact-info-block">
                  <div className="cib-icon">🎉</div>
                  <div>
                    <div className="cib-label">Licensure</div>
                    <div className="cib-value">VDH Licensed Home Health Agency</div>
                    <div className="cib-sub">Virginia Department of Health</div>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: "28px", borderRadius: "16px", overflow: "hidden", border: "1.5px solid var(--border)" }}>
                <iframe
                  src="https://maps.google.com/maps?q=Hampton+Roads+Virginia&t=&z=9&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="260"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hampton Roads, Virginia service area"
                />
              </div>
              <p style={{ fontSize: ".78rem", color: "var(--muted)", marginTop: "10px", textAlign: "center" }}>
                Virginia Beach &bull; Norfolk &bull; Chesapeake &bull; Portsmouth &bull; Hampton &bull; Newport News &bull; Suffolk &bull; Isle of Wight
              </p>
            </div>

            {/* RIGHT: Contact Form */}
            <Suspense fallback={<div className="contact-form-wrap" />}>
              <ContactFormWrap />
            </Suspense>
          </div>
        </div>
      </section>

      {/* QUICK INFO STRIP */}
      <section className="section-sm" style={{ background: "var(--navy)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "32px", textAlign: "center" }} className="reveal">
            <div>
              <div style={{ fontSize: "2rem", marginBottom: "10px" }}>🏥</div>
              <h4 style={{ color: "var(--white)", fontSize: "1rem", marginBottom: "6px" }}>Medicaid &amp; Sentara</h4>
              <p style={{ color: "rgba(255,255,255,.55)", fontSize: ".86rem" }}>Insurance accepted. We verify benefits at no cost to you.</p>
            </div>
            <div>
              <div style={{ fontSize: "2rem", marginBottom: "10px" }}>📍</div>
              <h4 style={{ color: "var(--white)", fontSize: "1rem", marginBottom: "6px" }}>8 Cities in Hampton Roads</h4>
              <p style={{ color: "rgba(255,255,255,.55)", fontSize: ".86rem" }}>Virginia Beach, Norfolk, Chesapeake, Portsmouth, Hampton, Newport News, Suffolk, Isle of Wight.</p>
            </div>
            <div>
              <div style={{ fontSize: "2rem", marginBottom: "10px" }}>🕐</div>
              <h4 style={{ color: "var(--white)", fontSize: "1rem", marginBottom: "6px" }}>Quick Response</h4>
              <p style={{ color: "rgba(255,255,255,.55)", fontSize: ".86rem" }}>We respond to all inquiries within one business day. Urgent needs are addressed same day.</p>
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
