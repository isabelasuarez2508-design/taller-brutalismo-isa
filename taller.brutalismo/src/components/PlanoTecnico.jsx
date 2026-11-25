export default function PlanoTecnico() {
  return (
    <div className="bg-black border-4 border-black p-5 shadow-[10px_10px_0px_0px_#000]">
      <div className="flex justify-between font-mono text-xs text-[#FFE600] border-b-2 border-[#FFE600] pb-2 mb-3">
        <span>PLANTA TIPO // MÓDULO B</span>
        <span>COTAS EN MM</span>
      </div>
      <svg className="w-full h-56 sm:h-64" viewBox="0 0 400 220" fill="none">
        <rect x="20" y="20" width="360" height="180" stroke="#FFE600" strokeWidth="4" />
        <line x1="150" y1="20" x2="150" y2="200" stroke="#FFE600" strokeWidth="4" />
        <line x1="150" y1="110" x2="380" y2="110" stroke="#FFE600" strokeWidth="4" />
        <rect
          x="40"
          y="40"
          width="90"
          height="140"
          fill="#FFE600"
          fillOpacity="0.15"
          stroke="#FFE600"
          strokeWidth="2"
          strokeDasharray="6 4"
        />
        <circle cx="265" cy="65" r="28" stroke="#FFE600" strokeWidth="3" />
        <rect x="175" y="130" width="180" height="50" fill="#FFE600" />
        <text
          x="265"
          y="160"
          textAnchor="middle"
          fill="#000"
          fontFamily="monospace"
          fontWeight="900"
          fontSize="14"
        >
          PATIO CENTRAL
        </text>
      </svg>
    </div>
  )
}
