import { Link } from 'react-router-dom'
import HazardStripe from '../components/HazardStripe'
import FiguraAlzado from '../components/FiguraAlzado'
import { heroStats } from '../data/heroStats'

export default function Inicio() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#FFE600] text-black pt-20 pb-16 px-6 md:px-12 flex items-center justify-center">
      <HazardStripe
        id="hazard-top"
        altura={16}
        className="absolute top-16 left-0 w-full h-4 pointer-events-none"
      />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        <div className="lg:col-span-7 flex flex-col items-start gap-5">
          <div className="px-3 py-1 bg-black text-[#FFE600] font-mono font-black text-xs uppercase tracking-widest">
            ESTUDIO DE ARQUITECTURA // DESDE 2018
          </div>

          <h1 className="text-5xl sm:text-7xl xl:text-8xl font-black uppercase leading-[0.88] tracking-tighter">
            HORMIGÓN.
            <br />
            ACERO.
            <br />
            <span className="bg-black text-[#FFE600] px-2 inline-block mt-1">FORMA PURA.</span>
          </h1>

          <p className="font-mono text-xs sm:text-sm font-bold border-l-4 border-black pl-4 max-w-lg">
            Diseñamos estructuras honestas, monumentales y funcionales. Sin adornos innecesarios.
            Solo masa, luz y geometría exacta.
          </p>

          <div className="grid grid-cols-3 border-4 border-black bg-black text-[#FFE600] w-full max-w-md font-mono">
            {heroStats.map(({ id, valor, etiqueta }, indice) => (
              <div
                key={id}
                className={`p-3 ${indice < heroStats.length - 1 ? 'border-r-2 border-[#FFE600]' : ''}`}
              >
                <span className="block text-xl sm:text-2xl font-black">{valor}</span>
                <span className="text-[10px] uppercase">{etiqueta}</span>
              </div>
            ))}
          </div>

          <Link
            to="/obras"
            className="px-7 py-3.5 bg-black text-[#FFE600] font-mono font-black text-sm uppercase tracking-wider border-4 border-black shadow-[6px_6px_0px_0px_#000] hover:bg-[#FFE600] hover:text-black transition-colors"
          >
            VER PROYECTOS ↓
          </Link>
        </div>

        <div className="lg:col-span-5 flex justify-center">
          <FiguraAlzado />
        </div>
      </div>
    </section>
  )
}