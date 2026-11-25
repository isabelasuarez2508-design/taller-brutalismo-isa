import SectionHeader from '../components/SectionHeader'
import FaseCard from '../components/FaseCard'
import { fases } from '../data/fases'

export default function Fases() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-[#FFE600] pt-20 pb-16 px-6 md:px-12 flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col gap-6">
        <SectionHeader
          etiqueta="[04] METODOLOGÍA"
          titulo="Proceso Constructivo"
          badge="LLAVE EN MANO"
          badgeClase="border-2 border-[#FFE600] font-bold"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-4 border-[#FFE600]">
          {fases.map((fase) => (
            <FaseCard key={fase.id} fase={fase} />
          ))}
        </div>
      </div>
    </section>
  )
}