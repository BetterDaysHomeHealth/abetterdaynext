"use client";

import { useEffect, useRef } from "react";

const personalServices = [
  { icon: "🧑", tag: "PCA", title: "Personal Care Aide (PCA)", desc: "Certified aides providing hands-on assistance with bathing, grooming, dressing, toileting, and personal hygiene to maintain comfort and dignity." },
  { icon: "👨‍⚕️", tag: "CNA", title: "Certified Nursing Assistant (CNA)", desc: "Certified Nursing Assistants providing personal care, basic health observations, and compassionate support for daily living." },
  { icon: "🏠", tag: "HHA", title: "Home Health Aide (HHA)", desc: "Trained home health aides assisting with personal care, light housekeeping, and health-related tasks as part of a coordinated home care plan." },
  { icon: "🍳", tag: "Support", title: "Meal Preparation", desc: "Planning and preparing nutritious, diet-appropriate meals at home to support health conditions, recovery, and overall wellness." },
  { icon: "👨‍👩‍👦", tag: "Support", title: "Companionship", desc: "Meaningful social interaction, conversation, and engagement activities that combat isolation and support mental and emotional well-being." },
  { icon: "📋", tag: "Support", title: "Appointment Accompaniment", desc: "Our aides accompany patients to medical appointments, helping with check-in, communication with providers, and safe navigation." },
  { icon: "🧹", tag: "Support", title: "Light Housekeeping", desc: "Maintaining a safe, clean home environment including laundry, vacuuming, dishes, and tidying to support patient health and reduce fall hazards." },
  { icon: "💊", tag: "Support", title: "Medication Reminders", desc: "Gentle, consistent reminders to take prescribed medications on schedule, helping patients maintain adherence without skilled nursing intervention." },
];

export function ServicesTabToggle() {
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
  }, []);

  return (
    <>
      <div className="care-intro-bar reveal" style={{ marginTop: "48px" }}>
        <div className="care-intro-icon">🧑</div>
        <div>
          <h3>Personal Care Services</h3>
          <p>Non-medical support services provided by certified aides to help patients with daily living activities, companionship, and household tasks — so you or your loved one can remain comfortably and safely at home.</p>
        </div>
      </div>

      <div className="services-grid">
        {personalServices.map((svc, i) => (
          <div
            key={svc.title}
            className={`svc-card tab-reveal reveal reveal-delay-${(i % 4) + 1}`}
          >
            <div className="svc-card-top">
              <span className="svc-icon">{svc.icon}</span>
              <span className="svc-tag svc-tag-personal">{svc.tag}</span>
            </div>
            <h4>{svc.title}</h4>
            <p>{svc.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}
