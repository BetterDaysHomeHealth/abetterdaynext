import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "For Referring Providers | Better Days Home Health | Hampton Roads, VA",
  description:
    "Refer a patient to Better Days Home Health. Fast intake, same-day insurance verification, and care that typically begins within 48 hours. Call (757) 715-7829 or fax your referral.",
};

const diagnoses = [
  "Post-Surgical Recovery", "Total Joint Replacement", "CHF / Heart Failure",
  "COPD / Respiratory Disease", "Diabetes Management", "Stroke / CVA",
  "Wound Care", "IV Antibiotic Therapy", "Medication Management",
  "Fall Recovery", "Orthopedic Rehab", "Parkinson's Disease",
  "Multiple Sclerosis", "Cancer / Oncology", "Dementia Support", "Post-Cardiac Event",
];

export default function ProvidersPage() {
  return (
    <>
      <Nav />

      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container page-hero-content">
          <span className="page-hero-badge">🏥 &nbsp; Physicians &amp; Discharge Planners</span>
          <h1>Refer a Patient to Better Days</h1>
          <p>Fast intake, reliable clinical communication, and care that typically begins within 48 hours. Call us or fax the referral — we handle everything from there.</p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center", marginTop: "32px" }}>
            <Link href="tel:7577157829" className="btn btn-gold">Call (757) 715-7829</Link>
            <Link href="/contact" className="btn btn-outline">Send Us a Message</Link>
          </div>
        </div>
      </section>

      {/* WHY REFER TO US */}
      <section className="section">
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "52px" }}>
            <span className="eyebrow">Why Better Days</span>
            <h2 className="display" style={{ fontSize: "clamp(1.9rem,3.5vw,2.6rem)", color: "var(--navy)", marginBottom: "14px" }}>
              The Home Health Partner Discharge Teams Trust
            </h2>
            <p style={{ color: "var(--muted)", maxWidth: "640px", margin: "0 auto" }}>We built our agency around one promise: when you refer a patient to us, we follow through &mdash; fast intake, insurance verification same day in most cases, and clear communication back to your team throughout the care episode.</p>
          </div>

          <div className="ins-page-cards">
            <div className="ins-page-card reveal reveal-delay-1">
              <div className="ins-page-icon" style={{ background: "var(--teal-light)" }}>⚡</div>
              <h3>Fast Intake</h3>
              <p>We accept referrals by phone or fax. In most cases we confirm eligibility and begin scheduling within the same business day.</p>
            </div>
            <div className="ins-page-card reveal reveal-delay-2">
              <div className="ins-page-icon" style={{ background: "var(--gold-light)" }}>📋</div>
              <h3>Clinical Communication</h3>
              <p>Your team receives updates on patient progress, changes in condition, and episode completion. You stay informed without having to chase us down.</p>
            </div>
            <div className="ins-page-card reveal reveal-delay-3">
              <div className="ins-page-icon" style={{ background: "var(--rose-light)" }}>🏥</div>
              <h3>Full Spectrum of Care</h3>
              <p>Skilled nursing (RN/LPN), physical therapy, occupational therapy, and personal care &mdash; so you can send any patient home with confidence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO REFER */}
      <section className="section" style={{ background: "var(--cream-dark)" }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "52px" }}>
            <span className="eyebrow">Referral Process</span>
            <h2 className="display" style={{ fontSize: "clamp(1.9rem,3.5vw,2.6rem)", color: "var(--navy)", marginBottom: "14px" }}>
              Two Ways to Refer &mdash; Your Choice
            </h2>
          </div>

          <div className="apply-steps-grid">
            <div className="apply-step reveal reveal-delay-1">
              <div className="apply-step-num">1</div>
              <h4>Call Our Clinical Team</h4>
              <p>Call us directly at (757) 715-7829. Our clinical intake coordinator will collect all necessary information over the phone and begin the authorization process immediately.</p>
            </div>
            <div className="apply-step reveal reveal-delay-2">
              <div className="apply-step-num">2</div>
              <h4>Fax the Referral</h4>
              <p>Fax the physician&rsquo;s order and face sheet to <strong>(757) 538-7187</strong>. Include the diagnosis, ordered services, and patient contact information. We&rsquo;ll confirm receipt within 2 hours during business hours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE NEED */}
      <section className="section">
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "52px" }}>
            <span className="eyebrow">Required Information</span>
            <h2 className="display" style={{ fontSize: "clamp(1.9rem,3.5vw,2.6rem)", color: "var(--navy)", marginBottom: "14px" }}>
              What to Include with a Referral
            </h2>
            <p style={{ color: "var(--muted)", maxWidth: "580px", margin: "0 auto" }}>To begin the authorization process, we need the following from the referring provider. The more complete the referral, the faster we can begin care.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px 48px", maxWidth: "760px", margin: "0 auto" }} className="reveal">
            <div>
              <div className="check-item"><span className="check-icon">✓</span> Patient name and DOB</div>
              <div className="check-item"><span className="check-icon">✓</span> Primary diagnosis (ICD-10)</div>
              <div className="check-item"><span className="check-icon">✓</span> Ordered services (RN, PT, OT, etc.)</div>
              <div className="check-item"><span className="check-icon">✓</span> Insurance information</div>
              <div className="check-item"><span className="check-icon">✓</span> Physician signature or verbal order</div>
            </div>
            <div>
              <div className="check-item"><span className="check-icon">✓</span> Patient address and phone</div>
              <div className="check-item"><span className="check-icon">✓</span> Homebound status documentation</div>
              <div className="check-item"><span className="check-icon">✓</span> Relevant medical history</div>
              <div className="check-item"><span className="check-icon">✓</span> Discharge summary (if applicable)</div>
              <div className="check-item"><span className="check-icon">✓</span> Preferred start date</div>
            </div>
          </div>

          <div className="reveal ins-note" style={{ maxWidth: "760px", margin: "32px auto 0", fontSize: ".91rem", padding: "20px 28px", borderRadius: "14px", borderLeft: "4px solid var(--teal)" }}>
            <strong style={{ color: "var(--navy)" }}>Virginia Medicaid Patients (CCC Plus Waiver):</strong>{" "}
            If you are referring a patient enrolled in Virginia Medicaid long-term services and supports (LTSS) or the CCC Plus waiver program, please include the completed{" "}
            <strong>DMAS Form 225</strong> (Medicaid LTC Communication Form) with your fax. This form is required by DMAS to initiate home and community-based waiver services.
            Not sure if it applies? Call us at <Link href="tel:7577157829">(757) 715-7829</Link> and we&rsquo;ll walk you through it.
          </div>
        </div>
      </section>

      {/* INSURANCE WE ACCEPT */}
      <section className="section" style={{ background: "var(--cream-dark)" }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "40px" }}>
            <span className="eyebrow">Insurance We Accept</span>
            <h2 className="display" style={{ fontSize: "clamp(1.9rem,3.5vw,2.6rem)", color: "var(--navy)", marginBottom: "14px" }}>
              We Handle the Authorization
            </h2>
            <p style={{ color: "var(--muted)", maxWidth: "580px", margin: "0 auto" }}>Our intake team verifies benefits and obtains prior authorizations so your discharge planners don&rsquo;t have to. We accept:</p>
          </div>

          <div className="reveal" style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center", marginBottom: "32px" }}>
            {["Medicare", "Medicare Advantage", "Virginia Medicaid", "Sentara Health Plans", "Commercial Insurance"].map((plan) => (
              <span key={plan} style={{ background: "var(--navy)", color: "#fff", fontSize: ".9rem", fontWeight: 700, padding: "10px 22px", borderRadius: "100px" }}>{plan}</span>
            ))}
          </div>

          <div className="ins-note reveal" style={{ maxWidth: "680px", margin: "0 auto", fontSize: ".92rem", padding: "22px 28px", borderRadius: "14px", textAlign: "center" }}>
            Not sure if a patient&rsquo;s insurance qualifies? Call us at <Link href="tel:7577157829">(757) 715-7829</Link> and we&rsquo;ll check on the spot.
          </div>
        </div>
      </section>

      {/* DIAGNOSES WE COMMONLY SERVE */}
      <section className="section">
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "44px" }}>
            <span className="eyebrow">Common Referrals</span>
            <h2 className="display" style={{ fontSize: "clamp(1.9rem,3.5vw,2.6rem)", color: "var(--navy)", marginBottom: "14px" }}>
              Diagnoses We Frequently Receive
            </h2>
            <p style={{ color: "var(--muted)", maxWidth: "580px", margin: "0 auto" }}>We are equipped to receive referrals for a wide range of post-acute diagnoses. If you don&rsquo;t see a condition listed, call us &mdash; we can often accommodate.</p>
          </div>

          <div className="reveal" style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center", maxWidth: "860px", margin: "0 auto" }}>
            {diagnoses.map((d) => (
              <span key={d} style={{ background: "var(--cream-dark)", color: "var(--navy)", border: "1.5px solid var(--border)", fontSize: ".85rem", fontWeight: 600, padding: "8px 18px", borderRadius: "100px" }}>{d}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="section cta-band">
        <div className="container">
          <div className="cta-band-inner reveal">
            <div className="cta-band-text">
              <h2>Ready to Make a Referral?</h2>
              <p>Our intake line is staffed during business hours. After-hours, fax your referral and we will follow up first thing the next business day.</p>
            </div>
            <div className="cta-band-actions">
              <Link href="tel:7577157829" className="cta-phone-link">
                <span className="phone-icon-wrap">📞</span>
                (757) 715-7829
              </Link>
              <Link href="/contact" className="btn btn-gold">Send a Message</Link>
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
