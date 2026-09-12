function Fireflies({ count = 14, color = '#e8ff6a' }) {
  const bugs = Array.from({ length: count }, (_, i) => ({
    left: `${(i * 37 + 11) % 100}%`,
    top: `${(i * 53 + 18) % 78}%`,
    delay: `${(i * 0.47) % 4}s`,
    duration: `${2.4 + (i % 5) * 0.35}s`,
  }))
  return (
    <div className="fireflies">
      {bugs.map((b, i) => (
        <span
          key={i}
          className="firefly"
          style={{
            left: b.left,
            top: b.top,
            animationDelay: b.delay,
            animationDuration: b.duration,
            background: color,
            boxShadow: `0 0 10px 3px ${color}`,
          }}
        />
      ))}
    </div>
  )
}

function TigerScene() {
  return (
    <svg className="scene-art" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="tiger-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffd56a" />
          <stop offset="45%" stopColor="#ff8a3d" />
          <stop offset="100%" stopColor="#1f6b45" />
        </linearGradient>
        <radialGradient id="tiger-sun" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff4b0" />
          <stop offset="70%" stopColor="#ffb703" />
          <stop offset="100%" stopColor="#fb8500" />
        </radialGradient>
      </defs>
      <rect width="1200" height="800" fill="url(#tiger-sky)" />
      <g transform="translate(980 120)">
        <g className="sun-spin">
          {[...Array(12)].map((_, i) => (
            <rect
              key={i}
              x="-8"
              y="-168"
              width="16"
              height="70"
              rx="6"
              fill="#ffe566"
              transform={`rotate(${i * 30})`}
              opacity="0.85"
            />
          ))}
          <circle r="78" fill="url(#tiger-sun)" />
        </g>
      </g>
      <path d="M0 430 C180 360 280 500 460 420 C620 350 740 480 920 400 C1040 350 1120 430 1200 390 L1200 800 L0 800 Z" fill="#1b4332" />
      <path d="M0 520 C200 470 340 580 520 510 C720 430 860 560 1200 500 L1200 800 L0 800 Z" fill="#2d6a4f" />
      <g fill="#081c15">
        <ellipse cx="210" cy="640" rx="150" ry="70" />
        <circle cx="80" cy="520" r="90" />
        <circle cx="200" cy="500" r="110" />
        <circle cx="330" cy="540" r="80" />
        <rect x="175" y="560" width="36" height="160" />
        <circle cx="1080" cy="480" r="100" />
        <circle cx="1180" cy="520" r="80" />
        <rect x="1060" y="540" width="30" height="140" />
      </g>
      <g className="sway" style={{ transformOrigin: '420px 700px' }}>
        <ellipse cx="420" cy="640" rx="130" ry="55" fill="#e85d04" />
        <circle cx="300" cy="590" r="52" fill="#faa307" />
        <path d="M250 575 L268 520 L290 575 Z" fill="#faa307" />
        <path d="M310 575 L328 512 L348 575 Z" fill="#faa307" />
        <circle cx="286" cy="582" r="7" fill="#1a1a1a" />
        <path d="M540 640 C620 560 700 620 760 540" fill="none" stroke="#e85d04" strokeWidth="22" strokeLinecap="round" />
        <rect x="360" y="610" width="18" height="70" fill="#7b2d00" transform="rotate(-18 360 610)" />
        <rect x="410" y="615" width="16" height="68" fill="#7b2d00" transform="rotate(12 410 615)" />
        <rect x="455" y="608" width="16" height="72" fill="#7b2d00" transform="rotate(-8 455 608)" />
        <rect x="500" y="600" width="14" height="50" fill="#7b2d00" transform="rotate(20 500 600)" />
      </g>
      <g fill="#40916c" className="sway-slow">
        <path d="M40 800 C60 640 20 640 50 800" />
        <path d="M80 800 C110 600 50 600 90 800" />
        <path d="M140 800 C160 650 110 650 150 800" />
        <path d="M1100 800 C1130 620 1080 620 1120 800" />
        <path d="M1160 800 C1185 640 1135 640 1175 800" />
      </g>
    </svg>
  )
}

