type SoundSightMarkProps = {
  className?: string;
};

export function SoundSightMark({ className }: SoundSightMarkProps) {
  const outerLoops = Array.from({ length: 22 }, (_, index) => ({
    rotation: -44 + index * 4.8,
    rx: 27 + index * 0.34,
    ry: 13.5 + index * 0.78,
    cx: 61.5 + Math.sin(index * 0.22) * 2.2,
    cy: 57.2 + Math.cos(index * 0.18) * 1.4,
  }));

  const innerLoops = Array.from({ length: 18 }, (_, index) => ({
    rotation: 18 + index * 5.1,
    rx: 19 + index * 0.28,
    ry: 11 + index * 0.56,
    cx: 48 + Math.cos(index * 0.25) * 1.8,
    cy: 64 + Math.sin(index * 0.16) * 1.6,
  }));

  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="SoundSight logo"
    >
      <defs>
        <clipPath id="soundsight-circle">
          <circle cx="60" cy="60" r="54" />
        </clipPath>
        <filter id="soundsight-blur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6.5" />
        </filter>
        <linearGradient id="soundsight-purple" x1="33" y1="34" x2="74" y2="94" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D7BBFF" />
          <stop offset="0.58" stopColor="#B362FF" />
          <stop offset="1" stopColor="#8E56FF" />
        </linearGradient>
        <linearGradient id="soundsight-cyan" x1="67" y1="42" x2="93" y2="82" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D8FCFF" />
          <stop offset="1" stopColor="#98EBFF" />
        </linearGradient>
      </defs>

      <circle cx="60" cy="60" r="54" fill="#F4F2F4" />

      <g clipPath="url(#soundsight-circle)">
        <ellipse
          cx="57"
          cy="62"
          rx="28"
          ry="16"
          transform="rotate(-28 57 62)"
          fill="url(#soundsight-purple)"
          fillOpacity="0.82"
          filter="url(#soundsight-blur)"
        />
        <ellipse
          cx="74"
          cy="58"
          rx="21"
          ry="13"
          transform="rotate(24 74 58)"
          fill="url(#soundsight-cyan)"
          fillOpacity="0.76"
          filter="url(#soundsight-blur)"
        />

        <g opacity="0.28">
          {outerLoops.map((loop) => (
            <ellipse
              key={`outer-${loop.rotation}`}
              cx={loop.cx}
              cy={loop.cy}
              rx={loop.rx}
              ry={loop.ry}
              transform={`rotate(${loop.rotation} ${loop.cx} ${loop.cy})`}
              stroke="#1B1B1B"
              strokeWidth="0.48"
            />
          ))}
        </g>

        <g opacity="0.22">
          {innerLoops.map((loop) => (
            <ellipse
              key={`inner-${loop.rotation}`}
              cx={loop.cx}
              cy={loop.cy}
              rx={loop.rx}
              ry={loop.ry}
              transform={`rotate(${loop.rotation} ${loop.cx} ${loop.cy})`}
              stroke="#202020"
              strokeWidth="0.48"
            />
          ))}
        </g>
      </g>
    </svg>
  );
}
