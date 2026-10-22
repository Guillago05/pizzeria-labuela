import { negocio } from '../data/negocio'
import './Portada.css'

// `foto` es opcional: { src, alt }. Sin foto, la portada se ve solo con texto.
// PENDIENTE: pasar aquí una fotografía real de una pizza o del local, con permiso de publicación
// y un texto alternativo descriptivo. No usar fotos de archivo ni generadas.
function Portada({ foto }) {
  return (
    <section id="inicio" className={`portada${foto ? ' portada--con-foto' : ''}`}>
      <div className="portada__contenido">
        <div className="portada__texto-bloque">
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
        </div>
        {foto ? (
          <img className="portada__foto" src={foto.src} alt={foto.alt} />
        ) : null}
      </div>
      <div className="franja-ladrillo" aria-hidden="true" />
    </section>
  )
}

export default Portada
