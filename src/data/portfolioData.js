export const portfolioData = {
  personalInfo: {
    name: "Edvin Leonel Cujcuj Ejcalón",
    firstName: "Edvin",
    lastName: "Cujcuj",
    title: "Desarrollo de Software Full-Stack",
    phrase: "Primero resuelve el problema, luego escribe el código.",
    phraseAuthor: "John Johnson",
    shortBio: "Me especializo en diseñar y construir Software Revolucionario, con un enfoque en la experiencia del usuario y la eficiencia del código. Mi objetivo es crear aplicaciones que no solo sean funcionales, sino también visualmente impactantes y altamente interactivas.",
    detailedBio: "Soy un estudiante con muchas ganas de aprender y crecer en el mundo del desarrollo de Software.",
    status: "Disponible",
    email: "edvincuej9@gmail.com",
    phone: "+502 33381140",
    location: "Guatemala",
    github: "https://github.com/ecujcuj-2024028",
    linkedin: "https://www.linkedin.com/in/edvin-leonel-cujcuj-ejcalón-42852241a/",
    cv: "/CV.pdf",
    computrabajo: "https://computrabajo.com",
    yearsCoding: "2+ Años Aprendiendo y Creando",
    currentFocus: "Perfeccionando arquitecturas React/Next.js y micro-interacciones avanzadas en CSS."
  },
  skills: {
    categories: [
      {
        id: "frontend",
        title: "Frontend Core",
        items: [
          { name: "React.js", level: "Alto", progress: 80 },
          { name: "JavaScript / ES6+", level: "Alto", progress: 80 },
          { name: "HTML5", level: "Experto", progress: 85 },
          { name: "CSS3", level: "Alto", progress: 80 },
          { name: "Tailwind CSS v4", level: "Alto", progress: 80 }
        ]
      },
      {
        id: "backend",
        title: "Backend & Bases de Datos",
        items: [
          { name: "Node.js / Express", level: "Alto", progress: 85 },
          { name: "SQL (MySQL/PostgreSQL)", level: "Medio", progress: 70 },
          { name: "MongoDB", level: "Medio", progress: 70 },
          { name: "Java / Spring Boot", level: "Medio", progress: 50 },
          { name: "C# / .Net", level: "Medio", progress: 65 },
          { name: "Docker & Contenedores", level: "Medio", progress: 80 }
        ]
      },
      {
        id: "tools",
        title: "Herramientas",
        items: [
          { name: "Git & GitHub", level: "Alto", progress: 85 },
          { name: "Figma (UI/UX Design)", level: "Medio", progress: 65 },
          { name: "Vite", level: "Alto", progress: 80 },
          { name: "Redux", level: "Medio", progress: 65 },
          { name: "Postman", level: "Alto", progress: 80 },
          { name: "Jira", level: "Medio", progress: 60 },
          { name: "Visual Studio Code", level: "Experto", progress: 95 }
        ]
      }
    ]
  },
  resume: {
    education: [
      {
        title: "Perito en Computación",
        institution: "Centro Educativo Kinal",
        period: "2024 - Presente",
        description: "Enfoque en programación orientada a objetos, bases de datos, estructuras de datos y metodologías ágiles de desarrollo de software."
      }, {
        title: "Certificado en Power BI y Análisis de Datos",
        institution: "EcoCredGT",
        period: "2026",
        description: "Curso sobre visualización de datos, creación de dashboards interactivos y análisis de grandes volúmenes de información utilizando Power BI."
      },
    ],
    experience: [
      {
        title: "Desarrollador jr (Pre-Prácticas Profesionales)",
        company: "Great Place to Develop",
        period: "Octubre 2025 - Noviembre 2025",
        description: "Desarrollo de Software Frontend y Backend Jr, integracion de APIs RESTful"
      },{
        title: "Desarrollador jr (Prácticas Profesionales)",
        company: "Great Place to Develop",
        period: "Agosto 2026 - Octubre 2026",
        description: "Desarrollo de Software Frontend y Backend Jr, integracion de APIs RESTful"
      },
    ]
  },
  projects: [
    {
      id: "restaurante",
      title: "Restaurant-Management-System",
      description: "Un sistema de gestión para restaurantes con funcionalidades de reserva, gestión de menú y control de inventario.",
      skillsLearned: ["Desarrollo de aplicaciones web con React", "Integración de APIs RESTful", "React-Native", "Diseño responsivo con Tailwind CSS"],
      repoUrl: "https://github.com/ecujcuj-2024028/Restaurant-Management-System.git",
      demoUrl: "https://restaurant-management-system-fronte-psi.vercel.app/login",
      displayed: true,
      images: {
        ui1: "https://res.cloudinary.com/dscti2jte/image/upload/v1782596181/Captura_de_pantalla_2026-06-27_153314_m6lo1w.png",
        ui2: "https://res.cloudinary.com/dscti2jte/image/upload/v1782596181/Captura_de_pantalla_2026-06-27_153327_ssaain.png",
        ui3: "https://res.cloudinary.com/dscti2jte/image/upload/v1782600931/WhatsApp_Image_2026-06-27_at_4.53.53_PM_kypnw1.jpg",
        ui3Vertical: "https://res.cloudinary.com/dscti2jte/image/upload/v1782600931/WhatsApp_Image_2026-06-27_at_4.53.53_PM_kypnw1.jpg"
      }
    },{
      id: "notas",
      title: "Notas",
      description: "Una aplicación para gestionar notas con funcionalidades de Crear, Editar, Buscar y Eliminar, desplegado con Render para Backend y Netlify para Frontend.",
      skillsLearned: ["React", "JavaScript", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Despliegue en Render y Netlify"],
      repoUrl: "https://github.com/ecujcuj-2024028/NotasApp.git",
      demoUrl: "https://appnotasfrontend.netlify.app",
      displayed: true,
      images: {
        ui1: "https://res.cloudinary.com/dscti2jte/image/upload/v1783232484/Captura_de_pantalla_2026-07-01_224920_ploryq.png",
        ui2: "https://res.cloudinary.com/dscti2jte/image/upload/v1783232484/Captura_de_pantalla_2026-07-01_224902_jwlvls.png",
        ui3: "",
        ui3Vertical: ""
      }
    },{
      id: "Tienda",
      title: "Tienda Online",
      description: "Un sistema de gestión para tiendas con funcionalidades de inventario, ventas y gestión de clientes.",
      skillsLearned: ["Desarrollo con C#", "Integración de APIs RESTful", "ASP.NET Core", "Diseño con bootstrap"],
      repoUrl: "https://github.com/ecujcuj-2024028/Tienda.git",
      demoUrl: "https://tienda-online-demo.netlify.app",
      displayed: false,
      images: {
        ui1: "https://res.cloudinary.com/dscti2jte/image/upload/v1782603505/Captura_de_pantalla_2026-06-27_173557_jkx96f.png",
        ui2: "https://res.cloudinary.com/dscti2jte/image/upload/v1782603504/Captura_de_pantalla_2026-06-27_172800_unkqaq.png",
        ui3: "",
        ui3Vertical: ""
      }
    },{
      id: "IADJ",
      title: "Gemini Radio - YouTube Music DJ",
      description: "Este proyecto es un orquestador e interfaz interactiva para un DJ de radio impulsado por Inteligencia Artificial (Gemini a través de OpenRouter) y síntesis de voz (ElevenLabs). Te permite reproducir música de YouTube Music, interactuar con un DJ por texto o voz, gestionar listas de reproducción, cola de reproducción, historial y me gustas/no me gustas en tiempo real.",
      skillsLearned: ["React", "Inteligencia Artificial", "Síntesis de Voz", "Integración de APIs RESTful", "Node.Js"],
      repoUrl: "https://github.com/ecujcuj-2024028/IADJ.git",
      demoUrl: "https://IADJ-demo.netlify.app",
      displayed: false,
      images: {
        ui1: "https://res.cloudinary.com/dscti2jte/image/upload/v1782604690/Captura_de_pantalla_2026-06-27_175741_fmr23k.png",
        ui2: "https://res.cloudinary.com/dscti2jte/image/upload/v1782604690/Captura_de_pantalla_2026-06-27_175804_cyoref.png",
        ui3: "",
        ui3Vertical: ""
      }
    }
  ]
};
