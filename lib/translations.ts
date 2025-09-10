export type Language = 'en' | 'es'

export interface Translations {
  // Header
  title: string
  subtitle: string
  description: string
  
  // User Flow
  registerInterest: string
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
  
  whyChooseSheeni: string
  forCustomers: string
  forGenies: string
  forSheeni: string
  
  magicPromise: string
  registerInterestDesc: string
  under60Minutes: string
  earlyRegistrants: string
  backgroundCheckDesc: string
  
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
    
    registerInterest: "Register Your Interest",
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
    
    whyChooseSheeni: "Why Choose Sheeni?",
    forCustomers: "For customers",
    forGenies: "For cleaners",
    forSheeni: "For Sheeni",
    
    magicPromise: "The Magic Promise",
    registerInterestDesc: "✨ Register your interest — be the first to experience the magic of Sheeni in your area!",
    under60Minutes: "Our goal is under 60 minutes from wish to Genie on the way — not guaranteed at first, but you'll always get realistic ETAs.",
    earlyRegistrants: "⭐ Early registrants get first priority access when the app launches to create accounts and book jobs.",
    backgroundCheckDesc: "Genies who apply will undergo a background check before approval — ensuring safety and trust for everyone.",
    
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
    
    registerInterest: "Registra Tu Interés",
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
    
    whyChooseSheeni: "¿Por Qué Elegir Sheeni?",
    forCustomers: "Para clientes",
    forGenies: "Para limpiadores",
    forSheeni: "Para Sheeni",
    
    magicPromise: "La Promesa Mágica",
    registerInterestDesc: "✨ Registra tu interés — ¡sé el primero en experimentar la magia de Sheeni en tu área!",
    under60Minutes: "Nuestro objetivo es menos de 60 minutos desde el deseo hasta que el Genio esté en camino — no garantizado al principio, pero siempre obtendrás ETAs realistas.",
    earlyRegistrants: "⭐ Los primeros registrantes obtienen acceso prioritario cuando se lance la aplicación para crear cuentas y reservar trabajos.",
    backgroundCheckDesc: "Los Genios que se postulen pasarán por una verificación de antecedentes antes de la aprobación — asegurando seguridad y confianza para todos.",
    
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
