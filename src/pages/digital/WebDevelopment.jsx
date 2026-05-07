
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const WebDevelopment = () => {
  return (
    <>
      <Helmet>
        <title>High-Performance Web Development | Northrop Management</title>
        <meta name="description" content="Engineering next-generation web architecture for digital authority. Enterprise E-commerce, Headless CMS, and high-performance applications built for scale." />
       
      </Helmet>

      <main className="bg-[#fcf9f8] text-[#1c1b1b] font-['Inter',sans-serif]">
        {/* Hero Section */}
        <section className="relative h-[716px] flex items-center bg-[#001736] overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img 
              className="w-full h-full object-cover" 
              alt="Modern tech workspace with multiple monitors" 
              src="/digitalimg/webdevelope1.png" 
            />
          </div>
          <div className="relative z-10 px-8 lg:px-16 max-w-[1280px] mx-auto w-full animate-fade-in-up">
            <div className="max-w-3xl">
              <span className="text-[12px] font-semibold text-[#d6e3ff] mb-4 block uppercase tracking-widest">WEB DEVELOPMENT SERVICES</span>
              <h1 className="font-['Noto_Serif',serif] text-[36px] md:text-[48px] text-white mb-8 leading-tight font-bold">Next-Generation Architecture for Digital Authority.</h1>
              <p className="text-[18px] text-[#c5c7c8] mb-10 leading-[1.6]">We engineer high-performance web applications that merge technical precision with elite user experience. From headless CMS to enterprise e-commerce, our solutions are built for scale and security.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <button className="bg-white text-[#001736] text-[15px] px-10 py-5 uppercase font-medium tracking-widest rounded-sm hover:bg-[#d6e3ff] transition-colors w-full sm:w-auto cursor-pointer">Start Project</button>
                </Link>
                <button className="border border-white text-white text-[15px] px-10 py-5 uppercase font-medium tracking-widest rounded-sm hover:bg-white/10 transition-colors w-full sm:w-auto">Technical Stack</button>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Capabilities (Bento Grid) */}
        <section className="py-[120px] px-8 lg:px-16 max-w-[1280px] mx-auto">
          <div className="mb-[64px] text-center">
            <h2 className="font-['Noto_Serif',serif] text-[32px] md:text-[36px] text-[#001736] mb-2 font-bold">Core Capabilities</h2>
            <div className="h-1 w-20 bg-[#001736] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Large Card: E-commerce */}
            <div className="md:col-span-8 bg-white border border-[#c4c6d0] p-10 flex flex-col justify-between cursor-pointer hover:shadow-lg transition-shadow group">
              <div>
                <span className="material-symbols-outlined text-[#001736] text-4xl mb-4 group-hover:scale-110 transition-transform">shopping_cart</span>
                <h3 className="font-['Noto_Serif',serif] text-[24px] md:text-[28px] text-[#001736] mb-4 font-semibold">Enterprise E-Commerce</h3>
                <p className="text-[16px] text-[#5c5f60] max-w-lg leading-[1.6]">Custom-built transactional platforms designed for high-velocity sales. We integrate robust payment gateways, inventory management, and personalized customer journeys that convert at scale.</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                <span className="bg-[#f0eded] text-[#43474f] text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-widest">Shopify Plus</span>
                <span className="bg-[#f0eded] text-[#43474f] text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-widest">BigCommerce</span>
                <span className="bg-[#f0eded] text-[#43474f] text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-widest">Stripe API</span>
              </div>
            </div>
            {/* Tall Card: Performance */}
            <div className="md:col-span-4 bg-[#001736] text-white p-10 flex flex-col justify-between cursor-pointer group">
              <div>
                <span className="material-symbols-outlined text-[#aac7ff] text-4xl mb-4 group-hover:animate-pulse">bolt</span>
                <h3 className="font-['Noto_Serif',serif] text-[24px] md:text-[28px] mb-4 font-semibold">High Performance</h3>
                <p className="text-[#c5c7c8] leading-[1.6]">Zero-latency architectures using Next.js and Vercel. We target sub-second load times to maximize SEO rankings and user retention.</p>
              </div>
              <div>
                <div className="h-1 w-full bg-white/20 mt-8 relative">
                  <div className="absolute inset-y-0 left-0 bg-[#aac7ff] w-4/5"></div>
                </div>
                <span className="text-[12px] font-semibold mt-2 block tracking-widest uppercase">Lighthouse Score: 98/100</span>
              </div>
            </div>
            {/* Small Card: Accessibility */}
            <div className="md:col-span-4 bg-[#f6f3f2] border border-[#c4c6d0] p-8 cursor-pointer hover:bg-[#f0eded] transition-colors">
              <span className="material-symbols-outlined text-[#001736] mb-4">visibility</span>
              <h4 className="font-['Noto_Serif',serif] text-[20px] text-[#001736] mb-2 font-semibold uppercase tracking-widest">WCAG Compliance</h4>
              <p className="text-[14px] text-[#5c5f60] leading-[1.5]">Inclusion is not optional. Every line of code follows strict WCAG 2.1 accessibility standards for universal reach.</p>
            </div>
            {/* Medium Card: Headless CMS */}
            <div className="md:col-span-8 bg-white border border-[#c4c6d0] p-8 flex items-center gap-8 cursor-pointer hover:shadow-lg transition-shadow">
              <div className="w-1/3 hidden md:block">
                <img 
                  className="rounded-sm shadow-sm grayscale hover:grayscale-0 transition-all duration-700" 
                  alt="Minimalist digital interface representing headless CMS" 
                  src="/digitalimg/webdevelope.png" 
                />
              </div>
              <div className="flex-1">
                <h4 className="font-['Noto_Serif',serif] text-[20px] text-[#001736] mb-2 font-semibold uppercase tracking-widest">Headless CMS Implementation</h4>
                <p className="text-[14px] text-[#5c5f60] leading-[1.5]">Decoupled architectures using Contentful or Strapi. Empower your content teams with modern editing tools while keeping your frontend lightweight and secure.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Gallery */}
        <section className="bg-[#eae7e7] py-[120px]">
          <div className="px-8 lg:px-16 max-w-[1280px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-[64px] gap-8">
              <div className="max-w-xl">
                <span className="text-[12px] font-semibold text-[#001736] mb-2 block tracking-widest uppercase">OUR TOOLKIT</span>
                <h2 className="font-['Noto_Serif',serif] text-[32px] md:text-[36px] text-[#001736] font-bold">Engineered with Industry Leaders.</h2>
              </div>
              <p className="text-[#5c5f60] max-w-xs text-[14px] leading-[1.5]">We select tools based on performance, scalability, and long-term maintainability for enterprise environments.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {/* Tech Icon Items */}
              {[
                { name: 'Next.js', img: '/digitalimg/webdevelopelogo.png' },
                { name: 'Tailwind CSS', img: '/digitalimg/webdevelopelogo1.png' },
                { name: 'TypeScript', img: '/digitalimg/webdevelopelogo2.png' },
                { name: 'GraphQL', img: '/digitalimg/webdevelopelogo3.png' },
                { name: 'Contentful', img: '/digitalimg/webdevelopelogo4.png' },
                { name: 'React', img: '/digitalimg/webdevelopelogo5.png' }
              ].map((tech) => (
                <div key={tech.name} className="bg-white p-6 border border-[#c4c6d0] flex flex-col items-center text-center hover:shadow-lg transition-all cursor-pointer group">
                  <img alt={tech.name} className="w-12 h-12 mb-4  transition-all duration-500" src={tech.img} />
                  <span className="text-[12px] font-semibold text-[#001736] tracking-widest uppercase">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-[120px] px-8 lg:px-16 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-['Noto_Serif',serif] text-[32px] md:text-[36px] text-[#001736] mb-8 font-bold leading-[1.3]">Built for Search & Speed.</h2>
              <ul className="space-y-8">
                {[
                  { title: 'SEO-Optimized Architecture', desc: 'Server-side rendering (SSR) and static site generation (SSG) ensure bots can crawl every page instantly for maximum ranking potential.' },
                  { title: 'Responsive Fluidity', desc: 'Mathematical grid systems ensure your brand looks premium on everything from an ultra-wide monitor to a mobile device.' },
                  { title: 'Edge Deployment', desc: 'Leveraging global edge networks to serve content from the location closest to your users, reducing TTFB significantly.' }
                ].map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <span className="material-symbols-outlined text-[#00468c] animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <div>
                      <h4 className="text-[18px] font-bold text-[#001736] mb-1 uppercase tracking-widest">{item.title}</h4>
                      <p className="text-[14px] text-[#5c5f60] leading-[1.5]">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative group animate-fade-in">
              <div className="absolute -inset-4 bg-[#001735]/10 rounded-sm blur-xl group-hover:bg-[#001735]/20 transition-all"></div>
              <img 
                className="relative rounded-sm border border-[#c4c6d0] shadow-xl grayscale-[50%] group-hover:grayscale-0 transition-all duration-1000" 
                alt="Sleek laptop screen showing code" 
                src="/digitalimg/webdevelope3.png" 
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#001736] py-[120px]">
          <div className="px-8 lg:px-16 max-w-[1280px] mx-auto text-center">
            <h2 className="font-['Noto_Serif',serif] text-[32px] md:text-[36px] text-white mb-8 font-bold">Ready to Upgrade Your Digital Infrastructure?</h2>
            <p className="text-[#c5c7c8] text-[18px] mb-10 max-w-2xl mx-auto leading-[1.6]">Contact our technical consultants to discuss your web application requirements and receive a detailed architecture proposal.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <Link to="/contact">
                <button className="bg-white text-[#001736] text-[15px] px-10 py-5 uppercase font-medium tracking-widest rounded-sm hover:bg-[#d6e3ff] transition-colors w-full sm:w-auto cursor-pointer">Book a Technical Audit</button>
              </Link>
              <Link to="/contact">
                <button className="border border-white text-white text-[15px] px-10 py-5 uppercase font-medium tracking-widest rounded-sm hover:bg-white/10 transition-colors w-full sm:w-auto cursor-pointer">View Case Studies</button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default WebDevelopment

