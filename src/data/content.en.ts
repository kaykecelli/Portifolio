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
      "Unity Developer at Dazain. Bachelor in Digital Games from PUC-SP.",
    ctaContact: "Get in touch",
    ctaCv: "Download CV",
  },
  about: {
    eyebrow: "About me",
    title: "Games for brands and events",
    lead:
      "Game developer with one year of professional experience in serious games and advergames.",
    body: [
      "I build games and interactive activations for events, from the first prototype to delivery. The projects run on a fixed schedule and need to stay stable in front of a live audience.",
      "I handle architecture, implementation, and optimization. The game has to run well on the client's hardware, and the project has to be able to grow with as little rework as possible.",
      "I work in Unity and Unreal Engine on mobile, desktop, and VR, and I adapt to the platform each project requires.",
    ],
    focus: [
      "Advergames",
      "Serious Games",
      "Unity",
      "Unreal Engine",
      "Mobile, Desktop, VR",
      "C#",
      "English B2",
    ],
  },
  resume: {
    eyebrow: "Resume",
    title: "Experience, education, and skills",
    lead:
      "Game and interactive activation development, backed by a Digital Games degree from PUC-SP.",
    experienceTitle: "Experience",
    educationTitle: "Education & courses",
    skillsTitle: "Skills",
    experience: [
      {
        role: "Unity Developer",
        company: "Dazain, games and interactive activations",
        period: "Jun 2025 to present",
        description:
          "I develop games and interactive activations for events, from prototyping to delivery. I build gameplay, UI, integrations, and tools in C# and Unity, adapt each project to the required platforms, and take care of performance, testing, and release.",
      },
      {
        role: "Gameplay Programmer",
        company: "Slimesivos, academic project in C# and Unity",
        period: "Feb 2024 to Jun 2024",
        description:
          "Rigidbody2D controller with wall stick, wall slide, wall jump, and double jump. Input, collision, movement, animation, and VFX/SFX communicate through Unity Events.",
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
    title: "Professional and academic projects",
    lead: "Games from my degree and from professional work.",
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
