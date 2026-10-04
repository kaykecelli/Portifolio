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
      "Game Developer na Dazain. Bacharel em Jogos Digitais pela PUC-SP.",
    ctaContact: "Fale comigo",
    ctaCv: "Baixar CV",
  },
  about: {
    eyebrow: "Sobre mim",
    title: "Jogos para marcas e eventos",
    lead:
      "Game developer com mais de um ano de experiência profissional em serious games, advergames e VR.",
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
        role: "Game Developer",
        company: "Dazain, jogos e ativações interativas",
        period: "Jun 2025 a atual",
        description:
          "Criei do zero um sistema modular de quiz em Unity, com conteúdo carregado por JSON e banco de dados local para uso offline, reaproveitado em dois anos de evento e nas versões de mais de 7 marcas. Desenvolvo sozinho jogos completos em Unity, com prazos de até 20 dias, para Android, Windows e totens touch, com integração de hardware como volantes, pedais e botões físicos. Fui o único programador de duas experiências em VR para Meta Quest 3 em Unreal Engine 5, usando Blueprints.",
      },
      {
        role: "Lead Gameplay Programmer",
        company: "The Adventurous Metal Craig, TCC da PUC-SP em C# e Unity",
        period: "Fev 2025 a nov 2025",
        description:
          "Arquitetura do player com Hierarchical State Machine e Factory, deixando locomoção e combate em estados isolados. Dados em Scriptable Objects, comunicação entre sistemas por eventos e object pooling para manter o desempenho.",
      },
      {
        role: "Gameplay Programmer",
        company: "Slimesivos, projeto acadêmico mobile em C# e Unity",
        period: "Fev 2024 a jun 2024",
        description:
          "Controller em Rigidbody2D com input touch (tap e swipe) pelo New Input System. Input, colisão, movimento, animação e VFX/SFX se comunicam por Unity Events.",
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
      { name: "Unreal Engine (Blueprints)", level: 60 },
      { name: "Persistência local e dados (JSON)", level: 75 },
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
    responsibilitiesLabel: "O que eu fiz",
    linksLabel: "Links",
    eventLinkLabel: "Sobre o evento",
    backLabel: "Voltar ao portfólio",
    previousProjectLabel: "Projeto anterior",
    nextProjectLabel: "Próximo projeto",
    notFound: "Projeto não encontrado.",
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
