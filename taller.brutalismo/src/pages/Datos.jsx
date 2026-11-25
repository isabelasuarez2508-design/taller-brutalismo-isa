import PlanoTecnico from '../components/PlanoTecnico'
import { capacidades } from '../data/capacidades'

export default function Datos() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#FFE600] text-black pt-20 pb-16 px-6 md:px-12 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-5 flex flex-col gap-4">
          <span className="font-mono text-xs font-black uppercase bg-black text-[#FFE600] px-3 py-1 self-start">
            [05] CAPACIDAD TÉCNICA
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase leading-none">
            Ingeniería Sin Compromisos
          </h2>

          <div className="flex flex-col border-4 border-black bg-[#FFE600]">
            {capacidades.map(({ id, etiqueta, valor, invertido }, indice) => (
              <div
                key={id}
                className={`p-4 flex items-center justify-between ${
                  indice < capacidades.length - 1 ? 'border-b-4 border-black' : ''
                } ${invertido ? 'bg-black text-[#FFE600]' : ''}`}
              >
                <span className="font-mono font-bold text-xs uppercase">{etiqueta}</span>
                <span className="font-black text-2xl">{valor}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <PlanoTecnico />
        </div>
      </div>
    </section>
  )
}