function EagleScene() {
  return (
    <svg className="scene-art" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="eagle-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8ecae6" />
          <stop offset="55%" stopColor="#219ebc" />
          <stop offset="100%" stopColor="#023047" />
        </linearGradient>
      </defs>
      <rect width="1200" height="800" fill="url(#eagle-sky)" />
      <circle cx="180" cy="130" r="70" fill="#fff3b0" />
      <g fill="#ffffff" opacity="0.85" className="drift">
        <ellipse cx="420" cy="160" rx="90" ry="28" />
        <ellipse cx="470" cy="150" rx="50" ry="22" />
        <ellipse cx="800" cy="220" rx="110" ry="30" />
        <ellipse cx="860" cy="210" rx="60" ry="24" />
      </g>
      <path className="wind-ribbon" d="M80 300 C250 240 320 360 500 280 C680 200 760 340 980 250" fill="none" stroke="#caf0f8" strokeWidth="6" strokeDasharray="18 14" opacity="0.7" />
      <path className="wind-ribbon delay" d="M40 380 C220 320 360 440 560 350 C740 270 880 400 1160 310" fill="none" stroke="#90e0ef" strokeWidth="4" strokeDasharray="12 16" opacity="0.55" />
      <polygon points="0,800 0,520 180,360 340,540 520,280 700,500 880,220 1040,470 1200,340 1200,800" fill="#3d405b" />
      <polygon points="0,800 0,620 220,480 400,640 620,420 820,600 1020,390 1200,560 1200,800" fill="#2b2d42" />
      <g className="soar">
        <ellipse cx="640" cy="240" rx="28" ry="16" fill="#f4f1de" />
        <path d="M640 240 L520 210 L560 250 L520 270 Z" fill="#1d3557" />
        <path d="M640 240 L780 200 L730 248 L790 268 Z" fill="#1d3557" />
        <path d="M655 248 L700 310 L648 258" fill="#e07a5f" />
        <circle cx="622" cy="236" r="4" fill="#111" />
      </g>
    </svg>
  )
}

function WolfScene() {
  return (
    <svg className="scene-art" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="wolf-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0b132b" />
          <stop offset="40%" stopColor="#1c2541" />
          <stop offset="100%" stopColor="#0d1b2a" />
        </linearGradient>
        <linearGradient id="aurora" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#39ff14" stopOpacity="0" />
          <stop offset="30%" stopColor="#80ffdb" stopOpacity="0.55" />
          <stop offset="60%" stopColor="#56cfe1" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#5e60ce" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="1200" height="800" fill="url(#wolf-sky)" />
      <path className="aurora" d="M0 220 C200 80 360 300 560 120 C760 0 940 240 1200 90 L1200 360 C900 280 700 400 0 300 Z" fill="url(#aurora)" />
      <circle cx="980" cy="120" r="58" fill="#f8f9fa" />
      <circle cx="960" cy="108" r="58" fill="#0b132b" />
      {[...Array(18)].map((_, i) => (
        <circle key={i} cx={(i * 97 + 40) % 1200} cy={(i * 41 + 30) % 280} r={i % 3 ? 1.6 : 2.4} fill="#fff" />
      ))}
      <g fill="#14213d">
        {[80, 180, 280, 390, 520, 650, 780, 900, 1020, 1140].map((x, i) => (
          <g key={x}>
            <polygon points={`${x},800 ${x + 28},800 ${x + 14},${420 - (i % 4) * 40}`} />
            <polygon points={`${x - 30},800 ${x + 58},800 ${x + 14},${520 - (i % 3) * 30}`} opacity="0.8" />
          </g>
        ))}
      </g>
      <ellipse cx="260" cy="690" rx="90" ry="36" fill="#415a77" />
      <g className="howl">
        <path d="M200 690 L230 560 L270 690 Z" fill="#adb5bd" />
        <circle cx="248" cy="530" r="36" fill="#ced4da" />
        <path d="M222 510 L228 470 L246 512 Z" fill="#ced4da" />
        <path d="M250 512 L268 464 L278 518 Z" fill="#ced4da" />
        <path d="M270 540 C320 500 340 560 300 575" fill="#adb5bd" />
        <circle cx="238" cy="526" r="5" fill="#111" />
      </g>
    </svg>
  )
}

