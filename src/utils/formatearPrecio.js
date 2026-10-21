// Se crea una sola vez a nivel de módulo: instanciar Intl.NumberFormat es costoso.
const formatoEuros = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' })

export function formatearPrecio(importe) {
  return formatoEuros.format(importe)
}
