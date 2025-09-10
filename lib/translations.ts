export type Language = 'en' | 'es'

export interface Translations {
  // Header
  title: string
  subtitle: string
  description: string
  
  // User Flow
  registerInterestTitle: string
  priorityAccess: string
  beFirstToExperience: string
  
  // Customer
  registerAsCustomer: string
  customerDescription: string
  customerFeatures: {
    residential: string
    payUpfront: string
    trackEta: string
    priorityAccess: string
  }
  
  // Cleaner
  registerAsGenie: string
  genieDescription: string
  genieFeatures: {
    flexibleScheduling: string
    seePayUpfront: string
    backgroundCheck: string
    priorityAccess: string
  }
  
  // Sections
  whatSheeniIs: string
  whatSheeniDescription: string
  magicalQuote: string
  
  businessModel: string
  customers: string
  genies: string
  revenue: string
  
  // Business Model Details
  customerFeatures: {
    bookExactTime: string
    payUpfront: string
    uploadPhotos: string
    trackEta: string
  }
  genieFeatures: {
    getNotified: string
    seePayUpfront: string
    claimJobs: string
    flexibleScheduling: string
    backgroundCheck: string
  }
  revenueFeatures: {
    platformFee: string
    subscriptions: string
    premiumProfiles: string
    priorityMatching: string
  }
  
  whyChooseSheeni: string
  forCustomers: string
  forGenies: string
  forSheeni: string
  
  // Why Choose Sheeni Details
  whyChooseDetails: {
    forCustomersDesc: string
    forGeniesDesc: string
    forSheeniDesc: string
  }
  
  magicPromise: string
  registerInterestDesc: string
  under60Minutes: string
  earlyRegistrants: string
  backgroundCheckDesc: string
  
  // Magic Promise Details
  magicPromiseDetails: {
    registerInterestDesc: string
    under60Minutes: string
    earlyRegistrants: string
    backgroundCheckDesc: string
    magicalQuote1: string
    magicalQuote2: string
  }
  
  // Form labels
  fullName: string
  emailAddress: string
  phoneNumber: string
  location: string
  serviceType: string
  additionalMessage: string
  yearsExperience: string
  servicesYouOffer: string
  availability: string
  additionalInfo: string
  
  // Service types
  serviceTypes: {
    residential: string
    commercial: string
    airbnb: string
    deep: string
    moveInOut: string
    postConstruction: string
    other: string
  }
  
  // Experience levels
  experienceLevels: {
    '0-1': string
    '1-3': string
    '3-5': string
    '5+': string
  }
  
  // Availability options
  availabilityOptions: {
    weekdays: string
    weekends: string
    flexible: string
    fullTime: string
    partTime: string
  }
  
  // Service options for cleaners
  serviceOptions: string[]
  
  // Buttons
  registerInterest: string
  registeringInterest: string
  backToOptions: string
  
  // Success messages
  successMessage: string
}

