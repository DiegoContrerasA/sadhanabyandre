export const es = {

  _meta: {
    title:       "Sadhana by Andre | Yoga en Envigado, Medellín y Sabaneta",
    description: "Clases de yoga en Envigado con Andre, instructora certificada. Yoga grupal, prenatal, post parto y facial. Servicio presencial en el área metropolitana de Medellín y online. +500 alumnas.",
    locale:      "es_CO",
    lang:        "es-CO",
  },

  nav: {
    links: [
      { label: "Sobre mí",  href: "#sobre-mi"  },
      { label: "Servicios", href: "#servicios"  },
      { label: "Kobido",    href: "#kobido"     },
      { label: "Horarios",  href: "#horarios"   },
      { label: "Faq",       href: "#faq"        },
    ],
    openMenu:       "Abrir menú",
    closeMenu:      "Cerrar menú",
    ariaNav:        "Navegación principal",
    ariaNavMobile:  "Menú de navegación",
  },

  hero: {
    logoAlt:     "Sadhana by Andre",
    byline:      "by andre",
    tagline1:    "Respira · Estírate",
    tagline2:    "Fortalece tu ser interior",
    cta:         "Reservar clase",
    waMessage:   "¡Hola Andre! Quiero saber más información sobre tus clases y servicios 😊",
    stats: [
      { value: "+7", label: "años de experiencia" },
      { value: "+5", label: "certificaciones internacionales" },
    ],
  },

  about: {
    label:      "Sobre Mí",
    heading:    "El camino hacia",
    headingEm:  "tu equilibrio",
    imgAlt:     "Andre, instructora de yoga",
    p1: "Sadhana nace de mi propio camino de búsqueda, escucha y reconexión con el cuerpo.",
    p2: "A lo largo de los 12 años practicando entendí que el bienestar no se trata de forzar, corregir o exigir, sino de habitar el cuerpo con presencia, respeto y honestidad.",
    p3: "Mi recorrido en el yoga comenzó desde el movimiento, y con el tiempo se fue expandiendo hacia prácticas más profundas de autocuidado, acompañando especialmente procesos femeninos, de transformación y de retorno a lo esencial. El yoga prenatal y postparto, el yoga facial y el masaje Kobido llegaron como una extensión natural de esta escucha, integrando el tacto consciente como una forma de sanación y ritual.",
    p4: "Hoy, Sadhana es un espacio para cuerpos reales y procesos reales. Un lugar donde el movimiento, la respiración y el autocuidado se convierten en herramientas para volver a ti, honrar tu ritmo y cultivar una relación más amorosa con tu cuerpo.",
    quote: "Mi filosofía es simple: cada cuerpo tiene su propia sabiduría. Mi trabajo es ayudarte a escucharla.",
  },

  positions: {
    label:      "La Práctica",
    heading:    "Cada postura,",
    headingEm:  "una conversación",
    poses: [
      { alt: "Sirsasana – postura invertida",   label: "Fuerza"       },
      { alt: "Estiramiento lateral en exterior", label: "Flexibilidad" },
      { alt: "Estiramiento lateral en interior", label: "Restauración" },
    ],
  },

  schedule: {
    label:       "Horarios",
    heading:     "Clases",
    headingEm:   "grupales",
    classLabel:  "Clase",
    reserveBtn:  "Reservar",
    tagPresencial: "Presencial",
    tagOnline:     "En línea",
    note:        "* Cupos limitados — se recomienda reservar con anticipación.",
    waMessage:   (name: string, day: string, time: string) =>
      `¡Hola! Quiero reservar mi cupo para la clase de ${name} el día ${day} a las ${time}.`,
    items: [
      {
        day:         "Martes",
        time:        "7:00 am",
        online:      true,
        name:        "Yoga en Secuencias",
        description: "También conocido como yoga escalonado. En esta clase creamos una especie de coreografía a través de secuencias de posturas que repetimos varias veces, ayudando a mejorar la flexibilidad, coordinación, resistencia y memoria corporal mientras el cuerpo gana más confianza en el movimiento.",
      },
      {
        day:         "Jueves",
        time:        "6:15 pm",
        online:      false,
        name:        "Yoga Multinivel",
        description: "Una clase de vinyasa diseñada para adaptarse a cada persona que llega al mat. Cada práctica puede verse diferente según tu cuerpo, nivel y necesidades, creando un espacio seguro, amoroso y retador al mismo tiempo.",
      }
    ],
  },

  services: {
    label:     "Servicios",
    heading:   "Encuentra",
    headingEm: "tu práctica",
    imgAlt:    "Andre instructora de yoga en postura invertida",
    items: [
      {
        num:         "01",
        name:        "Yoga Grupal",
        duration:    "60 min",
        description: "Vive la energía colectiva de la práctica compartida. Un espacio de apoyo donde cada persona avanza a su ritmo, con guía cercana y atención real.",
      },
      {
        num:         "02",
        name:        "Yoga Personalizado",
        duration:    "60 min",
        description: "Una experiencia diseñada exclusivamente para tus metas y necesidades. Trabajamos juntas para construir una práctica que te transforme de adentro hacia afuera.",
      },
      {
        num:         "03",
        name:        "Yoga Prenatal",
        duration:    "60 min",
        description: "Una práctica suave y amorosa para acompañar cada etapa del embarazo. Fortalece tu cuerpo, calma tu mente y conecta con el ser que crece en ti.\n\nNos preparamos física y mentalmente para el parto a través de movimiento consciente, ejercicios de respiración y técnicas que ayudan a crear más confianza, conexión y bienestar durante esta etapa.",
      },
      {
        num:         "04",
        name:        "Yoga Post Parto",
        duration:    "60 min",
        description: "Un regreso suave y consciente al movimiento después del parto. Recupera tu fuerza, reconecta con tu cuerpo y encuentra calma y estabilidad en esta nueva etapa.\n\nTrabajamos activación de core y piso pélvico con técnicas hipopresivas, respiración y movimiento funcional para apoyar la recuperación del cuerpo de forma segura y progresiva.",
      },
      {
        num:         "05",
        name:        "Yoga Facial",
        duration:    "Curso",
        description: "Una práctica suave que trabaja los músculos del rostro a través de masajes, ejercicios y respiración. Tonifica, relaja y revitaliza tu expresión natural.",
      },
    ],
  },

  cta: {
    badge:        "Primera clase gratuita",
    heading:      "Reserva tu",
    headingEm:    "clase de prueba",
    body:         "No necesitas experiencia previa. Solo un mat, ropa cómoda y las ganas de comenzar. Tu primera clase es completamente gratis.",
    primaryBtn:   "Reservar ahora",
    secondaryBtn: "Ver servicios",
    waMessage:    "¡Hola! Quiero hacer una clase de prueba gratuita. ¿Qué días y horarios tienes disponibles?",
  },

  yogaFacial: {
    label:      "Yoga Facial",
    heading:    "El gym natural",
    headingEm:  "de tu rostro",
    body:       "Es una técnica natural que tonifica y fortalece los músculos del rostro, cuello y escote, mejorando la firmeza, reduciendo la flacidez y atenuando arrugas. Al estimular la circulación sanguínea y oxigenar los tejidos, proporciona una apariencia más radiante, destensa la mandíbula y reduce el estrés, promoviendo un aspecto más joven y relajado.",
    cta:        "Quiero saber más",
    waMessage:  "¡Hola Andre! Me interesa saber más sobre el Yoga Facial.",
    benefits: [
      {
        title: "Rejuvenecimiento y Tonificación",
        desc:  "Fortalece y eleva los músculos faciales, lo que ayuda a combatir la flacidez, definir el óvalo facial y suavizar líneas finas.",
      },
      {
        title: "Piel Radiante y Saludable",
        desc:  "Al mejorar la circulación sanguínea, aumenta la oxigenación y el aporte de nutrientes, logrando una piel más tersa, brillante y saludable.",
      },
      {
        title: "Reducción de la Tensión",
        desc:  "Libera la tensión acumulada en zonas como la frente, mandíbula y entrecejo, lo que ayuda a disminuir la apariencia de cansancio y estrés en el rostro.",
      },
      {
        title: "Efecto Antiedad Natural",
        desc:  "Ayuda a prevenir y disminuir los signos de envejecimiento, especialmente útil a partir de los 30 años.",
      },
      {
        title: "Mejora la Circulación y el Drenaje",
        desc:  "Ayuda a reducir la retención de líquidos, bolsas y ojeras.",
      },
    ],
  },

  kobido: {
    label:      "Masaje Kobido",
    heading:    "El arte del",
    headingEm:  "lifting natural",
    body:       "Conocido como el «lifting facial japonés», es una técnica milenaria que rejuvenece el rostro de forma natural, reduciendo arrugas y líneas de expresión mediante estimulación profunda de músculos y tejidos. Sus beneficios incluyen el aumento de la producción de colágeno y elastina, la mejora de la circulación sanguínea, el drenaje linfático para reducir bolsas y ojeras, y una intensa relajación, ofreciendo resultados visibles desde la primera sesión.",
    imgAlt:     "Detalle de manos realizando masaje Kobido facial con aceites esenciales",
    cta:        "Reservar Sesión",
    ctaSub:     "Sesión individual · 120 min",
    ctaWhatsApp: "¿Tienes dudas? Hablamos por WhatsApp",
    waMessage:  "¡Hola Andre! Tengo algunas dudas sobre el masaje Kobido y me gustaría saber más antes de reservar mi sesión.",
    benefits: [
      {
        title: "Efecto Lifting Natural",
        desc:  "Reafirma los músculos faciales, redefiniendo el contorno facial sin cirugías.",
      },
      {
        title: "Rejuvenecimiento y Luminosidad",
        desc:  "Atenúa arrugas, líneas de expresión y combate la flacidez, aportando frescura y luminosidad a la piel.",
      },
      {
        title: "Mejora la Circulación y Producción de Colágeno",
        desc:  "Estimula la síntesis de colágeno y elastina, fortaleciendo la estructura dérmica y mejorando la textura de la piel.",
      },
      {
        title: "Drenaje Linfático y Detox",
        desc:  "Ayuda a eliminar toxinas y reduce la retención de líquidos, disminuyendo la hinchazón facial y las ojeras.",
      },
      {
        title: "Relajación y Antiestrés",
        desc:  "Alivia tensiones acumuladas en la mandíbula, cuello y cabeza, proporcionando un profundo bienestar físico y mental.",
      },
    ],
  },

  events: {
    label:       "Eventos Realizados",
    heading:     "Momentos que",
    headingEm:   "dejaron huella",
    statusBadge: "Realizado",
    items: [
      {
        type:        "Masterclass",
        day:         "16",
        date:        "Dic · 2023",
        year:        "2023",
        title:       "Masterclass de Yoga",
        description: "Desde la base, juntos crecemos.",
      },
      {
        type:        "Experiencia",
        day:         "14",
        date:        "Feb · 2026",
        year:        "2026",
        title:       "Sintonizando tu Sadhana",
        description: "Una experiencia consciente que integra yoga, hábitos, meditación y yoga facial, pensada para acompañarte en un espacio de presencia y conexión real contigo.",
      },
    ],
  },

  gallery: {
    label:     "Galería",
    heading:   "Encuentro de",
    headingEm: "Bienestar 2026",
    body:      "Imágenes del último evento realizado.",
    imgAlt:    (n: number) => `Galería Sadhana by Andre — foto ${n}`,
  },

  faq: {
    label:     "Preguntas Frecuentes",
    heading:   "Preguntas",
    headingEm: "Frecuentes",
    items: [
      {
        question: "¿Necesito experiencia previa para comenzar?",
        answer:   "No. Todas mis clases están diseñadas para recibir a personas de cualquier nivel. Si es tu primera vez, simplemente avísame antes de comenzar y adapto la práctica a ti.",
      },
      {
        question: "¿Qué debo llevar a mi primera clase?",
        answer:   "Ropa cómoda que permita movimiento, agua y ganas de estar presente. El mat es obligatorio — recuerda traer el tuyo.",
      },
      {
        question: "¿Cómo funciona el masaje Kobido?",
        answer:   "El Kobido es una sesión facial de 60 minutos donde trabajo con 47 movimientos de presión y percusión sobre los músculos del rostro. No usa inyecciones ni aparatos: solo manos expertas y aceites naturales.",
      },
      {
        question: "¿Las clases en línea son igual de efectivas?",
        answer:   "Sí. Las clases virtuales tienen la misma estructura y atención personalizada que las presenciales. Solo necesitas un espacio tranquilo, conexión estable y tu tapete.",
      },
      {
        question: "¿Con qué frecuencia debería practicar?",
        answer:   "Con dos veces por semana comienzas a sentir cambios reales. Lo más importante es la constancia, no la cantidad. Encontramos juntas el ritmo que encaja con tu vida.",
      },
      {
        question: "¿Puedo cancelar mi reserva?",
        answer:   "Sí, puedes cancelar hasta 12 horas antes de la clase sin ningún costo. Para cancelaciones tardías o ausencias, te pido avisarme por WhatsApp.",
      },
    ],
  },

  footer: {
    label:     "Conecta conmigo",
    heading:   "Sigamos",
    headingEm: "en contacto",
    imgAlt:    "Andre — Sadhana by Andre",
    copyright: (year: number) => `© ${year} Sadhana by Andre · Todos los derechos reservados`,
    tagline:   "Hecho con intención",
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/sadhanabyandre" },
      { label: "Facebook",  href: "https://www.facebook.com/profile.php?id=61584988191074&locale=es_LA" },
      { label: "TikTok",    href: "https://www.tiktok.com/@sadhanabyandre" },
      { label: "YouTube",   href: "https://www.youtube.com/@SadhanaByAndreC" },
    ],
  },

} as const;

export type Translations = typeof es;
