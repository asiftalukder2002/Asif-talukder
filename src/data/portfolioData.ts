import {
  ProjectItem,
  ServiceItem,
  DisciplineItem,
  SkillCategory,
  GalleryItem,
  EducationItem,
} from '../types';

export const PERSONAL_INFO = {
  name: 'MD. ASIF HAMZA TANG',
  tagline: 'Civil Engineering Student | AI Professional | Digital Creator',
  roles: 'Video Editor • Graphic Designer • Website Designer • Content Writer • Media Personality',
  bioBrief:
    'Combining Civil Engineering knowledge with Artificial Intelligence, digital creativity, media, writing, and modern technology.',
  phone: '+880 9638-543715',
  phoneClean: '+8809638543715',
  whatsapp: '+880 1319-967499',
  whatsappUrl: 'https://wa.me/8801319967499',
  email: 'talukderasif00@gmail.com',
  facebook: '@Aasiftang',
  facebookUrl: 'https://www.facebook.com/Aasiftang',
  telegram: '@Aasiftalukder',
  telegramUrl: 'https://t.me/Aasiftalukder',
  university: 'Atish Dipankar University of Science and Technology (ADUST)',
  batch: '11th Batch',
  status: 'Open to Multidisciplinary Collaborations',
  avatarUrl:
    'https://lh3.googleusercontent.com/aida/AEtjO1XfcK_3Y1NSTn2n3cPDfbDZ3kHfWNTz62zjwh001_z8UMFqZdShuj5zHLV9Onpx9Eq_6yttzsfJ7QricYhitvTSMruaoh0vulCwmjiRfZ5r3Ra-QFJfotUWgoSxq-L79hnSqHLHBj9fy6ZMPDNF6rm5LiYp-9n8nSdNcw2mRc85kShnbLnRFR-gQNISkshssNiHYyILLwuw2sl65aMhHbDStwcV-fhdMBD3lkTEBQj7mn8XTdysbjpysz68lKHhcB69Pw3mJIpLFA',
  heroImageUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAqz8k6kTdqGYw7b-lZIYAQA4vGNOZUUKDagkiqfq1tOmrkHqOxLHNE0E7zad42TMAiKrc_L0rWTv0O7eRnPf-a4eLtH7T5xa0ZVb8xQ9l3XLQIVHRNyxLWxA54QRldnXYfPogmHdPDitkNMi-p0I_pqdWx1kjE4hYHZ7_58sXR6vEXGSa1l-zQHIfWFLYQJUjm9uHzIYCSrRcguT_AgDNTfi45vyCQ5gzEOiv13CwWgtR4qSWiUBIcUF2bWoNlajXQmQ',
  aboutImageUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBM9l-Am39uq0woxA2yRrt9QYSsNZywew3byON8Ek3lm63_4OVgzAgsjzfcf_hAkhF_dAEYQZYynUlIS3aeczmjykVdyzsbABa6O02pCVz-y7WFEhbnwRcoomB6iNPs1yLweNv7X0AcEo5QUTmVoaJpeNGk4tpea3H8derZP8J7AOYW0de2-ZoId0NE-2OtyPtgppswjSYV-9liuWoCi71Zox9-Lg3sPn--0hh14q1zLuU9yfI4gdxAGPGThkuAmXlywQ',
};

