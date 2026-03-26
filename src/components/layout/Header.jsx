// import { useState, useEffect } from 'react';
// import { Search, Globe, Mail, User, ChevronDown, ChevronRight, Menu, X, ChevronLeft } from 'lucide-react';
// import { Link, useLocation } from 'react-router-dom';

// const mobileMenuData = {
//   "Who we are": [
//     { label: "Purpose & Values", href: "/who-we-are/purpose" },
//     { label: "Our People", href: "/who-we-are/people" },
//     { label: "Governance", href: "/who-we-are/governance" },
//     { label: "Recognition", href: "/who-we-are/recognition" },
//     { label: "Press room", href: "/who-we-are/press" },
//     { label: "Contact Us", href: "/contact" },
//   ],
//   "What we do": [
//     { label: "Services", href: "/services" },
//     { label: "Industry", href: "/industry" },
//     { label: "Alliances", href: "/alliances" },
//     { label: "Case studies", href: "/case-studies" },
//   ],
//   "Our Thinking": [
//     { label: "Insights", href: "/insights" },
//     { label: "Reports", href: "/reports" },
//   ],
//   "Careers": [
//     { label: "Jobs", href: "/jobs" },
//     { label: "Life at Northrop", href: "/life" },
//   ]
// };

// import { sidebarLinks, menuContent } from '../../data/megaMenuData'

// export default function Header() {
//   const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false); 
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [activeSubMenu, setActiveSubMenu] = useState(null);
//   const [activeTab, setActiveTab] = useState('Services');
//   const location = useLocation();

//   // Close the mega menu dropdown whenever the route changes
//   useEffect(() => {
//     setIsMegaMenuOpen(false);
//     setIsMobileMenuOpen(false);
//     setActiveSubMenu(null);
//   }, [location]);

//   return (
//     <header 
//       className="relative w-full bg-white border-b border-gray-200 font-sans text-[#001f3f] select-none"
//       onMouseLeave={() => setIsMegaMenuOpen(false)}
//     >
//       {/* Top Navbar with more top/bottom space */}
//       <nav className="flex h-[80px] items-center justify-between px-6 lg:px-12">
//         <div className="flex items-center gap-10 h-full">
//           {/* Logo */}
//           <Link to="/" className="flex items-center h-full">
//             <img src="/Logo.jpeg" alt="Northrop Logo" className="h-[60px] w-auto object-contain" />
//           </Link>

//           {/* Nav Links */}
//           <div className="hidden h-full items-center gap-8 md:flex">
//             <div className="flex h-full items-center" onMouseEnter={() => setIsMegaMenuOpen(false)}>
//               <NavItem label="Who we are" href="/who-we-are" />
//             </div>
            
//             <div 
//               className={`flex h-full items-center gap-1.5 px-2 text-[15px] cursor-pointer transition-all ${
//                 isMegaMenuOpen ? 'border-[1px] border-dotted border-[#c5a044] text-[#c5a044]' : 'text-[#001f3f] hover:text-gray-600'
//               }`}
//               onMouseEnter={() => setIsMegaMenuOpen(true)}
//               onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
//             >
//               <Link to="/what-we-do" className={`${isMegaMenuOpen ? 'text-[#c5a044]' : 'text-[#001f3f] hover:text-gray-600'}`}>What we do</Link>
//               <button 
//                 className="flex items-center h-full outline-none cursor-pointer"
//                 aria-label="Toggle megamenu"
//               >
//                 <ChevronDown size={14} className={`transition-transform duration-300 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
//               </button>
//             </div>

//             <div className="flex h-full items-center" onMouseEnter={() => setIsMegaMenuOpen(false)}>
//               <NavItem label="Our Thinking" href="/our-thinking" />
//             </div>

//             <div className="flex h-full items-center" onMouseEnter={() => setIsMegaMenuOpen(false)}>
//               <NavItem label="Careers" href="/careers" />
//             </div>
//           </div>
//         </div>

