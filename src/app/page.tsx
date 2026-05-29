import Link from "next/link";
import Image from "next/image";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />

      {/* ── HERO ── */}
      <section
        id="hero"
        style={{
          backgroundImage: "url('/hero-photo.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 65%",
        }}
      >
        <div className="hero-overlay" />
        <div className="hero-glow" />
        <div className="hero-bg-rings">
          <div className="hero-ring" />
          <div className="hero-ring" />
          <div className="hero-ring" />
          <div className="hero-ring" />
        </div>

        <div className="container hero-inner">
          <div>
            <Image
              src="/logo.jpg"
              alt="Better Days Home Health"
              width={260}
              height={100}
              className="hero-logo"
              priority
            />

            <div className="hero-tag">
              <span className="hero-tag-dot" />
              <span className="hero-tag-text">Now accepting new patients &mdash; Hampton Roads, VA</span>
            </div>

            <h1 className="hero-title display">
              Care That Brings<br />
              <span className="hero-title-accent">Better Days</span>
            </h1>

            <p className="hero-sub">
              VDH-licensed home care agency delivering compassionate personal care
              to families across Hampton Roads &mdash; with the warmth and dignity every patient deserves.
            </p>

            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary">Get Started Today</Link>
              <Link href="tel:7577157829" className="btn btn-outline">(757) 715-7829</Link>
            </div>

            <div className="hero-trust">
              <div className="hero-trust-item">
                <span className="hero-trust-check">&#10003;</span>
                VDH Licensed Agency
              </div>
              <div className="hero-trust-item">
                <span className="hero-trust-check">&#10003;</span>
                Medicaid &amp; Sentara Accepted
              </div>
              <div className="hero-trust-item">
                <span className="hero-trust-check">&#10003;</span>
                Certified Personal Care Aides
              </div>
            </div>
          </div>

          <div className="hero-cards">
            <div className="hero-card">
              <div className="hero-card-icon teal">&#128116;</div>
              <div>
                <h4>Personal Care Aides</h4>
                <p>PCA, CNA, and HHA services for bathing, grooming, and daily living</p>
              </div>
              <span className="hero-card-badge">PCA / CNA</span>
            </div>

            <div className="hero-card">
              <div className="hero-card-icon gold">&#127869;</div>
              <div>
                <h4>Meal Preparation</h4>
                <p>Nutritious meals planned and prepared in your home</p>
              </div>
              <span className="hero-card-badge">Support</span>
            </div>

            <div className="hero-card">
              <div className="hero-card-icon blue">&#128149;</div>
              <div>
                <h4>Companionship</h4>
                <p>Meaningful connection and engagement to reduce isolation</p>
              </div>
              <span className="hero-card-badge">Support</span>
            </div>

            <div className="hero-card">
              <div className="hero-card-icon teal">&#128205;</div>
              <div>
                <h4>Hampton Roads &amp; Beyond</h4>
                <p>Proudly serving Hampton Roads and surrounding areas</p>
              </div>
              <span className="hero-card-badge">Local Care</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE STRIP ── */}
      <div className="marquee-strip">
        <div className="marquee-track">
          <span>VDH Licensed Agency<span className="marquee-dot" /></span>
          <span>Personal Care Aides<span className="marquee-dot" /></span>
          <span>Certified Nursing Assistants<span className="marquee-dot" /></span>
          <span>Home Health Aides<span className="marquee-dot" /></span>
          <span>Meal Preparation<span className="marquee-dot" /></span>
          <span>Companionship &amp; Respite<span className="marquee-dot" /></span>
          <span>Medicaid Accepted<span className="marquee-dot" /></span>
          <span>Sentara Accepted<span className="marquee-dot" /></span>
          <span>Hampton Roads, Virginia<span className="marquee-dot" /></span>
          <span>VDH Licensed Agency<span className="marquee-dot" /></span>
          <span>Personal Care Aides<span className="marquee-dot" /></span>
          <span>Certified Nursing Assistants<span className="marquee-dot" /></span>
          <span>Home Health Aides<span className="marquee-dot" /></span>
          <span>Meal Preparation<span className="marquee-dot" /></span>
          <span>Companionship &amp; Respite<span className="marquee-dot" /></span>
          <span>Medicaid Accepted<span className="marquee-dot" /></span>
          <span>Sentara Accepted<span className="marquee-dot" /></span>
          <span>Hampton Roads, Virginia<span className="marquee-dot" /></span>
        </div>
      </div>

      {/* ── ABOUT ── */}
      <section className="section" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-left reveal">
              <span className="eyebrow">About Us</span>
              <h2
                className="display"
                style={{ fontSize: "clamp(1.9rem,3.5vw,2.6rem)", color: "var(--navy)", marginBottom: "24px" }}
              >
                Serving Hampton Roads with Heart &amp; Dedication
              </h2>
              <p>
                Better Days Home Health is a Virginia Department of Health-licensed home care agency
                committed to delivering compassionate personal care to patients and families
                throughout Hampton Roads.
              </p>
              <p>
                We believe every person deserves to receive care in the comfort and dignity of their own
                home. Our team of certified aides and care coordinators work together to create
                personalized care plans that support independence and quality of life.
              </p>
              <div className="about-checklist">
                <div className="check-item"><span className="check-icon">&#10003;</span>VDH Licensed</div>
                <div className="check-item"><span className="check-icon">&#10003;</span>Medicaid Accepted</div>
                <div className="check-item"><span className="check-icon">&#10003;</span>Sentara Network</div>
                <div className="check-item"><span className="check-icon">&#10003;</span>Certified Aides</div>
                <div className="check-item"><span className="check-icon">&#10003;</span>Background Checked</div>
                <div className="check-item"><span className="check-icon">&#10003;</span>Personal Care</div>
              </div>
              <Link href="/about" className="btn btn-outline-dark">Our Full Story &rarr;</Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ── */}
      <section className="section services-overview">
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "52px" }}>
            <span className="eyebrow">What We Offer</span>
            <h2
              className="display"
              style={{ fontSize: "clamp(1.9rem,3.5vw,2.6rem)", color: "var(--navy)", marginBottom: "14px" }}
            >
              Personal Care Services
            </h2>
            <p style={{ color: "var(--muted)", maxWidth: "560px", margin: "0 auto" }}>
              Compassionate daily living support from certified aides who treat every patient like family &mdash; so you or your loved one can remain safely at home.
            </p>
          </div>

          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <div className="svc-overview-card reveal">
              <div className="svc-overview-header gold-bg">
                <div className="svc-overview-icon-wrap gold">&#128116;</div>
                <h3>Personal Care Services</h3>
                <p>Compassionate daily living support from certified aides who treat every patient like family.</p>
              </div>
              <div className="svc-overview-body">
                <ul className="svc-list">
                  <li>Personal Care Aides (PCA)</li>
                  <li>Certified Nursing Assistants (CNA)</li>
                  <li>Home Health Aides (HHA)</li>
                  <li>Meal Preparation</li>
                  <li>Companionship</li>
                  <li>Appointment Accompaniment</li>
                  <li>Light Housekeeping</li>
                  <li>Medication Reminders</li>
                </ul>
                <Link href="/services" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  View All Services &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOME HEALTH HUB PROMO ── */}
      <section className="hhh-promo">
        <div className="hhh-glow-orb hhh-orb-1" />
        <div className="hhh-glow-orb hhh-orb-2" />
        <div className="container hhh-promo-inner reveal">
          <div className="hhh-promo-text">
            <div style={{ marginBottom: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "11px", marginBottom: "12px" }}>
                <img src="/hhh-logo.png" alt="HomeHealthHub" style={{ width: "44px", height: "44px", borderRadius: "50%", flexShrink: 0 }} />
                <span style={{ color: "#fff", fontWeight: 700, fontSize: "1.2rem", letterSpacing: "-0.3px" }}>HomeHealthHub</span>
              </div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "1px solid rgba(255,255,255,.2)", borderRadius: "50px", padding: "6px 16px", fontSize: ".82rem", color: "rgba(255,255,255,.85)" }}>
                <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#4ade80", flexShrink: 0, display: "inline-block" }} />
                SMS-Powered Staffing for Home Health Agencies
              </div>
            </div>