export const CORE_PILLARS = [
  {
    id: 'civil',
    title: 'Civil Engineering',
    sub: 'Structures & Physics',
    icon: 'architecture',
    detail:
      'Rigorous foundation in structural mechanics, AutoCAD 2D/3D drafting, reinforced concrete detailing, and materials testing at ADUST.',
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    sub: 'Generative Models',
    icon: 'memory',
    detail:
      'Designing structured prompt pipelines, multimodal generative workflows, AI image/video synthesis, and autonomous agent prototypes.',
  },
  {
    id: 'tech',
    title: 'Technology',
    sub: 'Web & Digital Tools',
    icon: 'terminal',
    detail:
      'Building performant, responsive web applications with Tailwind CSS, TypeScript, and modern front-end design architectures.',
  },
  {
    id: 'design',
    title: 'Creative Design',
    sub: 'UI/UX & Branding',
    icon: 'draw',
    detail:
      'High-impact visual identity kits, geometric typography, dark-mode design systems, and digital promotional materials.',
  },
  {
    id: 'video',
    title: 'Video Creation',
    sub: 'Cinematic & Shorts',
    icon: 'movie',
    detail:
      'Viral short-form editing for TikTok, Reels, and YouTube Shorts with rhythm sync, kinetic subtitles, and cinematic grading.',
  },
  {
    id: 'photo',
    title: 'Photography',
    sub: 'AI Lighting & Frame',
    icon: 'photo_camera',
    detail:
      'Virtual studio lighting calibration, camera depth simulation, portrait retouching, and photorealistic rendering pipelines.',
  },
  {
    id: 'writing',
    title: 'Writing',
    sub: 'Essays & Scripts',
    icon: 'article',
    detail:
      'In-depth opinion columns, analytical essays on technological transformation, and scripts for educational multimedia.',
  },
  {
    id: 'media',
    title: 'Media',
    sub: 'Broadcasting & Voice',
    icon: 'podcasts',
    detail:
      'Public communication, event hosting, articulate media delivery, and broadcasting voice for community initiatives.',
  },
  {
    id: 'comm',
    title: 'Communication',
    sub: 'Public Presentation',
    icon: 'campaign',
    detail:
      'Engaging public speaking, constructive community dialogue, and clear explanation of complex technical and civic subjects.',
  },
  {
    id: 'community',
    title: 'Community',
    sub: 'Civic & Youth Support',
    icon: 'groups',
    detail:
      'Active grassroots volunteerism, misinformation counter-initiatives with Recovery Station, and youth mentoring programs.',
  },
];

