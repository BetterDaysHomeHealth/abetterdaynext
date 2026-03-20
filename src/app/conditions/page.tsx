import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Conditions We Treat | Better Days Home Health | Hampton Roads, VA",
  description:
    "Better Days Home Health provides in-home care for patients recovering from surgery, managing chronic illness, or living with neurological conditions across Hampton Roads, VA.",
};

const conditions = [
  {
    icon: "🦴",
    title: "Post-Surgical Recovery",
    desc: "Patients recovering from joint replacement, cardiac surgery, spinal procedures, or other major surgeries often need skilled nursing and therapy at home to recover safely and prevent complications.",
    tags: ["Skilled Nursing", "Physical Therapy", "Occupational Therapy"],
  },
  {
    icon: "❤️",
    title: "Congestive Heart Failure (CHF)",
    desc: "CHF patients require close monitoring of fluid status, weight, and symptoms after hospitalization. Our RNs provide assessments and early intervention to prevent readmissions.",
    tags: ["Skilled Nursing (RN)", "Medication Management"],
  },
  {
    icon: "🫁",
    title: "COPD & Respiratory Disease",
    desc: "Patients with COPD, asthma, or other respiratory conditions benefit from skilled nursing assessment, medication education, and breathing management strategies to maintain function at home.",
    tags: ["Skilled Nursing (RN)", "Patient Education"],
  },
  {
    icon: "💉",
    title: "Diabetes Management",
    desc: "Managing insulin, monitoring blood glucose, and preventing diabetic complications requires skilled nursing support — especially after hospitalization or a change in treatment plan.",
    tags: ["Skilled Nursing", "Medication Management", "Patient Education"],
  },
  {
    icon: "🧠",
    title: "Stroke & Neurological Recovery",
    desc: "Stroke survivors often need physical and occupational therapy to regain mobility and independence in daily activities. We bring skilled rehabilitation directly to the home.",
    tags: ["Physical Therapy", "Occupational Therapy", "Skilled Nursing"],
  },
  {
    icon: "🫀",
    title: "Wound Care",
    desc: "Complex or non-healing wounds — surgical incisions, pressure injuries, diabetic ulcers — require regular skilled nursing assessment and treatment to prevent infection and promote closure.",
    tags: ["Skilled Nursing (RN)", "LPN Services"],
  },
  {
    icon: "🐘",
    title: "Dementia & Alzheimer's Support",
    desc: "Patients with cognitive decline benefit from structured personal care, medication reminders, and companionship that preserves dignity and provides family caregiver relief.",
    tags: ["Personal Care Aide", "Companionship", "Medication Reminders"],
  },
  {
    icon: "🏃",
    title: "Fall Prevention & Recovery",
    desc: "A fall can significantly impact a patient's independence and confidence. Our physical therapists conduct home safety assessments and build strength and balance programs tailored to each patient.",
    tags: ["Physical Therapy", "Occupational Therapy", "Home Safety Assessment"],
  },
  {
    icon: "💊",
    title: "IV Therapy & Infusion",
    desc: "Patients requiring IV antibiotics, hydration therapy, or other infusion treatments can receive safe, clinical-grade care at home rather than spending days in a facility.",
    tags: ["Skilled Nursing (RN)", "IV Therapy"],
  },
  {
    icon: "💌",
    title: "Post-Cardiac Event",
    desc: "After a heart attack, cardiac catheterization, or bypass surgery, patients need close monitoring of vital signs, activity tolerance, and medication compliance as they transition home.",
    tags: ["Skilled Nursing (RN)", "Medication Management"],
  },
  {
    icon: "🦴",
    title: "Orthopedic & Musculoskeletal",
    desc: "Arthritis, fractures, back surgery, and other musculoskeletal conditions often require skilled PT and OT to restore strength, range of motion, and functional independence at home.",
    tags: ["Physical Therapy", "Occupational Therapy"],
  },
  {
    icon: "🧬",
    title: "Parkinson's Disease & MS",
    desc: "Patients with Parkinson's or multiple sclerosis benefit from ongoing PT and OT to maintain mobility, manage symptoms, and adapt their home environment for safety and independence.",
    tags: ["Physical Therapy", "Occupational Therapy", "Personal Care"],
  },
];

