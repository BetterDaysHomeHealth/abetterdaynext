"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export function CareerFormWrap() {
  const searchParams = useSearchParams();
  const applied = searchParams.get("applied") === "true";

  if (applied) {
    return (
      <div className="apply-form-wrap" style={{ textAlign: "center", padding: "48px 24px" }}>
        <div style={{ fontSize: "3rem", marginBottom: "16px" }}>✓</div>
        <h3 style={{ color: "var(--navy)", marginBottom: "10px" }}>Application Received!</h3>
        <p style={{ color: "var(--muted)" }}>
          Thank you for your interest in joining our team. We will be in touch within a few business days.
          <br />
          Questions? Call us at{" "}
          <Link href="tel:7577157829" style={{ color: "var(--teal)", fontWeight: 700 }}>
            (757) 715-7829
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="apply-form-wrap">
      <h3>Apply Now</h3>
      <p>
        Fill out the form below and we will be in touch within a few business days. Or call us directly at{" "}
        <Link href="tel:7577157829" style={{ color: "var(--teal)", fontWeight: 700 }}>
          (757) 715-7829
        </Link>
        .
      </p>

      <form action="https://formsubmit.co/admin@abetterdayforyou.com" method="POST">
        <input type="hidden" name="_subject" value="Job Application — Better Days Home Health" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_next" value="https://www.abetterdayforyou.com/careers?applied=true" />

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="appFirstName">First Name *</label>
            <input type="text" id="appFirstName" name="firstName" placeholder="Jane" required />
          </div>
          <div className="form-group">
            <label htmlFor="appLastName">Last Name *</label>
            <input type="text" id="appLastName" name="lastName" placeholder="Smith" required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="appPhone">Phone Number *</label>
            <input type="tel" id="appPhone" name="phone" placeholder="(757) 555-0000" required />
          </div>
          <div className="form-group">
            <label htmlFor="appEmail">Email Address *</label>
            <input type="email" id="appEmail" name="email" placeholder="jane@example.com" required />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="appRole">Role Applying For *</label>
          <select id="appRole" name="role" required>
            <option value="">Select a role...</option>
            <option>Registered Nurse (RN)</option>
            <option>Licensed Practical Nurse (LPN)</option>
            <option>Physical Therapist (PT)</option>
            <option>Occupational Therapist (OT)</option>
            <option>Personal Care Aide (PCA)</option>
            <option>Certified Nursing Assistant (CNA)</option>
            <option>Home Health Aide (HHA)</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="appLicense">License or Certification Number (if applicable)</label>
          <input type="text" id="appLicense" name="licenseNumber" placeholder="VA RN License #..." />
        </div>

        <div className="form-group">
          <label htmlFor="appAvailability">Availability</label>
          <select id="appAvailability" name="availability">
            <option value="">Select availability...</option>
            <option>Full-Time</option>
            <option>Part-Time</option>
            <option>PRN / Per Diem</option>
            <option>Open to Any</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="appMessage">Tell Us a Little About Yourself</label>
          <textarea
            id="appMessage"
            name="message"
            placeholder="Years of experience, why you are interested in home health, any questions for us..."
            style={{ minHeight: "110px" }}
          />
        </div>

        <div className="form-group" style={{ marginBottom: "24px" }}>
          <label style={{ display: "flex", alignItems: "flex-start", gap: "10px", cursor: "pointer", textTransform: "none", fontSize: ".88rem", letterSpacing: 0, fontWeight: 500, color: "var(--muted)" }}>
            <input type="checkbox" name="consent" required style={{ width: "auto", marginTop: "3px", flexShrink: 0 }} />
            I consent to being contacted by Better Days Home Health regarding my application. *
          </label>
        </div>

        <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center", fontSize: "1rem", padding: "15px" }}>
          Submit Application
        </button>
      </form>
    </div>
  );
}
