import { useState } from 'react'
import { negocio } from '../data/negocio'
import './Cabecera.css'

const enlaces = [
  { href: '#inicio', texto: 'Inicio' },
  { href: '#carta', texto: 'Carta' },
  { href: '#contacto', texto: 'Contacto' },
]

function Cabecera() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  const cerrarMenu = () => setMenuAbierto(false)

  return (
    <header className="cabecera">
      <div className="cabecera__barra">
        <a className="cabecera__nombre" href="#inicio" onClick={cerrarMenu}>
          {negocio.nombre}
        </a>
        <button
          type="button"
          className="cabecera__boton-menu"
          aria-expanded={menuAbierto}
          aria-controls="menu-principal"
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          {menuAbierto ? 'Cerrar menú' : 'Menú'}
        </button>
      </div>

      <nav
        id="menu-principal"
        className={`cabecera__nav${menuAbierto ? ' cabecera__nav--abierto' : ''}`}
        aria-label="Principal"
      >
        <ul className="cabecera__lista">
          {enlaces.map((enlace) => (
            <li key={enlace.href}>
              <a className="cabecera__enlace" href={enlace.href} onClick={cerrarMenu}>
                {enlace.texto}
              </a>
            </li>
          ))}
        </ul>
        <a className="boton" href="#carta" onClick={cerrarMenu}>
          Ver la carta
        </a>
      </nav>
    </header>
  )
}

export default Cabecera
