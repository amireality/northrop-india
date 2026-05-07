import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const services = [
  {
    title: "Business Transformation",
    desc: "Strategic realignment of organizational structures.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFTFvRaucRTZyr_aSXRvNVZoYyejLhnFwuLR1keXKb8FT24M7_j9THe4ScCLqho1jLiguhBOYUOXQGjXtaI21fiy5R31ZnRjJaWG5V0VeZ4lpUkf88zIKUzfpbta5HS4hVx8oikJ7AIrRsMmWXhBCNG5V94Ov7vTFLW5n9uSyrQ_a0ktatXGwoTTwEMvyz_-D7Rtq1Jcb0UqRgTCLeH6THh8Sr3y7bpfmR52Z20SDtO0jg5xh0Bl7liRdj1kWdqpJSM_1iVE2Hup0",
    alt: "Modern architectural glass facade",
    link: "/digital/business-transformation"
  },
  {
    title: "ERP Excellence",
    desc: "Precision-engineered implementation and optimization.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0ec30g6kQJ3KEinHWaS87DM-r6CsHRI-9FbH_ioerLRPaA4L0Hfc1ucvlETMW5HOb_OrulX8C9ln_3AHIA4ZYC-waaLcsM-xg2F8oWfei3eJ6-LL_Wd0M1u4MakiYX1PZ3zQkEO_QJi0zgx8vLohqMU-7sDQXLam4wfhhVeJTURnai3pOu9-gzS6cjvg9LzduC5ijdWY1uUTY6bgePO3FQNa-jjQSh0aGczJH65KDOTmUenL5zUG2z5mrHyHMZfT6vZgANXl971E",
    alt: "Data streams visualization",
    link: "/digital/erp-excellence"
  },
  {
    title: "Cybersecurity Resilience",
    desc: "Hardened defensive frameworks for critical infrastructure.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhAnvpMMhrpghzV1ZGi1jKYiS2sYaUjleZ8mdQUEGv_24Yi721wZmW6FPj8TAObomULUkDL_jSEIugcPQ7ZAz1Nfobr98ihQX8cr2txZZtbnvlTeHc0EuWQMpCV2pa_xKLF9TsYNdODqhiOlYoOC01y-Tg_PJjGuGoBRyK7Rc72CKVod4vFnRG8LQ2RWUgtQLWHY5wmoHH_hKKIxVW1Xi8Rf8PVPAhsQa5ZNDDNQ1YMTCebP6gXIfOzaEgJTo-jmH3KJO4gCc9eO8",
    alt: "Server rack hardware",
    link: "/digital/cybersecurity-resilience"
  },
  {
    title: "Strategic Insights",
    desc: "Data-driven analysis for high-stakes decision making.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7UZFjqOEjfY92_7pHan-K_DfLBaafe7Vo052U-2BMCqmQriBZcVNkONd1c2RuM8AWABNVifPOYAkN5yYkQ7BpjhcrqjZZfzGR4WDKJmYQesQSdDel1TxyY2ryDCBLK5LmEiEv-xHjFBFtjvY1F7GAhlof4WXTYjawsaRp05QgG3uHqT_okJS0l9rGWpxVB3Ak_VJ-sPeJ1w753jaiRfHizEpfJ6LKRQbhSBhCDcUooVkJ0urj4XGhpMIIBE72gYqB0bkIl36XHq4",
    alt: "Financial charts projection",
    link: "/digital/strategic-insights"
  },
  {
    title: "App Development",
    desc: "Custom mobile solutions for scalability and performance.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEJ9vSwfvZBj_OOKChzybK6-SFeVOZuzZcpCF7gUa_BS0WCoeDWB2XVvta35V5lJGu7NyC6W6XL9eayzI94U3xHDExRTabAotqlfAsCLgxB_rZKzcqiglhZzuix5bDJfZf1tnGF-k4PnVULsrYQdDCZsFk6CIqG28BpvC72y9I9pnoBhgOjZDQblJqiUQj8jlnFc1zRobx-jhNnJ-o9zCbVpUk32uVH-IgF-txuQXwzOh90aFBwiCUMmqMr1vLHQcVaLtrh7xUUVc",
    alt: "Sleek smartphone display",
    link: "/digital/app-development"
  },
  {
    title: "Software Engineering",
    desc: "Rigorous backend systems for technical leadership.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqj1vLSKC_IT7q13B4AnCjk17ESpAmCJ1FjAB49X9w9Njc8Rh5HI3TkIwPkM01Mh2zduKpXYJO1W9xVjKNcuBSR2ppo_JcUpzPQaKSxHAN51EaRnv8LLg1XEv8Nf1lgYg6cYPrpAzOP5QsQ6T6twBGBzcOxGGRoL-b_J-HyBD5IplfWpBdURNtuPddtqkWFelRU3PdikgPqGuJhtRxECjJMflrwdO_wqCfMdneBEQJyp3ss93FGHhOdIBn0o1Ui150FKgJgm4k6s0",
    alt: "Lines of code on monitor",
    link: "/digital/software-engineering"
  },
  {
    title: "Web Development",
    desc: "High-performance digital platforms with intuitive UI.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBakPKhVxZSvA24ZUo5VrmfUynNUF6rRVlit5O18l9qsLp8kgvz_NqTFLgRNTBF4ZHffJbeNQnr0A703ZP4Ey-wq9M17TdZSOHEjYP6so1gvwDEqNY17EcUcpT_RRa7RvtknjsIZ85q0CUGf6oEeOS7IkX4H32TuNlAk0yV1y-L70lGKD29yizxmTq9GfKd4JCdUcwLy84NJFTdkC00LjZo7mN4-RcyNxTzqjEbdYkceSul9ezCWEjx26TeIJXbrNqutjqQQ5CsR44",
    alt: "Macro shot of glass interface",
    link: "/digital/web-development"
  },
  {
    title: "Digital Marketing",
    desc: "Performance-oriented growth strategies fueled by technical SEO.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiZ5BwkSIONL46c663vVfCzFeJ9Qcc2izicl-pjEZYn4LgIA4vbGLO6KONo4bF_J1nhk_BgioYS5458vVxDI5iev4LIx742PPWDOG-uvxH2t0QkU7qjDH-ZokTDdGyWKLiKAwyR-CiVP7Badbg_60fJDPSgXled4XU_1onxXsRy3alL2-77i09RUAYytNMkJJ6PQl8A21R89TZsfkrismXaQqTbMg9Rshr1-Juar2yQPVx1LJ2Lb-9sk_Ct1v-cnW0vB_kNISW3B4",
    alt: "Network graph visualization",
    link: "/digital/digital-marketing"
  }
]

