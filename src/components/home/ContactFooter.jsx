import { footerLinks } from '../../data/homeContent'

function ContactFooter() {
  return (
    <footer 
      className="bg-cover bg-center bg-no-repeat px-6 py-20 text-white md:px-10 lg:px-20"
      style={{ backgroundImage: `url('/homepageimg/footer_bg.jpg')` }}
    >
      <div className="mx-auto w-full max-w-[1400px]">
        {/* Main Grid: Logo + Links + Form */}
        <div className="grid gap-12 lg:grid-cols-[250px_1fr]">
          
          {/* Logo Column */}
          <div className="space-y-6">
            <div className="flex items-center text-3xl font-bold tracking-tighter">
              <span>NORTHROP</span>
              <span className="ml-1 h-2 w-2 rounded-full bg-[#c5a044]" />
            </div>
            <p className="text-[14px] leading-relaxed text-gray-400 font-light">
              Providing precision knowledge and insightful solutions for global enterprises since 1995.
            </p>
          </div>

          {/* Links and Form Grid */}
          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
            {/* Links Columns */}
            <div>
              <h3 className="mb-6 text-[12px] font-bold uppercase tracking-[0.2em] text-[#c5a044]">
                Important Links
              </h3>
              <ul className="space-y-3 text-[14px] font-light text-gray-300">
                {footerLinks?.important?.map((link) => (
                  <li key={link}>
                    <a href="#" className="transition-colors hover:text-[#c5a044]">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-[12px] font-bold uppercase tracking-[0.2em] text-[#c5a044]">
                Support
              </h3>
              <ul className="space-y-3 text-[14px] font-light text-gray-300">
                {footerLinks?.support?.map((link) => (
                  <li key={link}>
                    <a href="#" className="transition-colors hover:text-[#c5a044]">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-[12px] font-bold uppercase tracking-[0.2em] text-[#c5a044]">
                Group Websites
              </h3>
              <ul className="space-y-3 text-[14px] font-light text-gray-300">
                {footerLinks?.groupWebsite?.map((link) => (
                  <li key={link}>
                    <a href="#" className="transition-colors hover:text-[#c5a044]">{link}</a>
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
        <div className="mt-20 flex flex-col items-center justify-between border-t border-gray-800 pt-8 text-[12px] text-gray-500 md:flex-row">
          <p>© 2026 Northrop Management Private Limited. All Rights Reserved.</p>
          <div className="mt-4 flex gap-6 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default ContactFooter