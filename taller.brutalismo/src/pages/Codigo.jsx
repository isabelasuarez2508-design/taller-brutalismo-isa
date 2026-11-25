import SectionHeader from '../components/SectionHeader'
import PrincipioCard from '../components/PrincipioCard'
import { principios } from '../data/principios'

export default function Codigo() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-[#FFE600] pt-20 pb-16 px-6 md:px-12 flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col gap-6">
        <SectionHeader
          etiqueta="[02] MANIFIESTO"
          titulo="Código Estructural"
          badge="4 REGLAS INQUEBRANTABLES"
          badgeClase="bg-[#FFE600] text-black font-black"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {principios.map((principio) => (
            <PrincipioCard key={principio.id} principio={principio} />
          ))}
        </div>
      </div>
    </section>
  )
}
