import { negocio } from '../data/negocio'
import { formatearTelefono } from '../utils/formatearTelefono'
import './Pie.css'

function Pie() {
  return (
    <footer className="pie">
      <div className="franja-ladrillo" aria-hidden="true" />
      <div className="pie__contenido">
        <p className="pie__nombre">{negocio.nombre}</p>
        <p>{negocio.direccion}</p>
        <p>
          Teléfono: <a href={`tel:${negocio.telefono}`}>{formatearTelefono(negocio.telefono)}</a>
        </p>
        <p>
          <a href="#contacto">Ver horario</a>
        </p>
        {/* PENDIENTE: textos legales y de privacidad, según el despliegue final y los datos reales de la empresa. */}
      </div>
    </footer>
  )
}

export default Pie
