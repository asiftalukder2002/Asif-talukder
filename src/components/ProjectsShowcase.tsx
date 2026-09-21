import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem, LightboxData } from '../types';

interface ProjectsShowcaseProps {
  onInspect: (data: LightboxData) => void;
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ onInspect }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'civil', label: 'Civil Eng' },
    { id: 'ai', label: 'AI' },
    { id: 'video', label: 'Video' },
    { id: 'design', label: 'Design' },
    { id: 'website', label: 'Website' },
    { id: 'writing', label: 'Writing' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  const handleInspect = (project: ProjectItem) => {
    onInspect({
      isOpen: true,
      title: project.title,
      description: project.detailedNotes || project.description,
      tag: project.tag,
      imageUrl: project.imageUrl,
      tools: project.tools,
    });
  };

  return (
    <section id="projects" className="w-full py-20 px-4 sm:px-6 lg:px-12 bg-[#0c1321]">
      <div className="max-w-7xl mx-auto flex flex-col">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="font-code text-xs text-[#5de6ff] uppercase tracking-widest font-semibold">
              Portfolio Works
            </span>
            <h2 className="font-headline text-2xl sm:text-4xl text-[#dce2f6] font-bold mt-1">
              Concepts & Creative Work
            </h2>
            <p className="font-body text-sm sm:text-base text-[#c3c6d7] mt-1">
              All items are strictly marked as AI Concepts, Creative Showcases, or Engineering Prototypes.
            </p>
          </div>

          {/* Filter Tabs */}
          <div
            id="project-filters"
            className="flex flex-wrap gap-1.5 p-1 bg-[#151b2a] rounded-xl border border-[#232a39]"
          >
            {filters.map((f) => {
              const isActive = activeFilter === f.id;
              return (
                <button
                  key={f.id}
                  id={`filter-btn-${f.id}`}
                  onClick={() => setActiveFilter(f.id)}
                  className={`px-3 py-1.5 rounded-lg font-code text-xs transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#232a39] text-[#5de6ff] font-bold shadow-[0_0_10px_rgba(93,230,255,0.2)] border border-[#5de6ff]/30'
                      : 'text-[#c3c6d7] hover:text-[#dce2f6] hover:bg-[#19202e]'
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div
          id="projects-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="p-5 rounded-2xl bg-[#19202e] border border-[#232a39] shadow-lg flex flex-col justify-between hover:border-[#5de6ff]/40 transition-all group"
            >
              <div>
                <div className="w-full h-48 sm:h-52 rounded-xl bg-[#070e1c] overflow-hidden relative mb-4 border border-[#232a39]">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070e1c]/70 via-transparent to-transparent"></div>
                  <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-md bg-[#070e1c]/85 backdrop-blur-md font-code text-[10px] font-bold text-[#5de6ff] border border-[#5de6ff]/30">
                    {project.badge}
                  </span>
                  <span className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded bg-[#19202e]/80 backdrop-blur font-code text-[10px] text-[#c3c6d7]">
                    {project.categoryLabel}
                  </span>
                </div>

                <h3 className="font-headline text-base sm:text-lg text-[#dce2f6] font-bold group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#c3c6d7] mt-2 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mt-5 pt-3.5 flex items-center justify-between border-t border-[#232a39]">
                <div className="flex flex-wrap gap-1">
                  {project.tools.slice(0, 2).map((t, idx) => (
                    <span
                      key={idx}
                      className="font-code text-[10px] text-[#8d90a0] bg-[#151b2a] px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => handleInspect(project)}
                  className="text-[#5de6ff] hover:text-white font-code text-xs flex items-center gap-1 cursor-pointer group-hover:translate-x-0.5 transition-all"
                >
                  <span>Inspect</span>
                  <span className="material-symbols-outlined text-sm">visibility</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
