import { Helmet } from 'react-helmet-async'

export default function WebDevelopment() {
  return (
    <>
      <Helmet>
        <title>Web Development | Northrop Management</title>
        <meta name="description" content="Next-generation architecture for digital authority. High-performance web applications built for scale." />
      </Helmet>

      <style dangerouslySetInnerHTML={{ __html: `
        .digital-subpage {
          --primary: #002B5C;
          --background: #fcf9f8;
          --on-surface: #1c1b1b;
          --section-gap: 120px;
        }
        .font-h1 { font-family: 'Noto Serif', serif; font-size: 48px; line-height: 1.2; font-weight: 700; }
        .font-h2 { font-family: 'Noto Serif', serif; font-size: 36px; line-height: 1.3; font-weight: 600; }
        .font-h3 { font-family: 'Noto Serif', serif; font-size: 28px; line-height: 1.4; font-weight: 600; }
      `}} />

      <main className="digital-subpage pt-20 bg-[#fcf9f8] text-[#1c1b1b] font-sans">
        {/* Hero Section */}
        <section className="relative h-[700px] flex items-center bg-[#002B5C] overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img 
              className="w-full h-full object-cover" 
              alt="Tech workspace" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRZWjMKCKdkSObIX4OnlSsByQu-ALFdDwMYoZum8C3VkeqI15vwZzbVwEltVwEyzPJ_gulzLXwtDUA7z5LCYeu8JbiSVeEQEqK0F52371EGoevnH3eZKtZLJg2pn7ybXr2CcfoHqDy9WtUKYPK-QjA0ryteJMB3e34VzRBU2bjGaEEs7Fo3msX-UkqmNVGGyfw-LRw63gMK-wLlewDKUNnTTfxysNUHaEc3yFujFpawRvWGFWjCjYujviI_HW6zDKEiqxeOwYPG6A" 
            />
          </div>
          <div className="relative z-10 px-8 lg:px-16 max-w-[1280px] mx-auto w-full">
            <div className="max-w-3xl">
              <span className="text-white/70 text-[12px] font-semibold mb-4 block uppercase tracking-widest">Web Development Services</span>
              <h1 className="font-h1 text-white mb-8">Next-Generation Architecture for Digital Authority.</h1>
              <p className="text-[18px] text-white/80 mb-12 leading-relaxed">
                We engineer high-performance web applications that merge technical precision with elite user experience. From headless CMS to enterprise e-commerce, our solutions are built for scale and security.
              </p>
              <div className="flex gap-4">
                <button className="bg-white text-[#002B5C] px-8 py-4 text-[12px] font-semibold uppercase tracking-widest rounded-lg hover:bg-gray-100 transition-all">Start Project</button>
                <button className="border border-white/30 text-white px-8 py-4 text-[12px] font-semibold uppercase tracking-widest rounded-lg hover:bg-white/10 transition-all">Technical Stack</button>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Bento Grid */}
        <section className="py-24 px-8 lg:px-16 max-w-[1280px] mx-auto">
          <div className="mb-12 text-center">
            <h2 className="font-h2 text-[#002B5C]">Core Capabilities</h2>
            <div className="h-1 w-20 bg-[#002B5C] mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 bg-white border border-gray-200 p-10 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-[#002B5C] text-4xl mb-4">shopping_cart</span>
                <h3 className="font-h3 text-[#002B5C] mb-4">Enterprise E-Commerce</h3>
                <p className="text-[16px] text-[#5c5f60] max-w-lg leading-relaxed">
                  Custom-built transactional platforms designed for high-velocity sales. We integrate payment gateways and personalized customer journeys that convert at scale.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Shopify Plus", "BigCommerce", "Stripe API"].map((tag, idx) => (
                  <span key={idx} className="bg-[#f0eded] text-[#43474f] text-[10px] font-semibold px-3 py-1 rounded-full uppercase">{tag}</span>
                ))}
              </div>
            </div>
            <div className="md:col-span-4 bg-[#002B5C] text-white p-10 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-white/70 text-4xl mb-4">bolt</span>
                <h3 className="font-h3 text-white mb-4">High Performance</h3>
                <p className="text-white/70 text-[14px] leading-relaxed">Zero-latency architectures using Next.js and Vercel. We target sub-second load times to maximize SEO and retention.</p>
              </div>
              <div className="mt-8">
                <div className="h-1 w-full bg-white/10 relative">
                  <div className="absolute inset-y-0 left-0 bg-[#d6e3ff] w-4/5"></div>
                </div>
                <span className="text-[10px] font-semibold mt-2 block uppercase tracking-widest opacity-70">Lighthouse Score: 98/100</span>
              </div>
            </div>
          </div>
        </section>

        {/* Toolkit Gallery */}
        <section className="bg-[#f0eded] py-24">
          <div className="px-8 lg:px-16 max-w-[1280px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
              <div className="max-w-xl">
                <span className="text-[12px] font-semibold text-[#002B5C] mb-2 block uppercase tracking-widest">Our Toolkit</span>
                <h2 className="font-h2 text-[#002B5C]">Engineered with Industry Leaders.</h2>
              </div>
              <p className="text-[#5c5f60] max-w-xs text-[14px]">We select tools based on performance, scalability, and long-term maintainability.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
              {[
                { name: "Next.js", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAumOsuUP3egJd40NHGu-LLi8HNcQ4jzQiN8v0gvRVuqsCm98lf06akGIrCYBcvIpXs8U_CTXKDiAHIz6YOfULpQ3-Wrz24xwARi58KcjsEK8d8IrZzbUO_HcbZqttARNHHZqLYgnrZ_mNxKuKR9WEDnEvoMknrJFETZDS4JKRWIN8Ty6N24VOJ25I3utdbHjmqOFd5B8E5QzM_1DkDHYzcZfkH-A5fCzyxaoLQmwkc-eDgUJnxbZJ41oV_D8RQno3txZjdL1o15og" },
                { name: "Tailwind CSS", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmNJtO4X0uil_FIF2kf8-x3OGnH4ecyx4w4a89saZPFXamKLjcdsyxbD1JASAZ-DhlCgXtel0N8t2rjCMmu_80TMseEUHZfqF_9TAu8Cm4CN4rPl4yzN9JvDEAGw7iVgpXkwe-JSq2RKOcG3CL1AfxbbyJbP6f_I0_GtpOtPspQEwuhuics7HjDfGvzfw4H4cG59wI8DiZqNTXLUXldoil0Hk1pC9_mgHWZcbfpdGdzkyg6D7-4qCACoEjXYDC8KvGr-PBW6be9xk" },
                { name: "TypeScript", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLoM_oFfX5rz_zsu5EK8rLO6hxl7cizCxVXmQyrlNm0ebcZuHP7TZNrf6XkefmeEiAMtV0VvxgWwB3fd2c_k5xO_jMxlaB5_qgGh42fJleTUSycKa0uaJwo8i28mQC1ovVbqmM_3UptcoFKlS7TlPyi21GkLjwts4lsI_byAL2-TleWuT_3FBOJZzWJ77COhjJ7U6wGGQyLxjSYiNTDC9J1CDvF9XdeHl7TKbea4wk8IrY6u6Fth5-0iHthLlDaOdLemOkqNbkcbE" },
                { name: "GraphQL", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAePlUSS1FwdIGc7Sv7KpHn1v99I75QmgR9UwmCQR34B6Nj63kYcI6I25xKPknK0fFMmgtNIexfANrfMypwvRH0cwugspgPHJzDu8wHfQ3X66lZLGqWIiya1va6PGFD-q5QUIDgApZz6sbOFftf7QGueJrCq6_2E2UTOL7d3P4MoBJ0Qrc_mlqC9hILm1L_uvmMpXPA5uuvpAlcS77EvCDt6xNGSg9JFCmtLvi14HFLf6L5i5fNBPNsGn7hrHUITg1jSrmZrBFrkQU" },
                { name: "Contentful", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgCMWPn1HuzN2nUBDEF1xC5Tqpl3SjqahEzSVjYtv5YQVZjHzZNgOFk5S8ZAkighPqkU5ZqWRpZCSsnEYH1GefhwOllgpf9vTjAyy9YNsem1DCNL9KaM3qxQxMT6GRfmPDSkr5jSafCR7XiQZuvLA-v8t7hso-lGvcZoJCI1Aj2InMh7RkZxuwKPkUjz2zw-Kp3J5Og1q3Szp0OiP6Xctd-DSiTF193QsAAD5kng29GpH5O6CQccsRFF8B22vEOT02rdSZaimvhYM" },
                { name: "React", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxsdEpwB9z2U8kU-g3TQzRE1ehPJ0a6pAbvG6SxjZCF0vIkcba98I7kYPs21ZslovN2hzhjxuEhPAesol9JPGpUSwPDzM3M7H9J_qewrYbFehjf9092zcQZj-HSfZVbNHGZraQBp2y-3mIEIZ53klqn6tdsSAo1wStQSN_sHft9nM2qSKAI8NP5srhvhz-jIe7n393VV6qn18Fqe80lRU8p_MoLEdnkVAVn6owPG0jv_8wKzlWAFV5Xp57HF43qyNczydnmmamPWk" }
              ].map((tech, idx) => (
                <div key={idx} className="bg-white p-8 border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-all">
                  <img alt={tech.name} className="w-12 h-12 mb-4 grayscale hover:grayscale-0 transition-all" src={tech.img} />
                  <span className="text-[12px] font-bold text-[#002B5C] uppercase tracking-wider">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="py-24 px-8 lg:px-16 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-h2 text-[#002B5C] mb-8">Built for Search & Speed.</h2>
              <ul className="space-y-8">
                {[
                  { title: "SEO-Optimized", desc: "Server-side rendering (SSR) ensures bots can crawl every page instantly for maximum ranking." },
                  { title: "Responsive Fluidity", desc: "Mathematical grid systems ensure your brand looks premium on everything from desktops to mobile." },
                  { title: "Edge Deployment", desc: "Leveraging global edge networks to serve content from locations closest to your users." }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <span className="material-symbols-outlined text-[#002B5C]" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                    <div>
                      <h4 className="font-bold text-[#002B5C] text-[18px] mb-1">{item.title}</h4>
                      <p className="text-[14px] text-[#5c5f60] leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#002B5C]/5 rounded-xl blur-xl group-hover:bg-[#002B5C]/10 transition-all"></div>
              <img 
                className="relative rounded border border-gray-200 shadow-xl" 
                alt="Code display" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKLPXdenpjVdXVk1m6xgt6Crow2x7t0lF9ZEeNX07ssnFzWOo8ARy5ns02NCDg_2Z2CulYyQuZkYDlWfSAXsLEOtf0uhH4zTgR0nYHYOLgSfao7m5xBAKuLfe1YtNDaOfiMg5IKM6QBC5qRd7I9BdUyCzHhibEd6LlPbq9MSyC80CYdtlB7NGUWeeJUIJP68e_AoAwxQmmnQBC3En2V9UZ7KPJvR0HMIIfwoADry7SJXNymjmBTStLYBv_PJ_aInsEm3o0KkjmiCk" 
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#002B5C] py-24 text-center">
          <div className="px-8 lg:px-16 max-w-[1280px] mx-auto">
            <h2 className="font-h2 text-white mb-8">Ready to Upgrade Your Digital Infrastructure?</h2>
            <p className="text-white/70 text-[18px] mb-12 max-w-2xl mx-auto">Contact our technical consultants to discuss your web application requirements and receive a proposal.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-white text-[#002B5C] font-bold px-10 py-5 uppercase tracking-widest rounded hover:scale-105 transition-all">Book a Technical Audit</button>
              <button className="border border-white/30 text-white font-bold px-10 py-5 uppercase tracking-widest rounded hover:bg-white/10 transition-all">View Case Studies</button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
