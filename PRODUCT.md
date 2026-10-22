# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Personas que quieren consultar la oferta de Pizzería La Abuela (Rivas-Vaciamadrid), conocer su horario y ubicación, llamar o acceder a los canales de pedido a domicilio. Se prioriza el móvil, sin descuidar tableta y escritorio. Estado: confirmado por el usuario a partir de `docs/requisitos.md`.

## Product Purpose
Web informativa estática que presenta el establecimiento, muestra la carta con ingredientes y precios, y facilita contacto, localización y acceso a los canales de pedido actuales. Éxito: encontrar rápido la carta, los precios, el horario, el teléfono y cómo llegar.

## Positioning
Pizzería de barrio, familiar y tradicional (según `docs/diseno.md`). Sin afirmaciones comerciales no verificadas («la mejor pizza», «recetas secretas», etc.).

## Operating Context
Se consulta sobre todo desde el móvil, a menudo para decidir qué pedir o para llamar. Ofrece consumo en el local y pedidos a domicilio por teléfono, Just Eat, Uber Eats o Glovo. Cierra los martes.

## Capabilities and Constraints
- Sin backend, base de datos, autenticación, carrito, pagos, reservas ni pedidos propios. No simular nada de eso.
- Fuente de verdad de datos y precios: `docs/contenido-negocio.md`. Precios exactos, formato español en euros.
- React + Vite + JavaScript + CSS. Sin dependencias nuevas sin justificar.
- Pendientes de confirmar por el negocio: URLs directas de Just Eat/Uber Eats/Glovo, horario en festivos, vigencia de carta y precios, alérgenos, textos legales y de privacidad, dominio y mantenimiento. Se marcan como `PENDIENTE` en el código.

## Brand Commitments
Paleta y tipografía de `docs/diseno.md` (propuesta inicial pendiente de validación por el negocio). No existe logotipo oficial utilizable: se muestra el nombre en tipografía. No hay redes sociales del negocio.

## Evidence on Hand
Datos de contacto, horario y carta completa en `docs/contenido-negocio.md`. **No hay** fotografías de producto ni del local en el repositorio, ni autorización para usarlas, ni logotipo. No fabricar fotos, reseñas, testimonios ni imágenes presentadas como reales.

## Product Principles
1. La información práctica (carta, precios, horario, teléfono, mapa) se encuentra en segundos.
2. Nada inventado: si falta un dato, queda pendiente de confirmación.
3. Calidez familiar y tradicional sin saturar de decoración.
4. Móvil primero, accesible por teclado y legible.

## Accessibility & Inclusion
Contraste suficiente, foco visible, HTML semántico, textos alternativos descriptivos, objetivos táctiles amplios, sin depender solo del color, respetar movimiento reducido.
