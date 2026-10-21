import { ensaladas, pastas, sandwiches, hamburguesas } from '../data/carta'
import { formatearPrecio } from '../utils/formatearPrecio'
import CategoriaProductos from './CategoriaProductos'
import CategoriaPizzas from './CategoriaPizzas'
import './Carta.css'

const notasEnsaladas = [
  ensaladas.nota,
  `Ingrediente extra: +${formatearPrecio(ensaladas.ingredienteExtra)}.`,
]

function Carta() {
  return (
    <section id="carta" className="carta" aria-labelledby="titulo-carta">
      <h2 id="titulo-carta">Carta</h2>
      <CategoriaProductos
        id="ensaladas"
        titulo="Ensaladas"
        notas={notasEnsaladas}
        productos={ensaladas.productos}
      />
      <CategoriaProductos id="pastas" titulo="Pastas" productos={pastas.productos} />
      <CategoriaPizzas />
      <CategoriaProductos id="sandwiches" titulo="Sándwiches" productos={sandwiches.productos} />
      <CategoriaProductos
        id="hamburguesas"
        titulo="Hamburguesas"
        productos={hamburguesas.productos}
      />
    </section>
  )
}

export default Carta
