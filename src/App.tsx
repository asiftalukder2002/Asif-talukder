/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CoreNexus } from './components/CoreNexus';
import { About } from './components/About';
import { IdentityDisciplines } from './components/IdentityDisciplines';
import { SkillsSection } from './components/SkillsSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { AiGallery } from './components/AiGallery';
import { WebDesignMockups } from './components/WebDesignMockups';
import { CivilEngineering } from './components/CivilEngineering';
import { InformationMonitoring } from './components/InformationMonitoring';
import { CommunityNews } from './components/CommunityNews';
import { EducationTimeline } from './components/EducationTimeline';
import { ContactSection } from './components/ContactSection';
import { LightboxModal } from './components/LightboxModal';
import { Footer } from './components/Footer';
import { LightboxData } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedServiceTopic, setSelectedServiceTopic] = useState<string>('');
  const [lightboxData, setLightboxData] = useState<LightboxData>({
    isOpen: false,
    title: '',
    description: '',
    tag: '',
  });

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      const navOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Scroll listener to update active section in header
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'about',
        'identity',
        'skills',
        'services',
        'projects',
        'gallery',
        'design',
        'civil-eng',
        'education',
        'contact',
      ];

      const scrollPosition = window.scrollY + 160;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceTopic(serviceTitle);
    scrollToSection('contact');
  };

  const handleOpenLightbox = (data: LightboxData) => {
    setLightboxData(data);
  };

  const handleCloseLightbox = () => {
    setLightboxData((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-[#0c1321] text-[#dce2f6] flex flex-col selection:bg-[#5de6ff]/20 selection:text-[#5de6ff]">
      {/* Fixed Navigation Header */}
      <Header activeSection={activeSection} onNavigate={scrollToSection} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full flex flex-col">
        {/* 1. Hero Section */}
        <Hero
          onExploreWork={() => scrollToSection('projects')}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* 2. Core Nexus / Multidisciplinary Matrix */}
        <CoreNexus />

        {/* 3. About Me Biography */}
        <About />

        {/* 4. Professional Identity (12 Disciplines) */}
        <IdentityDisciplines />

        {/* 5. Skills & Competencies */}
        <SkillsSection />

        {/* 6. Specialized Services (13 Offerings) */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 7. Projects & Concepts Showcase */}
        <ProjectsShowcase onInspect={handleOpenLightbox} />

        {/* 8. AI Gallery & Video Showcase */}
        <AiGallery onInspect={handleOpenLightbox} />

        {/* 9. Web & Graphic Design Mockups */}
        <WebDesignMockups onInspect={handleOpenLightbox} />

        {/* 10. Civil Engineering Showcase */}
        <CivilEngineering />

        {/* 11. Digital Information & Misinformation Monitoring */}
        <InformationMonitoring />

        {/* 12. Community News & Civic Statements */}
        <CommunityNews />

        {/* 13. Education Timeline */}
        <EducationTimeline />

        {/* 14. Contact & Collaboration */}
        <ContactSection initialSubject={selectedServiceTopic} />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Lightbox / Asset Inspector Modal */}
      <LightboxModal data={lightboxData} onClose={handleCloseLightbox} />
    </div>
  );
}
