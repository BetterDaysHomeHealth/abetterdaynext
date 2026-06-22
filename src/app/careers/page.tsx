import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CareerFormWrap } from "@/components/CareerFormWrap";

export const metadata: Metadata = {
  title: "Careers | Better Days Home Health | Hampton Roads, VA",
  description:
    "Join the Better Days Home Health team. We are hiring PCAs, CNAs, HHAs, and a Community Liaison in Hampton Roads, Virginia. Apply today.",
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
            <p style={{ color: "var(--muted)", maxWidth: "560px", margin: "0 auto" }}>We have built a workplace where caregivers and community partners can do their best work, grow their careers, and genuinely impact the lives of patients and families in our community.</p>
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
              <h4>Room to Grow</h4>
              <p>As Better Days grows, so does the team. Whether you&apos;re a caregiver building experience or a liaison growing a referral network, there is real opportunity here.</p>
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
              { icon: "🧑", title: "Personal Care Aide (PCA)", desc: "Provide compassionate personal care and daily living assistance to patients in their homes throughout Hampton Roads. Duties include bathing, grooming, dressing, meal preparation, companionship, medication reminders, and light housekeeping. PCA training required.", delay: 1 },
              { icon: "👨‍⚕️", title: "Certified Nursing Assistant (CNA)", desc: "Provide personal care, basic health observations, and daily living support for patients in their homes. CNAs assist with bathing, grooming, vital signs monitoring, and patient comfort. Active Virginia CNA certification required.", delay: 2 },
              { icon: "🏠", title: "Home Health Aide (HHA)", desc: "Assist patients with personal care, light housekeeping, and daily living activities as part of a coordinated home care plan. HHA certification or equivalent training required.", delay: 3 },
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

          {/* Community Liaison — full-width featured card */}
          <div className="open-role-card reveal" style={{ marginTop: "24px", borderColor: "var(--gold)", borderWidth: "2px" }}>
            <div className="open-role-header">
              <div className="open-role-title">
                <div className="open-role-icon">🤝</div>
                <h3>Community Liaison</h3>
              </div>
              <span className="open-role-badge">Hiring Now</span>
            </div>
            <p style={{ marginBottom: "20px" }}>
              Build and maintain referral relationships with hospital discharge planners, social workers, SNFs, ALFs, and physician offices across Hampton Roads. This is a commission-based role built for someone with healthcare connections who wants to grow a territory on their own terms — no office hours, no micromanagement.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px", marginBottom: "16px" }}>
              {[
                { label: "$500/mo", sub: "ramp stipend — first 90 days" },
                { label: "$200", sub: "per admitted case" },
                { label: "$100", sub: "bonus at 90 days active" },
                { label: "$50/mo", sub: "per case beyond 90 days" },
                { label: "$600/mo", sub: "retainer at 5+ admits/month" },
              ].map((item) => (
                <div key={item.label} style={{ background: "var(--cream-dark)", borderRadius: "10px", padding: "14px 16px", textAlign: "center" }}>
                  <p style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--navy)", lineHeight: 1 }}>{item.label}</p>
                  <p style={{ fontSize: "0.78rem", color: "var(--muted)", marginTop: "4px" }}>{item.sub}</p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "0.85rem", color: "var(--muted)" }}>
              Ideal background: home health, social work, discharge planning, or medical sales. Existing Hampton Roads healthcare relationships preferred but not required. Reliable transportation required.
            </p>
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
