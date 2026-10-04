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
      period: "Jun 2025 a Jul 2026",
      headline: "Plataforma modular de quiz e ativações para as marcas da Oficina Brasil.",
      summary:
        "Sistema de quiz modular vendido à Oficina Brasil e usado nas ativações das marcas parceiras em seus eventos. As perguntas são carregadas por JSON, o mesmo app reúne outras ativações, como jogo da memória, caça-palavras e roleta de brindes, e os dados ficam salvos em um banco local simples. Cada marca recebe uma versão com sua própria identidade visual, construída sobre a mesma base.",
      facts: [
        { label: "Função", value: "Criador do sistema e programador principal" },
        { label: "Estúdio", value: "Dazain" },
        { label: "Cliente", value: "Oficina Brasil" },
        { label: "Marcas", value: "Renault, Nissan, Mercado Livre, SKF, NTN, Valeo e AC Delco, entre outras" },
        { label: "Período", value: "Junho de 2025 a julho de 2026" },
        { label: "Plataforma", value: "Android e Windows, telas touch" },
        { label: "Engine", value: "Unity 6" },
      ],
      responsibilities: [
        "Criei o sistema do zero e mantive a base usada em todas as versões das marcas.",
        "O quiz é modular: as perguntas, inclusive com imagens, são carregadas de arquivos JSON, embaralhadas a cada partida e seguem regras de vitória configuráveis. Trocar o conteúdo de uma marca não exige mudar o código.",
        "Integrei outras ativações no mesmo app, como jogo da memória, caça-palavras e roleta de brindes com chance configurada por produto.",
        "Implementei um banco de dados local simples em JSON, que guarda o estoque de brindes, as chances e os resultados entre sessões, além do cadastro de participantes exportado em CSV com verificação de telefone repetido.",
        "Montei a interface para totens e tablets, com teclado virtual, animações em DOTween, contagem regressiva e reinício automático para o próximo participante, gerando builds para Android e Windows.",
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
            "O projeto foi vendido à Oficina Brasil, e eu desenvolvi os jogos de todas as marcas que usaram o sistema. Cada marca tem sua versão, com logo, cores, perguntas e brindes próprios, todas construídas sobre a mesma base. Isso permitiu entregar novas ativações em pouco tempo, mudando o conteúdo e o visual sem reescrever a lógica.",
          ],
        },
      ],
    },
    en: {
      title: "Quiz System",
      studio: "Dazain",
      period: "Jun 2025 to Jul 2026",
      headline: "Modular quiz and activation platform for Oficina Brasil's partner brands.",
      summary:
        "Modular quiz system sold to Oficina Brasil and used in its partner brands' activations at events. Questions are loaded from JSON, the same app bundles other activations such as a memory game, word search, and a prize wheel, and data is stored in a simple local database. Each brand gets a version with its own visual identity, built on the same base.",
      facts: [
        { label: "Role", value: "System creator and lead programmer" },
        { label: "Studio", value: "Dazain" },
        { label: "Client", value: "Oficina Brasil" },
        { label: "Brands", value: "Renault, Nissan, Mercado Livre, SKF, NTN, Valeo, and AC Delco, among others" },
        { label: "Timeline", value: "June 2025 to July 2026" },
        { label: "Platform", value: "Android and Windows, touchscreens" },
        { label: "Engine", value: "Unity 6" },
      ],
      responsibilities: [
        "I built the system from scratch and maintained the base used by every brand version.",
        "The quiz is modular: questions, including ones with images, are loaded from JSON files, shuffled every round, and follow configurable win rules. Changing a brand's content requires no code changes.",
        "I integrated other activations into the same app, including a memory game, word search, and a prize wheel with per product odds.",
        "I implemented a simple local JSON database that keeps prize stock, odds, and results across sessions, plus a participant sign up exported to CSV with a duplicate phone check.",
        "I built the UI for kiosks and tablets, with an on screen keyboard, DOTween animations, a countdown, and an automatic reset for the next participant, shipping builds for Android and Windows.",
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
            "The project was sold to Oficina Brasil, and I developed the games for every brand that used the system. Each brand has its own version, with its logo, colors, questions, and prizes, all built on the same base. That made it possible to deliver new activations quickly, changing content and visuals without rewriting the logic.",
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
        { label: "Estúdio", value: "Dazain" },
        { label: "Clientes", value: "Urba e ContiTech" },
        { label: "Evento", value: "Oficina Brasil Conecta 2026" },
        { label: "Período", value: "Julho de 2026, três semanas" },
        { label: "Plataforma", value: "Windows, com mouse e tela touch" },
        { label: "Engine", value: "Unity" },
      ],
      responsibilities: [
        "Desenvolvi o jogo inteiro sozinho, do primeiro protótipo à build final.",
        "Implementei o loop da partida: cronômetro de dois minutos, ondas de carros que aumentam a cada rodada e pontuação por carro consertado.",
        "O mecânico se move por NavMesh com clique ou toque, carrega uma peça por vez e entrega ao carro que pediu aquela peça.",
        "Preparei duas versões do jogo, uma para a Urba e outra para a ContiTech, cada uma com a identidade visual da marca.",
        "Montei a interface com tutorial em etapas, contagem regressiva, menu de configurações e animações em DOTween, além do áudio e dos efeitos visuais de feedback.",
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
        { label: "Studio", value: "Dazain" },
        { label: "Clients", value: "Urba and ContiTech" },
        { label: "Event", value: "Oficina Brasil Conecta 2026" },
        { label: "Timeline", value: "July 2026, three weeks" },
        { label: "Platform", value: "Windows, mouse and touchscreen" },
        { label: "Engine", value: "Unity" },
      ],
      responsibilities: [
        "I built the whole game on my own, from the first prototype to the final build.",
        "I implemented the round loop: a two minute timer, waves of cars that grow every round, and one point per repaired car.",
        "The mechanic moves on a NavMesh by click or touch, carries one part at a time, and delivers it to the car that asked for it.",
        "I prepared two versions of the game, one for Urba and one for ContiTech, each with the brand's visual identity.",
        "I built the UI with a step by step tutorial, countdown, settings menu, and DOTween animations, along with audio and visual feedback.",
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
