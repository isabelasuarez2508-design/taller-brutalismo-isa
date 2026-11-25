export default function HazardStripe({ id, altura, className = '' }) {
  return (
    <svg className={className} preserveAspectRatio="none">
      <defs>
        <pattern
          id={id}
          width="24"
          height={altura}
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <rect width="12" height={altura} fill="#000000" />
          <rect x="12" width="12" height={altura} fill="#FFE600" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}