<h2 className="hhh-headline">The Technology<br />Behind Our Speed</h2>
            <p className="hhh-lead">
              We staff cases faster because we built the platform to do it.{" "}
              <strong>Home Health Hub</strong> is the care coordination engine powering Better Days &mdash;
              and agencies nationwide.
            </p>
            <ul className="hhh-feature-list">
              <li><span className="hhh-check">&#10003;</span> Match qualified staff to open cases in hours, not days</li>
              <li><span className="hhh-check">&#10003;</span> Automated SMS to credentialed, available staff</li>
              <li><span className="hhh-check">&#10003;</span> Built-in document verification &amp; credentialing gate</li>
              <li><span className="hhh-check">&#10003;</span> Admin creates cases &mdash; HHH instantly notifies matching qualified staff</li>
              <li><span className="hhh-check">&#10003;</span> Case tracking, reporting &amp; insurance verification</li>
            </ul>
            <div className="hhh-cta-row">
              <a href="https://homehealthhub.care" target="_blank" rel="noopener" className="btn-hhh">
                Explore Home Health Hub &rarr;
              </a>
              <span className="hhh-sub">Built for agencies of every size &bull; Nationwide</span>
            </div>
          </div>

          <div className="hhh-mockup">
            <div className="hhh-mock-card hhh-mock-top">
              <div className="hhh-mock-titlebar">
                <span className="hhh-dot red" /><span className="hhh-dot amber" /><span className="hhh-dot green" />
                <span className="hhh-mock-title">New Case Received</span>
              </div>
              <div className="hhh-mock-row"><span className="hhh-mk">Service</span><span className="hhh-mv">Personal Care Aide</span></div>
              <div className="hhh-mock-row"><span className="hhh-mk">Location</span><span className="hhh-mv">Virginia Beach, VA</span></div>
              <div className="hhh-mock-row"><span className="hhh-mk">Status</span><span className="hhh-badge hhh-open">Open</span></div>
            </div>

            <div className="hhh-flow-arrow">
              <div className="hhh-flow-line" />
              <div className="hhh-flow-label">Matching staff<span className="hhh-blink">...</span></div>
            </div>

            <div className="hhh-mock-card hhh-mock-bottom">
              <div className="hhh-mock-titlebar">
                <span className="hhh-dot red" /><span className="hhh-dot amber" /><span className="hhh-dot green" />
                <span className="hhh-mock-title">Staff Confirmed &#10003;</span>
              </div>
              <div className="hhh-mock-row"><span className="hhh-mk">Staff</span><span className="hhh-mv">Maria T., PCA</span></div>
              <div className="hhh-mock-row"><span className="hhh-mk">Notified</span><span className="hhh-mv">via SMS &#128241;</span></div>
              <div className="hhh-mock-row"><span className="hhh-mk">Time to Fill</span><span className="hhh-badge hhh-filled">4 hrs 22 min</span></div>
            </div>

            <div className="hhh-stat-strip">
              <div className="hhh-stat-pill"><div className="hhh-sp-num">&lt;24h</div><div className="hhh-sp-lbl">avg. fill time</div></div>
              <div className="hhh-stat-pill"><div className="hhh-sp-num">100%</div><div className="hhh-sp-lbl">digital workflow</div></div>
              <div className="hhh-stat-pill"><div className="hhh-sp-num">&#128241;</div><div className="hhh-sp-lbl">instant SMS</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="section" id="why">
        <div className="container">
          <div className="why-intro reveal">
            <span className="eyebrow">Why Choose Us</span>
            <h2
              className="display"
              style={{ fontSize: "clamp(1.9rem,3.5vw,2.6rem)", color: "var(--navy)", marginBottom: "14px" }}
            >
              The Better Days Difference
            </h2>
            <p>We combine professional training with genuine compassion to provide home care that truly makes a difference in people&apos;s lives.</p>
          </div>

          <div className="why-grid">
            <div className="why-card reveal reveal-delay-1">
              <div className="why-num">01</div>
              <h4>VDH Licensed &amp; Compliant</h4>
              <p>We are fully licensed by the Virginia Department of Health, ensuring your family receives care that meets the highest regulatory and safety standards.</p>
            </div>
            <div className="why-card reveal reveal-delay-2">
              <div className="why-num">02</div>
              <h4>Certified, Compassionate Aides</h4>
              <p>Our PCAs, CNAs, and HHAs are certified, background-checked, and selected not just for their credentials but for their character and warmth.</p>
            </div>
            <div className="why-card reveal reveal-delay-3">
              <div className="why-num">03</div>
              <h4>Insurance &amp; Medicaid Ready</h4>
              <p>We accept Medicaid, Sentara, and most commercial insurance plans, making quality home care accessible and affordable for families across Hampton Roads.</p>
            </div>
            <div className="why-card reveal reveal-delay-1">
              <div className="why-num">04</div>
              <h4>Personalized Care Plans</h4>
              <p>No two patients are the same. We match each client with the right aide and build a schedule that fits their daily routine and unique needs.</p>
            </div>
            <div className="why-card reveal reveal-delay-2">
              <div className="why-num">05</div>
              <h4>Rooted in Hampton Roads</h4>
              <p>Virginia Beach, Norfolk, Chesapeake, Portsmouth, Hampton, Newport News, Suffolk, and Isle of Wight &mdash; we come to you wherever you call home.</p>
            </div>
            <div className="why-card reveal reveal-delay-3">
              <div className="why-num">06</div>
              <h4>Compassion at Every Visit</h4>
              <p>Our caregivers are chosen not just for their certifications, but for the genuine human connection they bring to every visit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO WE HELP ── */}
      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "52px" }} className="reveal">
            <div className="eyebrow">Who We Help</div>
            <h2
              className="display"
              style={{ fontSize: "clamp(1.9rem,3.5vw,2.7rem)", color: "var(--navy)", marginBottom: "12px" }}
            >
              Care for Life&apos;s Most Challenging Moments
            </h2>
            <p style={{ color: "var(--muted)", maxWidth: "580px", margin: "0 auto" }}>
              From aging in place to recovering at home &mdash; we meet patients and families wherever they are.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: "16px" }}>
            <div className="who-card reveal reveal-delay-1">
              <div className="who-icon">👴</div>
              <h4>Aging in Place</h4>
              <p>Helping seniors stay safely and comfortably in their own homes with personal care, companionship, and daily support.</p>
            </div>
            <div className="who-card reveal reveal-delay-2">
              <div className="who-icon">🐘</div>
              <h4>Dementia &amp; Alzheimer&apos;s</h4>
              <p>Structured personal care, medication reminders, and compassionate companionship that preserves dignity and provides family relief.</p>
            </div>
            <div className="who-card reveal reveal-delay-3">
              <div className="who-icon">🏥</div>
              <h4>Post-Hospital Recovery</h4>
              <p>Personal care aide support — bathing, meals, light housekeeping — while recovering from surgery or illness at home.</p>
            </div>
            <div className="who-card reveal reveal-delay-4">
              <div className="who-icon">🩺</div>
              <h4>Chronic Illness Support</h4>
              <p>Daily living support for patients managing diabetes, heart failure, COPD, and other conditions at home.</p>
            </div>
            <div className="who-card reveal reveal-delay-1">
              <div className="who-icon">🧬</div>
              <h4>Parkinson&apos;s &amp; MS</h4>
              <p>Personal care and companionship that helps patients with neurological conditions maintain comfort and safety at home.</p>
            </div>
            <div className="who-card reveal reveal-delay-2">
              <div className="who-icon">👪</div>
              <h4>Family Caregiver Relief</h4>
              <p>Respite care for family members — a trusted aide steps in so you can rest, knowing your loved one is in good hands.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section" style={{ background: "var(--navy)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "52px" }} className="reveal">
            <div className="eyebrow eyebrow-white">What Families Say</div>
            <h2
              className="display"
              style={{ fontSize: "clamp(1.9rem,3.5vw,2.7rem)", color: "var(--white)", marginBottom: "12px" }}
            >
              Real Stories From Hampton Roads Families
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "20px" }}>
            <div className="testimonial-card reveal reveal-delay-1">
              <div className="testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p className="testimonial-text">&ldquo;After my mother&apos;s hip replacement, we didn&apos;t know how we&apos;d manage her daily care at home. Better Days matched us with a wonderful aide who was professional, kind, and genuinely invested in Mom&apos;s well-being. It made such a difference for our whole family.&rdquo;</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">MR</div>
                <div>
                  <div className="testimonial-name">Margaret R.</div>
                  <div className="testimonial-location">Virginia Beach, VA</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card reveal reveal-delay-2">
              <div className="testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p className="testimonial-text">&ldquo;The caregiver we were matched with became like family. She was reliable, compassionate, and treated my grandmother with so much dignity. Knowing someone that caring is there every day gives our whole family peace of mind.&rdquo;</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">SL</div>
                <div>
                  <div className="testimonial-name">Sarah L.</div>
                  <div className="testimonial-location">Chesapeake, VA</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card reveal reveal-delay-3">
              <div className="testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p className="testimonial-text">&ldquo;My father has Parkinson&apos;s and getting him ready each morning was becoming impossible for me to manage alone. His aide is patient, skilled, and treats Dad with such respect. I finally feel like I can breathe again knowing he&apos;s in good hands.&rdquo;</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">DJ</div>
                <div>
                  <div className="testimonial-name">David J.</div>
                  <div className="testimonial-location">Norfolk, VA</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card reveal reveal-delay-1">
              <div className="testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p className="testimonial-text">&ldquo;As a discharge planner, I have worked with a lot of home health agencies. Better Days is one of the few I trust completely. They confirm eligibility fast, keep me updated, and actually follow through on what they promise. My patients are in good hands.&rdquo;</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">KW</div>
                <div>
                  <div className="testimonial-name">Karen W., MSW</div>
                  <div className="testimonial-location">Hospital Discharge Planner, Norfolk</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card reveal reveal-delay-2">
              <div className="testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p className="testimonial-text">&ldquo;Mom has dementia and we were struggling to manage her care and still hold down our jobs. Better Days gave us structure and a consistent caregiver she genuinely trusts. It&apos;s changed everything for our family.&rdquo;</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">TM</div>
                <div>
                  <div className="testimonial-name">Thomas M.</div>
                  <div className="testimonial-location">Portsmouth, VA</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card reveal reveal-delay-3">
              <div className="testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p className="testimonial-text">&ldquo;We were hesitant to bring someone into our home, but the screening process gave us confidence. The aide they matched with my mother-in-law was professional and warm from day one. We couldn&apos;t be happier with the decision.&rdquo;</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">RB</div>
                <div>
                  <div className="testimonial-name">Renee B.</div>
                  <div className="testimonial-location">Virginia Beach, VA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW TO GET STARTED ── */}
      <section className="section" style={{ background: "var(--cream-dark)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "52px" }} className="reveal">
            <div className="eyebrow">Getting Started</div>
            <h2
              className="display"
              style={{ fontSize: "clamp(1.9rem,3.5vw,2.7rem)", color: "var(--navy)", marginBottom: "12px" }}
            >
              Care Begins in Three Simple Steps
            </h2>
            <p style={{ color: "var(--muted)", maxWidth: "520px", margin: "0 auto" }}>
              We make it easy. No paperwork maze, no long waits. Just a phone call and we take it from there.
            </p>
          </div>
          <div className="steps-grid">
            <div className="step-card reveal reveal-delay-1">
              <div className="step-num">1</div>
              <h3>Call or Contact Us</h3>
              <p>Reach out by phone or through our contact form. We&apos;ll listen to your situation, answer every question, and verify your insurance &mdash; all at no charge.</p>
            </div>
            <div className="step-card reveal reveal-delay-2">
              <div className="step-num">2</div>
              <h3>We Build Your Care Plan</h3>
              <p>Our care coordinators create a personalized plan and match you with a certified aide. We handle the paperwork and insurance verification.</p>
            </div>
            <div className="step-card reveal reveal-delay-3">
              <div className="step-num">3</div>
              <h3>Care Begins at Home</h3>
              <p>Your aide arrives at your home, on your schedule. We check in regularly to make sure everything is working perfectly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section" id="faq">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "52px" }} className="reveal">
            <span className="eyebrow">Common Questions</span>
            <h2
              className="display"
              style={{ fontSize: "clamp(1.9rem,3.5vw,2.7rem)", color: "var(--navy)", marginBottom: "12px" }}
            >
              Questions Families Ask
            </h2>
            <p style={{ color: "var(--muted)", maxWidth: "560px", margin: "0 auto" }}>
              Navigating home care can feel overwhelming. Here are answers to what families ask us most often.
            </p>
          </div>

          <div className="faq-list">
            <details className="faq-item reveal reveal-delay-1">
              <summary className="faq-question">Does Medicaid cover personal care at home in Virginia?</summary>
              <div className="faq-answer">
                <p>Yes. Virginia Medicaid covers personal care aide services for eligible patients through several programs, including the CCC Plus Waiver. This can cover PCA, CNA, and HHA visits to assist with bathing, grooming, meal preparation, and other daily activities. Better Days Home Health is a Medicaid-enrolled provider. We verify your benefits at no cost before care begins.</p>
              </div>
            </details>

            <details className="faq-item reveal reveal-delay-2">
              <summary className="faq-question">Do I need a doctor&apos;s order to start personal care?</summary>
              <div className="faq-answer">
                <p>For most personal care services, a physician&apos;s order is not required to get started. Some Medicaid waiver programs may require a care assessment or physician documentation, but we handle that process for you. Simply call us and we&apos;ll walk you through exactly what&apos;s needed for your situation &mdash; at no charge.</p>
              </div>
            </details>

            <details className="faq-item reveal reveal-delay-3">
              <summary className="faq-question">What kinds of tasks can a personal care aide help with?</summary>
              <div className="faq-answer">
                <p>Our certified aides help with a wide range of daily activities including bathing, dressing, grooming, toileting, meal preparation, light housekeeping, medication reminders, companionship, and accompanying clients to appointments. They are not licensed to provide clinical care like wound care or IV therapy, but for daily living support they are highly trained and compassionate.</p>
              </div>
            </details>

            <details className="faq-item reveal reveal-delay-1">
              <summary className="faq-question">How quickly can care begin after we contact you?</summary>
              <div className="faq-answer">
                <p>In most cases, we can confirm insurance eligibility same-day and begin care within 24&ndash;48 hours of approval. We understand that families often need help quickly, and we work hard to make sure there is no unnecessary wait between when you call and when care begins.</p>
              </div>
            </details>

            <details className="faq-item reveal reveal-delay-2">
              <summary className="faq-question">Do you accept Sentara health plans?</summary>
              <div className="faq-answer">
                <p>Yes, Better Days Home Health is an in-network provider with Sentara Health Plans. We also accept Virginia Medicaid, most commercial insurance plans, and private pay. We will verify your specific benefits before any services begin &mdash; at no cost to you.</p>
              </div>
            </details>

            <details className="faq-item reveal reveal-delay-3">
              <summary className="faq-question">How do I get started?</summary>
              <div className="faq-answer">
                <p>
                  Simply call us at{" "}
                  <Link href="tel:7577157829" style={{ color: "var(--teal)", fontWeight: 700 }}>
                    (757) 715-7829
                  </Link>{" "}
                  or submit a request through our{" "}
                  <Link href="/contact" style={{ color: "var(--teal)", fontWeight: 700 }}>
                    contact form
                  </Link>
                  . We will listen to your situation, verify your insurance, and walk you through every next
                  step &mdash; at no cost and with no obligation.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ── INSURANCE STRIP ── */}
      <section className="section-sm insurance-strip-bg" id="insurance">
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "40px" }}>
            <span className="eyebrow">Coverage</span>
            <h2
              className="display"
              style={{ fontSize: "clamp(1.7rem,3vw,2.2rem)", color: "var(--navy)", marginBottom: "10px" }}
            >
              Insurance &amp; Payment Options
            </h2>
            <p style={{ color: "var(--muted)", maxWidth: "480px", margin: "0 auto" }}>
              We work with major insurance providers to make home care accessible to every family.
            </p>
          </div>

          <div className="ins-strip-cards">
            <div className="ins-strip-card reveal reveal-delay-1">
              <div className="ins-strip-icon">&#127973;</div>
              <h4>Medicaid</h4>
              <p>Virginia Medicaid accepted</p>
            </div>
            <div className="ins-strip-card reveal reveal-delay-2">
              <div className="ins-strip-icon">&#128203;</div>
              <h4>Sentara Health</h4>
              <p>In-network Sentara provider</p>
            </div>
            <div className="ins-strip-card reveal reveal-delay-3">
              <div className="ins-strip-icon">&#128178;</div>
              <h4>Commercial Plans</h4>
              <p>Most major insurance plans</p>
            </div>
            <div className="ins-strip-card reveal reveal-delay-4">
              <div className="ins-strip-icon">&#128181;</div>
              <h4>Private Pay</h4>
              <p>Flexible self-pay options</p>
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <Link href="/insurance" className="btn btn-outline-dark">Learn About Coverage &rarr;</Link>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA ── */}
      <section className="section" id="area" style={{ background: "var(--navy)" }}>
        <div className="container">
          <div className="area-inner">
            <div className="area-left reveal">
              <span className="eyebrow eyebrow-white">Service Area</span>
              <h2 className="display" style={{ fontSize: "clamp(1.9rem,3.5vw,2.6rem)", marginBottom: "18px" }}>
                We Come to You
              </h2>
              <p>Better Days Home Health proudly serves families throughout the greater Hampton Roads region of Virginia.</p>
              <div className="city-grid">
                <div className="city-pill"><span className="city-pin">&#128205;</span> Virginia Beach</div>
                <div className="city-pill"><span className="city-pin">&#128205;</span> Norfolk</div>
                <div className="city-pill"><span className="city-pin">&#128205;</span> Chesapeake</div>
                <div className="city-pill"><span className="city-pin">&#128205;</span> Portsmouth</div>
                <div className="city-pill"><span className="city-pin">&#128205;</span> Hampton</div>
                <div className="city-pill"><span className="city-pin">&#128205;</span> Newport News</div>
                <div className="city-pill"><span className="city-pin">&#128205;</span> Suffolk</div>
                <div className="city-pill"><span className="city-pin">&#128205;</span> Isle of Wight</div>
              </div>
            </div>
            <div className="area-right reveal reveal-delay-2">
              <div style={{ borderRadius: "16px", overflow: "hidden", border: "2px solid rgba(255,255,255,.15)" }}>
                <iframe
                  src="https://maps.google.com/maps?q=Hampton+Roads+Virginia&t=&z=9&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="320"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hampton Roads, Virginia service area"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="section cta-band">
        <div className="container">
          <div className="cta-band-inner reveal">
            <div className="cta-band-text">
              <h2>Ready for Better Days?</h2>
              <p>Contact us today to discuss your care needs. We&apos;re here to help your family find the right support.</p>
            </div>
            <div className="cta-band-actions">
              <Link href="tel:7577157829" className="cta-phone-link">
                <span className="phone-icon-wrap">&#128222;</span>
                (757) 715-7829
              </Link>
              <Link href="/contact" className="btn btn-gold">Request Care Now</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* ── MOBILE STICKY CALL BAR ── */}
      <a href="tel:7577157829" className="mobile-call-bar" aria-label="Call Better Days Home Health">
        <span className="mobile-call-icon">&#128222;</span>
        Call Us &mdash; (757) 715-7829
      </a>
    </>
  );
}
