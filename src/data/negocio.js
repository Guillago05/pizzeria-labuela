// Fuente: docs/contenido-negocio.md (secciones 1 y 2)

export const negocio = {
  nombre: 'Pizzería La Abuela',
  telefono: '916661503',
  direccion: 'Plaza de Castilla-León, 9, 28523, Rivas Vaciamadrid, Madrid',
  googleMaps: 'https://maps.app.goo.gl/UmesGuZmDuTk8Tx98',
  servicios: ['Consumo en el local', 'Pedidos a domicilio'],
  // PENDIENTE: URLs directas de Just Eat, Uber Eats y Glovo (no facilitadas). Añadirlas aquí, sin inventarlas.
  canalesPedido: ['Teléfono', 'Just Eat', 'Uber Eats', 'Glovo'],
}

const tramosDiarios = ['12:00-16:00', '18:00-24:00']

// Un día sin tramos está cerrado. No se ha especificado el horario en festivos.
export const horario = [
  { dia: 'Lunes', tramos: tramosDiarios },
  { dia: 'Martes', tramos: [] },
  { dia: 'Miércoles', tramos: tramosDiarios },
  { dia: 'Jueves', tramos: tramosDiarios },
  { dia: 'Viernes', tramos: tramosDiarios },
  { dia: 'Sábado', tramos: tramosDiarios },
  { dia: 'Domingo', tramos: tramosDiarios },
]
