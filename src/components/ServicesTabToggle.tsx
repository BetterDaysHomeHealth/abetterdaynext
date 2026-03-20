"use client";

import { useState, useEffect, useRef } from "react";

const skilledServices = [
  { icon: "🫀", tag: "RN", title: "RN Wound Care", desc: "Skilled assessment, cleaning, dressing changes, and monitoring of acute and chronic wounds to prevent infection and promote healing in the home environment." },
  { icon: "💉", tag: "RN", title: "RN IV Therapy", desc: "Intravenous medication administration, hydration therapy, and line management performed by a registered nurse in the comfort of your home." },
  { icon: "💊", tag: "RN", title: "Medication Management", desc: "Comprehensive medication review, reconciliation, administration, and patient education to ensure safe and effective medication adherence." },
  { icon: "📋", tag: "RN", title: "Skilled Assessments", desc: "Comprehensive nursing assessments for new patients, post-hospital discharge, and ongoing monitoring of chronic conditions with physician communication." },
  { icon: "🏥", tag: "LPN", title: "LPN Services", desc: "Licensed Practical Nurses providing skilled care visits including vital signs monitoring, wound care assistance, medication administration, and patient education under RN supervision." },
  { icon: "🧘", tag: "PT", title: "Physical Therapy", desc: "In-home physical therapy to restore strength, mobility, and function. Post-surgical rehab, fall prevention, and pain management delivered by a licensed PT." },
  { icon: "🤛", tag: "OT", title: "Occupational Therapy", desc: "Helping patients regain independence in daily activities — bathing, dressing, meal preparation — with adaptive techniques and home modification guidance." },
];

const personalServices = [
  { icon: "🧑", tag: "PCA", title: "Personal Care Aide (PCA)", desc: "Certified aides providing hands-on assistance with bathing, grooming, dressing, toileting, and personal hygiene to maintain comfort and dignity." },
  { icon: "👨‍⚕️", tag: "CNA", title: "Certified Nursing Assistant (CNA)", desc: "Certified Nursing Assistants providing personal care, vital signs monitoring, basic health observations, and skilled support under nursing supervision." },
  { icon: "🏠", tag: "HHA", title: "Home Health Aide (HHA)", desc: "Trained home health aides assisting with personal care, light housekeeping, and health-related tasks as part of a coordinated home health plan." },
  { icon: "🍳", tag: "Support", title: "Meal Preparation", desc: "Planning and preparing nutritious, diet-appropriate meals at home to support health conditions, recovery, and overall wellness for patients." },
  { icon: "👨‍👩‍👦", tag: "Support", title: "Companionship", desc: "Meaningful social interaction, conversation, and engagement activities that combat isolation and support mental and emotional well-being at home." },
  { icon: "📋", tag: "Support", title: "Appointment Accompaniment", desc: "Our aides accompany patients to medical appointments, helping with check-in, communication with providers, and safe navigation — while transportation is arranged separately through patient or family resources." },
  { icon: "🧹", tag: "Support", title: "Light Housekeeping", desc: "Maintaining a safe, clean home environment including laundry, vacuuming, dishes, and tidying to support patient health and reduce fall hazards." },
  { icon: "💊", tag: "Support", title: "Medication Reminders", desc: "Gentle, consistent reminders to take prescribed medications on schedule, helping patients maintain adherence without skilled nursing intervention." },
];

export function ServicesTabToggle() {
  const [active, setActive] = useState<"skilled" | "personal">("skilled");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const els = document.querySelectorAll(".tab-reveal:not(.visible)");
    els.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, [active]);

  const services = active === "skilled" ? skilledServices : personalServices;
  const tagClass = active === "skilled" ? "svc-tag-skilled" : "svc-tag-personal";

  return (
    <>
      <div className="services-toggle-wrap reveal">
        <div className="service-toggle">
          <button
            className={`toggle-btn${active === "skilled" ? " active" : ""}`}
            onClick={() => setActive("skilled")}
          >
            Skilled Care
          </button>
          <button
            className={`toggle-btn${active === "personal" ? " active" : ""}`}
            onClick={() => setActive("personal")}
          >
            Personal Care
          </button>
        </div>
      </div>

      <div className="tab-panel active">
        <div className="care-intro-bar reveal" style={{ marginTop: "48px" }}>
          <div className="care-intro-icon">
            {active === "skilled" ? "🏥" : "🧑"}
          </div>
          <div>
            <h3>{active === "skilled" ? "Skilled Care Services" : "Personal Care Services"}</h3>
            <p>
              {active === "skilled"
                ? "Clinical services delivered by licensed nurses and certified therapists — requiring a physician's order and covered by most insurance plans and Medicaid."
                : "Non-medical support services provided by certified aides to help patients with daily living activities, companionship, and household tasks."}
            </p>
          </div>
        </div>

        <div className="services-grid">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className={`svc-card tab-reveal reveal reveal-delay-${(i % 4) + 1}`}
            >
              <div className="svc-card-top">
                <span className="svc-icon">{svc.icon}</span>
                <span className={`svc-tag ${tagClass}`}>{svc.tag}</span>
              </div>
              <h4>{svc.title}</h4>
              <p>{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
