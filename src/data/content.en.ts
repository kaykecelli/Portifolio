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
      "Game Developer at Dazain. Bachelor in Digital Games from PUC-SP.",
    ctaContact: "Get in touch",
    ctaCv: "Download CV",
  },
  about: {
    eyebrow: "About me",
    title: "Games for brands and events",
    lead:
      "Game developer with over a year of professional experience in serious games, advergames, and VR.",
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
    educationTitle: "Education and courses",
    skillsTitle: "Skills",
    experience: [
      {
        role: "Game Developer",
        company: "Dazain, games and interactive activations",
        period: "Jun 2025 to present",
        description:
          "I built a modular quiz system in Unity from scratch, with JSON driven content and a local database for offline use, reused across two years of events and in versions for more than 7 brands. I develop complete Unity games on my own, on deadlines as short as 20 days, for Android, Windows, and touchscreen kiosks, with hardware integration such as wheels, pedals, and physical buttons. I was the sole programmer of two VR experiences for Meta Quest 3 in Unreal Engine 5, using Blueprints.",
      },
      {
        role: "Lead Gameplay Programmer",
        company: "The Adventurous Metal Craig, PUC-SP thesis in C# and Unity",
        period: "Feb 2025 to Nov 2025",
        description:
          "Player architecture with a Hierarchical State Machine and Factory, keeping locomotion and combat in isolated states. Data in Scriptable Objects, event based communication between systems, and object pooling to keep performance steady.",
      },
      {
        role: "Gameplay Programmer",
        company: "Slimesivos, mobile academic project in C# and Unity",
        period: "Feb 2024 to Jun 2024",
        description:
          "Rigidbody2D controller with touch input (tap and swipe) through the New Input System. Input, collision, movement, animation, and VFX/SFX communicate through Unity Events.",
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
      { name: "Unreal Engine (Blueprints)", level: 60 },
      { name: "Local persistence and data (JSON)", level: 75 },
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
    responsibilitiesLabel: "What I did",
    linksLabel: "Links",
    eventLinkLabel: "About the event",
    backLabel: "Back to portfolio",
    previousProjectLabel: "Previous project",
    nextProjectLabel: "Next project",
    notFound: "Project not found.",
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
