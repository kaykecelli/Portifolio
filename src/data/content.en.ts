import type { SiteContent } from "./types";

export const contentEn: SiteContent = {
  nav: {
    home: "Home",
    about: "About",
    resume: "Resume",
    portfolio: "Portfolio",
    contact: "Contact",
  },
  hero: {
    greeting: "Hi, I'm",
    name: "Kayke Celli",
    title: "Game Developer",
    subtitle:
      "Game developer. Unity Developer at Dazain. Bachelor in Digital Games from PUC-SP.",
    ctaContact: "Get in touch",
    ctaCv: "Download CV",
  },
  about: {
    eyebrow: "About me",
    title: "From idea to a game running live at the event",
    lead:
      "Game developer with 1 year of professional experience, turning brand briefs into games and interactive experiences that genuinely engage people.",
    body: [
      "I currently work on serious games and advergames, building gamified solutions and immersive experiences for events — projects with fixed deadlines, real audiences, and zero room for failure on activation day.",
      "I own projects end to end: rapid prototyping to validate the idea, an architecture that lets the project grow without rework, and optimization so it runs smoothly on the client's hardware.",
      "I've shipped on mobile, desktop, and VR with both Unity and Unreal Engine — so I adapt to whatever platform and engine the project needs, without a learning curve holding the team back.",
    ],
    focus: [
      "Advergames",
      "Serious Games",
      "Unity",
      "Unreal Engine",
      "Mobile · Desktop · VR",
      "C#",
      "English B2",
    ],
  },
  resume: {
    eyebrow: "Resume",
    title: "Experience, education & skills",
    lead:
      "Game and interactive activation development, backed by a Digital Games degree from PUC-SP.",
    experienceTitle: "Experience",
    educationTitle: "Education & courses",
    skillsTitle: "Skills",
    experience: [
      {
        role: "Unity Developer",
        company: "Dazain — Games & Interactive Activations",
        period: "Jun 2025 — Present",
        description:
          "Own end-to-end development of games and interactive activations for events, from prototyping to final delivery. Build gameplay systems, UI, integrations, and interactive tools in C# and Unity; adapt projects across platforms with performance in mind; and manage the full cycle (architecture, implementation, testing, optimization, and shipping).",
      },
      {
        role: "Gameplay Programmer",
        company: "Slimesivos — Academic project (C#, Unity)",
        period: "Feb 2024 — Jun 2024",
        description:
          "Rigidbody2D controller with wall-stick/slide, wall jump, and double jump. Decoupled architecture via Unity Events: New Input System, collision, movement, animation, and VFX/SFX synced without hard coupling.",
      },
    ],
    education: [
      {
        degree: "Bachelor in Digital Games",
        school: "PUC-SP",
        period: "December 2025",
        detail: "Game development degree with emphasis on gameplay and engines.",
      },
      {
        degree: "Start GameDev",
        school: "CSJ Academy",
        period: "April 2024",
        detail: "Introductory qualification course in game development.",
      },
    ],
    skills: [
      { name: "C#", level: 85 },
      { name: "Unity", level: 85 },
      { name: "Unreal Engine", level: 60 },
      { name: "Git", level: 75 },
      { name: "Trello / project management", level: 70 },
      { name: "English (B2)", level: 70 },
      { name: "Teamwork", level: 85 },
      { name: "Problem solving", level: 80 },
    ],
  },
  portfolio: {
    eyebrow: "Portfolio",
    title: "Professional & academic projects",
    lead: "Academic and professional projects. Professional cards are still placeholders.",
    filterAll: "All",
    filterAcademic: "Academic",
    filterProfessional: "Professional",
    roleLabel: "Role",
    timelineLabel: "Timeline",
    contributionsLabel: "Key contributions",
    linksLabel: "Links",
    galleryPrev: "Previous image",
    galleryNext: "Next image",
    galleryClose: "Close",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's talk",
    lead:
      "Based in São Paulo, SP. Open to opportunities in game development.",
    emailLabel: "Email",
    phoneLabel: "Phone / WhatsApp",
    socialLabel: "Social",
  },
  footer: {
    rights: "All rights reserved.",
  },
};
