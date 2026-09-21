import React from 'react';

export const InformationMonitoring: React.FC = () => {
  return (
    <section id="monitoring" className="w-full py-20 px-4 sm:px-6 lg:px-12 bg-[#0c1321]">
      <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-r from-[#151b2a] via-[#19202e] to-[#151b2a] p-6 sm:p-12 shadow-2xl border border-[#232a39] relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563eb]/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#232a39] text-[#5de6ff] font-code text-xs mb-4 border border-[#5de6ff]/30">
              <span className="material-symbols-outlined text-base">verified_user</span>
              <span>Recovery Station Initiative • Formed July 2024</span>
            </div>

            <h2 className="font-headline text-2xl sm:text-4xl text-[#dce2f6] font-bold">
              Digital Misinformation Monitoring & Research
            </h2>

            <p className="font-body text-sm sm:text-base text-[#c3c6d7] mt-4 leading-relaxed">
              Collaborating with the "Recovery Station" research team formed in July 2024. Active factual
              verification, tracking distorted digital media across online channels, conducting
              open-source verification (OSINT), and drafting clarification releases to maintain
              internet safety and prevent digital deception.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full lg:w-auto shrink-0">
            <div className="p-6 rounded-2xl bg-[#19202e] border border-[#232a39] shadow-md text-center">
              <span className="font-headline text-3xl sm:text-4xl text-[#5de6ff] font-bold">
                OSINT
              </span>
              <p className="font-code text-xs text-[#c3c6d7] mt-1">Verification Method</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#19202e] border border-[#232a39] shadow-md text-center">
              <span className="font-headline text-3xl sm:text-4xl text-[#5de6ff] font-bold">
                2024+
              </span>
              <p className="font-code text-xs text-[#c3c6d7] mt-1">Active Monitoring</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
