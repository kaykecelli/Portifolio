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
    title: "Game Developer",
    subtitle:
      "Desenvolvedor de jogos. Unity Developer na Dazain. Bacharel em Jogos Digitais pela PUC-SP.",
    ctaContact: "Fale comigo",
    ctaCv: "Baixar CV",
  },
  about: {
    eyebrow: "Sobre mim",
    title: "Da ideia ao jogo rodando no evento",
    lead:
      "Game developer com 1 ano de experiência profissional, transformando briefings de marcas em jogos e experiências interativas que engajam pessoas de verdade.",
    body: [
      "Hoje atuo com serious games e advergames, criando soluções gamificadas e experiências imersivas para eventos — projetos com prazo fixo, público real e zero margem para falhar na hora da ativação.",
      "Assumo o projeto de ponta a ponta: prototipagem rápida para validar a ideia, arquitetura pensada para o projeto crescer sem retrabalho e otimização para rodar liso no hardware do cliente.",
      "Já entreguei em mobile, desktop e VR, com Unity e Unreal Engine — então me adapto à plataforma e à engine que o projeto pedir, sem curva de aprendizado travando o time.",
    ],
    focus: [
      "Advergames",
      "Serious Games",
      "Unity",
      "Unreal Engine",
      "Mobile · Desktop · VR",
      "C#",
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
      "São Paulo — SP. Aberto a oportunidades em desenvolvimento de jogos.",
    emailLabel: "Email",
    phoneLabel: "Telefone / WhatsApp",
    socialLabel: "Redes",
  },
  footer: {
    rights: "Todos os direitos reservados.",
  },
};
