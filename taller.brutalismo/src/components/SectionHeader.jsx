export default function SectionHeader({ etiqueta, titulo, badge, claro = false, badgeClase = '' }) {
  return (
    <div
      className={`flex flex-wrap items-end justify-between border-b-4 pb-3 gap-2 ${
        claro ? 'border-black' : 'border-[#FFE600]'
      }`}
    >
      <div>
        <span
          className={`font-mono text-xs uppercase tracking-widest ${claro ? 'font-black' : ''}`}
        >
          {etiqueta}
        </span>
        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">{titulo}</h2>
      </div>
      <span className={`font-mono text-xs px-3 py-1 uppercase ${badgeClase}`}>{badge}</span>
    </div>
  )
}