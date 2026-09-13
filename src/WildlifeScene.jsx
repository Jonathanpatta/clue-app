function Sparks({ count = 12, color = '#e8ff6a' }) {
  const bits = Array.from({ length: count }, (_, i) => ({
    left: `${(i * 37 + 11) % 100}%`,
    top: `${(i * 53 + 18) % 78}%`,
    delay: `${(i * 0.47) % 4}s`,
    duration: `${2.4 + (i % 5) * 0.35}s`,
  }))
  return (
    <div className="fireflies">
      {bits.map((b, i) => (
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

function GrasslandScene() {
  return (
    <svg className="scene-art" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="g-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffe566" />
          <stop offset="40%" stopColor="#f4a261" />
          <stop offset="100%" stopColor="#adc178" />
        </linearGradient>
      </defs>
      <rect width="1200" height="800" fill="url(#g-sky)" />
      <circle cx="980" cy="130" r="70" fill="#fff3b0" />
      <path d="M0 430 C220 360 420 480 640 400 C860 320 1040 460 1200 390 L1200 800 L0 800 Z" fill="#6a994e" />
      <path d="M0 540 C240 490 480 600 760 520 C980 460 1100 560 1200 530 L1200 800 L0 800 Z" fill="#386641" />
      <g fill="#1b4332" className="sway-slow">
        <ellipse cx="180" cy="430" rx="70" ry="18" />
        <rect x="168" y="430" width="22" height="90" />
        <ellipse cx="1040" cy="400" rx="90" ry="22" />
        <rect x="1028" y="400" width="24" height="110" />
      </g>
      <g fill="#2d6a4f" className="sway">
        {[40, 90, 150, 210, 280, 880, 940, 1010, 1080, 1150].map((x, i) => (
          <path key={x} d={`M${x} 800 C${x + 10} ${620 - (i % 4) * 18} ${x - 16} ${620 - (i % 4) * 18} ${x + 6} 800`} />
        ))}
      </g>
    </svg>
  )
}

function RainforestScene() {
  return (
    <svg className="scene-art" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="r-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#95d5b2" />
          <stop offset="55%" stopColor="#1b4332" />
          <stop offset="100%" stopColor="#081c15" />
        </linearGradient>
      </defs>
      <rect width="1200" height="800" fill="url(#r-sky)" />
      <g fill="#0d2818" opacity="0.45" className="drift">
        <ellipse cx="400" cy="180" rx="220" ry="40" />
        <ellipse cx="820" cy="140" rx="260" ry="36" />
      </g>
      <g fill="#081c15">
        <circle cx="120" cy="280" r="160" />
        <rect x="100" y="280" width="44" height="520" />
        <circle cx="380" cy="220" r="190" />
        <rect x="358" y="240" width="50" height="560" />
        <circle cx="700" cy="260" r="170" />
        <rect x="680" y="270" width="46" height="530" />
        <circle cx="1040" cy="200" r="200" />
        <rect x="1018" y="220" width="52" height="580" />
      </g>
      <g fill="#1b4332">
        <circle cx="240" cy="360" r="90" />
        <circle cx="560" cy="340" r="110" />
        <circle cx="880" cy="380" r="100" />
      </g>
      <path d="M0 640 C300 600 700 700 1200 620 L1200 800 L0 800 Z" fill="#0d2818" />
      <g className="fall-leaf" fill="#52b788">
        <ellipse cx="260" cy="120" rx="16" ry="8" />
        <ellipse cx="640" cy="80" rx="14" ry="7" />
        <ellipse cx="980" cy="160" rx="15" ry="8" />
      </g>
    </svg>
  )
}

function WetlandScene() {
  return (
    <svg className="scene-art" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="w-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#90e0ef" />
          <stop offset="50%" stopColor="#48cae4" />
          <stop offset="100%" stopColor="#2a9d8f" />
        </linearGradient>
        <linearGradient id="w-water" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0077b6" />
          <stop offset="50%" stopColor="#00b4d8" />
          <stop offset="100%" stopColor="#023e8a" />
        </linearGradient>
      </defs>
      <rect width="1200" height="800" fill="url(#w-sky)" />
      <circle cx="160" cy="120" r="64" fill="#fff3b0" />
      <path d="M0 420 C200 380 400 460 600 400 C820 330 1000 450 1200 390 L1200 800 L0 800 Z" fill="#52796f" />
      <path className="river-flow" d="M-20 560 C180 520 320 640 540 580 C760 520 920 660 1220 590 L1220 800 L-20 800 Z" fill="url(#w-water)" />
      <g fill="#90e0ef" opacity="0.7" className="sparkle">
        <circle cx="220" cy="640" r="4" />
        <circle cx="480" cy="680" r="3" />
        <circle cx="760" cy="650" r="5" />
        <circle cx="1020" cy="700" r="3" />
      </g>
      <g fill="#2d6a4f" className="sway">
        {[60, 110, 170, 230, 900, 960, 1030, 1100].map((x, i) => (
          <path key={x} d={`M${x} 800 C${x + 8} ${560 - (i % 3) * 20} ${x - 14} ${560 - (i % 3) * 20} ${x + 4} 800`} />
        ))}
      </g>
    </svg>
  )
}

function HighlandScene() {
  return (
    <svg className="scene-art" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="h-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8ecae6" />
          <stop offset="45%" stopColor="#219ebc" />
          <stop offset="100%" stopColor="#3d5a80" />
        </linearGradient>
      </defs>
      <rect width="1200" height="800" fill="url(#h-sky)" />
      <g fill="#ffffff" opacity="0.8" className="drift">
        <ellipse cx="420" cy="140" rx="90" ry="28" />
        <ellipse cx="860" cy="180" rx="110" ry="30" />
      </g>
      <polygon points="0,800 0,520 180,360 340,540 520,240 700,500 880,200 1040,470 1200,320 1200,800" fill="#4d5c6e" />
      <polygon points="0,800 0,620 220,480 400,640 620,390 820,600 1020,360 1200,540 1200,800" fill="#2b2d42" />
      <path d="M0 640 C280 600 520 700 800 640 C1000 600 1120 680 1200 650 L1200 800 L0 800 Z" fill="#3a5a40" />
    </svg>
  )
}

function MonsoonScene() {
  return (
    <svg className="scene-art" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="m-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1d3557" />
          <stop offset="50%" stopColor="#457b9d" />
          <stop offset="100%" stopColor="#1b4332" />
        </linearGradient>
      </defs>
      <rect width="1200" height="800" fill="url(#m-sky)" />
      <g fill="#0b132b" opacity="0.55" className="drift">
        <ellipse cx="300" cy="90" rx="240" ry="50" />
        <ellipse cx="780" cy="70" rx="280" ry="46" />
        <ellipse cx="1100" cy="120" rx="180" ry="40" />
      </g>
      <g className="wind-ribbon" stroke="#a8dadc" strokeWidth="2" opacity="0.45">
        {[120, 280, 440, 600, 760, 920, 1080].map((x) => (
          <line key={x} x1={x} y1="80" x2={x - 30} y2="520" />
        ))}
      </g>
      <g fill="#081c15">
        <circle cx="160" cy="480" r="110" />
        <rect x="145" y="490" width="32" height="310" />
        <circle cx="980" cy="440" r="130" />
        <rect x="964" y="450" width="34" height="350" />
      </g>
      <path d="M0 620 C260 560 640 700 1200 600 L1200 800 L0 800 Z" fill="#1b4332" />
    </svg>
  )
}

function DuskScene() {
  return (
    <svg className="scene-art" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="d-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3d0814" />
          <stop offset="35%" stopColor="#e76f51" />
          <stop offset="70%" stopColor="#264653" />
          <stop offset="100%" stopColor="#0b132b" />
        </linearGradient>
      </defs>
      <rect width="1200" height="800" fill="url(#d-sky)" />
      <circle cx="600" cy="220" r="70" fill="#ffb703" />
      {[...Array(16)].map((_, i) => (
        <circle
          key={i}
          className="twinkle"
          cx={(i * 83 + 40) % 1180}
          cy={(i * 29 + 16) % 200}
          r={i % 4 === 0 ? 2.4 : 1.4}
          fill="#ffeaa7"
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
      <path d="M0 480 C200 430 420 520 640 450 C860 370 1040 500 1200 430 L1200 800 L0 800 Z" fill="#1b4332" />
      <g fill="#081c15">
        <circle cx="90" cy="460" r="80" />
        <rect x="74" y="470" width="30" height="220" />
        <circle cx="1110" cy="430" r="100" />
        <rect x="1094" y="440" width="34" height="250" />
        <circle cx="300" cy="520" r="50" />
      </g>
      <path d="M0 620 C300 580 700 680 1200 600 L1200 800 L0 800 Z" fill="#0d1b2a" />
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
      </defs>
      <rect width="1200" height="800" fill="url(#home-sky)" />
      <g transform="translate(600 150)">
        <g className="sun-spin">
          {[...Array(16)].map((_, i) => (
            <rect key={i} x="-6" y="-150" width="12" height="50" rx="5" fill="#ffe566" transform={`rotate(${i * 22.5})`} />
          ))}
          <circle r="64" fill="#ffb703" />
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
    </svg>
  )
}

const scenes = {
  home: HomeScene,
  grassland: GrasslandScene,
  rainforest: RainforestScene,
  wetland: WetlandScene,
  highland: HighlandScene,
  monsoon: MonsoonScene,
  dusk: DuskScene,
}

const spark = {
  grassland: '#ffe566',
  rainforest: '#95d5b2',
  wetland: '#90e0ef',
  highland: '#caf0f8',
  monsoon: '#a8dadc',
  dusk: '#ffd166',
  home: '#e8ff6a',
}

export default function WildlifeScene({ theme = 'home' }) {
  const Scene = scenes[theme] || GrasslandScene
  return (
    <div className={`scene scene-${theme}`} aria-hidden="true">
      <Scene />
      <Sparks count={10} color={spark[theme] || '#e8ff6a'} />
    </div>
  )
}