const insights = [
  {
    category: "Foundation",
    title: "Neural Architecture & Hardware Synergy",
    desc: "Why high-performance AI initiatives fail without the support of precision-engineered physical and cloud infrastructure.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpq3c1AvbkSIVjD6fv0kzopsUtjXoo4SF5MYboJot7lI06k0BaS-8MUmLZkl_3939eoK5WpKmRWEzjeSrNAsH4uJ1XBV72LdRMdB5u4owl1J9epsg4nq_ABUSaGo5VQZWo4hRSysryQ-EdspvYflWKDmYflmV0yX_GgCwLH9ECgkLK6ZB1GS0Vpu640oGHt9XoEthYgloYwLgX1IOGzYRTz1CmChkwo8X2Wu_eH3GIdiEFedq12SXSftLedArdMQeyBF16Vqqo-_w",
    alt: "Neural network visualization"
  },
  {
    category: "Security",
    title: "Hardening the AI Supply Chain",
    desc: "Addressing the technical vulnerabilities in automated decision-making systems through rigorous defensive engineering.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2OcY0R-MKN5qpmv1X8NN50O0dcQRLvtXBJK0asFSdDA9MDyvDluwRBKxUPlgBeM9v7zkWi2qpCzIKcSQkRg8gX47ZDUHAGImZZbyqQa_L8A-LjJNbsyF5iu926Tt7VzeVsyM3Tp-yed9LWU51BSFXXDWp7ttp8o7veIUDyz_KyKt7Hi_BbvW49PjHwcHI8pWo0WdqI5APUyUZZ9Fwqtz1nB4mq4JxZovPJ0spAbFltdtBSwH951hPi54YhQHK1xTu1Y-dn1Mq_Rs",
    alt: "Advanced machinery"
  },
  {
    category: "Strategy",
    title: "Data Integrity at Global Scale",
    desc: "How strategic instrumentation and data engineering form the backbone of the next-generation corporate intelligence model.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMAW6lYOgl-RYEWykCQwh-Jm6gekct0nbiewdmeDzj0uZRxN-_yJQHMHzw0UskXKCdW1wo2VdwNOcgtc9CQ5JX6ZLWst3_SgYf_JByS_AfZkbwnLySiU48Gf3bbXHGYh_BZBqdx7aWFmgEC8Ehsu-NlnXaMB42own7AxRMOv0WjDXhNpDS_F_9AQzbCqljkuzgGwkUyhL-_j0pTPjGUoteSlUbb4rYablFv_q3K-oSZkc8QVj4tI9_en_aV-sYO_BXD25pwzBeD5w",
    alt: "Data center architecture"
  }
]

