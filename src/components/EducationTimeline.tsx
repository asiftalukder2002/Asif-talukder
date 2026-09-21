import React from 'react';
import { EDUCATION_TIMELINE } from '../data/portfolioData';

export const EducationTimeline: React.FC = () => {
  return (
    <section id="education" className="w-full py-20 px-4 sm:px-6 lg:px-12 bg-[#0c1321]">
      <div className="max-w-5xl mx-auto flex flex-col">
        <div className="mb-12 text-center">
          <span className="font-code text-xs text-[#5de6ff] uppercase tracking-widest font-semibold">
            Academic Record
          </span>
          <h2 className="font-headline text-2xl sm:text-4xl text-[#dce2f6] font-bold mt-1">
            Education Timeline
          </h2>
          <p className="font-body text-sm sm:text-base text-[#c3c6d7] mt-1">
            Factual institutional history without marks or student identifications.
          </p>
        </div>

        <div className="space-y-5">
          {EDUCATION_TIMELINE.map((item) => (
            <div
              key={item.id}
              id={`education-${item.id}`}
              className="p-6 rounded-2xl bg-[#19202e] border border-[#232a39] shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#5de6ff]/30 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#232a39] text-[#5de6ff] flex items-center justify-center shrink-0 border border-[#232a39]">
                  <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                </div>
                <div>
                  <span className="font-code text-xs text-[#5de6ff] font-bold tracking-wide">
                    {item.meta}
                  </span>
                  <h3 className="font-headline text-base sm:text-lg text-[#dce2f6] font-bold mt-0.5">
                    {item.degree}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-[#c3c6d7] mt-0.5">
                    {item.institution}
                  </p>
                </div>
              </div>

              <span
                className={`px-3 py-1 rounded-full font-code text-xs font-semibold self-start sm:self-center border ${
                  item.status === 'CURRENT'
                    ? 'bg-[#5de6ff]/10 text-[#5de6ff] border-[#5de6ff]/30'
                    : 'bg-[#232a39] text-[#8d90a0] border-[#434655]'
                }`}
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
