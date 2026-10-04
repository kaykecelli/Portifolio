export type ProjectCategory = "academic" | "professional";

export type Project = {
  id: string;
  category: ProjectCategory;
  /** Optional single image (legacy). Prefer `images` for galleries. */
  image?: string;
  /** Gallery media (images / gifs). Enables carousel + lightbox. */
  images?: string[];
  /** Optional gameplay video URL */
  video?: string;
  links?: {
    github?: string;
    itch?: string;
    artstation?: string;
    demo?: string;
  };
  en: {
    title: string;
    engine: string;
    year: string;
    role: string;
    timeline: string;
    description: string;
    contributions: string[];
  };
  pt: {
    title: string;
    engine: string;
    year: string;
    role: string;
    timeline: string;
    description: string;
    contributions: string[];
  };
};

/**
 * Edit this array to add your real projects.
 * Keep `en` and `pt` in sync for bilingual support.
 */
export const projects: Project[] = [
  {
    id: "adventurous-metal-craig",
    category: "academic",
    images: [
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
    en: {
      title: "The Adventurous Metal Craig",
      engine: "Unity · C# · 3D",
      year: "2025",
      role: "Lead Gameplay Programmer",
      timeline: "1 year · TCC · PUC-SP",
      description:
        "3D action-platformer set in a Brazilian palafita archipelago. The player and combat stack were designed for growth: a Hierarchical State Machine owns locomotion and action flow, static Unity Events (UnityAction) decouple animation, combat, audio, and UI, and Scriptable Objects carry weapons, stats, input, and feedback data — so new states, combos, and damageables plug in without rewriting the core.",
      contributions: [
        "Hierarchical State Machine (HSM) — abstract State with super/sub nesting; root states (Ground, Jump, Fall, Blocking, Attack, Dash, Damaged, Death) and Idle/Walk as shared sub-states. UpdateStates / FixedUpdateStates cascade through the hierarchy so movement and combat share one context without duplicated transition logic.",
        "PlayerStateMachine + PlayerStateFactory — factory-built states and a single context exposing Movement, Combat, Health, Shield, Audio, and Input; adding a behavior is a new state class + factory method, not a rewrite of the player.",
        "Unity Events bus — PlayerEvents and GameEvents as UnityAction hubs (attack finish, hit detection window, VFX/SFX, pickups, pause, game flow). AnimationHandler, combat, and audio subscribe in OnEnable/OnDisable with no hard cross-references between layers.",
        "Scriptable Objects as data and behavior — WeaponSO holds AttackData combos (range, arc, VFX, AnimationClip) and runs OnAttack / damage via IHealth; PlayerStatsSO, ScreenShakeProfileSO, FMODEvents, and InputReader SO (New Input System → UnityAction) keep tuning asset-driven.",
        "Modular combat composition — PlayerCombatManager, directional Shield, combo index/cooldown, and lock-on; weapon rules live on the SO so new weapons are content, not manager forks. IHealth unifies player, enemies, and interactive damageables.",
        "Growth and optimization — managers split by responsibility (Movement / Combat / Health / Audio / Animation / UI); ObjectPooler for spawn-heavy FX/projectiles; OverlapSphereNonAlloc for lock-on; centralized hit queries and event-driven SFX so combat stays cheap as content scales.",
      ],
    },
    pt: {
      title: "The Adventurous Metal Craig",
      engine: "Unity · C# · 3D",
      year: "2025",
      role: "Lead Programador de Gameplay",
      timeline: "1 ano · TCC · PUC-SP",
      description:
        "Action-platformer 3D nas Ilhas de Palafita. O player e o combate foram pensados para crescer: Hierarchical State Machine controla locomoção e fluxo de ações, Unity Events estáticos (UnityAction) desacoplam animação, combate, áudio e UI, e Scriptable Objects carregam armas, stats, input e feedback — permitindo novos estados, combos e entidades damageable sem reescrever o núcleo.",
      contributions: [
        "Hierarchical State Machine (HSM) — State abstrata com aninhamento super/sub; estados raiz (Ground, Jump, Fall, Blocking, Attack, Dash, Damaged, Death) e Idle/Walk como subestados compartilhados. UpdateStates / FixedUpdateStates cascateiam na hierarquia para movimento e combate compartilharem um contexto sem lógica de transição duplicada.",
        "PlayerStateMachine + PlayerStateFactory — estados criados por factory e um contexto único com Movement, Combat, Health, Shield, Audio e Input; adicionar comportamento é nova classe de estado + método na factory, sem reescrever o player.",
        "Barramento de Unity Events — PlayerEvents e GameEvents como hubs UnityAction (fim de ataque, janela de detecção de hit, VFX/SFX, pickups, pause, fluxo de jogo). AnimationHandler, combate e áudio se inscrevem em OnEnable/OnDisable sem referências rígidas entre camadas.",
        "Scriptable Objects como dados e comportamento — WeaponSO com AttackData de combo (range, arco, VFX, AnimationClip) e OnAttack / dano via IHealth; PlayerStatsSO, ScreenShakeProfileSO, FMODEvents e InputReader SO (New Input System → UnityAction) mantêm o tuning asset-driven.",
        "Combate modular por composição — PlayerCombatManager, Shield direcional, índice/cooldown de combo e lock-on; regras de arma vivem no SO, então novas armas são conteúdo, não forks do manager. IHealth unifica player, inimigos e interativos damageable.",
        "Crescimento e otimização — managers por responsabilidade (Movement / Combat / Health / Audio / Animation / UI); ObjectPooler para FX/projéteis intensos; OverlapSphereNonAlloc no lock-on; queries de hit centralizadas e SFX via eventos para o combate permanecer leve conforme o conteúdo escala.",
      ],
    },
  },
  {
    id: "slimesivos",
    category: "academic",
    images: [
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
    en: {
      title: "Slimesivos",
      engine: "Unity · C# · 2D",
      year: "2024",
      role: "Gameplay Programmer",
      timeline: "3 months",
      description:
        "Vertical 2D platformer with a custom Rigidbody2D player controller. Gameplay systems are decoupled through Unity Events: input, movement, wall interactions, damage, animation, and VFX/SFX react to the same signals without hard references between scripts.",
      contributions: [
        "Event-driven architecture with Unity Events — loose coupling between input, player controller, animation, and VFX/SFX.",
        "Rigidbody2D player controller — wall-stick / wall-slide state machine, wall jump, double jump, gravity ramp, and respawn checkpoints.",
        "Mobile input with Unity's New Input System — tap and swipe mapped to gameplay actions via Unity Events.",
        "Wall and ground collision — contact normal validation that drives stick, slide, and orientation through Unity Events.",
        "Animation, particles, and SFX as event subscribers — shared feedback for jumps, damage, and wall contact.",
      ],
    },
    pt: {
      title: "Slimesivos",
      engine: "Unity · C# · 2D",
      year: "2024",
      role: "Programador de Gameplay",
      timeline: "3 meses",
      description:
        "Platformer 2D vertical com controller próprio em Rigidbody2D. Sistemas de gameplay desacoplados via Unity Events: input, movimento, interação com paredes, dano, animação e VFX/SFX reagem aos mesmos sinais sem referências rígidas entre scripts.",
      contributions: [
        "Arquitetura orientada a eventos com Unity Events — baixo acoplamento entre input, controller do player, animação e VFX/SFX.",
        "Controller Rigidbody2D — máquina de estados wall-stick / wall-slide, wall jump, double jump, rampa de gravidade e checkpoints de respawn.",
        "Input mobile com New Input System — tap e swipe mapeados para ações de gameplay via Unity Events.",
        "Colisão de parede e chão — validação da normal do contato que controla stick, slide e orientação via Unity Events.",
        "Animação, partículas e SFX como assinantes — feedback compartilhado de jumps, dano e contato com parede.",
      ],
    },
  },
  {
    id: "leaf-hopper",
    category: "academic",
    images: [
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
    en: {
      title: "Leaf Hopper",
      engine: "Unreal Engine 4 · C++",
      year: "2024",
      role: "Gameplay Programmer and 3D Artist",
      timeline: "2 months",
      description:
        "3D platformer (N64/PS1 style) in Unreal Engine 4. Player base built with C++ ACharacter and CharacterMovementComponent, spring-arm camera, and action/axis input. Gameplay features such as the Mushroom Jumper, enemy AI, particles, and custom 3D assets sit on top of that movement stack.",
      contributions: [
        "C++ ACharacter + CharacterMovementComponent — jump, air control, orientation to movement, and spring-arm follow camera.",
        "Traversal and obstacle gameplay — Mushroom Jumper interaction on the movement component.",
        "Enemy AI — combat and avoidance behaviors in corrupted forest levels.",
        "3D modeling and animation — stone enemy and capybara NPC, plus particle feedback for jumps and interactions.",
        "Unreal input — action/axis bindings for move, jump, and look, with touch jump hooks for device testing.",
      ],
    },
    pt: {
      title: "Leaf Hopper",
      engine: "Unreal Engine 4 · C++",
      year: "2024",
      role: "Programador de Gameplay e Artista 3D",
      timeline: "2 meses",
      description:
        "Platformer 3D (estilo N64/PS1) em Unreal Engine 4. Base do player em ACharacter C++ com CharacterMovementComponent, câmera spring-arm e input action/axis. Mecânicas como Mushroom Jumper, IA inimiga, partículas e assets 3D construídos sobre essa stack de movimento.",
      contributions: [
        "ACharacter C++ + CharacterMovementComponent — pulo, air control, orientação ao movimento e câmera follow com spring-arm.",
        "Travessia e obstáculos — interação Mushroom Jumper no component de movimento.",
        "IA inimiga — comportamentos de combate e esquiva nos níveis da floresta corrompida.",
        "Modelagem 3D e animação — inimigo de pedra e NPC capivara, além de partículas de feedback para pulos e interações.",
        "Input Unreal — binds action/axis para mover, pular e olhar, com hooks de toque para testes em dispositivo.",
      ],
    },
  },
  {
    id: "placeholder-pro-1",
    category: "professional",
    en: {
      title: "Project title",
      engine: "Unity",
      year: "2025",
      role: "Gameplay Programmer",
      timeline: "Ongoing",
      description:
        "Short description of the professional project. Replace this placeholder when ready.",
      contributions: [
        "Key contribution — edit me",
        "Key contribution — edit me",
      ],
    },
    pt: {
      title: "Título do projeto",
      engine: "Unity",
      year: "2025",
      role: "Programador de Gameplay",
      timeline: "Em andamento",
      description:
        "Descrição curta do projeto profissional. Substitua este placeholder quando estiver pronto.",
      contributions: [
        "Contribuição principal — edite",
        "Contribuição principal — edite",
      ],
    },
  },
  {
    id: "placeholder-pro-2",
    category: "professional",
    en: {
      title: "Project title",
      engine: "C# / Unity",
      year: "2025",
      role: "Unity Developer",
      timeline: "1 month",
      description:
        "Short description of the professional project. Replace this placeholder when ready.",
      contributions: ["Key contribution — edit me"],
    },
    pt: {
      title: "Título do projeto",
      engine: "C# / Unity",
      year: "2025",
      role: "Desenvolvedor Unity",
      timeline: "1 mês",
      description:
        "Descrição curta do projeto profissional. Substitua este placeholder quando estiver pronto.",
      contributions: ["Contribuição principal — edite"],
    },
  },
];
