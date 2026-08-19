/* Database of Slide Presentations for Module 1 - Fundamentos del Diseño */

const slidesData = {
  "semana-1": {
    "title": "Semana 1: Introducción al Diseño",
    "days": {
      "lunes": {
        "title": "Lunes: ¿Qué es y qué no es diseño?",
        "slides": [
          {
            "layout": "title",
            "title": "Módulo 1: Fundamentos del Diseño",
            "subtitle": "Unidad 1: Introducción a los Fundamentos del Diseño Gráfico",
            "content": "<p>Clase de Lunes: ¿Qué es y qué NO es diseño? El rol del boceto y moodboards.</p><p class='highlight-text'>Profesora: alondrampre@gmail.com</p>",
            "notes": "<h3>Guía del Docente</h3><p>Da la bienvenida a los estudiantes. Preséntate y explica que este módulo es para construir criterio y perder el miedo a las herramientas de diseño.</p><div class='group-dynamic-box'><h4>Dinámica: Votación 'Arte vs Diseño'</h4><p>Usa Mentimeter para hacer una votación rápida con la pregunta '¿El diseño es arte?'.</p></div>"
          },
          {
            "layout": "split",
            "title": "Y no, no se trata de dibujar...",
            "content": "<p>Cuando empezamos a estudiar diseño, solemos pensar que diseñar es <strong>'hacer que algo se vea lindo'</strong>.</p><ul><li>El diseño no es una capa estética aplicada al final.</li><li>Es un <strong>método para resolver problemas</strong> de comunicación y experiencia.</li><li>Se basa en decisiones formales y funcionales concretas.</li></ul>",
            "media": "images/d01-lunes-slide02.jpg",
            "notes": "<h3>Puntos clave para explicar</h3><p>Destaca que el diseño responde a restricciones y necesidades de comunicación. No es un capricho ornamental.</p>"
          },
          {
            "layout": "split",
            "title": "¿Qué es realmente el Diseño?",
            "content": "<p>Herbert Simon (Premio Nobel, 1969) definió diseñar como:</p><blockquote style='border-left: 4px solid var(--coral); padding-left: 15px; margin: 15px 0; font-style: italic;'>\"Idear cursos de acción tendientes a cambiar situaciones existentes por otras preferidas.\"</blockquote><p>Es decir, diseñar es <strong>intervenir la realidad para mejorarla</strong> dentro de un marco de restricciones dadas.</p>",
            "media": "images/d01-lunes-slide03.jpg",
            "notes": "<h3>Comentarios de la Profesora</h3><p>Usa este esquema visual para ilustrar cómo el diseño actúa como un puente de transformación y mejora.</p>"
          },
          {
            "layout": "grid",
            "title": "Las Restricciones del Diseño",
            "content": "<p>El diseño es un proceso de resolución de problemas con restricciones:</p>",
            "cards": [
              {
                "num": "01",
                "icon": "💼",
                "title": "El Cliente",
                "desc": "Define los objetivos comerciales y de marca."
              },
              {
                "num": "02",
                "icon": "👥",
                "title": "El Público",
                "desc": "Determina cómo debe leerse y sentirse el mensaje."
              },
              {
                "num": "03",
                "icon": "📱",
                "title": "El Soporte",
                "desc": "Impreso o digital, condiciona los aspectos técnicos."
              },
              {
                "num": "04",
                "icon": "💰",
                "title": "El Presupuesto",
                "desc": "Limita las decisiones de producción."
              }
            ],
            "notes": "<h3>Ejemplo práctico</h3><p>Pregunta a la clase: ¿Qué pasaría si diseñamos una app sin pensar en la pantalla del usuario (soporte) o en su edad (público)?</p>"
          },
          {
            "layout": "grid",
            "title": "Diseño vs. Expresión Personal",
            "content": "A diferencia del arte, el diseño no busca la autoexpresión del diseñador. El diseño debe funcionar para un tercero.",
            "cards": [
              {
                "num": "01",
                "icon": "🎨",
                "title": "Arte (Expresión)",
                "desc": "<ul><li>El arte es <strong>subjetivo</strong> y se valida de manera cultural.</li><li>Su propósito es manifestar una perspectiva o emoción íntima.</li><li><strong>Sin Brief:</strong> Responde únicamente a la necesidad interna del artista.</li></ul>"
              },
              {
                "num": "02",
                "icon": "⚙️",
                "title": "Diseño (Función)",
                "desc": "<ul><li>El diseño es <strong>funcional</strong> y se evalúa según su efectividad técnica.</li><li>Su fin es resolver una necesidad específica para un usuario final.</li><li><strong>Tiene Brief:</strong> Opera dentro de un marco claro de restricciones objetivas.</li></ul>"
              }
            ],
            "notes": "<h3>Discusión guiada</h3><p>Pide a los estudiantes ejemplos de piezas de diseño gráfico cotidiano que consideren que funcionan muy bien.</p>"
          },
          {
            "layout": "grid",
            "title": "Arte, Ilustración, Publicidad y Artesanía",
            "content": "<p>Comprendiendo las diferencias en la intención y relación con el destinatario:</p>",
            "cards": [
              {
                "num": "ART",
                "icon": "🎨",
                "title": "Arte",
                "desc": "Expresión e interpretación personal y subjetiva."
              },
              {
                "num": "ILU",
                "icon": "✏️",
                "title": "Ilustración",
                "desc": "Creación de imágenes con carga narrativa."
              },
              {
                "num": "PUB",
                "icon": "📢",
                "title": "Publicidad",
                "desc": "Persuadir para vender un producto o idea comercial."
              },
              {
                "num": "ART",
                "icon": "🏺",
                "title": "Artesanía",
                "desc": "Oficio manual y utilitario de tirada corta."
              }
            ],
            "notes": "<h3>Aclaración</h3><p>Menciona que estas fronteras no son absolutas; un diseñador gráfico puede ilustrar, pero debe saber bajo qué lógica está trabajando.</p>"
          },
          {
            "layout": "grid",
            "title": "Forma y Función",
            "content": "El principio rector del diseño moderno: <strong>\"La forma sigue a la función\"</strong> (Louis Sullivan / Bauhaus).",
            "cards": [
              {
                "num": "01",
                "icon": "⚙️",
                "title": "Función (El Propósito)",
                "desc": "<ul><li>Define qué problema práctico resuelve el objeto o interfaz.</li><li>Establece los requisitos técnicos, accesibilidad y usabilidad.</li><li>Es el núcleo racional del diseño; sin función, no hay diseño.</li></ul>"
              },
              {
                "num": "02",
                "icon": "🎨",
                "title": "Forma (La Apariencia)",
                "desc": "<ul><li>Es la expresión visual, estética y material de la función.</li><li>Nunca es decorativa: guía al usuario sobre cómo usar el objeto.</li><li>Comunica el mensaje de forma instantánea mediante colores y tipografías.</li></ul>"
              }
            ],
            "notes": "<h3>Nota histórica</h3><p>Explica que este concepto nació en la arquitectura y fue adoptado por la Bauhaus en el diseño de objetos y tipografía.</p>"
          },
          {
            "layout": "split",
            "title": "El Proceso de Diseño",
            "content": "<p>Diseñar no es 'tener una idea genial' de golpe. Es un proceso estructurado:</p><ol><li>Investigar el problema.</li><li>Definir objetivos.</li><li>Generar alternativas (Ideación).</li><li>Seleccionar y refinar.</li><li>Validar e iterar.</li></ol>",
            "media": "images/d01-lunes-slide08.jpg",
            "notes": "<h3>Enfoque</h3><p>Menciona que saltear la investigación inicial es la causa más común de diseños que técnicamente lucen bien pero no funcionan en la práctica.</p>"
          },
          {
            "layout": "split",
            "title": "El Rol del Boceto",
            "content": "<p>Bocetar es <strong>pensar con la mano</strong>.</p><ul><li>Permite materializar ideas confusas rápidamente.</li><li>Es la forma más económica de explorar.</li><li>Permite descartar lo que no funciona sin invertir mucho tiempo.</li></ul><p class='highlight-text'>\"Fallar rápido y barato\"</p>",
            "media": "images/d01-lunes-slide09.jpg",
            "notes": "<h3>Práctica</h3><p>Insiste a los alumnos que no tengan miedo a dibujar mal. El boceto es conceptual, no artístico.</p>"
          },
          {
            "layout": "split",
            "title": "¿Qué es un Moodboard?",
            "content": "<p>Un Moodboard (muro de inspiración) es un collage de referencias visuales:</p><ul><li>Imágenes, colores, texturas y tipografías.</li><li>Ayuda a definir la dirección estética.</li><li>Comunica la intención conceptual al cliente de forma tangible antes de producir.</li></ul>",
            "media": "images/d01-lunes-slide10.jpg",
            "notes": "<h3>Consejo docente</h3><p>Explica que un moodboard no es una colección aleatoria de imágenes lindas, debe tener un hilo conductor conceptual.</p>"
          },
          {
            "layout": "grid",
            "title": "Cómo Armar un Buen Moodboard",
            "content": "<p>Pasos esenciales para definir la estética:</p>",
            "cards": [
              {
                "num": "01",
                "icon": "🎯",
                "title": "Definir Concepto",
                "desc": "Establece 3 palabras clave conceptuales."
              },
              {
                "num": "02",
                "icon": "🔍",
                "title": "Recopilar",
                "desc": "Busca referencias tipográficas, paletas y formas."
              },
              {
                "num": "03",
                "icon": "✂️",
                "title": "Curar",
                "desc": "Filtra y deja solo lo que aporte coherencia visual."
              },
              {
                "num": "04",
                "icon": "📐",
                "title": "Estructurar",
                "desc": "Ordena en Miro o Figma marcando jerarquías."
              }
            ],
            "notes": "<h3>Punto clave</h3><p>Un moodboard bien curado reduce enormemente la probabilidad de que el cliente rechace la propuesta final.</p>"
          },
          {
            "layout": "split",
            "title": "Pasada General por los TPs",
            "content": "<p>El camino del Módulo 1 en proyectos prácticos:</p><ul><li><strong>LAB 1 (Semana 1):</strong> Copia deliberada de un maestro suizo.</li><li><strong>LAB 2 (Semana 2):</strong> Auditoría y rediseño de un logo feo.</li><li><strong>LAB 3 (Semana 3):</strong> Integración de mockup con IA.</li><li><strong>TP Final:</strong> Proyecto de Identidad de Marca (Bitácora en grupos).</li></ul>",
            "media": "images/d01-lunes-slide12.jpg",
            "notes": "<h3>Aclaración</h3><p>Presenta brevemente las rúbricas y enfatiza que la bitácora es clave para ver el proceso iterativo.</p>"
          },
          {
            "layout": "title",
            "title": "Actividad del Día: Moodboard Colaborativo",
            "subtitle": "Ingresen a Miro para armar en grupos de 2 un moodboard conceptual.",
            "content": "<p class='highlight-text'>Concepto asignado: 'Atemporalidad Tecnológica'</p>",
            "notes": "<h3>Cierre de clase</h3><p>Monitorea a los grupos y da feedback sobre la selección tipográfica y cromática en sus moodboards.</p>"
          }
        ]
      },
      "martes": {
        "title": "Martes: 10 Principios de Dieter Rams",
        "slides": [
          {
            "layout": "title",
            "title": "Los 10 Principios del Buen Diseño",
            "subtitle": "Semana 1 - Martes / Dieter Rams",
            "content": "<p>Filosofía de diseño de Dieter Rams y su legado en el diseño contemporáneo.</p><p class='highlight-text'>\"Less, but better\" (Menos, pero mejor)</p>",
            "notes": "<h3>Introducción</h3><p>Dieter Rams es una figura clave del diseño industrial (Braun). Sus principios estructuran el diseño de productos y la interfaz digital de marcas como Apple.</p>"
          },
          {
            "layout": "split",
            "title": "¿Quién es Dieter Rams?",
            "content": "<p>Diseñador industrial alemán asociado estrechamente con la empresa Braun y la escuela de Ulm.</p><ul><li>Introdujo el concepto de funcionalidad honesta y estética minimalista.</li><li>En los 70s, se preguntó: <strong>¿Es mi diseño un buen diseño?</strong></li><li>De esa pregunta nacieron sus famosos 10 principios.</li></ul>",
            "media": "images/d02-martes-slide02.jpg",
            "notes": "<h3>Contexto</h3><p>Explica la relación entre la escuela de Ulm y Braun, y cómo estas ideas derivan de la Bauhaus.</p>"
          },
          {
            "layout": "grid",
            "title": "Principios 1, 2 y 3",
            "content": "<p>El buen diseño es innovador, útil y estético:</p>",
            "cards": [
              {
                "num": "01",
                "icon": "💡",
                "title": "Es Innovador",
                "desc": "El desarrollo tecnológico siempre ofrece nuevas oportunidades para el diseño."
              },
              {
                "num": "02",
                "icon": "⚙️",
                "title": "Hace al producto útil",
                "desc": "Debe ser funcional y optimizar el uso, ignorando lo que no aporte."
              },
              {
                "num": "03",
                "icon": "🎨",
                "title": "Es Estético",
                "desc": "La belleza de un objeto es parte de su utilidad. Lo que usamos a diario nos afecta."
              }
            ],
            "notes": "<h3>Ejemplos</h3><p>Muestra cómo el iPod original se inspiró en la radio T3 de Braun diseñada por Rams.</p>"
          },
          {
            "layout": "grid",
            "title": "Principios 4, 5 y 6",
            "content": "<p>El buen diseño es comprensible, discreto y honesto:</p>",
            "cards": [
              {
                "num": "04",
                "icon": "🔍",
                "title": "Es Comprensible",
                "desc": "Clarifica la estructura del producto. Puede autoexplicarse."
              },
              {
                "num": "05",
                "icon": "⚪",
                "title": "Es Discreto",
                "desc": "Los productos no son obras de arte. Son herramientas neutras y sobrias."
              },
              {
                "num": "06",
                "icon": "🤝",
                "title": "Es Honesto",
                "desc": "No promete características o valores que no tiene. No manipula al usuario."
              }
            ],
            "notes": "<h3>Discusión</h3><p>Pregunta: ¿Qué interfaces digitales actuales consideran que NO son honestas? (Patrones oscuros).</p>"
          },
          {
            "layout": "grid",
            "title": "Principios 7, 8 y 9",
            "content": "<p>El buen diseño es duradero, detallista y ecológico:</p>",
            "cards": [
              {
                "num": "07",
                "icon": "⏳",
                "title": "Es Atemporal/Duradero",
                "desc": "No sigue modas pasajeras. Dura muchos años incluso en sociedades de descarte."
              },
              {
                "num": "08",
                "icon": "🔬",
                "title": "Es Exhaustivo",
                "desc": "Cuidado y precisión en los detalles. Nada debe dejarse al azar."
              },
              {
                "num": "09",
                "icon": "🌱",
                "title": "Es Ecológico",
                "desc": "Preserva recursos, minimiza la contaminación física y visual."
              }
            ],
            "notes": "<h3>Enfoque local</h3><p>Explica la atemporalidad vinculándola a marcas locales de larga data en Argentina o Venezuela que siguen vigentes.</p>"
          },
          {
            "layout": "quote",
            "title": "Dieter Rams",
            "content": "El buen diseño es la menor cantidad de diseño posible. Menos, pero mejor, porque se concentra en los aspectos esenciales.",
            "notes": "<h3>Síntesis</h3><p>Este es el principio fundamental que resume a todos los demás. La pureza como valor funcional superior.</p>"
          },
          {
            "layout": "split",
            "title": "Dieter Rams en la Era Digital",
            "content": "<p>¿Cómo se aplican estos principios al diseño web y UX/UI?</p><ul><li>Interfaces limpias que no confunden (Comprensible).</li><li>Colores con contrastes accesibles (Útil).</li><li>Componentes modulares consistentes (Exhaustivo).</li></ul>",
            "media": "images/d02-martes-slide07.jpg",
            "notes": "<h3>Comentario</h3><p>Conecta la filosofía de Rams con las directrices visuales del curso (uso tipográfico y rejillas).</p>"
          },
          {
            "layout": "split",
            "title": "Caso de Estudio: Siam Di Tella",
            "content": "<p>Un referente atemporal en Argentina.</p><ul><li>Línea Siam Di Tella (heladeras, autos).</li><li>Diseño robusto, funcional y estético que duró décadas.</li><li>Se convirtió en un ícono de la identidad industrial argentina.</li></ul>",
            "media": "images/d02-martes-slide08.jpg",
            "notes": "<h3>Notas de Clase</h3><p>Menciona que Siam es el ejemplo perfecto de diseño duradero y útil en la historia de la industria latinoamericana.</p>"
          },
          {
            "layout": "split",
            "title": "Caso de Estudio: El Metro de Caracas",
            "content": "<p>Diseño total en Venezuela.</p><ul><li>Identidad visual, tipografía y señalética coherente creada en los 70s/80s.</li><li>Diseñado para guiar de forma clara y comprensible a millones de personas.</li><li>Uso de una retícula rigurosa e iconografía de síntesis extrema.</li></ul>",
            "media": "images/d02-martes-slide09.jpg",
            "notes": "<h3>Explicación</h3><p>Muestra cómo el logo del Metro de Caracas (flechas que representan rieles y direcciones) es un ejemplo sobresaliente de abstracción y retórica visual.</p>"
          },
          {
            "layout": "split",
            "title": "La atemporalidad de Gerd Leufert",
            "content": "<p>Pionero del diseño gráfico en Venezuela.</p><ul><li>Creador de logotipos memorables y marcas como CADAFE, Polar y el Museo de Bellas Artes.</li><li>Su enfoque constructivista llevó el diseño gráfico a nivel de arte funcional geométrico.</li><li>Sus símbolos siguen viéndose modernos hoy en día.</li></ul>",
            "media": "images/d02-martes-slide10.jpg",
            "notes": "<h3>Comentario de la Profesora</h3><p>Leufert demostró que un logotipo no necesita seguir modas visuales para ser altamente identificable y duradero.</p>"
          },
          {
            "layout": "split",
            "title": "Auditoría de Atemporalidad",
            "content": "<p>¿Cómo saber si una marca es atemporal?</p><ul><li>¿Funciona en blanco y negro?</li><li>¿Es legible a tamaño mínimo de 16px?</li><li>¿Se asocia inmediatamente con su rubro o concepto?</li><li>¿Prescinde de sombras, degradados complejos o efectos de moda?</li></ul>",
            "media": "images/d02-martes-slide11.jpg",
            "notes": "<h3>Indicación</h3><p>Esta diapositiva sirve como preparación metodológica para el LAB 2.</p>"
          },
          {
            "layout": "grid",
            "title": "Checklist de Dieter Rams",
            "content": "<h2>Para tus propios proyectos del curso:</h2>",
            "cards": [
              {
                "num": "01",
                "title": "¿Es honesto?",
                "desc": "No uses mockups engañosos.",
                "icon": "💡"
              },
              {
                "num": "02",
                "title": "¿Es comprensible?",
                "desc": "Usa jerarquía tipográfica legible.",
                "icon": "⚙️"
              },
              {
                "num": "03",
                "title": "¿Es minimalista?",
                "desc": "Elimina elementos decorativos vacíos.",
                "icon": "🎨"
              },
              {
                "num": "04",
                "title": "¿Es detallista?",
                "desc": "Ajusta márgenes y kerning al milímetro.",
                "icon": "🔬"
              }
            ],
            "notes": "<h3>Consejo</h3><p>Diles que utilicen esta grilla para autoevaluar sus entregas antes de subirlas al Drive.</p>"
          },
          {
            "layout": "title",
            "title": "Práctica en Miro: Auditoría de Marca",
            "subtitle": "Busquen un logotipo regional (AR/VE) antiguo y evalúenlo según el decálogo de Rams.",
            "content": "<p class='highlight-text'>Identifiquen si requiere un rediseño conceptual.</p>",
            "notes": "<h3>Cierre</h3><p>Pide a dos o tres grupos que compartan su auditoría y expliquen qué principio de Rams no se está cumpliendo.</p>"
          }
        ]
      },
      "miercoles": {
        "title": "Miércoles: ADN Latino y Atemporalidad",
        "slides": [
          {
            "layout": "title",
            "title": "Diseño con ADN Latino",
            "subtitle": "Semana 1 - Miércoles / Identidad y Atemporalidad",
            "content": "<p>Estudio de referentes argentinos y venezolanos y marcas que marcaron cultura.</p><p class='highlight-text'>Fusión de geometría, síntesis y contexto local.</p>",
            "notes": "<h3>Clase de hoy</h3><p>Hoy exploraremos la identidad gráfica latinoamericana, analizando marcas emblemáticas de Argentina y Venezuela y debatiendo qué las hace únicas y atemporales.</p>"
          },
          {
            "layout": "split",
            "title": "¿Qué es el ADN Latino en Diseño?",
            "content": "<p>Es la respuesta formal y creativa nacida de nuestras propias tensiones históricas y culturales.</p><ul><li>Uso audaz y expresivo del color.</li><li>Recursividad tipográfica y síntesis formal.</li><li>Fusión entre la rigurosidad europea y la vitalidad local.</li></ul>",
            "media": "images/d03-miercoles-slide02.jpg",
            "notes": "<h3>Explicación</h3><p>Comenta cómo los diseñadores latinoamericanos adaptaron las corrientes suizas y alemanas para crear un lenguaje propio y vibrante.</p>"
          },
          {
            "layout": "split",
            "title": "Tomás Maldonado y el Diseño Argentino",
            "content": "<p>Pionero del diseño y la teoría proyectual en Argentina.</p><ul><li>Miembro del movimiento de Arte Concreto-Invención.</li><li>Rediseñó la comunicación e identidad teórica en la Escuela de Ulm en Alemania.</li><li>Planteó un enfoque científico y racional del diseño.</li></ul>",
            "media": "images/d03-miercoles-slide03.jpg",
            "notes": "<h3>Nota</h3><p>Maldonado es el nexo fundamental entre el arte concreto argentino y la institucionalización del diseño industrial y gráfico moderno.</p>"
          },
          {
            "layout": "split",
            "title": "La marca Siam Di Tella y Siam 1500",
            "content": "<p>Un hito en la cultura visual argentina.</p><ul><li>Diseño e ingeniería nacional con gran alcance popular.</li><li>Representa el optimismo industrial del siglo XX en Argentina.</li><li>Tipografía robusta en su logotipo que transmitía solidez y confianza.</li></ul>",
            "media": "images/d03-miercoles-slide04.jpg",
            "notes": "<h3>Exposición</h3><p>Muestra cómo Siam marcó una época no solo por sus heladeras sino por el auto Siam Di Tella 1500, un símbolo nacional del transporte.</p>"
          },
          {
            "layout": "split",
            "title": "YPF: Identidad de un País",
            "content": "<p>Yacimientos Petrolíferos Fiscales (Argentina).</p><ul><li>Logotipo que evolucionó manteniendo su fuerza conceptual.</li><li>El uso de la sigla YPF en bloques geométricos sólidos.</li><li>Los colores azul y plata asociados a la soberanía y recursos nacionales.</li></ul>",
            "media": "images/d03-miercoles-slide05.jpg",
            "notes": "<h3>Punto de análisis</h3><p>Analiza cómo el logotipo de YPF es instantáneamente reconocible por su simplicidad y simetría.</p>"
          },
          {
            "layout": "split",
            "title": "Gerd Leufert y el Modernismo Venezolano",
            "content": "<p>Diseñador alemán que transformó la gráfica en Venezuela.</p><ul><li>Estableció el rigor constructivo y la abstracción formal en el país.</li><li>Creó identidades corporativas e institucionales memorables.</li><li>Su libro 'Imposibilia' es un referente de la morfología y abstracción visual.</li></ul>",
            "media": "images/d03-miercoles-slide06.jpg",
            "notes": "<h3>Explicación</h3><p>Menciona que Gerd Leufert y Nedo M.F. fundaron la revista CAL y lideraron la edad de oro del diseño en Venezuela.</p>"
          },
          {
            "layout": "split",
            "title": "Caso de Estudio: Cervecería Polar",
            "content": "<p>Un logotipo icónico en la cultura venezolana.</p><ul><li>Diseño original de Gerd Leufert que sintetizó la marca en un símbolo geométrico.</li><li>El oso polar integrado a una tipografía moderna y de fuerte pregnancia.</li><li>Un caso excepcional de branding duradero y adaptable.</li></ul>",
            "media": "images/d03-miercoles-slide07.jpg",
            "notes": "<h3>Análisis</h3><p>Polar es la marca más identificable en la cotidianidad venezolana. El rediseño sistemático de Leufert consolidó su atemporalidad.</p>"
          },
          {
            "layout": "split",
            "title": "Harina P.A.N. y la Iconografía Popular",
            "content": "<p>La marca que define el alimento diario venezolano.</p><ul><li>Empaque clásico con la mujer de la arepa y fondo amarillo con puntos.</li><li>Iconografía popular que traspasó lo publicitario para volverse parte de la identidad cultural.</li><li>Atemporalidad basada en la consistencia y recordación emocional.</li></ul>",
            "media": "images/d03-miercoles-slide08.jpg",
            "notes": "<h3>Comentario</h3><p>Pregunta: ¿Por qué creen que el diseño de Harina P.A.N. no ha cambiado sustancialmente en décadas?</p>"
          },
          {
            "layout": "split",
            "title": "Nedo M.F. y los Typogramas",
            "content": "<p>Nedo Mion Faria, diseñador italo-venezolano.</p><ul><li>Investigó la relación entre la letra, la geometría y el espacio negativo.</li><li>Sus 'typogramas' desafiaban la lectura convencional mediante la tensión de formas.</li><li>Influencia constructivista y cinética en toda la gráfica editorial venezolana.</li></ul>",
            "media": "images/d03-miercoles-slide09.jpg",
            "notes": "<h3>Exposición</h3><p>Muestra cómo Nedo jugaba con la legibilidad y la composición estructural de los textos en carteles y revistas.</p>"
          },
          {
            "layout": "split",
            "title": "El Di Tella y el Afiche Argentino",
            "content": "<p>El Instituto Torcuato Di Tella en los 60s.</p><ul><li>Epicentro de la vanguardia artística y el diseño gráfico en Buenos Aires.</li><li>Afiches de fuerte impacto conceptual y uso expresivo del color y la tipografía.</li><li>Pusieron al diseño gráfico argentino a la vanguardia internacional.</li></ul>",
            "media": "images/d03-miercoles-slide10.jpg",
            "notes": "<h3>Nota histórica</h3><p>Menciona a Juan Carlos Distéfano como director del departamento de diseño del Di Tella, y su increíble uso de la retórica visual.</p>"
          },
          {
            "layout": "split",
            "title": "Atemporalidad en la Práctica",
            "content": "<p>¿Qué podemos aprender de estos maestros?</p><ul><li><strong>Síntesis extrema:</strong> Eliminar el ruido decorativo.</li><li><strong>Estructura sólida:</strong> Uso riguroso de la retícula.</li><li><strong>Fuerza conceptual:</strong> El diseño comunica una gran idea de manera simple.</li></ul>",
            "media": "images/d03-miercoles-slide11.jpg",
            "notes": "<h3>Resumen</h3><p>Conecta la síntesis formal con el éxito conceptual del diseño de marcas atemporales.</p>"
          },
          {
            "layout": "grid",
            "title": "Pilares del Diseño Latinoamericano",
            "content": "<h2>Valores que definen nuestra identidad gráfica:</h2>",
            "cards": [
              {
                "num": "01",
                "title": "Recursividad",
                "desc": "Resolver problemas complejos con recursos limitados.",
                "icon": "💡"
              },
              {
                "num": "02",
                "title": "Color Activo",
                "desc": "El color no es decorativo, tiene rol protagónico y cultural.",
                "icon": "⚙️"
              },
              {
                "num": "03",
                "title": "Geometrización",
                "desc": "Uso de formas puras para lograr atemporalidad visual.",
                "icon": "🎨"
              },
              {
                "num": "04",
                "title": "Contexto",
                "desc": "Diseño que habla directamente a su comunidad y realidad.",
                "icon": "🔬"
              }
            ],
            "notes": "<h3>Comentario final</h3><p>Estimula a los alumnos a usar estos pilares en el desarrollo de su marca de TP Final.</p>"
          },
          {
            "layout": "title",
            "title": "Dinámica en Padlet: Referentes Regionales",
            "subtitle": "Compartan en el muro digital marcas icónicas de su región y debatan su atemporalidad.",
            "content": "<p class='highlight-text'>Analicen: ¿por qué marcaron cultura?</p>",
            "notes": "<h3>Cierre</h3><p>Monitorea las publicaciones en Padlet y destaca los mejores ejemplos presentados por los alumnos.</p>"
          }
        ]
      },
      "jueves": {
        "title": "Jueves: Retórica Visual y Concepto",
        "slides": [
          {
            "layout": "title",
            "title": "Retórica Visual y Concepto",
            "subtitle": "Semana 1 - Jueves / El mensaje en menos de 10 palabras",
            "content": "<p>Cómo sintetizar ideas complejas en conceptos potentes mediante figuras retóricas visuales.</p><p class='highlight-text'>La forma al servicio de la comunicación eficaz.</p>",
            "notes": "<h3>Introducción</h3><p>Hoy veremos cómo construir un concepto de diseño fuerte y usar figuras retóricas para comunicarlo sin redundancias. El lema es 'menos palabras, más significado'.</p>"
          },
          {
            "layout": "split",
            "title": "¿Qué es el Concepto en Diseño?",
            "content": "<p>El concepto es la <strong>idea central</strong> que unifica, estructura y da sentido a toda pieza gráfica.</p><ul><li>Responde a la pregunta: ¿Qué queremos comunicar exactamente?</li><li>Evita que las decisiones estéticas sean arbitrarias.</li><li>Permite justificar el diseño racionalmente ante el cliente.</li></ul>",
            "media": "images/d04-jueves-slide02.jpg",
            "notes": "<h3>Explicación</h3><p>Explica que el concepto es el alma del proyecto. Si no hay concepto, el diseño es pura decoración vacía.</p>"
          },
          {
            "layout": "split",
            "title": "El Concepto en menos de 10 palabras",
            "content": "<p>Un concepto potente debe poder formularse en una frase extremadamente corta.</p><ul><li>Si no puedes explicarlo en menos de 10 palabras, aún es difuso.</li><li>Ejemplo: <i>'Velocidad segura'</i>, <i>'Elegancia rebelde'</i>.</li><li>Sirve como filtro: todo elemento visual que no aporte a esa frase se elimina.</li></ul>",
            "media": "images/d04-jueves-slide03.jpg",
            "notes": "<h3>Ejemplo</h3><p>Haz un ejercicio rápido pidiendo a un alumno que defina el concepto de una marca famosa en 3 palabras.</p>"
          },
          {
            "layout": "split",
            "title": "¿Qué es la Retórica Visual?",
            "content": "<p>Es el uso de imágenes para <strong>sugerir significados</strong> más allá de su interpretación literal.</p><ul><li>Permite persuadir, emocionar o hacer reflexionar.</li><li>El diseñador crea metáforas y analogías visuales.</li><li>Aumenta la pregnancia y recordación del mensaje.</li></ul>",
            "media": "images/d04-jueves-slide04.jpg",
            "notes": "<h3>Análisis</h3><p>Menciona que la retórica visual es la herramienta principal del afiche de autor y del diseño editorial.</p>"
          },
          {
            "layout": "split",
            "title": "La Metáfora Visual",
            "content": "<p>Sustituir una imagen por otra que comparte una relación de semejanza semántica.</p><ul><li>Ejemplo clásico: un foco encendido para representar una idea.</li><li>Genera una conexión rápida y memorable en el cerebro.</li><li>Invita al espectador a completar el significado.</li></ul>",
            "media": "images/d04-jueves-slide05.jpg",
            "notes": "<h3>Explicación</h3><p>Muestra cómo la síntesis de un foco y la palabra idea es una metáfora universal e instantánea.</p>"
          },
          {
            "layout": "split",
            "title": "La Metonimia Visual",
            "content": "<p>Establecer una relación de causa-efecto, parte-todo o contenedor-contenido.</p><ul><li>Mostrar una huella dactilar para representar identidad.</li><li>Mostrar solo el faro de un auto para comunicar velocidad.</li><li>Sugerir el todo mediante un fragmento clave.</li></ul>",
            "media": "images/d04-jueves-slide06.jpg",
            "notes": "<h3>Punto clave</h3><p>La metonimia es una de las herramientas más usadas en el diseño de logotipos (isotipos).</p>"
          },
          {
            "layout": "split",
            "title": "La Hipérbole Visual",
            "content": "<p>Exagerar visualmente las dimensiones, proporciones o características de un elemento.</p><ul><li>Llama la atención de inmediato (foco visual).</li><li>Comunica fuerza, escala o urgencia.</li><li>Ejemplo: un envase de salsa picante que 'quema' la mesa.</li></ul>",
            "media": "images/d04-jueves-slide07.jpg",
            "notes": "<h3>Consejo</h3><p>Adviérteles que la hipérbole debe usarse con cuidado para no caer en lo grotesco o saturar visualmente la pieza.</p>"
          },
          {
            "layout": "split",
            "title": "La Antítesis / Contraste Visual",
            "content": "<p>Oponer dos conceptos o elementos con características marcadamente contrarias.</p><ul><li>Grande vs. Chico.</li><li>Negro vs. Blanco (contraste tonal absoluto).</li><li>Orgánico vs. Geométrico.</li><li>Genera tensión, dinamismo y ordena la jerarquía de lectura.</li></ul>",
            "media": "images/d04-jueves-slide08.jpg",
            "notes": "<h3>Conexión</h3><p>Conecta la antítesis con el principio suizo de contraste de escala y peso en la diagramación.</p>"
          },
          {
            "layout": "split",
            "title": "El Poder de la Sugerencia",
            "content": "<p>No digas todo. Deja espacio para que el cerebro del receptor complete la pieza.</p><ul><li>El espacio negativo es ideal para sugerir formas ocultas.</li><li>Fomenta la participación activa del usuario.</li><li>Ejemplo: El logotipo de FedEx (flecha oculta).</li></ul>",
            "media": "images/d04-jueves-slide09.jpg",
            "notes": "<h3>Análisis</h3><p>Explica que descubrir una flecha en el logo de FedEx genera una recompensa cognitiva en el cerebro del usuario, haciéndola memorable.</p>"
          },
          {
            "layout": "split",
            "title": "Caso de Estudio: Afiches de Shigeo Fukuda",
            "content": "<p>Maestro de la ilusión y la retórica visual.</p><ul><li>Su afiche 'Victory 1945' (un proyectil regresando al cañón).</li><li>Uso perfecto de espacio negativo y metáfora visual antibélica.</li><li>Síntesis extrema de colores (amarillo y negro) y formas geométricas puras.</li></ul>",
            "media": "images/d04-jueves-slide10.jpg",
            "notes": "<h3>Comentario</h3><p>Fukuda demuestra que con un solo concepto y dos colores se puede crear un afiche que da la vuelta al mundo.</p>"
          },
          {
            "layout": "split",
            "title": "Cómo Construir una Metáfora Visual",
            "content": "<p>El método de la matriz de conceptos:</p><ol><li>Escribe tu concepto en 2 palabras clave.</li><li>Haz una lista de elementos visuales asociados a la Palabra A.</li><li>Haz una lista de elementos asociados a la Palabra B.</li><li>Cruza y fusiona un elemento de A con uno de B.</li></ol>",
            "media": "images/d04-jueves-slide11.jpg",
            "notes": "<h3>Metodología</h3><p>Explica este paso a paso para que lo apliquen en la dinámica de grupo a continuación.</p>"
          },
          {
            "layout": "grid",
            "title": "Checklist Conceptual",
            "content": "<h2>Evalúa tu propuesta conceptual:</h2>",
            "cards": [
              {
                "num": "01",
                "title": "¿Se entiende rápido?",
                "desc": "El espectador debe captar la idea en menos de 3 segundos.",
                "icon": "💡"
              },
              {
                "num": "02",
                "title": "¿Es original?",
                "desc": "Evita caer en metáforas trilladas o de stock.",
                "icon": "⚙️"
              },
              {
                "num": "03",
                "title": "¿Es pertinente?",
                "desc": "Responde directamente al brief y al cliente.",
                "icon": "🎨"
              },
              {
                "num": "04",
                "title": "¿Es simple?",
                "desc": "Menos elementos significan más fuerza comunicacional.",
                "icon": "🔬"
              }
            ],
            "notes": "<h3>Consejo final</h3><p>Menos es más en la retórica conceptual. No sobrecargues la metáfora.</p>"
          },
          {
            "layout": "title",
            "title": "Dinámica en Miro: Adivina el Concepto",
            "subtitle": "Por parejas, dibujen un concepto asignado usando solo 2 figuras geométricas y espacio negativo.",
            "content": "<p class='highlight-text'>El resto de la clase debe adivinar el concepto en menos de 10 palabras.</p>",
            "notes": "<h3>Cierre</h3><p>Fomenta el análisis crítico. Si la clase tarda más de 10 segundos en adivinar, analicen qué falló en la síntesis retórica.</p>"
          }
        ]
      },
      "viernes": {
        "title": "Viernes: LAB 1 - Maestro Suizo",
        "slides": [
          {
            "layout": "title",
            "title": "LAB 1: Copia Deliberada",
            "subtitle": "Semana 1 - Viernes / Maestro Suizo",
            "content": "<p>Desconstrucción de una pieza clásica de la Escuela Suiza para entender la retícula y jerarquía.</p><p class='highlight-text'>Lanzamiento y pautas de entrega del primer laboratorio.</p>",
            "notes": "<h3>Introducción</h3><p>Hoy lanzamos el LAB 1. La copia deliberada no es plagio, es una técnica pedagógica para deconstruir la estructura y entender las reglas matemáticas detrás de un diseño suizo clásico.</p>"
          },
          {
            "layout": "split",
            "title": "¿Qué es el Estilo Suizo?",
            "content": "<p>El Estilo Tipográfico Internacional (décadas de 1950s).</p><ul><li>Basado en la claridad, objetividad y funcionalidad.</li><li>Uso riguroso de <strong>sistemas de retícula (grids)</strong>.</li><li>Tipografías Sans-Serif (Helvetica, Univers).</li><li>Composición asimétrica pero equilibrada.</li></ul>",
            "media": "images/d05-viernes-slide02.jpg",
            "notes": "<h3>Contexto histórico</h3><p>Menciona que este estilo sentó las bases del diseño corporativo e interfaces digitales actuales.</p>"
          },
          {
            "layout": "split",
            "title": "Josef Müller-Brockmann",
            "content": "<p>El gran sistematizador de la retícula suiza.</p><ul><li>Su libro 'Sistemas de Retícula' sigue siendo la biblia de la diagramación.</li><li>Defendió que la retícula da coherencia, orden y libertad creativa racional.</li><li>Sus afiches de conciertos para el Zurich Tonhalle son obras maestras de la geometría.</li></ul>",
            "media": "images/d05-viernes-slide03.jpg",
            "notes": "<h3>Análisis visual</h3><p>Señala cómo Müller-Brockmann distribuía elementos en base a ángulos matemáticos y subdivisiones de la retícula.</p>"
          },
          {
            "layout": "split",
            "title": "Armin Hofmann",
            "content": "<p>Maestro de la forma y el contraste visual.</p><ul><li>Enfoque más intuitivo y expresivo que Müller-Brockmann, pero igual de riguroso.</li><li>Fuerte contraste tonal (blanco y negro) y tipográfico.</li><li>Sintetizaba la forma al extremo para crear símbolos de gran fuerza icónica.</li></ul>",
            "media": "images/d05-viernes-slide04.jpg",
            "notes": "<h3>Comentario</h3><p>Hofmann demostró que la geometría rígida puede coexistir con un dinamismo dramático y expresivo.</p>"
          },
          {
            "layout": "split",
            "title": "El Poder de la Retícula (Grid)",
            "content": "<p>La retícula no es una prisión, es un esqueleto estructural.</p><ul><li>Define márgenes, columnas y medianiles (gutter).</li><li>Garantiza la alineación consistente de textos e imágenes.</li><li>Reduce la carga cognitiva del lector al estructurar el orden de lectura.</li></ul>",
            "media": "images/d05-viernes-slide05.jpg",
            "notes": "<h3>Exposición</h3><p>Muestra cómo la retícula modular suiza organiza la página en bloques proporcionales.</p>"
          },
          {
            "layout": "split",
            "title": "Tipografía Sans-Serif Objetiva",
            "content": "<p>La tipografía suiza es un elemento constructivo, no decorativo.</p><ul><li>Uso casi exclusivo de familias Sans-Serif (Helvetica, Univers, Akzidenz Grotesk).</li><li>La tipografía se utiliza para estructurar el espacio en blanco.</li><li>Jerarquía basada estrictamente en contrastes de tamaño y peso (bold vs. regular).</li></ul>",
            "media": "images/d05-viernes-slide06.jpg",
            "notes": "<h3>Aclaración</h3><p>Menciona que la tipografía en el estilo suizo actúa como imagen. El tamaño y la posición transmiten tanta información como las palabras.</p>"
          },
          {
            "layout": "split",
            "title": "Uso Activo del Espacio en Blanco",
            "content": "<p>El espacio vacío no es un desperdicio, es un elemento compositivo activo.</p><ul><li>Da respiro visual e incrementa la fluidez cognitiva.</li><li>Dirige la mirada del espectador (atención visual).</li><li>Genera elegancia y jerarquía sin sobrecargar.</li></ul>",
            "media": "images/d05-viernes-slide07.jpg",
            "notes": "<h3>Ejemplo</h3><p>Compara un afiche suizo (70% espacio en blanco) con un folleto publicitario tradicional (completamente saturado) para ver el impacto.</p>"
          },
          {
            "layout": "split",
            "title": "LAB 1: El Objetivo",
            "content": "<p><strong>Copia deliberada de una pieza clásica de la Escuela Suiza.</strong></p><ul><li>Aprender a deconstruir la retícula matemática invisible.</li><li>Identificar la estructura de columnas, márgenes y alineaciones.</li><li>Recrear con precisión las relaciones tipográficas (fuentes Sans-Serif) y espaciales.</li></ul>",
            "media": "images/d05-viernes-slide08.jpg",
            "notes": "<h3>Explicación del LAB</h3><p>El objetivo no es la invención artística, sino entrenar el ojo analítico y comprender la estructura rigurosa del diseño.</p>"
          },
          {
            "layout": "grid",
            "title": "LAB 1: Formato de Entrega",
            "content": "<h2>Requerimientos técnicos obligatorios:</h2>",
            "cards": [
              {
                "num": "DIM",
                "title": "Dimensiones",
                "desc": "1080 x 1350 px (vertical 4:5) o A3 proporcional (3508 x 4961 px a 300 dpi).",
                "icon": "💡"
              },
              {
                "num": "MED",
                "title": "Medio de entrega",
                "desc": "Carpeta en Google Drive con nomenclatura limpia: LAB1_MaestroSuizo.png.",
                "icon": "⚙️"
              },
              {
                "num": "MIR",
                "title": "Exposición",
                "desc": "Se sube al Tablero de Miro para muestra y feedback colectivo en clase.",
                "icon": "🎨"
              },
              {
                "num": "FECH",
                "title": "Entrega",
                "desc": "Se entrega el próximo lunes antes de la hora de clase.",
                "icon": "🔬"
              }
            ],
            "notes": "<h3>Importante</h3><p>Insiste en que la nomenclatura de archivos y las dimensiones exactas forman parte de la rúbrica de evaluación.</p>"
          },
          {
            "layout": "split",
            "title": "Cómo Analizar la Retícula del Maestro",
            "content": "<p>Pasos para la deconstrucción gráfica en Illustrator:</p><ol><li>Coloca el afiche original en una plantilla bloqueada.</li><li>Traza líneas guía sobre las alineaciones de los textos.</li><li>Identifica la grilla de columnas y márgenes.</li><li>Mide las relaciones proporcionales de tamaño de fuente.</li></ol>",
            "media": "images/d05-viernes-slide10.jpg",
            "notes": "<h3>Metodología técnica</h3><p>Explica cómo configurar las reglas, guías y cuadrícula en Adobe Illustrator para que coincidan con la pieza original.</p>"
          },
          {
            "layout": "split",
            "title": "Errores Comunes en el LAB 1",
            "content": "<p>Detalles que diferencian una pieza amateur de una profesional:</p><ul><li>Usar una tipografía diferente a la original (e.g. Arial en vez de Helvetica).</li><li>No alinear los textos con precisión milimétrica a la retícula.</li><li>Ignorar la proporción del espacio en blanco.</li><li>Nombres de archivo sucios (`final_final.png`).</li></ul>",
            "media": "images/d05-viernes-slide11.jpg",
            "notes": "<h3>Advertencia</h3><p>Diles que revisen el interletrado y el leading, ya que en el estilo suizo la tipografía descuidada rompe el diseño.</p>"
          },
          {
            "layout": "grid",
            "title": "Checklist de Verificación",
            "content": "<h2>Antes de exportar tu PNG, revisa:</h2>",
            "cards": [
              {
                "num": "01",
                "title": "¿Retícula visible?",
                "desc": "Haz un test ocultando el diseño original. ¿Se alinea todo?",
                "icon": "💡"
              },
              {
                "num": "02",
                "title": "¿Fuentes correctas?",
                "desc": "Usa Helvetica o Univers. Cuida el peso.",
                "icon": "⚙️"
              },
              {
                "num": "03",
                "title": "¿Márgenes limpios?",
                "desc": "Asegura aireación alrededor del afiche.",
                "icon": "🎨"
              },
              {
                "num": "04",
                "title": "¿Exportación?",
                "desc": "PNG a 72 dpi (para pantalla) o PDF vectorial.",
                "icon": "🔬"
              }
            ],
            "notes": "<h3>Consejo</h3><p>Diles que pasen el diseño a escala de grises para comprobar si el contraste de valor es correcto.</p>"
          },
          {
            "layout": "title",
            "title": "Práctica Privada: Inicio de LAB 1",
            "subtitle": "Abran Illustrator, elijan su afiche de la carpeta de recursos e inicien el trazado de la retícula.",
            "content": "<p class='highlight-text'>Monitoreo y feedback individual durante el resto de la clase.</p>",
            "notes": "<h3>Cierre</h3><p>Camina por el salón o revisa las pantallas de los estudiantes. Ayúdalos a encontrar la estructura geométrica subyacente.</p>"
          }
        ]
      }
    }
  },
  "semana-2": {
    "title": "Semana 2: Composición, Color y Tipo",
    "days": {
      "lunes": {
        "title": "Lunes: Gestalt y Síntesis Gráfica",
        "slides": [
          {
            "layout": "title",
            "title": "La Psicología de la Gestalt",
            "subtitle": "Semana 2 - Lunes / Composición y Síntesis",
            "content": "<p>Cómo el cerebro organiza los estímulos visuales en totalidades con sentido y cómo aprovecharlo en diseño.</p>",
            "notes": "<h3>Inicio de semana</h3><p>Hoy entramos a las leyes compositivas basadas en la Gestalt. Veremos cómo agrupar información y simplificar formas complejas.</p>"
          },
          {
            "layout": "split",
            "title": "El Todo y las Partes",
            "content": "<p>Desarrollada en Alemania a principios del siglo XX (Wertheimer, Köhler, Koffka).</p><ul><li>Principio central: <strong>El todo es diferente a la suma de sus partes</strong>.</li><li>El cerebro no ve elementos sueltos, busca patrones con sentido.</li></ul>",
            "media": "images/d06-lunes-slide02.jpg",
            "notes": "<h3>Explicación</h3><p>Usa la imagen del panda para mostrar cómo el cerebro completa los contornos que no están dibujados.</p>"
          },
          {
            "layout": "grid",
            "title": "Leyes Clave de la Gestalt (Parte 1)",
            "content": "<h2>Proximidad, Similitud y Cierre:</h2>",
            "cards": [
              {
                "num": "PROX",
                "title": "Proximidad",
                "desc": "Los elementos cercanos se perciben como un grupo.",
                "icon": "💡"
              },
              {
                "num": "SIMI",
                "title": "Similitud",
                "desc": "Los elementos que comparten forma o color se agrupan.",
                "icon": "⚙️"
              },
              {
                "num": "CIER",
                "title": "Cierre",
                "desc": "El cerebro completa formas incompletas para reconocerlas.",
                "icon": "🎨"
              }
            ],
            "notes": "<h3>Comentario</h3><p>Muestra cómo la proximidad nos ayuda a diseñar formularios web sin líneas divisorias.</p>"
          },
          {
            "layout": "grid",
            "title": "Leyes Clave de la Gestalt (Parte 2)",
            "content": "<h2>Continuidad, Figura-Fondo y Pregnancia:</h2>",
            "cards": [
              {
                "num": "CONT",
                "title": "Continuidad",
                "desc": "El ojo sigue trayectorias visuales alineadas.",
                "icon": "💡"
              },
              {
                "num": "FIGF",
                "title": "Figura-Fondo",
                "desc": "Capacidad de distinguir el elemento del fondo.",
                "icon": "⚙️"
              },
              {
                "num": "PREG",
                "title": "Pregnancia",
                "desc": "El cerebro prefiere la interpretación más simple y estable.",
                "icon": "🎨"
              }
            ],
            "notes": "<h3>Ejemplo local</h3><p>El logotipo del Metro de Caracas (flechas) combina Continuidad y Figura-Fondo.</p>"
          },
          {
            "layout": "split",
            "title": "Aplicación de Gestalt en Interfaces",
            "content": "<p>En el diseño UX/UI, la Gestalt estructura la jerarquía sin añadir ruido:</p><ul><li>Agrupar botones relacionados (Proximidad).</li><li>Mismo color para enlaces (Similitud).</li><li>Iconografía simplificada (Cierre y Pregnancia).</li></ul>",
            "media": "images/d06-lunes-slide05.jpg",
            "notes": "<h3>Consejo</h3><p>Explica que conocer estas leyes permite anticipar cómo leerá el usuario el diseño antes de testearlo.</p>"
          },
          {
            "layout": "split",
            "title": "¿Qué es la Síntesis Gráfica?",
            "content": "<p>El proceso de <strong>reducir una forma compleja</strong> (fotografía, objeto) a sus rasgos esenciales.</p><ul><li>Eliminar el detalle accesorio.</li><li>Preservar la reconocibilidad del objeto.</li><li>No es hacer algo 'más fácil', es comunicar con menos.</li></ul>",
            "media": "images/d06-lunes-slide06.jpg",
            "notes": "<h3>Exposición</h3><p>Explica la diferencia entre simplificar (reducir sin perder la forma) y abstraer (desvincularse de la representación literal).</p>"
          },
          {
            "layout": "split",
            "title": "Caso de Estudio: Pictogramas de Múnich 72",
            "content": "<p>Diseño de Otl Aicher.</p><ul><li>Sintetizó todos los deportes olímpicos en base a una cuadrícula y figuras geométricas puras.</li><li>Logró comunicación universal instantánea sin depender del idioma.</li><li>Es el estándar moderno de señalética deportiva.</li></ul>",
            "media": "images/d06-lunes-slide07.jpg",
            "notes": "<h3>Comentario</h3><p>Aicher aplicó leyes de pregnancia y modulación para lograr consistencia en más de 20 pictogramas.</p>"
          },
          {
            "layout": "split",
            "title": "Composición y Peso Visual",
            "content": "<p>Componer es organizar elementos visuales en el espacio para lograr un objetivo.</p><ul><li><strong>Peso visual:</strong> Los elementos grandes, oscuros y saturados pesan más.</li><li><strong>Balance:</strong> Distribución del peso (simétrica o asimétrica).</li></ul>",
            "media": "images/d06-lunes-slide08.jpg",
            "notes": "<h3>Análisis</h3><p>Muestra cómo un elemento pequeño y saturado puede equilibrar a uno grande y neutro (balance asimétrico).</p>"
          },
          {
            "layout": "split",
            "title": "Ritmo y Movimiento",
            "content": "<p>Aportan dinamismo y guían el recorrido visual de la mirada.</p><ul><li><strong>Ritmo:</strong> Repetición organizada de formas o colores.</li><li><strong>Movimiento:</strong> Sensación de dirección inducida por líneas o gradientes.</li></ul>",
            "media": "images/d06-lunes-slide09.jpg",
            "notes": "<h3>Explicación</h3><p>Muestra la progresión de tamaño de los círculos para simular velocidad y ritmo visual.</p>"
          },
          {
            "layout": "split",
            "title": "Contraste y Escala",
            "content": "<p>Las herramientas más efectivas para generar jerarquía visual.</p><ul><li><strong>Contraste:</strong> Diferencia perceptible (tamaño, color, textura).</li><li><strong>Escala:</strong> Relación de tamaño relativo entre elementos.</li></ul><p class='highlight-text'>El contraste evita la monotonía.</p>",
            "media": "images/d06-lunes-slide10.jpg",
            "notes": "<h3>Comentario de la Profesora</h3><p>Sin suficiente contraste entre texto y fondo, la legibilidad y accesibilidad se ven seriamente comprometidas.</p>"
          },
          {
            "layout": "split",
            "title": "El Espacio Negativo",
            "content": "<p>El espacio vacío no es un vacío desperdiciado.</p><ul><li>Organiza, separa y da respiración visual.</li><li>En algunos casos, forma parte activa del mensaje.</li><li>Vinculado directamente al principio de figura-fondo.</li></ul>",
            "media": "images/d06-lunes-slide11.jpg",
            "notes": "<h3>Análisis</h3><p>Utiliza el logo generado (panda) para ver cómo el espacio negativo da forma al sujeto.</p>"
          },
          {
            "layout": "grid",
            "title": "Puntos Clave Compositivos",
            "content": "<h2>Resumen de la clase:</h2>",
            "cards": [
              {
                "num": "01",
                "title": "Gestalt",
                "desc": "El cerebro agrupa por proximidad y similitud.",
                "icon": "💡"
              },
              {
                "num": "02",
                "title": "Síntesis",
                "desc": "Simplifica formas sin perder reconocibilidad.",
                "icon": "⚙️"
              },
              {
                "num": "03",
                "title": "Balance",
                "desc": "Compensa pesos visuales (escala y color).",
                "icon": "🎨"
              },
              {
                "num": "04",
                "title": "Espacio",
                "desc": "Usa el espacio negativo de manera activa.",
                "icon": "🔬"
              }
            ],
            "notes": "<h3>Consejo</h3><p>Diles que apliquen estos puntos al analizar las marcas en sus bitácoras de TP.</p>"
          },
          {
            "layout": "title",
            "title": "Dinámica: Cacería de Gestalt",
            "subtitle": "Utilicen sus teléfonos para subir a Padlet fotos de marcas o carteles en la calle que usen leyes de Gestalt.",
            "content": "<p class='highlight-text'>Explicando qué ley aplican.</p>",
            "notes": "<h3>Cierre</h3><p>Muestra el muro de Padlet en pantalla y comenta las fotos subidas por los estudiantes.</p>"
          }
        ]
      },
      "martes": {
        "title": "Martes: Color, Postimpresión y Procesos",
        "slides": [
          {
            "layout": "title",
            "title": "Teoría, Psicología y Accesibilidad del Color",
            "subtitle": "Semana 2 - Martes / Color y Postimpresión",
            "content": "<p>Física del color, modelos cromáticos (RGB vs CMYK), contrastes de Itten y procesos de impresión.</p>",
            "notes": "<h3>Clase técnica</h3><p>Hoy abordamos el color desde lo físico, lo digital y lo impreso, con fuerte foco en accesibilidad (daltonismo) y técnicas de postimpresión.</p>"
          },
          {
            "layout": "split",
            "title": "Física del Color: RGB vs. CMYK",
            "content": "<p>Dos modelos cromáticos con objetivos totalmente opuestos:</p><ul><li><strong>RGB:</strong> Color aditivo (luz). Pantallas y dispositivos digitales. Suma da blanco.</li><li><strong>CMYK:</strong> Color sustractivo (tinta). Impresión física. Suma da negro (K).</li></ul><p class='highlight-text'>Confundirlos genera errores graves de impresión.</p>",
            "media": "images/d07-martes-slide02.jpg",
            "notes": "<h3>Alerta técnica</h3><p>Diseñar en RGB para imprimir sin conversión previa a CMYK produce colores opacos y apagados en el papel.</p>"
          },
          {
            "layout": "split",
            "title": "Sistema Pantone y Modelo LAB",
            "content": "<p>Garantizando la consistencia del color:</p><ul><li><strong>Pantone:</strong> Tintas directas estandarizadas con códigos únicos. Garantiza el mismo tono en cualquier país e imprenta.</li><li><strong>LAB:</strong> Modelo independiente del dispositivo, abarca todo el espectro visible por el ojo humano.</li></ul>",
            "media": "images/d07-martes-slide03.jpg",
            "notes": "<h3>Explicación</h3><p>Explica que las marcas globales especifican sus colores corporativos en Pantone para evitar variaciones en el empaque.</p>"
          },
          {
            "layout": "split",
            "title": "Los 7 Contrastes de Itten",
            "content": "<p>Johannes Itten (Bauhaus) sistematizó la interacción del color:</p><ol><li>Contraste de tono (colores puros).</li><li>Contraste claro-oscuro.</li><li>Contraste frío-cálido (temperatura).</li><li>Contraste de complementarios.</li><li>Contraste simultáneo.</li><li>Contraste de saturación.</li><li>Contraste de cantidad (proporción).</li></ol>",
            "media": "images/d07-martes-slide04.jpg",
            "notes": "<h3>Ejemplo</h3><p>Muestra cómo el contraste simultáneo hace que un mismo gris se perciba claro sobre negro y oscuro sobre blanco.</p>"
          },
          {
            "layout": "split",
            "title": "Psicología y Cultura del Color",
            "content": "<p>El color transmite emociones, pero su significado depende del contexto:</p><ul><li>Asociaciones comunes: rojo (urgencia/pasión), azul (confianza/calma).</li><li><strong>Relatividad cultural:</strong> El blanco es pureza en Occidente y luto en Asia.</li><li>Predominancia por industria (azules y verdes en finanzas y salud).</li></ul>",
            "media": "images/d07-martes-slide05.jpg",
            "notes": "<h3>Discusión</h3><p>Debate cómo las marcas usan el color para posicionarse (ej. Coca-Cola vs. Pepsi).</p>"
          },
          {
            "layout": "grid",
            "title": "Daltonismo y Accesibilidad",
            "content": "<h2>Tipos de daltonismo y su impacto visual:</h2>",
            "cards": [
              {
                "num": "DEUT",
                "title": "Deuteranomalía",
                "desc": "Falta de sensibilidad al verde. Confusión entre rojos y verdes.",
                "icon": "💡"
              },
              {
                "num": "PROT",
                "title": "Protanopía",
                "desc": "Falta de sensibilidad al rojo. El rojo pierde brillo y los verdes se ven descoloridos.",
                "icon": "⚙️"
              },
              {
                "num": "TRIT",
                "title": "Tritanopía",
                "desc": "Falta de sensibilidad al azul. Paleta desplazada a verdes y rosas.",
                "icon": "🎨"
              },
              {
                "num": "ACRO",
                "title": "Acromatopsia",
                "desc": "Ausencia total de percepción del color. Todo en escala de grises.",
                "icon": "🔬"
              }
            ],
            "notes": "<h3>Importancia</h3><p>El daltonismo afecta a un porcentaje significativo de la población (principalmente hombres). Diseñar pensando en accesibilidad es un requisito legal y ético.</p>"
          },
          {
            "layout": "split",
            "title": "Regla del Indicador Doble",
            "content": "<p><strong>Nunca dependas únicamente del color para comunicar información crítica.</strong></p><ul><li>❌ Mal: Un texto de error que solo se pone rojo.</li><li>✅ Bien: Mensaje en rojo acompañado de un ícono de advertencia (⚠) y texto explícito.</li></ul>",
            "media": "images/d07-martes-slide07.jpg",
            "notes": "<h3>Ejemplo</h3><p>Esta regla es fundamental en interfaces digitales. Muestra ejemplos reales de accesibilidad en formularios.</p>"
          },
          {
            "layout": "split",
            "title": "La Prueba del Blanco y Negro",
            "content": "<p>Para verificar si tu jerarquía gráfica funciona:</p><ul><li>Pasa tu diseño a escala de grises.</li><li>Si la información clave se pierde o el botón principal se confunde con el fondo, falta <strong>contraste de luminosidad (valor)</strong>.</li><li>El contraste de tono solo no es suficiente.</li></ul>",
            "media": "images/d07-martes-slide08.jpg",
            "notes": "<h3>Consejo</h3><p>Diles que usen filtros de vista en Illustrator o Photoshop para previsualizar sus diseños en escala de grises.</p>"
          },
          {
            "layout": "split",
            "title": "Maquinarias de Impresión",
            "content": "<p>Cómo se produce el diseño físico a gran escala:</p><ul><li><strong>Impresión Offset:</strong> Ideal para grandes tiradas (libros, revistas). Costosa puesta en marcha, pero bajo costo unitario. Alta precisión de color.</li><li><strong>Impresión Digital:</strong> Ideal para tiradas cortas y personalizadas. Rápida producción, permite datos variables.</li></ul>",
            "media": "images/d07-martes-slide09.jpg",
            "notes": "<h3>Explicación</h3><p>Detalla que el offset usa planchas metálicas para cada color CMYK, mientras que la digital inyecta tinta directamente.</p>"
          },
          {
            "layout": "split",
            "title": "El Valor de la Postimpresión",
            "content": "<p>Técnicas que aportan valor táctil y visual al empaque:</p><ul><li><strong>Laca UV (Sectorizada):</strong> Brillo en zonas específicas del diseño.</li><li><strong>Hot Stamping:</strong> Aplicación de folia metálica (oro, plata) mediante calor.</li><li><strong>Troquelado:</strong> Corte personalizado del soporte físico (formas especiales).</li><li><strong>Relieve (Embossing):</strong> Generación de volumen táctil sobre el papel.</li></ul>",
            "media": "images/d07-martes-slide10.jpg",
            "notes": "<h3>Branding</h3><p>Asocia estas técnicas al TP Final (diseño de packaging y fanzine de marca).</p>"
          },
          {
            "layout": "split",
            "title": "Evita Combinaciones de Alto Riesgo",
            "content": "<p>Evita colocar textos sobre fondos donde el contraste dependa de estas parejas de colores sin diferencia de brillo:</p><ul><li>Rojo vs. Verde (Ilegible para daltónicos).</li><li>Azul vs. Violeta (Bajo contraste).</li><li>Verde vs. Marrón.</li></ul>",
            "media": "images/d07-martes-slide11.jpg",
            "notes": "<h3>Advertencia</h3><p>Esta diapositiva muestra gráficamente el problema de colocar texto teal sobre fondo óxido.</p>"
          },
          {
            "layout": "grid",
            "title": "Checklist del Color",
            "content": "<h2>Para tus entregas gráficas y digitales:</h2>",
            "cards": [
              {
                "num": "RGB",
                "title": "Pantallas",
                "desc": "Modo RGB a 72 dpi en formato PNG/JPG.",
                "icon": "💡"
              },
              {
                "num": "CMYK",
                "title": "Impresión",
                "desc": "Modo CMYK a 300 dpi con sangrías y marcas.",
                "icon": "⚙️"
              },
              {
                "num": "ACC",
                "title": "Contraste",
                "desc": "Contraste mínimo WCAG de 4.5:1 para texto normal.",
                "icon": "🎨"
              },
              {
                "num": "PNT",
                "title": "Corporativo",
                "desc": "Usa Pantone para logotipos físicos de marca.",
                "icon": "🔬"
              }
            ],
            "notes": "<h3>Consejo</h3><p>Indica el uso de herramientas como Adobe Color para verificar accesibilidad de contraste.</p>"
          },
          {
            "layout": "title",
            "title": "Práctica en Adobe Color",
            "subtitle": "Abran Adobe Color para crear una paleta de 3 colores corporativos accesibles para su marca.",
            "content": "<p class='highlight-text'>Prueben los contrastes de texto y simulen daltonismo.</p>",
            "notes": "<h3>Cierre</h3><p>Monitorea la creación de paletas y da feedback sobre la combinación de contrastes.</p>"
          }
        ]
      },
      "miercoles": {
        "title": "Miércoles: Anatomía y Leyes Tipográficas",
        "slides": [
          {
            "layout": "title",
            "title": "Anatomía y Leyes de la Tipografía",
            "subtitle": "Semana 2 - Miércoles / Clasificación y Combos",
            "content": "<p>Historia, anatomía de la letra, clasificación tipográfica y reglas de combinación exitosas.</p>",
            "notes": "<h3>Clase especial</h3><p>Hoy entramos al fascinante mundo de la tipografía. Analizaremos su anatomía y daremos las 10 leyes fundamentales para elegir tipografías sin fallar.</p>"
          },
          {
            "layout": "split",
            "title": "Historia de la Tipografía",
            "content": "<p>Un camino ligado a la tecnología de reproducción:</p><ul><li><strong>Johannes Gutenberg (siglo XV):</strong> Tipos móviles de plomo.</li><li><strong>Siglos XVIII y XIX:</strong> Tipos de transición y modernos.</li><li><strong>Siglo XX (Bauhaus / Suiza):</strong> Consolidación de la tipografía Sans-Serif y las retículas.</li><li><strong>Revolución digital:</strong> Variable fonts y webfonts.</li></ul>",
            "media": "images/d08-miercoles-slide02.jpg",
            "notes": "<h3>Contexto</h3><p>Explica que cada época técnica dictó la morfología de la letra.</p>"
          },
          {
            "layout": "split",
            "title": "Anatomía de la Letra",
            "content": "<p>Las partes técnicas que definen la morfología tipográfica:</p><ul><li><strong>Asta:</strong> Trazo vertical principal.</li><li><strong>Serifa / Remate:</strong> Terminación en los extremos.</li><li><strong>Ojo:</strong> Espacio interior cerrado (e.g. en la 'o').</li><li><strong>Altura de x:</strong> Altura de las minúsculas.</li><li><strong>Ascendentes y Descendentes:</strong> (e.g. en la 'b' o 'p').</li></ul>",
            "media": "images/d08-miercoles-slide03.jpg",
            "notes": "<h3>Explicación</h3><p>Señala en la pantalla la altura de x, la serifa del texto en Arvo y el asta de las letras.</p>"
          },
          {
            "layout": "grid",
            "title": "Clasificación Tipográfica",
            "content": "<h2>Las 4 grandes familias tipográficas:</h2>",
            "cards": [
              {
                "num": "SER",
                "title": "Serif",
                "desc": "Con remates. Tradición, formalidad y alta legibilidad en textos extensos (Times).",
                "icon": "💡"
              },
              {
                "num": "SANS",
                "title": "Sans-Serif",
                "desc": "Sin remates. Modernidad, neutralidad y claridad en pantallas (Helvetica).",
                "icon": "⚙️"
              },
              {
                "num": "SLAB",
                "title": "Slab Serif",
                "desc": "Remates gruesos. Solidez, carácter y uso en titulares (Arvo).",
                "icon": "🎨"
              },
              {
                "num": "SCR",
                "title": "Script",
                "desc": "Imitación de escritura manual. Cercanía y elegancia.",
                "icon": "🔬"
              }
            ],
            "notes": "<h3>Comentario</h3><p>Menciona que las tipografías Display están diseñadas para tamaños grandes (titulares/logos), priorizando personalidad sobre legibilidad.</p>"
          },
          {
            "layout": "split",
            "title": "Las Variable Fonts",
            "content": "<p>La tecnología tipográfica actual:</p><ul><li>Un solo archivo que contiene múltiples variaciones de peso, ancho o inclinación.</li><li>Interpolación continua sin necesidad de cargar múltiples archivos independientes.</li><li>Ideal para diseño web adaptable y dinámico.</li></ul>",
            "media": "images/d08-miercoles-slide05.jpg",
            "notes": "<h3>Exposición</h3><p>Muestra cómo las Variable Fonts optimizan el rendimiento de carga en sitios web de marca.</p>"
          },
          {
            "layout": "split",
            "title": "Combinaciones Tipográficas Exitosas",
            "content": "<p>Un sistema tipográfico profesional combina 2 o máximo 3 familias:</p><ul><li><strong>Contraste intencional:</strong> Combinar Serif con Sans-serif (ej. Arvo para títulos + Space Grotesk para cuerpo).</li><li><strong>Parentesco:</strong> Usar variantes de la misma familia tipográfica (Light, Regular, Bold).</li></ul><p class='highlight-text'>Evita combinar fuentes muy similares.</p>",
            "media": "images/d08-miercoles-slide06.jpg",
            "notes": "<h3>Ejemplo directo</h3><p>Muestra cómo el contraste entre Arvo y Space Grotesk en esta diapositiva estructura la lectura.</p>"
          },
          {
            "layout": "grid",
            "title": "Las 10 Leyes de la Tipografía (1-4)",
            "content": "<h2>Reglas fundamentales de uso:</h2>",
            "cards": [
              {
                "num": "01",
                "title": "Legibilidad primero",
                "desc": "No sacrifiques la lectura por estética experimental.",
                "icon": "💡"
              },
              {
                "num": "02",
                "title": "Contraste de peso",
                "desc": "Usa variantes claras (Bold vs. Regular).",
                "icon": "⚙️"
              },
              {
                "num": "03",
                "title": "Ancho de columna",
                "desc": "Entre 45 y 75 caracteres por línea de texto.",
                "icon": "🎨"
              },
              {
                "num": "04",
                "title": "Alineación natural",
                "desc": "Usa alineado a la izquierda para texto largo.",
                "icon": "🔬"
              }
            ],
            "notes": "<h3>Análisis</h3><p>Explica por qué la alineación a la izquierda es la forma más natural de lectura en Occidente.</p>"
          },
          {
            "layout": "grid",
            "title": "Las 10 Leyes de la Tipografía (5-8)",
            "content": "<h2>Estructuración y orden:</h2>",
            "cards": [
              {
                "num": "05",
                "title": "Márgenes amplios",
                "desc": "El texto necesita espacio alrededor para respirar.",
                "icon": "💡"
              },
              {
                "num": "06",
                "title": "Espaciado de línea",
                "desc": "El leading óptimo suele ser 120%-140% del tamaño.",
                "icon": "⚙️"
              },
              {
                "num": "07",
                "title": "No deformes",
                "desc": "Nunca estires o deformes la tipografía vectorialmente.",
                "icon": "🎨"
              },
              {
                "num": "08",
                "title": "Consistencia",
                "desc": "Usa los mismos estilos en todas las piezas del sistema.",
                "icon": "🔬"
              }
            ],
            "notes": "<h3>Advertencia</h3><p>Insiste en que deformar tipografías estirando el cuadro de texto es considerado un error fatal en diseño gráfico.</p>"
          },
          {
            "layout": "split",
            "title": "Leyes 9 y 10: Jerarquía y Detalles",
            "content": "<p>Completando las directrices tipográficas:</p><ul><li><strong>Ley 9: Jerarquía de tamaño marcada:</strong> Asegura que los títulos tengan el doble o triple del tamaño del cuerpo.</li><li><strong>Ley 10: Cuida la microtipografía:</strong> Kerning, tracking, y eliminación de viudas y huérfanas.</li></ul>",
            "media": "images/d08-miercoles-slide09.jpg",
            "notes": "<h3>Explicación</h3><p>Explica qué son las viudas y huérfanas en la diagramación de textos editoriales.</p>"
          },
          {
            "layout": "split",
            "title": "Microtipografía vs. Macrotipografía",
            "content": "<p>El diseño tipográfico se trabaja a dos escalas:</p><ul><li><strong>Microtipografía:</strong> Detalle fino (kerning, leading, ligaduras). Garantiza la legibilidad a nivel morfológico.</li><li><strong>Macrotipografía:</strong> Estructura global (alineaciones, retícula, ancho de columna, jerarquía visual). Guía el recorrido visual del lector.</li></ul>",
            "media": "images/d08-miercoles-slide10.jpg",
            "notes": "<h3>Comentario de la Profesora</h3><p>La microtipografía es la artesanía del detalle; la macrotipografía es la arquitectura de la página.</p>"
          },
          {
            "layout": "split",
            "title": "Ejemplo de Mala Jerarquía",
            "content": "<p>❌ Error común de estudiantes:</p><ul><li>Usar títulos de 16pt para cuerpos de texto de 14pt (Falta de contraste).</li><li>Genera conflicto visual en lugar de orden.</li><li>El lector no sabe qué mirar primero.</li></ul>",
            "media": "images/d08-miercoles-slide11.jpg",
            "notes": "<h3>Consejo</h3><p>Muestra gráficamente en la pizarra la diferencia visual cuando se usa un título de 32pt y un cuerpo de 12pt.</p>"
          },
          {
            "layout": "grid",
            "title": "Checklist Tipográfico",
            "content": "<h2>Revisa tu diagramación tipográfica:</h2>",
            "cards": [
              {
                "num": "01",
                "title": "¿Hay viudas?",
                "desc": "Evita que quede una sola palabra suelta al final de un párrafo.",
                "icon": "💡"
              },
              {
                "num": "02",
                "title": "¿Kerning?",
                "desc": "Ajusta manualmente la separación entre pares difíciles (AV).",
                "icon": "⚙️"
              },
              {
                "num": "03",
                "title": "¿Alineación?",
                "desc": "Asegura consistencia en la grilla y alineación.",
                "icon": "🎨"
              },
              {
                "num": "04",
                "title": "¿Contraste?",
                "desc": "Comprueba legibilidad de color sobre fondo.",
                "icon": "🔬"
              }
            ],
            "notes": "<h3>Nota</h3><p>Este checklist es obligatorio para la entrega del fanzine de marca.</p>"
          },
          {
            "layout": "title",
            "title": "Dinámica: Serif vs. Sans",
            "subtitle": "Identifiquen tipografías icónicas en marcas famosas de Argentina y Venezuela.",
            "content": "<p class='highlight-text'>Votación en Mentimeter e inicio de actividad en Miro.</p>",
            "notes": "<h3>Cierre</h3><p>Guiar a los alumnos en el análisis tipográfico y corregir conceptos erróneos de clasificación.</p>"
          }
        ]
      },
      "jueves": {
        "title": "Jueves: Afinando el ojo y Macrotipografía",
        "slides": [
          {
            "layout": "title",
            "title": "Afinando el Ojo y Macrotipografía",
            "subtitle": "Semana 2 - Jueves / Grillas y Espacio en Blanco",
            "content": "<p>Kerning, tracking, leading, sistemas de retículas (grids) y alineación del texto.</p>",
            "notes": "<h3>Clase práctica</h3><p>Hoy afinamos el ojo tipográfico a nivel micro y macrotipográfico. Aprenderemos a estructurar la página usando retículas suizas y aireación.</p>"
          },
          {
            "layout": "split",
            "title": "El Kerning: Espacio entre Letras",
            "content": "<p>El ajuste del espacio entre pares específicos de letras.</p><ul><li>Corrige combinaciones ópticas problemáticas (e.g. 'AV', 'LT').</li><li>Un buen kerning es <strong>invisible</strong>. Se nota cuando está mal hecho.</li><li>Se ajusta manualmente en titulares y logotipos.</li></ul>",
            "media": "images/d09-jueves-slide02.jpg",
            "notes": "<h3>Explicación</h3><p>Muestra cómo el espacio en blanco entre la A y la V debe equilibrarse visualmente para que se perciba uniforme.</p>"
          },
          {
            "layout": "split",
            "title": "Tracking y Leading",
            "content": "<p>Dos variables fundamentales del bloque de texto:</p><ul><li><strong>Tracking:</strong> Modificación del espaciado uniforme de todo un bloque de letras. Aumentar mejora lectura en textos pequeños o mayúsculas.</li><li><strong>Leading (Interlineado):</strong> Espacio vertical entre líneas. Un interlineado insuficiente fatiga la lectura.</li></ul>",
            "media": "images/d09-jueves-slide03.jpg",
            "notes": "<h3>Ejemplo técnico</h3><p>Explica que las mayúsculas sostenidas casi siempre se benefician de un ligero aumento de tracking.</p>"
          },
          {
            "layout": "split",
            "title": "Los 5 Pilares de la Macrotipografía",
            "content": "<p>La organización de la página o pieza gráfica completa:</p><ol><li>Jerarquía Visual y niveles de lectura.</li><li>Ancho de columna (Measure).</li><li>Sistemas de Retícula (Grids).</li><li>Alineación del texto.</li><li>Relación texto-imagen y espacio negativo.</li></ol>",
            "media": "images/d09-jueves-slide04.jpg",
            "notes": "<h3>Comentario de la Profesora</h3><p>La macrotipografía estructura el espacio para que el lector entienda la información de forma intuitiva.</p>"
          },
          {
            "layout": "split",
            "title": "Pilar 2: Ancho de Columna",
            "content": "<p>El ancho de la columna condiciona el ritmo de lectura:</p><ul><li><strong>Longitud óptima:</strong> Entre 45 y 75 caracteres por línea.</li><li><strong>Demasiado ancha:</strong> El ojo se fatiga al volver al inicio de la siguiente línea.</li><li><strong>Demasiado estrecha:</strong> Rompe el ritmo continuo y genera saltos forzados.</li></ul>",
            "media": "images/d09-jueves-slide05.jpg",
            "notes": "<h3>Consejo</h3><p>En diseño web, limitamos el ancho de los párrafos usando propiedades como max-width en CSS.</p>"
          },
          {
            "layout": "split",
            "title": "Pilar 3: Sistemas de Retícula (Grids)",
            "content": "<p>Estructura invisible que da coherencia a todo el documento:</p><ul><li><strong>Márgenes:</strong> Zonas de respiro alrededor de la página.</li><li><strong>Columnas:</strong> Guías verticales para organizar bloques.</li><li><strong>Medianil (Gutter):</strong> Espacio hueco entre columnas.</li><li><strong>Grilla base:</strong> Consistencia de altura de línea.</li></ul>",
            "media": "images/d09-jueves-slide06.jpg",
            "notes": "<h3>Exposición</h3><p>Muestra en este diagrama cómo se configuran las columnas con su medianil intermedio.</p>"
          },
          {
            "layout": "grid",
            "title": "Pilar 4: Alineaciones de Texto",
            "content": "<h2>Usos recomendados y precauciones:</h2>",
            "cards": [
              {
                "num": "IZQ",
                "title": "A la izquierda",
                "desc": "El más legible y natural. No altera el espaciado entre palabras.",
                "icon": "💡"
              },
              {
                "num": "JUST",
                "title": "Justificado",
                "desc": "Genera bloques limpios. Riesgo de 'ríos' si no se ajusta con microtipografía.",
                "icon": "⚙️"
              },
              {
                "num": "CENT",
                "title": "Centrado",
                "desc": "Aporta formalidad y simetría. Usar solo en títulos o textos cortos.",
                "icon": "🎨"
              },
              {
                "num": "DER",
                "title": "A la derecha",
                "desc": "Útil para composiciones dinámicas o notas al margen. Pocas líneas.",
                "icon": "🔬"
              }
            ],
            "notes": "<h3>Nota</h3><p>Adviérteles que el justificado automático sin cuidado microtipográfico genera espaciados horribles en la web.</p>"
          },
          {
            "layout": "split",
            "title": "Pilar 5: Texto-Imagen y Espacio",
            "content": "<p>Coexistencia armónica entre tipografía y gráfica:</p><ul><li><strong>Aireación:</strong> El espacio negativo organiza y reduce la carga cognitiva.</li><li><strong>Anclaje visual:</strong> Relación inequívoca entre imagen y texto de acompañamiento mediante la Ley de Proximidad.</li></ul>",
            "media": "images/d09-jueves-slide08.jpg",
            "notes": "<h3>Comentario</h3><p>Explica que un bloque de texto pegado a una imagen sin margen de separación se ve descuidado.</p>"
          },
          {
            "layout": "grid",
            "title": "Errores Comunes de Macrotipografía",
            "content": "<h2>Evita estos fallos en tu fanzine:</h2>",
            "cards": [
              {
                "num": "01",
                "title": "Líneas infinitas",
                "desc": "Texto que ocupa el 100% del ancho del monitor sin columnas.",
                "icon": "💡"
              },
              {
                "num": "02",
                "title": "Márgenes ahogados",
                "desc": "Bloques de texto pegados a las esquinas o bordes del formato.",
                "icon": "⚙️"
              },
              {
                "num": "03",
                "title": "Mezcla caótica",
                "desc": "Justificar el cuerpo, centrar subtítulos y alinear a la izquierda en la misma página.",
                "icon": "🎨"
              },
              {
                "num": "04",
                "title": "Falta de contraste",
                "desc": "Usar variaciones de tamaño de texto casi idénticas.",
                "icon": "🔬"
              }
            ],
            "notes": "<h3>Advertencia técnica</h3><p>Estos 4 errores son los que más restan puntaje en la rúbrica de calidad visual.</p>"
          },
          {
            "layout": "split",
            "title": "El Caso de Estudio: Grid System",
            "content": "<p>El sistema suizo de retículas aplicado hoy.</p><ul><li>Sistemas de diseño como Bootstrap, Tailwind y CSS Grid se basan en las retículas de Ulm y Suiza.</li><li>La consistencia estructural permite escalar el diseño digital a cualquier tamaño de pantalla.</li></ul>",
            "media": "images/d09-jueves-slide10.jpg",
            "notes": "<h3>Conexión</h3><p>Muestra que el diseño web moderno no inventó la cuadrícula; la adaptó de los maestros impresos suizos.</p>"
          },
          {
            "layout": "split",
            "title": "El Interletrado en Marcas Famosas",
            "content": "<p>Ajuste óptico en logotipos icónicos:</p><ul><li>En marcas tipográficas, el kerning se modifica letra por letra.</li><li>Ejemplo: la unión entre la 'C' y la 'o' en Coca-Cola.</li><li>La mala separación arruina la pregnancia y recordación de la marca.</li></ul>",
            "media": "images/d09-jueves-slide11.jpg",
            "notes": "<h3>Explicación</h3><p>Muestra cómo un logotipo tipográfico requiere un ajuste de kerning manual mucho más riguroso que un párrafo de texto corrido.</p>"
          },
          {
            "layout": "grid",
            "title": "Checklist Macrotipográfico",
            "content": "<h2>Preguntas para revisar tu proyecto:</h2>",
            "cards": [
              {
                "num": "01",
                "title": "¿Título claro?",
                "desc": "Identificable en el primer segundo de lectura.",
                "icon": "💡"
              },
              {
                "num": "02",
                "title": "¿Ancho óptimo?",
                "desc": "¿Permite leer entre 8 y 12 palabras por línea?",
                "icon": "⚙️"
              },
              {
                "num": "03",
                "title": "¿Retícula?",
                "desc": "¿Todos los bloques mantienen una alineación consistente?",
                "icon": "🎨"
              },
              {
                "num": "04",
                "title": "¿Respira?",
                "desc": "¿Hay suficiente espacio negativo en los márgenes?",
                "icon": "🔬"
              }
            ],
            "notes": "<h3>Consejo final</h3><p>Imprime tu diseño o previsualízalo al 100% de tamaño para validar la escala tipográfica real.</p>"
          },
          {
            "layout": "title",
            "title": "Práctica en Miro: Corrección de Kerning",
            "subtitle": "Analicen los logotipos presentados en Miro y marquen con círculos rojos las letras con mal kerning.",
            "content": "<p class='highlight-text'>Ajusten los espacios ópticamente en equipo.</p>",
            "notes": "<h3>Cierre</h3><p>Revisa las correcciones hechas por los estudiantes en Miro y explica por qué se ajustaron esos espacios.</p>"
          }
        ]
      },
      "viernes": {
        "title": "Viernes: LAB 2 - Auditoría de Atemporalidad",
        "slides": [
          {
            "layout": "title",
            "title": "LAB 2: Auditoría de Atemporalidad",
            "subtitle": "Semana 2 - Viernes / Rediseño Conceptual",
            "content": "<p>Aplicación de los 10 principios de Dieter Rams para auditar y simplificar un logotipo de baja calidad visual.</p>",
            "notes": "<h3>Lanzamiento del LAB 2</h3><p>Hoy lanzamos el segundo laboratorio. Tomaremos una marca real con fallos de diseño y la rediseñaremos conceptualmente aplicando las leyes de Rams.</p>"
          },
          {
            "layout": "split",
            "title": "Identificar Fallos de Pregnancia",
            "content": "<p>¿Qué hace que un logotipo falle a nivel visual?</p><ul><li>Exceso de adornos o efectos de moda (sombras, biseles, brillos).</li><li>Falta de escalabilidad (se pierde en tamaños pequeños).</li><li>Complejidad innecesaria de trazos.</li><li>Dependencia absoluta del color para ser legible.</li></ul>",
            "media": "images/d10-viernes-slide02.jpg",
            "notes": "<h3>Análisis</h3><p>Explica que un logotipo saturado de detalles no puede reproducirse en soportes físicos complejos (bordados, troqueles).</p>"
          },
          {
            "layout": "split",
            "title": "La Metodología del Rediseño",
            "content": "<p>El proceso no es decorativo, es racional:</p><ol><li>Auditar el logo actual con los 10 principios de Rams.</li><li>Identificar los elementos esenciales de identidad.</li><li>Realizar al menos 3 bocetos iniciales de simplificación a mano.</li><li>Vectorizar en Illustrator basándose en una retícula de construcción.</li></ol>",
            "media": "images/d10-viernes-slide03.jpg",
            "notes": "<h3>Explicación</h3><p>El bocetado a mano nos ayuda a explorar ideas rápidamente antes de pelearnos con las curvas Bézier en Illustrator.</p>"
          },
          {
            "layout": "split",
            "title": "Caso de Estudio: Rediseño de YPF",
            "content": "<p>La evolución de la marca nacional argentina.</p><ul><li>De una marca ilustrativa compleja a un bloque tricolor geométrico.</li><li>Simplificación que optimizó la reproducción en estaciones de servicio y soportes digitales.</li><li>Conservó su fuerza identitaria y atemporalidad.</li></ul>",
            "media": "images/d10-viernes-slide04.jpg",
            "notes": "<h3>Comentario</h3><p>Muestra cómo YPF sintetizó su logotipo a lo largo del tiempo, ganando pregnancia y legibilidad.</p>"
          },
          {
            "layout": "split",
            "title": "Caso de Estudio: Rediseño de Polar",
            "content": "<p>Consistencia de marca en Venezuela.</p><ul><li>Evolución que unificó el isotipo del oso y la tipografía en un sistema responsivo.</li><li>Eliminación de contornos y detalles finos del oso polar para asegurar la legibilidad en tapas de botellas y empaques pequeños.</li></ul>",
            "media": "images/d10-viernes-slide05.jpg",
            "notes": "<h3>Exposición</h3><p>Destaca cómo el oso polar se simplificó geométricamente pero sigue siendo inmediatamente identificable por los venezolanos.</p>"
          },
          {
            "layout": "split",
            "title": "La Retícula de Construcción",
            "content": "<p>Un logotipo profesional no se dibuja a mano alzada en el software:</p><ul><li>Se construye sobre una grilla de relaciones proporcionales matemáticas.</li><li>Define los ángulos de inclinación y el grosor de los trazos.</li><li>Garantiza que cualquier diseñador pueda reproducir el logo de forma idéntica en cualquier soporte.</li></ul>",
            "media": "images/d10-viernes-slide06.jpg",
            "notes": "<h3>Importante</h3><p>En el LAB 2, los alumnos deben presentar las líneas de construcción (grilla geométrica) de su propuesta final.</p>"
          },
          {
            "layout": "split",
            "title": "Asegurar la Versatilidad",
            "content": "<p>Un buen logotipo debe funcionar en cualquier contexto:</p><ul><li><strong>Escalabilidad:</strong> Favicon de web (16x16px) y cartelera de vía pública.</li><li><strong>Monocromo:</strong> Debe funcionar impreso a una sola tinta (blanco y negro puro) sin perder su forma.</li></ul>",
            "media": "images/d10-viernes-slide07.jpg",
            "notes": "<h3>Test de calidad</h3><p>Si el logo requiere sombras o degradados para entenderse, entonces no funciona a nivel estructural.</p>"
          },
          {
            "layout": "split",
            "title": "El Concepto de Logo Responsive",
            "content": "<p>Evolución del logo para entornos digitales:</p><ul><li>Variantes simplificadas adaptadas al espacio disponible.</li><li>Isotipo solo para pantallas móviles.</li><li>Imagotipo completo para encabezados de escritorio.</li></ul>",
            "media": "images/d10-viernes-slide08.jpg",
            "notes": "<h3>Modernidad</h3><p>Muestra cómo marcas globales como Google o Coca-Cola adaptan sus logos según el tamaño de pantalla.</p>"
          },
          {
            "layout": "grid",
            "title": "Rúbrica de Ránking LAB 2",
            "content": "<h2>Criterios de evaluación para la entrega:</h2>",
            "cards": [
              {
                "num": "PROC",
                "title": "Bocetado",
                "desc": "Evidencia de al menos 3 bocetos iniciales a mano antes del vector digital.",
                "icon": "💡"
              },
              {
                "num": "TECN",
                "title": "Calidad Técnica",
                "desc": "Vectores limpios sin nodos duplicados y con retícula visible.",
                "icon": "⚙️"
              },
              {
                "num": "PITC",
                "title": "Justificación",
                "desc": "Explicar técnicamente el cambio basándose en los principios de Rams.",
                "icon": "🎨"
              },
              {
                "num": "FORM",
                "title": "Formato",
                "desc": "1080x1080px (1:1), PNG y entrega el próximo viernes.",
                "icon": "🔬"
              }
            ],
            "notes": "<h3>Aclaración</h3><p>La defensa oral de su rediseño durará 2 minutos en clase. Deben basarse en funcionalidad, no en gustos personales.</p>"
          },
          {
            "layout": "split",
            "title": "Cómo Estructurar la Bitácora de Proceso",
            "content": "<p>La bitácora de entrega para el LAB 2 debe incluir:</p><ol><li>Logotipo original y análisis de sus fallos.</li><li>Fotos de los bocetos de exploración a mano.</li><li>Captura de la retícula de construcción en Illustrator.</li><li>Logotipo final aplicado en versión color y blanco/negro.</li></ol>",
            "media": "images/d10-viernes-slide10.jpg",
            "notes": "<h3>Metodología</h3><p>La bitácora documenta el camino mental del diseñador. Vale tanto como el resultado visual final.</p>"
          },
          {
            "layout": "split",
            "title": "Uso de la Pluma para Logotipos",
            "content": "<p>Consejos técnicos en Illustrator:</p><ul><li>Utiliza la menor cantidad de puntos de ancla posibles para lograr curvas fluidas.</li><li>Usa los manejadores a 90 o 45 grados siempre que sea posible.</li><li>Combina formas básicas con el Buscatrazos en vez de dibujar todo a mano alzada.</li></ul>",
            "media": "images/d10-viernes-slide11.jpg",
            "notes": "<h3>Consejo práctico</h3><p>Muestra cómo trazar un arco perfecto con solo dos puntos de ancla y manejadores simétricos.</p>"
          },
          {
            "layout": "grid",
            "title": "Checklist del Rediseño",
            "content": "<h2>Antes de subir al Drive, comprueba:</h2>",
            "cards": [
              {
                "num": "01",
                "title": "¿Dieter Rams?",
                "desc": "¿Cumple al menos con 7 principios del buen diseño?",
                "icon": "💡"
              },
              {
                "num": "02",
                "title": "¿Bocetos?",
                "desc": "¿Están anexados los 3 dibujos a mano alzada en la bitácora?",
                "icon": "⚙️"
              },
              {
                "num": "03",
                "title": "¿Grilla?",
                "desc": "¿Se visualiza la retícula geométrica de construcción?",
                "icon": "🎨"
              },
              {
                "num": "04",
                "title": "¿Nomenclatura?",
                "desc": "¿El archivo se llama LAB2_Rediseno.png?",
                "icon": "🔬"
              }
            ],
            "notes": "<h3>Nota</h3><p>Recuerda que no se aceptan archivos JPG con compresión visible.</p>"
          },
          {
            "layout": "title",
            "title": "Dinámica: Aplicación en Vivo de Rams",
            "subtitle": "Rediseñen conceptualmente el logotipo asignado en sus mesas de trabajo.",
            "content": "<p class='highlight-text'>Debate y bocetado rápido en Miro.</p>",
            "notes": "<h3>Cierre</h3><p>Revisa las propuestas de bocetado en Miro y ayuda a los estudiantes a simplificar aún más sus trazos.</p>"
          }
        ]
      }
    }
  },
  "semana-3": {
    "title": "Semana 3: Illustrator, Photoshop y Mockups",
    "days": {
      "lunes": {
        "title": "Lunes: Illustrator vs Affinity y Bitácora",
        "slides": [
          {
            "layout": "title",
            "title": "Herramientas Vectoriales y Proyecto Final",
            "subtitle": "Semana 3 - Lunes / Lanzamiento de TP Integrador",
            "content": "<p>Adobe Illustrator vs. Affinity Designer, organización digital y pautas del Proyecto de Identidad de Marca.</p>",
            "notes": "<h3>Inicio de semana 3</h3><p>Hoy entramos al software vectorial y lanzamos el Proyecto Integrador Final. Explicaremos los entregables y la bitácora obligatoria en grupos.</p>"
          },
          {
            "layout": "split",
            "title": "El Ecosistema Vectorial",
            "content": "<p>Dos alternativas potentes para el dibujo y diseño vectorial:</p><ul><li><strong>Adobe Illustrator:</strong> El estándar de la industria. Gran ecosistema y herramientas avanzadas. Requiere suscripción.</li><li><strong>Affinity Designer:</strong> Excelente rendimiento, pago único. Modo híbrido vectorial/píxel en tiempo real.</li></ul>",
            "media": "images/d11-lunes-slide02.jpg",
            "notes": "<h3>Comparativa</h3><p>Muestra cómo ambos programas comparten la misma lógica vectorial (nodos, pluma, capas) por lo que el criterio se traslada fácilmente de uno a otro.</p>"
          },
          {
            "layout": "split",
            "title": "Organización del Espacio de Trabajo",
            "content": "<p>Configuración óptima para diseñar de forma eficiente:</p><ul><li>Gestión de Mesas de Trabajo (Artboards).</li><li>Uso inteligente de reglas, guías y cuadrículas.</li><li>Personalización de paneles (Capas, Buscatrazos, Muestras de color).</li><li>Atajos de teclado clave para acelerar la navegación.</li></ul>",
            "media": "images/d11-lunes-slide03.jpg",
            "notes": "<h3>Consejo</h3><p>Un espacio de trabajo ordenado ahorra hasta un 30% del tiempo de ejecución técnica.</p>"
          },
          {
            "layout": "split",
            "title": "Lanzamiento del TP Final",
            "content": "<p><strong>Proyecto Integrador de Marca (Grupos de 3 integrantes).</strong></p><ul><li>Selección de una marca existente que requiera un rediseño radical o creación de una marca ficticia desde cero ('Marca X').</li><li>Desarrollo de un <strong>Sistema de Identidad Visual</strong> completo y consistente.</li></ul>",
            "media": "images/d11-lunes-slide04.jpg",
            "notes": "<h3>TP Final</h3><p>Detalla que el TP Final abarca el logotipo, paleta cromática, jerarquía tipográfica, fanzine, packaging, afiche y mockups.</p>"
          },
          {
            "layout": "grid",
            "title": "Entregables del TP Final",
            "content": "<h2>Piezas que componen el sistema de identidad:</h2>",
            "cards": [
              {
                "num": "01",
                "title": "Fanzine de Marca",
                "desc": "Diseño editorial de 4 dobles páginas impresas que narre la marca.",
                "icon": "💡"
              },
              {
                "num": "02",
                "title": "Packaging 3D",
                "desc": "Modelado y diseño del empaque del producto físico.",
                "icon": "⚙️"
              },
              {
                "num": "03",
                "title": "Sistema de Pósters",
                "desc": "3 afiches con distintas resoluciones y versiones de logo.",
                "icon": "🎨"
              },
              {
                "num": "04",
                "title": "Mockups con IA",
                "desc": "Simulación de marca aplicada sobre objetos reales.",
                "icon": "🔬"
              }
            ],
            "notes": "<h3>Explicación</h3><p>Enfatiza que todas las piezas deben compartir la misma lógica cromática y tipográfica (directrices del curso).</p>"
          },
          {
            "layout": "split",
            "title": "¿Qué es la Bitácora de Trabajo?",
            "content": "<p>Un registro obligatorio del proceso creativo del equipo:</p><ul><li>No es un manual final, es el <strong>historial de decisiones</strong>.</li><li>Debe incluir bocetos iniciales a mano, descarte de alternativas y justificaciones técnicas.</li><li>Permite evaluar el proceso de aprendizaje más allá del resultado estético.</li></ul>",
            "media": "images/d11-lunes-slide06.jpg",
            "notes": "<h3>Aclaración importante</h3><p>Un proyecto con un resultado visual excelente pero sin bitácora de proceso no puede obtener el máximo puntaje de la rúbrica.</p>"
          },
          {
            "layout": "split",
            "title": "Control de Versiones en Equipo",
            "content": "<p>Consejos para trabajar de forma colaborativa sin caos:</p><ul><li>Uso de nomenclatura consistente para archivos compartidos.</li><li>Uso de Documentos en la Nube (Cloud Documents) para edición en tiempo real.</li><li>Definir roles en el equipo (e.g., editorial, branding, mockups).</li></ul>",
            "media": "images/d11-lunes-slide07.jpg",
            "notes": "<h3>Consejo práctico</h3><p>Explica que guardar archivos como logo_final_definitivo2.ai genera confusión en el equipo. Usen el control de versiones del software.</p>"
          },
          {
            "layout": "split",
            "title": "Estructura de Carpetas de Proyecto",
            "content": "<p>Estructuración profesional para evitar enlaces rotos:</p><ul><li>`01_Editables/`: Archivos vectoriales (.ai, .psd).</li><li>`02_Exportaciones/`: Archivos finales (.png, .pdf).</li><li>`03_Referencias/`: Muestras de color, tipografías y moodboards.</li><li>`04_Bitacora/`: Historial de proceso.</li></ul>",
            "media": "images/d11-lunes-slide08.jpg",
            "notes": "<h3>Organización</h3><p>Muestra esta estructura y explica la regla de oro: nunca muevas archivos de imágenes en el disco sin actualizar el enlace en Illustrator.</p>"
          },
          {
            "layout": "split",
            "title": "La Rúbrica de Identidad y Branding",
            "content": "<p>Criterios clave que evaluará el jurado al cierre:</p><ul><li><strong>Proceso y Bocetado:</strong> Evidencia de sprints e iteración.</li><li><strong>Calidad Técnica:</strong> Coherencia tipográfica y cromática, mockups realistas.</li><li><strong>Pitch y Presentación:</strong> Defensa oral de 2 minutos explicando decisiones en función del brief.</li></ul>",
            "media": "images/d11-lunes-slide09.jpg",
            "notes": "<h3>Jurado</h3><p>Menciona que la defensa final se realiza ante un jurado invitado de la industria. Deben sonar como profesionales, no como estudiantes.</p>"
          },
          {
            "layout": "split",
            "title": "Gestión de Recursos Tipográficos",
            "content": "<p>Antes de diseñar en Illustrator:</p><ul><li>Instala las familias tipográficas oficiales en el sistema (Arvo y Space Grotesk).</li><li>Asegúrate de que todo el equipo use el mismo archivo de fuente para evitar desconfiguraciones.</li></ul>",
            "media": "images/d11-lunes-slide10.jpg",
            "notes": "<h3>Advertencia</h3><p>Usa fuentes con licencia OFL (Google Fonts) para evitar problemas legales en la simulación comercial.</p>"
          },
          {
            "layout": "split",
            "title": "El Empaquetado en Illustrator",
            "content": "<p>Para enviar archivos editables a otros integrantes o a la imprenta:</p><ul><li>Usa la función `Archivo > Empaquetar` (Package).</li><li>Illustrator crea una carpeta con el archivo .ai, todas las fuentes utilizadas y las imágenes enlazadas automáticamente.</li></ul>",
            "media": "images/d11-lunes-slide11.jpg",
            "notes": "<h3>Método técnico</h3><p>Explica que enviar un archivo .ai suelto sin empaquetar casi siempre resulta en imágenes perdidas y fuentes rotas en la computadora del cliente.</p>"
          },
          {
            "layout": "grid",
            "title": "Checklist de Organización",
            "content": "<h2>Antes de iniciar el TP Final, aseguren:</h2>",
            "cards": [
              {
                "text": "Grupo de 3 integrado.",
                "desc": "Definan canales de comunicación.",
                "icon": "💡"
              },
              {
                "text": "Carpeta en Drive.",
                "desc": "Estructura estándar compartida.",
                "icon": "⚙️"
              },
              {
                "text": "Marca seleccionada.",
                "desc": "Justifiquen por qué requiere rediseño.",
                "icon": "🎨"
              },
              {
                "text": "Bitácora inicial.",
                "desc": "Registren el moodboard grupal de hoy.",
                "icon": "🔬"
              }
            ],
            "notes": "<h3>Consejo</h3><p>Establezcan reuniones cortas de 10 minutos (sprints) para coordinar avances durante la semana.</p>"
          },
          {
            "layout": "title",
            "title": "Dinámica en Miro: Mapa de Herramientas",
            "subtitle": "En equipos de 3, armen un mapa mental de herramientas gemelas entre Illustrator y Affinity.",
            "content": "<p class='highlight-text'>Definan la marca de su TP Final.</p>",
            "notes": "<h3>Cierre</h3><p>Revisa la elección de marcas de los equipos y valida que cumplan con la complejidad requerida para el rediseño.</p>"
          }
        ]
      },
      "martes": {
        "title": "Martes: Vectores, Pluma y Buscatrazos",
        "slides": [
          {
            "layout": "title",
            "title": "Vectores, Pluma y Buscatrazos",
            "subtitle": "Semana 3 - Martes / Técnica Vectorial",
            "content": "<p>Diferencia entre vector y píxel, dibujo técnico con la pluma y operaciones geométricas.</p><p class='highlight-text'>\"Vectores con pocos nodos es el modo\"</p>",
            "notes": "<h3>Clase práctica de vectores</h3><p>Hoy entramos de lleno a la técnica de vectorización en Illustrator. Veremos cómo dominar la Pluma y el panel Buscatrazos.</p>"
          },
          {
            "layout": "split",
            "title": "¿Qué es un Vector?",
            "content": "<p>Representación matemática de formas basada en puntos, líneas y curvas:</p><ul><li><strong>Escalabilidad infinita:</strong> No pierde resolución al agrandarse (a diferencia del píxel / mapa de bits).</li><li>Peso de archivo reducido.</li><li>Ideal para logotipos, tipografía e ilustraciones geométricas.</li></ul>",
            "media": "images/d12-martes-slide02.jpg",
            "notes": "<h3>Explicación</h3><p>Muestra cómo el vector dibuja curvas perfectas mediante ecuaciones, mientras que el píxel divide la pantalla en rejillas fijas.</p>"
          },
          {
            "layout": "split",
            "title": "La Herramienta Pluma (Pen Tool)",
            "content": "<p>El motor del dibujo vectorial profesional:</p><ul><li>Dibuja trazados precisos uniendo puntos de ancla.</li><li><strong>Puntos de ancla (Anchor Points):</strong> Definen dónde cambia de dirección la línea.</li><li><strong>Manejadores (Direction Handles):</strong> Definen la curvatura y dirección.</li></ul>",
            "media": "images/d12-martes-slide03.jpg",
            "notes": "<h3>Demostración</h3><p>Explica que arrastrar con la pluma crea manejadores de curvas Bézier. Un solo clic crea esquinas rectas.</p>"
          },
          {
            "layout": "split",
            "title": "Pocos Nodos es el Modo",
            "content": "<p>La regla de oro de la vectorización limpia:</p><ul><li>Usa la menor cantidad de puntos de ancla posibles.</li><li>A mayor cantidad de nodos, la curva se vuelve irregular y temblorosa.</li><li>Coloca los nodos en las puntas extremas de la curva (puntos tangenciales).</li></ul>",
            "media": "images/d12-martes-slide04.jpg",
            "notes": "<h3>Consejo técnico</h3><p>Un vector con exceso de nodos es el sello de un diseñador amateur. Enseña a simplificar trazados.</p>"
          },
          {
            "layout": "split",
            "title": "El panel Buscatrazos (Pathfinder)",
            "content": "<p>Permite combinar formas geométricas simples para crear figuras complejas:</p><ul><li><strong>Unificar (Unite):</strong> Fusiona formas en una sola.</li><li><strong>Menos Frente (Minus Front):</strong> Resta la forma superior de la inferior.</li><li><strong>Intersección (Intersect):</strong> Conserva solo la zona común.</li><li><strong>Dividir (Divide):</strong> Corta la pieza en fragmentos independientes.</li></ul>",
            "media": "images/d12-martes-slide05.jpg",
            "notes": "<h3>Práctica</h3><p>Muestra cómo crear la silueta de una llave o un engranaje usando solo rectángulos, círculos y el buscatrazos.</p>"
          },
          {
            "layout": "split",
            "title": "El Creador de Formas (Shape Builder)",
            "content": "<p>Una alternativa intuitiva al Buscatrazos:</p><ul><li>Selecciona las formas superpuestas.</li><li>Arrastra para unir secciones o mantén presionada la tecla Alt y haz clic para borrarlas.</li><li>Permite dibujar intuitivamente sobre intersecciones complejas.</li></ul>",
            "media": "images/d12-martes-slide06.jpg",
            "notes": "<h3>Atajo</h3><p>Muestra el atajo Shift + M en Illustrator. Es una de las herramientas más queridas por los ilustradores vectoriales.</p>"
          },
          {
            "layout": "split",
            "title": "Tipos de Archivos Vectoriales",
            "content": "<p>Formatos estándar de exportación:</p><ul><li><strong>.AI (Adobe Illustrator):</strong> Formato nativo de trabajo. Conserva capas y efectos editables.</li><li><strong>.SVG (Scalable Vector Graphics):</strong> Estándar para web e interactividad. Totalmente responsive.</li><li><strong>.EPS:</strong> Clásico para imprenta a gran escala.</li><li><strong>.PDF Vectorial:</strong> Formato universal para impresión y revisión del cliente.</li></ul>",
            "media": "images/d12-martes-slide07.jpg",
            "notes": "<h3>Recomendación</h3><p>Usa SVG para iconos de interfaces web y PDF para enviar folletos a la imprenta.</p>"
          },
          {
            "layout": "split",
            "title": "Estilos de Párrafo y Carácter",
            "content": "<p>Gestión tipográfica escalable en Illustrator:</p><ul><li><strong>Estilos de párrafo:</strong> Configuran el bloque completo (fuente, leading, alineación, sangría).</li><li><strong>Estilos de carácter:</strong> Modificaciones puntuales sobre palabras sueltas (ej. poner una palabra en negrita o coral).</li></ul>",
            "media": "images/d12-martes-slide08.jpg",
            "notes": "<h3>Editorial</h3><p>Explica que usar estilos de párrafo permite cambiar la tipografía de un documento de 50 páginas en un solo clic.</p>"
          },
          {
            "layout": "split",
            "title": "Reglas, Guías e Imantación",
            "content": "<p>Asegurando la precisión matemática en la diagramación:</p><ul><li>Usa guías inteligentes (`Ctrl + U`) para alinear al milímetro.</li><li>Bloquea guías para evitar moverlas por accidente.</li><li>Usa la imantación de píxel o de punto de ancla según el soporte (pantalla o imprenta).</li></ul>",
            "media": "images/d12-martes-slide09.jpg",
            "notes": "<h3>Aclaración</h3><p>La precisión técnica en las alineaciones es lo que separa a un diseño profesional de uno descuidado.</p>"
          },
          {
            "layout": "split",
            "title": "Gradientes y Motivos (Patterns)",
            "content": "<p>Añadiendo volumen y texturas vectoriales:</p><ul><li><strong>Degradados (Gradientes):</strong> Transición suave entre dos o más colores (lineales, radiales o de malla).</li><li><strong>Motivos (Patterns):</strong> Repetición modular de una forma para crear texturas o fondos ilustrativos consistentes.</li></ul>",
            "media": "images/d12-martes-slide10.jpg",
            "notes": "<h3>Branding</h3><p>Señala que los patrones (patterns) son un entregable clave en la semana 6 del TP Final para construir universos visuales.</p>"
          },
          {
            "layout": "split",
            "title": "El Calco de Imagen (Image Trace)",
            "content": "<p>Convertir mapas de bits en vectores automáticamente:</p><ul><li>Útil para digitalizar bocetos a tinta o lápiz de forma rápida.</li><li>Requiere ajuste de umbral, ruido y curvas en el panel avanzado.</li><li>Casi siempre exige un refinamiento manual posterior para borrar nodos basura.</li></ul>",
            "media": "images/d12-martes-slide11.jpg",
            "notes": "<h3>Advertencia</h3><p>Nunca uses el calco de imagen directo sobre logotipos pixelados de marcas reales; el resultado carece de la precisión geométrica que exige un logo profesional.</p>"
          },
          {
            "layout": "grid",
            "title": "Checklist Vectorial",
            "content": "<h2>Antes de finalizar tu ilustración vectorial, revisa:</h2>",
            "cards": [
              {
                "num": "01",
                "title": "¿Nodos limpios?",
                "desc": "Elimina puntos de ancla duplicados o innecesarios.",
                "icon": "💡"
              },
              {
                "num": "02",
                "title": "¿Modo color?",
                "desc": "Asegura CMYK si vas a imprimir o RGB para web.",
                "icon": "⚙️"
              },
              {
                "num": "03",
                "title": "¿Trazos expandidos?",
                "desc": "Expande trazos y fuentes a contornos para evitar desconfiguraciones en otras PCs.",
                "icon": "🎨"
              },
              {
                "num": "04",
                "title": "¿Guías ocultas?",
                "desc": "Limpia la mesa de trabajo de guías sobrantes.",
                "icon": "🔬"
              }
            ],
            "notes": "<h3>Consejo</h3><p>La combinación de teclas Ctrl + Y (modo contorno) muestra la estructura vectorial pura y ayuda a encontrar nodos perdidos.</p>"
          },
          {
            "layout": "title",
            "title": "Carrera de Vectorización",
            "subtitle": "Ingresen al archivo de Figma o Illustrator y vectoricen la silueta compleja usando la menor cantidad de nodos posible.",
            "content": "<p class='highlight-text'>El estudiante con la curva más limpia y menos nodos gana la dinámica.</p>",
            "notes": "<h3>Cierre</h3><p>Evalúa las siluetas vectorizadas en vivo, contando los nodos y mostrando buenas prácticas de trazado Bézier.</p>"
          }
        ]
      },
      "miercoles": {
        "title": "Miércoles: Interfaz de Photoshop: Capas y Píxeles",
        "subtitle": "Semana 3 - Miércoles / Photoshop Básico",
        "slides": [
          {
            "layout": "title",
            "title": "Interfaz de Photoshop: Capas y Píxeles",
            "subtitle": "Semana 3 - Miércoles / Photoshop",
            "content": "<p>Edición de mapas de bits, herramientas de selección eficaz y máscara de capa.</p><p class='highlight-text'>Entendiendo la lógica de los píxeles.</p>",
            "notes": "<h3>Guía</h3><p>Explica que hoy pasamos de los vectores (Illustrator) a los mapas de bits (Photoshop), analizando cómo gestionar resoluciones y capas.</p>"
          },
          {
            "layout": "split",
            "title": "¿Qué es un Mapa de Bits?",
            "content": "<p>Imagen digital estructurada en una rejilla de píxeles (mapa de bits).</p><ul><li>Cada píxel contiene información de color y luminosidad.</li><li><strong>Resoluciones:</strong> 72 dpi (pantallas), 300 dpi (alta calidad para imprenta).</li><li>Agrandar la imagen estira los píxeles, provocando pixelado.</li></ul>",
            "media": "images/d13-miercoles-slide02.jpg",
            "notes": "<h3>Técnico</h3><p>Muestra cómo el zoom en Photoshop revela los bloques individuales de color (píxeles).</p>"
          },
          {
            "layout": "split",
            "title": "El Concepto de Capas (Layers)",
            "content": "<p>Estructuración de elementos superpuestos de forma independiente:</p><ul><li>Evita mezclar destructivamente los píxeles de diferentes objetos.</li><li>La jerarquía de capas define el orden de visualización.</li><li>Se pueden agrupar, renombrar y bloquear para organizar el espacio.</li></ul>",
            "media": "images/d13-miercoles-slide03.jpg",
            "notes": "<h3>Consejo</h3><p>Insiste en nombrar cada capa en el panel. Encontrar capas llamadas 'Capa 23' o 'Capa 2 copia' ralentiza el flujo de trabajo.</p>"
          },
          {
            "layout": "split",
            "title": "Herramientas de Selección",
            "content": "<p>Aislar zonas o elementos con precisión en el lienzo:</p><ul><li><strong>Selección rápida y Varita mágica:</strong> Útiles para fondos contrastados y uniformes.</li><li><strong>Herramienta Pluma:</strong> Para trazados de recorte vectoriales súper limpios.</li><li><strong>Selección de Sujeto (IA):</strong> Recorte rápido mediante inteligencia artificial.</li></ul>",
            "media": "images/d13-miercoles-slide04.jpg",
            "notes": "<h3>Demostración</h3><p>Muestra cómo perfeccionar una selección compleja usando el espacio de selección y máscara en Photoshop.</p>"
          },
          {
            "layout": "split",
            "title": "Máscaras de Capa (Layer Masks)",
            "content": "<p>Edición no destructiva de visibilidad de píxeles:</p><ul><li><strong>El negro oculta:</strong> Pintar con negro borra temporalmente.</li><li><strong>El blanco muestra:</strong> Pintar con blanco recupera el contenido original.</li><li>Preserva la integridad del archivo original sin usar la goma de borrar.</li></ul>",
            "media": "images/d13-miercoles-slide05.jpg",
            "notes": "<h3>Importante</h3><p>Explica que usar la goma de borrar es destructivo y es considerado una mala práctica profesional.</p>"
          },
          {
            "layout": "split",
            "title": "Objetos Inteligentes (Smart Objects)",
            "content": "<p>Preservar la resolución original del elemento gráfico:</p><ul><li>Incrusta el archivo original (vector o imagen) dentro de la capa.</li><li>Permite escalar hacia abajo y volver a agrandar sin pixelar.</li><li>Al editar un objeto inteligente, se actualizan todas las copias enlazadas.</li></ul>",
            "media": "images/d13-miercoles-slide06.jpg",
            "notes": "<h3>Clase técnica</h3><p>Muestra cómo convertir una capa en Objeto Inteligente haciendo doble clic para editarla.</p>"
          },
          {
            "layout": "split",
            "title": "Modos de Fusión de Capas",
            "content": "<p>Mezcla matemática de píxeles de capas superpuestas:</p><ul><li><strong>Multiplicar (Multiply):</strong> Ideal para sombras y oscurecer texturas.</li><li><strong>Trama (Screen):</strong> Oculta negros, ideal para destellos y luces.</li><li><strong>Superponer (Overlay):</strong> Incrementa contraste y mezcla texturas físicas.</li></ul>",
            "media": "images/d13-miercoles-slide07.jpg",
            "notes": "<h3>Branding</h3><p>El uso de modos de fusión es clave para integrar logotipos sobre texturas rugosas (papel, cartón).</p>"
          },
          {
            "layout": "split",
            "title": "Máscaras de Ajuste de Color",
            "content": "<p>Corrección tonal y cromática no destructiva:</p><ul><li><strong>Curvas y Niveles:</strong> Control de contraste, luces y sombras.</li><li><strong>Tono/Saturación:</strong> Cambiar o desaturar colores específicos.</li><li>Se pueden limitar a afectar una sola capa inferior usando una máscara de recorte (Clipping Mask).</li></ul>",
            "media": "images/d13-miercoles-slide08.jpg",
            "notes": "<h3>Explicación</h3><p>Muestra cómo corregir la temperatura de color de una imagen usando una máscara de curvas.</p>"
          },
          {
            "layout": "split",
            "title": "Filtros Inteligentes en la Práctica",
            "content": "<p>Efectos de distorsión aplicados sobre Objetos Inteligentes:</p><ul><li><strong>Desenfoque Gausiano:</strong> Simular profundidad de campo en fondos.</li><li><strong>Cámara RAW:</strong> Revelado fotográfico digital avanzado.</li><li>Se pueden ocultar o modificar en cualquier momento del diseño.</li></ul>",
            "media": "images/d13-miercoles-slide09.jpg",
            "notes": "<h3>Consejo</h3><p>Evita aplicar filtros directos sobre capas pixeladas ya que se pierde el control de edición.</p>"
          },
          {
            "layout": "split",
            "title": "Gestión de Color en Photoshop",
            "content": "<p>Asegurar la visualización correcta según el canal:</p><ul><li>Usa **sRGB** para diseño en pantalla (sitios web, redes).</li><li>Usa **CMYK** (como Coated FOGRA39) para imprenta física.</li><li>Coordinar perfiles evita saltos cromáticos inesperados al exportar.</li></ul>",
            "media": "images/d13-miercoles-slide10.jpg",
            "notes": "<h3>Advertencia</h3><p>Explica que las pantallas de celulares y notebooks muestran colores diferentes por no estar calibradas.</p>"
          },
          {
            "layout": "split",
            "title": "Formatos de Exportación Comunes",
            "content": "<p>Cómo entregar el trabajo al cliente e imprenta:</p><ul><li><strong>.PSD:</strong> Formato editable nativo con capas completas.</li><li><strong>.TIFF:</strong> Formato sin compresión ideal para impresión editorial.</li><li><strong>.PNG:</strong> Mantiene transparencias para web y presentaciones.</li></ul>",
            "media": "images/d13-miercoles-slide11.jpg",
            "notes": "<h3>Recomendación</h3><p>Nunca envíes un archivo .psd de 1GB al cliente; expórtalo como PNG o PDF optimizado.</p>"
          },
          {
            "layout": "grid",
            "title": "Checklist de Calidad en PSD",
            "content": "<h2>Verificación antes de exportar:</h2>",
            "cards": [
              {
                "num": "01",
                "title": "Capas Nombradas",
                "desc": "No dejes capas con nombres por defecto.",
                "icon": "💡"
              },
              {
                "num": "02",
                "title": "Zoom 100%",
                "desc": "Verifica que los bordes de los recortes estén limpios.",
                "icon": "⚙️"
              },
              {
                "num": "03",
                "title": "Modo de Color",
                "desc": "RGB para web, CMYK para impresión física.",
                "icon": "🎨"
              },
              {
                "num": "04",
                "title": "Filtros en Objeto",
                "desc": "Asegúrate de que los filtros sean inteligentes.",
                "icon": "🔬"
              }
            ],
            "notes": "<h3>Revisión</h3><p>Insiste en el checklist como paso obligatorio antes de subir archivos al Google Drive.</p>"
          },
          {
            "layout": "title",
            "title": "Dinámica en Miro: Collage Digital",
            "subtitle": "Combinen 3 imágenes con un concepto surrealista y muestren el collage al grupo en Miro.",
            "content": "<p class='highlight-text'>Debate conceptual y feedback en vivo.</p>",
            "notes": "<h3>Cierre</h3><p>Camina por el salón y ayuda a los estudiantes a definir un concepto sólido para sus collages.</p>"
          }
        ]
      },
      "jueves": {
        "title": "Jueves: Mockups con IA y Edición No Destructiva",
        "subtitle": "Semana 3 - Jueves / Simulación y Generación",
        "slides": [
          {
            "layout": "title",
            "title": "Mockups con IA y Edición No Destructiva",
            "subtitle": "Semana 3 - Jueves / Photoshop Avanzado",
            "content": "<p>Cómo simular productos físicos de alta fidelidad combinando Photoshop e Inteligencia Artificial.</p>",
            "notes": "<h3>Guía</h3><p>Hoy veremos cómo construir un mockup profesional desde cero, integrando inteligencia artificial para generar escenarios realistas.</p>"
          },
          {
            "layout": "split",
            "title": "¿Qué es un Mockup?",
            "content": "<p>Representación visual fotorrealista de un diseño aplicado sobre un soporte real.</p><ul><li>Permite al cliente visualizar el resultado final antes de producirlo.</li><li>Aporta valor estético a las presentaciones de identidad.</li><li>Evita malentendidos técnicos en impresión o empaquetado.</li></ul>",
            "media": "images/d14-jueves-slide02.jpg",
            "notes": "<h3>Explicación</h3><p>Explica que vender un logo en hoja en blanco es más difícil que mostrarlo aplicado sobre una tarjeta de presentación o camiseta (mockup).</p>"
          },
          {
            "layout": "split",
            "title": "Deformación de Malla y Perspectiva",
            "content": "<p>Ajuste de vectores sobre superficies curvas o anguladas:</p><ul><li>Uso de **Objetos Inteligentes** con distorsión de malla.</li><li>La herramienta Perspectiva alinea los bordes al punto de fuga del fondo.</li><li>Garantiza que el logo siga el flujo natural de la superficie (e.g. una taza).</li></ul>",
            "media": "images/d14-jueves-slide03.jpg",
            "notes": "<h3>Demostración</h3><p>Muestra cómo aplicar la distorsión de perspectiva en Photoshop sobre una caja física en perspectiva.</p>"
          },
          {
            "layout": "split",
            "title": "La Revolución de la IA en Mockups",
            "content": "<p>Uso de herramientas generativas (Adobe Firefly, Midjourney):</p><ul><li>Permiten generar escenarios de marca únicos y fotorrealistas.</li><li>Evita el uso de mockups de stock gratuitos y repetitivos en la web.</li><li><strong>Criterio:</strong> La IA crea el escenario de fondo; el logo se integra en Photoshop manualmente.</li></ul>",
            "media": "images/d14-jueves-slide04.jpg",
            "notes": "<h3>Aclaración</h3><p>Enfatiza que la IA no diseña el logo, solo asiste en la creación del fondo del mockup.</p>"
          },
          {
            "layout": "split",
            "title": "Integrar Luces y Sombras Realistas",
            "content": "<p>Para lograr un fotorrealismo convincente en Photoshop:</p><ul><li>Analiza la dirección de la luz en la foto de fondo.</li><li>Usa modos de fusión de capas (Multiplicar) para simular sombras proyectadas.</li><li>Ajusta la opacidad y añade un ligero desenfoque de lente para naturalidad.</li></ul>",
            "media": "images/d14-jueves-slide05.jpg",
            "notes": "<h3>Consejo técnico</h3><p>El error más común es pegar un logo con color plano y alta saturación sobre un fondo rugoso e iluminado, lo que rompe el realismo.</p>"
          },
          {
            "layout": "split",
            "title": "Texturizado sobre Superficies Rugosas",
            "content": "<p>Cómo mapear un logotipo sobre texturas difíciles (papel corrugado, tela):</p><ul><li>Usa un canal de mapa de desplazamiento (Displacement Map) en Photoshop.</li><li>El mapa de desplazamiento deforma el logo siguiendo las sombras y relieves reales del fondo.</li></ul>",
            "media": "images/d14-jueves-slide06.jpg",
            "notes": "<h3>Exposición</h3><p>Esta es una técnica avanzada. Muestra el paso a paso de exportar un archivo en escala de grises para usarlo como mapa de desplazamiento.</p>"
          },
          {
            "layout": "split",
            "title": "Selección Avanzada de Canales",
            "content": "<p>Recortes complejos (cabello, transparencias, vidrio):</p><ul><li>Usa el panel de Canales (Rojo, Verde, Azul) para aislar elementos con alto contraste.</li><li>Duplica el canal con mayor contraste y perfecciona la máscara con niveles.</li><li>Permite recortar vidrios o reflejos sobre mockups de botellas.</li></ul>",
            "media": "images/d14-jueves-slide07.jpg",
            "notes": "<h3>Demostración</h3><p>Muestra cómo aislar una botella de vidrio transparente usando canales de color.</p>"
          },
          {
            "layout": "split",
            "title": "Creación de Plantillas Reutilizables",
            "content": "<p>Optimizar el flujo de trabajo del equipo del TP Final:</p><ul><li>Crea un archivo PSD maestro donde el logo esté en un Objeto Inteligente.</li><li>Al actualizar el Objeto Inteligente, el logo se deforma y aplica filtros automáticamente en todas las maquetas del sistema.</li></ul>",
            "media": "images/d14-jueves-slide08.jpg",
            "notes": "<h3>Consejo</h3><p>Compartir plantillas de mockups consistentes ahorra tiempo valioso antes de la entrega final.</p>"
          },
          {
            "layout": "split",
            "title": "Evaluación Crítica del Realismo",
            "content": "<p>Factores que delatan un mockup mal hecho:</p><ul><li>Falta de sombras proyectadas del objeto sobre la mesa.</li><li>Bordes de corte demasiado duros o nítidos (sin desenfoque de lente).</li><li>Color del logo demasiado vibrante que no coincide con la luz del entorno.</li></ul>",
            "media": "images/d14-jueves-slide09.jpg",
            "notes": "<h3>Punto de análisis</h3><p>Pide a los alumnos evaluar de forma crítica la integración de un logo sobre una taza de café en pantalla.</p>"
          },
          {
            "layout": "split",
            "title": "La Bitácora de Mockups con IA",
            "content": "<p>Registrar el uso de herramientas generativas en el proceso:</p><ul><li>Detalla los prompts utilizados para generar los fondos.</li><li>Explica los pasos técnicos aplicados en Photoshop para la integración.</li><li>Demuestra la honestidad profesional y transparencia en el flujo creativo.</li></ul>",
            "media": "images/d14-jueves-slide10.jpg",
            "notes": "<h3>Aclaración</h3><p>El jurado del TP valorará positivamente el uso racional y documentado de la IA en la bitácora de marca.</p>"
          },
          {
            "layout": "split",
            "title": "Funciones Inteligentes que Iteran",
            "content": "<p>Herramientas dinámicas en el diseño moderno:</p><ul><li>Usa filtros de desenfoque de lente con máscaras dinámicas.</li><li>Configura estilos de capa (Layer Styles) aplicados a Objetos Inteligentes.</li><li>Facilita cambios rápidos solicitados por el cliente.</li></ul>",
            "media": "images/d14-jueves-slide11.jpg",
            "notes": "<h3>Comentario</h3><p>Aprender a automatizar estos pasos reduce las horas de retrabajo en un estudio real.</p>"
          },
          {
            "layout": "grid",
            "title": "Checklist de Mockups",
            "content": "<h2>Antes de renderizar tu pieza, comprueba:</h2>",
            "cards": [
              {
                "num": "01",
                "title": "¿Perspectiva?",
                "desc": "El logo se deforma siguiendo la curvatura y dirección de la superficie.",
                "icon": "💡"
              },
              {
                "num": "02",
                "title": "¿Sombras?",
                "desc": "Se simularon las sombras del logo y del objeto físico.",
                "icon": "⚙️"
              },
              {
                "num": "03",
                "title": "¿Textura?",
                "desc": "¿Se percibe la textura del soporte a través del logo?",
                "icon": "🎨"
              },
              {
                "num": "04",
                "title": "¿Resolución?",
                "desc": "El fondo tiene al menos 1920x1080px (16:9) de nitidez.",
                "icon": "🔬"
              }
            ],
            "notes": "<h3>Revisión final</h3><p>El checklist es vital para asegurar que la pieza luzca profesional ante el jurado.</p>"
          },
          {
            "layout": "title",
            "title": "Práctica: Limpiar Mockup en Grupo",
            "subtitle": "Descarguen la imagen asignada de Miro y prepárenla en Photoshop con Objetos Inteligentes para recibir su marca.",
            "content": "<p class='highlight-text'>Monitoreo y correcciones en vivo por equipos.</p>",
            "notes": "<h3>Cierre</h3><p>Revisa la estructura de capas de los PSDs de los alumnos y corrige deformaciones incorrectas de perspectiva.</p>"
          }
        ]
      },
      "viernes": {
        "title": "Viernes: Creación de Logos y LAB 3",
        "subtitle": "Semana 3 - Viernes / Diseño de Marcas Gráficas",
        "slides": [
          {
            "layout": "title",
            "title": "Creación de Logos y LAB 3",
            "subtitle": "Semana 3 - Viernes / Diseño de Marca",
            "content": "<p>Tipos de logos, retículas de construcción, proporción áurea y lanzamiento de LAB 3.</p>",
            "notes": "<h3>Clase clave</h3><p>Hoy abordamos la morfología y construcción técnica de logotipos eficaces. Lanzamos el LAB 3 (Integración de logo y mockup con IA).</p>"
          },
          {
            "layout": "split",
            "title": "¿Qué es un Logotipo?",
            "content": "<p>El identificador gráfico principal de un sistema de marca corporativo.</p><ul><li>No es el sistema completo, es la **punta visible** del iceberg.</li><li>Su función principal es identificar, no decorar.</li><li>Debe ser simple y fácil de memorizar.</li></ul>",
            "media": "images/d15-viernes-slide02.jpg",
            "notes": "<h3>Introducción</h3><p>Menciona que Paul Rand definió el logo no como arte sino como una solución de identificación visual.</p>"
          },
          {
            "layout": "split",
            "title": "Tipos de Logos Gráficos",
            "content": "<p>Las 4 categorías básicas de marca:</p><ul><li><strong>Isotipo:</strong> Símbolo o ícono puro sin texto (e.g. la manzana de Apple).</li><li><strong>Logotipo:</strong> El nombre escrito con tipografía de marca específica.</li><li><strong>Imagotipo:</strong> Símbolo y texto combinados y separables.</li><li><strong>Isologo:</strong> Símbolo y texto integrados de forma indivisible.</li></ul>",
            "media": "images/d15-viernes-slide03.jpg",
            "notes": "<h3>Ejemplos</h3><p>Dibuja en la pizarra ejemplos de cada tipo y pregunta cuál consideran más versátil.</p>"
          },
          {
            "layout": "split",
            "title": "Geometrización y Proporción",
            "content": "<p>La proporción áurea y formas geométricas puras en marcas:</p><ul><li>Aportan armonía visual y estabilidad.</li><li>Facilitan la lectura económica en el cerebro (Leyes de Gestalt).</li><li>Ejemplo clásico: el rediseño del logo de Twitter construido con círculos perfectos.</li></ul>",
            "media": "images/d15-viernes-slide04.jpg",
            "notes": "<h3>Técnico</h3><p>Muestra cómo marcas famosas se construyen con retículas circulares y angulares estrictas.</p>"
          },
          {
            "layout": "split",
            "title": "Retícula de Construcción",
            "content": "<p>Esqueleto matemático que define las proporciones internas del logo:</p><ul><li>Garantiza la reproducción exacta del logo por terceros.</li><li>Especifica el grosor de los trazos y el área de resguardo (margen de protección).</li><li>Preserva la integridad en cualquier soporte.</li></ul>",
            "media": "images/d15-viernes-slide05.jpg",
            "notes": "<h3>Manual de marca</h3><p>Explica que la retícula de construcción es una sección obligatoria del manual de marca del TP Final.</p>"
          },
          {
            "layout": "split",
            "title": "Sistemas Modulares y Dinámicos",
            "content": "<p>Marcas modernas que no se basan en un logo estático único:</p><ul><li>Lógica constructiva (grilla, familia de formas, patrón) que genera variaciones controladas sin perder coherencia.</li><li>Permite adaptar la identidad a diferentes sub-marcas o soportes.</li></ul>",
            "media": "images/d15-viernes-slide06.jpg",
            "notes": "<h3>Ejemplo</h3><p>El logotipo de los Juegos Olímpicos de Múnich 72 (Otl Aicher) utilizaba un sistema modular escalable.</p>"
          },
          {
            "layout": "split",
            "title": "Escalabilidad y Legibilidad",
            "content": "<p>El logo debe funcionar en tamaños extremos:</p><ul><li>**Favicon web:** 16x16px (exige simplificación extrema).</li><li>**Vía pública:** Grandes dimensiones.</li><li>Evita detalles finos y degradados que se pierdan en tamaños pequeños.</li></ul>",
            "media": "images/d15-viernes-slide07.jpg",
            "notes": "<h3>Test de calidad</h3><p>Recomienda reducir el logo en pantalla a 1.5 cm para ver si sigue leyéndose.</p>"
          },
          {
            "layout": "split",
            "title": "Logos Responsive",
            "content": "<p>Evolución de la adaptabilidad en pantallas digitales:</p><ul><li>Conjunto de variantes que se adaptan automáticamente al espacio.</li><li>Simplificación progresiva de trazos y elementos según el ancho de pantalla.</li></ul>",
            "media": "images/d15-viernes-slide08.jpg",
            "notes": "<h3>Ejemplo</h3><p>Muestra cómo marcas como Disney usan solo la 'D' en móviles y el logo completo en cines.</p>"
          },
          {
            "layout": "split",
            "title": "¿Qué hace Funcionar a un Logo?",
            "content": "<p>Características de un logotipo exitoso:</p><ul><li><strong>Simple:</strong> Reducido a lo esencial.</li><li><strong>Memorable:</strong> Fácil de recordar y reproducir mentalmente.</li><li><strong>Atemporal:</strong> No depende de modas de corta duración.</li><li><strong>Versátil:</strong> Funciona en blanco y negro y a escala.</li></ul>",
            "media": "images/d15-viernes-slide09.jpg",
            "notes": "<h3>Criterio</h3><p>Si el logo requiere sombras, brillos o degradados para funcionar, entonces el diseño estructural ha fallado.</p>"
          },
          {
            "layout": "split",
            "title": "Lanzamiento de LAB 3",
            "content": "<p><strong>Taller Técnico de Vectorización e Integración de Mockup con IA.</strong></p><ul><li>Toma el logotipo desarrollado en el LAB 2 y refínalo en Illustrator.</li><li>Intégralo sobre un objeto real en Photoshop usando Objetos Inteligentes y sombras realistas.</li><li>Genera el fondo con IA si es necesario.</li></ul>",
            "media": "images/d15-viernes-slide10.jpg",
            "notes": "<h3>LAB 3</h3><p>El LAB 3 es la culminación técnica del módulo. El entregable es un mockup de alta fidelidad que demuestre la adaptabilidad de la marca.</p>"
          },
          {
            "layout": "grid",
            "title": "LAB 3: Formato de Entrega",
            "content": "<h2>Requerimientos técnicos obligatorios:</h2>",
            "cards": [
              {
                "num": "DIM",
                "title": "Dimensiones",
                "desc": "1920 x 1080 px (16:9) horizontal.",
                "icon": "💡"
              },
              {
                "num": "MED",
                "title": "Medio de entrega",
                "desc": "Carpeta en Google Drive con archivo PSD editable con capas y exportación PNG.",
                "icon": "⚙️"
              },
              {
                "num": "MIR",
                "title": "Miro",
                "desc": "Se sube al Tablero de Miro con la justificación breve.",
                "icon": "🎨"
              },
              {
                "num": "FECH",
                "title": "Fecha de Entrega",
                "desc": "Se entrega el próximo lunes antes de clase.",
                "icon": "🔬"
              }
            ],
            "notes": "<h3>Nota</h3><p>La consistencia de la nomenclatura y el orden del PSD editable forman parte de la evaluación.</p>"
          },
          {
            "layout": "split",
            "title": "Errores Comunes en el Logo",
            "content": "<p>Evita estos fallos fatales en el LAB 3:</p><ul><li>Usar vectores de stock gratuitos directos (plagio y falta de originalidad).</li><li>Líneas muy delgadas que desaparecen en tamaños pequeños.</li><li>Efectos 3D de moda que envejecen mal.</li><li>Trazos temblorosos por mala vectorización con la pluma.</li></ul>",
            "media": "images/d15-viernes-slide12.jpg",
            "notes": "<h3>Advertencia</h3><p>El jurado penaliza duramente el uso de iconos pre-diseñados descargados de internet.</p>"
          },
          {
            "layout": "title",
            "title": "Práctica en Illustrator: Logo Rápido",
            "subtitle": "Abran Illustrator e inicien la construcción geométrica de su logotipo del LAB 3.",
            "content": "<p class='highlight-text'>Monitoreo y correcciones en vivo por la profesora.</p>",
            "notes": "<h3>Cierre</h3><p>Guía a los estudiantes en el uso de guías inteligentes y el buscatrazos para asegurar la simetría de sus marcas.</p>"
          }
        ]
      }
    }
  },
  "semana-4": {
    "title": "Semana 4: Logos y Flujo de Trabajo Profesional",
    "days": {
      "lunes": {
        "title": "Lunes: Repaso de Logos y Organización Digital",
        "subtitle": "Semana 4 - Lunes / Flujo de Trabajo Profesional",
        "slides": [
          {
            "layout": "title",
            "title": "Repaso de Logos y Organización Digital",
            "subtitle": "Semana 4 - Lunes / Flujo de Trabajo",
            "content": "<p>Revisión técnica de marcas, nomenclatura de archivos y organización colaborativa del equipo.</p>",
            "notes": "<h3>Guía</h3><p>Iniciamos la última semana del Módulo 1. Revisamos las entregas del LAB 3 y organizamos la entrega final del TP Integrador de la próxima semana.</p>"
          },
          {
            "layout": "split",
            "title": "Revisión del LAB 3",
            "content": "<p>Análisis colectivo de los mockups integrados con IA:</p><ul><li>¿El logotipo se integra en la iluminación del fondo?</li><li>¿La perspectiva y deformación de malla son correctas?</li><li>¿Se percibe la textura del soporte real?</li></ul>",
            "media": "<svg viewBox=\"0 0 160 120\" class=\"diagram-canvas\">\n    <rect x=\"10\" y=\"15\" width=\"140\" height=\"90\" rx=\"6\" fill=\"none\" stroke=\"var(--teal)\" stroke-dasharray=\"2,2\"/>\n    <line x1=\"10\" y1=\"60\" x2=\"150\" y2=\"60\" stroke=\"var(--coral)\" stroke-dasharray=\"1,2\"/>\n    <line x1=\"80\" y1=\"15\" x2=\"80\" y2=\"105\" stroke=\"var(--coral)\" stroke-dasharray=\"1,2\"/>\n    <circle cx=\"80\" cy=\"60\" r=\"25\" fill=\"none\" stroke=\"var(--yellow)\" stroke-width=\"2\"/>\n    <text x=\"80\" y=\"64\" fill=\"var(--white)\" font-size=\"8\" text-anchor=\"middle\" font-family=\"Space Grotesk\">RETÍCULA</text>\n  </svg>",
            "notes": "<h3>Feedback</h3><p>Muestra en pantalla los mockups más logrados de la clase y resalta los aciertos técnicos.</p>"
          },
          {
            "layout": "split",
            "title": "La Importancia del Flujo de Trabajo",
            "content": "<p>Diseñar bien exige un método organizado de trabajo:</p><ul><li>Un archivo desorganizado con capas sin nombre consume el doble de tiempo en revisiones.</li><li>La organización digital es clave en agencias y estudios para trabajar en equipo sin fricciones.</li></ul>",
            "media": "images/d16-lunes-slide03.jpg",
            "notes": "<h3>Comentario de la Profesora</h3><p>El desorden digital se traduce en pérdida de dinero y retrasos en entregas comerciales reales.</p>"
          },
          {
            "layout": "split",
            "title": "Nomenclatura Lógica de Archivos",
            "content": "<p>Evita los archivos llamados 'logo_final_final_definitivo.ai':</p><ul><li>Usa nombres con estructura de metadatos limpia: `PROY_Marca_Variante_Version.ext`.</li><li>Ejemplo: `LXP_Logo_Monocromo_v01.ai`.</li><li>Mantén la coherencia en todos los archivos del equipo.</li></ul>",
            "media": "images/d16-lunes-slide04.jpg",
            "notes": "<h3>Regla</h3><p>A partir de hoy, cualquier archivo subido al Drive con nombres informales ('final.png') tendrá descuento en la rúbrica.</p>"
          },
          {
            "layout": "split",
            "title": "Gestión de Enlaces y Links",
            "content": "<p>Evitar imágenes rotas en Illustrator:</p><ul><li>Por defecto, Illustrator enlaza las imágenes locales, no las incrusta.</li><li>Si mueves la imagen de carpeta o abres el archivo en otra computadora, el enlace se rompe.</li><li><strong>Solución:</strong> Mantén la estructura de carpetas o incrusta las imágenes críticas.</li></ul>",
            "media": "images/d16-lunes-slide05.jpg",
            "notes": "<h3>Técnico</h3><p>Muestra cómo identificar enlaces rotos en el panel de Enlaces de Adobe Illustrator.</p>"
          },
          {
            "layout": "split",
            "title": "La Bitácora de TP Final",
            "content": "<p>Estructura obligatoria para documentar el proceso creativo:</p><ul><li>Debe registrar los moodboards, bocetos a mano de logotipos y descarte de alternativas.</li><li>Justificación conceptual basada en el brief en menos de 10 palabras.</li><li>Capturas de pantalla del refinamiento vectorial y las grillas de construcción.</li></ul>",
            "media": "images/d16-lunes-slide06.jpg",
            "notes": "<h3>Importante</h3><p>La bitácora demuestra que el logotipo final no fue un accidente estético, sino el resultado de un método analítico.</p>"
          },
          {
            "layout": "split",
            "title": "Preparar empaques en Illustrator",
            "content": "<p>La función `Archivo > Empaquetar` (Package):</p><ul><li>Crea automáticamente una carpeta que compila el archivo .ai, todas las tipografías instaladas y los enlaces de imágenes.</li><li>Es el único método aceptado para enviar archivos a imprenta o a otros diseñadores.</li></ul>",
            "media": "images/d16-lunes-slide07.jpg",
            "notes": "<h3>Demostración</h3><p>Muestra el proceso de empaquetado en Illustrator y analiza la carpeta de salida generada.</p>"
          },
          {
            "layout": "split",
            "title": "Organización de Fuentes del Equipo",
            "content": "<p>Asegurando la consistencia tipográfica:</p><ul><li>Todo el equipo debe usar las fuentes de Google Fonts oficiales (Arvo y Space Grotesk).</li><li>No uses fuentes locales instaladas de forma individual que cambien en otras computadoras.</li></ul>",
            "media": "images/d16-lunes-slide08.jpg",
            "notes": "<h3>Nota</h3><p>El uso de tipografías consistentes evita que la maqueta del fanzine se desconfigure al abrirla en otra notebook.</p>"
          },
          {
            "layout": "split",
            "title": "Preparando el Fanzine de Marca",
            "content": "<p>El entregable editorial clave del TP Final:</p><ul><li>Revista o folleto doblado de 4 dobles páginas que narre la identidad y valores de la marca.</li><li>Exige la aplicación rigurosa de retículas, jerarquía macrotipográfica y paleta cromática.</li></ul>",
            "media": "images/d16-lunes-slide09.jpg",
            "notes": "<h3>Fanzine</h3><p>Explica que el fanzine no es un catálogo de productos, es una pieza narrativa que debe transmitir la esencia conceptual de la marca.</p>"
          },
          {
            "layout": "split",
            "title": "Checklist Técnico de Logotipos",
            "content": "<p>Verificación final del vector del logotipo:</p><ul><li>¿El logotipo está completamente contorneado (`Shift + Ctrl + O`)?</li><li>¿Se eliminaron trazos sueltos o puntos huérfanos?</li><li>¿Funciona correctamente en versión monocromática sobre fondo negro?</li></ul>",
            "media": "images/d16-lunes-slide10.jpg",
            "notes": "<h3>Recomendación</h3><p>Trazar a contornos evita que la tipografía del logo cambie si el cliente no la tiene instalada en su computadora.</p>"
          },
          {
            "layout": "split",
            "title": "Control de Calidad del TP Final",
            "content": "<p>El checklist de consistencia visual:</p><ul><li>¿Las 3 piezas de afiches usan la misma paleta de colores corporativos?</li><li>¿El empaque y el fanzine comparten la misma tipografía institucional?</li><li>¿Se respeta el área de resguardo del logo en todas las aplicaciones?</li></ul>",
            "media": "images/d16-lunes-slide11.jpg",
            "notes": "<h3>Jurado</h3><p>La consistencia visual es el factor principal que audita el jurado al evaluar sistemas de identidad de marca.</p>"
          },
          {
            "layout": "grid",
            "title": "Checklist de Organización Técnica",
            "content": "<h2>Antes de finalizar la semana, comprueben:</h2>",
            "cards": [
              {
                "num": "01",
                "title": "Estructura Drive",
                "desc": "Carpetas ordenadas con Nomenclature estándar.",
                "icon": "💡"
              },
              {
                "num": "02",
                "title": "Enlaces e imágenes",
                "desc": "Incrustadas o empaquetadas sin enlaces rotos.",
                "icon": "⚙️"
              },
              {
                "num": "03",
                "title": "Fuentes unificadas",
                "desc": "Arvo y Space Grotesk instaladas en todas las computadoras.",
                "icon": "🎨"
              },
              {
                "num": "04",
                "title": "Bitácora al día",
                "desc": "Proceso de bocetos y alternativas documentado.",
                "icon": "🔬"
              }
            ],
            "notes": "<h3>Consejo</h3><p>Utilicen la bitácora para justificar las correcciones del feedback del LAB 3.</p>"
          },
          {
            "layout": "title",
            "title": "Simulacro: Búsqueda del Archivo Perdido",
            "subtitle": "Simulemos una corrección de urgencia de un cliente: deben encontrar y empaquetar el archivo vectorial en 3 minutos.",
            "content": "<p class='highlight-text'>Dinámica con cronómetro para evaluar la organización del equipo.</p>",
            "notes": "<h3>Cierre</h3><p>La velocidad de respuesta ante el cliente demuestra un flujo de trabajo profesional y ordenado.</p>"
          }
        ]
      },
      "martes": {
        "title": "Martes: Control de Versiones y Nomenclatura",
        "subtitle": "Semana 4 - Martes / Técnica Profesional",
        "slides": [
          {
            "layout": "title",
            "title": "Control de Versiones y Nomenclatura",
            "subtitle": "Semana 4 - Martes / Nomenclatura",
            "content": "<p>Formatos de exportación, empaquetado para el cliente final y especificaciones de archivos de marca.</p>",
            "notes": "<h3>Guía</h3><p>Hoy profundizamos en la entrega técnica del logotipo al cliente. Veremos cómo estructurar los formatos y crear la hoja de especificaciones del manual de marca.</p>"
          },
          {
            "layout": "split",
            "title": "¿Por qué Importa la Nomenclatura?",
            "content": "<p>Evita confusiones y pérdidas de tiempo en estudios profesionales:</p><ul><li>Un archivo con nomenclatura desordenada transmite informalidad.</li><li>Permite al cliente final localizar rápidamente la versión correcta.</li><li>Estructura estándar: `PROY_Marca_Variante_Monocromo/Color_v01.ai`.</li></ul>",
            "media": "images/d17-martes-slide02.jpg",
            "notes": "<h3>Contexto</h3><p>Explica que en proyectos corporativos complejos se generan hasta 50 versiones del mismo logo; la nomenclatura es la única forma de no cometer errores.</p>"
          },
          {
            "layout": "split",
            "title": "Formatos de Exportación del Logo",
            "content": "<p>El paquete técnico que se entrega al cliente:</p><ul><li><strong>Editables:</strong> .AI (Illustrator) con textos contorneados.</li><li><strong>Vectores de reproducción:</strong> .EPS y .SVG (para web).</li><li><strong>Mapa de bits:</strong> .PNG en alta resolución con fondo transparente y .JPG con fondo sólido.</li></ul>",
            "media": "images/d17-martes-slide03.jpg",
            "notes": "<h3>Explicación</h3><p>El cliente no siempre tiene Illustrator. Necesita el PNG transparente para colocarlo en sus documentos de Word o presentaciones.</p>"
          },
          {
            "layout": "split",
            "title": "Exportación Rápida de Recursos",
            "content": "<p>Herramientas en Illustrator para agilizar el flujo de trabajo:</p><ul><li>El panel `Exportar para pantallas` (Asset Export).</li><li>Arrastra el logotipo y sus variantes al panel para exportarlos en múltiples formatos (PNG, SVG, JPG) y escalas (1x, 2x) en un solo clic.</li></ul>",
            "media": "<svg viewBox=\"0 0 160 120\" class=\"diagram-canvas\">\n    <rect x=\"10\" y=\"15\" width=\"140\" height=\"90\" rx=\"6\" fill=\"none\" stroke=\"var(--teal)\" stroke-dasharray=\"2,2\"/>\n    <line x1=\"10\" y1=\"60\" x2=\"150\" y2=\"60\" stroke=\"var(--coral)\" stroke-dasharray=\"1,2\"/>\n    <line x1=\"80\" y1=\"15\" x2=\"80\" y2=\"105\" stroke=\"var(--coral)\" stroke-dasharray=\"1,2\"/>\n    <circle cx=\"80\" cy=\"60\" r=\"25\" fill=\"none\" stroke=\"var(--yellow)\" stroke-width=\"2\"/>\n    <text x=\"80\" y=\"64\" fill=\"var(--white)\" font-size=\"8\" text-anchor=\"middle\" font-family=\"Space Grotesk\">RETÍCULA</text>\n  </svg>",
            "notes": "<h3>Atajo técnico</h3><p>Muestra cómo configurar el panel de Exportación rápida para agilizar las entregas del TP.</p>"
          },
          {
            "layout": "split",
            "title": "PDF de Impresión Profesional",
            "content": "<p>Preparación técnica de archivos para la imprenta offset o digital:</p><ul><li>Configura las marcas de corte y sangría (Bleed) de al menos 3mm.</li><li>Asegura que el modo de color sea CMYK con perfil Coated FOGRA39.</li><li>Exporta como PDF/X-1a o PDF/X-4 para evitar cambios en las tipografías o colores directos.</li></ul>",
            "media": "images/d17-martes-slide05.jpg",
            "notes": "<h3>Sangría</h3><p>Explica que la sangría (bleed) evita que queden bordes blancos en las revistas al cortarlas con la guillotina de la imprenta.</p>"
          },
          {
            "layout": "split",
            "title": "Diferencia de Editables y Cerrados",
            "content": "<p>Controlando el acceso a los archivos de marca:</p><ul><li><strong>Editables:</strong> Permiten al cliente hacer modificaciones futuras. Tienen mayor costo de desarrollo.</li><li><strong>Cerrados:</strong> PNG o PDF de uso directo. Evitan que el cliente modifique proporciones o colores sin el consentimiento del diseñador.</li></ul>",
            "media": "images/d17-martes-slide06.jpg",
            "notes": "<h3>Branding</h3><p>En el mercado profesional, el cliente paga una tarifa adicional por la entrega de los archivos editables de la marca.</p>"
          },
          {
            "layout": "split",
            "title": "Copias de Seguridad (Backups)",
            "content": "<p>Seguridad de la información de marca en la nube:</p><ul><li>Mantén siempre copias de seguridad de los archivos editables.</li><li>Organiza el almacenamiento en carpetas ordenadas por año y cliente.</li><li>Nunca guardes proyectos comerciales únicamente en la memoria local de tu notebook.</li></ul>",
            "media": "images/d17-martes-slide07.jpg",
            "notes": "<h3>Consejo</h3><p>Un disco duro externo o almacenamiento en la nube automatizado salva proyectos enteros ante fallos de hardware.</p>"
          },
          {
            "layout": "split",
            "title": "El Manual Técnico de Especificaciones",
            "content": "<p>Hoja de uso correcto del logotipo en el manual de marca:</p><ul><li>Especifica el tamaño mínimo de reproducción recomendado (e.g. 15mm o 40px).</li><li>Define los códigos de color exactos: Pantone, CMYK, RGB y Hexadecimal.</li><li>Muestra la grilla de proporción para asegurar la consistencia.</li></ul>",
            "media": "images/d17-martes-slide08.jpg",
            "notes": "<h3>Manual de uso</h3><p>Esta hoja técnica es el entregable principal que guía a los desarrolladores web o imprentas que utilicen la marca en el futuro.</p>"
          },
          {
            "layout": "split",
            "title": "Licenciamiento y Entrega de Archivos",
            "content": "<p>Garantizar la tranquilidad legal del cliente:</p><ul><li>Anexa a la carpeta de entrega las facturas o certificados de las licencias de las tipografías e imágenes comerciales utilizadas.</li><li>Especifica por escrito las limitaciones de uso del diseño comercial entregado.</li></ul>",
            "media": "<svg viewBox=\"0 0 160 120\" class=\"diagram-canvas\">\n    <rect x=\"10\" y=\"15\" width=\"140\" height=\"90\" rx=\"6\" fill=\"none\" stroke=\"var(--teal)\" stroke-dasharray=\"2,2\"/>\n    <line x1=\"10\" y1=\"60\" x2=\"150\" y2=\"60\" stroke=\"var(--coral)\" stroke-dasharray=\"1,2\"/>\n    <line x1=\"80\" y1=\"15\" x2=\"80\" y2=\"105\" stroke=\"var(--coral)\" stroke-dasharray=\"1,2\"/>\n    <circle cx=\"80\" cy=\"60\" r=\"25\" fill=\"none\" stroke=\"var(--yellow)\" stroke-width=\"2\"/>\n    <text x=\"80\" y=\"64\" fill=\"var(--white)\" font-size=\"8\" text-anchor=\"middle\" font-family=\"Space Grotesk\">RETÍCULA</text>\n  </svg>",
            "notes": "<h3>Importante</h3><p>La entrega de comprobantes de licencias es una buena práctica profesional que aporta confianza y solidez a tu servicio.</p>"
          },
          {
            "layout": "split",
            "title": "Coordinación con la Imprenta",
            "content": "<p>Cómo comunicarse con el técnico impresor:</p><ul><li>Antes de exportar, consulta el gramaje de papel recomendado para el fanzine (e.g. 150g mate).</li><li>Pregunta si el impresor prefiere las páginas compaginadas o en pliegos individuales.</li><li>Solicita siempre una prueba de impresión antes de tirar la producción masiva.</li></ul>",
            "media": "images/d17-martes-slide10.jpg",
            "notes": "<h3>Consejo docente</h3><p>Invita a los alumnos a visitar imprentas locales para familiarizarse con las maquinarias y texturas de papel reales.</p>"
          },
          {
            "layout": "split",
            "title": "Las Versiones del Logo en Manuales",
            "content": "<p>Variantes que deben entregarse obligatoriamente:</p><ul><li>Versión color principal (sobre fondo blanco/claro).</li><li>Versión monocromática negra (para soportes impresos a una tinta).</li><li>Versión monocromática blanca/calada (sobre fondo oscuro).</li></ul>",
            "media": "images/d17-martes-slide11.jpg",
            "notes": "<h3>Recomendación</h3><p>El logotipo debe probarse en todas sus variantes para verificar que siga leyéndose con la misma claridad formal.</p>"
          },
          {
            "layout": "grid",
            "title": "Checklist de Nomenclatura",
            "content": "<h2>Verificación antes del envío técnico:</h2>",
            "cards": [
              {
                "num": "01",
                "title": "Contorneado",
                "desc": "Todas las fuentes del logo convertidas a curvas.",
                "icon": "💡"
              },
              {
                "num": "02",
                "title": "Nombres",
                "desc": "Archivos nombrados con estructura de metadatos limpia.",
                "icon": "⚙️"
              },
              {
                "num": "03",
                "title": "Formatos",
                "desc": "Paquete completo: .AI, .SVG, .PNG, .PDF.",
                "icon": "🎨"
              },
              {
                "num": "04",
                "title": "Especificaciones",
                "desc": "Códigos de color (CMYK, RGB, Hex) declarados en el manual.",
                "icon": "🔬"
              }
            ],
            "notes": "<h3>Revisión final</h3><p>La falta de cualquiera de estos puntos se penaliza en la calidad técnica de la rúbrica.</p>"
          },
          {
            "layout": "title",
            "title": "Práctica: Crítica de Nombres y Formatos",
            "subtitle": "Analicen los archivos del Drive del equipo y corrijan los nombres y formatos según la estructura estándar.",
            "content": "<p class='highlight-text'>Monitoreo y correcciones en Miro.</p>",
            "notes": "<h3>Cierre</h3><p>Revisa que todos los equipos tengan sus carpetas de entrega listas con la nomenclatura técnica correcta.</p>"
          }
        ]
      },
      "miercoles": {
        "title": "Miércoles: Ética, Plagio y Licencias",
        "slides": [
          {
            "layout": "title",
            "title": "Ética, Plagio y Licencias de Uso",
            "subtitle": "Semana 4 - Miércoles / El límite legal y ético del diseño",
            "content": "<p>Inspiración vs. copia, derechos de autor (copyright), licencias tipográficas y el impacto de la Inteligencia Artificial.</p>",
            "notes": "<h3>Introducción</h3><p>Hoy abordamos la ética y legalidad en el diseño. Es crucial que los estudiantes entiendan la diferencia entre inspirarse y plagiar, y cómo gestionar licencias tipográficas e imágenes comerciales.</p>"
          },
          {
            "layout": "split",
            "title": "Inspiración vs. Copia vs. Plagio",
            "content": "<p>Las fronteras conceptuales de la práctica profesional:</p><ul><li><strong>Inspiración:</strong> Entender un principio o enfoque ajeno y aplicarlo a un problema distinto creando algo nuevo.</li><li><strong>Copia:</strong> Reproducir de forma muy cercana una solución ajena sin aportar una resolución propia.</li><li><strong>Plagio:</strong> Presentar un trabajo ajeno como propio, sin transformación ni atribución.</li></ul>",
            "media": "images/d18-miercoles-slide02.jpg",
            "notes": "<h3>Discusión</h3><p>Pregunta: ¿Cómo saber si tu pieza es original? Haz la pregunta: ¿Esta pieza resuelve el problema con una lógica propia o solo reemplaza superficialmente los elementos de otra?</p>"
          },
          {
            "layout": "split",
            "title": "Copyright y Derechos de Autor",
            "content": "<p>El marco legal que protege la autoría de una obra original:</p><ul><li>Se aplica automáticamente al crear una obra en la mayoría de los países.</li><li>Protege ilustraciones, fotografías y tipografías.</li><li>El desconocimiento de la ley no exime de responsabilidad legal a quien usa obras ajenas sin permiso.</li></ul>",
            "media": "images/d18-miercoles-slide03.jpg",
            "notes": "<h3>Comentario de la Profesora</h3><p>Buscar una imagen en Google no significa que sea de uso libre. El copyright pertenece automáticamente a su creador.</p>"
          },
          {
            "layout": "grid",
            "title": "Tipos de Licencias Comerciales",
            "content": "<h2>Formatos de adquisición de recursos premium:</h2>",
            "cards": [
              {
                "num": "RF",
                "title": "Royalty-Free (RF)",
                "desc": "Pagás una sola vez y usás el recurso de forma indefinida en múltiples proyectos respetando límites de tirada.",
                "icon": "💡"
              },
              {
                "num": "RM",
                "title": "Rights-Managed (RM)",
                "desc": "Precio calculado según variables: medio, tiempo de uso, territorio y exclusividad. Proyectos masivos.",
                "icon": "⚙️"
              },
              {
                "num": "EDIT",
                "title": "Uso Editorial",
                "desc": "Permitido para ilustrar noticias o documentales. Prohibido en afiches publicitarios o marcas.",
                "icon": "🎨"
              },
              {
                "num": "FREE",
                "title": "Stock Libre",
                "desc": "Bancos gratuitos (Unsplash, Pixabay) con licencias CC0 o atribución.",
                "icon": "🔬"
              }
            ],
            "notes": "<h3>Técnico</h3><p>Explica que usar imágenes de stock 'Editorial' en campañas publicitarias de marcas puede derivar en demandas millonarias al cliente.</p>"
          },
          {
            "layout": "split",
            "title": "Licencias Tipográficas Cruciales",
            "content": "<p>Las tipografías tienen licencias según el soporte donde se van a instalar:</p><ul><li><strong>Desktop License:</strong> Para instalar en tu computadora y diseñar piezas estáticas (PDF, afiches).</li><li><strong>Webfont License:</strong> Para alojar en el servidor de un sitio web y renderizar texto vivo.</li><li><strong>App / E-book License:</strong> Para embeber la fuente en el código de una app o libro digital.</li></ul>",
            "media": "images/d18-miercoles-slide05.jpg",
            "notes": "<h3>Alerta</h3><p>Comprar una tipografía para Desktop no te autoriza a usarla como Webfont en el sitio web de tu cliente. Requiere licencias separadas.</p>"
          },
          {
            "layout": "split",
            "title": "SIL Open Font License (OFL)",
            "content": "<p>El estándar libre para tipografías de código abierto (Open Source):</p><ul><li>Es la licencia de fuentes como Google Fonts (e.g., Arvo y Space Grotesk).</li><li>Permite uso personal y comercial gratuito.</li><li>Permite modificar y distribuir la fuente siempre que no se venda por sí sola.</li></ul>",
            "media": "images/d18-miercoles-slide06.jpg",
            "notes": "<h3>Consejo</h3><p>Utilicen siempre tipografías Google Fonts para proyectos estudiantiles o de bajo presupuesto para garantizar la legalidad de uso.</p>"
          },
          {
            "layout": "split",
            "title": "El Sistema Creative Commons (CC)",
            "content": "<p>Licencias abiertas que combinan 4 condiciones básicas creadas por el autor:</p><ul><li><strong>BY (Atribución):</strong> Exige dar crédito explícito.</li><li><strong>NC (No Comercial):</strong> Prohíbe fines de lucro.</li><li><strong>ND (Sin Obras Derivadas):</strong> Prohíbe modificar.</li><li><strong>SA (Compartir Igual):</strong> Exige redistribuir bajo la misma licencia exacta.</li></ul>",
            "media": "images/d18-miercoles-slide07.jpg",
            "notes": "<h3>Explicación</h3><p>Estas licencias permiten a los diseñadores compartir recursos libremente pero marcando límites claros de uso.</p>"
          },
          {
            "layout": "split",
            "title": "Las 6 Combinaciones Estándar de CC",
            "content": "<p>Desde la más libre a la más restrictiva:</p><ul><li><strong>CC BY:</strong> Permite uso comercial y modificación dando crédito.</li><li><strong>CC BY-SA:</strong> Compartir igual bajo misma licencia.</li><li><strong>CC BY-NC:</strong> Solo uso no comercial.</li><li><strong>CC BY-NC-ND:</strong> No comercial, sin modificar, exige crédito (la más restrictiva).</li></ul>",
            "media": "images/d18-miercoles-slide08.jpg",
            "notes": "<h3>Comentario</h3><p>Comenta que la licencia de Wikipedia es CC BY-SA, lo que permite reutilizar su información bajo la misma regla de apertura.</p>"
          },
          {
            "layout": "grid",
            "title": "4 Errores Graves de Licencias",
            "content": "<h2>Evita estos fallos éticos y legales en la práctica:</h2>",
            "cards": [
              {
                "num": "01",
                "title": "Dafont para Logos",
                "desc": "Descargar tipografías 'Gratis para uso personal' e incluirlas en logos comerciales.",
                "icon": "💡"
              },
              {
                "num": "02",
                "title": "Iconos de Stock",
                "desc": "Usar un vector gratuito como isotipo directo de un logo comercial (no se puede registrar como marca).",
                "icon": "⚙️"
              },
              {
                "num": "03",
                "title": "Sin Comprobante",
                "desc": "Entregar el diseño al cliente sin los certificados de licencias de fuentes e imágenes usadas.",
                "icon": "🎨"
              },
              {
                "num": "04",
                "title": "Música sin Derecho",
                "desc": "Incluir audio con copyright en videos publicitarios (provocará bloqueos en redes).",
                "icon": "🔬"
              }
            ],
            "notes": "<h3>Importante</h3><p>Estos 4 errores son comunes en estudiantes. Debemos recalcar la seriedad legal que implica el diseño comercial real.</p>"
          },
          {
            "layout": "split",
            "title": "¿Y la Inteligencia Artificial?",
            "content": "<p>El impacto de las herramientas generativas en el copyright:</p><ul><li>Plantean preguntas abiertas sobre la autoría legal del resultado.</li><li>Entrenamiento de modelos con obras protegidas sin autorización.</li><li><strong>Criterio profesional:</strong> Usar IA como apoyo exploratorio (referencias y bocetado rápido), no como producto final de marca.</li></ul>",
            "media": "images/d18-miercoles-slide10.jpg",
            "notes": "<h3>IA y ética</h3><p>Sé transparente con el cliente sobre si usaste herramientas generativas en el proceso y en qué medida.</p>"
          },
          {
            "layout": "split",
            "title": "El Criterio del Diseñador es Insubstituible",
            "content": "<p>Ninguna herramienta de IA o software reemplaza la toma de decisiones:</p><ul><li>El software ejecuta órdenes, pero no entiende de contexto, cultura o empatía.</li><li>El valor del diseñador radica en el <strong>criterio analítico y la justificación conceptual</strong> de la marca.</li></ul>",
            "media": "images/d18-miercoles-slide11.jpg",
            "notes": "<h3>Síntesis final</h3><p>Los clientes pagan por el criterio y el proceso de resolución de problemas, no solo por el manejo técnico de Illustrator.</p>"
          },
          {
            "layout": "grid",
            "title": "Checklist de Ética Visual",
            "content": "<h2>Antes de cerrar tu marca, asegúrate:</h2>",
            "cards": [
              {
                "num": "01",
                "title": "¿Referencias?",
                "desc": "Las fuentes e imágenes tienen licencias de uso comercial activo.",
                "icon": "💡"
              },
              {
                "num": "02",
                "title": "¿Originalidad?",
                "desc": "¿Hay una transformación conceptual o es copia directa?",
                "icon": "⚙️"
              },
              {
                "num": "03",
                "title": "¿Transparencia?",
                "desc": "Se especifica si se usó soporte de IA en la bitácora.",
                "icon": "🎨"
              },
              {
                "num": "04",
                "title": "¿Comprobantes?",
                "desc": "Se guardaron las facturas y certificados en la carpeta del proyecto.",
                "icon": "🔬"
              }
            ],
            "notes": "<h3>Consejo final</h3><p>Mantener un comportamiento ético y legal es lo que construye una reputación sólida a largo plazo en el mercado.</p>"
          },
          {
            "layout": "title",
            "title": "Dinámica en Mentimeter: Casos Éticos",
            "subtitle": "Analicemos tres escenarios de plagio y copia reales de la industria y votemos la resolución ética.",
            "content": "<p class='highlight-text'>Debate grupal sobre la responsabilidad del diseñador ante el cliente.</p>",
            "notes": "<h3>Cierre de clase</h3><p>Guiar el debate hacia la importancia de educar al cliente en temas de propiedad intelectual y presupuesto de licencias.</p>"
          }
        ]
      },
      "jueves": {
        "title": "Jueves: Creatividad y Bloqueo Creativo",
        "slides": [
          {
            "layout": "title",
            "title": "Creatividad y Bloqueo Creativo",
            "subtitle": "Semana 4 - Jueves / Especial Mente y Diseño",
            "content": "<p>La creatividad como habilidad entrenable, ceguera de taller y técnicas prácticas de desbloqueo creativo.</p>",
            "notes": "<h3>Clase especial</h3><p>Hoy cerramos el temario conceptual abordando la mente y el proceso creativo. Veremos que la creatividad no es un talento místico reservado a unos pocos, sino una disciplina de trabajo.</p>"
          },
          {
            "layout": "split",
            "title": "La Creatividad se Entrena",
            "content": "<p>No es un talento innato o una epifanía mágica.</p><ul><li>Es una <strong>habilidad que se ejercita</strong> mediante métodos concretos de trabajo.</li><li>Requiere hábitos diarios de observación, investigación visual y dibujo rápido.</li><li>El diseñador profesional trabaja con metodologías, no con la inspiración espontánea.</li></ul>",
            "media": "images/d19-jueves-slide02.jpg",
            "notes": "<h3>Concepto</h3><p>Desmitifica la figura del genio creativo. La creatividad es 99% transpiración y 1% inspiración.</p>"
          },
          {
            "layout": "split",
            "title": "¿Qué es el Bloqueo Creativo?",
            "content": "<p>La sensación de no poder generar ideas o de quedar atascado frente a un problema.</p><ul><li>Suele originarse por <strong>miedo a equivocarse</strong>.</li><li>Autoexigencia excesiva desde el primer boceto.</li><li>Falta de información suficiente sobre el problema (saltear investigación).</li></ul>",
            "media": "images/d19-jueves-slide03.jpg",
            "notes": "<h3>Empatía</h3><p>Explica a los estudiantes que el bloqueo es una etapa normal del proceso creativo, no una falla personal.</p>"
          },
          {
            "layout": "split",
            "title": "La Ceguera de Taller",
            "content": "<p>Pérdida de perspectiva crítica sobre el propio trabajo.</p><ul><li>Ocurre cuando pasamos demasiado tiempo inmersos en la misma pieza.</li><li>Impide notar errores obvios de composición, kerning o contraste.</li><li><strong>Cómo combatirla:</strong> Alejarse físicamente del diseño, dejarlo descansar una noche o pedir feedback externo.</li></ul>",
            "media": "images/d19-jueves-slide04.jpg",
            "notes": "<h3>Ejemplo</h3><p>Comenta que la ceguera de taller es la razón por la cual las agencias tienen directores creativos externos que auditan las piezas con ojos frescos.</p>"
          },
          {
            "layout": "split",
            "title": "Técnica: Cambiar de Soporte",
            "content": "<p>Una de las formas más efectivas de destrabar la mente:</p><ul><li>Si estás bloqueado en la pantalla frente a Illustrator, apaga el monitor y toma papel y lápiz.</li><li>El boceto rápido a mano alzada externaliza ideas sin el costo de tiempo del software digital.</li><li>Fuerza al cerebro a enfocarse en el concepto y la forma en vez del tecnicismo del vector.</li></ul>",
            "media": "images/d19-jueves-slide05.jpg",
            "notes": "<h3>Consejo</h3><p>Recomienda llevar siempre una libreta de bocetos física en la mochila.</p>"
          },
          {
            "layout": "split",
            "title": "Técnica: Peor Diseño Posible",
            "content": "<p>Generar deliberadamente malas ideas para romper la parálisis del lienzo en blanco:</p><ul><li>Forzarse a diseñar la propuesta más fea, ruidosa y absurda para el brief.</li><li>Elimina la presión de la perfección inmediata.</li><li>Casi siempre revela por contraste qué elementos sí funcionan y destraba el humor y la creatividad del equipo.</li></ul>",
            "media": "images/d19-jueves-slide06.jpg",
            "notes": "<h3>Dinámica</h3><p>Menciona que esta técnica es sumamente liberadora cuando un equipo está saturado por las entregas.</p>"
          },
          {
            "layout": "split",
            "title": "El Poder de las Analogías",
            "content": "<p>Pensar el problema de diseño en términos de un campo completamente diferente:</p><ul><li>¿Cómo resolvería este orden visual un arquitecto?</li><li>¿Cómo organiza esta información la naturaleza?</li><li>Obliga a trasladar principios estructurales de un contexto a otro, saliendo de los caminos obvios.</li></ul>",
            "media": "images/d19-jueves-slide07.jpg",
            "notes": "<h3>Ejemplo</h3><p>Muestra cómo el diseño de trenes bala japoneses se inspiró en la forma del pico del martín pescador para reducir el ruido al entrar a túneles (biomímesis).</p>"
          },
          {
            "layout": "split",
            "title": "Divergencia y Convergencia Creative",
            "content": "<p>Dos movimientos que estructuran el Double Diamond:</p><ul><li><strong>Divergir:</strong> Abrir el abanico de posibilidades. Generar muchas ideas, suspender el juicio crítico.</li><li><strong>Converger:</strong> Analizar, comparar, descartar y decidir.</li><li><i>Error común:</i> Converger demasiado rápido sin haber divergido lo suficiente antes.</li></ul>",
            "media": "images/d19-jueves-slide08.jpg",
            "notes": "<h3>Explicación</h3><p>El primer rombo del Double Diamond abre y cierra el problema; el segundo abre y cierra la solución. Enfatiza la alternancia de ambos procesos.</p>"
          },
          {
            "layout": "split",
            "title": "El Archivo Visual Personal (Moodboard Infinito)",
            "content": "<p>La creatividad se alimenta de referencias:</p><ul><li>Mirar cómo otros diseñadores resolvieron problemas similares no es copiar; es construir cultura visual.</li><li>Construye un archivo personal de referencias organizado por temas, tipografías o técnicas.</li><li>El hábito de recolectar gráfica diariamente sostiene el trabajo profesional.</li></ul>",
            "media": "images/d19-jueves-slide09.jpg",
            "notes": "<h3>Hábito</h3><p>Recomienda plataformas como Pinterest, Behance, Savee o Are.na para construir carpetas de inspiración.</p>"
          },
          {
            "layout": "split",
            "title": "Hábitos Saludables para Creativos",
            "content": "<p>Mantener la frescura mental en la práctica diaria:</p><ul><li>Establecer pausas activas (técnica Pomodoro).</li><li>Consumir arte e influencias fuera del diseño gráfico (cine, literatura, música, pasear).</li><li>Aceptar el error como parte estructural del proceso iterativo.</li></ul>",
            "media": "images/d19-jueves-slide10.jpg",
            "notes": "<h3>Consejo</h3><p>Explica que la mejor idea rara vez sale mientras miramos fijamente una pantalla en blanco. Caminar o descansar suele ser parte activa de la resolución de problemas.</p>"
          },
          {
            "layout": "split",
            "title": "Cómo Gestionar el Feedback Crítico",
            "content": "<p>El diseño se valida ante el cliente y el público:</p><ul><li>No tomes la crítica de forma personal; se evalúa la eficacia de la pieza, no tu valor.</li><li>Usa la crítica para iterar y perfeccionar la propuesta en la bitácora.</li><li>Un proceso de diseño maduro asume que la primera versión nunca será la definitiva.</li></ul>",
            "media": "images/d19-jueves-slide11.jpg",
            "notes": "<h3>Feedback</h3><p>Prepara a los alumnos para la defensa del TP Final, enseñándoles a defender el diseño con argumentos funcionales en vez de emocionales.</p>"
          },
          {
            "layout": "grid",
            "title": "Checklist Contra el Bloqueo",
            "content": "<h2>Si te quedas atascado en tu TP Final:</h2>",
            "cards": [
              {
                "num": "01",
                "title": "Cambia soporte",
                "desc": "Apaga la compu y boceta en una hoja de papel.",
                "icon": "💡"
              },
              {
                "num": "02",
                "title": "Busca info",
                "desc": "Vuelve a leer el brief y la investigación inicial.",
                "icon": "⚙️"
              },
              {
                "num": "03",
                "title": "Peor diseño",
                "desc": "Haz la propuesta más fea que puedas imaginar.",
                "icon": "🎨"
              },
              {
                "num": "04",
                "title": "Toma distancia",
                "desc": "Deja reposar el diseño 2 horas y vuelve con ojos frescos.",
                "icon": "🔬"
              }
            ],
            "notes": "<h3>Consejo</h3><p>Monitorea el trabajo en equipos y detecta si hay bloqueo por perfeccionismo.</p>"
          },
          {
            "layout": "title",
            "title": "Dinámica en Padlet: Ejercicio Expresivo",
            "subtitle": "Realicen un boceto a mano alzada para representar el concepto 'Silencio Ruidoso' en 2 minutos.",
            "content": "<p class='highlight-text'>Suban la foto a Padlet para feedback cruzado.</p>",
            "notes": "<h3>Cierre</h3><p>Felicita a los estudiantes por sus ideas rápidas y muestra cómo el boceto manual destraba la conceptualización en pocos minutos.</p>"
          }
        ]
      },
      "viernes": {
        "title": "Viernes: Repaso Final del Módulo 1",
        "subtitle": "Semana 4 - Viernes / Cierre de Módulo",
        "slides": [
          {
            "layout": "title",
            "title": "Repaso Final y Cierre del Módulo 1",
            "subtitle": "Unidad 1 a 11 & Special Workshop • Síntesis y Pitch de Proyecto",
            "content": "<p>Cierre del Módulo 1: Fundamentos del Diseño Gráfico.</p><p class=\"highlight-text\">Profesora: alondrampre@gmail.com</p>",
            "notes": "<h3>Guía del Docente</h3><p>Den la bienvenida a los alumnos al cierre del Módulo 1. Revisen la importancia de haber consolidado el criterio de diseño a lo largo de las 4 semanas.</p>"
          },
          {
            "layout": "grid",
            "title": "Agenda de Hoy: Integración Final",
            "content": "<p>Puntos clave a desarrollar en la sesión de hoy:</p>",
            "cards": [
              {
                "num": "01",
                "icon": "🧠",
                "title": "Repaso Teórico",
                "desc": "Consolidación de fundamentos, composición, color y tipografía."
              },
              {
                "num": "02",
                "icon": "🎨",
                "title": "El Afiche de Marca",
                "desc": "Sintetizar la identidad en una pieza conceptual potente."
              },
              {
                "num": "03",
                "icon": "🎙️",
                "title": "Pitch & Rúbrica",
                "desc": "Técnicas para defender el proyecto en 2 minutos."
              },
              {
                "num": "04",
                "icon": "🔍",
                "title": "Co-evaluación",
                "desc": "Revisión en Miro y checklist final de entrega."
              }
            ],
            "notes": "<h3>Agenda</h3><p>Repasa los 4 bloques principales de la clase de hoy para que la audiencia tenga claridad del flujo.</p>"
          },
          {
            "layout": "split",
            "title": "Repaso de Fundamentos",
            "content": "<p>Los 4 pilares construidos en el Módulo 1:</p><ul><li><strong>El Diseño es Función:</strong> Resolver problemas de comunicación con restricciones.</li><li><strong>Percepción y Gestalt:</strong> Agrupación visual, contraste y jerarquía de lectura.</li><li><strong>Sistemas Compositivos:</strong> Retícula suiza, modulación y alineación consciente.</li><li><strong>Sistemas de Marca:</strong> Logotipo, paleta cromática, tipografía y versatilidad.</li></ul>",
            "media": "images/d20-viernes-slide03.jpg",
            "notes": "<h3>Fundamentos</h3><p>Pregunta a los estudiantes cuál fue la lección teórica que más transformó su forma de mirar las piezas de diseño.</p>"
          },
          {
            "layout": "split",
            "title": "Consistencia Visual de Marca",
            "content": "<p>Un sistema de marca eficaz se reconoce en cualquier soporte:</p><ul><li><strong>Coherencia Cromática:</strong> Uso restringido y consciente de la paleta oficial.</li><li><strong>Jerarquía Tipográfica:</strong> Roles asignados para H1, H2, cuerpo y epígrafes.</li><li><strong>Estilo de Layout:</strong> Respeto constante del espacio negativo y los márgenes.</li></ul>",
            "media": "images/d20-viernes-slide04.jpg",
            "notes": "<h3>Branding</h3><p>El error más común es diseñar las piezas de forma aislada, rompiendo la consistencia del sistema al unirlas.</p>"
          },
          {
            "layout": "split",
            "title": "El Afiche Conceptual",
            "content": "<p>Cómo contar la identidad de marca en una sola pieza gráfica:</p><ul><li>Estructura el afiche usando la retícula modular suiza.</li><li>Usa jerarquías tipográficas claras (un H1 de gran escala que llame la atención).</li><li>Aplica retórica visual (metáforas, espacio negativo) para comunicar el concepto principal de la marca.</li></ul>",
            "media": "images/d20-viernes-slide05.jpg",
            "notes": "<h3>Afiche</h3><p>El afiche es una pieza de comunicación conceptual, no publicitaria comercial directa.</p>"
          },
          {
            "layout": "split",
            "title": "Estructura Narrativa del Afiche",
            "content": "<p>Asegurando el flujo de lectura e impacto visual:</p><ul><li><strong>Emisor (La Marca):</strong> Isotipo o logotipo en una zona de anclaje (generalmente esquina inferior).</li><li><strong>Mensaje:</strong> El concepto principal sintetizado en un H1 destacado.</li><li><strong>Canal/Receptor:</strong> Diagramación y escala adecuada para el soporte físico (afiche de calle o digital).</li></ul>",
            "media": "images/d20-viernes-slide06.jpg",
            "notes": "<h3>Jerarquía</h3><p>Muestra cómo el ojo entra por el H1, recorre la imagen central (círculo) y finaliza en el logo de la marca.</p>"
          },
          {
            "layout": "split",
            "title": "Preparando el Pitch Oral Final",
            "content": "<p>Cómo defender tu proyecto en 2 minutos ante el jurado:</p><ul><li>Estructura clara: <strong>Apertura</strong> (Presentar la marca y su concepto en menos de 10 palabras).</li><li><strong>Desarrollo:</strong> Explicar las decisiones técnicas (color, tipografía, retícula) basadas en la función del brief, no en gustos.</li><li><strong>Cierre:</strong> Mostrar las piezas finales y el mockup realista.</li></ul>",
            "media": "images/d20-viernes-slide07.jpg",
            "notes": "<h3>Pitch</h3><p>El pitch oral representa el 30% del puntaje final de la entrega. Deben ensayarlo con cronómetro en mano.</p>"
          },
          {
            "layout": "split",
            "title": "La Rúbrica de Pitch y Presentación",
            "content": "<p>Factores que auditará el jurado al evaluar la defensa oral:</p><ul><li>Seguridad y vocabulario técnico profesional del equipo.</li><li>Estructuración clara respetando los 2 minutos asignados.</li><li>Capacidad para responder al feedback y justificar decisiones.</li></ul>",
            "media": "images/d20-viernes-slide08.jpg",
            "notes": "<h3>Jurado</h3><p>Enséñales a no defenderse diciendo \"me gusta este color\", sino \"este color transmite confianza según el brief del cliente\".</p>"
          },
          {
            "layout": "split",
            "title": "Cómo Responder al Feedback del Cliente",
            "content": "<p>Consejos para la entrega en el mercado profesional:</p><ul><li>Acepta el feedback con empatía y profesionalismo.</li><li>Registra las correcciones en la bitácora y justifícalas técnicamente.</li><li>El diseño es un proceso iterativo de mejora continua.</li></ul>",
            "media": "images/d20-viernes-slide09.jpg",
            "notes": "<h3>Consejo</h3><p>La relación con el cliente se basa en la comunicación profesional y la justificación técnica de las decisiones.</p>"
          },
          {
            "layout": "grid",
            "title": "Criterios de Excelencia del Proyecto",
            "content": "<p>Lo que diferencia una entrega corriente de una entrega sobresaliente:</p>",
            "cards": [
              {
                "num": "01",
                "icon": "🎯",
                "title": "Fundamentación",
                "desc": "Cada decisión responde a una necesidad del brief."
              },
              {
                "num": "02",
                "icon": "📐",
                "title": "Rigor Técnico",
                "desc": "Vectores limpios, retícula respetada, sin errores."
              },
              {
                "num": "03",
                "icon": "✨",
                "title": "Atemporalidad",
                "desc": "Propuesta sobria sin modas pasajeras o adornos."
              },
              {
                "num": "04",
                "icon": "📦",
                "title": "Entrega Ordenada",
                "desc": "Carpetas, nomenclaturas y editables impecables."
              }
            ],
            "notes": "<h3>Criterios</h3><p>Recuerda a los estudiantes que el rigor técnico y la entrega ordenada son el sello distintivo de Lexpin.</p>"
          },
          {
            "layout": "grid",
            "title": "Checklist Cierre del Módulo 1",
            "content": "<p>Antes de la entrega final del lunes, comprueben:</p>",
            "cards": [
              {
                "num": "01",
                "icon": "💡",
                "title": "Consistencia",
                "desc": "Todas las piezas usan la misma paleta y fuentes institucionales."
              },
              {
                "num": "02",
                "icon": "⚙️",
                "title": "Bitácora",
                "desc": "El proceso de bocetos y alternativas está documentado."
              },
              {
                "num": "03",
                "icon": "🎨",
                "title": "Archivos Drive",
                "desc": "Editables y exportaciones ordenados con nomenclatura estándar."
              },
              {
                "num": "04",
                "icon": "🔬",
                "title": "Pitch Ensayado",
                "desc": "La defensa oral de 2 minutos está ensayada con cronómetro."
              }
            ],
            "notes": "<h3>Nota final</h3><p>¡Felicitaciones por completar el temario del Módulo 1! El lunes es el día de la gran presentación.</p>"
          },
          {
            "layout": "grid",
            "title": "Síntesis de Aprendizajes del Módulo",
            "content": "<p>Puntos de inflexión en tu camino como diseñador:</p>",
            "cards": [
              {
                "num": "01",
                "icon": "🧠",
                "title": "Criterio sobre Gusto",
                "desc": "Argumentar decisiones formales desde la función."
              },
              {
                "num": "02",
                "icon": "🛠️",
                "title": "Herramientas con Intención",
                "desc": "Software al servicio de la idea, no al revés."
              },
              {
                "num": "03",
                "icon": "📐",
                "title": "Grilla e Identidad",
                "desc": "Construir sistemas visuales escalables y consistentes."
              },
              {
                "num": "04",
                "icon": "📜",
                "title": "Ética y Licencias",
                "desc": "Respetar la autoría y el estándar profesional."
              }
            ],
            "notes": "<h3>Síntesis</h3><p>Resume cómo pasaron de pensar que diseñar era \"hacer cosas lindas\" a dominar un método profesional.</p>"
          },
          {
            "layout": "title",
            "title": "Dinámica: Co-evaluación en Miro",
            "subtitle": "Revisen los tableros de Miro de otros equipos y realicen una co-evaluación cruzada utilizando la rúbrica oficial.",
            "content": "<p class=\"highlight-text\">Identifiquen aciertos y oportunidades de mejora antes de la entrega final.</p>",
            "notes": "<h3>Cierre</h3><p>Agradece la participación de los alumnos y motívalos para la entrega del lunes.</p>"
          }
        ]
      }
    }
  }
};
