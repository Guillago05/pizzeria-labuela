import { pizzas } from '../data/carta'
import { formatearPrecio } from '../utils/formatearPrecio'

function CategoriaPizzas() {
  const { base, nota, tamanos, especialidades, extras } = pizzas

  return (
    <section className="categoria" aria-labelledby="pizzas">
      <h3 id="pizzas">Pizzas</h3>
      <p className="categoria__nota">Base de todas las pizzas: {base.join(', ')}.</p>
      <p className="categoria__nota">{nota}</p>

      <h4>Tamaños</h4>
      <ul className="tamanos">
        {tamanos.map((tamano) => (
          <li key={tamano.id}>
            <strong>{tamano.nombre}</strong>: {tamano.personas}, {tamano.diametroCm} cm
          </li>
        ))}
      </ul>

      <h4>Especialidades</h4>
      <ul className="productos">
        {especialidades.map((pizza) => (
          <li key={pizza.nombre} className="producto">
            <span className="producto__nombre">{pizza.nombre}</span>
            <p className="producto__detalle">{pizza.ingredientes.join(', ')}</p>
            <dl className="precios-tamano">
              {tamanos.map((tamano) => (
                <div key={tamano.id}>
                  <dt>{tamano.nombre}</dt>
                  <dd>{formatearPrecio(pizza.precios[tamano.id])}</dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ul>

      <h4>Ingredientes adicionales</h4>
      <p className="producto__detalle">{extras.ingredientes.join(', ')}.</p>
      <dl className="precios-tamano">
        {tamanos.map((tamano) => (
          <div key={tamano.id}>
            <dt>{tamano.nombre}</dt>
            <dd>{formatearPrecio(extras.precios[tamano.id])}</dd>
          </div>
        ))}
      </dl>
      <p className="categoria__nota">Precio por ingrediente adicional.</p>
    </section>
  )
}

export default CategoriaPizzas
