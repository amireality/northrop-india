import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import emailjs from '@emailjs/browser';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    purpose: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      // Restrict phone input to only numbers and max 10 digits
      const numericValue = value.replace(/\D/g, "").slice(0, 10);
      setFormData({ ...formData, [name]: numericValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.company || !formData.industry || !formData.purpose) {
      alert("Please fill in all required fields.");
      return;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    // Send via EmailJS
    emailjs
      .send(
        "service_2ngar93", // ✅ Your EmailJS Service ID
        "template_yf9elb7", // ✅ Your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          industry: formData.industry,
          purpose: formData.purpose,
          message: formData.message,
        },
        "E80We4fZTrb_w0oj5" // ✅ Your Public Key
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response.status, response.text);
          alert("Thank you! Your enquiry has been received. Our team will reach out within 24 hours.");
          window.location.reload();
        },
        (error) => {
          console.error("Error sending email:", error);
          alert("Failed to send the message. Please try again.");
        }
      )
      .catch((error) => {
        console.error("Network or email service error:", error);
        alert("Failed to send the message. Please try again.");
      });
  };

  return (
    <div className="bg-white text-[#001f3f] leading-[1.6] overflow-x-hidden">
      <Helmet>
        <title>Contact Us | Speak with an Expert Advisor | Northrop India</title>
        <meta name="description" content="Get in touch with Northrop's specialist advisors. Schedule a confidential consultation for financial reporting, risk management, or transaction advisory." />
      </Helmet>

      {/* BANNER SECTION */}
      <section className="relative h-[60vh] flex flex-col justify-center px-[20px] md:px-[80px] overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/contactusimg.avif')" }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-[900px]">
          <div className="flex items-center gap-[10px] mb-[26px]">
            <div className="w-[40px] h-[1px] bg-[#C4973B]"></div>
            <span className="text-[11px] font-[700] tracking-[3px] uppercase text-[#C4973B]">Connect with us</span>
          </div>
          <h1 className="text-white font-[900] leading-[1.05] tracking-[-2px] mb-[20px]" style={{ fontSize: 'clamp(40px, 5.5vw, 72px)' }}>
            Start a <em className="not-italic text-[#C4973B]">trusted conversation</em>
          </h1>
          <p className="text-[18px] font-[300] text-white/70 max-w-[600px] leading-[1.7]">
            Whether you are looking for strategic advisory, institutional partnerships, or a discussion on the global finance landscape—we are here to engage.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT SECTION */}
      <section className="py-[100px] px-[20px] md:px-[80px] max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[80px] lg:gap-[120px]">

          {/* Left Column: Text & Info */}
          <div className="flex flex-col justify-start">
            <div className="text-[10px] font-[700] tracking-[3px] uppercase text-[#C4973B] mb-[20px]">Advisory Intake</div>
            <h2 className="font-[900] leading-[1.1] tracking-[-1.2px] text-[#001f3f] mb-[32px]" style={{ fontSize: 'clamp(32px, 3.5vw, 48px)' }}>
              How can we help<br />your business?
            </h2>
            <div className="space-y-[24px]">
              <p className="text-[16px] text-gray-500 leading-[1.8] font-[300]">
                At Northrop, we do not believe in mass-market solutions. Every inquiry is handled personally by our senior advisory team to ensure that our initial response is as informed and helpful as possible.
              </p>
              <p className="text-[16px] text-gray-500 leading-[1.8] font-[300]">
                For career inquiries, please visit our <a href="/careers" className="text-[#C4973B] hover:underline font-[500]">Careers</a> page. For all other strategic matters, please use the form or reach out directly via the details provided.
              </p>
            </div>

            <div className="mt-[60px] pt-[60px] border-t border-gray-100 flex flex-col gap-[32px]">
              <div className="flex items-start gap-[20px]">
                <div className="w-[40px] h-[40px] rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                  <span className="text-[#C4973B] font-[700] text-[12px]">01</span>
                </div>
                <div>
                  <div className="text-[11px] font-[700] tracking-[1.5px] uppercase text-gray-400 mb-[4px]">Direct Email</div>
                  <div className="text-[18px] font-[400] text-[#001f3f]">Business@NorthropIndia.com</div>
                </div>
              </div>

              <div className="flex items-start gap-[20px]">
                <div className="w-[40px] h-[40px] rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                  <span className="text-[#C4973B] font-[700] text-[12px]">02</span>
                </div>
                <div>
                  <div className="text-[11px] font-[700] tracking-[1.5px] uppercase text-gray-400 mb-[4px]">Regional Phone</div>
                  <div className="text-[18px] font-[400] text-[#001f3f]"> +91 9289925657</div>
                </div>
              </div>

              <div className="flex items-start gap-[20px]">
                <div className="w-[40px] h-[40px] rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                  <span className="text-[#C4973B] font-[700] text-[12px]">03</span>
                </div>
                <div>
                  <div className="text-[11px] font-[700] tracking-[1.5px] uppercase text-gray-400 mb-[4px]">Headquarters</div>
                  <div className="text-[18px] font-[400] text-[#001f3f] leading-[1.5]">
                    GRAPHIX Tower 2,Block A,Industrial Area,Sector 62,Noida,Uttar Pradesh 201301,<br />India
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Column: The Form */}
          <div className="bg-[#0B1629] border border-[#2A3A5C] rounded-[12px] overflow-hidden shadow-2xl relative h-fit font-sans">
            <div className="px-[28px] py-[24px] border-b border-[#1E2E4A]">
              <div className="text-[20px] font-[500] text-[#E8D5A0] mb-[4px]">Get in Touch</div>
              <div className="text-[13px] text-[#6B7A99]">Tell us about your business and we'll connect you with the right team.</div>
            </div>

            <form className="p-[28px] space-y-[16px]" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px]">
                <div className="flex flex-col gap-[6px]">
                  <label className="text-[11px] tracking-[1px] uppercase text-[#B8962E] font-[500]">Full Name</label>
                  <input
                    type="text" name="name" value={formData.name} onChange={handleChange} required
                    placeholder="Enter your full name"
                    className="bg-[#0F1E38] border border-[#2A3A5C] rounded-[6px] py-[10px] px-[12px] text-[14px] text-[#D4C5A0] outline-none focus:border-[#B8962E] placeholder-[#3A4A66] transition-colors w-full"
                  />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <label className="text-[11px] tracking-[1px] uppercase text-[#B8962E] font-[500]">Phone Number</label>
                  <input
                    type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                    placeholder="Enter your phone number" minLength="10" maxLength="10"
                    className="bg-[#0F1E38] border border-[#2A3A5C] rounded-[6px] py-[10px] px-[12px] text-[14px] text-[#D4C5A0] outline-none focus:border-[#B8962E] placeholder-[#3A4A66] transition-colors w-full"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-[11px] tracking-[1px] uppercase text-[#B8962E] font-[500]">Email Address</label>
                <input
                  type="email" name="email" value={formData.email} onChange={handleChange} required
                  placeholder="Enter your email address"
                  className="bg-[#0F1E38] border border-[#2A3A5C] rounded-[6px] py-[10px] px-[12px] text-[14px] text-[#D4C5A0] outline-none focus:border-[#B8962E] placeholder-[#3A4A66] transition-colors w-full"
                />
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-[11px] tracking-[1px] uppercase text-[#B8962E] font-[500]">Company Name</label>
                <input
                  type="text" name="company" value={formData.company} onChange={handleChange} required
                  placeholder="Enter your company name"
                  className="bg-[#0F1E38] border border-[#2A3A5C] rounded-[6px] py-[10px] px-[12px] text-[14px] text-[#D4C5A0] outline-none focus:border-[#B8962E] placeholder-[#3A4A66] transition-colors w-full"
                />
              </div>

              <div className="h-[1px] bg-[#1E2E4A] my-[16px]"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px]">
                <div className="flex flex-col gap-[6px]">
                  <label className="text-[11px] tracking-[1px] uppercase text-[#B8962E] font-[500]">Industry</label>
                  <select
                    name="industry" value={formData.industry} onChange={handleChange} required
                    className="bg-[#0F1E38] border border-[#2A3A5C] rounded-[6px] py-[10px] px-[12px] text-[14px] text-[#D4C5A0] outline-none focus:border-[#B8962E] transition-colors w-full appearance-none cursor-pointer"
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23B8962E' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center", paddingRight: "32px" }}
                  >
                    <option value="" disabled>Select industry</option>
                    <option value="Services">Services</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="NGO / Non-Profit">NGO / Non-Profit</option>
                    <option value="Insurance">Insurance</option>
                    <option value="Trading">Trading</option>
                    <option value="Banking & Financial Institution">Banking & Financial Institution</option>
                    <option value="Individual / HNI">Individual / HNI</option>
                  </select>
                </div>
                <div className="flex flex-col gap-[6px]">
                  <label className="text-[11px] tracking-[1px] uppercase text-[#B8962E] font-[500]">Purpose</label>
                  <select
                    name="purpose" value={formData.purpose} onChange={handleChange} required
                    className="bg-[#0F1E38] border border-[#2A3A5C] rounded-[6px] py-[10px] px-[12px] text-[14px] text-[#D4C5A0] outline-none focus:border-[#B8962E] transition-colors w-full appearance-none cursor-pointer"
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23B8962E' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center", paddingRight: "32px" }}
                  >
                    <option value="" disabled>Select purpose</option>
                    <option value="Strategy & Advisory">Strategy & Advisory</option>
                    <option value="Due Diligence">Due Diligence</option>
                    <option value="Tax & Compliance">Tax & Compliance</option>
                    <option value="Forensic & Risk">Forensic & Risk</option>
                    <option value="Grant Advisory">Grant Advisory</option>
                    <option value="Compliance & Regulatory">Compliance & Regulatory</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-[6px] mt-[4px]">
                <label className="text-[11px] tracking-[1px] uppercase text-[#B8962E] font-[500]">Brief Message <span className="text-[#3A4A66] text-[10px] normal-case tracking-normal">(optional)</span></label>
                <textarea
                  name="message" value={formData.message} onChange={handleChange}
                  placeholder="Briefly describe what you need help with..."
                  className="bg-[#0F1E38] border border-[#2A3A5C] rounded-[6px] py-[10px] px-[12px] text-[14px] text-[#D4C5A0] outline-none focus:border-[#B8962E] placeholder-[#3A4A66] transition-colors w-full"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full mt-[4px] py-[13px] bg-[#B8962E] hover:bg-[#C9A84C] text-[#0B1629] text-[14px] font-[600] tracking-[0.5px] rounded-[6px] transition-all cursor-pointer border-none font-sans"
              >
                Submit Enquiry
              </button>

              <div className="mt-[12px] p-[10px_12px] bg-[#0F1E38] rounded-[6px] border-l-[2px] border-[#B8962E] flex items-center gap-[8px]">
                <span className="text-[12px] text-[#6B7A99]">
                  We typically respond within 24 hours. For urgent matters, call <strong className="text-[#B8962E] font-[500]">+91 92899 25657</strong>
                </span>
              </div>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
