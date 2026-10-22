import { useEffect, useState } from 'react'
import { negocio } from '../data/negocio'
import './Cabecera.css'

const enlaces = [
  { href: '#inicio', texto: 'Inicio' },
  { href: '#carta', texto: 'Carta' },
  { href: '#contacto', texto: 'Contacto' },
]

function Cabecera() {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [seccionActiva, setSeccionActiva] = useState('#inicio')

  // Marca el enlace de la sección que cruza la franja central de la pantalla.
  useEffect(() => {
    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) setSeccionActiva(`#${entrada.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    enlaces.forEach(({ href }) => {
      const seccion = document.querySelector(href)
      if (seccion) observador.observe(seccion)
    })
    return () => observador.disconnect()
  }, [])

  const cerrarMenu = () => setMenuAbierto(false)

  return (
    <header className="cabecera">
      <div className="cabecera__barra">
        {/* PENDIENTE: logotipo oficial, solo si existe y está autorizado. Ahora se muestra solo el nombre. */}
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
              <a
                className="cabecera__enlace"
                href={enlace.href}
                aria-current={seccionActiva === enlace.href ? 'location' : undefined}
                onClick={cerrarMenu}
              >
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
