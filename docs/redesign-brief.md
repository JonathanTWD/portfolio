# Meta: rediseño visual del portfolio "JonathanOS"

## Contexto
Portfolio personal (React 19 + Vite + Tailwind v4 + GSAP + Zustand) que simula un escritorio
inspirado en macOS: navbar, dock, ventanas arrastrables, Finder, galería, CV en PDF, Skills
(terminal), Contact y Settings con tema claro/oscuro. Lo hice yo, Jonathan Morera, desarrollador
fullstack que busca puesto fullstack. El proyecto principal que enseño es CanAccesible
(plataforma comunitaria de accesibilidad en Canarias). Lee el código completo antes de
proponer nada.

## La meta
Que cualquiera que entre sienta en los primeros segundos que está usando un sistema operativo
premium: fluido, cuidado, de calidad, con una UX tan buena como la de Apple. Tiene que estar
inspirado en macOS (sobre todo en el lenguaje Liquid Glass de macOS Tahoe) pero con identidad
propia: un sistema operativo de Jonathan, no una copia de Apple ni una plantilla de tutorial.
Debe entenderlo también alguien que nunca ha usado un Mac.

## Lo que se mantiene
- La metáfora de escritorio con ventanas, dock y navbar.
- El texto de bienvenida "Hey, I'm Jonathan! Welcome to my portfolio" con su efecto de peso
  variable al pasar el ratón (Georama). Es la firma del portfolio: puede refinarse, no eliminarse.
- Todo lo que ya funciona: arrastrar, minimizar con vista previa en el dock, maximizar, visor
  de PDF, galería.

## Dirección visual
- **Material de cristal**: superficies translúcidas con desenfoque, bordes con brillo sutil,
  profundidad por capas y sombras que indiquen jerarquía (la ventana activa se distingue de
  las inactivas). Debe ser legible: el cristal nunca puede comprometer el contraste del texto.
- **Tipografía**: Georama solo para la portada/hero. Para la interfaz elige una sans de UI
  pensada para pantalla, que se sienta del nivel de SF Pro sin copiarla (valora usar
  `system-ui`/`-apple-system` para que en Mac se vea SF y elegir un fallback con criterio).
  Justifica la elección y define una escala tipográfica clara.
- **Sistema de tokens**: paleta, superficies de cristal, radios, sombras, espaciado y
  tipografía como variables CSS. Propón la paleta y la dirección antes de implementar, con
  2–3 opciones razonadas si hay dudas.
- **Tema claro y oscuro**: tienen que verse igual de cuidados y diseñados como un sistema, no
  como un bloque de sobrescrituras. Tres opciones: claro, oscuro y automático (sigue al sistema).
- **Fondo de pantalla**: reemplazar los fondos oficiales de Apple (4,5 MB cada uno) por uno
  propio optimizado (AVIF/WebP o generado en CSS/SVG) que dé identidad, con variante clara y
  oscura.
- **Movimiento**: una secuencia de arranque bien orquestada y animaciones que respondan a lo
  que hace el usuario (abrir, cerrar, minimizar, enfocar). Nada de efectos decorativos por
  todas partes. Respetar `prefers-reduced-motion`.

## Navbar
- Quitar los iconos decorativos que no hacen nada (wifi, buscar, usuario, modo).
- Añadir un selector de idioma (ES/EN) y un interruptor de tema claro/oscuro, accesibles a
  simple vista. Settings sigue teniendo las mismas opciones.
- Que el reloj avance en tiempo real.
- Que el menú con el logo o los menús de texto sean útiles (Proyectos, Sobre mí, CV,
  Contacto).

## Idioma
- Español por defecto y opción de cambiar a inglés. Todo el texto de la interfaz y el
  contenido debe salir de archivos de traducción, nunca escrito dentro de los componentes.
  Guardar la preferencia y detectar el idioma del navegador en la primera visita.

## Contenido y apps del dock
- **Limpieza primero**: eliminar todos los restos de la plantilla (bio y fotos de "Adrian",
  posts de jsmastery, `gallery` con gal1–4, `photosLinks`, alt="adrian", el
  "5 of 5 stacks" y el "Render time" falsos, la errata "succesfully").
- **Sobre mí**: estructura para un texto mío (lo escribo yo; deja un borrador marcado como
  provisional) y un espacio para foto con un placeholder elegante hasta que la elija.
