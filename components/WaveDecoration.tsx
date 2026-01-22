export default function WaveDecoration({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-full ${className}`}
      viewBox="0 0 1440 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M0 60C240 20 480 100 720 60C960 20 1200 100 1440 60V200H0V60Z"
        fill="white"
        fillOpacity="0.03"
      />
      <path
        d="M0 80C240 40 480 120 720 80C960 40 1200 120 1440 80V200H0V80Z"
        fill="white"
        fillOpacity="0.02"
      />
      <path
        d="M0 100C240 60 480 140 720 100C960 60 1200 140 1440 100V200H0V100Z"
        fill="white"
        fillOpacity="0.02"
      />
      {[...Array(12)].map((_, i) => (
        <path
          key={i}
          d={`M0 ${120 + i * 6}C360 ${110 + i * 6} 720 ${130 + i * 6} 1080 ${120 + i * 6}C1260 ${115 + i * 6} 1350 ${125 + i * 6} 1440 ${120 + i * 6}`}
          stroke="white"
          strokeOpacity={0.05 - i * 0.003}
          strokeWidth="1"
          fill="none"
        />
      ))}
    </svg>
  );
}