//         {/* Right Icons */}
//         <div className="flex items-center gap-5 text-gray-600 h-full" onMouseEnter={() => setIsMegaMenuOpen(false)}>
//           <button className="flex items-center gap-2 text-[14px] hover:text-[#001f3f]">
//             <Search size={20} strokeWidth={1.5} />
//             <span className="hidden lg:inline">Search</span>
//           </button>
          
//           <div className="hidden md:flex items-center gap-5">
//             <button className="flex items-center gap-1 text-[14px] hover:text-[#001f3f]">
//               <Globe size={20} strokeWidth={1.5} />
//               <span className="hidden lg:inline uppercase">IN - EN</span>
//               <ChevronDown size={14} />
//             </button>
//             <Mail size={20} strokeWidth={1.5} className="cursor-pointer hover:text-[#001f3f]" />
//             <User size={22} strokeWidth={1.5} className="cursor-pointer hover:text-[#001f3f]" />
//           </div>

//           {/* Mobile Menu Hamburger */}
//           <button 
//             className="md:hidden flex items-center text-gray-800 hover:text-[#001f3f]"
//             onClick={(e) => { e.stopPropagation(); setIsMobileMenuOpen(true); }}
//           >
//             <Menu size={28} />
//           </button>
//         </div>
//       </nav>

//       {/* Mega Menu Overlay */}
//       {isMegaMenuOpen && (
//         <div className="absolute left-0 top-full z-50 flex w-full border-t border-white/10 bg-[#061a3a] shadow-2xl">
//           {/* Sidebar - Approx 18% width */}
//           <aside className="w-[18%] min-w-[200px] border-r border-white/10 bg-[#0b1a31]">
//             <ul className="py-4">
//               {sidebarLinks.map((link) => (
//                 <li key={link.label}>
//                   <button
//                     onClick={() => setActiveTab(link.label)}
//                     className={`w-full flex items-center justify-between px-8 py-5 text-[20px] transition-colors outline-none ${
//                       activeTab === link.label ? 'bg-[#061a3a] text-[#c5a044]' : 'text-gray-400 hover:text-white'
//                     }`}
//                   >
//                     {link.label}
//                     {link.hasArrow && <ChevronRight size={16} className={activeTab === link.label ? 'text-[#c5a044]' : 'text-gray-600'} />}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </aside>

//           {/* Main Links Area */}
//           <main className="flex-1 px-12 py-10 min-h-[500px]">
//             <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-3">
//               {menuContent[activeTab]?.map((col, idx) => (
//                 <div key={idx} className="flex flex-col gap-6">
//                   {col.map((item) => (
//                     <Link
//                       key={item.label}
//                       to={item.href}
//                       onClick={() => setIsMegaMenuOpen(false)}
//                       className="text-[17px] font-light leading-snug text-gray-400 transition-colors hover:text-white"
//                     >
//                       {item.label}
//                     </Link>
//                   ))}
//                 </div>
//               ))}
//             </div>
//           </main>
//         </div>
//       )}

//       {/* Mobile Menu Overlay */}
//       {isMobileMenuOpen && (
//         <div className="fixed inset-0 z-[60] flex flex-col bg-black text-white overflow-y-auto md:hidden">
//           {/* Header */}
//           <div className="flex h-[80px] min-h-[80px] items-center justify-between px-6 border-b border-gray-800">
//             <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center text-2xl font-bold tracking-tighter text-white">
//                <span>Northrop</span>
//                <span className="ml-0.5 h-2 w-2 rounded-full bg-[#c5a044]" />
//             </Link>
//             <button onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-gray-300">
//               <X size={32} />
//             </button>
//           </div>

