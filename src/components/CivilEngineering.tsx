import React from 'react';

export const CivilEngineering: React.FC = () => {
  const principles = [
    {
      icon: 'view_in_ar',
      title: 'Reinforced Concrete Beams',
      description:
        'Analysis of tensile steel placement, compressive concrete zones, and crack mitigation stirrup spacings.',
      tag: 'Concept Schematic',
    },
    {
      icon: 'grid_4x4',
      title: 'AutoCAD 2D Drafting',
      description:
        'Standardized layered drafting protocols, dimension styles, elevation sheets, and section views.',
      tag: 'CAD Methodology',
    },
    {
      icon: 'square_foot',
      title: 'Construction Estimation',
      description:
        'Quantity takeoff calculations for aggregate, cement, fine sand, rebar tonnage, and formwork ratios.',
      tag: 'Estimation Formulae',
    },
    {
      icon: 'domain',
      title: 'High-Rise Framing',
      description:
        'Concept understanding of lateral wind loads, seismic resisting frames, and shear wall placements.',
      tag: 'Structural Dynamics',
    },
  ];

  return (
    <section
      id="civil-eng"
      className="w-full py-20 px-4 sm:px-6 lg:px-12 bg-[#070e1c] border-y border-[#151b2a]"
    >
      <div className="max-w-7xl mx-auto flex flex-col">
        <div className="mb-12">
          <span className="font-code text-xs text-[#5de6ff] uppercase tracking-widest font-semibold">
            Physical Systems & Infrastructure
          </span>
          <h2 className="font-headline text-2xl sm:text-4xl text-[#dce2f6] font-bold mt-1">
            Civil Engineering Principles
          </h2>
          <p className="font-body text-sm sm:text-base text-[#c3c6d7] mt-2 max-w-2xl">
            Structural concepts, technical drawing layouts, and material calculations based on academic
            coursework at ADUST.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((item, idx) => (
            <div
              key={idx}
              id={`civil-principle-${idx}`}
              className="p-6 rounded-2xl bg-[#19202e] border border-[#232a39] shadow-md flex flex-col justify-between hover:bg-[#232a39] hover:border-[#5de6ff]/40 transition-all group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#232a39] flex items-center justify-center text-[#5de6ff] mb-5 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                </div>
                <h4 className="font-headline text-base sm:text-lg text-[#dce2f6] font-bold mb-2">
                  {item.title}
                </h4>
                <p className="font-body text-xs sm:text-sm text-[#c3c6d7] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <span className="font-code text-xs text-[#5de6ff] mt-5 pt-3 border-t border-[#232a39] block font-semibold">
                {item.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
