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
      timeline: "1 year, TCC, PUC-SP",
      description:
        "3D action platformer set in the Palafita Isles. Player and combat were structured so the game can grow. A Hierarchical State Machine controls locomotion and actions. Unity Events separate animation, combat, audio, and UI. Scriptable Objects hold weapons, stats, input, and feedback. New states, combos, and damageable targets are added as content, and the core of the system stays in place.",
      contributions: [
        "The Hierarchical State Machine uses an abstract State, with root states and nested sub states. Root states cover Ground, Jump, Fall, Blocking, Attack, Dash, Damaged, and Death. Idle and Walk are shared sub states. UpdateStates and FixedUpdateStates walk the hierarchy, so movement and combat share one context and the transition logic lives in one place.",
        "PlayerStateMachine and PlayerStateFactory create the states and expose Movement, Combat, Health, Shield, Audio, and Input through a single context. A new behavior is a new state class and a factory method.",
        "PlayerEvents and GameEvents are UnityAction hubs for attack completion, the hit window, VFX and SFX, pickups, pause, and game flow. AnimationHandler, combat, and audio subscribe in OnEnable and OnDisable, which keeps the layers independent.",
        "WeaponSO stores each combo step in AttackData, with range, arc, VFX, and AnimationClip, and applies damage through IHealth. PlayerStatsSO, ScreenShakeProfileSO, FMODEvents, and the InputReader, connected to the New Input System, keep the tuning in assets.",
        "Combat is split across PlayerCombatManager, a directional shield, combo tracking, and lock on. Weapon rules live on the Scriptable Object, and IHealth gives the player, enemies, and interactive objects the same damage contract.",
        "Managers are split by responsibility: Movement, Combat, Health, Audio, Animation, and UI. ObjectPooler reuses effects and projectiles, lock on uses OverlapSphereNonAlloc, and hit detection is centralized so combat stays lightweight as content grows.",
      ],
    },
    pt: {
      title: "The Adventurous Metal Craig",
      engine: "Unity · C# · 3D",
      year: "2025",
      role: "Lead Programador de Gameplay",
      timeline: "1 ano, TCC, PUC-SP",
      description:
        "Action platformer 3D nas Ilhas de Palafita. Player e combate foram organizados para o jogo poder crescer. Uma Hierarchical State Machine controla locomoção e ações. Unity Events separam animação, combate, áudio e interface. Scriptable Objects concentram armas, atributos, input e feedback. Estados, combos e alvos de dano novos entram como conteúdo, e o núcleo do sistema permanece.",
      contributions: [
        "A Hierarchical State Machine usa uma State abstrata, com estados raiz e subestados. Os estados raiz cobrem Ground, Jump, Fall, Blocking, Attack, Dash, Damaged e Death. Idle e Walk são subestados compartilhados. UpdateStates e FixedUpdateStates percorrem a hierarquia, então movimento e combate usam o mesmo contexto e a lógica de transição fica em um só lugar.",
        "PlayerStateMachine e PlayerStateFactory criam os estados e reúnem Movement, Combat, Health, Shield, Audio e Input em um contexto único. Um comportamento novo é uma classe de estado e um método na factory.",
        "PlayerEvents e GameEvents funcionam como barramento de UnityAction para o fim do ataque, a janela de acerto, VFX e SFX, coleta de itens, pause e fluxo de jogo. AnimationHandler, combate e áudio se inscrevem em OnEnable e OnDisable, o que mantém as camadas independentes.",
        "WeaponSO guarda cada passo do combo em AttackData, com alcance, arco, VFX e AnimationClip, e aplica o dano por IHealth. PlayerStatsSO, ScreenShakeProfileSO, FMODEvents e o InputReader, ligado ao New Input System, mantêm o ajuste dos valores nos assets.",
        "O combate se divide entre PlayerCombatManager, escudo direcional, controle de combo e lock on. As regras de cada arma ficam no Scriptable Object, e IHealth dá ao player, aos inimigos e aos objetos interativos o mesmo contrato de dano.",
        "Os managers são divididos por responsabilidade: Movement, Combat, Health, Audio, Animation e UI. ObjectPooler reaproveita efeitos e projéteis, o lock on usa OverlapSphereNonAlloc, e a detecção de acerto fica centralizada para o combate continuar leve conforme o conteúdo aumenta.",
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
        "Vertical 2D platformer with a custom Rigidbody2D controller. Input, movement, wall contact, damage, animation, and VFX/SFX react to the same Unity Events, so the scripts stay independent.",
      contributions: [
        "Unity Events connect input, the player controller, animation, and VFX/SFX.",
        "The Rigidbody2D controller covers wall stick, wall slide, wall jump, double jump, a gravity ramp, and respawn checkpoints.",
        "Mobile input uses the New Input System. Tap and swipe map to gameplay actions through Unity Events.",
        "Wall and ground collision reads the contact normal and drives stick, slide, and facing through Unity Events.",
        "Animation, particles, and SFX subscribe to the same events and share feedback for jumps, damage, and wall contact.",
      ],
    },
    pt: {
      title: "Slimesivos",
      engine: "Unity · C# · 2D",
      year: "2024",
      role: "Programador de Gameplay",
      timeline: "3 meses",
      description:
        "Platformer 2D vertical com controller próprio em Rigidbody2D. Input, movimento, contato com paredes, dano, animação e VFX/SFX reagem aos mesmos Unity Events, e os scripts permanecem independentes.",
      contributions: [
        "Unity Events conectam input, controller do player, animação e VFX/SFX.",
        "O controller em Rigidbody2D cobre wall stick, wall slide, wall jump, double jump, rampa de gravidade e checkpoints de respawn.",
        "O input mobile usa o New Input System. Tap e swipe viram ações de gameplay por Unity Events.",
        "A colisão de parede e chão lê a normal do contato e controla stick, slide e orientação por Unity Events.",
        "Animação, partículas e SFX assinam os mesmos eventos e compartilham o feedback de pulo, dano e contato com parede.",
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
        "3D platformer in an N64 and PS1 visual style, built in Unreal Engine 4. The player is a C++ ACharacter with CharacterMovementComponent, a spring arm camera, and action and axis input. Mushroom Jumper, enemy AI, particles, and custom 3D assets are built on that movement base.",
      contributions: [
        "ACharacter and CharacterMovementComponent handle jump, air control, orientation to movement, and a spring arm follow camera.",
        "The Mushroom Jumper is an interaction on the movement component and supports traversal.",
        "Enemy AI handles combat and avoidance in the corrupted forest levels.",
        "3D modeling and animation cover the stone enemy and the capybara NPC, with particles for jumps and interactions.",
        "Input uses action and axis bindings for move, jump, and look, including touch jump for tests on device.",
      ],
    },
    pt: {
      title: "Leaf Hopper",
      engine: "Unreal Engine 4 · C++",
      year: "2024",
      role: "Programador de Gameplay e Artista 3D",
      timeline: "2 meses",
      description:
        "Platformer 3D com visual de N64 e PS1, feito em Unreal Engine 4. O player é um ACharacter em C++ com CharacterMovementComponent, câmera spring arm e input de ação e eixo. Mushroom Jumper, IA inimiga, partículas e assets 3D próprios foram construídos sobre essa base de movimento.",
      contributions: [
        "ACharacter e CharacterMovementComponent cuidam do pulo, do air control, da orientação ao movimento e da câmera com spring arm.",
        "O Mushroom Jumper é uma interação no component de movimento e serve para a travessia.",
        "A IA inimiga trata combate e esquiva nos níveis da floresta corrompida.",
        "A modelagem e a animação 3D cobrem o inimigo de pedra e o NPC capivara, com partículas para pulos e interações.",
        "O input usa binds de ação e eixo para mover, pular e olhar, incluindo pulo por toque para testes em dispositivo.",
      ],
    },
  },
  {
    id: "placeholder-pro-1",
    category: "professional",
    en: {
      title: "Professional project",
      engine: "Unity",
      year: "2025",
      role: "Game Developer",
      timeline: "In progress",
      description:
        "Professional project being updated.",
      contributions: ["Details coming soon."],
    },
    pt: {
      title: "Projeto profissional",
      engine: "Unity",
      year: "2025",
      role: "Desenvolvedor de Jogos",
      timeline: "Em andamento",
      description: "Projeto profissional em atualização.",
      contributions: ["Detalhes em breve."],
    },
  },
  {
    id: "placeholder-pro-2",
    category: "professional",
    en: {
      title: "Professional project",
      engine: "C# / Unity",
      year: "2025",
      role: "Unity Developer",
      timeline: "1 month",
      description: "Professional project being updated.",
      contributions: ["Details coming soon."],
    },
    pt: {
      title: "Projeto profissional",
      engine: "C# / Unity",
      year: "2025",
      role: "Desenvolvedor Unity",
      timeline: "1 mês",
      description: "Projeto profissional em atualização.",
      contributions: ["Detalhes em breve."],
    },
  },
];