- **Safari**: sustituirlo por una app de caso de estudio de CanAccesible (problema, solución,
  arquitectura fullstack, decisiones técnicas, mi aporte, enlaces a la web y al repo).
  Propón la estructura antes de implementarla.
- Con un solo proyecto, el diseño no debe sentirse vacío: que CanAccesible luzca como
  proyecto estrella y que sea fácil añadir más proyectos en el futuro tocando solo datos.
- **Skills**: rediseñar la terminal para que sea más creíble e interesante (por ejemplo,
  comandos que se pueden escribir, como `skills`, `about` o `contact`), sin perder legibilidad
  para quien no programa.

## Widgets (a explorar)
Proponer 2–3 widgets de escritorio al estilo de los de macOS que aporten información real,
no decoración. Ideas: reloj/fecha, "Ahora mismo" (busco puesto fullstack, ubicación,
disponibilidad), proyecto destacado (CanAccesible), stack principal. Presenta las opciones
con un boceto antes de construir.

## Orientación para usuarios nuevos
Alguien que no conoce macOS tiene que saber qué hacer en los primeros 5 segundos: una pista
discreta en la primera visita (por ejemplo, un widget o una notificación de bienvenida que
explique cómo se usa el dock y las ventanas), que se pueda descartar y no vuelva a salir.

## Móvil
El portfolio tiene que funcionar de verdad en móvil, no solo mostrar un aviso. En pantallas
pequeñas, el escritorio con ventanas no tiene sentido: adapta la metáfora a la de un móvil
(inspiración iOS) manteniendo la misma identidad visual, el mismo material de cristal y el
mismo contenido.
- Pantalla de inicio con las mismas apps como iconos y los widgets reorganizados.
- Cada app se abre a pantalla completa con una transición que nace del icono, y se cierra
  con un gesto o un botón claro de volver.
- El texto de bienvenida se adapta al móvil (sin hover: piensa una alternativa táctil o una
  animación de entrada que conserve el efecto de peso variable).
- Idioma y tema siguen siendo accesibles a simple vista.
- Zonas táctiles de al menos 44px, sin scroll horizontal, y probado a 375px de ancho.
- Tablet: decide con criterio si usa el escritorio o la versión móvil según el ancho.
Comparte toda la lógica y el contenido con la versión de escritorio; solo cambia la capa
de presentación.

## Calidad mínima
- Accesibilidad: navegación por teclado (dock, ventanas, menús), foco visible, roles ARIA,
  contraste AA en ambos temas sobre el cristal.
- Rendimiento: imágenes optimizadas, carga rápida del escritorio y del móvil.

## Arquitectura
Se permite reorganizar el CSS por completo: pasar de un `index.css` de 800 líneas con
selectores por ID a tokens y estilos por componente, con un solo modo oscuro basado en
variables. Prioriza que el resultado final sea mantenible.

## Forma de trabajo
Trabaja por fases y espera mi revisión al final de cada una (cada fase en su rama/PR):
1. Limpieza de restos + infraestructura de i18n + tokens de diseño.
2. Sistema visual: material de cristal, tipografía, tema claro/oscuro/auto, fondo propio.
3. Navbar nueva (idioma, tema, reloj) y rediseño de las ventanas.
4. Dock: app de caso de estudio que sustituye a Safari, terminal de Skills mejorada,
   Sobre mí con placeholder.
5. Widgets y orientación para nuevos usuarios.
6. Versión móvil (pantalla de inicio, apps a pantalla completa, transiciones), además de
   accesibilidad y rendimiento.
Antes de la fase 2, preséntame la dirección visual (paleta, tipografía, una ventana de
muestra en ambos temas y un boceto de la pantalla de inicio en móvil) y no sigas hasta que
la apruebe. Haz capturas de cada cambio visual y critícalas antes de dármelo por terminado.

## Criterios de terminado
- No queda ningún resto de la plantilla original.
- Todo el texto existe en español e inglés y se cambia desde la navbar.
- El tema se cambia desde la navbar y ambos temas se ven igual de cuidados.
- Un usuario que no conoce macOS entiende cómo navegar sin ayuda externa.
- Se puede usar todo con teclado y el contraste cumple AA.
- Añadir un proyecto nuevo solo requiere editar datos.
- En móvil (375px) se puede ver todo el contenido y usar todas las apps sin aviso ni
  limitaciones.
