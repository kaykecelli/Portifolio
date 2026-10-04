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
    cover: "/projects/slimesivos/menu.jpeg",
    media: [
      "/projects/slimesivos/gameplay.mp4",
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
    cover: "/projects/leaf-hopper/main-menu.png",
    media: [
      "/projects/leaf-hopper/gameplay.gif",
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
