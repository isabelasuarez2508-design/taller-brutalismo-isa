import HazardStripe from '../components/HazardStripe'
import { campos, sede } from '../data/contacto'

export default function Brief() {
  const manejarEnvio = (evento) => {
    evento.preventDefault()
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-[#FFE600] pt-20 pb-16 px-6 md:px-12 flex items-center justify-center">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <form
          onSubmit={manejarEnvio}
          className="border-4 border-[#FFE600] p-6 md:p-8 flex flex-col gap-4 bg-black"
        >
          <span className="font-mono text-xs uppercase">[06] NUEVO PROYECTO</span>
          <h2 className="text-3xl font-black uppercase">Enviar Brief</h2>

          {campos.map(({ id, type, placeholder }) => (
            <input
              key={id}
              type={type}
              name={id}
              placeholder={placeholder}
              className="w-full px-4 py-2.5 bg-black text-[#FFE600] placeholder:text-[#FFE600]/60 border-2 border-[#FFE600] font-mono text-xs font-bold focus:outline-none focus:bg-[#FFE600] focus:text-black"
            />
          ))}

          <button
            type="submit"
            className="w-full py-3.5 bg-[#FFE600] text-black font-mono font-black text-sm uppercase tracking-wider border-2 border-[#FFE600] hover:bg-black hover:text-[#FFE600] transition-colors"
          >
            [SOLICITAR REUNIÓN -&gt;]
          </button>
        </form>

        <div className="bg-[#FFE600] text-black border-4 border-[#FFE600] p-6 md:p-8 flex flex-col gap-5">
          <div className="border-b-4 border-black pb-3">
            <span className="font-mono text-xs font-black uppercase">{sede.etiqueta}</span>
            <h3 className="text-2xl font-black uppercase mt-1">{sede.direccion}</h3>
          </div>

          <div className="font-mono text-xs font-bold flex flex-col gap-2">
            {sede.lineas.map((linea) => (
              <p key={linea}>{linea}</p>
            ))}
          </div>

          <HazardStripe id="hazard-bottom" altura={24} className="w-full h-6" />
        </div>
      </div>
    </section>
  )
}
