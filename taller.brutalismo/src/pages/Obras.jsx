import SectionHeader from '../components/SectionHeader'
import ObraCard from '../components/ObraCard'
import { obras } from '../data/obras'

export default function Obras() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#FFE600] text-black pt-20 pb-16 px-6 md:px-12 flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col gap-5">
        <SectionHeader
          etiqueta="[03] PORTAFOLIO"
          titulo="Obras Construidas"
          badge="2023 — 2026"
          claro
          badgeClase="bg-black text-[#FFE600] font-black"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {obras.map((obra) => (
            <ObraCard key={obra.id} obra={obra} />
          ))}
        </div>
      </div>
    </section>
  )
}