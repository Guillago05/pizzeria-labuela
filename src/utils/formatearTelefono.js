// Solo agrupa los dígitos para leerlos mejor: 916661503 -> 916 661 503.
export function formatearTelefono(telefono) {
  return telefono.replace(/(\d{3})(?=\d)/g, '$1 ')
}
