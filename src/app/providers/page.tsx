import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "For Referring Providers | Better Days Home Health | Hampton Roads, VA",
  description:
    "Refer a patient to Better Days Home Health for personal care services. Fast intake, same-day insurance verification, and care that typically begins within 48 hours. Call (757) 715-7829.",
};

const diagnoses = [
  "Dementia & Alzheimer's", "Parkinson's Disease", "Multiple Sclerosis",
  "Stroke Recovery", "CHF / Heart Failure", "COPD / Respiratory Disease",
  "Diabetes Management", "Post-Surgical Recovery", "Fall Recovery",
  "Cancer / Oncology Support", "Orthopedic Recovery", "Aging in Place",
  "Limited Mobility / Disability", "Family Caregiver Relief", "Depression & Social Isolation", "Post-Cardiac Event",
];

export default function ProvidersPage() {
  return (
    <>
      <Nav />

      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container page-hero-content">
          <span className="page-hero-badge">🏥 &nbsp; Discharge Planners &amp; Social Workers</span>
          <h1>Refer a Patient to Better Days</h1>
          <p>Fast intake, reliable communication, and personal care that typically begins within 48 hours. Call us &mdash; we handle everything from there.</p>
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
              The Personal Care Partner Discharge Teams Trust
            </h2>
            <p style={{ color: "var(--muted)", maxWidth: "640px", margin: "0 auto" }}>We built our agency around one promise: when you refer a patient to us, we follow through &mdash; fast intake, insurance verification same day in most cases, and clear communication back to your team throughout the care episode.</p>
          </div>

          <div className="ins-page-cards">
            <div className="ins-page-card reveal reveal-delay-1">
              <div className="ins-page-icon" style={{ background: "var(--teal-light)" }}>⚡</div>
              <h3>Fast Intake</h3>
              <p>We accept referrals by phone. In most cases we confirm eligibility and begin scheduling within the same business day.</p>
            </div>
            <div className="ins-page-card reveal reveal-delay-2">
              <div className="ins-page-icon" style={{ background: "var(--gold-light)" }}>📋</div>
              <h3>Clear Communication</h3>
              <p>Your team stays informed throughout the care episode. We keep you updated on patient status so your patients don&apos;t fall through the cracks.</p>
            </div>
            <div className="ins-page-card reveal reveal-delay-3">
              <div className="ins-page-icon" style={{ background: "var(--rose-light)" }}>🧑</div>
              <h3>Personal Care Services</h3>
              <p>PCA, CNA, and HHA services — bathing, grooming, meal prep, companionship, medication reminders, and light housekeeping for your patients transitioning home.</p>
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
              How to Refer a Patient
            </h2>
          </div>

          <div className="apply-steps-grid">
            <div className="apply-step reveal reveal-delay-1">
              <div className="apply-step-num">1</div>
              <h4>Call Our Intake Team</h4>
              <p>Call us directly at (757) 715-7829. Our intake coordinator will collect all necessary information over the phone and begin the verification process immediately.</p>
            </div>
            <div className="apply-step reveal reveal-delay-2">
              <div className="apply-step-num">2</div>
              <h4>Fax the Referral</h4>
              <p>Fax patient information and face sheet to <strong>(757) 538-7187</strong>. Include the diagnosis, care needs, and patient contact information. We&rsquo;ll confirm receipt within 2 hours during business hours.</p>
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
            <p style={{ color: "var(--muted)", maxWidth: "580px", margin: "0 auto" }}>To begin the verification process, we need the following information. The more complete the referral, the faster we can begin care.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px 48px", maxWidth: "760px", margin: "0 auto" }} className="reveal">
            <div>
              <div className="check-item"><span className="check-icon">✓</span> Patient name and DOB</div>
              <div className="check-item"><span className="check-icon">✓</span> Primary diagnosis or care need</div>
              <div className="check-item"><span className="check-icon">✓</span> Type of personal care needed (PCA, CNA, HHA)</div>
              <div className="check-item"><span className="check-icon">✓</span> Insurance information</div>
              <div className="check-item"><span className="check-icon">✓</span> Preferred start date</div>
            </div>
            <div>
              <div className="check-item"><span className="check-icon">✓</span> Patient address and phone</div>
              <div className="check-item"><span className="check-icon">✓</span> Emergency contact information</div>
              <div className="check-item"><span className="check-icon">✓</span> Schedule preferences (morning, afternoon, hours/week)</div>
              <div className="check-item"><span className="check-icon">✓</span> Discharge summary (if applicable)</div>
              <div className="check-item"><span className="check-icon">✓</span> Any special care considerations</div>
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
            {["Virginia Medicaid (CCC Plus Waiver)", "Sentara Health Plans", "Commercial Insurance", "Long-Term Care Insurance", "Private Pay"].map((plan) => (
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
              Situations We Frequently Support
            </h2>
            <p style={{ color: "var(--muted)", maxWidth: "580px", margin: "0 auto" }}>Our certified aides support a wide range of patients who need daily living assistance at home. If you don&apos;t see a condition listed, call us &mdash; we can often accommodate.</p>
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
              <p>Our intake line is staffed during business hours. After-hours, leave a message and we will follow up first thing the next business day.</p>
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
