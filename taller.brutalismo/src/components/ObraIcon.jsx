// Dibujos SVG de cada obra, seleccionados por la clave `icono` de data/obras.js
const dibujos = {
  torre: (
    <>
      <rect x="35" y="15" width="50" height="95" fill="#000" />
      <rect x="95" y="40" width="50" height="70" fill="#000" />
      <line x1="20" y1="110" x2="160" y2="110" stroke="#000" strokeWidth="4" />
      <rect x="45" y="25" width="30" height="10" fill="#FFE600" />
      <rect x="45" y="45" width="30" height="10" fill="#FFE600" />
      <rect x="45" y="65" width="30" height="10" fill="#FFE600" />
    </>
  ),
  pabellon: (
    <>
      <polygon points="20,105 90,25 160,105" fill="#000" />
      <rect x="70" y="65" width="40" height="40" fill="#FFE600" />
      <line x1="15" y1="105" x2="165" y2="105" stroke="#000" strokeWidth="4" />
    </>
  ),
  bunker: (
    <>
      <rect x="25" y="55" width="130" height="50" fill="#000" />
      <rect x="65" y="25" width="90" height="30" fill="#000" />
      <rect x="35" y="70" width="45" height="20" fill="#FFE600" />
      <line x1="15" y1="105" x2="165" y2="105" stroke="#000" strokeWidth="4" />
    </>
  ),
}

export default function ObraIcon({ icono }) {
  return (
    <svg className="w-full h-full" viewBox="0 0 180 120" fill="none">
      {dibujos[icono]}
    </svg>
  )
}
