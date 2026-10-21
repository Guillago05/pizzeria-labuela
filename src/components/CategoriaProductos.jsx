import ProductoCarta from './ProductoCarta'

function CategoriaProductos({ id, titulo, notas = [], productos }) {
  return (
    <section className="categoria" aria-labelledby={id}>
      <h3 id={id}>{titulo}</h3>
      {notas.map((nota) => (
        <p key={nota} className="categoria__nota">
          {nota}
        </p>
      ))}
      <ul className="productos">
        {productos.map((producto) => (
          <ProductoCarta key={producto.nombre} {...producto} />
        ))}
      </ul>
    </section>
  )
}

export default CategoriaProductos
