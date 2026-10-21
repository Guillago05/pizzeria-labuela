import Cabecera from './components/Cabecera'
import Portada from './components/Portada'
import Carta from './components/Carta'

function App() {
  return (
    <>
      <a className="enlace-salto" href="#contenido">
        Saltar al contenido
      </a>
      <Cabecera />
      <main id="contenido">
        <Portada />
        <Carta />
        {/* Sección provisional: se sustituirá por el contacto real. */}
        <section id="contacto">
          <h2>Contacto</h2>
          <p>Próximamente.</p>
        </section>
      </main>
    </>
  )
}

export default App
