export default function PrincipioCard({ principio }) {
  const { numero, titulo, descripcion } = principio

  return (
    <div className="border-4 border-[#FFE600] p-5 flex flex-col gap-2 bg-black hover:bg-[#FFE600] hover:text-black transition-colors">
      <span className="font-mono font-black text-3xl">{numero}</span>
      <h3 className="font-black text-xl uppercase">{titulo}</h3>
      <p className="font-mono text-xs leading-relaxed">{descripcion}</p>
    </div>
  )
}
