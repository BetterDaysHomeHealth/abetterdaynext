"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Does Medicaid cover personal care aide services in Virginia?",
    a: "Yes. Virginia Medicaid covers personal care aide (PCA, CNA, HHA) services for eligible patients through programs like the CCC Plus Waiver. This can cover assistance with bathing, grooming, dressing, meal preparation, medication reminders, and companionship. Better Days Home Health is a Medicaid-enrolled provider, and we verify your benefits before care begins — at no cost to you.",
  },
  {
    q: "Do I need a doctor's referral to start personal care services?",
    a: "For most personal care services, a physician's order is not required to get started. Some Medicaid programs may require a functional assessment or documentation, but we handle that process for you. Simply call us and we'll walk you through exactly what's needed for your specific situation — at no charge.",
  },
  {
    q: "What does Medicaid cover for home care?",
    a: "Virginia Medicaid covers personal care aide hours for eligible patients, including assistance with bathing, grooming, meal preparation, light housekeeping, companionship, and medication reminders. Coverage is subject to eligibility criteria and a functional assessment. Our team will verify your specific Medicaid plan and benefits before care begins to ensure there are no surprises.",
  },
  {
    q: "How long does insurance verification take?",
    a: "In most cases, we can complete insurance verification within one to two business days. Prior authorization, if required, can take slightly longer depending on the insurance company's turnaround time. We communicate proactively with your insurer to expedite approvals. For urgent situations, please let us know and we will prioritize verification accordingly.",
  },
  {
    q: "What if my insurance does not cover the care I need?",
    a: "If your insurance does not cover a specific service or you do not have insurance, private pay options are available with flexible scheduling and transparent pricing. We can also help you understand whether you might qualify for Medicaid if you are not already enrolled. Our goal is to make sure cost is never an insurmountable barrier to the care your family needs.",
  },
  {
    q: "Does Sentara cover personal care aide services?",
    a: "Better Days Home Health is an in-network provider with Sentara Health Plans. Coverage for personal care aide services varies by plan type. Call us at (757) 715-7829 and we will verify your specific Sentara plan benefits before any commitment is made. There is no cost or obligation for the benefits check.",
  },
  {
    q: "Can veterans use VA benefits to pay for personal care?",
    a: "Yes, in many cases. The VA offers programs such as the Program of Comprehensive Assistance for Family Caregivers (PCAFC) and Aid & Attendance that can help cover personal care aide costs for qualifying veterans. Call us and we can help you understand which VA programs may apply to your situation.",
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
