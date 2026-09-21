import React from 'react';
import { GALLERY_ITEMS } from '../data/portfolioData';
import { GalleryItem, LightboxData } from '../types';

interface AiGalleryProps {
  onInspect: (data: LightboxData) => void;
}

export const AiGallery: React.FC<AiGalleryProps> = ({ onInspect }) => {
  const handleItemClick = (item: GalleryItem) => {
    onInspect({
      isOpen: true,
      title: item.title,
      description: item.description,
      tag: item.tag,
      imageUrl: item.imageUrl,
    });
  };

  return (
    <section
      id="gallery"
      className="w-full py-20 px-4 sm:px-6 lg:px-12 bg-[#070e1c] border-y border-[#151b2a]"
    >
      <div className="max-w-7xl mx-auto flex flex-col">
        <div className="mb-12">
          <span className="font-code text-xs text-[#5de6ff] uppercase tracking-widest font-semibold">
            Synthetic Imaging & Cinema
          </span>
          <h2 className="font-headline text-2xl sm:text-4xl text-[#dce2f6] font-bold mt-1">
            AI Visual & Video Concepts
          </h2>
          <p className="font-body text-sm sm:text-base text-[#c3c6d7] mt-2 max-w-2xl">
            Explorations in diffusion-based synthetic lighting, cinematic frames, and algorithmic motion rendering.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              onClick={() => handleItemClick(item)}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-[#151b2a] cursor-pointer border border-[#232a39] hover:border-[#5de6ff]/50 shadow-lg transition-all"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />

              {/* Video Play Overlay */}
              {item.isVideo && (
                <div className="absolute inset-0 bg-[#070e1c]/40 flex items-center justify-center backdrop-blur-[1px]">
                  <div className="w-12 h-12 rounded-full bg-[#5de6ff] text-[#070e1c] flex items-center justify-center shadow-[0_0_20px_rgba(93,230,255,0.6)] group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-2xl">play_arrow</span>
                  </div>
                </div>
              )}

              {/* Gradient Bottom Title / Tag */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070e1c]/90 via-[#070e1c]/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3.5">
                <span className="font-code text-[10px] text-[#5de6ff] uppercase tracking-wider font-semibold">
                  {item.category}
                </span>
                <span className="font-headline text-xs sm:text-sm font-bold text-[#dce2f6] truncate mt-0.5">
                  {item.title}
                </span>

                {item.duration && (
                  <div className="flex justify-between items-center mt-1">
                    <span className="font-code text-[10px] text-[#8d90a0]">Demo Clip</span>
                    <span className="font-code text-[10px] text-[#5de6ff] bg-[#070e1c] px-1.5 py-0.5 rounded border border-[#5de6ff]/30">
                      {item.duration}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
