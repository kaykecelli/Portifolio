export type Lang = "pt" | "en";

export type SiteContent = {
  nav: {
    home: string;
    about: string;
    resume: string;
    portfolio: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    subtitle: string;
    ctaContact: string;
    ctaCv: string;
  };
  about: {
    eyebrow: string;
    title: string;
    lead: string;
    body: string[];
    focus: string[];
  };
  resume: {
    eyebrow: string;
    title: string;
    lead: string;
    experienceTitle: string;
    educationTitle: string;
    skillsTitle: string;
    experience: Array<{
      role: string;
      company: string;
      period: string;
      description: string;
    }>;
    education: Array<{
      degree: string;
      school: string;
      period: string;
      detail?: string;
    }>;
    skills: Array<{
      name: string;
      level: number;
    }>;
  };
  portfolio: {
    eyebrow: string;
    title: string;
    lead: string;
    filterAll: string;
    filterAcademic: string;
    filterProfessional: string;
    roleLabel: string;
    timelineLabel: string;
    contributionsLabel: string;
    linksLabel: string;
    galleryPrev: string;
    galleryNext: string;
    galleryClose: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    emailLabel: string;
    phoneLabel: string;
    socialLabel: string;
  };
  footer: {
    rights: string;
  };
};