export const DISCIPLINES: DisciplineItem[] = [
  {
    id: 'disc-1',
    code: 'DISCIPLINE 01',
    title: 'Civil Engineering',
    icon: 'foundation',
    description:
      'Solid grounding in structural analysis, reinforced concrete behavior, material stress tolerances, and construction methodologies.',
    capabilities: [
      'AutoCAD 2D Drafting & Floor Plans',
      'Structural Components & Rebar Placement',
      'Technical Engineering Documentation',
    ],
  },
  {
    id: 'disc-2',
    code: 'DISCIPLINE 02',
    title: 'AI Professional',
    icon: 'psychology',
    description:
      'End-to-end integration of generative AI pipelines, specialized prompt engineering, and multimodal workflow automation.',
    capabilities: [
      'Generative Image & Video Models',
      'Prompt Engineering & Structured Logic',
      'AI-Assisted Workflow Prototyping',
    ],
  },
  {
    id: 'disc-3',
    code: 'DISCIPLINE 03',
    title: 'AI Video Maker',
    icon: 'video_settings',
    description:
      'Directing synthetic motion scenes, AI avatar storytelling, promotional shorts, and high-fidelity video narrative experiments.',
    capabilities: [
      'Cinematic Synthetic Scene Directing',
      'AI Avatar Narrative Generation',
      'Conceptual Video Motion Pipelines',
    ],
  },
  {
    id: 'disc-4',
    code: 'DISCIPLINE 04',
    title: 'Video Editor',
    icon: 'movie_edit',
    description:
      'Precision non-linear video editing optimized for engagement, social media velocity, rhythmic pacing, and clean typography.',
    capabilities: [
      'Short-form Viral Reels & Shorts',
      'Kinetic Subtitles & Sound Design',
      'Audio Sync & Voiceover Mastering',
    ],
  },
  {
    id: 'disc-5',
    code: 'DISCIPLINE 05',
    title: 'AI Photo Designer & Photographer',
    icon: 'camera_enhance',
    description:
      'Crafting photorealistic portraiture, cinematic lighting setups, high-fashion styling concepts, and detailed visual enhancements.',
    capabilities: [
      'Virtual Studio Lighting Synthesis',
      'Portrait Grading & Precision Retouch',
      'High-Dynamic-Range Digital Renders',
    ],
  },
  {
    id: 'disc-6',
    code: 'DISCIPLINE 06',
    title: 'Graphic Designer',
    icon: 'brush',
    description:
      'Creating high-impact visual identity kits, social media graphics, event posters, and cohesive digital assets.',
    capabilities: [
      'Social Media Brand Kits & Badges',
      'Event Flyers & Conference Banners',
      'Visual Hierarchy & Typography Layout',
    ],
  },
  {
    id: 'disc-7',
    code: 'DISCIPLINE 07',
    title: 'Website Designer',
    icon: 'web',
    description:
      'Designing responsive web interfaces, landing pages, modern portfolio frameworks, and AI-powered web experiences.',
    capabilities: [
      'Responsive Fluid Grid Architecture',
      'Cybernetic Dark Mode UI/UX Design',
      'Modern Front-End Component Prototyping',
    ],
  },
  {
    id: 'disc-8',
    code: 'DISCIPLINE 08',
    title: 'Content Creator & Writer',
    icon: 'edit_document',
    description:
      'Developing educational scripts, analytical essays, public statements, and persuasive online digital copy.',
    capabilities: [
      'Video Scripts & Narrative Frameworks',
      'Analytical Essays & Technology Commentary',
      'Public Statements & Press Releases',
    ],
  },
  {
    id: 'disc-9',
    code: 'DISCIPLINE 09',
    title: 'Columnist (Independent Commentary)',
    icon: 'feed',
    description:
      'Independent commentary focused on youth leadership, technology adoption, digital society shifts, and modern social awareness.',
    capabilities: [
      'Independent Opinion Pieces',
      'Technological Transformation Analysis',
      'Civic Engagement & Policy Perspectives',
    ],
  },
  {
    id: 'disc-10',
    code: 'DISCIPLINE 10',
    title: 'Media Personality & Public Presentation',
    icon: 'mic',
    description:
      'Engaging public speaker, program hosting, on-camera delivery, and articulate discussion moderation.',
    capabilities: [
      'Event Hosting & Ceremony Emcee',
      'Structured Live Stage Dialogues',
      'Clear, Confident Public Articulation',
    ],
  },
  {
    id: 'disc-11',
    code: 'DISCIPLINE 11',
    title: 'Political & Public Engagement',
    icon: 'how_to_vote',
    description:
      'Factual, non-partisan engagement fostering youth empowerment, public discourse, citizen awareness, and community dialogue.',
    capabilities: [
      'Youth Empowerment Advocacy',
      'Constructive Multi-Stakeholder Dialogue',
      'Civic Consciousness & Fact Awareness',
    ],
  },
  {
    id: 'disc-12',
    code: 'DISCIPLINE 12',
    title: 'Community Volunteer',
    icon: 'handshake',
    description:
      'Active grass-roots volunteerism supporting local initiatives, relief logistics, and community assistance programs.',
    capabilities: [
      'Grassroots Community Organizing',
      'Youth Mentorship & Tech Literacy',
      'Local Crisis Support Logistics',
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Civil Engineering',
    icon: 'home_repair_service',
    skills: [
      { name: 'AutoCAD 2D / Drafting', percentage: 88 },
      { name: 'Structural Concrete & Rebar', percentage: 84 },
      { name: 'Construction Estimation', percentage: 80 },
    ],
  },
  {
    title: 'AI & Technology',
    icon: 'neurology',
    skills: [
      { name: 'Generative AI Pipelines', percentage: 92 },
      { name: 'Prompt Architecture & Logic', percentage: 95 },
      { name: 'AI Photo & Video Models', percentage: 90 },
    ],
  },
  {
    title: 'Creative & Media',
    icon: 'theaters',
    skills: [
      { name: 'Video Editing (Shorts & Reels)', percentage: 89 },
      { name: 'Graphic Design & Brand Assets', percentage: 86 },
      { name: 'Visual Retouching', percentage: 84 },
    ],
  },
  {
    title: 'Web Design & UI',
    icon: 'devices',
    skills: [
      { name: 'Responsive Modern UI/UX', percentage: 87 },
      { name: 'Landing Pages & Portfolios', percentage: 90 },
      { name: 'Tailwind CSS Implementation', percentage: 88 },
    ],
  },
  {
    title: 'Writing & Public Comms',
    icon: 'stylus_note',
    skills: [
      { name: 'Article & Column Writing', percentage: 88 },
      { name: 'Public Speaking & Emceeing', percentage: 85 },
      { name: 'Video Scriptwriting', percentage: 90 },
    ],
  },
  {
    title: 'Information Verification & IT',
    icon: 'fact_check',
    skills: [
      { name: 'Misinformation Tracking', percentage: 93 },
      { name: 'Open Source Research (OSINT)', percentage: 87 },
      { name: 'Technical Productivity Tools', percentage: 91 },
    ],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'srv-1',
    title: 'Civil AutoCAD Drafting',
    icon: 'architecture',
    description: '2D layout drafting, floor plan schematics, and structural documentation concepts.',
    category: 'Civil Engineering',
  },
  {
    id: 'srv-2',
    title: 'Structural Details',
    icon: 'layers',
    description: 'Reinforcement concepts, beam-column schedule drafts, and estimation calculations.',
    category: 'Civil Engineering',
  },
  {
    id: 'srv-3',
    title: 'Prompt Engineering',
    icon: 'terminal',
    description: 'Bespoke prompts for generative image models, video workflows, and LLM text generation.',
    category: 'AI & Computation',
  },
  {
    id: 'srv-4',
    title: 'AI Video Generation',
    icon: 'videocam',
    description: 'Cinematic synthetic scenes, AI avatars, and animated promotional short reels.',
    category: 'AI & Video',
  },
  {
    id: 'srv-5',
    title: 'Short-Form Video Editing',
    icon: 'movie_filter',
    description: 'High-retention editing for TikTok, Reels, and Shorts with dynamic typography.',
    category: 'Creative Media',
  },
  {
    id: 'srv-6',
    title: 'AI Portrait Enhancement',
    icon: 'auto_fix_high',
    description: 'Photorealistic lighting adjustments, synthetic model portraits, and headshot touch-ups.',
    category: 'AI & Photography',
  },
  {
    id: 'srv-7',
    title: 'Digital Graphic Design',
    icon: 'palette',
    description: 'Posters, digital banners, cover arts, and cohesive brand asset kits.',
    category: 'Design & Branding',
  },
  {
    id: 'srv-8',
    title: 'Modern Website Design',
    icon: 'web_asset',
    description: 'Futuristic responsive landing pages, portfolio sites, and dark-mode frontends.',
    category: 'Web Technology',
  },
  {
    id: 'srv-9',
    title: 'Content Writing',
    icon: 'rate_review',
    description: 'Informative articles, video voiceover scripts, and structured social captions.',
    category: 'Content & Editorial',
  },
  {
    id: 'srv-10',
    title: 'Independent Commentary',
    icon: 'history_edu',
    description: 'Thoughtful analytical essays on technology trends and youth community perspectives.',
    category: 'Editorial & Public Opinion',
  },
  {
    id: 'srv-11',
    title: 'Public Presentation',
    icon: 'record_voice_over',
    description: 'Event emceeing, community session moderation, and on-stage public communication.',
    category: 'Media & Public Comms',
  },
  {
    id: 'srv-12',
    title: 'Information Verification',
    icon: 'security',
    description: 'Fact-checking workflows, digital tracking of false rumors, and research reports.',
    category: 'Research & OSINT',
  },
  {
    id: 'srv-13',
    title: 'Community Coordination',
    icon: 'volunteer_activism',
    description: 'Volunteer logistics, youth outreach leadership, and grassroots activity execution.',
    category: 'Civic & Volunteerism',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Foundation Rebar Schedule Concept',
    category: 'civil',
    categoryLabel: 'Civil Eng',
    tag: 'CIVIL_ENG_CONCEPT',
    badge: 'ENGINEERING CONCEPT',
    description:
      'Structural detailing schematic for a multi-span continuous concrete beam with shear reinforcement calculations.',
    detailedNotes:
      'Developed as an academic engineering demonstration at ADUST. Explores bending moments, shear stirrup spacing calculations according to standard concrete code tolerances, and 2D layered AutoCAD construction sheet outputs.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCYvpqMXc52G9F7JaIIdNyDpsy3v56vgM2oK6lxf3Ld924I_K0iCVoKSP3q7zUdueQEOQxjVPNdsLgWXPq9VF31nTZxmwvPDKsXRMT49ix0u0zs3u-uAgDW09e55QsYV9iUsdnhjIeB7o4EnhIcdiYQzYLUf86uUWK154GMrRyJulIGOiXDgsGYgQ2nojLAuABmZx457XWT_flrHVIo4XGM38eAaThw08kTg_Q34oc9sAnOEBiJAkEF',
    tools: ['AutoCAD 2024', 'Structural Analysis', 'Concrete Math'],
  },
  {
    id: 'proj-2',
    title: 'Cybernetic Synthetic Portrait Series',
    category: 'ai',
    categoryLabel: 'AI',
    tag: 'AI_GENERATIVE_SERIES',
    badge: 'AI CONCEPT',
    description:
      'Generative image workflow utilizing complex multi-tier prompts for studio lighting calibration and high-fidelity features.',
    detailedNotes:
      'Advanced prompt engineering testing negative weight matrices, specular rim lighting vectors, camera lens apertures (f/1.4 85mm), and volumetric depth of field in modern diffusion models.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD9Dwp0M95V_jVH7OHy6rJ5WQrPR8xcYS0q8znUM962h_kdjdStoJZTzJHSgL5Lx379G4qJia_NAl9bFuoPnOu8HwVNwmc0OX64Tbtsk4ryvMM6XzOtQJb5rLyWqtzE2RUAZJubO2xIP31tn2uRRInkPj24C3_5xCgWEcNalvr1LAS6UXVVe4CABFbSg5bmSD8DpSyIy4ckX4EMJqY_fE8K46LFzbrFkyZnk22kLAgAx54V1L1QH_56',
    tools: ['Midjourney v6', 'Prompt Engineering', 'Color Grading'],
  },
  {
    id: 'proj-3',
    title: 'Kinetic Typography Social Reel',
    category: 'video',
    categoryLabel: 'Video',
    tag: 'VIDEO_CREATIVE_DEMO',
    badge: 'CREATIVE SHOWCASE',
    description:
      'High-tempo 60-second video demo engineered with synchronized sound design, dynamic captions, and speed ramping.',
    detailedNotes:
      'Engineered for maximum viewer retention with per-word animated kinetic text, whoosh sound fx transitions, and balanced vocal compression suitable for mobile vertical feed playback.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAFMmx1KYVuQgRhtOI4uQVYDNYX5gcHI3SYUqj9EGSy57IPHQgv6mM75nCJ9JLpMxDIREHnqGNbPitQHQHOcrL8l2laXmefBa3xubijJK6xSPpXdIlpeltntrtIsYiMX7r0AdTFfuR_bkXdMwnhOiYvodYL1zYCX-j2jLp5tGZiyictBoLYCSBBjXYJog-rjVcs7c0YpVdwlf2u3T1RpxPq3kvLiPpAdGndhE2Xu6Q0R8eQ7dPGOqib',
    tools: ['Premiere Pro', 'CapCut Pro', 'Audio Synchrony'],
  },
  {
    id: 'proj-4',
    title: 'Tech Summit Visual Identity',
    category: 'design',
    categoryLabel: 'Design',
    tag: 'GRAPHIC_DESIGN_MOCKUP',
    badge: 'DEMO WORK',
    description:
      'Concept brand asset kit containing conference posters, dynamic social badges, and speaker spotlight cards.',
    detailedNotes:
      'High-contrast electric cyan and navy visual brand identity designed for modern technology symposia. Employs micro-linear accents, Space Grotesk headline scaling, and modular printable poster grids.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAHB5FQ58be61aiyo39g-8Km3ZcQlj7wiMpLr_Prg1r9ETrhMSCnMYWJucpTQp9En-g7S-W4d3TPuPdim5kHs-tejByqZEzzq0XSKQSNetDEDvtRaN_cx7JQNOk52nLmFxyzS6Y1shmhv2wqJqffe2T7U-pTMyQxGRsPq_FDaAkmAdR_J75nY0PtnaJvp_XRxNo4YCnMafOfQsYVXbW9dD3nZLnEAgel9zrOvV7zI4V0rXvpbjYAv71',
    tools: ['Photoshop', 'Illustrator', 'Figma'],
  },
  {
    id: 'proj-5',
    title: 'AI Analytics SaaS Dashboard',
    category: 'website',
    categoryLabel: 'Website',
    tag: 'WEB_DESIGN_UI',
    badge: 'DEMO WORK',
    description:
      'Responsive dark-mode UI design concept featuring Glassmorphism, metric HUD cards, and fluid grid layouts.',
    detailedNotes:
      'Clean interface framework featuring 12-column responsive layout, live metrics telemetry styling, and subtle cyan laser border highlights configured with Tailwind utility classes.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDzlh1xEZCVEjFTmL1F9-S1Ow9cEvKbWRaMkJpi4IfbAdEbIuaDd1eDoJr63A2DFFix0LEmT2K_WgoKRztQ-2jx0OVB5uQLTGMfo6BMOnJyQ1zEczpzok97kfdBXzX0CjrnKhAUBXXCs5mWi4N0F73s53TzU6wxYaZylIsPHbFwN32rwtMYjFzMENdAoJlSPYFkOsC0tG5VK_5WMptZSJwZ7XVlMKbInBAauJFozjLIzPLguiSmY5jY',
    tools: ['React', 'Tailwind CSS', 'UI/UX Design'],
  },
  {
    id: 'proj-6',
    title: 'Youth & Artificial Intelligence Essay',
    category: 'writing',
    categoryLabel: 'Writing',
    tag: 'INDEPENDENT_ESSAY',
    badge: 'CREATIVE SHOWCASE',
    description:
      'An independent analytical commentary analyzing how upcoming engineers in Bangladesh can integrate generative technology.',
    detailedNotes:
      'A structured 1,800-word column examining technological leapfrogging, practical generative automation for undergraduate civil engineers, and constructive approaches to internet literacy.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBe9_DZiQoEX-ABu5el0ui6l5Jqn8uxd7YtpnrnADYsqrzB_gyq5HQ-mocAUgThWp-EhJnfDUaUpXxn5T1G26cggVm_U8Gz57YBAuxCtnHvgv3Q4QVeFOf0Q9nJ791wpWKL7jKL-Y4qtXVn48a-d5-3alzb49SBBLiHijJRIKE1iizdwmysJe8Q2cmk0Zr-oErDPlIH3kFx4H6PM_JI9rigrXe6eSa73J7hlz6xsXR12c3lq4h2iazP',
    tools: ['Editorial Research', 'Analytical Essay', 'Public Policy'],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'AI Cinematic Street Perspective',
    category: 'Cinematic Lighting',
    tag: 'AI_PHOTOGRAPHY',
    description:
      'Generative camera framing demo with anamorphic lens flare simulation, wet pavement reflections, and volumetric cyan fog.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCVvBtrk4N48KQZYosXmFxky4ZVwW8o2mFZLbtuXWUw9y0HwobvBROnXW-ZWxhdFElnhRiXAKqUrsx-F4hSw0NY5amgjlvPY6QAxP6cwDIlCBW1-M0IEcq9fWAHdr1oEdJ7T3SGQpHiBVTQ2VK6DzipoUagTDuBxQT1oznHfG3mpzJrODx_wLgNUyhiAArX1he-5K6r0CQFB63UZLmffSNh9A-aDoPTioE7jshJl2MxYfBQKU3-_4ah',
  },
  {
    id: 'gal-2',
    title: 'Synthetic Studio Portrait',
    category: 'Studio Portrait',
    tag: 'AI_PORTRAIT',
    description:
      'AI portrait study focused on 3-point softbox balance, hyper-detailed skin texture, realistic catchlights, and depth of field.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB-txsBTSzlI14e9Xuk86qxxFC8D2LtfrHdQEQDcyQqhbTDZtbbxiWvoCYJPowKIO35E2OwMk9iuc7TsORNZz7zsV8EvIL8J3EW7PVcq-oOmD3uIN-SmIndoFKe9l_-p8HUx2ATZa7qtmcnG7S19HfnO0Pp0uDuau4WgLGFu-9bkCaQzBTi2geNbrNwF33WUhhu0omh5Z1XK5sLdG8wCtaUIuanoB6_9XlwY6qVACjH_PgrLQSdho918EqxKjDoSUvYHg',
  },
  {
    id: 'gal-3',
    title: 'AI Motion Video Sequence',
    category: 'Video Concept',
    tag: 'AI_VIDEO_CONCEPT',
    description:
      'Synthetic motion synthesis sequence generated via text-to-video pipeline simulating a high-velocity futuristic hyperloop tunnel.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAHSwHMYPX1gLtxbiQfdjQWPs7S4GluCF5KS833XtN4_moydhV8VK_OQzhhX-Osz77JDIKSZNVdnVJCzLiOBh6_6pwJPV7OqsP7aiPw7SyimoG4Vk51PHE11yv-VYdoMO0qzUcCqwmGEMOmBy9IpZ_pLBwl6SvdTW5-lYOYUW1Fwuu2Jyaar1x6v0jBIer1CwjDR-mawcrxP9qoBaNthbKfgbHDl8-PjgmxbrZG5d0LBAYMAUdl2lHj',
    isVideo: true,
    duration: '00:15 Demo',
  },
  {
    id: 'gal-4',
    title: 'Concrete Architecture AI Synthesis',
    category: 'Structural Form',
    tag: 'AI_ARCHITECTURE',
    description:
      'Architectural concept of brutalist concrete forms merging with glowing biometric light channels and parametric structural cantilevers.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAArm47bw_ewKJtu92To2Zkh2dLbK2AZiFel8sGcqvIM3RRIQ6omyX6hFfkPpdUUkMa9x1wFKAQZHLVoR1AtbAJAp4WbmCfyRTscgWFRhfNx8SpqD4EJbSH-OnhBnr-gl8OtdoxaYNL_K3-1qbl-2dF1CFHyyUH6D-Z3pC0pq8qgEgFgd1JsCBAYGKLICUXesvV1blWbIS1lwtcfUu9bm6BpTbPlawLG5DY87MD4sQOpYzBkMDFhb__',
  },
];

export const EDUCATION_TIMELINE: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'B.Sc. in Civil Engineering',
    institution: 'Atish Dipankar University of Science and Technology (ADUST)',
    meta: '11TH BATCH • FINAL YEAR / ONGOING',
    status: 'CURRENT',
    icon: 'school',
  },
  {
    id: 'edu-2',
    degree: 'Diploma in Civil Engineering',
    institution: 'Sirajganj Polytechnic Institute',
    meta: 'PASSING YEAR: 2023',
    status: 'COMPLETED',
    icon: 'architecture',
  },
  {
    id: 'edu-3',
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Rajab Ali Memorial Science College',
    meta: 'PASSING YEAR: 2020 • RAJSHAHI BOARD',
    status: 'COMPLETED',
    icon: 'menu_book',
  },
  {
    id: 'edu-4',
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Pritilata High School',
    meta: 'PASSING YEAR: 2018 • RAJSHAHI BOARD',
    status: 'COMPLETED',
    icon: 'history_edu',
  },
];
