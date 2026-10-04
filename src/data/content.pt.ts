import type { SiteContent } from "./types";

export const contentPt: SiteContent = {
  nav: {
    home: "Início",
    about: "Sobre",
    resume: "Currículo",
    portfolio: "Portfólio",
    contact: "Contato",
  },
  hero: {
    greeting: "Olá, eu sou",
    name: "Kayke Celli",
    title: "Gameplay Programmer",
    subtitle:
      "Desenvolvedor de jogos e programador de gameplay. Unity Developer na Dazain. Bacharel em Jogos Digitais pela PUC-SP.",
    ctaContact: "Fale comigo",
    ctaCv: "Baixar CV",
  },
  about: {
    eyebrow: "Sobre mim",
    title: "Gameplay, prototipagem e entrega",
    lead:
      "Profissional iniciante em desenvolvimento de jogos, com foco em sistemas de gameplay e prototipagem de mecânicas.",
    body: [
      "Atuo na implementação de gameplay e na criação de experiências interativas com C# e Unity, com experiência prática também em outras engines.",
      "Já participei de equipes criativas contribuindo com soluções para jogos imersivos. Destaco-me pelo aprendizado contínuo, organização e paixão por inovação no setor de jogos.",
    ],
    focus: [
      "C#",
      "Unity",
      "Unreal Engine",
      "Git",
      "Gameplay",
      "Inglês B2",
    ],
  },
  resume: {
    eyebrow: "Currículo",
    title: "Experiência, formação e skills",
    lead:
      "Desenvolvimento de jogos e ativações interativas, com base acadêmica em Jogos Digitais na PUC-SP.",
    experienceTitle: "Experiência",
    educationTitle: "Formação e cursos",
    skillsTitle: "Skills",
    experience: [
      {
        role: "Unity Developer",
        company: "Dazain — Desenvolvimento de Jogos e Ativações Interativas",
        period: "Jun 2025 — Atual",
        description:
          "Responsável pelo desenvolvimento completo de jogos e ativações interativas para eventos, da prototipagem à entrega. Crio sistemas de gameplay, UI, integrações e ferramentas em C# e Unity; adapto projetos para diferentes plataformas com foco em desempenho; e gerencio o ciclo completo (arquitetura, implementação, testes, otimização e entrega).",
      },
      {
        role: "Gameplay Programmer",
        company: "Slimesivos — Projeto Acadêmico (C#, Unity)",
        period: "Fev 2024 — Jun 2024",
        description:
          "Controller Rigidbody2D com wall-stick/slide, wall jump e double jump. Arquitetura desacoplada via Unity Events: New Input System, colisão, movimento, animação e VFX/SFX sincronizados sem acoplamento direto.",
      },
    ],
    education: [
      {
        degree: "Bacharelado em Jogos Digitais",
        school: "PUC-SP",
        period: "Dezembro de 2025",
        detail: "Formação em desenvolvimento de jogos, com ênfase em gameplay e engines.",
      },
      {
        degree: "Start GameDev",
        school: "CSJ Academy",
        period: "Abril de 2024",
        detail: "Curso de introdução e qualificação em desenvolvimento de jogos.",
      },
    ],
    skills: [
      { name: "C#", level: 85 },
      { name: "Unity", level: 85 },
      { name: "Unreal Engine", level: 60 },
      { name: "Git", level: 75 },
      { name: "Trello / gestão de projetos", level: 70 },
      { name: "Inglês (B2)", level: 70 },
      { name: "Trabalho em equipe", level: 85 },
      { name: "Resolução de problemas", level: 80 },
    ],
  },
  portfolio: {
    eyebrow: "Portfólio",
    title: "Projetos profissionais e acadêmicos",
    lead: "Projetos acadêmicos e profissionais. Os cards profissionais ainda são placeholders.",
    filterAll: "Todos",
    filterAcademic: "Acadêmicos",
    filterProfessional: "Profissionais",
    roleLabel: "Função",
    timelineLabel: "Duração",
    contributionsLabel: "Contribuições",
    linksLabel: "Links",
    galleryPrev: "Imagem anterior",
    galleryNext: "Próxima imagem",
    galleryClose: "Fechar",
  },
  contact: {
    eyebrow: "Contato",
    title: "Vamos conversar",
    lead:
      "São Paulo — SP. Aberto a oportunidades em desenvolvimento de jogos e gameplay programming.",
    emailLabel: "Email",
    phoneLabel: "Telefone / WhatsApp",
    socialLabel: "Redes",
  },
  footer: {
    rights: "Todos os direitos reservados.",
  },
};
