import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { InsuranceFAQ } from "@/components/InsuranceFAQ";

export const metadata: Metadata = {
  title: "Insurance & Coverage | Better Days Home Health | Hampton Roads, VA",
  description:
    "Better Days Home Health accepts Medicaid, Sentara, commercial insurance, and private pay for personal care services. Learn about your coverage options in Hampton Roads, Virginia.",
};

export default function InsurancePage() {
  return (
    <>
      <Nav />

      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container page-hero-content">
          <span className="page-hero-badge">📋 &nbsp; Medicaid &bull; Sentara &bull; Commercial &bull; Private Pay</span>
          <h1>Insurance &amp; Coverage</h1>
          <p>We accept Medicaid, Sentara, and most commercial plans. Quality personal home care should be accessible to every family in Hampton Roads.</p>
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
            <div className="ins-page-card reveal reveal-delay-1">
              <div className="ins-page-icon" style={{ background: "#E0F5F3" }}>🏥</div>
              <h3>Medicaid</h3>
              <p>We are a participating Virginia Medicaid provider. Medicaid can cover personal care aide services for eligible patients through the CCC Plus Waiver and other programs.</p>
              <ul className="ins-page-list">
                <li>Personal care aide hours (PCA / CNA / HHA)</li>
                <li>Bathing, grooming, meal prep, and daily living support</li>
                <li>Companionship and medication reminders</li>
                <li>Covered for eligible Virginia residents</li>
              </ul>
            </div>

            <div className="ins-page-card reveal reveal-delay-2" style={{ borderColor: "var(--teal)", boxShadow: "0 0 0 1px var(--teal)" }}>
              <div className="ins-page-icon" style={{ background: "var(--gold-light)" }}>📋</div>
              <h3>Sentara Health Plans</h3>
              <p>Better Days Home Health is an in-network provider for Sentara Health Plans, one of the leading health systems in Hampton Roads. Sentara members can access our personal care services with in-network cost sharing.</p>
              <ul className="ins-page-list">
                <li>In-network provider status</li>
                <li>Lower out-of-pocket costs for members</li>
                <li>Personal care services covered</li>
                <li>Direct billing to Sentara</li>
              </ul>
            </div>

            <div className="ins-page-card reveal reveal-delay-3">
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

            <div className="ins-page-card reveal reveal-delay-4">
              <div className="ins-page-icon" style={{ background: "#EEF2FF" }}>💵</div>
              <h3>Private Pay</h3>
              <p>For patients who prefer to self-pay or whose insurance does not cover a specific service, we offer flexible private pay arrangements. Our team will work with you to find an affordable schedule that meets your care needs.</p>
              <ul className="ins-page-list">
                <li>Flexible scheduling options</li>
                <li>Transparent, upfront pricing</li>
                <li>No long-term contracts required</li>
                <li>Available for any level of personal care</li>
              </ul>
            </div>
          </div>

          <div className="ins-note reveal" style={{ maxWidth: "720px", margin: "0 auto", fontSize: ".92rem", padding: "22px 28px", borderRadius: "14px" }}>
            <strong>Not sure what your plan covers?</strong> Call us at <Link href="tel:7577157829">(757) 715-7829</Link> and we will contact your insurance company directly to verify your home care benefits before any commitment is required.
          </div>
        </div>
      </section>

      {/* DO I QUALIFY */}
      <section className="section" style={{ background: "var(--cream-dark)" }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "52px" }}>
            <span className="eyebrow">Eligibility</span>
            <h2 className="display" style={{ fontSize: "clamp(1.9rem,3.5vw,2.6rem)", color: "var(--navy)", marginBottom: "14px" }}>
              Do I Qualify for Personal Care Coverage?
            </h2>
            <p style={{ color: "var(--muted)", maxWidth: "580px", margin: "0 auto" }}>Medicaid and many commercial plans cover personal care aide services for qualifying patients. Here is what typically qualifies a patient for covered personal care services.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }} className="reveal">
            <div style={{ background: "var(--white)", borderRadius: "20px", padding: "32px 28px", border: "1.5px solid var(--border)" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "14px" }}>🏥</div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--navy)", marginBottom: "16px" }}>Medicaid Eligibility (CCC Plus Waiver)</h3>
              <p style={{ color: "var(--muted)", fontSize: ".9rem", marginBottom: "16px" }}>Virginia Medicaid personal care coverage through the CCC Plus Waiver generally requires:</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div className="check-item"><span className="check-icon">✓</span><span style={{ fontSize: ".88rem" }}>You are enrolled in Virginia Medicaid</span></div>
                <div className="check-item"><span className="check-icon">✓</span><span style={{ fontSize: ".88rem" }}>You need assistance with daily living activities (ADLs) such as bathing or dressing</span></div>
                <div className="check-item"><span className="check-icon">✓</span><span style={{ fontSize: ".88rem" }}>A functional assessment determines you need support to remain safely at home</span></div>
                <div className="check-item"><span className="check-icon">✓</span><span style={{ fontSize: ".88rem" }}>Prior authorization has been obtained where required</span></div>
              </div>
              <p style={{ color: "var(--muted)", fontSize: ".82rem", marginTop: "16px", paddingTop: "14px", borderTop: "1px solid var(--border)" }}>Not sure if you qualify for Medicaid? We can help you understand your options or connect you with enrollment resources.</p>
            </div>

            <div style={{ background: "var(--white)", borderRadius: "20px", padding: "32px 28px", border: "1.5px solid var(--border)" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "14px" }}>📋</div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--navy)", marginBottom: "16px" }}>Commercial &amp; Private Pay</h3>
              <p style={{ color: "var(--muted)", fontSize: ".9rem", marginBottom: "16px" }}>For Sentara and commercial insurance plans, personal care coverage varies by plan. We verify benefits for you. Common qualifying factors include:</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div className="check-item"><span className="check-icon">✓</span><span style={{ fontSize: ".88rem" }}>Long-term care insurance plan includes home care benefit</span></div>
                <div className="check-item"><span className="check-icon">✓</span><span style={{ fontSize: ".88rem" }}>Commercial plan includes home health aide or personal care benefit</span></div>
                <div className="check-item"><span className="check-icon">✓</span><span style={{ fontSize: ".88rem" }}>VA Benefits (for qualifying veterans) may cover personal care aide services</span></div>
                <div className="check-item"><span className="check-icon">✓</span><span style={{ fontSize: ".88rem" }}>Private pay — no eligibility requirement, flexible scheduling available</span></div>
              </div>
              <p style={{ color: "var(--muted)", fontSize: ".82rem", marginTop: "16px", paddingTop: "14px", borderTop: "1px solid var(--border)" }}>No insurance? Private pay options are flexible and transparent. Call us to discuss rates and scheduling.</p>
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
            <p style={{ color: "var(--muted)", maxWidth: "520px", margin: "0 auto" }}>Getting started with personal home care is simple. We handle the paperwork and insurance verification so you can focus on your loved one.</p>
          </div>

          <div className="steps-grid">
            <div className="step-card reveal reveal-delay-1">
              <div className="step-num">1</div>
              <h3>Call Us or Submit a Referral</h3>
              <p>Reach out by phone, email, or through our contact form. No physician&apos;s order required for most personal care services — we will coordinate everything from there.</p>
            </div>
            <div className="step-card reveal reveal-delay-2">
              <div className="step-num">2</div>
              <h3>We Verify Your Benefits</h3>
              <p>Our team contacts your insurance provider directly to verify home care benefits, obtain any required prior authorizations, and give you a clear breakdown of your expected coverage before care starts.</p>
            </div>
            <div className="step-card reveal reveal-delay-3">
              <div className="step-num">3</div>
              <h3>Care Begins at Home</h3>
              <p>Once approved, we schedule your first visit and match you with a certified aide. Care typically begins within 24&ndash;48 hours of insurance approval.</p>
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
            <p style={{ color: "var(--muted)", maxWidth: "520px", margin: "0 auto" }}>Answers to the questions we hear most often about personal care coverage.</p>
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
