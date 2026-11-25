import ObraIcon from './ObraIcon'

export default function ObraCard({ obra }) {
  const { icono, categoria, superficie, nombre, descripcion } = obra

  return (
    <div className="bg-black text-[#FFE600] border-4 border-black p-4 flex flex-col justify-between gap-3">
      <div className="border-2 border-[#FFE600] bg-[#FFE600] h-40 flex items-center justify-center p-4">
        <ObraIcon icono={icono} />
      </div>
      <div>
        <div className="flex justify-between font-mono text-[11px] mb-1">
          <span>{categoria}</span>
          <span>{superficie}</span>
        </div>
        <h3 className="font-black text-xl uppercase">{nombre}</h3>
        <p className="font-mono text-xs mt-1 text-[#FFE600]">{descripcion}</p>
      </div>
    </div>
  )
}
