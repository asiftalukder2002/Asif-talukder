import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreWork: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onContactClick }) => {
  return (
    <section
      id="home"
      className="relative w-full pt-32 pb-20 sm:pt-40 sm:pb-28 px-4 sm:px-6 lg:px-12 flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Cyber Grid Ambient Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#5de6ff"
                strokeOpacity="0.25"
                strokeWidth="0.75"
              />
              <circle cx="40" cy="40" r="1.5" fill="#2563eb" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Soft Glow Ambient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#2563eb]/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-[#5de6ff]/15 rounded-full blur-[90px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#00cbe6]/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* Profile Badge Frame */}
        <div id="hero-avatar-frame" className="relative mb-6 sm:mb-8 group">
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#2563eb] via-[#5de6ff] to-[#00cbe6] opacity-75 blur-md group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1.5 bg-[#19202e] shadow-2xl flex items-center justify-center overflow-hidden border border-[#5de6ff]/40">
            <img
              src={PERSONAL_INFO.heroImageUrl}
              alt="MD. ASIF HAMZA TANG"
              className="w-full h-full rounded-full object-cover shadow-inner group-hover:scale-105 transition-transform duration-500"
              loading="eager"
            />
          </div>
          <div className="absolute bottom-1 right-2 bg-[#070e1c]/90 backdrop-blur-md px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5 border border-[#5de6ff]/30">
            <span className="w-2 h-2 rounded-full bg-[#5de6ff] animate-ping"></span>
            <span className="w-2 h-2 rounded-full bg-[#5de6ff] -ml-3.5"></span>
            <span className="font-code text-[11px] font-bold text-[#5de6ff] tracking-wider">
              ACTIVE
            </span>
          </div>
        </div>

        {/* Identity Pill */}
        <div
          id="hero-identity-badge"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#19202e]/80 backdrop-blur-md shadow-md mb-4 border border-[#232a39]"
        >
          <span className="material-symbols-outlined text-[#5de6ff] text-sm">polyline</span>
          <span className="font-headline text-[11px] font-bold text-[#5de6ff] tracking-widest uppercase">
            Engineering • AI • Creativity • Media • Communication
          </span>
        </div>

        {/* Headline */}
        <h1
          id="hero-name-title"
          className="font-headline text-3xl sm:text-5xl lg:text-6xl text-[#dce2f6] tracking-tight font-bold mb-2"
        >
          {PERSONAL_INFO.name}
        </h1>

        {/* Primary Title */}
        <p
          id="hero-primary-subtitle"
          className="font-headline text-lg sm:text-2xl text-[#5de6ff] font-semibold max-w-3xl mb-2"
        >
          Civil Engineering Student{' '}
          <span className="text-[#434655] mx-1.5 font-normal">|</span> AI Professional{' '}
          <span className="text-[#434655] mx-1.5 font-normal">|</span> Digital Creator
        </p>

        {/* Supporting Title */}
        <p
          id="hero-secondary-roles"
          className="font-body text-sm sm:text-base text-[#c3c6d7] max-w-3xl mb-4 font-medium"
        >
          {PERSONAL_INFO.roles}
        </p>

        {/* Subtitle description */}
        <p
          id="hero-summary-paragraph"
          className="font-body text-sm sm:text-lg text-[#c3c6d7] max-w-2xl mx-auto mb-8 font-normal leading-relaxed"
        >
          {PERSONAL_INFO.bioBrief}
        </p>

        {/* Action Buttons */}
        <div id="hero-actions" className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <button
            id="hero-btn-explore"
            onClick={onExploreWork}
            className="px-6 sm:px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#2563eb] to-[#5de6ff] text-[#002a78] font-headline text-base font-bold shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(93,230,255,0.7)] hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Explore My Work</span>
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </button>

          <button
            id="hero-btn-contact"
            onClick={onContactClick}
            className="px-6 sm:px-8 py-3.5 rounded-xl bg-[#19202e]/80 backdrop-blur-md text-[#dce2f6] font-headline text-base font-semibold hover:bg-[#232a39] hover:text-[#5de6ff] border border-[#232a39] hover:border-[#5de6ff]/50 shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Contact Me</span>
            <span className="material-symbols-outlined text-lg">forum</span>
          </button>
        </div>

        {/* Direct Social Channels */}
        <div id="hero-social-links" className="flex items-center justify-center gap-3">
          <a
            id="hero-social-fb"
            href={PERSONAL_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Profile"
            className="p-3 rounded-xl bg-[#19202e] hover:bg-[#232a39] text-[#c3c6d7] hover:text-[#5de6ff] transition-all shadow-md group border border-[#232a39] hover:border-[#5de6ff]/40"
          >
            <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">
              public
            </span>
          </a>
          <a
            id="hero-social-wa"
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Direct"
            className="p-3 rounded-xl bg-[#19202e] hover:bg-[#232a39] text-[#c3c6d7] hover:text-[#5de6ff] transition-all shadow-md group border border-[#232a39] hover:border-[#5de6ff]/40"
          >
            <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">
              chat
            </span>
          </a>
          <a
            id="hero-social-tg"
            href={PERSONAL_INFO.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram Channel"
            className="p-3 rounded-xl bg-[#19202e] hover:bg-[#232a39] text-[#c3c6d7] hover:text-[#5de6ff] transition-all shadow-md group border border-[#232a39] hover:border-[#5de6ff]/40"
          >
            <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">
              send
            </span>
          </a>
          <a
            id="hero-social-mail"
            href={`mailto:${PERSONAL_INFO.email}`}
            aria-label="Direct Email"
            className="p-3 rounded-xl bg-[#19202e] hover:bg-[#232a39] text-[#c3c6d7] hover:text-[#5de6ff] transition-all shadow-md group border border-[#232a39] hover:border-[#5de6ff]/40"
          >
            <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">
              mail
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
