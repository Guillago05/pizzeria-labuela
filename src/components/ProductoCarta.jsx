import { formatearPrecio } from '../utils/formatearPrecio'

function ProductoCarta({ nombre, ingredientes, variantes, precio }) {
  return (
    <li className="producto">
      <div className="producto__cabecera">
        <span className="producto__nombre">{nombre}</span>
        <span className="producto__precio">{formatearPrecio(precio)}</span>
      </div>
      {ingredientes ? <p className="producto__detalle">{ingredientes.join(', ')}</p> : null}
      {variantes ? <p className="producto__detalle">Variantes: {variantes.join(', ')}</p> : null}
    </li>
  )
}

export default ProductoCarta
