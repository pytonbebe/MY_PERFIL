export function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 420 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-full max-w-md animate-float"
      aria-hidden="true"
    >
      {/* Stars */}
      <path d="M48 42 L52 54 L64 58 L52 62 L48 74 L44 62 L32 58 L44 54 Z" fill="#000" />
      <circle cx="92" cy="78" r="6" stroke="#000" strokeWidth="3" />
      <path d="M340 28 L345 42 L360 47 L345 52 L340 66 L335 52 L320 47 L335 42 Z" fill="#000" />
      <circle cx="300" cy="70" r="5" stroke="#000" strokeWidth="2.5" />

      {/* Monitor body */}
      <rect x="90" y="70" width="220" height="170" fill="#fff" stroke="#000" strokeWidth="4" />
      <rect x="108" y="88" width="184" height="120" fill="#fff" stroke="#000" strokeWidth="3.5" />

      {/* AI face on screen */}
      <circle cx="200" cy="140" r="28" fill="#000" />
      <circle cx="200" cy="140" r="12" fill="#fff" />
      <circle cx="200" cy="140" r="5" fill="#000" />
      <path d="M170 175 Q200 195 230 175" stroke="#000" strokeWidth="3.5" fill="none" strokeLinecap="round" />

      {/* Circuit accents */}
      <path d="M120 100 H145 V115" stroke="#000" strokeWidth="2" fill="none" />
      <circle cx="145" cy="115" r="3" fill="#000" />
      <path d="M280 100 H255 V115" stroke="#000" strokeWidth="2" fill="none" />
      <circle cx="255" cy="115" r="3" fill="#000" />

      {/* Stand */}
      <rect x="175" y="240" width="50" height="14" fill="#000" />
      <rect x="145" y="254" width="110" height="18" fill="#fff" stroke="#000" strokeWidth="3.5" />

      {/* Hand + stylus */}
      <path
        d="M250 250 C270 230 300 235 320 250 C340 265 345 290 330 310 C315 330 280 335 260 320 C240 305 235 275 250 250 Z"
        fill="#fff"
        stroke="#000"
        strokeWidth="3.5"
      />
      <path d="M300 210 L345 145" stroke="#000" strokeWidth="8" strokeLinecap="round" />
      <path d="M345 145 L355 135" stroke="#000" strokeWidth="4" strokeLinecap="round" />
      <circle cx="358" cy="132" r="5" fill="#000" />

      {/* Bubbles */}
      <circle cx="70" cy="200" r="10" stroke="#000" strokeWidth="2.5" />
      <circle cx="55" cy="230" r="6" stroke="#000" strokeWidth="2" />
      <circle cx="380" cy="200" r="8" stroke="#000" strokeWidth="2.5" />
    </svg>
  )
}
