"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export function ContactFormWrap() {
  const searchParams = useSearchParams();
  const sent = searchParams.get("sent") === "true";

  if (sent) {
    return (
      <div className="contact-form-wrap reveal reveal-delay-2" style={{ textAlign: "center", padding: "48px 24px" }}>
        <div style={{ fontSize: "3rem", marginBottom: "16px" }}>✓</div>
        <h3 style={{ color: "var(--navy)", marginBottom: "10px" }}>Message Sent!</h3>
        <p style={{ color: "var(--muted)" }}>
          Thank you for reaching out. Our team will respond within one business day.
          <br />
          For urgent needs, call us at{" "}
          <Link href="tel:7577157829" style={{ color: "var(--teal)", fontWeight: 700 }}>
            (757) 715-7829
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="contact-form-wrap reveal reveal-delay-2">
      <h3>Request Care or Send a Message</h3>

      <form action="https://formsubmit.co/admin@abetterdayforyou.com" method="POST">
        <input type="hidden" name="_subject" value="Website Inquiry — Better Days Home Health" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_next" value="https://www.abetterdayforyou.com/contact?sent=true" />

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name *</label>
            <input type="text" id="firstName" name="firstName" placeholder="Jane" required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name *</label>
            <input type="text" id="lastName" name="lastName" placeholder="Smith" required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input type="tel" id="phone" name="phone" placeholder="(757) 555-0000" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="jane@example.com" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="city">City / Location</label>
          <select id="city" name="city">
            <option value="">Select your city...</option>
            <option>Virginia Beach</option>
            <option>Norfolk</option>
            <option>Chesapeake</option>
            <option>Portsmouth</option>
            <option>Hampton</option>
            <option>Newport News</option>
            <option>Suffolk</option>
            <option>Isle of Wight</option>
            <option>Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="reason">Reason for Contact *</label>
          <select id="reason" name="reason" required>
            <option value="">Select a reason...</option>
            <option>Request Home Health Services</option>
            <option>Insurance / Coverage Question</option>
            <option>Physician Referral</option>
            <option>Employment / Careers</option>
            <option>General Question</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="insurance">Insurance / Payment Type</label>
          <select id="insurance" name="insurance">
            <option value="">Select insurance type...</option>
            <option>Medicaid</option>
            <option>Sentara Health Plans</option>
            <option>Commercial Insurance</option>
            <option>Private Pay / Self-Pay</option>
            <option>Not Sure</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            placeholder="Please describe your care needs, questions, or how we can help you..."
            required
            style={{ minHeight: "140px" }}
          />
        </div>

        <div className="form-group" style={{ marginBottom: "24px" }}>
          <label style={{ display: "flex", alignItems: "flex-start", gap: "10px", cursor: "pointer", textTransform: "none", fontSize: ".88rem", letterSpacing: 0, fontWeight: 500, color: "var(--muted)" }}>
            <input type="checkbox" name="consent" required style={{ width: "auto", marginTop: "3px", flexShrink: 0 }} />
            I consent to being contacted by Better Days Home Health by phone or email regarding my inquiry. *
          </label>
        </div>

        <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center", fontSize: "1rem", padding: "15px" }}>
          Send Message
        </button>

        <p style={{ textAlign: "center", marginTop: "16px", fontSize: ".8rem", color: "var(--muted)" }}>
          Or call us directly at{" "}
          <Link href="tel:7577157829" style={{ color: "var(--teal)", fontWeight: 700 }}>
            (757) 715-7829
          </Link>
        </p>
      </form>
    </div>
  );
}
