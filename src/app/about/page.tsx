import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Better Days Home Health | Hampton Roads, VA",
  description:
    "Learn about Better Days Home Health — a VDH-licensed home health agency serving Hampton Roads, Virginia with skilled nursing, therapy, and personal care.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />

      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container page-hero-content">
          <span className="page-hero-badge">🏥 &nbsp; VDH Licensed Home Health Agency</span>
          <h1>About Better Days Home Health</h1>
          <p>A Hampton Roads family committed to bringing expert, compassionate care into your home.</p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="section">
        <div className="container">
          <div className="story-grid">
            <div className="story-text reveal">
              <span className="eyebrow">Our Story</span>
              <h2 className="display" style={{ fontSize: "clamp(1.9rem,3.5vw,2.6rem)", color: "var(--navy)", marginBottom: "24px" }}>
                Built on a Belief That Everyone Deserves Better Days
              </h2>
              <p>Better Days Home Health was founded with a clear and deeply personal purpose: to make expert home health care accessible, compassionate, and dignified for every family in Hampton Roads. We saw firsthand how challenging it can be to navigate the healthcare system while also caring for a loved one at home, and we knew there was a better way.</p>
              <p>From our very first patient, we have operated with the conviction that clinical excellence and genuine human connection are not in conflict &mdash; they are inseparable. Our licensed nurses, therapists, and certified aides are selected not only for their credentials, but for their character.</p>
              <p>Today, we serve families across Hampton Roads and beyond, and our mission has never wavered: to bring better days, one patient at a time.</p>
              <div className="about-checklist" style={{ marginTop: "32px", marginBottom: "36px" }}>
                <div className="check-item"><span className="check-icon">✓</span> VDH Licensed</div>
                <div className="check-item"><span className="check-icon">✓</span> Medicaid Accepted</div>
                <div className="check-item"><span className="check-icon">✓</span> Sentara Network</div>
                <div className="check-item"><span className="check-icon">✓</span> All Therapies In-Home</div>
                <div className="check-item"><span className="check-icon">✓</span> Skilled &amp; Personal Care</div>
                <div className="check-item"><span className="check-icon">✓</span> Hampton Roads &amp; Beyond</div>
              </div>
              <Link href="/contact" className="btn btn-primary">Get in Touch</Link>
            </div>

          </div>
        </div>
      </section>

      {/* MISSION & VALUES */}
      <section className="section" style={{ background: "var(--cream-dark)" }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "52px" }}>
            <span className="eyebrow">Mission &amp; Values</span>
            <h2 className="display" style={{ fontSize: "clamp(1.9rem,3.5vw,2.6rem)", color: "var(--navy)", marginBottom: "14px" }}>
              What Guides Everything We Do
            </h2>
            <p style={{ color: "var(--muted)", maxWidth: "540px", margin: "0 auto" }}>Our core values are not just words on a wall. They are the principles our team lives by in every interaction, every visit, and every care decision.</p>
          </div>

          <div className="values-grid">
            <div className="value-card reveal reveal-delay-1">
              <div className="value-icon" style={{ background: "var(--teal-light)" }}>🫀</div>
              <h3>Compassion First</h3>
              <p>We approach every patient with empathy, patience, and genuine concern. Home health care is personal, and we never lose sight of the human being at the center of every plan.</p>
            </div>
            <div className="value-card reveal reveal-delay-2">
              <div className="value-icon" style={{ background: "var(--gold-light)" }}>🎉</div>
              <h3>Clinical Excellence</h3>
              <p>Our licensed nurses and therapists are held to the highest professional standards. We pursue continuous education and best practices to deliver outcomes that rival inpatient settings.</p>
            </div>
            <div className="value-card reveal reveal-delay-3">
              <div className="value-icon" style={{ background: "var(--rose-light)" }}>👪</div>
              <h3>Family Partnership</h3>
              <p>We treat families as partners in care, not bystanders. Open communication, education, and collaboration with loved ones and physicians are central to how we operate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY WE STARTED */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: "780px", margin: "0 auto" }} className="reveal">
            <span className="eyebrow">Why We Started</span>
            <h2 className="display" style={{ fontSize: "clamp(1.9rem,3.5vw,2.6rem)", color: "var(--navy)", marginBottom: "28px" }}>
              Home Is Where Healing Happens
            </h2>
            <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: "1.85", marginBottom: "22px" }}>
              The founders of Better Days Home Health watched families in Hampton Roads struggle to find coordinated, trustworthy home health services after hospital discharge. Patients were sent home with complex medical needs &mdash; wound care, IV therapy, medication management &mdash; and expected to navigate a fragmented system on their own.
            </p>
            <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: "1.85", marginBottom: "22px" }}>
              We believed that the home should be the most healing place possible, not a source of anxiety. So we built an agency that handles the complexity &mdash; insurance verification, care coordination, skilled clinical visits, personal care scheduling &mdash; so families can focus on what matters most.
            </p>
            <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: "1.85" }}>
              Every member of our team is here because they believe in that mission. From our registered nurses and therapists to our personal care aides, we share a commitment to making each day better for the patients and families we serve across Hampton Roads and surrounding Virginia communities.
            </p>
          </div>
        </div>
      </section>

      {/* FOUNDING STORY */}
      <section className="section" style={{ background: "var(--cream-dark)" }}>
        <div className="container">
          <div style={{ maxWidth: "780px", margin: "0 auto" }} className="reveal">
            <span className="eyebrow">Our Founding Story</span>
            <h2 className="display" style={{ fontSize: "clamp(1.9rem,3.5vw,2.6rem)", color: "var(--navy)", marginBottom: "28px" }}>
              How Better Days Began
            </h2>
            <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: "1.85", marginBottom: "22px" }}>
              Better Days Home Health was born out of a personal mission to bring compassionate, dignified care directly into people&apos;s homes. Jessica, the owner, graduated from Radford University in 2009 with a degree in Marketing and Management. She didn&apos;t come from a healthcare background &mdash; but she came with determination.
            </p>
            <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: "1.85", marginBottom: "22px" }}>
              The idea took shape during a conversation with her neighbor, who shared the challenges of finding quality home care for a loved one. That conversation made something clear: there was a significant gap in home health services that truly respected the individual needs and dignity of each patient. With her neighbor&apos;s encouragement, the concept of Better Days Home Health began to take shape.
            </p>
            <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: "1.85", marginBottom: "22px" }}>
              Jessica knew she needed a clinical partner who understood home health from the inside. That&apos;s when she met Nurse Ashley &mdash; a skilled, experienced nurse right here in Hampton Roads who had seen firsthand the profound impact that quality home care could have on patients&apos; lives. Ashley brought the clinical expertise. Jessica brought the business, marketing, and community foundation. Together, they built Better Days Home Health.
            </p>
            <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: "1.85" }}>
              That partnership is still at the heart of everything we do. Care that is not just about treatment &mdash; but about understanding and valuing every patient as a person.
            </p>
          </div>
        </div>
      </section>

      {/* OUR TEAM */}
      <section className="section">
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "52px" }}>
            <span className="eyebrow">Our People</span>
            <h2 className="display" style={{ fontSize: "clamp(1.9rem,3.5vw,2.6rem)", color: "var(--navy)", marginBottom: "14px" }}>
              The Team Behind Better Days
            </h2>
            <p style={{ color: "var(--muted)", maxWidth: "560px", margin: "0 auto" }}>Our clinical and administrative team brings decades of combined home health experience to every patient interaction. We are Hampton Roads locals who care deeply about the community we serve.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: "24px" }}>
            <div className="team-card reveal reveal-delay-1">
              <div className="team-avatar">RC</div>
              <h4>Clinical Leadership</h4>
              <p className="team-role">Director of Clinical Services</p>
              <p className="team-bio">Oversees all skilled nursing and therapy operations, ensuring care plans meet the highest clinical standards and regulatory requirements.</p>
            </div>
            <div className="team-card reveal reveal-delay-2">
              <div className="team-avatar">IT</div>
              <h4>Intake &amp; Coordination</h4>
              <p className="team-role">Patient Intake Coordinator</p>
              <p className="team-bio">First point of contact for new patients and referrals. Handles insurance verification, scheduling, and care coordination from day one.</p>
            </div>
            <div className="team-card reveal reveal-delay-3">
              <div className="team-avatar">FA</div>
              <h4>Field Nursing</h4>
              <p className="team-role">Lead Registered Nurse</p>
              <p className="team-bio">Our RNs conduct initial patient assessments, develop care plans in collaboration with physicians, and deliver skilled nursing visits throughout Hampton Roads.</p>
            </div>
            <div className="team-card reveal reveal-delay-4">
              <div className="team-avatar">PC</div>
              <h4>Personal Care</h4>
              <p className="team-role">Personal Care Supervisor</p>
              <p className="team-bio">Manages our certified aide team, ensuring personal care visits are compassionate, consistent, and aligned with each patient&rsquo;s individual needs.</p>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "48px" }} className="reveal">
            <p style={{ color: "var(--muted)", maxWidth: "560px", margin: "0 auto 24px" }}>Want to be part of our team? We are actively hiring RNs, LPNs, PTs, OTs, and personal care aides throughout Hampton Roads.</p>
            <Link href="/careers" className="btn btn-outline-dark">View Open Positions &rarr;</Link>
          </div>
        </div>
      </section>

      {/* VDH LICENSED CALLOUT */}
      <section className="section-sm" style={{ background: "var(--cream-dark)" }}>
        <div className="container reveal">
          <div className="vdh-callout">
            <div className="vdh-badge-icon">🎉</div>
            <div>
              <h3>Virginia Department of Health Licensed</h3>
              <p>Better Days Home Health holds an active license issued by the Virginia Department of Health (VDH), meeting all state requirements for home health agencies in the Commonwealth of Virginia. This licensure ensures that our care standards, staff qualifications, and operational practices are subject to rigorous state oversight &mdash; giving your family peace of mind that you are working with a fully vetted, accountable provider.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOR REFERRING PROVIDERS */}
      <section className="section" style={{ background: "var(--cream-dark)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }} className="reveal">
            <div>
              <div className="eyebrow">For Physicians &amp; Discharge Planners</div>
              <h2 className="display" style={{ fontSize: "clamp(1.8rem,3vw,2.4rem)", color: "var(--navy)", marginBottom: "16px" }}>
                A Home Health Partner You Can Trust
              </h2>
              <p style={{ color: "var(--muted)", marginBottom: "16px" }}>
                We work closely with physicians, hospital discharge teams, and social workers throughout Hampton Roads to ensure seamless transitions from facility to home. Our clinical team is responsive, communicative, and committed to keeping you informed on patient progress.
              </p>
              <p style={{ color: "var(--muted)", marginBottom: "28px" }}>
                Referring a patient to Better Days is simple. Call us directly or have your office send over the referral — we&apos;ll handle insurance verification, coordinate the physician&apos;s order, and begin care quickly so your patients don&apos;t fall through the cracks.
              </p>
              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", alignItems: "center" }}>
                <Link href="/providers" className="btn btn-primary">How to Refer a Patient &rarr;</Link>
                <Link href="tel:7577157829" className="btn btn-outline-dark">Call (757) 715-7829</Link>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { icon: "⚡", title: "Fast Intake", desc: "We accept referrals by phone or fax and confirm eligibility same-day in most cases." },
                { icon: "📋", title: "Clinical Communication", desc: "Regular updates sent to the referring physician. We keep everyone on the same page." },
                { icon: "🛡", title: "Fully Licensed & Insured", desc: "VDH licensed. All staff credentialed, background-checked, and covered." },
              ].map((item) => (
                <div key={item.title} style={{ background: "var(--white)", border: "1.5px solid var(--border)", borderRadius: "14px", padding: "22px 24px", display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div style={{ width: "44px", height: "44px", background: "var(--teal-light)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <h4 style={{ fontSize: ".95rem", fontWeight: 800, color: "var(--navy)", marginBottom: "5px" }}>{item.title}</h4>
                    <p style={{ fontSize: ".84rem", color: "var(--muted)" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-band">
        <div className="container">
          <div className="cta-band-inner reveal">
            <div className="cta-band-text">
              <h2>Ready to Learn More?</h2>
              <p>Our team is ready to answer your questions and help you find the right care for your family.</p>
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
