import { ensaladas, pastas, sandwiches, hamburguesas } from '../data/carta'
import { formatearPrecio } from '../utils/formatearPrecio'
import CategoriaProductos from './CategoriaProductos'
import CategoriaPizzas from './CategoriaPizzas'
import './Carta.css'

// Única fuente de ids y títulos: los usan tanto los enlaces rápidos como cada sección.
const categorias = [
  { id: 'ensaladas', titulo: 'Ensaladas' },
  { id: 'pastas', titulo: 'Pastas' },
  { id: 'pizzas', titulo: 'Pizzas' },
  { id: 'sandwiches', titulo: 'Sándwiches' },
  { id: 'hamburguesas', titulo: 'Hamburguesas' },
]
const categoria = Object.fromEntries(categorias.map((c) => [c.id, c]))

const notasEnsaladas = [
  ensaladas.nota,
  `Ingrediente extra: +${formatearPrecio(ensaladas.ingredienteExtra)}.`,
]

function Carta() {
  return (
    <section id="carta" className="carta" aria-labelledby="titulo-carta">
      <h2 id="titulo-carta">Carta</h2>
      {/* PENDIENTE: confirmar con el negocio que la carta y los precios siguen vigentes. */}
      {/* PENDIENTE: información de alérgenos, solo si el negocio la facilita y la confirma. */}

      <nav className="carta__categorias" aria-label="Categorías de la carta">
        <ul>
          {categorias.map(({ id, titulo }) => (
            <li key={id}>
              <a href={`#${id}`}>{titulo}</a>
            </li>
          ))}
        </ul>
      </nav>

      <CategoriaProductos {...categoria.ensaladas} notas={notasEnsaladas} productos={ensaladas.productos} />
      <CategoriaProductos {...categoria.pastas} productos={pastas.productos} />
      <CategoriaPizzas {...categoria.pizzas} />
      <CategoriaProductos {...categoria.sandwiches} productos={sandwiches.productos} />
      <CategoriaProductos {...categoria.hamburguesas} productos={hamburguesas.productos} />
    </section>
  )
}

export default Carta
