import { useState } from 'react';
import { Search, Globe, Mail, User, ChevronDown, ChevronRight } from 'lucide-react';

// Mock data based on the image
const sidebarLinks = [
  { label: 'Services', active: true, hasArrow: true },
  { label: 'Industry', active: false, hasArrow: true },
  { label: 'Alliances', active: false, hasArrow: true },
  { label: 'Case studies', active: false, hasArrow: false },
];

const serviceColumns = [
  ['Audit', 'Assurance', 'Business Process Solutions', 'Customer', 'Cyber', 'Human Capital', 'Strategy & Transactions'],
  ['Sustainability', 'Risk, Regulatory & Forensic', 'Legal', 'Operate', 'Tax', 'Deloitte Private', 'Engineering, AI & Data'],
  ['Enterprise Technology & Performance', 'Generative AI', 'Global Employer Services']
];

export default function MegaMenuNavbar() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false); // Open by default for preview

  return (
    <header className="relative w-full bg-[#001f3f] font-sans text-white select-none">
      {/* Top Navbar: Exactly 50px-52px height */}
      <nav className="flex h-[55px] items-center justify-between px-6 lg:px-12">
        <div className="flex items-center gap-10">
          {/* Logo */}
          <div className="flex items-center text-2xl font-bold tracking-tighter">
            <span>Northrop</span>
            <span className="ml-0.5 h-2 w-2 rounded-full bg-[#c5a044]" />
          </div>

          {/* Nav Links */}
          <div className="hidden h-full items-center gap-8 md:flex">
            <NavItem label="Who we are" />
            <button 
              onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
              className={`flex h-full items-center gap-1.5 px-2 text-[15px] transition-all ${
                isMegaMenuOpen ? 'border-[1px] border-dotted border-[#c5a044] text-[#c5a044]' : 'text-white hover:text-gray-300'
              }`}
            >
              What we do
              <ChevronDown size={14} className={`transition-transform duration-300 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            <NavItem label="Our Thinking" />
            <NavItem label="Careers" />
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-5 text-gray-300">
          <button className="flex items-center gap-2 text-[14px] hover:text-white">
            <Search size={20} strokeWidth={1.5} />
            <span className="hidden lg:inline">Search</span>
          </button>
          <button className="flex items-center gap-1 text-[14px] hover:text-white">
            <Globe size={20} strokeWidth={1.5} />
            <span className="hidden lg:inline uppercase">IN - EN</span>
            <ChevronDown size={14} />
          </button>
          <Mail size={20} strokeWidth={1.5} className="cursor-pointer hover:text-white" />
          <User size={22} strokeWidth={1.5} className="cursor-pointer hover:text-white" />
        </div>
      </nav>

      {/* Mega Menu Overlay */}
      {isMegaMenuOpen && (
        <div className="absolute left-0 top-full z-50 flex w-full border-t border-white/10 bg-[#061a3a] shadow-2xl">
          {/* Sidebar - Approx 18% width */}
          <aside className="w-[18%] min-w-[200px] border-r border-white/10 bg-[#0b1a31]">
            <ul className="py-4">
              {sidebarLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href="#"
                    className={`flex items-center justify-between px-8 py-5 text-[20px] transition-colors ${
                      link.active ? 'bg-[#061a3a] text-[#c5a044]' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {link.hasArrow && <ChevronRight size={16} className={link.active ? 'text-[#c5a044]' : 'text-gray-600'} />}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Links Area */}
          <main className="flex-1 px-12 py-10">
            <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-3">
              {serviceColumns.map((col, idx) => (
                <div key={idx} className="flex flex-col gap-6">
                  {col.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="text-[17px] font-light leading-snug text-gray-400 transition-colors hover:text-white"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </main>
        </div>
      )}
    </header>
  );
}

function NavItem({ label }) {
  return (
    <a href="#" className="flex items-center gap-1 text-[15px] text-white transition-colors hover:text-gray-300">
      {label}
      <ChevronDown size={14} className="text-gray-500" />
    </a>
  );
}