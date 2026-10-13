# Hungry Walker

Sitio web de presentación y menú digital para Hungry Walker. El proyecto busca mostrar la identidad del negocio, destacar algunos productos y facilitar el contacto por WhatsApp.

> **Estado del proyecto: prototipo en desarrollo.** La interfaz y la navegación visual están implementadas, pero aún falta desarrollo antes de considerarlo un producto final listo para operar. Los precios, descripciones, horario y redes sociales siguen siendo textos de ejemplo. No hay backend, gestión de pedidos, inventario ni pagos integrados.

## Contenido

- [Alcance actual](#alcance-actual)
- [Tecnologías](#tecnologías)
- [Requisitos](#requisitos)
- [Instalación y ejecución](#instalación-y-ejecución)
- [Configuración de WhatsApp](#configuración-de-whatsapp)
- [Contenido del menú](#contenido-del-menú)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Comandos disponibles](#comandos-disponibles)
- [Próximas etapas](#próximas-etapas)
- [Despliegue](#despliegue)

## Alcance actual

El prototipo incluye:

- Portada adaptable a escritorio y dispositivos móviles.
- Identidad visual con fondo, tipografías locales e imágenes del negocio.
- Sección de productos destacados y distintivo de «Más vendido».
- Menú organizado por categorías: salchipapas, sándwiches y bebidas.
- Navegación entre Inicio, Menú e Información, con indicador de sección activa.
- Botones y enlaces de contacto a WhatsApp.
- Animaciones de entrada y desplazamiento, incluyendo soporte para la preferencia de movimiento reducido del dispositivo.
- Sección de información para horario y redes sociales.

Los campos que muestran `(PRECIO)`, `(DESCRIPCIÓN)`, `(HORARIO)`, `(REDES)` o `(DESCRIPCIÓN DEL MENÚ)` son marcadores temporales y deben reemplazarse con información aprobada por el negocio.

## Tecnologías

- **Next.js 16.4** con App Router y Turbopack.
- **React 19.3**.
- **TypeScript 5**.
- **Tailwind CSS 4**.
- **Motion 14** (`motion/react`) para animaciones.
- **ESLint 9** y la configuración de ESLint para Next.js.
- **next/font/local** para cargar las tipografías Abril Fatface y DM Sans desde el proyecto.

Las versiones exactas y el árbol de dependencias se registran en `package-lock.json`.

## Requisitos

- Node.js **20.9.0 o posterior**.
- npm (se recomienda usar la versión que acompaña a la instalación de Node.js).

## Instalación y ejecución

1. Clona el repositorio y entra en la carpeta del proyecto:

   ```bash
   git clone <URL-DEL-REPOSITORIO>
   cd hungrywalker
   ```

2. Instala las dependencias usando el lockfile:

   ```bash
   npm ci
   ```

3. (Opcional) Configura WhatsApp siguiendo [Configuración de WhatsApp](#configuración-de-whatsapp).

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

5. Abre [http://localhost:3000](http://localhost:3000).

Para detener el servidor, usa `Ctrl+C` en la terminal donde está ejecutándose.

## Configuración de WhatsApp

El enlace de contacto se construye con la variable pública `NEXT_PUBLIC_WHATSAPP_NUMBER`. El número debe incluir el código de país y escribirse solo con dígitos, sin `+`, espacios ni guiones.

1. Crea el archivo local `.env.local` a partir de `.env.example`.

   En PowerShell:

   ```powershell
   Copy-Item .env.example .env.local
   ```

   En macOS o Linux:

   ```bash
   cp .env.example .env.local
   ```

2. Edita `.env.local` y completa el valor:

   ```dotenv
   NEXT_PUBLIC_WHATSAPP_NUMBER=573001234567
   ```

   Reemplaza el ejemplo por el número público real del negocio, con su código de país.

3. Reinicia el servidor de desarrollo para que Next.js cargue el cambio.

`.env.local` está excluido de Git. No guardes credenciales, tokens ni secretos en variables `NEXT_PUBLIC_*`: Next.js las expone al navegador. Esta variable está pensada únicamente para el número público de contacto. Si no se configura, el enlace apunta a `https://wa.me/` sin abrir una conversación específica.

## Contenido del menú

Los productos, sus categorías, imágenes, descripciones y precios se definen actualmente en:

- `src/config/menu.ts`: catálogo y categorías.
- `src/config/featured-products.ts`: reexportación de productos destacados.
- `src/config/site.ts`: nombre, eslogan, enlaces de navegación, WhatsApp y datos de información.
- `src/types/product.ts`: tipos TypeScript para productos y categorías.

Para reemplazar los textos temporales, edita los valores correspondientes en `src/config/menu.ts` y `src/config/site.ts`. Las imágenes del catálogo se sirven desde `public/images/`.

## Estructura del proyecto

```text
src/
  app/
    globals.css              Estilos globales, paleta, fondo y escala responsive
    layout.tsx               Layout raíz, metadatos, fuentes y proveedores
    page.tsx                 Composición de las secciones de la página
  components/
    animations/              Componentes de animación y preferencias de movimiento
    layout/                  Navegación, información y botón de WhatsApp
    sections/                Portada, productos destacados y catálogo
    ui/                      Componentes reutilizables de interfaz
  config/                    Contenido y configuración del sitio
  fonts/                     Archivos locales de tipografía
  types/                     Tipos compartidos
public/
  images/                    Imágenes de portada, productos y mascotas
```

## Comandos disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Ejecuta Next.js en modo de desarrollo. |
| `npm run lint` | Ejecuta ESLint sobre el proyecto. |
| `npx tsc --noEmit` | Comprueba los tipos de TypeScript sin generar archivos. |
| `npm run build` | Genera la compilación optimizada de producción. |
| `npm run start` | Sirve la compilación de producción; primero ejecuta `npm run build`. |

## Próximas etapas

El alcance futuro debe definirse antes de convertir este prototipo en una plataforma de pedidos. Algunas tareas pendientes posibles:

- Confirmar y cargar nombres, precios, descripciones, horario, redes y datos de contacto definitivos.
- Revisar todas las imágenes, textos y enlaces con el negocio.
- Diseñar el flujo de pedidos: productos, cantidades, notas, datos de entrega y confirmación.
- Decidir si los pedidos se gestionarán solo por WhatsApp o si se necesita un servicio/backend propio.
- Si se requiere una plataforma de pedidos, implementar persistencia, administración del catálogo y pedidos, validación y manejo de errores.
- Evaluar e integrar pagos únicamente si el negocio lo necesita.
- Añadir pruebas automatizadas para navegación, contenido y flujo de pedido cuando este se defina.
- Validar accesibilidad, rendimiento y comportamiento en dispositivos y navegadores objetivo.
- Preparar dominio, analítica, privacidad y configuración de producción según las necesidades del negocio.

Estas tareas son propuestas para una próxima etapa, no funcionalidades incluidas actualmente.

## Despliegue

La aplicación puede desplegarse en una plataforma compatible con Next.js, como Vercel, o en otro proveedor Node.js que admita la versión requerida de Next.js.

Antes de publicar:

1. Completa y revisa los datos e imágenes reales.
2. Define la variable `NEXT_PUBLIC_WHATSAPP_NUMBER` en la configuración de entorno del proveedor.
3. Ejecuta `npm run lint`, `npx tsc --noEmit` y `npm run build`.
4. Comprueba el sitio desplegado en escritorio y móvil y prueba todos los enlaces.

La publicación de este prototipo no implica que incluya procesamiento de pedidos, pagos o servicios de backend.
