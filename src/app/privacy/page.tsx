import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Better Days Home Health | Hampton Roads, VA",
  description:
    "Privacy policy for Better Days Home Health. Learn how we collect, use, and protect your personal and health information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />

      {/* PAGE HERO */}
      <section className="page-hero no-arch">
        <div className="container page-hero-content">
          <span className="page-hero-badge">🔒 &nbsp; Privacy &amp; Data Protection</span>
          <h1>Privacy Policy</h1>
          <p>How we collect, use, and protect your information when you interact with Better Days Home Health.</p>
        </div>
      </section>

      {/* POLICY CONTENT */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: "820px", margin: "0 auto" }} className="reveal">

            <div style={{ background: "var(--cream-dark)", borderRadius: "14px", padding: "20px 24px", marginBottom: "48px", fontSize: ".88rem", color: "var(--muted)" }}>
              <strong style={{ color: "var(--navy)" }}>Last Updated: January 1, 2026</strong> &nbsp;&middot;&nbsp; If you have questions about this policy, contact us at{" "}
              <Link href="mailto:admin@abetterdayforyou.com" style={{ color: "var(--teal)", fontWeight: 600 }}>admin@abetterdayforyou.com</Link>
            </div>

            <div className="privacy-section">
              <h2>1. Who We Are</h2>
              <p>Better Days Home Health (&ldquo;Better Days,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is a Virginia Department of Health-licensed home health agency serving Hampton Roads, Virginia. We provide skilled nursing, physical therapy, occupational therapy, and personal care aide services in patients&rsquo; homes.</p>
              <p>This Privacy Policy explains how we collect, use, share, and protect information when you visit our website at <strong>www.abetterdayforyou.com</strong>, submit an inquiry, or otherwise interact with us online.</p>
            </div>

            <div className="privacy-section">
              <h2>2. Information We Collect</h2>
              <h3>Information You Provide to Us</h3>
              <p>When you contact us through our website, we may collect:</p>
              <ul>
                <li>Name, phone number, and email address</li>
                <li>City or location within Hampton Roads</li>
                <li>Insurance or coverage type</li>
                <li>The reason for your inquiry (e.g., requesting services, insurance question, referral)</li>
                <li>Any details you choose to include in a message</li>
              </ul>
              <p>We do not collect Social Security numbers, medical record numbers, or detailed protected health information (PHI) through our website contact form. Detailed health information is collected separately through our clinical intake process under HIPAA-compliant procedures.</p>

              <h3>Information Collected Automatically</h3>
              <p>When you visit our website, we may automatically collect basic technical data including your browser type, device type, pages visited, and referring URL. This data is used to improve website performance and is not linked to your identity.</p>
            </div>

            <div className="privacy-section">
              <h2>3. How We Use Your Information</h2>
              <p>We use the information you provide to:</p>
              <ul>
                <li>Respond to your inquiry or service request</li>
                <li>Verify insurance benefits on your behalf</li>
                <li>Schedule an intake call or clinical assessment</li>
                <li>Coordinate care with your physician or referring provider</li>
                <li>Send follow-up communications related to your inquiry</li>
                <li>Comply with applicable state and federal regulations</li>
              </ul>
              <p>We do not use your information for marketing purposes unrelated to your inquiry, and we do not sell your information to third parties.</p>
            </div>

            <div className="privacy-section">
              <h2>4. HIPAA &amp; Protected Health Information</h2>
              <p>As a home health agency, Better Days Home Health is subject to the Health Insurance Portability and Accountability Act (HIPAA). When you become a patient, your protected health information (PHI) is handled under our separate <strong>Notice of Privacy Practices</strong>, which governs how your medical information is used and disclosed in connection with your care.</p>
              <p>You have the right to receive a copy of our Notice of Privacy Practices. Please contact us at <Link href="mailto:admin@abetterdayforyou.com" style={{ color: "var(--teal)", fontWeight: 600 }}>admin@abetterdayforyou.com</Link> or call <Link href="tel:7577157829" style={{ color: "var(--teal)", fontWeight: 600 }}>(757) 715-7829</Link> to request a copy.</p>
            </div>

            <div className="privacy-section">
              <h2>5. How We Share Information</h2>
              <p>We may share the information you provide in the following limited circumstances:</p>
              <ul>
                <li><strong>With your insurance company</strong> — to verify benefits and obtain prior authorizations on your behalf</li>
                <li><strong>With your physician or referring provider</strong> — to coordinate a plan of care</li>
                <li><strong>With our care coordination platform</strong> — we use Home Health Hub (homehealthhub.care) to manage case intake and staff matching; information shared is limited to what is necessary for care coordination</li>
                <li><strong>As required by law</strong> — when legally obligated by a court order, subpoena, or government authority</li>
              </ul>
              <p>We do not sell, rent, or trade your personal information with any third party for marketing or commercial purposes.</p>
            </div>

            <div className="privacy-section">
              <h2>6. Cookies &amp; Website Analytics</h2>
              <p>Our website may use cookies and analytics tools (such as Google Analytics) to understand how visitors use our site. These tools collect anonymized, aggregate data about page views and traffic sources. You can disable cookies through your browser settings; however, some website features may not function properly if you do so.</p>
            </div>

            <div className="privacy-section">
              <h2>7. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Request access to the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information (subject to legal retention requirements)</li>
                <li>Opt out of any non-essential communications from us</li>
              </ul>
              <p>To exercise any of these rights, contact us at <Link href="mailto:admin@abetterdayforyou.com" style={{ color: "var(--teal)", fontWeight: 600 }}>admin@abetterdayforyou.com</Link>. We will respond within 30 days.</p>
            </div>

            <div className="privacy-section">
              <h2>8. Data Security</h2>
              <p>We take reasonable technical and organizational measures to protect the information you provide against unauthorized access, disclosure, or loss. However, no transmission over the internet or electronic storage system is 100% secure. We encourage you to contact us by phone for any sensitive health-related discussions.</p>
            </div>

            <div className="privacy-section">
              <h2>9. Children&apos;s Privacy</h2>
              <p>Our website is not directed at children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will delete it promptly.</p>
            </div>

            <div className="privacy-section">
              <h2>10. Changes to This Policy</h2>
              <p>We may update this Privacy Policy periodically to reflect changes in our practices or applicable law. When we do, we will update the &ldquo;Last Updated&rdquo; date at the top of this page. We encourage you to review this policy periodically.</p>
            </div>

            <div className="privacy-section">
              <h2>11. Contact Us</h2>
              <p>If you have questions, concerns, or requests related to this Privacy Policy, please contact us:</p>
              <div style={{ background: "var(--cream-dark)", borderRadius: "14px", padding: "24px 28px", marginTop: "16px" }}>
                <p style={{ marginBottom: "6px" }}><strong>Better Days Home Health</strong></p>
                <p style={{ marginBottom: "6px" }}>Hampton Roads, Virginia</p>
                <p style={{ marginBottom: "6px" }}>Phone: <Link href="tel:7577157829" style={{ color: "var(--teal)", fontWeight: 600 }}>(757) 715-7829</Link></p>
                <p style={{ marginBottom: 0 }}>Email: <Link href="mailto:admin@abetterdayforyou.com" style={{ color: "var(--teal)", fontWeight: 600 }}>admin@abetterdayforyou.com</Link></p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="section cta-band">
        <div className="container">
          <div className="cta-band-inner reveal">
            <div className="cta-band-text">
              <h2>Questions About Your Privacy?</h2>
              <p>We are committed to protecting your information. Contact us any time with questions.</p>
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
