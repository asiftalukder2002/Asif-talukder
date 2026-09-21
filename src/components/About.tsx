import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="w-full py-20 px-4 sm:px-6 lg:px-12 bg-[#0c1321]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Profile Card Column */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div
            id="about-profile-card"
            className="relative w-full max-w-sm rounded-2xl bg-[#151b2a] p-5 shadow-2xl border border-[#232a39]"
          >
            <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 border border-[#232a39]">
              <img
                src={PERSONAL_INFO.aboutImageUrl}
                alt="MD. ASIF HAMZA TANG"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070e1c]/80 via-transparent to-transparent"></div>
            </div>

            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <span className="font-headline text-base font-bold text-[#dce2f6]">
                  {PERSONAL_INFO.name}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#5de6ff]/10 text-[#5de6ff] font-code text-xs font-semibold border border-[#5de6ff]/30">
                  {PERSONAL_INFO.batch}
                </span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-[#19202e] border border-[#232a39]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#5de6ff] shadow-[0_0_8px_#5de6ff]"></span>
                <span className="font-code text-xs text-[#dce2f6]">
                  {PERSONAL_INFO.status}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative Column */}
        <div className="lg:col-span-7 flex flex-col">
          <span className="font-code text-xs text-[#5de6ff] uppercase tracking-widest font-semibold">
            Biography & Ethos
          </span>
          <h2 className="font-headline text-2xl sm:text-4xl text-[#dce2f6] font-bold mt-1 mb-6">
            Bridging Physical Foundations & Next-Gen Intelligence
          </h2>

          <div className="space-y-4 font-body text-sm sm:text-base text-[#c3c6d7] leading-relaxed">
            <p>
              I am a Civil Engineering student at Atish Dipankar University of Science and Technology
              (ADUST), standing at the intersection of technical structural engineering and
              cutting-edge digital intelligence. My academic foundation is built on structural
              components, materials, concrete technology, and precision AutoCAD drafting.
            </p>
            <p>
              Simultaneously, I operate as an AI Professional and Digital Creator, harnessing
              generative models, digital video workflows, visual design frameworks, and thoughtful
              writing to communicate complex ideas. From monitoring digital misinformation to
              scripting community dialogues and building responsive web experiences, I believe the
              future belongs to multidisciplinary problem solvers.
            </p>
          </div>

          {/* 6 Key Highlights Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 mt-8">
            <div className="p-3.5 rounded-xl bg-[#19202e] border border-[#232a39] shadow-md hover:border-[#5de6ff]/30 transition-colors">
              <span className="material-symbols-outlined text-[#5de6ff] text-xl mb-1">
                engineering
              </span>
              <p className="font-headline text-sm font-bold text-[#dce2f6]">Civil Eng.</p>
              <p className="font-code text-[11px] text-[#c3c6d7]">Structural Rigor</p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#19202e] border border-[#232a39] shadow-md hover:border-[#5de6ff]/30 transition-colors">
              <span className="material-symbols-outlined text-[#5de6ff] text-xl mb-1">
                smart_toy
              </span>
              <p className="font-headline text-sm font-bold text-[#dce2f6]">AI & Tech</p>
              <p className="font-code text-[11px] text-[#c3c6d7]">GenAI Pipelines</p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#19202e] border border-[#232a39] shadow-md hover:border-[#5de6ff]/30 transition-colors">
              <span className="material-symbols-outlined text-[#5de6ff] text-xl mb-1">
                palette
              </span>
              <p className="font-headline text-sm font-bold text-[#dce2f6]">Creativity</p>
              <p className="font-code text-[11px] text-[#c3c6d7]">Video & Design</p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#19202e] border border-[#232a39] shadow-md hover:border-[#5de6ff]/30 transition-colors">
              <span className="material-symbols-outlined text-[#5de6ff] text-xl mb-1">
                podcasts
              </span>
              <p className="font-headline text-sm font-bold text-[#dce2f6]">Media Comms</p>
              <p className="font-code text-[11px] text-[#c3c6d7]">Public Dialogue</p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#19202e] border border-[#232a39] shadow-md hover:border-[#5de6ff]/30 transition-colors">
              <span className="material-symbols-outlined text-[#5de6ff] text-xl mb-1">
                edit_note
              </span>
              <p className="font-headline text-sm font-bold text-[#dce2f6]">Writing</p>
              <p className="font-code text-[11px] text-[#c3c6d7]">Columns & Scripts</p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#19202e] border border-[#232a39] shadow-md hover:border-[#5de6ff]/30 transition-colors">
              <span className="material-symbols-outlined text-[#5de6ff] text-xl mb-1">
                volunteer_activism
              </span>
              <p className="font-headline text-sm font-bold text-[#dce2f6]">Community</p>
              <p className="font-code text-[11px] text-[#c3c6d7]">Civic Volunteer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
