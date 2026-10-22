import Cabecera from './components/Cabecera'
import Portada from './components/Portada'
import DatosRapidos from './components/DatosRapidos'
import Carta from './components/Carta'
import Contacto from './components/Contacto'
import Pie from './components/Pie'

function App() {
  return (
    <>
      <a className="enlace-salto" href="#contenido">
        Saltar al contenido
      </a>
      <Cabecera />
      <main id="contenido">
        <Portada />
        <DatosRapidos />
        <Carta />
        <Contacto />
      </main>
      <Pie />
    </>
  )
}

export default App
