import React, { useState } from 'react';
import { CORE_PILLARS, PERSONAL_INFO } from '../data/portfolioData';

export const CoreNexus: React.FC = () => {
  const [selectedPillarId, setSelectedPillarId] = useState<string | null>(null);

  const selectedPillar = CORE_PILLARS.find((p) => p.id === selectedPillarId) || null;

  return (
    <section
      id="nexus"
      className="w-full py-20 px-4 sm:px-6 lg:px-12 bg-[#070e1c] relative border-y border-[#151b2a]"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center max-w-3xl mb-12">
          <span className="font-code text-xs text-[#5de6ff] uppercase tracking-widest font-semibold">
            Section 22 • Convergence Matrix
          </span>
          <h2 className="font-headline text-2xl sm:text-4xl text-[#dce2f6] font-bold mt-1">
            Multidisciplinary Core Nexus
          </h2>
          <p className="font-body text-sm sm:text-base text-[#c3c6d7] mt-2">
            An integrated interactive map connecting physical infrastructure engineering with algorithmic
            synthesis, digital media, and social impact.
          </p>
        </div>

        {/* Network Hub Diagram Container */}
        <div className="w-full max-w-5xl p-5 sm:p-10 rounded-2xl bg-[#151b2a]/70 backdrop-blur-xl shadow-2xl border border-[#232a39] relative">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {/* Top 5 Pillars */}
            {CORE_PILLARS.slice(0, 5).map((pillar) => {
              const isSelected = selectedPillarId === pillar.id;
              return (
                <div
                  key={pillar.id}
                  id={`pillar-${pillar.id}`}
                  onClick={() =>
                    setSelectedPillarId(isSelected ? null : pillar.id)
                  }
                  className={`p-4 rounded-xl transition-all shadow-md flex flex-col items-center text-center cursor-pointer group border ${
                    isSelected
                      ? 'bg-[#232a39] border-[#5de6ff] shadow-[0_0_18px_rgba(93,230,255,0.3)]'
                      : 'bg-[#19202e] border-[#232a39] hover:bg-[#232a39] hover:border-[#5de6ff]/40'
                  }`}
                >
                  <span
                    className={`material-symbols-outlined text-3xl mb-2 transition-transform group-hover:scale-110 ${
                      isSelected ? 'text-[#5de6ff]' : 'text-[#5de6ff]'
                    }`}
                  >
                    {pillar.icon}
                  </span>
                  <span className="font-headline text-sm font-bold text-[#dce2f6]">
                    {pillar.title}
                  </span>
                  <span className="font-code text-[11px] text-[#c3c6d7] mt-1">
                    {pillar.sub}
                  </span>
                </div>
              );
            })}

            {/* Central Core Span on Desktop */}
            <div
              id="nexus-central-hub"
              className="col-span-2 sm:col-span-3 lg:col-span-5 p-5 sm:p-6 rounded-xl bg-gradient-to-r from-[#19202e] via-[#232a39] to-[#19202e] shadow-xl my-2 flex flex-col md:flex-row items-center justify-between gap-4 border border-[#5de6ff]/30"
            >
              <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-xl bg-[#2563eb]/30 border border-[#5de6ff]/50 flex items-center justify-center text-[#5de6ff] shrink-0">
                  <span className="material-symbols-outlined text-2xl animate-spin-slow">hub</span>
                </div>
                <div>
                  <h3 className="font-headline text-lg sm:text-xl font-bold text-[#dce2f6]">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="font-code text-xs text-[#5de6ff]">
                    Synthetic Hub of Concrete, Computation & Communication
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-md bg-[#2e3544] text-[#5de6ff] font-code text-xs font-semibold border border-[#5de6ff]/30">
                  10 Core Pillars
                </span>
                <span className="px-3 py-1 rounded-md bg-[#2e3544] text-[#c3c6d7] font-code text-xs">
                  Active Synthesis
                </span>
              </div>
            </div>

            {/* Bottom 5 Pillars */}
            {CORE_PILLARS.slice(5, 10).map((pillar) => {
              const isSelected = selectedPillarId === pillar.id;
              return (
                <div
                  key={pillar.id}
                  id={`pillar-${pillar.id}`}
                  onClick={() =>
                    setSelectedPillarId(isSelected ? null : pillar.id)
                  }
                  className={`p-4 rounded-xl transition-all shadow-md flex flex-col items-center text-center cursor-pointer group border ${
                    isSelected
                      ? 'bg-[#232a39] border-[#5de6ff] shadow-[0_0_18px_rgba(93,230,255,0.3)]'
                      : 'bg-[#19202e] border-[#232a39] hover:bg-[#232a39] hover:border-[#5de6ff]/40'
                  }`}
                >
                  <span
                    className={`material-symbols-outlined text-3xl mb-2 transition-transform group-hover:scale-110 ${
                      isSelected ? 'text-[#5de6ff]' : 'text-[#5de6ff]'
                    }`}
                  >
                    {pillar.icon}
                  </span>
                  <span className="font-headline text-sm font-bold text-[#dce2f6]">
                    {pillar.title}
                  </span>
                  <span className="font-code text-[11px] text-[#c3c6d7] mt-1">
                    {pillar.sub}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Interactive Inspection Detail Banner */}
          {selectedPillar && (
            <div
              id="nexus-inspector-banner"
              className="mt-6 p-4 sm:p-5 rounded-xl bg-[#0c1321] border border-[#5de6ff]/40 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all"
            >
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#5de6ff] text-2xl mt-0.5">
                  {selectedPillar.icon}
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-headline font-bold text-sm text-[#dce2f6]">
                      {selectedPillar.title}
                    </span>
                    <span className="font-code text-[11px] text-[#5de6ff] px-2 py-0.5 rounded bg-[#19202e]">
                      {selectedPillar.sub}
                    </span>
                  </div>
                  <p className="font-body text-xs sm:text-sm text-[#c3c6d7] mt-1">
                    {selectedPillar.detail}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedPillarId(null)}
                className="self-end sm:self-center text-xs font-code text-[#8d90a0] hover:text-[#5de6ff] px-2.5 py-1 rounded bg-[#151b2a] border border-[#232a39]"
              >
                Dismiss
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