//           {/* Content */}
//           <div className="flex-1 px-8 py-10 overflow-y-auto">
//             {!activeSubMenu ? (
//               // Main Menu
//               <div className="flex flex-col gap-10 mt-4">
//                 <MobileNavItem label="Who we are" onClick={() => setActiveSubMenu("Who we are")} hasArrow />
//                 <MobileNavItem label="What we do" onClick={() => setActiveSubMenu("What we do")} hasArrow />
//                 <MobileNavItem label="Our Thinking" onClick={() => setActiveSubMenu("Our Thinking")} hasArrow />
//                 <MobileNavItem label="Careers" onClick={() => setActiveSubMenu("Careers")} hasArrow />
//               </div>
//             ) : (
//               // Sub Menu
//               <div className="flex flex-col">
//                 <button 
//                   onClick={() => setActiveSubMenu(null)}
//                   className="flex items-center gap-4 text-lg font-semibold mb-8 tracking-wide"
//                 >
//                   <ChevronLeft size={20} strokeWidth={3} /> Main menu
//                 </button>
//                 <h2 className="text-4xl font-light mb-12 text-white">{activeSubMenu}</h2>
//                 <div className="flex flex-col gap-10">
//                   {mobileMenuData[activeSubMenu]?.map((item) => (
//                     <MobileNavItem 
//                       key={item.label} 
//                       label={item.label} 
//                       href={item.href} 
//                       hasArrow 
//                     />
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// function NavItem({ label, href = "#" }) {
//   return (
//     <Link to={href} className="flex items-center gap-1 text-[15px] text-[#001f3f] transition-colors hover:text-gray-600">
//       {label}
//       <ChevronDown size={14} className="text-gray-400" />
//     </Link>
//   );
// }

// function MobileNavItem({ label, href, onClick, hasArrow }) {
//   const content = (
//     <div className="flex justify-between items-center text-[22px] font-light text-white">
//       <span>{label}</span>
//       {hasArrow && <ChevronRight size={24} />}
//     </div>
//   );

//   if (href) {
//     return <Link to={href} className="block w-full">{content}</Link>;
//   }
//   return <button onClick={onClick} className="block w-full text-left">{content}</button>;
// }


