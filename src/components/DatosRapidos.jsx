import { negocio, horario } from '../data/negocio'
import { formatearTelefono } from '../utils/formatearTelefono'
import './DatosRapidos.css'

const diasCerrado = horario.filter(({ tramos }) => tramos.length === 0).map(({ dia }) => dia)

function DatosRapidos() {
  return (
    <ul className="datos-rapidos" aria-label="Datos rápidos">
      <li>
        <span className="datos-rapidos__etiqueta">Teléfono</span>
        <a className="datos-rapidos__valor" href={`tel:${negocio.telefono}`}>
          {formatearTelefono(negocio.telefono)}
        </a>
      </li>
      <li>
        <span className="datos-rapidos__etiqueta">Dirección</span>
        <span className="datos-rapidos__valor">{negocio.direccion}</span>
      </li>
      <li>
        <span className="datos-rapidos__etiqueta">Cerrado</span>
        <span className="datos-rapidos__valor">
          {diasCerrado.join(', ')} · <a href="#contacto">Ver horario</a>
        </span>
      </li>
    </ul>
  )
}

export default DatosRapidos
