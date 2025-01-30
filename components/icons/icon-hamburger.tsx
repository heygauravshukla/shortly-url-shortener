export default function IconHamburger({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="21"
      viewBox="0 0 24 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        className={className}
        y1="1.5"
        x2="24"
        y2="1.5"
        stroke="#9E9AA7"
        strokeWidth="3"
      />
      <line
        className={className}
        y1="10.5"
        x2="24"
        y2="10.5"
        stroke="#9E9AA7"
        strokeWidth="3"
      />
      <line
        className={className}
        y1="19.5"
        x2="24"
        y2="19.5"
        stroke="#9E9AA7"
        strokeWidth="3"
      />
    </svg>
  );
}
