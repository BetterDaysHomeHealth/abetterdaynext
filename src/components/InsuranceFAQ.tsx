"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Does Medicare cover home health care?",
    a: "Yes. Medicare Part A covers home health services when you meet eligibility requirements: you must be homebound, have a physician's order, and require skilled nursing or therapy on an intermittent basis. When these conditions are met, Medicare covers qualifying home health visits at 100% — there is no copay or deductible for covered home health services. We are a Medicare-participating home health agency and our intake team will verify your Medicare benefits before care begins.",
  },
  {
    q: 'What does "homebound" mean for Medicare purposes?',
    a: 'Medicare defines "homebound" as meaning that leaving your home requires a considerable and taxing effort due to illness, injury, or functional limitation. You do not have to be completely bedridden. Patients who use a cane, walker, or wheelchair, or who experience significant fatigue, pain, or shortness of breath when leaving home often qualify. Occasional trips for medical appointments, religious services, or similar activities do not disqualify you from homebound status. If you are unsure whether you qualify, call us — we can help assess your situation.',
  },
  {
    q: "Do I need a doctor's referral to start home health services?",
    a: "For skilled care services (nursing, physical therapy, occupational therapy), a physician's order is required by insurance providers and by state regulations. However, you do not need to bring us a referral yourself — we can contact your physician's office directly and coordinate the paperwork. For personal care services, a physician's order is not always required, though some Medicaid plans may require one. Call us and we will walk you through what applies to your situation.",
  },
  {
    q: "What does Medicaid cover for home health?",
    a: "Virginia Medicaid covers a broad range of home health services for eligible patients, including skilled nursing visits, physical therapy, occupational therapy, and personal care aide services. Coverage is subject to medical necessity criteria determined by your physician and Medicaid guidelines. Our team will verify your specific Medicaid plan and benefits before care begins to ensure there are no surprises.",
  },
  {
    q: "How long does insurance verification take?",
    a: "In most cases, we can complete insurance verification within one to two business days. Prior authorization, if required, can take slightly longer depending on the insurance company's turnaround time. We communicate proactively with your insurer to expedite approvals. For urgent care situations, please let us know and we will prioritize verification accordingly.",
  },
  {
    q: "What if my insurance does not cover the care I need?",
    a: "If your insurance does not cover a specific service or you do not have insurance, private pay options are available with flexible scheduling and transparent pricing. We can also help you understand whether you might qualify for Medicaid if you are not already enrolled. Our goal is to make sure cost is never an insurmountable barrier to the care your family needs.",
  },
  {
    q: "Can I receive both skilled and personal care at the same time?",
    a: "Yes, many of our patients receive both skilled care (such as nursing or therapy visits) and personal care (such as daily aide assistance) concurrently. These are typically billed separately to insurance, and eligibility for each depends on your plan and medical needs. During our intake process, we assess all aspects of your care needs and coordinate the appropriate combination of services and billing.",
  },
];

export function InsuranceFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="faq-list reveal">
      {faqs.map((faq, i) => (
        <div key={i} className={`faq-item${openIndex === i ? " open" : ""}`}>
          <button className="faq-question btn-faq" onClick={() => toggle(i)}>
            {faq.q}
            <span className="faq-chevron">⌄</span>
          </button>
          <div className="faq-answer">{faq.a}</div>
        </div>
      ))}
    </div>
  );
}
