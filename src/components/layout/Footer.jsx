import { footerLinks } from '../../data/homeContent'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer
      className="bg-cover bg-center bg-no-repeat px-6 py-10 text-white md:px-10 lg:px-20 bg-[#0E0E0E]"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        {/* Main Grid: Logo + Links + Form */}
        <div className="grid gap-12 lg:grid-cols-[250px_1fr]">

          {/* Logo Column */}
          <div className="space-y-6">
            <div className="flex items-center text-3xl font-bold tracking-tighter">
              <span>NORTHROP</span>

            </div>
            <p className="text-[14px] leading-relaxed text-gray-300 font-light">
              Providing precision knowledge and insightful solutions for global enterprises since 2022.
            </p>
          </div>
          {/* <span className="ml-1 h-2 w-2 rounded-full bg-[#c5a044]" /> */}
          {/* Links and Form Grid */}
          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
            {/* Links Columns */}
            <div>
              <h3 className="mb-6 text-[12px] font-bold uppercase tracking-[0.2em] text-[#c5a044]">
                Important Links
              </h3>
              <ul className="space-y-3 text-[14px] font-light text-gray-300">
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
              <ul className="space-y-3 text-[14px] font-light text-gray-300">
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
                  className="w-full border-b border-gray-700 bg-transparent py-2 text-[14px] font-light text-white outline-none transition-colors focus:border-[#c5a044] placeholder:text-gray-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border-b border-gray-700 bg-transparent py-2 text-[14px] font-light text-white outline-none transition-colors focus:border-[#c5a044] placeholder:text-gray-500"
                />
                <button
                  type="button"
                  className="mt-4 bg-[#c5a044] py-2.5 text-[11px] font-bold uppercase tracking-widest text-white transition-all hover:bg-[#a8883a]"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between border-t border-gray-300 py-4 text-[12px] text-gray-300">
          <p>© 2026 Northrop Management Private Limited. All Rights Reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer