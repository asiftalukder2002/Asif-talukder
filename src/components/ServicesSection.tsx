import React from 'react';
import { SERVICES } from '../data/portfolioData';

interface ServicesSectionProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section
      id="services"
      className="w-full py-20 px-4 sm:px-6 lg:px-12 bg-[#070e1c] border-y border-[#151b2a]"
    >
      <div className="max-w-7xl mx-auto flex flex-col">
        <div className="mb-12">
          <span className="font-code text-xs text-[#5de6ff] uppercase tracking-widest font-semibold">
            Solutions & Capabilities
          </span>
          <h2 className="font-headline text-2xl sm:text-4xl text-[#dce2f6] font-bold mt-1">
            13 Specialized Service Offerings
          </h2>
          <p className="font-body text-sm sm:text-base text-[#c3c6d7] mt-2 max-w-2xl">
            Actionable engineering, creative, technological, and communication services calibrated
            for high precision.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              id={`service-card-${srv.id}`}
              onClick={() => onSelectService && onSelectService(srv.title)}
              className="p-5 rounded-2xl bg-[#19202e] border border-[#232a39] hover:bg-[#232a39] hover:border-[#5de6ff]/50 transition-all shadow-md group flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="material-symbols-outlined text-[#5de6ff] text-2xl group-hover:scale-110 transition-transform">
                    {srv.icon}
                  </span>
                  <span className="font-code text-[10px] text-[#8d90a0] uppercase tracking-wider">
                    {srv.category}
                  </span>
                </div>
                <h4 className="font-headline text-base text-[#dce2f6] font-bold mb-1 group-hover:text-white transition-colors">
                  {srv.title}
                </h4>
                <p className="font-body text-xs sm:text-sm text-[#c3c6d7] leading-relaxed">
                  {srv.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#232a39] flex items-center justify-between font-code text-[11px] text-[#5de6ff]">
                <span>Inquire</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
