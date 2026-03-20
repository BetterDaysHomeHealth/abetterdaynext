import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CareerFormWrap } from "@/components/CareerFormWrap";

export const metadata: Metadata = {
  title: "Careers | Better Days Home Health | Hampton Roads, VA",
  description:
    "Join the Better Days Home Health team. We are hiring RNs, PTs, OTs, LPNs, PCAs, CNAs, and HHAs in Hampton Roads, Virginia. Apply today.",
};

export default function CareersPage() {
  return (
    <>
      <Nav />

      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container page-hero-content">
          <span className="page-hero-badge">✨ &nbsp; We Are Hiring &mdash; Hampton Roads, VA</span>
          <h1>Join Our Team</h1>
          <p>Make a real difference in patients&apos; lives. We are looking for compassionate, skilled professionals to join the Better Days family.</p>
          <Link href="#apply" className="btn btn-gold" style={{ marginTop: "8px" }}>Apply Now</Link>
        </div>
      </section>

      {/* WHY WORK WITH US */}
      <section className="section">
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "52px" }}>
            <span className="eyebrow">Why Work With Us</span>
            <h2 className="display" style={{ fontSize: "clamp(1.9rem,3.5vw,2.6rem)", color: "var(--navy)", marginBottom: "14px" }}>
              A Team Worth Joining
            </h2>
            <p style={{ color: "var(--muted)", maxWidth: "560px", margin: "0 auto" }}>We have built a workplace where clinical professionals can do their best work, grow their careers, and genuinely impact the lives of patients and families in our community.</p>
          </div>

          <div className="perks-grid">
            <div className="perk-card reveal reveal-delay-1">
              <div className="perk-icon">🏠</div>
              <h4>Work in the Community You Live In</h4>
              <p>Home health lets you serve patients right in your own community. Build lasting relationships with patients and families across Hampton Roads without hospital shift restrictions.</p>
            </div>
            <div className="perk-card reveal reveal-delay-2">
              <div className="perk-icon">🕐</div>
              <h4>Flexible Scheduling — FT, PT &amp; PRN</h4>
              <p>We offer full-time, part-time, and per diem (PRN) positions. We work with you to build a schedule that fits your life &mdash; whether you need consistent hours or supplemental income.</p>
            </div>
            <div className="perk-card reveal reveal-delay-1">
              <div className="perk-icon">🎉</div>
              <h4>CEU &amp; License Support</h4>
              <p>We support continuing education and can assist with CEU resources to help licensed clinicians maintain their credentials and grow professionally.</p>
            </div>
            <div className="perk-card reveal reveal-delay-2">
              <div className="perk-icon">🫀</div>
              <h4>Meaningful, Patient-Centered Work</h4>
              <p>In home health, you are often the most consistent clinical presence in a patient&apos;s recovery. The relationships you build and the impact you have are profoundly meaningful.</p>
            </div>
            <div className="perk-card reveal reveal-delay-3">
              <div className="perk-icon">📈</div>
              <h4>Grow Your Clinical Skills</h4>
              <p>Home health exposes you to a wide variety of patient populations and conditions. Build diverse clinical skills while maintaining the autonomy that makes home care unique.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMP STRIP */}
      <section className="section-sm" style={{ background: "var(--navy)" }}>
        <div className="container reveal">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px", textAlign: "center" }}>
            <div>
              <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>💰</div>
              <h4 style={{ color: "var(--white)", fontSize: ".95rem", marginBottom: "5px" }}>Competitive Pay</h4>
              <p style={{ color: "rgba(255,255,255,.55)", fontSize: ".82rem" }}>Rates competitive with Hampton Roads market. Discussed during your intake call.</p>
            </div>
            <div>
              <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>🕐</div>
              <h4 style={{ color: "var(--white)", fontSize: ".95rem", marginBottom: "5px" }}>FT &bull; PT &bull; PRN</h4>
              <p style={{ color: "rgba(255,255,255,.55)", fontSize: ".82rem" }}>All schedule types available. We work around your life.</p>
            </div>
            <div>
              <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>🎉</div>
              <h4 style={{ color: "var(--white)", fontSize: ".95rem", marginBottom: "5px" }}>CEU Support</h4>
              <p style={{ color: "rgba(255,255,255,.55)", fontSize: ".82rem" }}>Resources and support for continuing education and license renewal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* OPEN ROLES */}
      <section className="section" style={{ background: "var(--cream-dark)" }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "52px" }}>
            <span className="eyebrow">Open Positions</span>
            <h2 className="display" style={{ fontSize: "clamp(1.9rem,3.5vw,2.6rem)", color: "var(--navy)", marginBottom: "14px" }}>
              Current Openings
            </h2>
            <p style={{ color: "var(--muted)", maxWidth: "520px", margin: "0 auto" }}>We are actively hiring for all of the following positions. Qualified candidates are encouraged to apply regardless of experience level.</p>
          </div>

          <div className="open-roles-grid">
            {[
              { icon: "🏥", title: "Registered Nurse (RN)", desc: "Deliver skilled nursing visits including wound care, IV therapy, medication management, and patient assessments for our homebound patient population throughout Hampton Roads. Active Virginia RN license required.", delay: 1 },
              { icon: "🧘", title: "Physical Therapist (PT)", desc: "Provide in-home physical therapy evaluations and treatments for patients recovering from surgery, stroke, injury, or managing chronic conditions. Active Virginia PT license required.", delay: 2 },
              { icon: "🤛", title: "Occupational Therapist (OT)", desc: "Evaluate and treat patients to improve functional independence in daily activities. Conduct home safety assessments and recommend adaptive equipment. Active Virginia OT license required.", delay: 3 },
              { icon: "💊", title: "Licensed Practical Nurse (LPN)", desc: "Provide skilled nursing services under RN supervision including medication administration, wound care assistance, vital signs monitoring, and patient education. Active Virginia LPN license required.", delay: 1 },
              { icon: "🧑", title: "PCA / CNA / HHA", desc: "Provide compassionate personal care and daily living assistance to patients in their homes. Duties include personal hygiene, meal prep, companionship, and light housekeeping. CNA certification or HHA/PCA training preferred.", delay: 2 },
            ].map((role) => (
              <div key={role.title} className={`open-role-card reveal reveal-delay-${role.delay}`}>
                <div className="open-role-header">
                  <div className="open-role-title">
                    <div className="open-role-icon">{role.icon}</div>
                    <h3>{role.title}</h3>
                  </div>
                  <span className="open-role-badge">Hiring Now</span>
                </div>
                <p>{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO APPLY */}
      <section className="section" id="apply">
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "52px" }}>
            <span className="eyebrow">Application Process</span>
            <h2 className="display" style={{ fontSize: "clamp(1.9rem,3.5vw,2.6rem)", color: "var(--navy)", marginBottom: "14px" }}>
              How to Apply
            </h2>
            <p style={{ color: "var(--muted)", maxWidth: "520px", margin: "0 auto" }}>Our hiring process is straightforward and respectful of your time. Here is what to expect.</p>
          </div>

          <div className="apply-steps-grid">
            <div className="apply-step reveal reveal-delay-1">
              <div className="apply-step-num">1</div>
              <h4>Submit Your Application</h4>
              <p>Fill out the quick form below with your basic information and the role you are applying for. Takes less than two minutes.</p>
            </div>
            <div className="apply-step reveal reveal-delay-2">
              <div className="apply-step-num">2</div>
              <h4>We Will Be in Touch</h4>
              <p>A member of our team will reach out within a few business days to discuss your background, availability, and the position in more detail.</p>
            </div>
            <div className="apply-step reveal reveal-delay-3">
              <div className="apply-step-num">3</div>
              <h4>Credentialing &amp; Onboarding</h4>
              <p>Once we move forward, we handle credential verification, background checks, and onboarding orientation so you can begin serving patients right away.</p>
            </div>
          </div>

          {/* Application Form */}
          <div style={{ marginTop: "64px" }} className="reveal">
            <Suspense fallback={<div className="apply-form-wrap" />}>
              <CareerFormWrap />
            </Suspense>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="section cta-band">
        <div className="container">
          <div className="cta-band-inner reveal">
            <div className="cta-band-text">
              <h2>Ready to Make a Difference?</h2>
              <p>Join a team where your skills, compassion, and dedication are valued every single day.</p>
            </div>
            <div className="cta-band-actions">
              <Link href="tel:7577157829" className="cta-phone-link">
                <span className="phone-icon-wrap">📞</span>
                (757) 715-7829
              </Link>
              <Link href="#apply" className="btn btn-gold">Apply Today</Link>
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
