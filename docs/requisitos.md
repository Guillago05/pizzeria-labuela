# Requisitos del proyecto — Pizzería La Abuela

## 1. Objetivo

Crear una web informativa para Pizzería La Abuela que presente el establecimiento, permita consultar su carta y facilite el contacto, la localización y el acceso a sus canales de pedido actuales.

La web debe transmitir una imagen familiar y tradicional, con una interfaz moderna, clara y fácil de utilizar.

## 2. Público objetivo

Personas que quieran consultar la oferta de la pizzería, conocer sus horarios y ubicación, llamar al establecimiento o acceder a las plataformas mediante las que ofrece pedidos a domicilio.

Se debe priorizar la experiencia móvil, sin descuidar tabletas y escritorio.

## 3. Alcance de la primera versión

La primera versión será una web corporativa informativa desarrollada con React. No incluirá un sistema propio de pedidos ni un backend.

### 3.1. Funcionalidades incluidas

- Página de inicio con presentación del establecimiento y acceso destacado a la carta.
- Carta organizada por categorías, con nombres, ingredientes y precios.
- Presentación clara de los tres tamaños de pizza y sus precios.
- Información de contacto: teléfono, dirección y horario.
- Enlace a Google Maps utilizando la URL facilitada en `contenido-negocio.md`.
- Información sobre las opciones de servicio: consumo en el local y pedidos a domicilio por teléfono, Just Eat, Uber Eats o Glovo.
- Enlace telefónico mediante `tel:` para facilitar las llamadas.
- Diseño responsive para móvil, tableta y escritorio.
- Navegación por teclado y elementos interactivos accesibles.
- Metadatos básicos de SEO, título de página y descripción.
- Imágenes optimizadas y textos alternativos apropiados cuando se utilicen imágenes.

### 3.2. Funcionalidades fuera del alcance inicial

- Carrito de compra propio.
- Tramitación y seguimiento de pedidos.
- Pagos online.
- Registro, inicio de sesión o perfiles de usuario.
- Backend, base de datos o panel de administración.
- Gestión dinámica de productos, precios o disponibilidad.
- Integraciones mediante API con Just Eat, Uber Eats o Glovo.
- Sistema de reservas.
- Redes sociales, ya que el negocio ha indicado que no dispone de ellas.

No se deben simular estas funcionalidades como si fueran servicios reales. Si posteriormente se quieren incorporar, habrá que definir nuevos requisitos.

## 4. Requisitos de contenido

- Utilizar únicamente la información documentada en `contenido-negocio.md`.
- No inventar platos, ingredientes, precios, promociones, horarios, alérgenos ni afirmaciones comerciales.
- Conservar los precios facilitados sin redondearlos ni recalcularlos.
- Mostrar los precios en euros con formato español.
- Indicar que todas las ensaladas tienen base de lechuga.
- Mostrar la base común y los tamaños de las pizzas, así como la posibilidad de elaborarlas por mitades.
- Presentar los ingredientes adicionales y sus precios por tamaño.
- Si falta un dato necesario o existe una ambigüedad, dejarlo pendiente de confirmación en lugar de inventarlo.
- No afirmar que la web es oficial ni publicar materiales del negocio sin la autorización correspondiente.

## 5. Requisitos visuales y de experiencia de usuario

- Aplicar la dirección visual descrita en `diseno.md`.
- Mantener una jerarquía visual clara y una navegación sencilla.
- Facilitar el acceso a la carta, los precios, el horario, el teléfono y la ubicación.
- Asegurar un contraste suficiente, tamaños de texto legibles y foco visible.
- Evitar animaciones o adornos que dificulten la lectura o ralenticen la web.
- Utilizar fotografías reales del negocio o de sus productos únicamente cuando estén disponibles y exista autorización para usarlas.
- No presentar imágenes de archivo como si fueran fotografías reales de La Abuela.

## 6. Requisitos técnicos

- React y Vite.
- JavaScript, salvo que se decida expresamente incorporar TypeScript.
- CSS para el diseño responsive.
- Componentes reutilizables cuando reduzcan duplicación y mejoren el mantenimiento.
- Datos de la carta separados de la presentación, en una estructura fácil de revisar y actualizar.
- Evitar dependencias adicionales si la funcionalidad puede implementarse sin ellas.
- Inspeccionar la estructura actual del repositorio antes de modificar su configuración.
- No reemplazar archivos ni herramientas sin justificarlo.
- No introducir credenciales, claves API ni datos sensibles en el repositorio.
- Mantener el código legible y evitar abstracciones innecesarias.

## 7. Criterios de aceptación

La primera versión estará lista para revisión cuando:

- [ ] La aplicación arranque con el comando de desarrollo documentado.
- [ ] La compilación de producción termine sin errores.
- [ ] La página principal, la carta y la información de contacto sean accesibles.
- [ ] Los productos, ingredientes y precios coincidan con `contenido-negocio.md`.
- [ ] Los tres tamaños de pizza y sus precios se muestren correctamente.
- [ ] Los ingredientes adicionales y sus tarifas por tamaño se presenten sin errores.
- [ ] El teléfono abra la aplicación de llamadas en dispositivos compatibles.
- [ ] El enlace de Google Maps apunte a la URL facilitada.
- [ ] Se informe correctamente del cierre de los martes y del horario del resto de la semana.
- [ ] La web funcione en móvil, tableta y escritorio sin desbordamientos horizontales.
- [ ] Los enlaces funcionen y no existan errores relevantes en la consola.
- [ ] Los elementos interactivos puedan utilizarse mediante teclado.
- [ ] Las imágenes tengan textos alternativos apropiados.
- [ ] No aparezcan datos comerciales inventados ni funcionalidades inexistentes.

## 8. Incógnitas y confirmaciones pendientes

Antes de publicar la web, confirmar:

- Si el negocio autoriza el uso de su nombre, logotipo, fotografías y demás materiales.
- Si dispone de logotipo oficial y fotografías propias utilizables.
- Los enlaces directos de Just Eat, Uber Eats y Glovo, si se quieren añadir.
- Si los horarios facilitados se aplican a festivos y fechas especiales.
- Si la carta y los precios siguen vigentes.
- Si se quiere publicar información de alérgenos, que deberá ser confirmada por el negocio.
- Si se utilizará un dominio propio y quién mantendrá la información actualizada.

## 9. Forma de trabajo con Claude Code

- Antes de realizar cambios importantes, inspeccionar la estructura del proyecto y proponer un plan breve.
- Implementar una funcionalidad acotada cada vez.
- No modificar archivos ajenos a la tarea sin justificarlo.
- No instalar dependencias sin explicar la necesidad.
- Tras los cambios, resumir los archivos modificados y ejecutar las comprobaciones pertinentes.
- Revisar `git diff` antes de aceptar los cambios.
- Si falta información del negocio, preguntar o dejar constancia de la incertidumbre; nunca inventarla.