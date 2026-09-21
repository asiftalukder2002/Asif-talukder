import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: 'MD. ASIF HAMZA TANG - Portfolio',
          text: 'Civil Engineering Student | AI Professional | Digital Creator',
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <footer className="w-full bg-[#070e1c] text-[#c3c6d7] py-14 border-t border-[#151b2a]">
      <div className="w-full px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div>
          <p className="font-headline text-lg sm:text-xl text-[#dce2f6] font-bold">
            {PERSONAL_INFO.name}
          </p>
          <p className="font-code text-xs text-[#5de6ff] mt-1 max-w-md">
            Synthesizing physical structures, synthetic intelligence, and cinematic digital design.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 font-body text-sm">
          <button
            onClick={() => onNavigate('home')}
            className="hover:text-[#5de6ff] transition-colors cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => onNavigate('projects')}
            className="hover:text-[#5de6ff] transition-colors cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={() => onNavigate('civil-eng')}
            className="hover:text-[#5de6ff] transition-colors cursor-pointer"
          >
            Civil Eng
          </button>
          <button
            onClick={() => onNavigate('skills')}
            className="hover:text-[#5de6ff] transition-colors cursor-pointer"
          >
            Skills
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="hover:text-[#5de6ff] transition-colors cursor-pointer"
          >
            Contact
          </button>
        </div>

        <div className="flex items-center gap-2 text-[#c3c6d7]">
          <button
            onClick={() => onNavigate('nexus')}
            title="Core Nexus Hub"
            className="p-2.5 rounded-full bg-[#19202e] hover:bg-[#232a39] hover:text-[#5de6ff] transition-colors border border-[#232a39]"
          >
            <span className="material-symbols-outlined text-lg">hub</span>
          </button>
          <button
            onClick={() => onNavigate('identity')}
            title="Professional Identity"
            className="p-2.5 rounded-full bg-[#19202e] hover:bg-[#232a39] hover:text-[#5de6ff] transition-colors border border-[#232a39]"
          >
            <span className="material-symbols-outlined text-lg">terminal</span>
          </button>
          <button
            onClick={() => onNavigate('civil-eng')}
            title="Civil Engineering"
            className="p-2.5 rounded-full bg-[#19202e] hover:bg-[#232a39] hover:text-[#5de6ff] transition-colors border border-[#232a39]"
          >
            <span className="material-symbols-outlined text-lg">architecture</span>
          </button>
          <button
            onClick={handleShare}
            title={copiedLink ? 'Link Copied!' : 'Share Portfolio'}
            className="p-2.5 rounded-full bg-[#19202e] hover:bg-[#232a39] hover:text-[#5de6ff] transition-colors border border-[#232a39]"
          >
            <span className="material-symbols-outlined text-lg">
              {copiedLink ? 'done' : 'share'}
            </span>
          </button>
        </div>
      </div>

      <div className="mt-10 pt-6 text-center font-code text-xs text-[#8d90a0] border-t border-[#151b2a] px-4">
        © 2026 MD. ASIF HAMZA TANG. All rights reserved. Precision Built Portfolio.
      </div>
    </footer>
  );
};