export const translations: Record<Language, Translations> = {
  en: {
    title: "Sheeni: The Cleaning Genie",
    subtitle: "✨ Your Wish is Our Command ✨",
    description: "Think \"DoorDash for cleaning\" — but with magic! Request a quick clean and nearby Genies will grant your cleaning wishes instantly. Register your interest now for priority access when we launch in your city!",
    
    registerInterestTitle: "Register Your Interest",
    priorityAccess: "🌟 Get Priority Access When We Launch! 🌟",
    beFirstToExperience: "Be among the first to experience the magic of Sheeni in your city",
    
    registerAsCustomer: "✨ Register as a Customer ✨",
    customerDescription: "Ready to make your cleaning wishes come true? Register your interest and be first in line when we launch in your area!",
    customerFeatures: {
      residential: "🏠 Residential & Airbnb cleaning",
      payUpfront: "💳 Pay upfront with tips",
      trackEta: "📍 Track Genie ETA",
      priorityAccess: "⭐ Priority access when we launch"
    },
    
    registerAsGenie: "🧞‍♀️ Register as a Genie 🧞‍♂️",
    genieDescription: "Ready to grant cleaning wishes? Join our network of verified Genies and earn money on your own schedule!",
    genieFeatures: {
      flexibleScheduling: "⏰ Flexible scheduling",
      seePayUpfront: "💰 See pay + tips upfront",
      backgroundCheck: "🔒 Background check required",
      priorityAccess: "⭐ Priority access when we launch"
    },
    
    whatSheeniIs: "What Sheeni Is",
    whatSheeniDescription: "Sheeni is a cleaning-on-demand platform — customers request the time they need and nearby cleaners (Genies) can accept jobs instantly. Today, Sheeni is a landing page to collect interest and validate demand before the full app launches.",
    magicalQuote: "🧞‍♀️ \"Abracadabra, your mess is gone!\" 🧞‍♂️",
    
    businessModel: "Business Model",
    customers: "Customers",
    genies: "Cleaners (Genies)",
    revenue: "Revenue",
    
    customerFeatures: {
      bookExactTime: "Book exact time (1 hour, 2 hours, or longer)",
      payUpfront: "Pay for time + tip upfront",
      uploadPhotos: "Upload photos and describe the job",
      trackEta: "Track ETA & communicate in-app (when live)"
    },
    genieFeatures: {
      getNotified: "Get notified of new jobs nearby",
      seePayUpfront: "See pay + tip upfront before accepting",
      claimJobs: "Claim jobs Instacart‑style (first come, first serve)",
      flexibleScheduling: "Flexible scheduling and transparent pay",
      backgroundCheck: "Background check required before approval"
    },
    revenueFeatures: {
      platformFee: "Platform fee/service charge per booking",
      subscriptions: "Future: subscriptions for recurring cleans",
      premiumProfiles: "Premium cleaner profiles",
      priorityMatching: "Priority matching"
    },
    
    whyChooseSheeni: "Why Choose Sheeni?",
    forCustomers: "For customers",
    forGenies: "For cleaners",
    forSheeni: "For Sheeni",
    
    whyChooseDetails: {
      forCustomersDesc: "Convenience for small or focused cleans that don't fit traditional services — as easy as food delivery.",
      forGeniesDesc: "Empowerment: flexible work, transparent pay, ability to pick jobs, safety via verified backgrounds.",
      forSheeniDesc: "Solves a common, repeatable problem (cleaning) with a scalable, tech-enabled marketplace."
    },
    
    magicPromise: "The Magic Promise",
    registerInterestDesc: "✨ Register your interest — be the first to experience the magic of Sheeni in your area!",
    under60Minutes: "Our goal is under 60 minutes from wish to Genie on the way — not guaranteed at first, but you'll always get realistic ETAs.",
    earlyRegistrants: "⭐ Early registrants get first priority access when the app launches to create accounts and book jobs.",
    backgroundCheckDesc: "Genies who apply will undergo a background check before approval — ensuring safety and trust for everyone.",
    
    magicPromiseDetails: {
      registerInterestDesc: "✨ Register your interest — be the first to experience the magic of Sheeni in your area!",
      under60Minutes: "Our goal is under 60 minutes from wish to Genie on the way — not guaranteed at first, but you'll always get realistic ETAs.",
      earlyRegistrants: "⭐ Early registrants get first priority access when the app launches to create accounts and book jobs.",
      backgroundCheckDesc: "Genies who apply will undergo a background check before approval — ensuring safety and trust for everyone.",
      magicalQuote1: "🧞‍♀️ \"Poof! Your cleaning problems disappear!\" 🧞‍♂️",
      magicalQuote2: "🎭 \"The cleaning genie that grants your every wish!\""
    },
    
    fullName: "Full Name",
    emailAddress: "Email Address",
    phoneNumber: "Phone Number",
    location: "Location",
    serviceType: "Service Type",
    additionalMessage: "Additional Message",
    yearsExperience: "Years of Experience",
    servicesYouOffer: "Services You Offer",
    availability: "Availability",
    additionalInfo: "Additional Information",
    
    serviceTypes: {
      residential: "Residential Cleaning",
      commercial: "Commercial Cleaning",
      airbnb: "Airbnb/Vacation Rentals",
      deep: "Deep Cleaning",
      moveInOut: "Move-in/Move-out",
      postConstruction: "Post-Construction",
      other: "Other"
    },
    
    experienceLevels: {
      '0-1': "0-1 years",
      '1-3': "1-3 years",
      '3-5': "3-5 years",
      '5+': "5+ years"
    },
    
    availabilityOptions: {
      weekdays: "Weekdays only",
      weekends: "Weekends only",
      flexible: "Flexible schedule",
      fullTime: "Full-time",
      partTime: "Part-time"
    },
    
    serviceOptions: [
      "Residential Cleaning",
      "Commercial Cleaning",
      "Deep Cleaning",
      "Move-in/Move-out",
      "Post-Construction",
      "Window Cleaning",
      "Carpet Cleaning",
      "Office Cleaning"
    ],
    
    registerInterest: "Register Interest",
    registeringInterest: "Registering Interest...",
    backToOptions: "Back to options",
    
    successMessage: "✅ Successfully joined the waitlist!"
  },
  
  es: {
    title: "Sheeni: El Genio de la Limpieza",
    subtitle: "✨ Tu Deseo es Nuestra Orden ✨",
    description: "Piensa en \"DoorDash para limpieza\" — ¡pero con magia! Solicita una limpieza rápida y los Genios cercanos concederán tus deseos de limpieza al instante. ¡Registra tu interés ahora para acceso prioritario cuando lancemos en tu ciudad!",
    
    registerInterestTitle: "Registra Tu Interés",
    priorityAccess: "🌟 ¡Obtén Acceso Prioritario Cuando Lancemos! 🌟",
    beFirstToExperience: "Sé de los primeros en experimentar la magia de Sheeni en tu ciudad",
    
    registerAsCustomer: "✨ Regístrate como Cliente ✨",
    customerDescription: "¿Listo para hacer realidad tus deseos de limpieza? ¡Registra tu interés y sé el primero en la fila cuando lancemos en tu área!",
    customerFeatures: {
      residential: "🏠 Limpieza residencial y Airbnb",
      payUpfront: "💳 Paga por adelantado con propinas",
      trackEta: "📍 Rastrea la ETA del Genio",
      priorityAccess: "⭐ Acceso prioritario cuando lancemos"
    },
    
    registerAsGenie: "🧞‍♀️ Regístrate como Genio 🧞‍♂️",
    genieDescription: "¿Listo para conceder deseos de limpieza? ¡Únete a nuestra red de Genios verificados y gana dinero en tu propio horario!",
    genieFeatures: {
      flexibleScheduling: "⏰ Horario flexible",
      seePayUpfront: "💰 Ve pago + propinas por adelantado",
      backgroundCheck: "🔒 Verificación de antecedentes requerida",
      priorityAccess: "⭐ Acceso prioritario cuando lancemos"
    },
    
    whatSheeniIs: "Qué es Sheeni",
    whatSheeniDescription: "Sheeni es una plataforma de limpieza bajo demanda — los clientes solicitan el tiempo que necesitan y los limpiadores cercanos (Genios) pueden aceptar trabajos al instante. Hoy, Sheeni es una página de aterrizaje para recopilar interés y validar la demanda antes de que se lance la aplicación completa.",
    magicalQuote: "🧞‍♀️ \"¡Abracadabra, tu desorden desapareció!\" 🧞‍♂️",
    
    businessModel: "Modelo de Negocio",
    customers: "Clientes",
    genies: "Limpiadores (Genios)",
    revenue: "Ingresos",
    
    customerFeatures: {
      bookExactTime: "Reserva tiempo exacto (1 hora, 2 horas, o más)",
      payUpfront: "Paga por tiempo + propina por adelantado",
      uploadPhotos: "Sube fotos y describe el trabajo",
      trackEta: "Rastrea ETA y comunícate en la app (cuando esté activa)"
    },
    genieFeatures: {
      getNotified: "Recibe notificaciones de trabajos cercanos",
      seePayUpfront: "Ve pago + propina por adelantado antes de aceptar",
      claimJobs: "Reclama trabajos estilo Instacart (primero en llegar, primero en ser servido)",
      flexibleScheduling: "Horario flexible y pago transparente",
      backgroundCheck: "Verificación de antecedentes requerida antes de aprobación"
    },
    revenueFeatures: {
      platformFee: "Tarifa de plataforma/cargo por servicio por reserva",
      subscriptions: "Futuro: suscripciones para limpiezas recurrentes",
      premiumProfiles: "Perfiles premium de limpiadores",
      priorityMatching: "Emparejamiento prioritario"
    },
    
    whyChooseSheeni: "¿Por Qué Elegir Sheeni?",
    forCustomers: "Para clientes",
    forGenies: "Para limpiadores",
    forSheeni: "Para Sheeni",
    
    whyChooseDetails: {
      forCustomersDesc: "Conveniencia para limpiezas pequeñas o enfocadas que no encajan en servicios tradicionales — tan fácil como entrega de comida.",
      forGeniesDesc: "Empoderamiento: trabajo flexible, pago transparente, capacidad de elegir trabajos, seguridad a través de antecedentes verificados.",
      forSheeniDesc: "Resuelve un problema común y repetible (limpieza) con un mercado escalable y habilitado por tecnología."
    },
    
    magicPromise: "La Promesa Mágica",
    registerInterestDesc: "✨ Registra tu interés — ¡sé el primero en experimentar la magia de Sheeni en tu área!",
    under60Minutes: "Nuestro objetivo es menos de 60 minutos desde el deseo hasta que el Genio esté en camino — no garantizado al principio, pero siempre obtendrás ETAs realistas.",
    earlyRegistrants: "⭐ Los primeros registrantes obtienen acceso prioritario cuando se lance la aplicación para crear cuentas y reservar trabajos.",
    backgroundCheckDesc: "Los Genios que se postulen pasarán por una verificación de antecedentes antes de la aprobación — asegurando seguridad y confianza para todos.",
    
    magicPromiseDetails: {
      registerInterestDesc: "✨ Registra tu interés — ¡sé el primero en experimentar la magia de Sheeni en tu área!",
      under60Minutes: "Nuestro objetivo es menos de 60 minutos desde el deseo hasta que el Genio esté en camino — no garantizado al principio, pero siempre obtendrás ETAs realistas.",
      earlyRegistrants: "⭐ Los primeros registrantes obtienen acceso prioritario cuando se lance la aplicación para crear cuentas y reservar trabajos.",
      backgroundCheckDesc: "Los Genios que se postulen pasarán por una verificación de antecedentes antes de la aprobación — asegurando seguridad y confianza para todos.",
      magicalQuote1: "🧞‍♀️ \"¡Puf! ¡Tus problemas de limpieza desaparecen!\" 🧞‍♂️",
      magicalQuote2: "🎭 \"¡El genio de la limpieza que concede todos tus deseos!\""
    },
    
    fullName: "Nombre Completo",
    emailAddress: "Dirección de Email",
    phoneNumber: "Número de Teléfono",
    location: "Ubicación",
    serviceType: "Tipo de Servicio",
    additionalMessage: "Mensaje Adicional",
    yearsExperience: "Años de Experiencia",
    servicesYouOffer: "Servicios que Ofreces",
    availability: "Disponibilidad",
    additionalInfo: "Información Adicional",
    
    serviceTypes: {
      residential: "Limpieza Residencial",
      commercial: "Limpieza Comercial",
      airbnb: "Airbnb/Alquileres Vacacionales",
      deep: "Limpieza Profunda",
      moveInOut: "Mudanza Entrada/Salida",
      postConstruction: "Post-Construcción",
      other: "Otro"
    },
    
    experienceLevels: {
      '0-1': "0-1 años",
      '1-3': "1-3 años",
      '3-5': "3-5 años",
      '5+': "5+ años"
    },
    
    availabilityOptions: {
      weekdays: "Solo días de semana",
      weekends: "Solo fines de semana",
      flexible: "Horario flexible",
      fullTime: "Tiempo completo",
      partTime: "Medio tiempo"
    },
    
    serviceOptions: [
      "Limpieza Residencial",
      "Limpieza Comercial",
      "Limpieza Profunda",
      "Mudanza Entrada/Salida",
      "Post-Construcción",
      "Limpieza de Ventanas",
      "Limpieza de Alfombras",
      "Limpieza de Oficinas"
    ],
    
    registerInterest: "Registrar Interés",
    registeringInterest: "Registrando Interés...",
    backToOptions: "Volver a opciones",
    
    successMessage: "✅ ¡Te has unido exitosamente a la lista de espera!"
  }
}
