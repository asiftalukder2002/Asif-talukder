import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'identity', label: 'Identity' },
    { id: 'skills', label: 'Skills' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'design', label: 'Design' },
    { id: 'civil-eng', label: 'Civil Eng' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0c1321]/90 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.6)] border-b border-[#232a39]/60'
          : 'bg-[#0c1321]/80 backdrop-blur-md shadow-[0_1px_16px_rgba(0,0,0,0.4)]'
      }`}
    >
      <div className="h-20 w-full px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-4">
        {/* Brand & Avatar */}
        <div
          id="header-brand"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative flex items-center justify-center">
            <div className="relative p-0.5 rounded-full bg-gradient-to-tr from-[#2563eb] via-[#5de6ff] to-[#00cbe6] shadow-[0_0_14px_rgba(93,230,255,0.4)] group-hover:shadow-[0_0_20px_rgba(93,230,255,0.7)] transition-shadow">
              <img
                src={PERSONAL_INFO.avatarUrl}
                alt="MD. ASIF HAMZA TANG"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover"
                loading="eager"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#5de6ff] border-2 border-[#0c1321] shadow-[0_0_8px_#5de6ff]"></span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-headline text-sm sm:text-base font-bold tracking-tight text-[#dce2f6] group-hover:text-white transition-colors">
              MD. ASIF HAMZA TANG
            </span>
            <span className="font-code text-[11px] text-[#5de6ff] tracking-wide uppercase">
              Civil Engineering • AI • Creator
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav
          id="desktop-nav"
          className="hidden xl:flex items-center gap-1 bg-[#151b2a]/60 p-1.5 rounded-xl border border-[#232a39]/40"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1 text-sm font-medium rounded-lg transition-all ${
                  isActive
                    ? 'bg-[#232a39] text-[#5de6ff] font-bold shadow-[0_0_12px_rgba(93,230,255,0.2)]'
                    : 'text-[#c3c6d7] hover:text-[#dce2f6] hover:bg-[#19202e]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Controls & Social Channels */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:flex items-center gap-1 text-[#c3c6d7]">
            <a
              id="header-social-facebook"
              href={PERSONAL_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-2 rounded-lg hover:text-[#5de6ff] hover:bg-[#19202e] transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">public</span>
            </a>
            <a
              id="header-social-whatsapp"
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2 rounded-lg hover:text-[#5de6ff] hover:bg-[#19202e] transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
            </a>
            <a
              id="header-social-telegram"
              href={PERSONAL_INFO.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="p-2 rounded-lg hover:text-[#5de6ff] hover:bg-[#19202e] transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">send</span>
            </a>
            <a
              id="header-social-email"
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Email"
              className="p-2 rounded-lg hover:text-[#5de6ff] hover:bg-[#19202e] transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">mail</span>
            </a>
          </div>

          <button
            id="header-contact-btn"
            onClick={() => handleNavClick('contact')}
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-[#2563eb] to-[#5de6ff] font-headline text-xs sm:text-sm text-[#002a78] font-bold shadow-[0_0_16px_rgba(37,99,235,0.4)] hover:shadow-[0_0_24px_rgba(93,230,255,0.6)] hover:-translate-y-0.5 transition-all"
          >
            <span>Contact Me</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            id="mobile-menu-toggle"
            type="button"
            aria-label="Toggle Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg bg-[#19202e] text-[#dce2f6] hover:bg-[#232a39] transition-colors border border-[#232a39]"
          >
            <span className="material-symbols-outlined">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="xl:hidden w-full bg-[#0c1321]/95 backdrop-blur-2xl border-b border-[#232a39] px-6 py-5 shadow-2xl transition-all"
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#232a39] text-[#5de6ff] font-bold'
                      : 'text-[#c3c6d7] hover:text-[#dce2f6] hover:bg-[#151b2a]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#5de6ff]"></span>}
                </button>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-[#232a39] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#19202e] text-[#5de6ff]"
              >
                <span className="material-symbols-outlined text-sm">public</span>
              </a>
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#19202e] text-[#5de6ff]"
              >
                <span className="material-symbols-outlined text-sm">chat</span>
              </a>
              <a
                href={PERSONAL_INFO.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#19202e] text-[#5de6ff]"
              >
                <span className="material-symbols-outlined text-sm">send</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-lg bg-[#19202e] text-[#5de6ff]"
              >
                <span className="material-symbols-outlined text-sm">mail</span>
              </a>
            </div>
            <button
              onClick={() => handleNavClick('contact')}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#2563eb] to-[#5de6ff] text-[#002a78] font-bold text-xs"
            >
              Get In Touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
