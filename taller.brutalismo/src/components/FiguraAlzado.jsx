export default function FiguraAlzado() {
  return (
    <div className="w-full max-w-sm bg-black border-4 border-black p-6 shadow-[10px_10px_0px_0px_#000] flex flex-col gap-4">
      <div className="flex justify-between items-center font-mono text-[11px] text-[#FFE600] border-b-2 border-[#FFE600] pb-2">
        <span>FIG. 01 // ALZADO</span>
        <span>ESC 1:100</span>
      </div>
      <svg className="w-full h-56 sm:h-64" viewBox="0 0 260 220" fill="none">
        <path
          d="M0 40 H260 M0 80 H260 M0 120 H260 M0 160 H260 M40 0 V220 M100 0 V220 M160 0 V220 M220 0 V220"
          stroke="#FFE600"
          strokeWidth="1"
          strokeOpacity="0.25"
        />
        <polygon points="50,180 50,50 140,20 140,150" fill="#FFE600" stroke="#000" strokeWidth="3" />
        <polygon points="140,20 210,55 210,185 140,150" fill="#000" stroke="#FFE600" strokeWidth="3" />
        <polygon points="50,180 140,150 210,185 120,210" fill="#FFE600" stroke="#000" strokeWidth="3" />
        <rect x="70" y="75" width="18" height="35" fill="#000" />
        <rect x="102" y="65" width="18" height="35" fill="#000" />
        <rect x="70" y="125" width="18" height="35" fill="#000" />
        <rect x="102" y="115" width="18" height="35" fill="#000" />
      </svg>
      <div className="font-mono text-xs text-[#FFE600] flex justify-between border-t-2 border-[#FFE600] pt-2">
        <span>HORMIGÓN ARMADO</span>
        <span>LAT 40.41°</span>
      </div>
    </div>
  )
}
