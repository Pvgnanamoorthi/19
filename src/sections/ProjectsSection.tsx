// slider effect rewritten

import { useRef, useState } from 'react';
import { motion, AnimatePresence, type PanInfo } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import ProjectButton from '../components/ProjectButton';


const IMAGE_BASE = `${import.meta.env.BASE_URL}images`;

interface Project {
  number: string;
  name: string;
  category: string;
  description: string;
  tags: string;
  href: string;
  col1Images: [string, string];
  col2Image: string;
}

const PROJECTS: Project[] = [
  {
    number: '01',
    name: 'SKATEBOARD RIDE - OBBY GAME',
    category: 'Casual Game · Save & Replay Machanism',
    description:
      'A physics-based skateboard obby game featuring smooth movement, challenging obstacles, and a custom JSON-based save & replay system for frame-accurate gameplay reproduction.',
    tags: 'HYPER CASUAL GAME DEVELOPMENT · CASUAL GAMES · UNITY · C# · SAVE SYSTEM · REPLAY SYSTEM',
    href: 'https://www.linkedin.com/posts/gnanamoorthipv_obbygame-skateboardgame-physicsbasedgame-activity-7449439104963960833-_jzn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_0QtcBD2RuLZyQWnkv4vRnHCbYvzldPgM',
    col1Images: [`${IMAGE_BASE}/heeding-3.jpg`, `${IMAGE_BASE}/heeding-2.jpg`,],
    col2Image: `${IMAGE_BASE}/heeding-1.jpg`,
  },
  {
    number: '02',
    name: 'REAL-TIME MULTIPLAYER SYSTEM',
    category: 'Game-mulitiplayer car racing',
    description:
      'A dedicated-server multiplayer system built with Mirror Networking, featuring room-code matchmaking, real-time player synchronization, persistent sessions, and reliable reconnect handling.',
    tags: 'MULTIPLAYER · UNITY · MIRROR · C# · DEDICATED SERVER · ROOM SYSTEM · RECONNECT',
    href: 'https://www.linkedin.com/posts/gnanamoorthipv_unity-gamedevelopment-multiplayer-activity-7460898009279651840-vOP5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_0QtcBD2RuLZyQWnkv4vRnHCbYvzldPgM',
    
    col1Images: [`${IMAGE_BASE}/lockai-1.jpg`,`${IMAGE_BASE}/lockai-2.jpg`,],
    col2Image: `${IMAGE_BASE}/lockai-3.jpg`,
  },
  {
    number: '03',
    name: 'FOREST DRIVE',
    category: 'Game - Open world game',
    description:
      'An immersive driving experience built in Unity, combining custom terrain and environment design with realistic vehicle physics, suspension tuning, steering, and responsive driving mechanics.',
    tags: 'UNITY · C# · TERRAIN DESIGN · VEHICLE PHYSICS · WHEEL COLLIDERS',
    href: 'https://play.unity.com/en/games/9fa63aa1-b27a-4b28-b89f-2942454c000a/forest-drive',
    col1Images: [`${IMAGE_BASE}/freight-1.jpg`,`${IMAGE_BASE}/freight-2.jpg`,],
    col2Image: `${IMAGE_BASE}/freight-3.jpg`,
  },
  {
    number: '04',
    name: 'MULTIPLAYER CAR RACING GAME - NETCODE',
    category: 'Game - Endless Runner Game ',
    description:
      'A real-time multiplayer system built in Unity using a host-client architecture, focused on player synchronization, networking, and reliable data communication. The project implemented real-time transform synchronization, optimized update frequency, interpolation, and modular networking architecture to reduce lag and desynchronization.',
    tags: 'MULTIPLAYER · UNITY · C# · NETWORKING · HOST-CLIENT · SYNCHRONIZATION · INTERPOLATION',
    href: 'https://www.linkedin.com/posts/gnanamoorthipv_unity-multiplayer-gamedevelopment-activity-7443605338660200448-k5xL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_0QtcBD2RuLZyQWnkv4vRnHCbYvzldPgM',
    
    col1Images: [`${IMAGE_BASE}/Car 1.jpg`,`${IMAGE_BASE}/Car 2.jpg`,],
    col2Image: `${IMAGE_BASE}/Car 3.jpg`,
  },
  {
    number: '05',
    name: 'RAPID FIRE',
    category: 'Game - FPS Prototype',
    description:
      'A fast-paced FPS prototype built in Unity, focused on core shooting mechanics, enemy AI, hit detection, character controls, and responsive combat interactions. The project also introduced NavMesh-based enemy pathfinding and animation systems to create more dynamic enemy behavior.',
    tags: 'UNITY · C# · FPS · AI · NAVMESH · SHOOTING · ANIMATIONS',
    href: 'https://play.unity.com/en/games/f8321020-a3b5-41ff-ac56-81705d01cd2d/rapid-fire',
    
    col1Images: [`${IMAGE_BASE}/Rapid 3.jpg`,`${IMAGE_BASE}/Rapid 1.jpg`,],
    col2Image: `${IMAGE_BASE}/Rapid 2.jpg`,
  },
  {
    number: '06',
    name: 'XO CLASH',
    category: 'Game - Logical Game ',
    description:
      'A strategic Tic Tac Toe game built in Unity, focused on turn-based gameplay, win-condition logic, player input handling, and structured game flow. The project strengthened my problem-solving and debugging skills through edge-case handling, draw detection, and invalid move prevention.',
    tags: 'C# · GAME LOGIC · TURN-BASED · WIN CONDITIONS · UI',
    href: 'https://play.unity.com/en/games/2d29ab6c-07e3-421d-a284-9965c84493b1/xo-clash',
    
    col1Images: [`${IMAGE_BASE}/xo 1.jpg`,`${IMAGE_BASE}/xo 3.jpg`,],
    col2Image: `${IMAGE_BASE}/xo 2.jpg`,
  },
  {
    number: '07',
    name: 'SITE SPRINT',
    category: 'Game - Endless Runner Game ',
    description:
      'An endless runner game built from scratch in Unity, focused on smooth player movement, physics-based obstacles, collision systems, and engaging gameplay. The project provided hands-on experience with game mechanics, scene management, UI design, gameplay balancing, debugging, and performance optimization.',
    tags: 'GAME DEVELOPMENT · UNITY · C# · ENDLESS RUNNER · PHYSICS · UI · OPTIMIZATION',
    href: 'https://play.unity.com/en/games/3c551013-a406-4775-a5b2-8e453b296c40/site-sprint',
    
    col1Images: [`${IMAGE_BASE}/site 3.jpg`,`${IMAGE_BASE}/site 1.jpg`,],
    col2Image: `${IMAGE_BASE}/site 2.jpg`,
  },
];

