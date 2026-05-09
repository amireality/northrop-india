import { footerLinks } from '../../data/homeContent'
import { Link } from 'react-router-dom'

// G-03: LinkedIn SVG icon
const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

function Footer() {
  return (
    <footer className="bg-cover bg-center bg-no-repeat px-6 py-10 text-white md:px-10 lg:px-20 bg-[#0E0E0E]">
      <div className="mx-auto w-full max-w-[1400px]">
        {/* Main Grid: Logo + Links + Form */}
        <div className="grid gap-12 lg:grid-cols-[250px_1fr]">

          {/* Logo Column */}
          <div className="space-y-6">
            <div className="flex items-center text-3xl font-bold tracking-tighter font-serif">
              <span>NORTHROP</span>
            </div>

            {/* G-04 / G-12: Fixed tagline — removed "since 2022" */}
            <p className="text-[14px] leading-relaxed text-gray-300 font-light font-sans">
              MANAGEMENT CONSULTING | STRATEGIC CAPITAL. <br />
              High-Stakes Funding. Institutional Due Diligence. Assurance & Risk Advisory
              Delhi NCR - Pan India
            </p>

            {/* G-03: Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.linkedin.com/company/northrop-management-private-limited"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Northrop Management on LinkedIn"
                className="text-[#c5a044] hover:opacity-70 transition-opacity duration-200"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

          {/* Links and Form Grid */}
          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
            {/* Links Columns */}
            <div>
              <h3 className="mb-6 text-[12px] font-bold uppercase tracking-[0.2em] text-[#c5a044]">
                Important Links
              </h3>
              <ul className="space-y-3 text-[14px] font-light text-gray-300 font-sans">
                {footerLinks?.important?.map((item) => (
                  <li key={item.title}>
                    <Link to={item.link} className="transition-colors hover:text-[#c5a044]">{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-[12px] font-bold uppercase tracking-[0.2em] text-[#c5a044]">
                Support
              </h3>
              <ul className="space-y-3 text-[14px] font-light text-gray-300 font-sans">
                {footerLinks?.support?.map((item) => (
                  <li key={item.title}>
                    <Link to={item.link} className="transition-colors hover:text-[#c5a044]">{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Column */}
            <div>
              <h3 className="mb-6 text-[12px] font-bold uppercase tracking-[0.2em] text-[#c5a044]">
                Newsletter
              </h3>
              <form className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  aria-label="Your Name"
                  className="w-full border-b border-gray-700 bg-transparent py-2 text-[14px] font-light text-white outline-none transition-colors focus:border-[#c5a044] placeholder:text-gray-500 font-sans"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  aria-label="Your Email"
                  className="w-full border-b border-gray-700 bg-transparent py-2 text-[14px] font-light text-white outline-none transition-colors focus:border-[#c5a044] placeholder:text-gray-500 font-sans"
                />
                <button
                  type="button"
                  className="mt-4 bg-[#c5a044] py-2.5 text-[11px] font-bold uppercase tracking-widest text-white transition-all hover:bg-[#a8883a] font-sans"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between border-t border-gray-700 py-4 text-[12px] text-gray-400 font-sans gap-4">
          <p className="m-0 text-[12px] text-gray-400">
            © 2026 Northrop Management Private Limited. Incorporated 2026. All Rights Reserved.
          </p>

          <div className="flex gap-6">
            {/* G-06: Privacy Policy — real link */}
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer