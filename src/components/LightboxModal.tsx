import React, { useEffect } from 'react';
import { LightboxData } from '../types';

interface LightboxModalProps {
  data: LightboxData;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ data, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (data.isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [data.isOpen, onClose]);

  if (!data.isOpen) return null;

  return (
    <div
      id="lightbox-modal"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#070e1c]/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 animate-fade-in"
    >
      <div
        id="lightbox-container"
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl w-full bg-[#19202e] border border-[#232a39] p-5 sm:p-6 rounded-2xl shadow-2xl flex flex-col gap-4 max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#5de6ff] shadow-[0_0_8px_#5de6ff]"></span>
            <h4
              id="lightbox-title"
              className="font-headline text-lg sm:text-2xl text-[#dce2f6] font-bold"
            >
              {data.title}
            </h4>
          </div>
          <button
            id="lightbox-close"
            onClick={onClose}
            aria-label="Close Inspector"
            className="p-2 rounded-xl bg-[#2e3544] text-[#dce2f6] hover:text-[#5de6ff] hover:bg-[#232a39] transition-colors cursor-pointer border border-[#434655]"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Media / Image Frame */}
        <div className="w-full h-72 sm:h-96 md:h-[440px] rounded-xl overflow-hidden bg-[#070e1c] flex items-center justify-center relative border border-[#232a39]">
          {data.imageUrl ? (
            <img
              id="lightbox-img"
              src={data.imageUrl}
              alt={data.title}
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="p-8 text-center flex flex-col items-center justify-center">
              <span className="material-symbols-outlined text-[#5de6ff] text-5xl mb-2">
                view_in_ar
              </span>
              <p className="font-body text-sm text-[#c3c6d7] max-w-lg">
                Technical rendering preview
              </p>
            </div>
          )}
        </div>

        {/* Description & Tools */}
        <div className="bg-[#151b2a] p-4 rounded-xl border border-[#232a39]">
          <p
            id="lightbox-desc"
            className="font-body text-sm text-[#c3c6d7] leading-relaxed"
          >
            {data.description}
          </p>

          {data.tools && data.tools.length > 0 && (
            <div className="mt-3 flex flex-wrap items-center gap-1.5 pt-2.5 border-t border-[#232a39]">
              <span className="font-code text-xs text-[#8d90a0]">Technologies:</span>
              {data.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="font-code text-[11px] px-2 py-0.5 rounded bg-[#070e1c] text-[#5de6ff] border border-[#5de6ff]/20"
                >
                  {tool}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Footer info bar */}
        <div className="flex items-center justify-between text-[#8d90a0] font-code text-xs pt-1">
          <span
            id="lightbox-tag"
            className="px-2.5 py-1 bg-[#151b2a] rounded-md font-bold text-[#5de6ff] border border-[#232a39]"
          >
            TAG: {data.tag}
          </span>
          <span className="text-[#8d90a0] hidden sm:inline">
            MD. ASIF HAMZA TANG ARCHIVE
          </span>
        </div>
      </div>
    </div>
  );
};
