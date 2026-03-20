import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { InsuranceFAQ } from "@/components/InsuranceFAQ";

export const metadata: Metadata = {
  title: "Insurance & Coverage | Better Days Home Health | Hampton Roads, VA",
  description:
    "Better Days Home Health accepts Medicaid, Sentara, commercial insurance, and private pay. Learn about your home health coverage options in Hampton Roads, Virginia.",
};

export default function InsurancePage() {
  return (
    <>
      <Nav />

      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container page-hero-content">
          <span className="page-hero-badge">📋 &nbsp; Medicare &bull; Medicaid &bull; Sentara &bull; Commercial &bull; Private Pay</span>
          <h1>Insurance &amp; Coverage</h1>
          <p>We accept Medicare, Medicaid, Sentara, and most commercial plans. Quality home health care should be accessible to every family in Hampton Roads.</p>
        </div>
      </section>

      {/* INSURANCE CARDS */}
      <section className="section">
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "52px" }}>
            <span className="eyebrow">Accepted Plans</span>
            <h2 className="display" style={{ fontSize: "clamp(1.9rem,3.5vw,2.6rem)", color: "var(--navy)", marginBottom: "14px" }}>
              Plans We Accept
            </h2>
            <p style={{ color: "var(--muted)", maxWidth: "560px", margin: "0 auto" }}>Better Days Home Health is committed to making care financially accessible. We accept the following coverage types and work directly with your insurance to verify benefits.</p>
          </div>

          <div className="ins-page-cards">
            <div className="ins-page-card reveal reveal-delay-1" style={{ borderColor: "var(--teal)", boxShadow: "0 0 0 1px var(--teal)" }}>
              <div className="ins-page-icon" style={{ background: "var(--teal-light)" }}>★</div>
              <h3>Medicare</h3>
              <p>Medicare Part A covers home health services for eligible beneficiaries who are homebound and require skilled care ordered by a physician. Better Days Home Health accepts Original Medicare and most Medicare Advantage plans.</p>
              <ul className="ins-page-list">
                <li>Skilled nursing visits (RN &amp; LPN)</li>
                <li>Physical and occupational therapy</li>
                <li>No copay for Medicare-covered home health visits</li>
                <li>Requires homebound status &amp; physician&apos;s order</li>
              </ul>
              <div style={{ marginTop: "12px", fontSize: ".8rem", background: "var(--cream)", borderRadius: "8px", padding: "10px 14px", color: "var(--muted)" }}>
                <strong style={{ color: "var(--navy)" }}>Also accepted:</strong> Medicare Advantage (Part C) plans — benefits vary by plan. We verify coverage before care begins.
              </div>
            </div>

            <div className="ins-page-card reveal reveal-delay-2">
              <div className="ins-page-icon" style={{ background: "#E0F5F3" }}>🏥</div>
              <h3>Medicaid</h3>
              <p>We are a participating Virginia Medicaid provider. Medicaid can cover a wide range of home health services for eligible patients, including skilled nursing, therapy, and personal care aide services.</p>
              <ul className="ins-page-list">
                <li>Skilled nursing visits (RN &amp; LPN)</li>
                <li>Physical and occupational therapy</li>
                <li>Personal care aide hours (PCA / CNA / HHA)</li>
                <li>Covered for eligible Virginia residents</li>
              </ul>
            </div>

            <div className="ins-page-card reveal reveal-delay-2">
              <div className="ins-page-icon" style={{ background: "var(--gold-light)" }}>📋</div>
              <h3>Sentara Health Plans</h3>
              <p>Better Days Home Health is an in-network provider for Sentara Health Plans, one of the leading health systems in Hampton Roads. Sentara members can access our full range of home health services with in-network cost sharing.</p>
              <ul className="ins-page-list">
                <li>In-network provider status</li>
                <li>Lower out-of-pocket costs for members</li>
                <li>Skilled and personal care covered</li>
                <li>Direct billing to Sentara</li>
              </ul>
            </div>

            <div className="ins-page-card reveal reveal-delay-4">
              <div className="ins-page-icon" style={{ background: "var(--rose-light)" }}>💲</div>
              <h3>Commercial Insurance</h3>
              <p>We accept most major commercial health insurance plans. Our billing team will verify your benefits before care begins, so you have a clear picture of your coverage and any cost-sharing responsibilities.</p>
              <ul className="ins-page-list">
                <li>Most major commercial plans accepted</li>
                <li>Prior authorization handled by our team</li>
                <li>Transparent communication on benefits</li>
                <li>Direct insurance billing</li>
              </ul>
            </div>

            <div className="ins-page-card reveal reveal-delay-3">
              <div className="ins-page-icon" style={{ background: "#EEF2FF" }}>💵</div>
              <h3>Private Pay</h3>
              <p>For patients who prefer to self-pay or whose insurance does not cover a specific service, we offer flexible private pay arrangements. Our team will work with you to find an affordable schedule that meets your care needs.</p>
              <ul className="ins-page-list">
                <li>Flexible scheduling options</li>
                <li>Transparent, upfront pricing</li>
                <li>No long-term contracts required</li>
                <li>Available for any level of care</li>
              </ul>
            </div>
          </div>

          <div className="ins-note reveal" style={{ maxWidth: "720px", margin: "0 auto", fontSize: ".92rem", padding: "22px 28px", borderRadius: "14px" }}>
            <strong>Not sure what your plan covers?</strong> Call us at <Link href="tel:7577157829">(757) 715-7829</Link> and we will contact your insurance company directly to verify your home health benefits before any commitment is required.
          </div>
        </div>
      </section>

      {/* DO I QUALIFY */}
      <section className="section" style={{ background: "var(--cream-dark)" }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "52px" }}>
            <span className="eyebrow">Eligibility</span>
            <h2 className="display" style={{ fontSize: "clamp(1.9rem,3.5vw,2.6rem)", color: "var(--navy)", marginBottom: "14px" }}>
              Do I Qualify for Home Health?
            </h2>
            <p style={{ color: "var(--muted)", maxWidth: "580px", margin: "0 auto" }}>Medicare and Medicaid have specific eligibility requirements for home health coverage. Here is what typically qualifies a patient for covered home health services.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }} className="reveal">
            <div style={{ background: "var(--white)", borderRadius: "20px", padding: "32px 28px", border: "1.5px solid var(--border)" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "14px" }}>★</div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--navy)", marginBottom: "16px" }}>Medicare Eligibility Requirements</h3>
              <p style={{ color: "var(--muted)", fontSize: ".9rem", marginBottom: "16px" }}>To qualify for Medicare-covered home health services, you generally must meet all of the following:</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div className="check-item"><span className="check-icon">✓</span><span style={{ fontSize: ".88rem" }}>You are under the care of a doctor and a plan of care is established</span></div>
                <div className="check-item"><span className="check-icon">✓</span><span style={{ fontSize: ".88rem" }}>You need skilled nursing care or physical/occupational therapy on an intermittent basis</span></div>
                <div className="check-item"><span className="check-icon">✓</span><span style={{ fontSize: ".88rem" }}>You are homebound &mdash; leaving home requires considerable effort</span></div>
                <div className="check-item"><span className="check-icon">✓</span><span style={{ fontSize: ".88rem" }}>The home health agency is Medicare-certified (that&rsquo;s us)</span></div>
              </div>
              <p style={{ color: "var(--muted)", fontSize: ".82rem", marginTop: "16px", paddingTop: "14px", borderTop: "1px solid var(--border)" }}>Under Medicare, qualifying home health visits are covered at <strong style={{ color: "var(--navy)" }}>100% &mdash; no copay</strong> for Medicare-covered services.</p>
            </div>

            <div style={{ background: "var(--white)", borderRadius: "20px", padding: "32px 28px", border: "1.5px solid var(--border)" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "14px" }}>🏥</div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--navy)", marginBottom: "16px" }}>Medicaid Eligibility Requirements</h3>
              <p style={{ color: "var(--muted)", fontSize: ".9rem", marginBottom: "16px" }}>Virginia Medicaid eligibility for home health services generally requires:</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div className="check-item"><span className="check-icon">✓</span><span style={{ fontSize: ".88rem" }}>You are enrolled in Virginia Medicaid</span></div>
                <div className="check-item"><span className="check-icon">✓</span><span style={{ fontSize: ".88rem" }}>A physician has ordered the services as medically necessary</span></div>
                <div className="check-item"><span className="check-icon">✓</span><span style={{ fontSize: ".88rem" }}>Services are within covered benefit categories (skilled nursing, therapy, personal care)</span></div>
                <div className="check-item"><span className="check-icon">✓</span><span style={{ fontSize: ".88rem" }}>Prior authorization has been obtained where required</span></div>
              </div>
              <p style={{ color: "var(--muted)", fontSize: ".82rem", marginTop: "16px", paddingTop: "14px", borderTop: "1px solid var(--border)" }}>Not sure if you qualify for Medicaid? We can help you understand your options or connect you with enrollment resources.</p>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }} className="reveal">
            <p style={{ color: "var(--muted)", marginBottom: "20px" }}>Not sure if you qualify? Call us &mdash; we will review your situation at no cost and no obligation.</p>
            <Link href="tel:7577157829" className="btn btn-primary">(757) 715-7829 &mdash; Free Benefits Review</Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section" style={{ background: "var(--cream-dark)" }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "52px" }}>
            <span className="eyebrow">The Process</span>
            <h2 className="display" style={{ fontSize: "clamp(1.9rem,3.5vw,2.6rem)", color: "var(--navy)", marginBottom: "14px" }}>
              How It Works
            </h2>
            <p style={{ color: "var(--muted)", maxWidth: "520px", margin: "0 auto" }}>Getting started with home health care is simple. We handle the paperwork and insurance verification so you can focus on your loved one.</p>
          </div>

          <div className="steps-grid">
            <div className="step-card reveal reveal-delay-1">
              <div className="step-num">1</div>
              <h3>Call Us or Submit a Referral</h3>
              <p>Reach out by phone, email, or through our contact form. Physician referrals are welcome, but a self-referral from a patient or family member is also perfectly fine &mdash; we will coordinate from there.</p>
            </div>
            <div className="step-card reveal reveal-delay-2">
              <div className="step-num">2</div>
              <h3>We Verify Your Benefits</h3>
              <p>Our team contacts your insurance provider directly to verify home health benefits, obtain any required prior authorizations, and give you a clear breakdown of your expected coverage before care starts.</p>
            </div>
            <div className="step-card reveal reveal-delay-3">
              <div className="step-num">3</div>
              <h3>Care Begins at Home</h3>
              <p>Once approved, we schedule your first visit and create a personalized care plan. Your assigned nurse or therapist will arrive at your home and begin delivering exceptional care right away.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "48px" }}>
            <span className="eyebrow">Common Questions</span>
            <h2 className="display" style={{ fontSize: "clamp(1.9rem,3.5vw,2.6rem)", color: "var(--navy)", marginBottom: "14px" }}>
              Insurance FAQs
            </h2>
            <p style={{ color: "var(--muted)", maxWidth: "520px", margin: "0 auto" }}>Answers to the questions we hear most often about home health insurance coverage.</p>
          </div>

          <InsuranceFAQ />
        </div>
      </section>

      {/* CTA BAND */}
      <section className="section cta-band">
        <div className="container">
          <div className="cta-band-inner reveal">
            <div className="cta-band-text">
              <h2>Have Questions About Your Coverage?</h2>
              <p>Our team will verify your benefits directly with your insurance company, at no cost and no obligation.</p>
            </div>
            <div className="cta-band-actions">
              <Link href="tel:7577157829" className="cta-phone-link">
                <span className="phone-icon-wrap">📞</span>
                (757) 715-7829
              </Link>
              <Link href="/contact" className="btn btn-gold">Contact Us</Link>
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
