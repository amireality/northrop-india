import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const PostClosingCompletionAccounts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      number: "01",
      title: "Completion accounts preparation/review",
      description:
        "Precision auditing of closing balance sheets to verify working capital and net debt adjustments against agreed SPA mechanisms.",
    },
    {
      number: "02",
      title: "Notice of Disagreement",
      description:
        "Drafting and responding to formal adjustment notices, identifying technical accounting discrepancies and valuation errors.",
    },
    {
      number: "03",
      title: "Expert determination",
      description:
        "Serving as independent expert or providing advisory support during binding arbitration phases to resolve complex financial disputes.",
    },
  ];

  const stakeholders = [
    {
      icon: "corporate_fare",
      title: "Buyers",
      description:
        "Acquiring entities requiring verification that the asset's closing financial state reflects the agreed-upon purchase price.",
    },
    {
      icon: "payments",
      title: "Sellers",
      description:
        "Exiting parties seeking to protect their proceeds against aggressive buyer-led adjustments and accounting reclassifications.",
    },
    {
      icon: "account_balance",
      title: "PE Funds",
      description:
        "Private Equity funds managing portfolio exits where precise closing statements are critical for final IRR calculations and distribution.",
    },
  ];

  const publications = [
    {
      type: "White Paper",
      title:
        "Completion Accounts in Indian M&A: Common Disputes and Prevention",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAJXwg9-4hvT7JNOD6O3eDbX8rcO6ZvR-Wa4b1D8HgRNTKViFLUAGjVA00HLRD2yYIZxd34hz7FHdLDtgoVm03pVI5337QX5kYs6iAsJcZrLleUKKQgz7CTgnJkpU9W8b0me6alNXQirrIpHzluNNfa5ZBAbaQ1Xp8fLPTvr_FgqsrhnBJS35HJG0zA7yhn70CdnU7K1DAbxNiQorKxUUaA63WvWkDAQnk97dkrKZrzmjhNwVhPeaaO5w1s2Y3HHPY4YU9QphwCTu4",
    },
    {
      type: "Market Update",
      title: "The Shift Toward 'Locked Box' in Mid-Market Exits",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAb8CQQ4AcHN87TVSRXFXoNTNGCi1nnrunq0CWU92FYESIUoZUUDajmzQtdwAHPkR76nXNMRAh6ZbgC-dVDmTed7UXqtjnyeXGhyAuW_c0c7zyyVBfGAEarS7vVdbZpa12q4niC4PoaqGBhZJrZscotQXHgCU6uRmflcQZtTZv9ec8MkM3DQRVVVuZ-kZ_DAGYMEjokld-2ktMnfZvecravzCxfb5PE-C6DqfzCy-i_g3YLYleRr84GnzXIdNI4NULhnF5EwY6a1D4",
    },
    {
      type: "Technical Analysis",
      title:
        "Expert Determination vs. Arbitration: Choosing the Right Path",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC-S_kO65l44IGGynZAZ9zstkMsLPEzWbOtqbnOK0xO18RZBAGqXqtWguuIcUY1MYnEntXC0JZiEozNz5gIaY48sjrs44k84i1s_QnQUk5Q89812px4okTp-QWUYJuVJliyZF-p_owPxE8ZIANvvTBBRXLZzVldA_ZqFWWB_r0mCx2IbsVeTex01N234gvwk7QwClH7ul9DRGcZowEZJT3JqHRd5rdG0bSnu3jG7XRnjSHxhwL9OArQ2F5UWZCg_eKrsOBfRR_PN9I",
    },
    {
      type: "Firm Insight",
      title:
        "Managing Post-Closing Indemnity Claims in High-Value Deals",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB_vklVAy7K0S6jU-6JO3IJ5_0LhAXOHPuIS5caAbnWM5iqEnERzZcMw7YdMqRvXcr8yIFmwnAJyo4SRHB8Nr-e49LZK7sUTc25AFn52UndB7xdRMnOrCPXPe3xSKeM-J2IXgBIUPuxR34CZtJpmLTbjOnz80mruOR6eL0-6MKJP19vyLj4IQnZzUP-XTrVwxFGHK43ghKnSTbqv2eso88Tm3Aq1Lf3AFHoI1oWHhvDUR2M2G1RhYWQmWG5hamcBITcK6rScCazn90",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Post-Closing & Completion Accounts | Northrop Management
        </title>

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Newsreader:opsz,wght@6..72,400;700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />

        <style>
          {`
            .material-symbols-outlined {
              font-variation-settings:
                'FILL' 0,
                'wght' 400,
                'GRAD' 0,
                'opsz' 24;
            }

            body {
              background-color: #f9f9f9;
              font-family: 'Inter', sans-serif;
            }
          `}
        </style>
      </Helmet>

      <div className="bg-[#f9f9f9] text-[#1a1c1c]">
        <main>
          {/* Hero */}
          <section className="relative h-[819px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 "></div>

            <img
              src="/post-closing-completion-accounts.jpeg"
              alt="Hero"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="relative z-20 text-center max-w-4xl px-8">
              <h1 className="font-['Newsreader'] text-[48px] leading-[1.1] text-white mb-6">
                Post-Closing & Completion Accounts
              </h1>

              <p className="text-[18px] leading-[1.6] text-white/90 max-w-2xl mx-auto">
                Ensuring mathematical integrity and fair value distribution in
                the final phase of institutional transitions.
              </p>
            </div>
          </section>

          {/* What We Do */}
          <section className="px-8 py-[120px] max-w-[1280px] mx-auto">
            <div className="flex flex-col md:flex-row gap-8 border-b border-[#c4c7c7] pb-[120px]">
              <div className="w-full md:w-1/3">
                <span className="text-[11px] uppercase tracking-[0.1em] text-[#444748]">
                  Service Capabilities
                </span>

                <h2 className="font-['Newsreader'] text-[32px] mt-2">
                  What We Do
                </h2>
              </div>

              <div className="w-full md:w-2/3 space-y-6">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="border-b border-[#c4c7c7] pb-6 last:border-0"
                  >
                    <div className="flex items-start gap-4">
                      <span className="font-['Newsreader'] text-[24px] text-[#747878]">
                        {service.number}
                      </span>

                      <div>
                        <h3 className="font-['Newsreader'] text-[24px] mb-2">
                          {service.title}
                        </h3>

                        <p className="text-[15px] leading-[1.6] text-[#444748]">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Strategic Partners */}
          <section className="px-8 py-[120px] bg-[#eeeeee]">
            <div className="max-w-[1280px] mx-auto">
              <div className="mb-16">
                <span className="text-[11px] uppercase tracking-[0.1em] text-[#444748]">
                  Stakeholder Focus
                </span>

                <h2 className="font-['Newsreader'] text-[32px] mt-2">
                  Strategic Partners
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stakeholders.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 border border-[#c4c7c7]"
                  >
                    <span
                      className="material-symbols-outlined text-black mb-4 block"
                      style={{ fontSize: "40px" }}
                    >
                      {item.icon}
                    </span>

                    <h3 className="font-['Newsreader'] text-[24px] mb-2">
                      {item.title}
                    </h3>

                    <p className="text-[15px] leading-[1.6] text-[#444748]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Case Study */}
          <section className="px-8 py-[120px] max-w-[1280px] mx-auto">
            <div className="bg-[#f3f3f4] grid grid-cols-1 md:grid-cols-12 overflow-hidden border border-[#c4c7c7]">
              <div className="md:col-span-6 p-6 flex flex-col justify-center">
                <span className="text-[11px] uppercase tracking-[0.1em] text-[#646464]">
                  Case Study
                </span>

                <h2 className="font-['Newsreader'] text-[32px] mt-2 mb-6">
                  Rs.45 Cr Completion Accounts Recovery
                </h2>

                <div className="space-y-6">
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.1em] text-[#444748]">
                      The Intervention
                    </span>

                    <p className="text-[15px] leading-[1.6] mt-2">
                      Northrop Management identified a systematic understatement
                      of working capital in a large-scale industrial acquisition.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#c4c7c7]">
                    <span className="text-[11px] uppercase tracking-[0.1em] text-[#444748]">
                      The Outcome
                    </span>

                    <p className="text-[18px] font-semibold leading-[1.6] mt-2">
                      Successful recovery of Rs.45 Crores for the seller through
                      expert-led negotiations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-6 min-h-[400px]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7rqQQAR6zFJhaAEV7oC60ykJWtJOZRhFvA0RGngMsaF9cmTsHWQdAUTfEyLo-8xFq_5ya0l31MmKSUE6uwqXkLdwBYBAXU4yozFGQsGTKit2Lx3RvXWlxCeaEwMa3vnCi8z19xb1CKVPz0UwXXLRPJg_k2bSoG3uJhDzTkHIj1LfRLQeEIyPzXXJnvo3oACNKICeqCyvgp_Ovoe7XI10-5vi1qIYuVTLx3-uZ8OkYiVkVCTlCHVq9b-wqCA9-WcH3rTomr0-kHuY"
                  alt="Case Study"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>
          </section>

          {/* Latest Intelligence */}
          <section className="px-8 py-[120px] bg-white border-t border-[#c4c7c7]">
            <div className="max-w-[1280px] mx-auto">
              <div className="flex justify-between items-end mb-16">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.1em] text-[#444748]">
                    Publications
                  </span>

                  <h2 className="font-['Newsreader'] text-[32px] mt-2">
                    Latest Intelligence
                  </h2>
                </div>

                <a
                  href="#"
                  className="text-[11px] uppercase tracking-[0.1em] border-b border-black pb-1"
                >
                  View All Reports
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {publications.map((item, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="aspect-[4/5] overflow-hidden mb-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <span className="text-[11px] uppercase tracking-[0.1em] text-[#444748]">
                      {item.type}
                    </span>

                    <h3 className="font-['Newsreader'] text-[24px] mt-2 leading-tight">
                      {item.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default PostClosingCompletionAccounts;