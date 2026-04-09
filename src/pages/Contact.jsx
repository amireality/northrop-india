import { useEffect } from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
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
          message: formData.message,
        },
        "E80We4fZTrb_w0oj5" // ✅ Your Public Key
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response.status, response.text);
          alert("Message sent successfully!");

          // Reset form
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
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
    <div className="  bg-white text-[#001f3f] leading-[1.6] overflow-x-hidden">

      {/* BANNER SECTION */}
      <section className="relative h-[60vh] flex flex-col justify-center px-[20px] md:px-[80px] overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/contactusimg.avif')" }}
        ></div>
        <div
          className="absolute inset-0 bg-black/60"
        ></div>

        <div className="relative z-10 max-w-[900px]">
          <div className="flex items-center gap-[10px] mb-[26px]">
            <div className="w-[40px] h-[1px] bg-[#C4973B]"></div>
            <span className="text-[11px] font-[700] tracking-[3px] uppercase text-[#C4973B]">Connect with us</span>
          </div>
          <h1 className="text-white font-[900] leading-[1.05] tracking-[-2px] mb-[20px]" style={{ fontSize: 'clamp(40px, 5.5vw, 72px)' }}>
            Start a <em className="not-italic text-[#C4973B]">trusted conversation</em>.
          </h1>
          <p className="text-[18px] font-[300] text-white/70 max-w-[600px] leading-[1.7]">
            Whether you are looking for strategic advisory, institutional partnerships, or a discussion on the global finance landscape—we are here to engage.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT SECTION */}
      <section className="py-[100px] px-[20px] md:px-[80px] max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] lg:gap-[120px]">

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
                  <div className="text-[18px] font-[400] text-[#001f3f]">+91 93155 18112</div>
                </div>
              </div>

              <div className="flex items-start gap-[20px]">
                <div className="w-[40px] h-[40px] rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                  <span className="text-[#C4973B] font-[700] text-[12px]">03</span>
                </div>
                <div>
                  <div className="text-[11px] font-[700] tracking-[1.5px] uppercase text-gray-400 mb-[4px]">Headquarters</div>
                  <div className="text-[18px] font-[400] text-[#001f3f] leading-[1.5]">
                    Connaught Place, New Delhi — 110001,<br />India
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="bg-[#fcfcfa] p-[40px] md:p-[60px] border border-gray-100 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[4px] h-0 bg-[#C4973B] transition-all duration-700 group-hover:h-full"></div>

            <form className="space-y-[32px]" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
                <div className="flex flex-col gap-[10px]">
                  <label className="text-[11px] font-[700] tracking-[1.5px] uppercase text-[#001f3f]">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Full Name"
                    className="bg-transparent border-b border-gray-200 py-[12px] text-[15px] outline-none focus:border-[#C4973B] transition-all"
                  />
                </div>
                <div className="flex flex-col gap-[10px]">
                  <label className="text-[11px] font-[700] tracking-[1.5px] uppercase text-[#001f3f]">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Email Address"
                    className="bg-transparent border-b border-gray-200 py-[12px] text-[15px] outline-none focus:border-[#C4973B] transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-[10px]">
                <label className="text-[11px] font-[700] tracking-[1.5px] uppercase text-[#001f3f]">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  minLength="10"
                  maxLength="10"
                  pattern="\d{10}"
                  required
                  placeholder="Enter 10-digit number"
                  className="bg-transparent border-b border-gray-200 py-[12px] text-[15px] outline-none focus:border-[#C4973B] transition-all"
                />
              </div>

              <div className="flex flex-col gap-[10px]">
                <label className="text-[11px] font-[700] tracking-[1.5px] uppercase text-[#001f3f]">Message / Inquiry</label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter Your Message"
                  className="bg-transparent border-b border-gray-200 py-[12px] text-[15px] outline-none focus:border-[#C4973B] transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#001f3f] text-white text-[13px] font-[600] tracking-[1.5px] uppercase py-[18px] hover:bg-[#C4973B] transition-all duration-300 transform active:scale-[0.98]"
              >
                Send Message →
              </button>

              <p className="text-[11px] text-gray-400 text-center font-[300]">
                We typically respond to strategic inquiries within 24–48 business hours.
              </p>
            </form>
          </div>

        </div>
      </section>


    </div>
  );
};

export default Contact;