import { useState, useEffect } from 'react';
import { Search, Globe, Mail, User, ChevronDown, ChevronRight, Menu, X, ChevronLeft } from 'lucide-react';
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
  const [activeTab, setActiveTab] = useState('Services');
  const location = useLocation();

  useEffect(() => {
    setIsMegaMenuOpen(false);
    setIsMobileMenuOpen(false);
    setActiveSubMenu(null);
    setActiveCategory(null);
  }, [location]);

  return (
    <header 
      className="relative w-full bg-white border-b border-gray-200 font-sans text-[#001f3f] select-none"
      onMouseLeave={() => setIsMegaMenuOpen(false)}
    >
      <nav className="flex h-[80px] items-center justify-between px-6 lg:px-12">
        <div className="flex items-center gap-10 h-full">
          <Link to="/" className="flex items-center h-full">
            <img src="/Logo.jpeg" alt="Northrop Logo" className="h-[60px] w-auto object-contain" />
          </Link>

          <div className="hidden h-full items-center gap-8 md:flex">
            <div className="flex h-full items-center" onMouseEnter={() => setIsMegaMenuOpen(false)}>
              <NavItem label="Who we are" href="/who-we-are" />
            </div>
            
            <div 
              className={`flex h-full items-center gap-1.5 px-2 text-[15px] cursor-pointer transition-all ${
                isMegaMenuOpen ? 'border-[1px] border-dotted border-[#c5a044] text-[#c5a044]' : 'text-[#001f3f] hover:text-gray-600'
              }`}
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
            >
              <Link to="/what-we-do" className={`${isMegaMenuOpen ? 'text-[#c5a044]' : 'text-[#001f3f] hover:text-gray-600'}`}>What we do</Link>
              <button className="flex items-center h-full outline-none cursor-pointer">
                <ChevronDown size={14} className={`transition-transform duration-300 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <div className="flex h-full items-center" onMouseEnter={() => setIsMegaMenuOpen(false)}>
              <NavItem label="Our Thinking" href="/our-thinking" />
            </div>

            <div className="flex h-full items-center" onMouseEnter={() => setIsMegaMenuOpen(false)}>
              <NavItem label="Careers" href="/careers" />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-5 text-gray-600 h-full" onMouseEnter={() => setIsMegaMenuOpen(false)}>
          <button className="flex items-center gap-2 text-[14px] hover:text-[#001f3f]">
            <Search size={20} strokeWidth={1.5} /><span className="hidden lg:inline">Search</span>
          </button>
          <div className="hidden md:flex items-center gap-5">
            <button className="flex items-center gap-1 text-[14px] hover:text-[#001f3f]">
              <Globe size={20} strokeWidth={1.5} /><span className="hidden lg:inline uppercase">IN - EN</span><ChevronDown size={14} />
            </button>
            <Mail size={20} strokeWidth={1.5} className="cursor-pointer hover:text-[#001f3f]" />
            <User size={22} strokeWidth={1.5} className="cursor-pointer hover:text-[#001f3f]" />
          </div>
          <button className="md:hidden flex items-center text-gray-800" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mega Menu Overlay (Desktop) */}
      {isMegaMenuOpen && (
        <div className="absolute left-0 top-full z-50 flex w-full bg-[#061a3a] shadow-2xl">
          <aside className="w-[18%] min-w-[200px] border-r border-white/10 bg-[#0b1a31]">
            <ul className="py-4">
              {sidebarLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => setActiveTab(link.label)}
                    className={`w-full flex items-center justify-between px-8 py-5 text-[20px] transition-colors outline-none ${
                      activeTab === link.label ? 'bg-[#061a3a] text-[#c5a044]' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {link.hasArrow && <ChevronRight size={16} className={activeTab === link.label ? 'text-[#c5a044]' : 'text-gray-600'} />}
                  </button>
                </li>
              ))}
            </ul>
          </aside>
          <main className="flex-1 px-12 py-10 min-h-[500px]">
            <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-3">
              {menuContent[activeTab]?.map((col, idx) => (
                <div key={idx} className="flex flex-col gap-6">
                  {col.map((item) => (
                    <Link key={item.label} to={item.href} onClick={() => setIsMegaMenuOpen(false)} className="text-[17px] font-light text-gray-400 hover:text-white">
                      {item.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </main>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-black text-white overflow-y-auto md:hidden">
          <div className="flex h-[80px] items-center justify-between px-6 border-b border-gray-800">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center text-2xl font-bold tracking-tighter">
              <span>Northrop</span><span className="ml-0.5 h-2 w-2 rounded-full bg-[#c5a044]" />
            </Link>
            <button onClick={() => setIsMobileMenuOpen(false)}><X size={32} /></button>
          </div>

          <div className="flex-1 px-8 py-10">
            {/* Level 1: Main Menu */}
            {!activeSubMenu && (
              <div className="flex flex-col gap-10 mt-4">
                <MobileNavItem label="Who we are" onClick={() => setActiveSubMenu("Who we are")} hasArrow />
                <MobileNavItem label="What we do" onClick={() => setActiveSubMenu("What we do")} hasArrow />
                <MobileNavItem label="Our Thinking" onClick={() => setActiveSubMenu("Our Thinking")} hasArrow />
                <MobileNavItem label="Careers" onClick={() => setActiveSubMenu("Careers")} hasArrow />
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

function NavItem({ label, href = "#" }) {
  return (
    <Link to={href} className="flex items-center gap-1 text-[15px] text-[#001f3f] hover:text-gray-600 transition-colors">
      {label}<ChevronDown size={14} className="text-gray-400" />
    </Link>
  );
}

function MobileNavItem({ label, href, onClick, hasArrow }) {
  const content = (
    <div className="flex justify-between items-center text-[22px] font-light text-white">
      <span>{label}</span>{hasArrow && <ChevronRight size={24} />}
    </div>
  );
  if (href) return <Link to={href} className="block w-full">{content}</Link>;
  return <button onClick={onClick} className="block w-full text-left">{content}</button>;
}
