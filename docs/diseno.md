# Guía de identidad visual y diseño web — Pizzería La Abuela

> **Estado:** propuesta visual inicial, pendiente de validación por el negocio. Está inspirada en la fotografía del interior facilitada y no representa necesariamente una identidad corporativa oficial.

## 1. Dirección creativa

La web debe transmitir una pizzería de barrio, familiar, tradicional y acogedora. La interfaz será actual y fácil de utilizar, pero evitará una estética excesivamente lujosa, fría o minimalista que no encaje con el ambiente del local.

La referencia visual disponible muestra paredes amarillas, ladrillo visto, tonos cálidos y mobiliario oscuro. La propuesta toma esos elementos como inspiración, sin copiar literalmente cada detalle del interior.

## 2. Paleta de colores

| Nombre | Hexadecimal | Uso recomendado |
|---|---|---|
| Rojo tomate | `#8E3025` | Botones principales, enlaces destacados y llamadas a la acción |
| Crema cálido | `#F4E7CE` | Fondo principal y bloques destacados |
| Marrón oscuro | `#57291F` | Titulares y texto destacado |
| Terracota | `#BC7956` | Separadores, bordes y pequeños detalles |
| Blanco cálido | `#FFFCF6` | Tarjetas, superficies de contenido y fondos alternativos |

### Reglas de uso

- Mantener el fondo general claro y cálido.
- Reservar el rojo tomate para acciones importantes, evitando que toda la interfaz sea roja.
- Utilizar el marrón oscuro para mantener una lectura cómoda y coherente con la identidad.
- Usar el terracota con moderación.
- Comprobar el contraste de cada combinación de texto y fondo y ajustarlo si no alcanza un nivel accesible.
- No introducir colores adicionales de forma arbitraria. Los colores de error o éxito deben elegirse por su función y comprobarse también en términos de contraste.

## 3. Tipografía

- **Lora:** titulares y encabezados. Aporta un carácter tradicional y cálido.
- **Nunito Sans:** texto de párrafo, navegación, precios, botones y elementos de interfaz. Facilita una lectura clara en pantallas pequeñas.

Cargar únicamente los pesos tipográficos que realmente se utilicen. Si las fuentes se sirven desde un proveedor externo, valorar la privacidad, el rendimiento y las alternativas de sistema.

## 4. Fotografía e imágenes

- Priorizar fotografías reales de pizzas y otros productos que el negocio autorice a utilizar.
- La fotografía del interior puede utilizarse para presentar el establecimiento si se dispone de permiso para publicarla.
- No presentar fotografías de archivo o imágenes generadas como si fueran fotografías reales de los platos de La Abuela.
- No inventar un logotipo oficial. Si no existe uno utilizable, mostrar el nombre del establecimiento con tipografía y recursos gráficos sencillos.
- Optimizar las imágenes para evitar descargas excesivas, utilizar dimensiones apropiadas y escribir textos alternativos descriptivos.
- Si todavía no hay fotografías de productos, diseñar la carta para que se vea bien sin imágenes en lugar de rellenarla con imágenes engañosas.

## 5. Estructura propuesta

La web puede empezar como una página principal con secciones y navegación por anclas. No crear varias rutas si no aportan valor a esta primera versión.

### 5.1. Cabecera

- Nombre o logotipo autorizado de Pizzería La Abuela.
- Navegación sencilla hacia Inicio, Carta y Contacto.
- Botón destacado para consultar la carta.
- Menú móvil accesible, con foco visible y controles correctamente etiquetados.

### 5.2. Portada

- Fotografía autorizada de una pizza o del establecimiento, si está disponible.
- Titular cercano, sin afirmaciones comerciales no verificadas.
- Acciones claras para ver la carta y consultar cómo llegar.
- Mantener el texto breve para que el usuario encuentre rápidamente la información importante.

### 5.3. Carta

