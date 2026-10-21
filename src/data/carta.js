// Fuente: docs/contenido-negocio.md (sección 3). Precios en euros, tal como se facilitaron.
// No añadir productos, ingredientes ni precios que no estén en la fuente.

export const ensaladas = {
  nota: 'Todas las ensaladas tienen base de lechuga.',
  ingredienteExtra: 1.0,
  productos: [
    { nombre: 'Mixta', ingredientes: ['Tomate', 'cebolla', 'atún', 'pimientos', 'aceitunas'], precio: 6.25 },
    { nombre: 'Especial', ingredientes: ['Jamón York', 'cangrejo', 'zanahoria', 'salsa rosa'], precio: 6.25 },
    { nombre: 'César', ingredientes: ['Pollo', 'pan tostado', 'queso parmesano', 'salsa rosa'], precio: 8.25 },
    { nombre: 'Yogurt', ingredientes: ['Pollo', 'nueces', 'queso rallado', 'pan tostado', 'salsa de yogurt'], precio: 8.25 },
    { nombre: 'Queso de Cabra y Nueces', ingredientes: ['Queso de cabra', 'nueces', 'manzana', 'vinagre balsámico'], precio: 8.25 },
    { nombre: 'Ranchera', ingredientes: ['Queso', 'bacon frito', 'cebolla frita', 'pimiento frito', 'tomate', 'salsa César'], precio: 8.25 },
  ],
}

// Solo los canelones tienen variantes; del resto no se facilitaron ingredientes.
export const pastas = {
  productos: [
    { nombre: 'Canelones', variantes: ['Ternera', 'atún'], precio: 5.5 },
    { nombre: 'Espagueti Carbonara', precio: 5.75 },
    { nombre: 'Espagueti Boloñesa', precio: 5.75 },
    { nombre: 'Lasaña Casera', precio: 5.75 },
  ],
}

export const pizzas = {
  base: ['Tomate', 'doble mozzarella', 'orégano'],
  nota: 'Se pueden elaborar por mitades y elegir los ingredientes.',
  tamanos: [
    { id: 'mediana', nombre: 'Mediana', personas: '2-3 personas', diametroCm: 32 },
    { id: 'grande', nombre: 'Grande', personas: '4-5 personas', diametroCm: 41 },
    { id: 'gigante', nombre: 'Gigante', personas: '6-7 personas', diametroCm: 45 },
  ],
  // Ingredientes adicionales a la base común. «combinación de quesos» y «ahumado» no están más detallados.
  especialidades: [
    { nombre: 'Margarita', ingredientes: ['Parmesano'], precios: { mediana: 13.35, grande: 16.65, gigante: 16.95 } },
    { nombre: 'Jamón / Bacon', ingredientes: ['Jamón', 'bacon'], precios: { mediana: 14.55, grande: 18.15, gigante: 19.35 } },
    { nombre: 'Jamón / Champiñón', ingredientes: ['Jamón', 'doble champiñón'], precios: { mediana: 14.55, grande: 18.15, gigante: 19.35 } },
    { nombre: 'Pepperoni', ingredientes: ['Pepperoni'], precios: { mediana: 14.55, grande: 18.15, gigante: 19.35 } },
    { nombre: 'Atún / Pimientos', ingredientes: ['Atún', 'pimientos'], precios: { mediana: 14.55, grande: 18.15, gigante: 19.35 } },
    { nombre: 'Anchoas / Aceitunas', ingredientes: ['Anchoas', 'aceitunas'], precios: { mediana: 14.55, grande: 18.15, gigante: 19.35 } },
    { nombre: 'Ternera', ingredientes: ['Ternera preparada'], precios: { mediana: 14.55, grande: 18.15, gigante: 19.35 } },
    { nombre: '4 Quesos', ingredientes: ['Emmental', 'parmesano', 'combinación de quesos'], precios: { mediana: 15.15, grande: 18.75, gigante: 19.95 } },
    { nombre: 'Especial La Abuela', ingredientes: ['Ternera preparada', 'jamón', 'champiñón', 'pimiento verde'], precios: { mediana: 15.15, grande: 18.75, gigante: 19.95 } },
    { nombre: 'Vegetal', ingredientes: ['Champiñón', 'pimiento', 'cebolla asada', 'aceitunas negras'], precios: { mediana: 15.15, grande: 18.75, gigante: 19.95 } },
    { nombre: 'Marinera', ingredientes: ['Bonito', 'anchoas', 'ahumado'], precios: { mediana: 15.15, grande: 18.75, gigante: 19.95 } },
    { nombre: 'Griega', ingredientes: ['Salsa de yogurt', 'berenjena', 'ternera preparada'], precios: { mediana: 15.15, grande: 18.75, gigante: 19.95 } },
    { nombre: 'Diábola', ingredientes: ['Ternera preparada', 'picante', 'tomate natural'], precios: { mediana: 15.15, grande: 18.75, gigante: 19.95 } },
    { nombre: 'Cabra', ingredientes: ['Tomate natural', 'queso de cabra', 'atún', 'orégano'], precios: { mediana: 15.15, grande: 18.75, gigante: 19.95 } },
    { nombre: 'Pollo', ingredientes: ['Pimiento verde', 'pollo', 'doble de queso'], precios: { mediana: 16.35, grande: 19.35, gigante: 20.55 } },
    { nombre: 'Carbonara', ingredientes: ['Bacon', 'nata', 'toque de orégano'], precios: { mediana: 16.35, grande: 19.35, gigante: 20.55 } },
    { nombre: 'Barbacoa', ingredientes: ['Ternera preparada', 'bacon', 'salsa barbacoa'], precios: { mediana: 16.35, grande: 19.35, gigante: 20.55 } },
    { nombre: 'Ternera 4 Quesos', ingredientes: ['Ternera preparada', '4 quesos'], precios: { mediana: 16.35, grande: 19.35, gigante: 20.55 } },
  ],
  extras: {
    ingredientes: [
      'Champiñones',
      'Chorizo',
      'Jamón',
      'Bacon',
      'Ternera',
      'Cebolla',
      'Pimiento morrón',
      'Pimiento verde',
      'Aceitunas',
      'Bonito',
      'Anchoas',
      'Gambas',
      'Piña',
      'Tomate fresco',
      'Maíz',
      'Extra mozzarella',
      'Salmón',
      'Salsa barbacoa',
    ],
    precios: { mediana: 1.0, grande: 1.15, gigante: 1.3 },
  },
}

export const sandwiches = {
  productos: [
    { nombre: 'Mixto', ingredientes: ['Jamón York', 'queso'], precio: 3.75 },
    { nombre: 'Vegetal', ingredientes: ['Lechuga', 'tomate', 'atún', 'huevo duro', 'mahonesa'], precio: 4.25 },
  ],
}

export const hamburguesas = {
  productos: [
    { nombre: 'Básica', ingredientes: ['Carne', 'lechuga', 'tomate', 'salsa especial'], precio: 4.15 },
    { nombre: 'Básica con Queso', ingredientes: ['Carne', 'lechuga', 'tomate', 'queso', 'salsa especial'], precio: 4.55 },
    { nombre: 'Especial', ingredientes: ['Carne', 'lechuga', 'tomate', 'queso', 'bacon', 'cebolla', 'salsa especial'], precio: 5.0 },
    { nombre: 'Pollo Crunchy', ingredientes: ['Pollo', 'lechuga', 'tomate', 'queso', 'bacon', 'cebolla', 'salsa especial'], precio: 5.25 },
  ],
}
