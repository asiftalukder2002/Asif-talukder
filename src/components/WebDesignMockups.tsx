import React from 'react';
import { LightboxData } from '../types';

interface WebDesignMockupsProps {
  onInspect: (data: LightboxData) => void;
}

export const WebDesignMockups: React.FC<WebDesignMockupsProps> = ({ onInspect }) => {
  const mockups = [
    {
      id: 'mockup-1',
      url: 'asif-portfolio.internal/live-preview',
      category: 'UI/UX Concept Mockup',
      title: 'Engineering & AI Hybrid Portfolio Concept',
      description:
        'Custom designed typography scales and high-performance dark mode components built for engineering portfolios.',
      detailedNotes:
        'A comprehensive design system integrating cybernetic deep navy palettes (#0c1321), electric blue structural vectors, and Space Grotesk display typography calibrated for high visual contrast.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDqbnDiF9m6z-x8LHXk4G4HmVCKHgzt68fhoZRAcDKrYrCunQy6SuOhKFMmxN8ErfGq9pDS9HjPP_42ptAicCqG6F24AoZSrvr-4YuZJYdNsI41o9LbyE_xk9Gg08OsIgiaHDMdUrBa-ykZvJaPzS3eYKZ3ApPTK6sUJ7EjpQgEIIerc7jbNcN3aRhih27xvo-bkMZ3m8PoaoYsVeTiRPpLvHTzzSL59MO9qOWDAc63dWOpSIdeGWPe',
      tag: 'WEB_DESIGN_MOCKUP_PORTFOLIO',
    },
    {
      id: 'mockup-2',
      url: 'nexus-structures.concept/portal',
      category: 'Engineering SaaS Mockup',
      title: 'Nexus Structural Engineering Portal Concept',
      description:
        'Comprehensive layout mockup featuring CAD sheet upload zones, material schedule viewers, and stress test cards.',
      detailedNotes:
        'Engineering collaboration portal concept enabling civil project teams to inspect structural CAD drawings, verify reinforcement estimations, and coordinate site documentation in real time.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDY0wXGj6h6hA2SLW_wgKQy2BDG-S23HEN3Ydx3WinRZEf_fPy8BtQAXXffCkzzjVmQJCUyNOBJxxw1urUbvb_g8USMR7xgD4TA0san4N2TLuncywrWdRTL80iIxfh2zyTAGQonEPExcNfvYrLxKK1x5TlSV_i-Zd7je_cwlkb7RdNhyj52pBkj6mh9qtW7D2dmOJNbbwGitMZDGCYRmkrf497j3XccaNQanRaaC3vuck74eBGDUxQ5',
      tag: 'WEB_DESIGN_MOCKUP_ENGINEERING',
    },
  ];

  return (
    <section id="design" className="w-full py-20 px-4 sm:px-6 lg:px-12 bg-[#0c1321]">
      <div className="max-w-7xl mx-auto flex flex-col">
        <div className="mb-12">
          <span className="font-code text-xs text-[#5de6ff] uppercase tracking-widest font-semibold">
            Interface & Brand Engineering
          </span>
          <h2 className="font-headline text-2xl sm:text-4xl text-[#dce2f6] font-bold mt-1">
            Web & Graphic Frameworks
          </h2>
          <p className="font-body text-sm sm:text-base text-[#c3c6d7] mt-2 max-w-2xl">
            Realistic browser viewports and digital canvas presentations for modern responsive products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {mockups.map((mockup) => (
            <div
              key={mockup.id}
              id={`browser-mockup-${mockup.id}`}
              className="rounded-2xl bg-[#19202e] border border-[#232a39] shadow-2xl overflow-hidden flex flex-col hover:border-[#5de6ff]/40 transition-all group"
            >
              {/* Browser Chrome Bar */}
              <div className="px-4 py-3 bg-[#151b2a] border-b border-[#232a39] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ffb4ab]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#00cbe6]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#5de6ff]"></span>
                </div>

                <div className="px-3 py-1 rounded-md bg-[#070e1c] text-[#8d90a0] font-code text-xs w-60 sm:w-72 text-center truncate border border-[#232a39] flex items-center justify-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px] text-[#5de6ff]">
                    lock
                  </span>
                  <span>{mockup.url}</span>
                </div>

                <span className="material-symbols-outlined text-[#8d90a0] text-sm">
                  refresh
                </span>
              </div>

              {/* Viewport content */}
              <div className="p-6 bg-[#070e1c] flex flex-col gap-4">
                <div
                  onClick={() =>
                    onInspect({
                      isOpen: true,
                      title: mockup.title,
                      description: mockup.detailedNotes,
                      tag: mockup.tag,
                      imageUrl: mockup.imageUrl,
                    })
                  }
                  className="h-48 sm:h-60 w-full rounded-xl overflow-hidden relative cursor-pointer border border-[#232a39] group/img"
                >
                  <img
                    src={mockup.imageUrl}
                    alt={mockup.title}
                    className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070e1c]/80 via-transparent to-transparent flex items-end p-4">
                    <span className="font-code text-xs text-[#5de6ff] flex items-center gap-1 bg-[#070e1c]/90 px-2.5 py-1 rounded-md border border-[#5de6ff]/30">
                      <span>Click to Inspect Framework</span>
                      <span className="material-symbols-outlined text-sm">open_in_full</span>
                    </span>
                  </div>
                </div>

                <div>
                  <span className="font-code text-xs text-[#5de6ff] font-semibold">
                    {mockup.category}
                  </span>
                  <h4 className="font-headline text-lg sm:text-xl text-[#dce2f6] font-bold mt-1">
                    {mockup.title}
                  </h4>
                  <p className="font-body text-xs sm:text-sm text-[#c3c6d7] mt-1.5 leading-relaxed">
                    {mockup.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
