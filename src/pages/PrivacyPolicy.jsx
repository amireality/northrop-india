import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const sections = [
  {
    title: "1. Who We Are",
    content: `Northrop Management Private Limited (CIN: U70200DC2026PTC469133) is a Data Fiduciary under India's Digital Personal Data Protection Act, 2023 (DPDPA). We are headquartered at Connaught Place, New Delhi – 110001. For all data-related queries, contact: Business@NorthropIndia.com`
  },
  {
    title: "2. What Data We Collect",
    content: `We collect the following personal data when you submit our contact form or newsletter subscription:\n• Full Name\n• Email Address\n• Phone Number\n• Company / Organisation Name\n• Industry / Sector\n• Message content\n\nWe do not collect sensitive personal data (as defined under DPDPA 2023) through this website.`
  },
  {
    title: "3. Why We Collect It (Purpose of Processing)",
    content: `Your data is collected solely for:\n• Responding to your business enquiry or consultation request\n• Sending our newsletter (only if you explicitly subscribe)\n• Improving our website experience\n\nWe will not use your data for any purpose beyond what is stated here without your explicit consent.`
  },
  {
    title: "4. Legal Basis for Processing",
    content: `We process your data on the basis of:\n• Your voluntary consent given at the time of form submission\n• Legitimate interest in responding to business communications\n\nYou may withdraw consent at any time by emailing Business@NorthropIndia.com.`
  },
  {
    title: "5. How Long We Retain Your Data",
    content: `Contact form enquiries are retained for a maximum of 24 months from the date of submission, after which they are permanently deleted. Newsletter subscriber data is retained until you unsubscribe. Retention periods may be extended only where required by law.`
  },
  {
    title: "6. Who We Share Your Data With",
    content: `We do not sell, rent, or trade your personal data to third parties. We may share your data with:\n• Our internal team members directly involved in responding to your enquiry\n• Email service providers (used solely to deliver communications)\n• Regulatory authorities, if required by law\n\nAll third-party processors are contractually bound to DPDPA-compliant data handling standards.`
  },
  {
    title: "7. Your Rights Under DPDPA 2023",
    content: `As a Data Principal under the DPDPA 2023, you have the right to:\n• Access the personal data we hold about you\n• Correct inaccurate or incomplete data\n• Erase your data (right to be forgotten)\n• Withdraw consent at any time\n• Nominate a representative to exercise rights on your behalf\n\nTo exercise any of these rights, email: Business@NorthropIndia.com. We will respond within 30 days.`
  },
  {
    title: "8. Cookies & Tracking",
    content: `Our website may use essential cookies for functionality. If we use analytics tools (e.g. Google Analytics), data is anonymised. You may disable cookies in your browser settings at any time without affecting your ability to use the website.`
  },
  {
    title: "9. Data Security",
    content: `We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, disclosure, alteration, or destruction. Our website is served over HTTPS encryption.`
  },
  {
    title: "10. Grievance Officer",
    content: `In accordance with DPDPA 2023, our Grievance Officer can be contacted at:\nNorthrop Management Private Limited\nConnaught Place, New Delhi – 110001\nEmail: Business@NorthropIndia.com\nPhone: +91-9289925657`
  },
  {
    title: "11. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. Any material changes will be notified on this page with an updated effective date. Continued use of our website after changes constitutes your acceptance of the revised policy.`
  }
]

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Northrop Management Private Limited</title>
        <meta name="description" content="Privacy Policy of Northrop Management Private Limited — how we collect, use, and protect your personal data in compliance with India's DPDPA 2023." />
        <link rel="canonical" href="https://northropindia.com/privacy-policy" />
      </Helmet>

      <div className="bg-[#FAF8F3] min-h-screen">
        {/* Hero */}
        <div className="bg-[#0E0E0E] border-b border-[#C4973B]/20">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
            <p className="flex items-center gap-3 text-[10px] font-medium tracking-[0.22em] uppercase text-[#C4973B] mb-5 font-sans">
              <span className="w-6 h-px bg-[#C4973B]" />
              Legal
            </p>
            <h1 className="font-serif text-[36px] lg:text-[48px] leading-[1.1] text-white tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-[15px] text-white/40 font-sans">
              Effective Date: <strong className="text-white/60">1 January 2026</strong> &nbsp;|&nbsp; Last Updated: <strong className="text-white/60">April 2026</strong>
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16">
          {/* Intro */}
          <div className="bg-white border-l-4 border-[#C4973B] p-6 mb-12">
            <p className="text-[15px] leading-[1.8] text-[#1A1A1A] font-sans">
              Northrop Management Private Limited is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and protect information you provide us, in compliance with India's <strong>Digital Personal Data Protection Act, 2023 (DPDPA)</strong>.
            </p>
          </div>

          {/* Sections */}
          <div className="flex flex-col gap-10">
            {sections.map((sec) => (
              <div key={sec.title} className="border-b border-[#E8E4DC] pb-10 last:border-0">
                <h2 className="font-serif text-[20px] text-[#0E0E0E] mb-4">{sec.title}</h2>
                <p className="text-[15px] leading-[1.8] text-[#444] font-sans whitespace-pre-line">{sec.content}</p>
              </div>
            ))}
          </div>

          {/* Back Link */}
          <div className="mt-16 pt-8 border-t border-[#E8E4DC]">
            <Link to="/" className="inline-flex items-center gap-2 text-[#C4973B] text-[14px] font-sans font-medium hover:underline">
              ← Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
