export default function FaseCard({ fase }) {
  const { etiqueta, titulo, descripcion, duracion, bordes = '', destacada } = fase

  if (destacada) {
    return (
      <div className="p-5 flex flex-col justify-between gap-4 bg-[#FFE600] text-black">
        <span className="font-mono text-xs bg-black text-[#FFE600] px-2 py-0.5 self-start font-black">
          {etiqueta}
        </span>
        <div>
          <h3 className="font-black text-xl uppercase">{titulo}</h3>
          <p className="font-mono text-xs mt-2 font-bold">{descripcion}</p>
        </div>
        <span className="font-mono text-xs font-black">{duracion}</span>
      </div>
    )
  }

  return (
    <div className={`p-5 ${bordes} border-[#FFE600] flex flex-col justify-between gap-4`}>
      <span className="font-mono text-xs bg-[#FFE600] text-black px-2 py-0.5 self-start font-black">
        {etiqueta}
      </span>
      <div>
        <h3 className="font-black text-xl uppercase">{titulo}</h3>
        <p className="font-mono text-xs mt-2">{descripcion}</p>
      </div>
      <span className="font-mono text-xs opacity-75">{duracion}</span>
    </div>
  )
}