const TOTAL = PROJECTS.length;
// How many cards show on each side of the active one before they fade out.
const MAX_VISIBLE_OFFSET = 2;

function wrappedOffset(index: number, active: number) {
  let offset = index - active;
  if (offset > TOTAL / 2) offset -= TOTAL;
  if (offset < -TOTAL / 2) offset += TOTAL;
  return offset;
}

function FanCard({
  project,
  offset,
  onSelect,
}: {
  project: Project;
  offset: number;
  onSelect: () => void;
}) {
  const abs = Math.abs(offset);
  const isActive = offset === 0;
  const hidden = abs > MAX_VISIBLE_OFFSET;

  const translateX = `calc(-50% + (${offset} * clamp(76px, 10vw, 150px)))`;
  const translateY = `calc(-50% + (${abs} * clamp(12px, 2.6vw, 28px)))`;
  const rotate = offset * 9;
  const scale = Math.max(0.66, 1 - abs * 0.14);

  return (
    <motion.button
      type="button"
      aria-label={`Show ${project.name}`}
      aria-current={isActive}
      onClick={onSelect}
      className="absolute left-1/2 top-1/2 overflow-hidden rounded-[28px] sm:rounded-[36px] border-2"
      style={{
        width: 'clamp(160px, 24vw, 320px)',
        height: 'clamp(220px, 32vw, 420px)',
        borderColor: isActive ? '#D7E2EA' : 'rgba(215,226,234,0.2)',
        zIndex: 100 - abs,
        cursor: isActive ? 'default' : hidden ? 'default' : 'pointer',
        pointerEvents: hidden ? 'none' : 'auto',
        boxShadow: isActive ? '0 30px 60px rgba(0,0,0,0.5)' : '0 12px 30px rgba(0,0,0,0.35)',
      }}
      initial={false}
      animate={{
        x: translateX,
        y: translateY,
        rotate,
        scale,
        opacity: hidden ? 0 : 1,
      }}
      transition={{ type: 'spring', stiffness: 260, damping: 30 }}
    >
      <img
        src={project.col2Image}
        alt={project.name}
        draggable={false}
        className="w-full h-full object-cover select-none"
      />
      {isActive && (
        <span
          className="hero-heading font-black leading-none absolute bottom-3 left-4 sm:bottom-4 sm:left-5"
          style={{ color: '#D7E2EA', fontSize: 'clamp(2rem, 6vw, 4.5rem)', textShadow: '0 4px 20px rgba(0,0,0,0.6)' }}
        >
          {project.number}
        </span>
      )}
    </motion.button>
  );
}

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const dragLocked = useRef(false);
  const active = PROJECTS[activeIndex];

  const goTo = (i: number) => setActiveIndex(((i % TOTAL) + TOTAL) % TOTAL);
  const next = () => goTo(activeIndex + 1);
  const prev = () => goTo(activeIndex - 1);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (dragLocked.current) return;
    if (info.offset.x < -60) next();
    else if (info.offset.x > 60) prev();
  };

  return (
    <section
      id="projects"
      className="relative z-10 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ backgroundColor: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-14 sm:mb-16 md:mb-20"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Game Library
        </h2>
      </FadeIn>

      {/* Fan slider */}
      <motion.div
        role="region"
        aria-label="Project gallery"
        className="relative mx-auto touch-pan-y"
        style={{ height: 'clamp(260px, 42vw, 480px)', maxWidth: '1100px', cursor: 'grab' }}
        drag="x"
        dragElastic={0.15}
        dragConstraints={{ left: 0, right: 0 }}
        onDragStart={() => (dragLocked.current = false)}
        onDragEnd={handleDragEnd}
      >
        {PROJECTS.map((project, i) => {
          const offset = wrappedOffset(i, activeIndex);
          return (
            <FanCard
              key={project.number}
              project={project}
              offset={offset}
              onSelect={() => goTo(i)}
            />
          );
        })}
      </motion.div>

      {/* Arrows + numbered pager */}
      <div className="flex items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-10">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous project"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center transition-opacity hover:opacity-70 flex-shrink-0"
          style={{ borderColor: 'rgba(215,226,234,0.4)', color: '#D7E2EA' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="flex items-center gap-2 sm:gap-4 flex-wrap justify-center">
          {PROJECTS.map((project, i) => (
            <button
              key={project.number}
              type="button"
              onClick={() => goTo(i)}
              aria-current={i === activeIndex}
              className="uppercase tracking-widest text-xs sm:text-sm font-medium px-1 transition-opacity"
              style={{ color: '#D7E2EA', opacity: i === activeIndex ? 1 : 0.35 }}
            >
              {project.number}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Next project"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center transition-opacity hover:opacity-70 flex-shrink-0"
          style={{ borderColor: 'rgba(215,226,234,0.4)', color: '#D7E2EA' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Active project detail */}
      <div className="max-w-3xl mx-auto mt-10 sm:mt-14 text-center px-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.number}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.28 }}
          >
            <p
              className="uppercase tracking-widest text-[0.65rem] sm:text-xs mb-2"
              style={{ color: '#D7E2EA', opacity: 0.6 }}
            >
              {active.category}
            </p>
            <h3
              className="font-medium uppercase mb-3"
              style={{ color: '#D7E2EA', fontSize: 'clamp(1.3rem, 3vw, 2.3rem)' }}
            >
              {active.name}
            </h3>
            <p
              className="font-light leading-relaxed max-w-2xl mx-auto mb-4"
              style={{ color: '#D7E2EA', opacity: 0.6, fontSize: 'clamp(0.85rem, 1.3vw, 1.05rem)' }}
            >
              {active.description}
            </p>
            <p
              className="uppercase tracking-widest text-[0.6rem] sm:text-[0.7rem] mb-6"
              style={{ color: '#D7E2EA', opacity: 0.4 }}
            >
              {active.tags}
            </p>

            <div className="flex justify-center gap-3 sm:gap-4 mb-7">
              <img
                src={active.col1Images[0]}
                alt={`${active.name} detail 1`}
                className="w-20 h-14 sm:w-28 sm:h-20 object-cover rounded-2xl"
              />
              <img
                src={active.col1Images[1]}
                alt={`${active.name} detail 2`}
                className="w-20 h-14 sm:w-28 sm:h-20 object-cover rounded-2xl"
              />
            </div>

            <div className="flex justify-center">
              <ProjectButton href={active.href} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
