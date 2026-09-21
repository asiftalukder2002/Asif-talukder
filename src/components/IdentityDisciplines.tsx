import React from 'react';
import { DISCIPLINES } from '../data/portfolioData';

export const IdentityDisciplines: React.FC = () => {
  return (
    <section
      id="identity"
      className="w-full py-20 px-4 sm:px-6 lg:px-12 bg-[#070e1c] border-y border-[#151b2a]"
    >
      <div className="max-w-7xl mx-auto flex flex-col">
        <div className="mb-12">
          <span className="font-code text-xs text-[#5de6ff] uppercase tracking-widest font-semibold">
            Section 7 • Identity Decomposition
          </span>
          <h2 className="font-headline text-2xl sm:text-4xl text-[#dce2f6] font-bold mt-1">
            Multi-Faceted Professional Pillars
          </h2>
          <p className="font-body text-sm sm:text-base text-[#c3c6d7] mt-2 max-w-2xl">
            Detailed modular cards outlining scope, applied toolchains, and practical impact across
            all 12 core professional facets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DISCIPLINES.map((disc) => (
            <div
              key={disc.id}
              id={`discipline-card-${disc.id}`}
              className="p-6 rounded-2xl bg-[#19202e] border border-[#232a39] shadow-lg flex flex-col justify-between hover:bg-[#232a39] hover:border-[#5de6ff]/40 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="material-symbols-outlined text-[#5de6ff] text-3xl group-hover:scale-110 transition-transform">
                    {disc.icon}
                  </span>
                  <span className="font-code text-[11px] font-bold px-2.5 py-1 bg-[#2e3544] text-[#5de6ff] rounded-md border border-[#5de6ff]/20">
                    {disc.code}
                  </span>
                </div>
                <h3 className="font-headline text-lg text-[#dce2f6] font-bold mb-2">
                  {disc.title}
                </h3>
                <p className="font-body text-sm text-[#c3c6d7] mb-5 leading-relaxed">
                  {disc.description}
                </p>
              </div>

              <ul className="space-y-2 font-code text-xs text-[#c3c6d7] pt-4 border-t border-[#2e3544]">
                {disc.capabilities.map((cap, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#5de6ff] text-sm shrink-0">
                      check_circle
                    </span>
                    <span className="truncate">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