export default function Digital() {
  return (
    <>
      <Helmet>
        <title>Digital Excellence | Northrop Management Private Limited</title>
        <meta name="description" content="Bridging the critical gap between high-level corporate strategy and rigorous technical engineering." />
      </Helmet>

      <style dangerouslySetInnerHTML={{ __html: `
        .digital-section {
          --primary: #002B5C;
          --on-primary: #ffffff;
          --secondary: #5c5f60;
          --background: #fcf9f8;
          --on-surface: #002B5C;
          --surface-container-low: #f6f3f2;
          --gutter: 24px;
        }
        .glass-panel {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 43, 92, 0.1);
        }
        .hero-gradient {
          background: radial-gradient(circle at 50% 50%, rgba(0, 43, 92, 0.05) 0%, rgba(255, 255, 255, 0) 70%);
        }
        .card-glow:hover {
          border-color: rgba(0, 43, 92, 0.3);
          box-shadow: 0 10px 40px rgba(0, 43, 92, 0.08);
        }
        .text-navy { color: #002B5C; }
        .bg-navy { background-color: #002B5C; }
        .border-navy { border-color: #002B5C; }
        .font-h1, .font-h2, .font-h3 { font-family: 'Noto Serif', serif; }
      `}} />

      <main className="digital-section bg-[#fcf9f8] text-[#002B5C] font-sans overflow-x-hidden pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center justify-center">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img 
              className="w-full h-full object-cover opacity-10" 
              alt="A high-fidelity cinematic shot of a jet turbine engine" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUxxj0viGc27DfCDj66qKMpfelk7vRTS3S38amoELD02CEfWOO7qSvoO4Ek7ZaOwXeVW1MFZuwXMExKeT1bnhfa-YBRakU6DbJT-bwKgQ8w_wPbgUEUvYjANbCHcXYgcN06nDjffUUKt2aAoHiROLoUxVzcJNyBfIFEIKH3QGW0NkPcwp9vuRKkPUPgz5NLWP8IzfqB2l_uQGu8jcbS6NBvtzMQKT1AB_6yTA0yUAsWlY2dlpMaq4Xxo2VFP_eRM7HQ_GHUHbErzM" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
            <div className="absolute inset-0 hero-gradient"></div>
          </div>
          <div className="relative z-10 max-w-[1280px] mx-auto px-8 lg:px-16 text-center">
            <div className="inline-block mb-6 px-4 py-1 bg-[#002B5C]/5 text-[#002B5C] text-[12px] font-semibold uppercase tracking-[0.3em] rounded-full">Precision Engineering</div>
            <h1 className="font-h1 text-4xl lg:text-6xl text-[#002B5C] mb-8 max-w-4xl mx-auto leading-tight font-bold">The Architecture of Global Excellence</h1>
            <p className="text-[18px] text-[#5c5f60] max-w-2xl mx-auto mb-12 leading-relaxed">Bridging the critical gap between high-level corporate strategy and rigorous technical engineering.</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="px-10 py-5 bg-[#002B5C] text-white text-[12px] font-semibold uppercase tracking-widest hover:shadow-lg transition-all active:scale-95">Executive Briefing</button>
              <button className="px-10 py-5 border border-[#002B5C]/20 bg-white/50 backdrop-blur text-[12px] font-semibold text-[#002B5C] uppercase tracking-widest hover:border-[#002B5C] transition-all active:scale-95">Technical Specs</button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 max-w-[1280px] mx-auto px-8 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-h2 text-3xl lg:text-4xl text-[#002B5C] mb-4 font-semibold">Strategic Engineering Ecosystem</h2>
              <p className="text-[#5c5f60] text-[16px]">Multi-disciplinary technical solutions designed for global scale and mission-critical performance.</p>
            </div>
            <div className="text-[#002B5C] text-[12px] font-semibold tracking-widest flex items-center gap-2">
              SCROLL TO EXPLORE <span className="material-symbols-outlined">arrow_downward</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc, idx) => (
              <Link key={idx} to={svc.link} className="group relative aspect-square bg-white border border-[#002B5C]/10 overflow-hidden card-glow transition-all duration-500 cursor-pointer block">
                <img 
                  className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-transform duration-700" 
                  alt={svc.alt} 
                  src={svc.img} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
                <div className="absolute bottom-0 p-8">
                  <h3 className="font-h3 text-xl mb-2 text-[#002B5C] font-semibold">{svc.title}</h3>
                  <p className="text-[#5c5f60] text-sm">{svc.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Insights Section */}
        <section className="py-24 bg-[#f6f3f2]">
          <div className="max-w-[1280px] mx-auto px-8 lg:px-16">
            <div className="text-center mb-24">
              <h2 className="font-h1 text-4xl lg:text-5xl text-[#002B5C] mb-6 font-bold">Intelligence in the AI Era</h2>
              <p className="text-[18px] text-[#5c5f60] max-w-3xl mx-auto">Exploring the critical intersection of advanced neural networks and the foundational engineering required to sustain them.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {insights.map((insight, idx) => (
                <div key={idx} className="bg-white p-10 flex flex-col justify-between h-[400px] border border-[#002B5C]/5 shadow-sm hover:border-[#002B5C]/30 hover:shadow-md transition-all group relative overflow-hidden">
                  <img alt={insight.alt} className="absolute inset-0 w-full h-full object-cover opacity-5 group-hover:opacity-10 transition-opacity z-0" src={insight.img} />
                  <div className="relative z-10">
                    <span className="text-[12px] font-semibold text-[#002B5C] tracking-widest uppercase mb-6 block opacity-60">{insight.category}</span>
                    <h4 className="font-h3 text-2xl text-[#002B5C] mb-4 font-semibold">{insight.title}</h4>
                    <p className="text-[#5c5f60] line-clamp-3">{insight.desc}</p>
                  </div>
                  <div className="flex items-center gap-4 text-[#002B5C] text-[12px] font-semibold tracking-widest group-hover:gap-6 transition-all cursor-pointer relative z-10">
                    READ THE BRIEF <span className="material-symbols-outlined">arrow_right_alt</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 text-center relative overflow-hidden bg-white">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#002B5C]/5 rounded-full blur-[120px]"></div>
          <div className="max-w-[1280px] mx-auto px-8 lg:px-16 relative z-10">
            <h2 className="font-h2 text-3xl lg:text-4xl text-[#002B5C] mb-12 font-semibold">Engineered for what's next.</h2>
            <button className="px-12 py-6 bg-[#002B5C] text-white text-[12px] font-semibold uppercase tracking-widest hover:shadow-xl transition-all active:scale-95 text-lg">Initiate Consultation</button>
          </div>
        </section>
      </main>
    </>
  )
}