function OwlScene() {
  return (
    <svg className="scene-art" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="owl-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a0a2e" />
          <stop offset="100%" stopColor="#16213e" />
        </linearGradient>
      </defs>
      <rect width="1200" height="800" fill="url(#owl-sky)" />
      {[...Array(24)].map((_, i) => (
        <circle
          key={i}
          className="twinkle"
          cx={(i * 83 + 20) % 1180}
          cy={(i * 29 + 16) % 360}
          r={i % 4 === 0 ? 2.6 : 1.5}
          fill="#ffeaa7"
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
      <rect x="540" y="280" width="90" height="520" rx="20" fill="#2b2118" />
      <circle cx="585" cy="200" r="130" fill="#1b4332" />
      <circle cx="470" cy="260" r="90" fill="#2d6a4f" />
      <circle cx="700" cy="250" r="100" fill="#081c15" />
      <circle cx="200" cy="420" r="120" fill="#1b4332" />
      <rect x="180" y="420" width="40" height="380" fill="#2b2118" />
      <circle cx="1020" cy="380" r="110" fill="#081c15" />
      <rect x="1000" y="400" width="40" height="400" fill="#2b2118" />
      <g transform="translate(585 455)">
      <g className="breathe">
        <ellipse cx="0" cy="20" rx="54" ry="64" fill="#c9a227" />
        <circle cx="-18" cy="-6" r="18" fill="#fff8e7" />
        <circle cx="18" cy="-6" r="18" fill="#fff8e7" />
        <circle cx="-18" cy="-6" r="8" fill="#222" />
        <circle cx="18" cy="-6" r="8" fill="#222" />
        <polygon points="0,4 10,28 -10,28" fill="#e07a5f" />
        <path d="M-40 -20 L-28 -48 L-10 -18" fill="#c9a227" />
        <path d="M40 -20 L28 -48 L10 -18" fill="#c9a227" />
      </g>
      </g>
      <g>
        <ellipse cx="160" cy="720" rx="22" ry="16" fill="#80ffdb" />
        <rect x="155" y="720" width="10" height="50" fill="#95d5b2" />
        <ellipse cx="230" cy="740" rx="16" ry="12" fill="#56cfe1" />
        <rect x="226" y="740" width="8" height="40" fill="#95d5b2" />
        <ellipse cx="980" cy="730" rx="20" ry="14" fill="#b8f2e6" />
        <rect x="976" y="730" width="8" height="44" fill="#95d5b2" />
      </g>
    </svg>
  )
}

function FoxScene() {
  return (
    <svg className="scene-art" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="fox-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffc971" />
          <stop offset="40%" stopColor="#ff8c42" />
          <stop offset="100%" stopColor="#4a7c59" />
        </linearGradient>
      </defs>
      <rect width="1200" height="800" fill="url(#fox-sky)" />
      <circle cx="160" cy="140" r="80" fill="#ffe066" />
      <g className="drift" fill="#f4a261" opacity="0.35">
        <ellipse cx="500" cy="180" rx="80" ry="24" />
        <ellipse cx="900" cy="130" rx="100" ry="26" />
      </g>
      <path d="M0 480 C200 430 400 520 600 450 C820 370 1000 500 1200 430 L1200 800 L0 800 Z" fill="#adc178" />
      <path d="M0 580 C180 540 360 630 560 560 C780 480 980 620 1200 540 L1200 800 L0 800 Z" fill="#6a994e" />
      <g className="sway-slow" fill="#dda15e">
        {[40, 90, 150, 210, 280, 340].map((x, i) => (
          <path key={x} d={`M${x} 800 C${x + 10} ${640 - i * 8} ${x - 20} ${640 - i * 8} ${x + 8} 800`} />
        ))}
        {[860, 930, 1000, 1070, 1140].map((x, i) => (
          <path key={x} d={`M${x} 800 C${x + 12} ${650 - i * 6} ${x - 18} ${650 - i * 6} ${x + 6} 800`} />
        ))}
      </g>
      <g className="sway" transform="translate(640 620)">
        <ellipse cx="0" cy="40" rx="70" ry="32" fill="#e76f51" />
        <circle cx="-48" cy="8" r="34" fill="#f4a261" />
        <path d="M-70 -4 L-78 -48 L-40 0 Z" fill="#f4a261" />
        <path d="M-30 -2 L-22 -50 L-8 6 Z" fill="#f4a261" />
        <circle cx="-56" cy="4" r="5" fill="#1d1d1d" />
        <path d="M60 36 C110 0 130 50 90 62" fill="#e76f51" />
        <ellipse cx="-62" cy="18" rx="10" ry="6" fill="#fff" />
      </g>
      <g className="fall-leaf" fill="#bc4749">
        <ellipse cx="300" cy="200" rx="14" ry="8" transform="rotate(20 300 200)" />
        <ellipse cx="750" cy="80" rx="12" ry="7" transform="rotate(-30 750 80)" />
        <ellipse cx="1000" cy="260" rx="13" ry="8" transform="rotate(40 1000 260)" />
      </g>
    </svg>
  )
}

function BearScene() {
  return (
    <svg className="scene-art" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="bear-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a8dadc" />
          <stop offset="50%" stopColor="#457b9d" />
          <stop offset="100%" stopColor="#1d3557" />
        </linearGradient>
        <linearGradient id="river" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#48cae4" />
          <stop offset="50%" stopColor="#00b4d8" />
          <stop offset="100%" stopColor="#0077b6" />
        </linearGradient>
      </defs>
      <rect width="1200" height="800" fill="url(#bear-sky)" />
      <polygon points="80,520 260,220 440,520" fill="#6c757d" />
      <polygon points="360,540 560,160 780,540" fill="#495057" />
      <polygon points="700,530 900,250 1100,530" fill="#6c757d" />
      <polygon points="500,540 560,280 640,540" fill="#adb5bd" />
      <path d="M0 560 C200 520 280 620 500 570 C740 510 880 640 1200 580 L1200 800 L0 800 Z" fill="#2d6a4f" />
      <path className="river-flow" d="M-20 640 C180 600 260 720 480 660 C700 600 820 740 1220 650 L1220 800 L-20 800 Z" fill="url(#river)" />
      <g fill="#90e0ef" opacity="0.7" className="sparkle">
        <circle cx="200" cy="680" r="4" />
        <circle cx="420" cy="700" r="3" />
        <circle cx="640" cy="660" r="5" />
        <circle cx="880" cy="710" r="3" />
        <circle cx="1040" cy="675" r="4" />
      </g>
      <g transform="translate(340 560)">
        <ellipse cx="0" cy="40" rx="80" ry="48" fill="#6f4518" />
        <circle cx="-70" cy="-10" r="42" fill="#8b5e34" />
        <circle cx="-92" cy="-38" r="14" fill="#6f4518" />
        <circle cx="-48" cy="-40" r="14" fill="#6f4518" />
        <circle cx="-82" cy="-14" r="5" fill="#111" />
        <ellipse cx="-74" cy="6" rx="12" ry="8" fill="#d4a373" />
        <circle cx="70" cy="8" r="18" fill="#6f4518" />
      </g>
      <g className="leap" fill="#fb8500">
        <ellipse cx="520" cy="690" rx="22" ry="8" />
        <path d="M500 690 L470 678 L502 684" />
        <path d="M538 690 L568 676 L540 686" />
      </g>
    </svg>
  )
}

function FireflyScene() {
  return (
    <svg className="scene-art" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="ff-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#051c15" />
          <stop offset="100%" stopColor="#0b3d2e" />
        </linearGradient>
      </defs>
      <rect width="1200" height="800" fill="url(#ff-sky)" />
      <g fill="#06281f">
        <circle cx="140" cy="420" r="160" />
        <rect x="120" y="420" width="50" height="380" />
        <circle cx="400" cy="360" r="180" />
        <rect x="375" y="380" width="55" height="420" />
        <circle cx="720" cy="400" r="150" />
        <rect x="698" y="400" width="48" height="400" />
        <circle cx="1020" cy="340" r="190" />
        <rect x="996" y="360" width="55" height="440" />
      </g>
      <path d="M0 640 C300 600 600 700 1200 620 L1200 800 L0 800 Z" fill="#0d2818" />
    </svg>
  )
}

function HomeScene() {
  return (
    <svg className="scene-art" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="home-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#89c2d9" />
          <stop offset="35%" stopColor="#f4a261" />
          <stop offset="70%" stopColor="#2d6a4f" />
          <stop offset="100%" stopColor="#1b4332" />
        </linearGradient>
        <radialGradient id="home-sun" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff3b0" />
          <stop offset="100%" stopColor="#ffb703" />
        </radialGradient>
      </defs>
      <rect width="1200" height="800" fill="url(#home-sky)" />
      <g transform="translate(600 150)">
        <g className="sun-spin">
          {[...Array(16)].map((_, i) => (
            <rect key={i} x="-6" y="-150" width="12" height="50" rx="5" fill="#ffe566" transform={`rotate(${i * 22.5})`} />
          ))}
          <circle r="64" fill="url(#home-sun)" />
        </g>
      </g>
      <path d="M0 420 C180 360 360 460 540 380 C760 280 940 430 1200 350 L1200 800 L0 800 Z" fill="#40916c" />
      <path d="M0 520 C220 470 420 580 640 500 C860 420 1040 560 1200 490 L1200 800 L0 800 Z" fill="#2d6a4f" />
      <g fill="#1b4332">
        <circle cx="90" cy="430" r="80" />
        <rect x="70" y="450" width="36" height="200" />
        <circle cx="1110" cy="400" r="100" />
        <rect x="1090" y="430" width="40" height="220" />
        <circle cx="200" cy="500" r="50" />
      </g>
      <g fill="#081c15" opacity="0.9">
        <ellipse cx="320" cy="640" rx="40" ry="16" />
        <path d="M290 630 L300 580 L340 630" />
        <path d="M430 650 L470 600 L500 655 L460 660 Z" />
        <circle cx="860" cy="600" r="18" />
        <path d="M840 600 L800 575 L845 612" />
        <path d="M880 600 L930 568 L878 612" />
      </g>
    </svg>
  )
}

function MeadowScene() {
  return (
    <svg className="scene-art" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="meadow-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#bde0fe" />
          <stop offset="100%" stopColor="#2d6a4f" />
        </linearGradient>
      </defs>
      <rect width="1200" height="800" fill="url(#meadow-sky)" />
      <circle cx="1000" cy="120" r="70" fill="#ffd166" />
      <path d="M0 480 C300 420 600 540 1200 440 L1200 800 L0 800 Z" fill="#40916c" />
      <path d="M0 600 C400 540 800 660 1200 560 L1200 800 L0 800 Z" fill="#2d6a4f" />
    </svg>
  )
}

const scenes = {
  home: HomeScene,
  tiger: TigerScene,
  eagle: EagleScene,
  wolf: WolfScene,
  owl: OwlScene,
  fox: FoxScene,
  bear: BearScene,
  firefly: FireflyScene,
}

export default function WildlifeScene({ theme = 'home' }) {
  const Scene = scenes[theme] || MeadowScene
  const fireflyColor = {
    tiger: '#ffe566',
    eagle: '#caf0f8',
    wolf: '#80ffdb',
    owl: '#ffeaa7',
    fox: '#ffd166',
    bear: '#90e0ef',
    firefly: '#e8ff6a',
    home: '#e8ff6a',
  }[theme] || '#e8ff6a'

  return (
    <div className={`scene scene-${theme}`} aria-hidden="true">
      <Scene />
      <Fireflies count={theme === 'firefly' ? 28 : 10} color={fireflyColor} />
    </div>
  )
}
