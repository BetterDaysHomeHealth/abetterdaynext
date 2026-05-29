import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Who We Help | Better Days Home Health | Hampton Roads, VA",
  description:
    "Better Days Home Health provides certified personal care aides for seniors, patients with chronic conditions, dementia, Parkinson's, and anyone who needs daily living support at home in Hampton Roads, VA.",
};

const conditions = [
  {
    icon: "👴",
    title: "Aging in Place",
    desc: "Seniors who want to remain safely and independently in their own home benefit from personal care aides who assist with daily routines, provide companionship, and help reduce fall risks.",
    tags: ["Personal Care Aide", "Companionship", "Light Housekeeping"],
  },
  {
    icon: "🐘",
    title: "Dementia & Alzheimer's",
    desc: "Patients with cognitive decline benefit from structured personal care, consistent routines, medication reminders, and compassionate companionship that preserves dignity and provides family caregiver relief.",
    tags: ["Personal Care Aide", "Companionship", "Medication Reminders"],
  },
  {
    icon: "🧬",
    title: "Parkinson's Disease & MS",
    desc: "Patients with Parkinson's or multiple sclerosis need daily personal care support — bathing, dressing, mobility assistance — from aides who understand their unique challenges and pace their care accordingly.",
    tags: ["Personal Care Aide", "CNA", "Companionship"],
  },
  {
    icon: "🏥",
    title: "Post-Hospital Recovery",
    desc: "After a hospital discharge, patients often need daily support with bathing, meal prep, and light housekeeping while they regain strength. Our aides provide that bridge care at home.",
    tags: ["Personal Care Aide", "Meal Preparation", "Light Housekeeping"],
  },
  {
    icon: "❤️",
    title: "Congestive Heart Failure (CHF)",
    desc: "Patients managing CHF benefit from daily personal care support, assistance with low-sodium meal preparation, and consistent companionship that helps them stay active and engaged at home.",
    tags: ["Personal Care Aide", "Meal Preparation", "Companionship"],
  },
  {
    icon: "🫁",
    title: "COPD & Respiratory Disease",
    desc: "Patients with COPD or other respiratory conditions benefit from personal care aides who assist with daily activities that have become difficult, reducing exertion and supporting quality of life at home.",
    tags: ["Personal Care Aide", "Light Housekeeping", "Meal Preparation"],
  },
  {
    icon: "💉",
    title: "Diabetes Management Support",
    desc: "Our aides support diabetic patients with healthy meal preparation, medication reminders, and daily living assistance — helping them maintain routines that support their treatment plan.",
    tags: ["Meal Preparation", "Medication Reminders", "Personal Care Aide"],
  },
  {
    icon: "🤕",
    title: "Injury & Fall Recovery",
    desc: "Patients recovering from a fall or injury benefit from daily personal care support while rebuilding confidence and strength. Our aides help with bathing, dressing, and safe mobility at home.",
    tags: ["Personal Care Aide", "CNA", "Companionship"],
  },
  {
    icon: "🦠",
    title: "Cancer & Oncology Support",
    desc: "Cancer patients undergoing treatment or in recovery often need help with daily activities due to fatigue. Our aides provide compassionate personal care and meaningful companionship during a difficult time.",
    tags: ["Personal Care Aide", "Companionship", "Meal Preparation"],
  },
  {
    icon: "🧠",
    title: "Stroke Recovery",
    desc: "Stroke survivors often need personal care aide support — bathing, dressing, grooming — while they rebuild daily independence. Our aides are patient, consistent, and trained to support neurological recovery.",
    tags: ["Personal Care Aide", "CNA", "Companionship"],
  },
  {
    icon: "👪",
    title: "Family Caregiver Relief",
    desc: "Family caregivers need rest too. Our aides provide respite care so family members can step away with confidence, knowing their loved one is in compassionate, capable hands.",
    tags: ["Respite Care", "Personal Care Aide", "Companionship"],
  },
  {
    icon: "💌",
    title: "Social Isolation & Loneliness",
    desc: "Isolation and loneliness have real health consequences for older adults. Our companionship services provide meaningful social engagement, conversation, and connection that improves well-being.",
    tags: ["Companionship", "Personal Care Aide", "Appointment Accompaniment"],
  },
];

export default function ConditionsPage() {
  return (
    <>
      <Nav />

      {/* PAGE HERO */}
      <section className="page-hero no-arch">
        <div className="container page-hero-content">
          <span className="page-hero-badge">🧑 &nbsp; Who We Help</span>
          <h1>Who We Help</h1>
          <p>From aging in place to recovering after illness &mdash; our certified personal care aides support patients and families across Hampton Roads wherever they are in life.</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="section" style={{ background: "var(--cream-dark)" }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "52px" }}>
            <span className="eyebrow">Personal Care at Home</span>
            <h2 className="display" style={{ fontSize: "clamp(1.9rem,3.5vw,2.6rem)", color: "var(--navy)", marginBottom: "14px" }}>
              When Home Is the Right Place to Be
            </h2>
            <p style={{ color: "var(--muted)", maxWidth: "640px", margin: "0 auto" }}>Personal care isn&rsquo;t just for the elderly. Our certified aides support patients of all ages who need help with daily living activities — so they can remain safely and comfortably at home rather than in a facility.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }} className="reveal">
            {[
              { icon: "🧑", title: "Personal Care Aides", sub: "PCA, CNA & HHA services at home" },
              { icon: "👪", title: "Family Relief", sub: "Respite care when caregivers need a break" },
              { icon: "💌", title: "Companionship", sub: "Meaningful connection and daily engagement" },
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
            <span className="eyebrow">Who We Serve</span>
            <h2 className="display" style={{ fontSize: "clamp(1.9rem,3.5vw,2.6rem)", color: "var(--navy)", marginBottom: "14px" }}>
              Situations We Commonly Support
            </h2>
            <p style={{ color: "var(--muted)", maxWidth: "580px", margin: "0 auto" }}>The following situations regularly benefit from personal care aide support. Our team is experienced across all of these and will match you with the right aide for your needs.</p>
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
            <span className="eyebrow">Don&rsquo;t See Your Situation?</span>
            <h2 className="display" style={{ fontSize: "clamp(1.9rem,3.5vw,2.6rem)", color: "var(--navy)", marginBottom: "18px" }}>
              We Support More Than What&rsquo;s Listed
            </h2>
            <p style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: "1.8", marginBottom: "28px" }}>The situations above represent our most common referrals, but if someone needs help with daily living activities at home, we can almost certainly help. Call us and we&rsquo;ll talk through what&rsquo;s needed.</p>
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
              <p style={{ color: "rgba(255,255,255,.6)", fontSize: ".92rem", maxWidth: "500px" }}>Call our intake team. We confirm eligibility same day in most cases and care typically begins within 48 hours.</p>
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
