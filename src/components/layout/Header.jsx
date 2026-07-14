import { useState, useEffect } from 'react';
import { Mail, User, ChevronDown, ChevronRight, Menu, X, ChevronLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { sidebarLinks, menuContent } from '../../data/megaMenuData'

const mobileMenuData = {
  "Who we are": [
    { label: "Purpose & Values", href: "/who-we-are/purpose" },
    { label: "Our People", href: "/who-we-are/people" },
    { label: "Governance", href: "/who-we-are/governance" },
    { label: "Recognition", href: "/who-we-are/recognition" },
    { label: "Press room", href: "/who-we-are/press" },
    { label: "Contact Us", href: "/contact" },
  ],
  "Our Thinking": [
    { label: "Insights", href: "/insights" },
    { label: "Reports", href: "/reports" },
  ],
  "Careers": [
    { label: "Jobs", href: "/jobs" },
    { label: "Life at Northrop", href: "/life" },
  ]
};

export default function Header() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null); // For 3rd level mobile menu
  const [activeTab, setActiveTab] = useState('Financial Reporting');
  const location = useLocation();

  useEffect(() => {
    setIsMegaMenuOpen(false);
    setIsMobileMenuOpen(false);
    setActiveSubMenu(null);
    setActiveCategory(null);
  }, [location]);

  return (
    <header
      className="relative w-full bg-white border-b border-gray-200   text-[#001f3f] select-none"
      onMouseLeave={() => setIsMegaMenuOpen(false)}
    >
      <nav className="flex h-[50px] items-center px-6 lg:px-12 gap-8">
        {/* LEFT — Brand Name only */}
        <Link to="/" className="flex items-center h-full shrink-0">
          <span
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '20px', lineHeight: 1, letterSpacing: '0.08em', color: '#001f3f', textTransform: 'uppercase' }}
          >
            NORTHROP
          </span>
        </Link>

        {/* CENTER-LEFT — Nav links (next to NORTHROP) */}
        <div className="flex items-center h-full flex-1">
          <div className="hidden h-full items-center gap-6 xl:flex">

            <div className="flex h-full items-center " onMouseEnter={() => setIsMegaMenuOpen(false)}>
              <NavItem label="Who we are" href="/who-we-are" hasDropdown={false} />
            </div>

            <div
              className={`flex h-full items-center gap-1.5 px-2 text-[15px] cursor-pointer transition-all ${isMegaMenuOpen ? 'border-[1px] border-dotted border-[#c5a044] text-[#c5a044]' : 'text-[#001f3f] hover:text-gray-600'
                }`}
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
            >
              <Link to="/what-we-do" className={`${isMegaMenuOpen ? 'text-[#c5a044]' : 'text-[#001f3f] hover:text-[#c5a044]'}`}>What we do</Link>
              <button className="flex items-center h-full outline-none cursor-pointer">
                <ChevronDown size={14} className={`transition-transform duration-300 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <div className="flex h-full items-center" onMouseEnter={() => setIsMegaMenuOpen(false)}>
              <NavItem label="Northrop Institute of Global Finance" href="/institute" hasDropdown={false} />
            </div>

            <div className="flex h-full items-center" onMouseEnter={() => setIsMegaMenuOpen(false)}>
              <NavItem label="Insights" href="/insights" hasDropdown={false} />
            </div>

            <div className="flex h-full items-center" onMouseEnter={() => setIsMegaMenuOpen(false)}>
              <NavItem label="Digital" href="/digital" hasDropdown={false} />
            </div>



            <div className="flex h-full items-center" onMouseEnter={() => setIsMegaMenuOpen(false)}>
              <NavItem label="Contact" href="/contact" hasDropdown={false} />
            </div>

          </div>

          {/* RIGHT — LinkedIn + Mail icons pinned far right */}
          <div className="hidden xl:flex items-center gap-4 pl-6 ml-auto border-l border-gray-200 shrink-0" onMouseEnter={() => setIsMegaMenuOpen(false)}>
            <a
              href="https://www.linkedin.com/company/northrop-management-private-limited"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Northrop Management on LinkedIn"
              className="text-[#c5a044] hover:opacity-70 transition-opacity duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="mailto:business@northropindia.com" aria-label="Email Northrop Management">
              <Mail
                size={19}
                strokeWidth={1.5}
                className="text-gray-500 cursor-pointer hover:text-[#001f3f] transition-colors"
              />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button className="xl:hidden flex items-center text-gray-800 ml-auto" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mega Menu Overlay (Desktop) */}
      {isMegaMenuOpen && (
        <div className="absolute left-0 top-full z-50 flex w-full bg-[#061a3a] shadow-2xl">
          <aside className="w-[20%] min-w-[280px] max-w-[320px] border-r border-white/10 bg-[#0b1a31]">
            <ul className="py-4">
              {sidebarLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => setActiveTab(link.label)}
                    onMouseEnter={() => setActiveTab(link.label)}
                    className={`w-full flex items-center justify-between px-8 py-3 text-[17px] text-left transition-colors outline-none ${activeTab === link.label ? 'bg-[#061a3a] text-[#c5a044]' : 'text-gray-400 hover:text-white'
                      }`}
                  >
                    <span className="flex-1 pr-4">{link.label}</span>
                    {link.hasArrow && <ChevronRight size={16} className={`flex-shrink-0 ${activeTab === link.label ? 'text-[#c5a044]' : 'text-gray-600'}`} />}
                  </button>
                </li>
              ))}
            </ul>
          </aside>
          <div className="flex-1 relative">
            <main className="absolute inset-0 px-12 py-10 overflow-y-auto bg-[#061a3a]">
              <div className="grid grid-cols-2 gap-x-24 gap-y-8 w-full max-w-5xl items-start">
                {Array.from({ length: Math.max(...(menuContent[activeTab]?.map(c => c.length) || [0]), 0) }).flatMap((_, rowIdx) =>
                  (menuContent[activeTab] || []).map((col, colIdx) => {
                    const item = col[rowIdx];
                    return item ? (
                      <Link key={item.label} to={item.href} onClick={() => setIsMegaMenuOpen(false)} className="text-[17px] font-light text-gray-400 hover:text-white leading-snug block">
                        {item.label}
                      </Link>
                    ) : (
                      <div key={`empty-${colIdx}-${rowIdx}`} />
                    );
                  })
                )}
              </div>
            </main>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-black text-white overflow-y-auto xl:hidden">
          <div className="flex h-[80px] items-center justify-between px-6 border-b border-gray-800">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center text-2xl font-bold tracking-tighter">
              <span>Northrop</span>
            </Link>
            <button onClick={() => setIsMobileMenuOpen(false)}><X size={32} /></button>
          </div>

          <div className="flex-1 px-8 py-10">
            {/* Level 1: Main Menu */}
            {!activeSubMenu && (
              <div className="flex flex-col gap-10 mt-4">
                <MobileNavItem label="Who we are" href="/who-we-are" onClick={() => setIsMobileMenuOpen(false)} />
                <MobileNavItem label="What we do" onClick={() => setActiveSubMenu("What we do")} hasArrow />
                <MobileNavItem label="Northrop Institute of Global Finance" href="/institute" onClick={() => setIsMobileMenuOpen(false)} />
                <MobileNavItem label="Insights" href="/insights" onClick={() => setIsMobileMenuOpen(false)} />
                <MobileNavItem label="Digital" href="/digital" onClick={() => setIsMobileMenuOpen(false)} />

                <MobileNavItem label="Contact" href="/contact" onClick={() => setIsMobileMenuOpen(false)} />
              </div>
            )}

            {/* Level 2: Category List */}
            {activeSubMenu && !activeCategory && (
              <div className="flex flex-col">
                <button onClick={() => setActiveSubMenu(null)} className="flex items-center gap-4 text-lg font-semibold mb-8 text-[#c5a044]">
                  <ChevronLeft size={20} strokeWidth={3} /> Main menu
                </button>
                <h2 className="text-4xl font-light mb-12">{activeSubMenu}</h2>
                <div className="flex flex-col gap-10">
                  {activeSubMenu === "What we do" ? (
                    sidebarLinks.map(link => (
                      <MobileNavItem key={link.label} label={link.label} onClick={() => setActiveCategory(link.label)} hasArrow />
                    ))
                  ) : (
                    mobileMenuData[activeSubMenu]?.map(item => (
                      <MobileNavItem key={item.label} label={item.label} href={item.href} />
                    ))
                  )}
                </div>
              </div>
            )}

            {/* Level 3: Final Link List */}
            {activeCategory && (
              <div className="flex flex-col">
                <button onClick={() => setActiveCategory(null)} className="flex items-center gap-4 text-lg font-semibold mb-8 text-[#c5a044]">
                  <ChevronLeft size={20} strokeWidth={3} /> {activeSubMenu}
                </button>
                <h2 className="text-4xl font-light mb-12">{activeCategory}</h2>
                <div className="flex flex-col gap-10">
                  {menuContent[activeCategory]?.flat().map(item => (
                    <MobileNavItem key={item.label} label={item.label} href={item.href} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

function NavItem({ label, href = "#", hasDropdown = true }) {
  return (
    <Link to={href} className="flex items-center gap-1 text-[15px] text-[#001f3f] hover:text-[#c5a044] transition-colors">
      {label}{hasDropdown && <ChevronDown size={14} className="text-gray-400" />}
    </Link>
  );
}

function MobileNavItem({ label, href, onClick, hasArrow }) {
  const content = (
    <div className="flex justify-between items-center text-[22px] font-light text-white">
      <span>{label}</span>{hasArrow && <ChevronRight size={24} />}
    </div>
  );
  if (href) return <Link to={href} onClick={onClick} className="block w-full">{content}</Link>;
  return <button onClick={onClick} className="block w-full text-left">{content}</button>;
}
