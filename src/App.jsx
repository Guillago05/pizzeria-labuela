import Cabecera from './components/Cabecera'
import Portada from './components/Portada'

function App() {
  return (
    <>
      <Cabecera />
      <main>
        <Portada />
        {/* Secciones provisionales: se sustituirán por la carta y el contacto reales. */}
        <section id="carta">
          <h2>Carta</h2>
          <p>Próximamente.</p>
        </section>
        <section id="contacto">
          <h2>Contacto</h2>
          <p>Próximamente.</p>
        </section>
      </main>
    </>
  )
}

export default App
