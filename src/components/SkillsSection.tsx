import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="w-full py-20 px-4 sm:px-6 lg:px-12 bg-[#0c1321]">
      <div className="max-w-7xl mx-auto flex flex-col">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <span className="font-code text-xs text-[#5de6ff] uppercase tracking-widest font-semibold">
            Capabilities & Proficiency
          </span>
          <h2 className="font-headline text-2xl sm:text-4xl text-[#dce2f6] font-bold mt-1">
            Multi-Domain Competencies
          </h2>
          <p className="font-body text-sm sm:text-base text-[#c3c6d7] mt-2">
            Structured inventory across engineering fundamentals, computation, design tools, and
            communications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#19202e] border border-[#232a39] shadow-md hover:border-[#5de6ff]/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#232a39] flex items-center justify-center text-[#5de6ff]">
                  <span className="material-symbols-outlined text-2xl">{cat.icon}</span>
                </div>
                <h3 className="font-headline text-base sm:text-lg text-[#dce2f6] font-bold">
                  {cat.title}
                </h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between font-code text-xs text-[#c3c6d7] mb-1.5">
                      <span>{skill.name}</span>
                      <span className="text-[#5de6ff] font-bold">{skill.percentage}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#070e1c] overflow-hidden p-0.5 border border-[#232a39]">
                      <div
                        className="h-full bg-gradient-to-r from-[#2563eb] to-[#5de6ff] rounded-full transition-all duration-1000 shadow-[0_0_8px_rgba(93,230,255,0.4)]"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
