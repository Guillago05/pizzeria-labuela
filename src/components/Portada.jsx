import { negocio } from '../data/negocio'
import './Portada.css'

function Portada() {
  return (
    <section id="inicio" className="portada">
      <h1>{negocio.nombre}</h1>
      <p className="portada__texto">
        Pizzería en Rivas-Vaciamadrid. Consulta la carta, el horario y cómo llegar.
      </p>
      <div className="portada__acciones">
        <a className="boton" href="#carta">
          Ver la carta
        </a>
        <a
          className="boton boton--secundario"
          href={negocio.googleMaps}
          target="_blank"
          rel="noopener noreferrer"
        >
          Cómo llegar<span className="solo-lectores"> (se abre en una pestaña nueva)</span>
        </a>
      </div>
    </section>
  )
}

export default Portada
