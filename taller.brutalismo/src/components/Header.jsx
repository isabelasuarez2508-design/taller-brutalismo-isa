import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks } from '../data/navLinks'

const claseEscritorio = ({ isActive }) =>
  `px-2.5 py-1 border-2 border-[#FFE600] transition-colors hover:bg-[#FFE600] hover:text-black ${
    isActive ? 'bg-[#FFE600] text-black' : ''
  }`

const claseMovil = ({ isActive }) =>
  `px-4 py-3 border-b-2 border-[#FFE600] transition-colors hover:bg-[#FFE600] hover:text-black ${
    isActive ? 'bg-[#FFE600] text-black' : ''
  }`

export default function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black text-[#FFE600] border-b-4 border-[#FFE600] px-4 md:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#FFE600] text-black flex items-center justify-center font-black text-lg border-2 border-[#FFE600]">
            M
          </div>
          <span className="font-mono font-black text-sm md:text-base tracking-widest uppercase">
            MONOLITO // ARQ
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 font-mono text-xs font-bold">
          {navLinks.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end} className={claseEscritorio}>
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setMenuAbierto((abierto) => !abierto)}
            className="lg:hidden px-3 py-1.5 border-2 border-[#FFE600] font-mono font-black text-xs uppercase hover:bg-[#FFE600] hover:text-black transition-colors"
            aria-expanded={menuAbierto}
            aria-label="Abrir menú"
          >
            {menuAbierto ? '[X]' : '[MENÚ]'}
          </button>
          <Link
            to="/brief"
            className="px-4 py-1.5 bg-[#FFE600] text-black font-mono font-black text-xs uppercase tracking-wider border-2 border-[#FFE600] hover:bg-black hover:text-[#FFE600] transition-colors"
          >
            [COTIZAR]
          </Link>
        </div>
      </header>

      {menuAbierto && (
        <nav className="lg:hidden fixed top-16 left-0 right-0 z-40 bg-black text-[#FFE600] border-b-4 border-[#FFE600] flex flex-col font-mono text-xs font-bold">
          {navLinks.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={claseMovil}
              onClick={() => setMenuAbierto(false)}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      )}
    </>
  )
}