- Categorías diferenciadas: Ensaladas, Pastas, Pizzas, Sándwiches y Hamburguesas.
- Productos, ingredientes y precios tomados de `contenido-negocio.md`.
- Las pizzas deben mostrar claramente sus tamaños y precios, con una estructura legible en móvil.
- Mostrar la base común de las pizzas, la posibilidad de pedirlas por mitades y los ingredientes adicionales con sus tarifas.
- No crear filtros, selectores de pedido ni carrito que aparenten realizar pedidos reales si no están implementados.
- No mostrar bebidas, postres o categorías sin datos confirmados.

### 5.4. Información del establecimiento

- Dirección completa.
- Teléfono con enlace `tel:`.
- Horarios por día, destacando que los martes está cerrado.
- Enlace a Google Maps con la URL documentada.
- Indicar que ofrece consumo en el local y pedidos a domicilio por teléfono, Just Eat, Uber Eats o Glovo.
- Añadir enlaces a las plataformas solo cuando se disponga de sus URLs directas verificadas.

### 5.5. Pie de página

- Nombre del establecimiento.
- Acceso a la dirección, teléfono y horario.
- No añadir iconos o enlaces a redes sociales, porque no se han facilitado redes del negocio.
- Los textos legales y de privacidad que sean necesarios deberán revisarse según el despliegue y las tecnologías finalmente utilizadas; no inventar datos legales de la empresa.

## 6. Componentes y lenguaje visual

- Tarjetas de productos sencillas, con espacio suficiente entre nombre, descripción y precio.
- Bordes suaves y sombras discretas, evitando que cada bloque parezca una tarjeta independiente sin necesidad.
- Separadores o pequeños detalles inspirados en ladrillo y cerámica, utilizados con moderación.
- Botones con etiquetas explícitas, estados hover y foco visibles.
- Iconos solo cuando mejoren la comprensión; acompañar los iconos importantes con texto.
- Mantener un espaciado coherente y una jerarquía tipográfica consistente.
- Evitar carruseles automáticos, animaciones innecesarias y efectos que dificulten la accesibilidad.

## 7. Diseño responsive y accesibilidad

- Diseñar primero para móvil y adaptar después a pantallas mayores.
- Evitar tablas de precios que obliguen a desplazamientos horizontales en móvil; considerar tarjetas o una disposición específica para los precios de las pizzas.
- Mantener los objetivos táctiles suficientemente grandes y separados.
- Asegurar contraste suficiente, navegación por teclado, orden lógico de encabezados y etiquetas accesibles.
- No depender únicamente del color para transmitir información.
- Respetar la preferencia del sistema por movimiento reducido si se incorporan animaciones.
- Comprobar el resultado en distintos anchos de pantalla y en el navegador.

## 8. Tono de los textos

- Cercano, sencillo y familiar.
- Español de España.
- Frases breves y naturales.
- Evitar superlativos y afirmaciones no verificadas como «la mejor pizza de Madrid», «ingredientes 100 % naturales» o «recetas secretas».
- Utilizar los nombres y descripciones de la carta tal como se han facilitado, corrigiendo únicamente formato y legibilidad sin cambiar el significado.

## 9. Criterios visuales de aceptación

- La paleta se aplica de forma consistente.
- Los titulares, el texto general y los precios son legibles.
- La carta es fácil de recorrer en móvil.
- El teléfono, el mapa y la información de horarios destacan sin competir con la carta.
- La web conserva una estética cálida y familiar sin saturar la página con decoraciones.
- Las imágenes utilizadas son apropiadas, están autorizadas y no se presentan de forma engañosa.
- Los elementos interactivos muestran estados de foco y se pueden usar con teclado.
- No existen desbordamientos horizontales ni textos o controles cortados en pantallas pequeñas.

## 10. Pendiente de validar

- Confirmar con el negocio si existe un logotipo oficial.
- Conseguir fotografías propias y permiso para utilizarlas.
- Validar la paleta y el estilo con el establecimiento si la web va a publicarse para uso real.
- Confirmar las URL directas de las plataformas de reparto si se quieren enlazar.