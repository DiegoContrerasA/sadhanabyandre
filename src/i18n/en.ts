export const en = {

  _meta: {
    title:       "Sadhana by Andre | Yoga in Medellín, Envigado & Colombia",
    description: "Yoga classes in Envigado (Medellín area) with Andre, certified instructor. Group, prenatal, postpartum and facial yoga. In-person & online. 500+ happy students.",
    locale:      "en_US",
    lang:        "en",
  },

  nav: {
    links: [
      { label: "About me",  href: "#sobre-mi"  },
      { label: "Services",  href: "#servicios"  },
      { label: "Kobido",    href: "#kobido"     },
      { label: "Schedule",  href: "#horarios"   },
      { label: "Faq",       href: "#faq"        },
    ],
    openMenu:       "Open menu",
    closeMenu:      "Close menu",
    ariaNav:        "Main navigation",
    ariaNavMobile:  "Navigation menu",
  },

  hero: {
    logoAlt:     "Sadhana by Andre",
    byline:      "by andre",
    tagline1:    "Breathe · Stretch",
    tagline2:    "Strengthen your inner self",
    cta:         "Book a class",
    waMessage:   "Hi Andre! I'd like to learn more about your classes and services 😊",
    stats: [
      { value: "+7", label: "years of experience" },
      { value: "+5", label: "international certifications" },
    ],
  },

  about: {
    label:      "About Me",
    heading:    "The path toward",
    headingEm:  "your balance",
    imgAlt:     "Andre, yoga instructor",
    p1: "Sadhana was born from my own journey of searching, listening, and reconnecting with the body.",
    p2: "Over 12 years of practice, I came to understand that wellbeing is not about forcing, correcting, or demanding — it's about inhabiting the body with presence, respect, and honesty.",
    p3: "My yoga journey began through movement, and over time it expanded into deeper self-care practices, especially accompanying feminine processes, transformation, and a return to the essential. Prenatal and postpartum yoga, facial yoga, and Kobido massage arrived as a natural extension of this listening — integrating conscious touch as a form of healing and ritual.",
    p4: "Today, Sadhana is a space for real bodies and real processes. A place where movement, breath, and self-care become tools to return to yourself, honor your rhythm, and cultivate a more loving relationship with your body.",
    quote: "My philosophy is simple: every body has its own wisdom. My work is to help you listen to it.",
  },

  positions: {
    label:      "The Practice",
    heading:    "Every posture,",
    headingEm:  "a conversation",
    poses: [
      { alt: "Sirsasana – inverted posture",      label: "Strength"      },
      { alt: "Lateral stretch outdoors",           label: "Flexibility"   },
      { alt: "Lateral stretch indoors",            label: "Restoration"   },
    ],
  },

  schedule: {
    label:         "Schedule",
    heading:       "Group",
    headingEm:     "classes",
    classLabel:    "Class",
    reserveBtn:    "Book",
    tagPresencial: "In-person",
    tagOnline:     "Online",
    note:          "* Limited spots — booking in advance is recommended.",
    waMessage:     (name: string, day: string, time: string) =>
      `Hi! I'd like to reserve my spot for the ${name} class on ${day} at ${time}.`,
    items: [
      {
        day:         "Tuesday",
        time:        "7:00 am",
        online:      true,
        name:        "Sequence Yoga",
        description: "Also known as ladder yoga. In this class we build a kind of choreography through sequences of poses repeated several times, helping improve flexibility, coordination, endurance, and body memory while gaining confidence in movement.",
      },
      {
        day:         "Thursday",
        time:        "6:15 pm",
        online:      false,
        name:        "Multi-level Yoga",
        description: "A vinyasa class designed to adapt to everyone who steps on the mat. Each practice can look different based on your body, level, and needs — creating a safe, loving, and challenging space all at once.",
      }
    ],
  },

  services: {
    label:     "Services",
    heading:   "Find",
    headingEm: "your practice",
    imgAlt:    "Andre yoga instructor in an inverted posture",
    items: [
      {
        num:         "01",
        name:        "Group Yoga",
        duration:    "60 min",
        description: "Experience the collective energy of shared practice. A supportive space where each person moves at their own pace, with close guidance and genuine attention.",
      },
      {
        num:         "02",
        name:        "Private Yoga",
        duration:    "60 min",
        description: "An experience designed exclusively for your goals and needs. We work together to build a practice that transforms you from the inside out.",
      },
      {
        num:         "03",
        name:        "Prenatal Yoga",
        duration:    "60 min",
        description: "A gentle, loving practice to accompany every stage of pregnancy. Strengthen your body, calm your mind, and connect with the life growing within you.\n\nWe prepare physically and mentally for birth through conscious movement, breathing exercises, and techniques that help build confidence, connection, and wellbeing throughout this journey.",
      },
      {
        num:         "04",
        name:        "Postpartum Yoga",
        duration:    "60 min",
        description: "A gentle and conscious return to movement after birth. Recover your strength, reconnect with your body, and find calm and stability in this new chapter.\n\nWe work on core and pelvic floor activation using hypopressive techniques, breathing, and functional movement to safely and progressively support your body's recovery.",
      },
      {
        num:         "05",
        name:        "Facial Yoga",
        duration:    "Course",
        description: "A gentle practice that works the muscles of the face through massage, exercises, and breathing. Tone, relax, and revitalize your natural expression.",
      },
    ],
  },

  cta: {
    badge:        "First class free",
    heading:      "Book your",
    headingEm:    "trial class",
    body:         "No prior experience needed. Just a mat, comfortable clothes, and the desire to begin. Your first class is completely free.",
    primaryBtn:   "Book now",
    secondaryBtn: "View services",
    waMessage:    "Hi! I'd like to book a free trial class. What days and times do you have available?",
  },

  yogaFacial: {
    label:      "Facial Yoga",
    heading:    "The natural gym",
    headingEm:  "for your face",
    body:       "A natural technique that tones and strengthens the muscles of the face, neck, and décolleté — improving firmness, reducing sagging, and softening wrinkles. By stimulating blood circulation and oxygenating the tissues, it delivers a more radiant appearance, releases jaw tension, and reduces stress, promoting a younger and more relaxed look.",
    cta:        "I want to know more",
    waMessage:  "Hi Andre! I'm interested in learning more about Facial Yoga.",
    benefits: [
      {
        title: "Rejuvenation and Toning",
        desc:  "Strengthens and lifts facial muscles, helping combat sagging, define the oval of the face, and smooth fine lines.",
      },
      {
        title: "Radiant and Healthy Skin",
        desc:  "By improving blood circulation, it increases oxygenation and nutrient supply, resulting in firmer, brighter, and healthier skin.",
      },
      {
        title: "Tension Relief",
        desc:  "Releases accumulated tension in areas such as the forehead, jaw, and brow, helping reduce the appearance of fatigue and stress on the face.",
      },
      {
        title: "Natural Anti-Aging Effect",
        desc:  "Helps prevent and reduce signs of aging — especially beneficial from your 30s onward.",
      },
      {
        title: "Improved Circulation and Drainage",
        desc:  "Helps reduce fluid retention, puffiness, and dark circles.",
      },
    ],
  },

  kobido: {
    label:      "Kobido Massage",
    heading:    "The art of",
    headingEm:  "natural lifting",
    body:       "Known as the «Japanese facial lifting», it is an ancient technique that rejuvenates the face naturally, reducing wrinkles and expression lines through deep stimulation of muscles and tissues. Its benefits include increased collagen and elastin production, improved blood circulation, lymphatic drainage to reduce puffiness and dark circles, and deep relaxation — with visible results from the very first session.",
    imgAlt:     "Close-up of hands performing Kobido facial massage with essential oils",
    cta:        "Book a Session",
    ctaSub:     "Individual session · 120 min",
    ctaWhatsApp: "Have questions? Let's chat on WhatsApp",
    waMessage:  "Hi Andre! I have some questions about the Kobido massage and would like to know more before booking my session.",
    benefits: [
      {
        title: "Natural Lifting Effect",
        desc:  "Firms facial muscles, redefining the facial contour without surgery.",
      },
      {
        title: "Rejuvenation and Radiance",
        desc:  "Softens wrinkles and expression lines while combating sagging — delivering freshness and luminosity to the skin.",
      },
      {
        title: "Improved Circulation and Collagen Production",
        desc:  "Stimulates collagen and elastin synthesis, strengthening the skin's dermal structure and improving texture.",
      },
      {
        title: "Lymphatic Drainage and Detox",
        desc:  "Helps eliminate toxins and reduces fluid retention, diminishing facial puffiness and dark circles.",
      },
      {
        title: "Relaxation and Stress Relief",
        desc:  "Relieves tension accumulated in the jaw, neck, and head, providing deep physical and mental wellbeing.",
      },
    ],
  },

  events: {
    label:       "Past Events",
    heading:     "Moments that",
    headingEm:   "left a mark",
    statusBadge: "Completed",
    items: [
      {
        type:        "Masterclass",
        day:         "16",
        date:        "Dec · 2023",
        year:        "2023",
        title:       "Yoga Masterclass",
        description: "From the ground up, we grow together.",
      },
      {
        type:        "Experience",
        day:         "14",
        date:        "Feb · 2026",
        year:        "2026",
        title:       "Tuning Your Sadhana",
        description: "A conscious experience integrating yoga, habits, meditation, and facial yoga — designed to accompany you in a space of presence and genuine connection with yourself.",
      },
    ],
  },

  gallery: {
    label:     "Gallery",
    heading:   "Wellness",
    headingEm: "Gathering 2026",
    body:      "Photos from our most recent event.",
    imgAlt:    (n: number) => `Sadhana by Andre Gallery — photo ${n}`,
  },

  faq: {
    label:     "Frequently Asked Questions",
    heading:   "Frequently",
    headingEm: "Asked Questions",
    items: [
      {
        question: "Do I need prior experience to start?",
        answer:   "No. All my classes are designed to welcome people of any level. If it's your first time, just let me know before we begin and I'll adapt the practice to you.",
      },
      {
        question: "What should I bring to my first class?",
        answer:   "Comfortable clothes that allow movement, water, and an open mind. A mat is required — remember to bring yours.",
      },
      {
        question: "How does the Kobido massage work?",
        answer:   "Kobido is a 60-minute facial session where I work with 47 pressure and percussion movements on the muscles of the face. No injections or devices — just expert hands and natural oils.",
      },
      {
        question: "Are online classes just as effective?",
        answer:   "Yes. Virtual classes have the same structure and personalized attention as in-person ones. All you need is a quiet space, a stable connection, and your mat.",
      },
      {
        question: "How often should I practice?",
        answer:   "Twice a week is enough to start feeling real change. Consistency matters more than quantity. Together we'll find the rhythm that fits your life.",
      },
      {
        question: "Can I cancel my booking?",
        answer:   "Yes, you can cancel up to 12 hours before the class at no cost. For late cancellations or absences, please let me know via WhatsApp.",
      },
    ],
  },

  footer: {
    label:     "Connect with me",
    heading:   "Let's stay",
    headingEm: "in touch",
    imgAlt:    "Andre — Sadhana by Andre",
    copyright: (year: number) => `© ${year} Sadhana by Andre · All rights reserved`,
    tagline:   "Made with intention",
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/sadhanabyandre" },
      { label: "Facebook",  href: "https://www.facebook.com/profile.php?id=61584988191074&locale=es_LA" },
      { label: "TikTok",    href: "https://www.tiktok.com/@sadhanabyandre" },
      { label: "YouTube",   href: "https://www.youtube.com/@SadhanaByAndreC" },
    ],
  },

};
