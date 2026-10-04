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
      "Unity Developer na Dazain. Bacharel em Jogos Digitais pela PUC-SP.",
    ctaContact: "Fale comigo",
    ctaCv: "Baixar CV",
  },
  about: {
    eyebrow: "Sobre mim",
    title: "Jogos para marcas e eventos",
    lead:
      "Game developer com um ano de experiência profissional em serious games e advergames.",
    body: [
      "Desenvolvo jogos e ativações interativas para eventos, do protótipo à entrega. Os projetos têm prazo definido e precisam se manter estáveis diante do público.",
      "Cuido da arquitetura, da implementação e da otimização. O jogo precisa rodar bem no equipamento do cliente, e o projeto precisa conseguir crescer com o mínimo de retrabalho.",
      "Trabalho com Unity e Unreal Engine em mobile, desktop e VR, e me adapto à plataforma que cada projeto exige.",
    ],
    focus: [
      "Advergames",
      "Serious Games",
      "Unity",
      "Unreal Engine",
      "Mobile, Desktop, VR",
      "C#",
      "Inglês B2",
    ],
  },
  resume: {
    eyebrow: "Currículo",
    title: "Experiência, formação e habilidades",
    lead:
      "Desenvolvimento de jogos e ativações interativas, com formação em Jogos Digitais pela PUC-SP.",
    experienceTitle: "Experiência",
    educationTitle: "Formação e cursos",
    skillsTitle: "Habilidades",
    experience: [
      {
        role: "Unity Developer",
        company: "Dazain, jogos e ativações interativas",
        period: "Jun 2025 a atual",
        description:
          "Desenvolvo jogos e ativações interativas para eventos, da prototipagem à entrega. Implemento gameplay, interface, integrações e ferramentas em C# e Unity, adapto os projetos às plataformas necessárias e cuido de desempenho, testes e publicação.",
      },
      {
        role: "Gameplay Programmer",
        company: "Slimesivos, projeto acadêmico em C# e Unity",
        period: "Fev 2024 a jun 2024",
        description:
          "Controller em Rigidbody2D com wall stick, wall slide, wall jump e double jump. Input, colisão, movimento, animação e VFX/SFX se comunicam por Unity Events.",
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
    lead: "Jogos da graduação e do trabalho profissional.",
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
      "São Paulo, SP. Aberto a oportunidades em desenvolvimento de jogos.",
    emailLabel: "Email",
    phoneLabel: "Telefone / WhatsApp",
    socialLabel: "Redes",
  },
  footer: {
    rights: "Todos os direitos reservados.",
  },
};
