import { negocio, horario } from '../data/negocio'
import { formatearTelefono } from '../utils/formatearTelefono'
import './Contacto.css'

function Contacto() {
  return (
    <section id="contacto" className="contacto" aria-labelledby="titulo-contacto">
      <div className="contacto__interior">
        <h2 id="titulo-contacto">Contacto</h2>

        <div className="contacto__bloques">
          <div>
            <h3>Dirección</h3>
            <p>{negocio.direccion}</p>
            <a
              className="boton boton--secundario"
              href={negocio.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver en Google Maps
              <span className="solo-lectores"> (se abre en una pestaña nueva)</span>
            </a>
          </div>

          <div>
            <h3>Teléfono</h3>
            <p>
              <a className="contacto__telefono" href={`tel:${negocio.telefono}`}>
                {formatearTelefono(negocio.telefono)}
              </a>
            </p>
          </div>

          <div>
            <h3>Horario</h3>
            {/* PENDIENTE: horario en festivos y fechas especiales (no facilitado). */}
            <dl className="horario">
              {horario.map(({ dia, tramos }) => (
                <div key={dia}>
                  <dt>{dia}</dt>
                  <dd>
                    {tramos.length > 0 ? (
                      tramos.join(' y ')
                    ) : (
                      <strong className="horario__cerrado">Cerrado</strong>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h3>Servicio</h3>
            <ul className="contacto__lista">
              {negocio.servicios.map((servicio) => (
                <li key={servicio}>{servicio}</li>
              ))}
            </ul>
            {/* PENDIENTE: enlaces directos a Just Eat, Uber Eats y Glovo cuando se faciliten sus URLs verificadas. */}
            <p>Canales de pedido: {negocio.canalesPedido.join(', ')}.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacto
