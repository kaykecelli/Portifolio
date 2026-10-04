export type ProjectCategory = "academic" | "professional";

export type ProjectFact = {
  label: string;
  value: string;
};

export type ProjectSection = {
  title: string;
  paragraphs: string[];
};

export type ProjectCopy = {
  title: string;
  /** Shown on the card next to the period, e.g. the studio or client. */
  studio: string;
  period: string;
  headline: string;
  summary: string;
  facts: ProjectFact[];
  responsibilities: string[];
  sections?: ProjectSection[];
};

export type Project = {
  id: string;
  category: ProjectCategory;
  /** Year and month the project ended (YYYY-MM), used to sort newest first. */
  endDate: string;
  cover: string;
  /** CSS object-position for covers whose focus is off center, e.g. portrait key art. */
  coverPosition?: string;
  /** Gallery media (images, gifs, or videos) shown on the project page. */
  media: string[];
  links?: {
    github?: string;
    itch?: string;
    event?: string;
  };
  pt: ProjectCopy;
  en: ProjectCopy;
};

export const projects: Project[] = [
  {
    id: "prova-de-fogo",
    category: "professional",
    endDate: "2026-10",
    cover: "/projects/fisp/cover.jpg",
    media: ["/projects/fisp/gameplay-01.mp4", "/projects/fisp/gameplay-02.mp4"],
    links: {
      event: "https://feirafisp.com.br/",
    },
    pt: {
      title: "Prova de Fogo",
      studio: "Dazain",
      period: "Set 2026 a Out 2026",
      headline: "Experiência em VR que coloca os EPIs da Kevlar e da Nomex à prova.",
      summary:
        "Experiência em realidade virtual criada para a Kevlar e a Nomex apresentarem seus produtos na FISP 2026. O visitante recebe um chamado de emergência, escolhe o equipamento que vai vestir e enfrenta situações de perigo, como um incêndio em uma plataforma e uma falha em uma subestação. As luvas e os macacões das marcas mostram, na prática, como protegem quem está em campo.",
      facts: [
        { label: "Função", value: "Único programador, com a equipe de arte do estúdio" },
        { label: "Estúdio", value: "Dazain" },
        { label: "Clientes", value: "Kevlar e Nomex" },
        { label: "Evento", value: "FISP 2026" },
        { label: "Período", value: "16 de setembro a 5 de outubro de 2026" },
        { label: "Plataforma", value: "Meta Quest 3, realidade virtual" },
        { label: "Engine", value: "Unreal Engine 5.7, Blueprints e C++" },
      ],
      responsibilities: [
        "Programei toda a experiência, trabalhando junto com a equipe de arte do estúdio nos modelos, cenários e materiais.",
        "Estruturei o fluxo da sessão: hub na garagem, alerta com a missão, escolha do equipamento, missão e retorno ao hub, com o estado mantido entre os levels.",
        "Criei as interações em VR, como alavanca, válvula, disjuntor, conexão de cabos, extintor e vestir luvas e macacões.",
        "Implementei as missões de incêndio na plataforma e de falha na subestação, com fogo, fumaça, vazamento de gás e arco elétrico.",
        "Integrei a dublagem, a escolha de idioma entre português e inglês e os ajustes pedidos pelo cliente até a entrega.",
      ],
      sections: [
        {
          title: "Como funciona",
          paragraphs: [
            "A experiência começa em uma garagem, onde o visitante escolhe o idioma e recebe um alerta, como \"Fogo na plataforma\" ou \"Falha na subestação\", pedindo que vista o EPI certo para a situação. Na sala de equipamentos ele escolhe entre luvas e macacões e segue para a missão.",
            "Em cada missão o jogador precisa agir em meio ao perigo: destravar uma válvula emperrada no meio das chamas, desligar disjuntores e reconectar cabos em uma subestação com arco elétrico. O equipamento das marcas é o que mantém o jogador protegido, e esse é o ponto central da demonstração.",
          ],
        },
        {
          title: "O evento",
          paragraphs: [
            "A FISP, Feira Internacional de Segurança e Proteção, é o maior evento de segurança do trabalho e combate a incêndios da América Latina. A 25ª edição foi realizada de 6 a 8 de outubro de 2026 no São Paulo Expo, com cerca de 800 marcas expositoras e expectativa de mais de 60 mil profissionais de 48 países.",
          ],
        },
        {
          title: "Desafios",
          paragraphs: [
            "O maior desafio foi conectar as várias cenas, do hub às missões e de volta, mantendo a sessão consistente em VR. O outro foi o visual: os efeitos de fogo, fumaça e arco elétrico precisavam ser convincentes para que a proteção do equipamento fizesse sentido para quem estava com o headset.",
          ],
        },
      ],
    },
    en: {
      title: "Trial by Fire",
      studio: "Dazain",
      period: "Sep 2026 to Oct 2026",
      headline: "VR experience that puts Kevlar and Nomex protective gear to the test.",
      summary:
        "Virtual reality experience built for Kevlar and Nomex to showcase their products at FISP 2026. Visitors receive an emergency call, choose the gear they will wear, and face dangerous situations such as a fire on a platform and a failure in an electrical substation. The brands' gloves and coveralls show, in practice, how they protect people in the field.",
      facts: [
        { label: "Role", value: "Sole programmer, with the studio's art team" },
        { label: "Studio", value: "Dazain" },
        { label: "Clients", value: "Kevlar and Nomex" },
        { label: "Event", value: "FISP 2026" },
        { label: "Timeline", value: "September 16 to October 5, 2026" },
        { label: "Platform", value: "Meta Quest 3, virtual reality" },
        { label: "Engine", value: "Unreal Engine 5.7, Blueprints and C++" },
      ],
      responsibilities: [
        "I programmed the entire experience, working with the studio's art team on models, environments, and materials.",
        "I structured the session flow: a garage hub, a mission alert, gear selection, the mission, and the return to the hub, with state kept across levels.",
        "I built the VR interactions, including a lever, valve, circuit breaker, cable connections, fire extinguisher, and putting on gloves and coveralls.",
        "I implemented the platform fire and substation failure missions, with fire, smoke, a gas leak, and an electric arc.",
        "I integrated the voice over, language selection between Portuguese and English, and the client's change requests through delivery.",
      ],
      sections: [
        {
          title: "How it plays",
          paragraphs: [
            "The experience starts in a garage, where the visitor picks a language and receives an alert, such as \"Fire on the platform\" or \"Substation failure\", asking them to put on the right protective gear for the situation. In the gear room they choose between gloves and coveralls and head out to the mission.",
            "Each mission asks the player to act in the middle of danger: unjam a stuck valve surrounded by flames, switch off breakers, and reconnect cables in a substation with an electric arc. The brands' gear is what keeps the player protected, and that is the core of the demonstration.",
          ],
        },
        {
          title: "The event",
          paragraphs: [
            "FISP, the International Safety and Protection Fair, is the largest occupational safety and firefighting event in Latin America. The 25th edition took place from October 6 to 8, 2026 at São Paulo Expo, with around 800 exhibiting brands and more than 60,000 professionals from 48 countries expected.",
          ],
        },
        {
          title: "Challenges",
          paragraphs: [
            "The biggest challenge was connecting the many scenes, from the hub to the missions and back, while keeping the session consistent in VR. The other was the visuals: the fire, smoke, and electric arc effects had to be convincing so the protection offered by the gear made sense to whoever was wearing the headset.",
          ],
        },
      ],
    },
  },
  {
    id: "oil-green",
    category: "professional",
    endDate: "2026-09",
    cover: "/projects/oil-green/cover.jpg",
    media: ["/projects/oil-green/gameplay-01.mp4", "/projects/oil-green/gameplay-02.mp4"],
    pt: {
      title: "Oil Green",
      studio: "Dazain",
      period: "Ago 2026 a Set 2026",
      headline: "Treinamento em VR para resolver uma pane em uma plataforma de petróleo.",
      summary:
        "Experiência em realidade virtual criada para a Green Oil demonstrar, em uma feira internacional, como funciona a solução de uma pane em uma plataforma de petróleo. O visitante chega de helicóptero, desembarca na plataforma e segue, passo a passo, o procedimento para controlar a falha antes que o tempo acabe.",
      facts: [
        { label: "Função", value: "Único programador, com a equipe de arte do estúdio" },
        { label: "Estúdio", value: "Dazain" },
        { label: "Cliente", value: "Green Oil" },
        { label: "Evento", value: "Feira internacional de petróleo e gás no Rio de Janeiro, setembro de 2026" },
        { label: "Período", value: "3 de agosto a 18 de setembro de 2026" },
        { label: "Plataforma", value: "Meta Quest 3, realidade virtual" },
        { label: "Engine", value: "Unreal Engine 5.7, Blueprints e C++" },
      ],
      responsibilities: [
        "Programei toda a experiência, trabalhando junto com a equipe de arte do estúdio nos cenários, efeitos, áudios e textos.",
        "Criei a abertura em helicóptero: embarque, voo de 360 graus ao redor da plataforma e pouso conduzido pelo piloto.",
        "Implementei o procedimento da pane em etapas guiadas por um tablet, com alavanca, manivela, botões, painel de controle e monitores de parede.",
        "Desenvolvi o cronômetro, as telas de derrota e de resultados, a escolha de idioma e os tutoriais de interação.",
        "Integrei o oceano, a fumaça e os demais efeitos que ambientam a plataforma.",
      ],
      sections: [
        {
          title: "Como funciona",
          paragraphs: [
            "A sessão começa com a escolha do idioma e um tutorial rápido. Em seguida o visitante embarca no helicóptero, sobrevoa a plataforma e pousa nela. Lá dentro, um tablet apresenta cada etapa do procedimento, e o jogador precisa acionar alavancas, girar manivelas, apertar botões e acompanhar os monitores para resolver a pane.",
            "Tudo acontece contra o relógio: se o tempo acabar, a falha sai do controle. Ao final, a tela de resultados mostra o desempenho do jogador.",
          ],
        },
        {
          title: "Desafios",
          paragraphs: [
            "Este foi o meu primeiro projeto em realidade virtual e a primeira vez usando a Unreal Engine 5 para VR. Precisei aprender, durante o próprio projeto, como pensar interações físicas com as mãos, conforto do jogador e desempenho no Meta Quest 3, mantendo o prazo da feira.",
          ],
        },
      ],
    },
    en: {
      title: "Oil Green",
      studio: "Dazain",
      period: "Aug 2026 to Sep 2026",
      headline: "VR training for handling a failure on an oil platform.",
      summary:
        "Virtual reality experience built for Green Oil to demonstrate, at an international fair, how a failure on an oil platform is resolved. Visitors arrive by helicopter, land on the platform, and follow the procedure step by step to bring the failure under control before time runs out.",
      facts: [
        { label: "Role", value: "Sole programmer, with the studio's art team" },
        { label: "Studio", value: "Dazain" },
        { label: "Client", value: "Green Oil" },
        { label: "Event", value: "International oil and gas fair in Rio de Janeiro, September 2026" },
        { label: "Timeline", value: "August 3 to September 18, 2026" },
        { label: "Platform", value: "Meta Quest 3, virtual reality" },
        { label: "Engine", value: "Unreal Engine 5.7, Blueprints and C++" },
      ],
      responsibilities: [
        "I programmed the entire experience, working with the studio's art team on environments, effects, audio, and text.",
        "I built the helicopter opening: boarding, a 360 degree flight around the platform, and a landing led by the pilot.",
        "I implemented the failure procedure as steps guided by a tablet, with a lever, a crank, buttons, a control panel, and wall monitors.",
        "I developed the timer, the lose and results screens, language selection, and the interaction tutorials.",
        "I integrated the ocean, smoke, and other effects that bring the platform to life.",
      ],
      sections: [
        {
          title: "How it plays",
          paragraphs: [
            "The session starts with language selection and a quick tutorial. The visitor then boards the helicopter, flies around the platform, and lands on it. Inside, a tablet presents each step of the procedure, and the player has to pull levers, turn cranks, press buttons, and watch the monitors to resolve the failure.",
            "Everything happens against the clock: if time runs out, the failure gets out of control. At the end, a results screen shows how the player did.",
          ],
        },
        {
          title: "Challenges",
          paragraphs: [
            "This was my first virtual reality project and my first time using Unreal Engine 5 for VR. I had to learn, during the project itself, how to design hand based physical interactions, player comfort, and performance on Meta Quest 3, while keeping to the fair's deadline.",
          ],
        },
      ],
    },
  },
  {
    id: "sistema-de-quiz",
    category: "professional",
    endDate: "2026-07",
    cover: "/projects/quiz/cover.jpg",
    media: [
      "/projects/quiz/gameplay-01.mp4",
      "/projects/quiz/gameplay-02.mp4",
      "/projects/quiz/gameplay-03.mp4",
    ],
    pt: {
      title: "Sistema de Quiz",
      studio: "Dazain",
      period: "2025 e 2026",
      headline: "Plataforma modular de quiz e ativações para as marcas da Oficina Brasil.",
      summary:
        "Sistema de quiz modular vendido à Oficina Brasil e usado nas ativações das marcas parceiras no evento de 2025 e novamente no de 2026. As perguntas são carregadas por JSON, o mesmo app reúne outras ativações, como jogo da memória, caça-palavras e roleta de brindes, e os dados ficam salvos em um banco local simples. Cada marca recebe uma versão com sua própria identidade visual, construída sobre a mesma base.",
      facts: [
        { label: "Função", value: "Criador do sistema e programador principal" },
        { label: "Equipe", value: "Gestor, artista de UI e time de conceito" },
        { label: "Estúdio", value: "Dazain" },
        { label: "Cliente", value: "Oficina Brasil" },
        { label: "Marcas", value: "Renault, Nissan, Mercado Livre, SKF, NTN, Valeo e AC Delco, entre outras" },
        { label: "Período", value: "Junho a julho de 2025 e março a julho de 2026" },
        { label: "Plataforma", value: "Android e Windows, telas touch" },
        { label: "Engine", value: "Unity 6" },
      ],
      responsibilities: [
        "Criei o sistema do zero e mantive a base usada em todas as versões das marcas, trabalhando com um gestor, uma artista de UI e o time que desenvolveu os conceitos das ativações para os clientes.",
        "O quiz é modular: as perguntas, inclusive com imagens, são carregadas de arquivos JSON, embaralhadas a cada partida e seguem regras de vitória configuráveis. Trocar o conteúdo de uma marca não exige mudar o código.",
        "Integrei outras ativações no mesmo app, como jogo da memória, caça-palavras e roleta de brindes com chance configurada por produto.",
        "Implementei um banco de dados local simples em JSON, que guarda o estoque de brindes, as chances e os resultados entre sessões, além do cadastro de participantes exportado em CSV com verificação de telefone repetido.",
        "Implementei a interface desenhada pela artista de UI para totens e tablets, com teclado virtual, animações em DOTween, contagem regressiva e reinício automático para o próximo participante, gerando builds para Android e Windows.",
      ],
      sections: [
        {
          title: "Como funciona",
          paragraphs: [
            "O participante responde perguntas sobre os produtos da marca dentro de um tempo limite. Quem acerta o suficiente desbloqueia a roleta de brindes, e o sorteio respeita o estoque e as chances definidas para cada produto. Dependendo da versão, a ativação também pode ser um jogo da memória ou um caça-palavras com a identidade da marca.",
            "Ao fim da partida o jogo volta sozinho ao início, pronto para a próxima pessoa da fila, enquanto os dados da sessão ficam registrados localmente para a equipe do evento.",
          ],
        },
        {
          title: "Uma base para muitas marcas",
          paragraphs: [
            "O projeto foi vendido à Oficina Brasil e usado em dois anos de evento: a primeira versão em 2025 e uma nova rodada de desenvolvimento em 2026. Eu desenvolvi os jogos de todas as marcas que usaram o sistema. Cada marca tem sua versão, com logo, cores, perguntas e brindes próprios, todas construídas sobre a mesma base. Isso permitiu entregar novas ativações em pouco tempo, mudando o conteúdo e o visual sem reescrever a lógica.",
          ],
        },
      ],
    },
    en: {
      title: "Quiz System",
      studio: "Dazain",
      period: "2025 and 2026",
      headline: "Modular quiz and activation platform for Oficina Brasil's partner brands.",
      summary:
        "Modular quiz system sold to Oficina Brasil and used in its partner brands' activations at the 2025 event and again in 2026. Questions are loaded from JSON, the same app bundles other activations such as a memory game, word search, and a prize wheel, and data is stored in a simple local database. Each brand gets a version with its own visual identity, built on the same base.",
      facts: [
        { label: "Role", value: "System creator and lead programmer" },
        { label: "Team", value: "Manager, UI artist, and concept team" },
        { label: "Studio", value: "Dazain" },
        { label: "Client", value: "Oficina Brasil" },
        { label: "Brands", value: "Renault, Nissan, Mercado Livre, SKF, NTN, Valeo, and AC Delco, among others" },
        { label: "Timeline", value: "June to July 2025 and March to July 2026" },
        { label: "Platform", value: "Android and Windows, touchscreens" },
        { label: "Engine", value: "Unity 6" },
      ],
      responsibilities: [
        "I built the system from scratch and maintained the base used by every brand version, working with a manager, a UI artist, and the team that developed the activation concepts for the clients.",
        "The quiz is modular: questions, including ones with images, are loaded from JSON files, shuffled every round, and follow configurable win rules. Changing a brand's content requires no code changes.",
        "I integrated other activations into the same app, including a memory game, word search, and a prize wheel with per product odds.",
        "I implemented a simple local JSON database that keeps prize stock, odds, and results across sessions, plus a participant sign up exported to CSV with a duplicate phone check.",
        "I implemented the UI designed by the UI artist for kiosks and tablets, with an on screen keyboard, DOTween animations, a countdown, and an automatic reset for the next participant, shipping builds for Android and Windows.",
      ],
      sections: [
        {
          title: "How it plays",
          paragraphs: [
            "Participants answer questions about the brand's products against the clock. Those who get enough right unlock the prize wheel, and the draw respects the stock and odds set for each product. Depending on the version, the activation can also be a memory game or a word search in the brand's identity.",
            "When the round ends, the game resets on its own for the next person in line, while the session data is stored locally for the event staff.",
          ],
        },
        {
          title: "One base, many brands",
          paragraphs: [
            "The project was sold to Oficina Brasil and used across two years of the event: the first version in 2025 and a new round of development in 2026. I developed the games for every brand that used the system. Each brand has its own version, with its logo, colors, questions, and prizes, all built on the same base. That made it possible to deliver new activations quickly, changing content and visuals without rewriting the logic.",
          ],
        },
      ],
    },
  },
  {
    id: "oficina-interativa",
    category: "professional",
    endDate: "2026-07",
    cover: "/projects/oficina-interativa/cover.jpg",
    media: [
      "/projects/oficina-interativa/gameplay-01.mp4",
      "/projects/oficina-interativa/gameplay-02.mp4",
    ],
    links: {
      event:
        "https://oficinabrasil.com.br/oficina-brasil/noticia/oficina-brasil-conecta-2026-consolida-evento-como-ponto-de-encontro-da-comunidade-reparacao-automotiva",
    },
    pt: {
      title: "Oficina Interativa",
      studio: "Dazain",
      period: "Jul 2026",
      headline: "Jogo de conserto de carros para o Oficina Brasil Conecta 2026.",
      summary:
        "Simulação gamificada de uma oficina mecânica, criada para o Oficina Brasil Conecta 2026 com versões personalizadas para a Urba e a ContiTech. Em partidas de dois minutos, o visitante conduz o mecânico pela oficina, pega a peça que cada carro pede e tenta consertar o maior número de veículos antes de o tempo acabar.",
      facts: [
        { label: "Função", value: "Único desenvolvedor e programador" },
        { label: "Equipe", value: "Gestor, artista de UI e time de conceito" },
        { label: "Estúdio", value: "Dazain" },
        { label: "Clientes", value: "Urba e ContiTech" },
        { label: "Evento", value: "Oficina Brasil Conecta 2026" },
        { label: "Período", value: "Julho de 2026, três semanas" },
        { label: "Plataforma", value: "Windows, com mouse e tela touch" },
        { label: "Engine", value: "Unity" },
      ],
      responsibilities: [
        "Fiz todo o desenvolvimento do jogo, do primeiro protótipo à build final, trabalhando com um gestor, uma artista de UI e o time que desenvolveu o conceito do projeto para os clientes.",
        "Implementei o loop da partida: cronômetro de dois minutos, ondas de carros que aumentam a cada rodada e pontuação por carro consertado.",
        "O mecânico se move por NavMesh com clique ou toque, carrega uma peça por vez e entrega ao carro que pediu aquela peça.",
        "Preparei duas versões do jogo, uma para a Urba e outra para a ContiTech, cada uma com a identidade visual da marca.",
        "Implementei a interface desenhada pela artista de UI, com tutorial em etapas, contagem regressiva, menu de configurações e animações em DOTween, além do áudio e dos efeitos visuais de feedback.",
      ],
      sections: [
        {
          title: "Como funciona",
          paragraphs: [
            "Os carros entram na oficina mostrando o ícone da peça de que precisam. As peças aparecem espalhadas pelo cenário, e o jogador leva cada uma até o carro certo. Uma peça errada é descartada, e quando todos os carros da onda saem consertados, a próxima onda chega com um carro a mais.",
            "Ao fim dos dois minutos, a tela de resultado mostra quantos carros o visitante consertou, e o jogo volta ao início para a próxima pessoa da fila.",
          ],
        },
        {
          title: "O evento",
          paragraphs: [
            "O Oficina Brasil Conecta 2026 aconteceu de 24 a 26 de julho no Transamerica Expo Center, em São Paulo. A terceira edição do evento reuniu 8.431 visitantes, mais de 300 palestras e atividades técnicas, e teve alcance digital de mais de 6,2 milhões de visualizações.",
          ],
        },
        {
          title: "Prazo",
          paragraphs: [
            "O principal desafio foi o prazo. O projeto foi do primeiro commit à versão final em vinte dias, com as duas versões de marca prontas antes da abertura do evento.",
          ],
        },
      ],
    },
    en: {
      title: "Oficina Interativa",
      studio: "Dazain",
      period: "Jul 2026",
      headline: "Car repair game for Oficina Brasil Conecta 2026.",
      summary:
        "A gamified auto repair shop built for Oficina Brasil Conecta 2026, with branded versions for Urba and ContiTech. In two minute rounds, visitors guide the mechanic around the shop, grab the part each car needs, and try to fix as many cars as possible before time runs out.",
      facts: [
        { label: "Role", value: "Sole developer and programmer" },
        { label: "Team", value: "Manager, UI artist, and concept team" },
        { label: "Studio", value: "Dazain" },
        { label: "Clients", value: "Urba and ContiTech" },
        { label: "Event", value: "Oficina Brasil Conecta 2026" },
        { label: "Timeline", value: "July 2026, three weeks" },
        { label: "Platform", value: "Windows, mouse and touchscreen" },
        { label: "Engine", value: "Unity" },
      ],
      responsibilities: [
        "I handled all of the game's development, from the first prototype to the final build, working with a manager, a UI artist, and the team that developed the project concept for the clients.",
        "I implemented the round loop: a two minute timer, waves of cars that grow every round, and one point per repaired car.",
        "The mechanic moves on a NavMesh by click or touch, carries one part at a time, and delivers it to the car that asked for it.",
        "I prepared two versions of the game, one for Urba and one for ContiTech, each with the brand's visual identity.",
        "I implemented the UI designed by the UI artist, with a step by step tutorial, countdown, settings menu, and DOTween animations, along with audio and visual feedback.",
      ],
      sections: [
        {
          title: "How it plays",
          paragraphs: [
            "Cars drive into the shop showing an icon of the part they need. Parts appear around the shop, and the player brings each one to the right car. A wrong part is discarded, and once every car in the wave is repaired, the next wave arrives with one more car.",
            "When the two minutes are up, the results screen shows how many cars the visitor repaired, and the game resets for the next person in line.",
          ],
        },
        {
          title: "The event",
          paragraphs: [
            "Oficina Brasil Conecta 2026 took place from July 24 to 26 at the Transamerica Expo Center in São Paulo. The third edition drew 8,431 visitors, more than 300 talks and technical activities, and over 6.2 million views online.",
          ],
        },
        {
          title: "Deadline",
          paragraphs: [
            "The main challenge was the schedule. The project went from the first commit to the final version in twenty days, with both branded versions ready before the event opened.",
          ],
        },
      ],
    },
  },
  {
    id: "drag-race",
    category: "professional",
    endDate: "2026-07",
    cover: "/projects/drag-race/cover.jpg",
    media: ["/projects/drag-race/gameplay-01.mp4", "/projects/drag-race/gameplay-02.mp4"],
    links: {
      event:
        "https://oficinabrasil.com.br/oficina-brasil/noticia/oficina-brasil-conecta-2026-consolida-evento-como-ponto-de-encontro-da-comunidade-reparacao-automotiva",
    },
    pt: {
      title: "Drag Race",
      studio: "Dazain",
      period: "Mar 2026 a Jul 2026",
      headline: "Arrancada para dois jogadores com volantes e pedais Logitech.",
      summary:
        "Simulador de arrancada em tela dividida criado para o Oficina Brasil Conecta 2026, com a identidade da Karter. Dois visitantes sentam lado a lado, cada um com volante, pedais e câmbio, esperam a largada no semáforo e disputam quem cruza a linha de chegada no menor tempo.",
      facts: [
        { label: "Função", value: "Programador principal" },
        { label: "Equipe", value: "Gestor, artista de UI, time de conceito e mais um desenvolvedor do estúdio" },
        { label: "Estúdio", value: "Dazain" },
        { label: "Cliente", value: "Oficina Brasil" },
        { label: "Marca", value: "Karter" },
        { label: "Evento", value: "Oficina Brasil Conecta 2026" },
        { label: "Período", value: "Março a julho de 2026" },
        { label: "Plataforma", value: "Windows, com dois volantes e pedais Logitech" },
        { label: "Engine", value: "Unity 6, com FMOD e Logitech G SDK" },
      ],
      responsibilities: [
        "Montei a pista e o cenário, com iluminação baked, light probes, pós-processamento e os materiais dos carros.",
        "Implementei a física dos carros com WheelColliders e o assistente de direção, que mantém o carro na reta sem tirar o controle do jogador.",
        "Criei o cronômetro de cada jogador, a linha de chegada, a tela de resultado e a interface de menu e tutorial.",
        "Integrei o FMOD ao projeto, substituindo o sistema de áudio anterior pelo som de motor que acompanha a rotação e as trocas de marcha.",
        "Trabalhei com outro desenvolvedor do estúdio na integração dos volantes, pedais, câmbio e semáforo de largada, e apliquei os ajustes visuais pedidos pela marca.",
      ],
      sections: [
        {
          title: "Como funciona",
          paragraphs: [
            "Cada jogador controla um carro em sua metade da tela. O semáforo acende as luzes de largada, e a partir daí é acelerar, trocar de marcha na hora certa, guiado pelo indicador de troca, e manter o carro alinhado até a linha de chegada.",
            "Quando os dois cruzam a linha, os carros desaceleram sozinhos e a tela de resultado compara os tempos para mostrar o vencedor.",
          ],
        },
        {
          title: "O evento",
          paragraphs: [
            "O jogo foi uma das ativações do Oficina Brasil Conecta 2026, realizado de 24 a 26 de julho no Transamerica Expo Center, em São Paulo, com 8.431 visitantes.",
          ],
        },
        {
          title: "Desafios",
          paragraphs: [
            "O desafio foi fazer o carro parecer de verdade com volante e pedais reais. Em uma arrancada qualquer toque no volante pode jogar o carro para o lado, então o assistente de direção corrige pequenos desvios e impede que o carro rode, mas devolve o controle assim que o jogador vira o volante.",
          ],
        },
      ],
    },
    en: {
      title: "Drag Race",
      studio: "Dazain",
      period: "Mar 2026 to Jul 2026",
      headline: "Two player drag race with Logitech wheels and pedals.",
      summary:
        "Split screen drag racing simulator built for Oficina Brasil Conecta 2026 with Karter branding. Two visitors sit side by side, each with a wheel, pedals, and a gearbox, wait for the start lights, and race to cross the finish line in the shortest time.",
      facts: [
        { label: "Role", value: "Lead programmer" },
        { label: "Team", value: "Manager, UI artist, concept team, and another studio developer" },
        { label: "Studio", value: "Dazain" },
        { label: "Client", value: "Oficina Brasil" },
        { label: "Brand", value: "Karter" },
        { label: "Event", value: "Oficina Brasil Conecta 2026" },
        { label: "Timeline", value: "March to July 2026" },
        { label: "Platform", value: "Windows, with two Logitech wheels and pedals" },
        { label: "Engine", value: "Unity 6, with FMOD and Logitech G SDK" },
      ],
      responsibilities: [
        "I built the track and environment, with baked lighting, light probes, post processing, and the car materials.",
        "I implemented the car physics with WheelColliders and the steering assist, which keeps the car on the straight without taking control away from the player.",
        "I created each player's timer, the finish line, the results screen, and the menu and tutorial UI.",
        "I integrated FMOD into the project, replacing the previous audio system with an engine sound that follows RPM and gear shifts.",
        "I worked with another studio developer on the wheel, pedal, gearbox, and start light integration, and applied the visual changes requested by the brand.",
      ],
      sections: [
        {
          title: "How it plays",
          paragraphs: [
            "Each player drives a car on their half of the screen. The start lights count down, and from there it is about throttle, shifting at the right moment with the help of the shift indicator, and keeping the car straight until the finish line.",
            "Once both cross the line, the cars coast to a stop and the results screen compares the times to show the winner.",
          ],
        },
        {
          title: "The event",
          paragraphs: [
            "The game was one of the activations at Oficina Brasil Conecta 2026, held from July 24 to 26 at the Transamerica Expo Center in São Paulo, with 8,431 visitors.",
          ],
        },
        {
          title: "Challenges",
          paragraphs: [
            "The challenge was making the car feel right with a real wheel and pedals. In a drag race any touch of the wheel can throw the car sideways, so the steering assist corrects small drifts and prevents spins, but hands control back as soon as the player turns the wheel.",
          ],
        },
      ],
    },
  },
  {
    id: "test-your-might",
    category: "professional",
    endDate: "2026-06",
    cover: "/projects/test-your-might/cover.jpg",
    media: ["/projects/test-your-might/gameplay-01.mp4"],
    links: {
      event: "https://naturaltech.com.br/",
    },
    pt: {
      title: "Test Your Might",
      studio: "Dazain",
      period: "Mai 2026 a Jun 2026",
      headline: "Desafio de força da Big Boom: aperte o mais rápido que puder.",
      summary:
        "Jogo de ativação criado para o estande da Big Boom na Bio Brazil Fair e Naturaltech 2026, apresentado como Desafio BOOM PLAY. O visitante escolhe a dificuldade e aperta o botão o mais rápido que conseguir para o personagem levantar a barra antes de o tempo acabar. Quem vence segue para a degustação e retira um brinde.",
      facts: [
        { label: "Função", value: "Único desenvolvedor e programador" },
        { label: "Estúdio", value: "Dazain" },
        { label: "Cliente", value: "Big Boom" },
        { label: "Evento", value: "Bio Brazil Fair e Naturaltech 2026" },
        { label: "Período", value: "Maio a junho de 2026" },
        { label: "Plataforma", value: "Windows, tela vertical com botão físico" },
        { label: "Engine", value: "Unity 6" },
      ],
      responsibilities: [
        "Desenvolvi o jogo inteiro, da mecânica principal à build final entregue ao cliente.",
        "Criei a mecânica de força: cada toque enche a barra, que esvazia sozinha com o tempo, e a animação do personagem acompanha o progresso quadro a quadro.",
        "Implementei a seleção de dificuldade, o cronômetro e as telas de vitória e derrota, com o brinde para quem vence.",
        "Montei o fluxo de telas animado em DOTween, com contagem regressiva, tutorial, transições e navegação feita toda pelo botão físico.",
        "Adicionei o feedback de cada toque: partículas, sons de clique, vozes de esforço do personagem e trilha sonora.",
      ],
      sections: [
        {
          title: "Como funciona",
          paragraphs: [
            "Depois de escolher a dificuldade, o visitante tem poucos segundos para encher a barra de força apertando o botão sem parar. Se ele diminui o ritmo, a barra desce e o personagem baixa o peso. Ao fim do tempo, quem estiver acima da meta vence, e o personagem comemora.",
          ],
        },
        {
          title: "O evento",
          paragraphs: [
            "A Bio Brazil Fair e a Naturaltech, os maiores eventos de produtos orgânicos e saudáveis da América Latina, completaram 20 edições em 2026. As feiras aconteceram de 10 a 13 de junho no Distrito Anhembi, em São Paulo, e o desafio ficou no estande da Big Boom, levando os vencedores para a degustação dos produtos.",
          ],
        },
      ],
    },
    en: {
      title: "Test Your Might",
      studio: "Dazain",
      period: "May 2026 to Jun 2026",
      headline: "Big Boom strength challenge: press as fast as you can.",
      summary:
        "Brand activation game built for the Big Boom booth at Bio Brazil Fair and Naturaltech 2026, presented as the BOOM PLAY Challenge. Visitors pick a difficulty and press the button as fast as they can so the character lifts the barbell before time runs out. Winners head to the tasting area and collect a prize.",
      facts: [
        { label: "Role", value: "Sole developer and programmer" },
        { label: "Studio", value: "Dazain" },
        { label: "Client", value: "Big Boom" },
        { label: "Event", value: "Bio Brazil Fair and Naturaltech 2026" },
        { label: "Timeline", value: "May to June 2026" },
        { label: "Platform", value: "Windows, portrait screen with a physical button" },
        { label: "Engine", value: "Unity 6" },
      ],
      responsibilities: [
        "I developed the whole game, from the core mechanic to the final build delivered to the client.",
        "I created the strength mechanic: each press fills the bar, which drains on its own over time, and the character animation follows the progress frame by frame.",
        "I implemented difficulty selection, the timer, and the win and lose screens, with a prize for winners.",
        "I built the animated screen flow in DOTween, with a countdown, tutorial, transitions, and navigation done entirely with the physical button.",
        "I added feedback to every press: particles, click sounds, character effort voices, and a soundtrack.",
      ],
      sections: [
        {
          title: "How it plays",
          paragraphs: [
            "After choosing a difficulty, the visitor has a few seconds to fill the strength bar by pressing the button nonstop. If they slow down, the bar drops and the character lowers the weight. When time runs out, anyone above the target wins, and the character celebrates.",
          ],
        },
        {
          title: "The event",
          paragraphs: [
            "Bio Brazil Fair and Naturaltech, the largest organic and healthy products events in Latin America, reached their 20th editions in 2026. The fairs took place from June 10 to 13 at Distrito Anhembi in São Paulo, and the challenge ran at the Big Boom booth, sending winners to the product tasting.",
          ],
        },
      ],
    },
  },
  {
    id: "adventurous-metal-craig",
    category: "academic",
    endDate: "2025-11",
    cover: "/projects/metal-craig/01-cover.png",
    media: [
      "/projects/metal-craig/trailer.mp4",
      "/projects/metal-craig/gameplay-01.mp4",
      "/projects/metal-craig/gameplay-02.mp4",
      "/projects/metal-craig/01-cover.png",
      "/projects/metal-craig/03-gameplay.png",
      "/projects/metal-craig/04-gameplay.png",
      "/projects/metal-craig/05-gameplay.png",
      "/projects/metal-craig/06-gameplay.png",
      "/projects/metal-craig/07-gameplay.png",
      "/projects/metal-craig/08-gameplay.png",
    ],
    links: {
      github: "https://github.com/Nyct1bius/Tcc",
      itch: "https://bouncybytestudio.itch.io/the-adventurous-metalcraig",
    },
    pt: {
      title: "The Adventurous Metal Craig",
      studio: "Bouncy Byte Studio",
      period: "Fev 2025 a Nov 2025",
      headline: "Arquitetura de player e combate preparada para crescer.",
      summary:
        "Action platformer 3D nas Ilhas de Palafita, desenvolvido como TCC de Jogos Digitais na PUC-SP. Player e combate foram organizados para o jogo poder crescer. Uma Hierarchical State Machine controla locomoção e ações, Unity Events separam animação, combate, áudio e interface, e Scriptable Objects concentram armas, atributos, input e feedback.",
      facts: [
        { label: "Função", value: "Lead Programador de Gameplay" },
        { label: "Equipe", value: "Bouncy Byte Studio" },
        { label: "Contexto", value: "TCC de Jogos Digitais, PUC-SP" },
        { label: "Período", value: "Fevereiro a novembro de 2025" },
        { label: "Plataforma", value: "Windows, teclado e gamepad" },
        { label: "Engine", value: "Unity" },
      ],
      responsibilities: [
        "A Hierarchical State Machine usa uma State abstrata, com estados raiz e subestados. Os estados raiz cobrem Ground, Jump, Fall, Blocking, Attack, Dash, Damaged e Death. Idle e Walk são subestados compartilhados. UpdateStates e FixedUpdateStates percorrem a hierarquia, então movimento e combate usam o mesmo contexto e a lógica de transição fica em um só lugar.",
        "PlayerStateMachine e PlayerStateFactory criam os estados e reúnem Movement, Combat, Health, Shield, Audio e Input em um contexto único. Um comportamento novo é uma classe de estado e um método na factory.",
        "PlayerEvents e GameEvents funcionam como barramento de UnityAction para o fim do ataque, a janela de acerto, VFX e SFX, coleta de itens, pause e fluxo de jogo. AnimationHandler, combate e áudio se inscrevem em OnEnable e OnDisable, o que mantém as camadas independentes.",
        "WeaponSO guarda cada passo do combo em AttackData, com alcance, arco, VFX e AnimationClip, e aplica o dano por IHealth. PlayerStatsSO, ScreenShakeProfileSO, FMODEvents e o InputReader, ligado ao New Input System, mantêm o ajuste dos valores nos assets.",
        "O combate se divide entre PlayerCombatManager, escudo direcional, controle de combo e lock on. As regras de cada arma ficam no Scriptable Object, e IHealth dá ao player, aos inimigos e aos objetos interativos o mesmo contrato de dano.",
        "Os managers são divididos por responsabilidade: Movement, Combat, Health, Audio, Animation e UI. ObjectPooler reaproveita efeitos e projéteis, o lock on usa OverlapSphereNonAlloc, e a detecção de acerto fica centralizada para o combate continuar leve conforme o conteúdo aumenta.",
      ],
    },
    en: {
      title: "The Adventurous Metal Craig",
      studio: "Bouncy Byte Studio",
      period: "Feb 2025 to Nov 2025",
      headline: "Player and combat architecture built to grow.",
      summary:
        "3D action platformer set in the Palafita Isles, developed as my Digital Games thesis at PUC-SP. Player and combat were structured so the game can grow. A Hierarchical State Machine controls locomotion and actions, Unity Events separate animation, combat, audio, and UI, and Scriptable Objects hold weapons, stats, input, and feedback.",
      facts: [
        { label: "Role", value: "Lead Gameplay Programmer" },
        { label: "Team", value: "Bouncy Byte Studio" },
        { label: "Context", value: "Digital Games thesis, PUC-SP" },
        { label: "Timeline", value: "February to November 2025" },
        { label: "Platform", value: "Windows, keyboard and gamepad" },
        { label: "Engine", value: "Unity" },
      ],
      responsibilities: [
        "The Hierarchical State Machine uses an abstract State, with root states and nested sub states. Root states cover Ground, Jump, Fall, Blocking, Attack, Dash, Damaged, and Death. Idle and Walk are shared sub states. UpdateStates and FixedUpdateStates walk the hierarchy, so movement and combat share one context and the transition logic lives in one place.",
        "PlayerStateMachine and PlayerStateFactory create the states and expose Movement, Combat, Health, Shield, Audio, and Input through a single context. A new behavior is a new state class and a factory method.",
        "PlayerEvents and GameEvents are UnityAction hubs for attack completion, the hit window, VFX and SFX, pickups, pause, and game flow. AnimationHandler, combat, and audio subscribe in OnEnable and OnDisable, which keeps the layers independent.",
        "WeaponSO stores each combo step in AttackData, with range, arc, VFX, and AnimationClip, and applies damage through IHealth. PlayerStatsSO, ScreenShakeProfileSO, FMODEvents, and the InputReader, connected to the New Input System, keep the tuning in assets.",
        "Combat is split across PlayerCombatManager, a directional shield, combo tracking, and lock on. Weapon rules live on the Scriptable Object, and IHealth gives the player, enemies, and interactive objects the same damage contract.",
        "Managers are split by responsibility: Movement, Combat, Health, Audio, Animation, and UI. ObjectPooler reuses effects and projectiles, lock on uses OverlapSphereNonAlloc, and hit detection is centralized so combat stays lightweight as content grows.",
      ],
    },
  },
  {
    id: "slimesivos",
    category: "academic",
    endDate: "2024-06",
    cover: "/projects/slimesivos/cover.png",
    coverPosition: "0% 50%",
    media: [
      "/projects/slimesivos/gameplay.mp4",
      "/projects/slimesivos/cover.png",
      "/projects/slimesivos/menu.jpeg",
      "/projects/slimesivos/gameplay-shot.jpeg",
      "/projects/slimesivos/level-select.jpeg",
      "/projects/slimesivos/level-complete.jpeg",
      "/projects/slimesivos/leaderboard.jpeg",
    ],
    links: {
      github: "https://github.com/arthur-henrique/Slimesivo/tree/main/Assets/Scripts",
    },
    pt: {
      title: "Slimesivos",
      studio: "PUC-SP",
      period: "Fev 2024 a Jun 2024",
      headline: "Platformer vertical para mobile com controller próprio.",
      summary:
        "Platformer 2D vertical com controller próprio em Rigidbody2D. Input, movimento, contato com paredes, dano, animação e VFX/SFX reagem aos mesmos Unity Events, e os scripts permanecem independentes.",
      facts: [
        { label: "Função", value: "Programador de Gameplay" },
        { label: "Contexto", value: "Projeto acadêmico, PUC-SP" },
        { label: "Período", value: "Fevereiro a junho de 2024" },
        { label: "Plataforma", value: "Mobile, toque" },
        { label: "Engine", value: "Unity" },
      ],
      responsibilities: [
        "Unity Events conectam input, controller do player, animação e VFX/SFX.",
        "O controller em Rigidbody2D cobre wall stick, wall slide, wall jump, double jump, rampa de gravidade e checkpoints de respawn.",
        "O input mobile usa o New Input System. Tap e swipe viram ações de gameplay por Unity Events.",
        "A colisão de parede e chão lê a normal do contato e controla stick, slide e orientação por Unity Events.",
        "Animação, partículas e SFX assinam os mesmos eventos e compartilham o feedback de pulo, dano e contato com parede.",
      ],
    },
    en: {
      title: "Slimesivos",
      studio: "PUC-SP",
      period: "Feb 2024 to Jun 2024",
      headline: "Vertical mobile platformer with a custom controller.",
      summary:
        "Vertical 2D platformer with a custom Rigidbody2D controller. Input, movement, wall contact, damage, animation, and VFX/SFX react to the same Unity Events, so the scripts stay independent.",
      facts: [
        { label: "Role", value: "Gameplay Programmer" },
        { label: "Context", value: "Academic project, PUC-SP" },
        { label: "Timeline", value: "February to June 2024" },
        { label: "Platform", value: "Mobile, touch" },
        { label: "Engine", value: "Unity" },
      ],
      responsibilities: [
        "Unity Events connect input, the player controller, animation, and VFX/SFX.",
        "The Rigidbody2D controller covers wall stick, wall slide, wall jump, double jump, a gravity ramp, and respawn checkpoints.",
        "Mobile input uses the New Input System. Tap and swipe map to gameplay actions through Unity Events.",
        "Wall and ground collision reads the contact normal and drives stick, slide, and facing through Unity Events.",
        "Animation, particles, and SFX subscribe to the same events and share feedback for jumps, damage, and wall contact.",
      ],
    },
  },
  {
    id: "leaf-hopper",
    category: "academic",
    endDate: "2023-11",
    cover: "/projects/leaf-hopper/key-art.png",
    coverPosition: "50% 18%",
    media: [
      "/projects/leaf-hopper/gameplay.gif",
      "/projects/leaf-hopper/key-art.png",
      "/projects/leaf-hopper/main-menu.png",
      "/projects/leaf-hopper/level.png",
      "/projects/leaf-hopper/shot-2.png",
      "/projects/leaf-hopper/shot-3.png",
    ],
    links: {
      github: "https://github.com/Gigamatts/Forest-Game",
      itch: "https://mateus-torres.itch.io/leaf-hopper",
    },
    pt: {
      title: "Leaf Hopper",
      studio: "PUC-SP",
      period: "Set 2023 a Nov 2023",
      headline: "Platformer 3D com visual de N64 e PS1 em Unreal Engine 4.",
      summary:
        "Platformer 3D com visual de N64 e PS1, feito em Unreal Engine 4. O player é um ACharacter em C++ com CharacterMovementComponent, câmera spring arm e input de ação e eixo. Mushroom Jumper, IA inimiga, partículas e assets 3D próprios foram construídos sobre essa base de movimento.",
      facts: [
        { label: "Função", value: "Programador de Gameplay e Artista 3D" },
        { label: "Contexto", value: "Projeto acadêmico, PUC-SP" },
        { label: "Período", value: "Setembro a novembro de 2023" },
        { label: "Plataforma", value: "Windows" },
        { label: "Engine", value: "Unreal Engine 4, C++" },
      ],
      responsibilities: [
        "ACharacter e CharacterMovementComponent cuidam do pulo, do air control, da orientação ao movimento e da câmera com spring arm.",
        "O Mushroom Jumper é uma interação no component de movimento e serve para a travessia.",
        "A IA inimiga trata combate e esquiva nos níveis da floresta corrompida.",
        "A modelagem e a animação 3D cobrem o inimigo de pedra e o NPC capivara, com partículas para pulos e interações.",
        "O input usa binds de ação e eixo para mover, pular e olhar, incluindo pulo por toque para testes em dispositivo.",
      ],
    },
    en: {
      title: "Leaf Hopper",
      studio: "PUC-SP",
      period: "Sep 2023 to Nov 2023",
      headline: "3D platformer with an N64 and PS1 look in Unreal Engine 4.",
      summary:
        "3D platformer in an N64 and PS1 visual style, built in Unreal Engine 4. The player is a C++ ACharacter with CharacterMovementComponent, a spring arm camera, and action and axis input. Mushroom Jumper, enemy AI, particles, and custom 3D assets are built on that movement base.",
      facts: [
        { label: "Role", value: "Gameplay Programmer and 3D Artist" },
        { label: "Context", value: "Academic project, PUC-SP" },
        { label: "Timeline", value: "September to November 2023" },
        { label: "Platform", value: "Windows" },
        { label: "Engine", value: "Unreal Engine 4, C++" },
      ],
      responsibilities: [
        "ACharacter and CharacterMovementComponent handle jump, air control, orientation to movement, and a spring arm follow camera.",
        "The Mushroom Jumper is an interaction on the movement component and supports traversal.",
        "Enemy AI handles combat and avoidance in the corrupted forest levels.",
        "3D modeling and animation cover the stone enemy and the capybara NPC, with particles for jumps and interactions.",
        "Input uses action and axis bindings for move, jump, and look, including touch jump for tests on device.",
      ],
    },
  },
];

export const sortedProjects = [...projects].sort((a, b) =>
  b.endDate.localeCompare(a.endDate),
);