export default function ConditionsPage() {
  return (
    <>
      <Nav />

      {/* PAGE HERO */}
      <section className="page-hero no-arch">
        <div className="container page-hero-content">
          <span className="page-hero-badge">🔬 &nbsp; Conditions &amp; Diagnoses We Serve</span>
          <h1>Conditions We Treat</h1>
          <p>From post-surgical recovery to chronic disease management &mdash; our clinical team is experienced across a wide range of diagnoses that benefit from skilled home health care.</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="section" style={{ background: "var(--cream-dark)" }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "52px" }}>
            <span className="eyebrow">In-Home Clinical Care</span>
            <h2 className="display" style={{ fontSize: "clamp(1.9rem,3.5vw,2.6rem)", color: "var(--navy)", marginBottom: "14px" }}>
              When Home Is the Best Place to Heal
            </h2>
            <p style={{ color: "var(--muted)", maxWidth: "640px", margin: "0 auto" }}>Home health care isn&rsquo;t just for the elderly. Our licensed nurses and therapists treat patients of all ages recovering from surgery, managing complex chronic conditions, or regaining independence after a neurological event. If a physician orders it, we deliver it at home.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }} className="reveal">
            {[
              { icon: "🏥", title: "Skilled Nursing Care", sub: "RN & LPN visits at home" },
              { icon: "🧘", title: "Rehabilitation Therapy", sub: "PT & OT in your home" },
              { icon: "💊", title: "Ongoing Disease Management", sub: "Chronic condition monitoring" },
            ].map((item) => (
              <div key={item.title} style={{ background: "var(--white)", border: "1.5px solid var(--border)", borderRadius: "16px", padding: "24px", textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: "10px" }}>{item.icon}</div>
                <h4 style={{ color: "var(--navy)", fontSize: ".95rem", marginBottom: "6px" }}>{item.title}</h4>
                <p style={{ color: "var(--muted)", fontSize: ".82rem" }}>{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONDITIONS GRID */}
      <section className="section">
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "52px" }}>
            <span className="eyebrow">What We Treat</span>
            <h2 className="display" style={{ fontSize: "clamp(1.9rem,3.5vw,2.6rem)", color: "var(--navy)", marginBottom: "14px" }}>
              Diagnoses We Commonly Serve
            </h2>
            <p style={{ color: "var(--muted)", maxWidth: "580px", margin: "0 auto" }}>The following conditions regularly benefit from skilled home health. Our team is experienced across all of these diagnoses and works closely with your physician to design the right plan of care.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "22px" }}>
            {conditions.map((cond, i) => (
              <div key={cond.title} className={`cond-card reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="cond-icon">{cond.icon}</div>
                <h3>{cond.title}</h3>
                <p>{cond.desc}</p>
                <div className="cond-tags">
                  {cond.tags.map((tag) => (
                    <span key={tag} className="cond-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOT ON THE LIST */}
      <section className="section" style={{ background: "var(--cream-dark)" }}>
        <div className="container">
          <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }} className="reveal">
            <span className="eyebrow">Don&rsquo;t See Your Condition?</span>
            <h2 className="display" style={{ fontSize: "clamp(1.9rem,3.5vw,2.6rem)", color: "var(--navy)", marginBottom: "18px" }}>
              We Treat More Than What&rsquo;s Listed
            </h2>
            <p style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: "1.8", marginBottom: "28px" }}>The conditions above represent our most common referrals, but our clinical team is equipped to support many other diagnoses. If a physician has ordered home health services, call us and we&rsquo;ll let you know how we can help.</p>
            <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn btn-primary">Talk to Our Team</Link>
              <Link href="tel:7577157829" className="btn btn-outline-dark">(757) 715-7829</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOR PROVIDERS CALLOUT */}
      <section className="section-sm" style={{ background: "var(--navy)" }}>
        <div className="container reveal">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "32px", flexWrap: "wrap" }}>
            <div>
              <h3 style={{ color: "var(--white)", fontSize: "1.2rem", marginBottom: "8px" }}>Referring a Patient?</h3>
              <p style={{ color: "rgba(255,255,255,.6)", fontSize: ".92rem", maxWidth: "500px" }}>Call or fax your referral to our intake team. We confirm eligibility same day in most cases.</p>
            </div>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", flexShrink: 0 }}>
              <Link href="/providers" className="btn btn-gold">Referral Information &rarr;</Link>
              <Link href="tel:7577157829" style={{ color: "rgba(255,255,255,.7)", fontSize: ".88rem", fontWeight: 600, display: "flex", alignItems: "center" }}>Or call (757) 715-7829</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="section cta-band">
        <div className="container">
          <div className="cta-band-inner reveal">
            <div className="cta-band-text">
              <h2>Ready to Get Started?</h2>
              <p>Whether you&rsquo;re a patient, family member, or referring provider &mdash; we&rsquo;re here to help.</p>
            </div>
            <div className="cta-band-actions">
              <Link href="tel:7577157829" className="cta-phone-link">
                <span className="phone-icon-wrap">📞</span>
                (757) 715-7829
              </Link>
              <Link href="/contact" className="btn btn-gold">Contact Us Today</Link>
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
