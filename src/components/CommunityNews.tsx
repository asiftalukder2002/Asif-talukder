import React from 'react';

export const CommunityNews: React.FC = () => {
  const newsItems = [
    {
      category: 'CIVIC DIALOGUE',
      title: 'Youth Technological Reskilling Workshop',
      description:
        'Organized an interactive community discussion introducing local students to practical AI tools and foundational digital literacy.',
      badge: 'Community Report',
      year: '2024',
    },
    {
      category: 'AWARENESS DESK',
      title: 'Digital Safety & False Narrative Defense',
      description:
        'Public awareness writeup highlighting how to identify AI-generated deceptive imagery and check credible official sources.',
      badge: 'Safety Guide',
      year: '2024',
    },
    {
      category: 'CAMPUS ENGAGEMENT',
      title: 'ADUST Engineering Seminar Commentary',
      description:
        'Summary notes from faculty and peer presentations exploring sustainable building aggregates and modern computer modeling.',
      badge: 'Academic Log',
      year: 'Ongoing',
    },
  ];

  return (
    <section
      id="community-news"
      className="w-full py-20 px-4 sm:px-6 lg:px-12 bg-[#070e1c] border-y border-[#151b2a]"
    >
      <div className="max-w-7xl mx-auto flex flex-col">
        <div className="mb-12">
          <span className="font-code text-xs text-[#5de6ff] uppercase tracking-widest font-semibold">
            Public Engagement & Civic Updates
          </span>
          <h2 className="font-headline text-2xl sm:text-4xl text-[#dce2f6] font-bold mt-1">
            Community Content & Statements
          </h2>
          <p className="font-body text-sm sm:text-base text-[#c3c6d7] mt-2 max-w-2xl">
            Documenting community meetings, youth workshops, and factual civic dialogue summaries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((item, idx) => (
            <div
              key={idx}
              id={`community-news-${idx}`}
              className="p-6 rounded-2xl bg-[#19202e] border border-[#232a39] shadow-md flex flex-col justify-between hover:bg-[#232a39] hover:border-[#5de6ff]/30 transition-all"
            >
              <div>
                <span className="font-code text-xs font-bold text-[#5de6ff] uppercase tracking-wider">
                  {item.category}
                </span>
                <h4 className="font-headline text-base sm:text-lg text-[#dce2f6] font-bold mt-2.5">
                  {item.title}
                </h4>
                <p className="font-body text-xs sm:text-sm text-[#c3c6d7] mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3.5 flex items-center justify-between text-[#8d90a0] font-code text-xs border-t border-[#2e3544]">
                <span className="text-[#c3c6d7]">{item.badge}</span>
                <span className="text-[#5de6ff]">{item.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
