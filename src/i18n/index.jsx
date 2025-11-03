import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          // Navigation
          nav: {
            home: 'Home',
            about: 'About',
            skills: 'Skills',
            projects: 'Projects',
            contact: 'Contact',
            services: 'Services'
          },
          
          // Hero Section
          hero: {
            title: "Hi, I'm",
            name: "Muhammad Fuzail",
            roles: [
              'MERN Stack Developer',
              'Frontend Specialist', 
              'Backend Engineer',
              'Visual Content Creator',
              'YouTube & Reels Editor',
              'Creative Problem Solver'
            ],
            description: "I build blazing-fast web applications with React, Node.js, MongoDB, and Firebase — while also creating compelling visual content including YouTube videos, Reels, Shorts, and social media edits featuring engaging storytelling, smooth transitions, and pacing that keeps audiences captivated.",
            hireMe: "Let's Work Together",
            viewWork: "View My Work"
          },
          
          // About Section
          about: {
            title: "About Me",
            whoIAm: "Who I Am",
            intro: "I'm {{name}} — a Full-Stack MERN Developer and Visual Content Specialist dedicated to helping brands, startups, and creators build high-performance web applications and scroll-stopping content that delivers measurable results.",
            description: "With deep expertise in React, Node.js, Express, MongoDB, Firebase, Supabase, and Tailwind CSS, I develop fast, secure, and modern applications featuring clean interfaces and seamless user experiences.",
            additional: "I also bring visual stories to life through professional video editing for YouTube and social media — blending cinematic transitions, strategic pacing, and creative flair to capture attention and strengthen your brand identity.",
            features: {
              speed: {
                title: "Speed & Performance",
                description: "Optimized applications using lazy loading, code splitting, and modern caching techniques."
              },
              fullstack: {
                title: "Full-Stack Expertise", 
                description: "End-to-end development of secure, scalable, and visually stunning web applications."
              },
              creative: {
                title: "Creative Problem-Solving",
                description: "Combining technical logic with creative thinking to deliver solutions that drive real impact."
              },
              cloud: {
                title: "Cloud & Firebase",
                description: "Seamless integration with Firebase, AWS, and modern cloud platforms for scalable solutions."
              }
            }
          },
          
          // Services Section
          services: {
            title: "My Services",
            description: "I provide comprehensive digital solutions to help your business thrive online. From development to content creation, I've got you covered.",
            webDev: {
              title: "Web Development",
              description: "Custom, responsive websites built with React, Next.js, and modern frameworks for optimal performance and user experience.",
              items: ["React/Next.js", "Tailwind CSS", "Redux", "TypeScript"]
            },
            backend: {
              title: "Backend Services",
              description: "Scalable backend solutions using Node.js, Express, and database integration for robust web applications.",
              items: ["Node.js", "Express", "MongoDB", "Firebase"]
            },
            video: {
              title: "Video Editing",
              description: "Professional video editing for YouTube, social media, and marketing content with cinematic effects and engaging storytelling.",
              items: ["Premiere Pro", "After Effects", "CapCut", "DaVinci Resolve"]
            },
            mobile: {
              title: "Mobile Development", 
              description: "Cross-platform mobile applications built with React Native for iOS and Android deployment.",
              items: ["React Native", "Expo", "Firebase", "App Store Deployment"]
            },
            design: {
              title: "UI/UX Design",
              description: "Beautiful, intuitive interfaces designed to enhance user engagement and satisfaction.",
              items: ["Figma", "Adobe XD", "User Flows", "Prototyping"]
            },
            seo: {
              title: "SEO Optimization",
              description: "Improve your search rankings and online visibility with comprehensive technical and content SEO strategies.",
              items: ["Keyword Research", "On-Page SEO", "Technical SEO", "Analytics"]
            },
            consultation: "Get a Free Consultation"
          },
          
          // Skills Section
          skills: {
            title: "My Skills",
            development: "Development Skills",
            content: "Content Creation Skills"
          },
          
          // Projects Section
          projects: {
            title: "My Projects",
            description: "Here are some of my recent projects. Each was crafted to solve specific challenges while delivering exceptional user experiences.",
            calculator: {
              title: "Ultimate Web Calculator",
              description: "Tired of basic calculators? Meet this sleek, modern, and fully responsive calculator that not only looks stunning but handles complex calculations with professional precision!"
            },
            weather: {
              title: "Weather App", 
              description: "Featuring a contemporary UI, smooth animations, and beautiful gradient backgrounds, this app delivers real-time weather updates for any city worldwide."
            },
            teacafe: {
              title: "TeaCafe",
              description: "TeaCafe is a modern, responsive e-commerce platform designed for tea enthusiasts, featuring elegant UI design and fluid animations."
            },
            liveDemo: "Live Demo",
            viewCode: "View Code",
            viewAll: "View All Projects"
          },
          
          // Contact Section
          contact: {
            title: "Get In Touch",
            name: "Your Name",
            email: "Email Address", 
            message: "Your Message",
            namePlaceholder: "John Doe",
            emailPlaceholder: "your.email@example.com",
            messagePlaceholder: "Hello Muhammad, I'd like to discuss a project opportunity...",
            sendMessage: "Send Message",
            contactInfo: "Contact Information",
            alsoFindMe: "Also find me on:",
            location: "Karachi Division, Sindh, Pakistan"
          },
          
          // Education Section
          education: {
            title: "Education & Certifications",
            smit: {
              institution: "S.M.I.T (Saylani Mass I.T Training)",
              degree: "MERN Stack Developer Certification", 
              period: "January 2023 - January 2025",
              description: "Comprehensive training in modern web development technologies including React, Node.js, Express, and MongoDB with hands-on project experience."
            },
            cisco: {
              institution: "JavaScript Essentials 1",
              degree: "Cisco Certification",
              period: "2023", 
              description: "Certified in JavaScript fundamentals and programming concepts with focus on modern ES6+ features and industry best practices."
            }
          },
          
          // Footer
          footer: {
            rights: "All rights reserved",
            builtWith: "Built with React, Tailwind CSS, and ❤️"
          },
          
          // Language Names
          languages: {
            en: "English",
            es: "Español",
            fr: "Français",
            ar: "العربية",
            ur: "اردو",
            zh: "中文"
          }
        }
      },
      es: {
        translation: {
          // Navigation
          nav: {
            home: 'Inicio',
            about: 'Sobre Mí',
            skills: 'Habilidades', 
            projects: 'Proyectos',
            contact: 'Contacto',
            services: 'Servicios'
          },
          
          // Hero Section
          hero: {
            title: "Hola, soy",
            name: "Muhammad Fuzail",
            roles: [
              'Desarrollador MERN Stack',
              'Especialista Frontend',
              'Ingeniero Backend',
              'Creador de Contenido Visual',
              'Editor de YouTube & Reels',
              'Solucionador Creativo'
            ],
            description: "Desarrollo aplicaciones web ultrarrápidas con React, Node.js, MongoDB y Firebase, además de crear contenido visual cautivador que incluye videos de YouTube, Reels, Shorts y ediciones para redes sociales con narrativa envolvente, transiciones fluidas y ritmo que mantiene al público enganchado.",
            hireMe: "Trabajemos Juntos",
            viewWork: "Ver Mi Trabajo"
          },
          
          // About Section
          about: {
            title: "Sobre Mí",
            whoIAm: "Quién Soy",
            intro: "Soy {{name}} — Desarrollador Full-Stack MERN y Especialista en Contenido Visual. Ayudo a marcas, startups y creadores a construir aplicaciones web de alto rendimiento y contenido impactante que genera resultados tangibles.",
            description: "Con amplia experiencia en React, Node.js, Express, MongoDB, Firebase, Supabase y Tailwind CSS, desarrollo aplicaciones rápidas, seguras y modernas con interfaces limpias y experiencias de usuario fluidas.",
            additional: "También doy vida a historias visuales mediante edición profesional para YouTube y redes sociales — combinando transiciones cinematográficas, ritmo estratégico y creatividad para captar atención y fortalecer tu marca.",
            features: {
              speed: {
                title: "Velocidad y Rendimiento",
                description: "Aplicaciones optimizadas mediante carga diferida, división de código y técnicas modernas de caché."
              },
              fullstack: {
                title: "Experiencia Full-Stack", 
                description: "Desarrollo integral de aplicaciones web seguras, escalables y visualmente impresionantes."
              },
              creative: {
                title: "Solución Creativa",
                description: "Combino lógica técnica con pensamiento creativo para ofrecer soluciones con impacto real."
              },
              cloud: {
                title: "Cloud y Firebase",
                description: "Integración perfecta con Firebase, AWS y plataformas cloud modernas para soluciones escalables."
              }
            }
          },
          
          // Services Section
          services: {
            title: "Mis Servicios",
            description: "Ofrezco soluciones digitales integrales para impulsar tu negocio en línea. Desde desarrollo hasta creación de contenido, tengo todo cubierto.",
            webDev: {
              title: "Desarrollo Web",
              description: "Sitios web personalizados y responsivos desarrollados con React, Next.js y frameworks modernos para rendimiento y experiencia de usuario óptimos.",
              items: ["React/Next.js", "Tailwind CSS", "Redux", "TypeScript"]
            },
            backend: {
              title: "Servicios Backend",
              description: "Soluciones backend escalables con Node.js, Express e integración de bases de datos para aplicaciones web robustas.",
              items: ["Node.js", "Express", "MongoDB", "Firebase"]
            },
            video: {
              title: "Edición de Video",
              description: "Edición profesional para YouTube, redes sociales y contenido marketing con efectos cinematográficos y narrativa envolvente.",
              items: ["Premiere Pro", "After Effects", "CapCut", "DaVinci Resolve"]
            },
            mobile: {
              title: "Desarrollo Móvil", 
              description: "Aplicaciones móviles multiplataforma desarrolladas con React Native para iOS y Android.",
              items: ["React Native", "Expo", "Firebase", "Despliegue en App Store"]
            },
            design: {
              title: "Diseño UI/UX",
              description: "Interfaces hermosas e intuitivas diseñadas para mejorar el compromiso y satisfacción del usuario.",
              items: ["Figma", "Adobe XD", "Flujos de Usuario", "Prototipado"]
            },
            seo: {
              title: "Optimización SEO",
              description: "Mejora tu posicionamiento en buscadores y visibilidad online con estrategias integrales de SEO técnico y de contenido.",
              items: ["Investigación Keywords", "SEO On-Page", "SEO Técnico", "Analytics"]
            },
            consultation: "Obtener Consulta Gratuita"
          },
          
          // Projects Section
          projects: {
            title: "Mis Proyectos",
            description: "Estos son algunos de mis proyectos recientes. Cada uno fue diseñado para resolver desafíos específicos ofreciendo experiencias excepcionales.",
            calculator: {
              title: "Calculadora Web Definitiva",
              description: "¿Cansado de calculadoras básicas? Conoce esta calculadora elegante, moderna y completamente responsive que no solo luce impresionante sino que maneja cálculos complejos con precisión profesional."
            },
            weather: {
              title: "App del Clima", 
              description: "Con interfaz contemporánea, animaciones fluidas y fondos degradados hermosos, esta app ofrece actualizaciones meteorológicas en tiempo real para cualquier ciudad."
            },
            teacafe: {
              title: "TeaCafe",
              description: "TeaCafe es una plataforma de e-commerce moderna y responsive diseñada para entusiastas del té, con interfaz elegante y animaciones fluidas."
            },
            liveDemo: "Demo en Vivo",
            viewCode: "Ver Código",
            viewAll: "Ver Todos los Proyectos"
          },
          
          // Contact Section
          contact: {
            title: "Contáctame",
            name: "Tu Nombre",
            email: "Correo Electrónico", 
            message: "Tu Mensaje",
            namePlaceholder: "Juan Pérez",
            emailPlaceholder: "tu.email@ejemplo.com",
            messagePlaceholder: "Hola Muhammad, me gustaría discutir una oportunidad de proyecto...",
            sendMessage: "Enviar Mensaje",
            contactInfo: "Información de Contacto",
            alsoFindMe: "También encuéntrame en:",
            location: "División Karachi, Sindh, Pakistán"
          },
          
          // Education Section
          education: {
            title: "Educación y Certificaciones",
            smit: {
              institution: "S.M.I.T (Saylani Mass I.T Training)",
              degree: "Certificación Desarrollador MERN Stack", 
              period: "Enero 2023 - Enero 2025",
              description: "Formación integral en tecnologías modernas de desarrollo web incluyendo React, Node.js, Express y MongoDB con experiencia práctica en proyectos."
            },
            cisco: {
              institution: "JavaScript Essentials 1",
              degree: "Certificación Cisco",
              period: "2023", 
              description: "Certificado en fundamentos de JavaScript y conceptos de programación con enfoque en características ES6+ modernas y mejores prácticas."
            }
          },
          
          // Footer
          footer: {
            rights: "Todos los derechos reservados",
            builtWith: "Desarrollado con React, Tailwind CSS y ❤️"
          },
          
          // Language Names
          languages: {
            en: "English",
            es: "Español",
            fr: "Français",
            ar: "العربية",
            ur: "اردو",
            zh: "中文"
          }
        }
      },
      fr: {
        translation: {
          // Navigation
          nav: {
            home: 'Accueil',
            about: 'À Propos',
            skills: 'Compétences',
            projects: 'Projets', 
            contact: 'Contact',
            services: 'Services'
          },
          
          // Hero Section
          hero: {
            title: "Bonjour, je suis",
            name: "Muhammad Fuzail",
            roles: [
              'Développeur MERN Stack',
              'Spécialiste Frontend',
              'Ingénieur Backend',
              'Créateur de Contenu Visuel',
              'Éditeur YouTube & Reels',
              'Résolveur Créatif'
            ],
            description: "Je développe des applications web ultra-rapides avec React, Node.js, MongoDB et Firebase, tout en créant du contenu visuel captivant incluant des vidéos YouTube, Reels, Shorts et montages pour réseaux sociaux avec narration engageante, transitions fluides et rythme qui retient l'attention du public.",
            hireMe: "Travaillons Ensemble",
            viewWork: "Voir Mon Travail"
          },
          
          // About Section
          about: {
            title: "À Propos",
            whoIAm: "Qui Je Suis",
            intro: "Je suis {{name}} — Développeur Full-Stack MERN et Spécialiste en Contenu Visuel. J'accompagne marques, startups et créateurs dans le développement d'applications web haute performance et de contenu percutant qui génère des résultats concrets.",
            description: "Fort d'une expertise approfondie en React, Node.js, Express, MongoDB, Firebase, Supabase et Tailwind CSS, je conçois des applications rapides, sécurisées et modernes aux interfaces épurées et expériences utilisateur fluides.",
            additional: "Je donne également vie aux récits visuels grâce au montage vidéo professionnel pour YouTube et les réseaux sociaux — alliant transitions cinématographiques, rythme stratégique et créativité pour capter l'attention et renforcer l'identité de votre marque.",
            features: {
              speed: {
                title: "Vitesse et Performance",
                description: "Applications optimisées grâce au chargement différé, découpage du code et techniques modernes de cache."
              },
              fullstack: {
                title: "Expertise Full-Stack", 
                description: "Développement complet d'applications web sécurisées, évolutives et visuellement impressionnantes."
              },
              creative: {
                title: "Résolution Créative",
                description: "J'allie logique technique et pensée créative pour proposer des solutions à impact réel."
              },
              cloud: {
                title: "Cloud et Firebase",
                description: "Intégration transparente avec Firebase, AWS et plateformes cloud modernes pour des solutions évolutives."
              }
            }
          },
          
          // Services Section
          services: {
            title: "Mes Services",
            description: "Je propose des solutions digitales complètes pour développer votre activité en ligne. Du développement à la création de contenu, je m'occupe de tout.",
            webDev: {
              title: "Développement Web",
              description: "Sites web personnalisés et responsifs développés avec React, Next.js et frameworks modernes pour performances et expérience utilisateur optimales.",
              items: ["React/Next.js", "Tailwind CSS", "Redux", "TypeScript"]
            },
            backend: {
              title: "Services Backend",
              description: "Solutions backend évolutives utilisant Node.js, Express et intégration de bases de données pour applications web robustes.",
              items: ["Node.js", "Express", "MongoDB", "Firebase"]
            },
            video: {
              title: "Montage Vidéo",
              description: "Montage professionnel pour YouTube, réseaux sociaux et contenu marketing avec effets cinématographiques et narration engageante.",
              items: ["Premiere Pro", "After Effects", "CapCut", "DaVinci Resolve"]
            },
            mobile: {
              title: "Développement Mobile", 
              description: "Applications mobiles multiplateformes développées avec React Native pour iOS et Android.",
              items: ["React Native", "Expo", "Firebase", "Déploiement App Store"]
            },
            design: {
              title: "Design UI/UX",
              description: "Interfaces élégantes et intuitives conçues pour améliorer l'engagement et la satisfaction utilisateur.",
              items: ["Figma", "Adobe XD", "Parcours Utilisateur", "Prototypage"]
            },
            seo: {
              title: "Optimisation SEO",
              description: "Améliorez votre classement dans les moteurs de recherche et votre visibilité en ligne avec des stratégies SEO techniques et de contenu complètes.",
              items: ["Recherche Keywords", "SEO On-Page", "SEO Technique", "Analytics"]
            },
            consultation: "Obtenir une Consultation Gratuite"
          },
          
          // Projects Section
          projects: {
            title: "Mes Projets",
            description: "Voici quelques-uns de mes projets récents. Chacun a été conçu pour relever des défis spécifiques tout en offrant des expériences exceptionnelles.",
            calculator: {
              title: "Calculatrice Web Ultime",
              description: "Fatigué des calculatrices basiques ? Découvrez cette calculatrice élégante, moderne et entièrement responsive qui non seulement est magnifique mais gère les calculs complexes avec précision professionnelle !"
            },
            weather: {
              title: "Application Météo", 
              description: "Avec une interface contemporaine, des animations fluides et de superbes dégradés, cette application fournit des mises à jour météo en temps réel pour n'importe quelle ville."
            },
            teacafe: {
              title: "TeaCafe",
              description: "TeaCafe est une plateforme e-commerce moderne et responsive conçue pour les amateurs de thé, alliant interface élégante et animations fluides."
            },
            liveDemo: "Démo Live",
            viewCode: "Voir le Code",
            viewAll: "Voir Tous les Projets"
          },
          
          // Contact Section
          contact: {
            title: "Me Contacter",
            name: "Votre Nom",
            email: "Adresse Email", 
            message: "Votre Message",
            namePlaceholder: "Jean Dupont",
            emailPlaceholder: "votre.email@exemple.com",
            messagePlaceholder: "Bonjour Muhammad, je souhaiterais discuter d'une opportunité de projet...",
            sendMessage: "Envoyer le Message",
            contactInfo: "Informations de Contact",
            alsoFindMe: "Retrouvez-moi également sur :",
            location: "Division Karachi, Sindh, Pakistan"
          },
          
          // Education Section
          education: {
            title: "Éducation et Certifications",
            smit: {
              institution: "S.M.I.T (Saylani Mass I.T Training)",
              degree: "Certification Développeur MERN Stack", 
              period: "Janvier 2023 - Janvier 2025",
              description: "Formation complète aux technologies modernes de développement web incluant React, Node.js, Express et MongoDB avec expérience pratique sur projet."
            },
            cisco: {
              institution: "JavaScript Essentials 1",
              degree: "Certification Cisco",
              period: "2023", 
              description: "Certifié en fondamentaux JavaScript et concepts de programmation avec accent sur les fonctionnalités ES6+ modernes et bonnes pratiques."
            }
          },
          
          // Footer
          footer: {
            rights: "Tous droits réservés",
            builtWith: "Développé avec React, Tailwind CSS et ❤️"
          },
          
          // Language Names
          languages: {
            en: "English",
            es: "Español",
            fr: "Français",
            ar: "العربية",
            ur: "اردو",
            zh: "中文"
          }
        }
      },
      ar: {
        translation: {
          // Navigation
          nav: {
            home: 'الرئيسية',
            about: 'معلومات عني',
            skills: 'المهارات',
            projects: 'المشاريع',
            contact: 'اتصل بي', 
            services: 'الخدمات'
          },
          
          // Hero Section
          hero: {
            title: "مرحباً، أنا",
            name: "محمد فضيل",
            roles: [
              'مطور MERN Stack',
              'متخصص الواجهات الأمامية',
              'مهندس الخلفية',
              'منشئ محتوى مرئي',
              'محرر يوتيوب وريلز',
              'حلّال مشاكل إبداعي'
            ],
            description: "أطور تطبيقات ويب فائقة السرعة باستخدام React وNode.js وMongoDB وFirebase — وأيضًا أنشئ محتوى مرئيًا جذابًا يشمل فيديوهات يوتيوب وريلز وشارتس وتحرير محتوى لوسائل التواصل الاجتماعي بسرد قصصي شيق وانتقالات سلسة وإيقاع يحافظ على تفاعل الجمهور.",
            hireMe: "لنعمل معًا",
            viewWork: "شاهد أعمالي"
          },
          
          // About Section
          about: {
            title: "معلومات عني",
            whoIAm: "من أنا",
            intro: "أنا {{name}} — مطور MERN Stack كامل ومتخصص في المحتوى المرئي. أساعد العلامات التجارية والشركات الناشئة والمبدعين في بناء تطبيقات ويب عالية الأداء ومحتوى مؤثر يحقق نتائج ملموسة.",
            description: "بخبرة عميقة في React وNode.js وExpress وMongoDB وFirebase وSupabase وTailwind CSS، أصمم تطبيقات سريعة وآمنة وحديثة بواجهات نظيفة وتجارب مستخدم سلسة.",
            additional: "أيضًا أحيك القصص المرئية من خلال تحرير الفيديو الاحترافي لليوتيوب ووسائل التواصل الاجتماعي — مزجًا بين الانتقالات السينمائية والإيقاع الاستراتيجي والإبداع لجذب الانتباه وتعزيز هوية علامتك التجارية.",
            features: {
              speed: {
                title: "السرعة والأداء",
                description: "تطبيقات مُحسنة باستخدام التحميل المتأخر وتقسيم الكود وتقنيات التخزين المؤقت الحديثة."
              },
              fullstack: {
                title: "خبرة كاملة", 
                description: "تطوير شامل لتطبيقات ويب آمنة وقابلة للتوسع ومذهلة بصريًا."
              },
              creative: {
                title: "الحل الإبداعي",
                description: "أمزج بين المنطق التقني والتفكير الإبداعي لتقديم حلول ذات تأثير حقيقي."
              },
              cloud: {
                title: "الحوسبة السحابية وFirebase",
                description: "تكامل سلس مع Firebase وAWS ومنصات السحابة الحديثة لحلول قابلة للتوسع."
              }
            }
          },
          
          // Services Section
          services: {
            title: "خدماتي",
            description: "أقدم حلولاً رقمية شاملة لمساعدة عملك على الازدهار عبر الإنترنت. من التطوير إلى إنشاء المحتوى، أنا هنا لمساعدتك.",
            webDev: {
              title: "تطوير الويب",
              description: "مواقع ويب مخصصة ومستجيبة مبنية بـ React وNext.js وأطر العمل الحديثة لأداء وتجربة مستخدم مثالية.",
              items: ["React/Next.js", "Tailwind CSS", "Redux", "TypeScript"]
            },
            backend: {
              title: "خدمات الخلفية",
              description: "حلول خلفية قابلة للتوسع باستخدام Node.js وExpress وتكامل قواعد البيانات لتطبيقات ويب قوية.",
              items: ["Node.js", "Express", "MongoDB", "Firebase"]
            },
            video: {
              title: "تحرير الفيديو",
              description: "تحرير فيديو احترافي لليوتيوب ووسائل التواصل الاجتماعي والمحتوى التسويقي بتأثيرات سينمائية وسرد قصصي شيق.",
              items: ["Premiere Pro", "After Effects", "CapCut", "DaVinci Resolve"]
            },
            mobile: {
              title: "تطوير الجوال", 
              description: "تطبيقات جوال متعددة المنصات مبنية بـ React Native لنظامي iOS وAndroid.",
              items: ["React Native", "Expo", "Firebase", "نشر متجر التطبيقات"]
            },
            design: {
              title: "تصميم UI/UX",
              description: "واجهات جميلة وبديهية مصممة لتعزيز مشاركة المستخدم ورضاه.",
              items: ["Figma", "Adobe XD", "مسارات المستخدم", "النماذج الأولية"]
            },
            seo: {
              title: "تحسين محركات البحث",
              description: "حسّن ترتيبك في محركات البحث ووجودك على الإنترنت باستراتيجيات شاملة لتحسين محركات البحث التقني والمرتكز على المحتوى.",
              items: ["بحث الكلمات المفتاحية", "تحسين On-Page", "تحسين تقني", "التحليلات"]
            },
            consultation: "احصل على استشارة مجانية"
          },
          
          // Projects Section
          projects: {
            title: "مشاريعي",
            description: "إليك بعض مشاريعي الحديثة. كل مشروع تم تصميمه لمواجهة تحديات محددة مع تقديم تجارب استثنائية.",
            calculator: {
              title: "آلة حاسبة ويب نهائية",
              description: "تعبان من الآلات الحاسبة العادية؟ تعرّف على هذه الآلة الحاسبة الأنيقة والحديثة والمستجيبة تمامًا التي لا تبدو رائعة فحسب، بل تتعامل مع الحسابات المعقدة بدقة احترافية!"
            },
            weather: {
              title: "تطبيق الطقس", 
              description: "بتصميم معاصر ورسوم متحركة سلسة وخلفيات متدرجة جميلة، يقدم هذا التطبيق تحديثات الطقس الفورية لأي مدينة حول العالم."
            },
            teacafe: {
              title: "TeaCafe",
              description: "TeaCafe هو منصة تجارة إلكترونية حديثة ومستجيبة مصممة لعشاق الشاي، تجمع بين واجهة أنيقة ورسوم متحركة سلسة."
            },
            liveDemo: "عرض مباشر",
            viewCode: "عرض الكود",
            viewAll: "عرض جميع المشاريع"
          },
          
          // Contact Section
          contact: {
            title: "تواصل معي",
            name: "اسمك",
            email: "البريد الإلكتروني", 
            message: "رسالتك",
            namePlaceholder: "جون دو",
            emailPlaceholder: "بريدك@example.com",
            messagePlaceholder: "مرحبًا محمد، أود مناقشة فرصة مشروع...",
            sendMessage: "إرسال الرسالة",
            contactInfo: "معلومات الاتصال",
            alsoFindMe: "يمكنك أيضًا إيجادي على:",
            location: "قسم كراتشي، السند، باكستان"
          },
          
          // Education Section
          education: {
            title: "التعليم والشهادات",
            smit: {
              institution: "S.M.I.T (تدريب سيلاني الشامل لتقنية المعلومات)",
              degree: "شهادة مطور MERN Stack", 
              period: "يناير 2023 - يناير 2025",
              description: "تدريب شامل في تقنيات تطوير الويب الحديثة بما في ذلك React وNode.js وExpress وMongoDB مع خبرة عملية في المشاريع."
            },
            cisco: {
              institution: "JavaScript Essentials 1",
              degree: "شهادة سيسكو",
              period: "2023", 
              description: "معتمد في أساسيات JavaScript ومفاهيم البرمجة مع التركيز على ميزات ES6+ الحديثة وأفضل الممارسات."
            }
          },
          
          // Footer
          footer: {
            rights: "جميع الحقوق محفوظة",
            builtWith: "مطور بـ React وTailwind CSS و❤️"
          },
          
          // Language Names
          languages: {
            en: "English",
            es: "Español",
            fr: "Français",
            ar: "العربية",
            ur: "اردو",
            zh: "中文"
          }
        }
      },
      ur: {
        translation: {
          // Navigation
          nav: {
            home: 'ہوم',
            about: 'میرے بارے میں',
            skills: 'مہارتیں',
            projects: 'پروجیکٹس',
            contact: 'رابطہ کریں',
            services: 'سروسز'
          },
          
          // Hero Section
          hero: {
            title: "ہائے، میں ہوں",
            name: "محمد فضیل",
            roles: [
              'MERN اسٹیک ڈویلپر',
              'فرنٹ اینڈ اسپیشلسٹ',
              'بیک اینڈ انجینئر',
              'ویژول کنٹینٹ کریٹر',
              'یوٹیوب اور ریلس ایڈیٹر',
              'تخلیقی مسئلہ حل'
            ],
            description: "میں React, Node.js, MongoDB اور Firebase استعمال کر کے انتہائی تیز رفتار ویب ایپلیکیشنز بناتا ہوں — اور ساتھ ہی یوٹیوب ویڈیوز، ریلس، شارٹس اور سوشل میڈیا ایڈیٹس پر مشتمل پرکشش ویژول کنٹینٹ بھی تخلیق کرتا ہوں جس میں دلچسپ کہانیاں، ہموار ٹرانزیشنز اور ایسا پیسنگ ہوتا ہے جو ناظرین کو جکڑے رکھتا ہے۔",
            hireMe: "آئیے مل کر کام کریں",
            viewWork: "میرا کام دیکھیں"
          },
          
          // About Section
          about: {
            title: "میرے بارے میں",
            whoIAm: "میں کون ہوں",
            intro: "میں {{name}} ہوں — ایک فل اسٹیک MERN ڈویلپر اور ویژول کنٹینٹ اسپیشلسٹ۔ میں برانڈز، اسٹارٹ اپس اور تخلیق کاروں کو ہائی پرفارمنس ویب ایپس اور اثرانگیز کنٹینٹ بنانے میں مدد کرتا ہوں جو حقیقی نتائج دیتے ہیں۔",
            description: "React, Node.js, Express, MongoDB, Firebase, Supabase اور Tailwind CSS میں گہری مہارت کے ساتھ، میں تیز، محفوظ اور جدید ایپلیکیشنز ڈیزائن کرتا ہوں جن میں صاف انٹرفیس اور بے عیب یوزر ایکسپیرئنس ہوتی ہے۔",
            additional: "میں یوٹیوب اور سوشل میڈیا کے لیے پروفیشنل ویڈیو ایڈیٹنگ کے ذریعے ویژول کہانیوں کو زندگی بھی دیتا ہوں — سنیماٹک ٹرانزیشنز، اسٹریٹجک پیسنگ اور تخلیقی صلاحیتوں کا امتزاج کر کے توجہ حاصل کرتا ہوں اور آپ کی برانڈ شناخت کو مضبوط بناتا ہوں۔",
            features: {
              speed: {
                title: "اسپیڈ اور پرفارمنس",
                description: "لیزی لوڈنگ، کوڈ اسپلٹنگ اور جدید کیشنگ تکنیکوں کے ذریعے آپٹیمائزڈ ایپلیکیشنز۔"
              },
              fullstack: {
                title: "فل اسٹیک مہارت", 
                description: "محفوظ، scalable اور بصری طور پر حیرت انگیز ویب ایپلیکیشنز کا مکمل ڈویلپمنٹ۔"
              },
              creative: {
                title: "تخلیقی حل",
                description: "حقیقی اثر ڈالنے والے حل پیش کرنے کے لیے میں تکنیکی منطق اور تخلیقی سوچ کو یکجا کرتا ہوں۔"
              },
              cloud: {
                title: "کلاؤڈ اور Firebase",
                description: "سکیل ایبل حلز کے لیے Firebase, AWS اور جدید کلاؤڈ پلیٹ فارمز کے ساتھ بے عیب انٹیگریشن۔"
              }
            }
          },
          
          // Services Section
          services: {
            title: "میری خدمات",
            description: "میں آپ کے کاروبار کو آن لائن کامیاب ہونے میں مدد کے لیے جامع ڈیجیٹل حل پیش کرتا ہوں۔ ڈویلپمنٹ سے لے کر کنٹینٹ تخلیق تک، میں آپ کی مکمل مدد کرتا ہوں۔",
            webDev: {
              title: "ویب ڈویلپمنٹ",
              description: "بہترین کارکردگی اور یوزر ایکسپیرئنس کے لیے React, Next.js اور جدید فریم ورکس کے ساتھ بنائی گئی حسب ضرورت، responsive ویب سائٹس۔",
              items: ["React/Next.js", "Tailwind CSS", "Redux", "TypeScript"]
            },
            backend: {
              title: "بیک اینڈ سروسز",
              description: "آپ کی ویب ایپلیکیشنز کے لیے Node.js, Express اور ڈیٹا بیس انٹیگریشن کے ساتھ scalable بیک اینڈ حل۔",
              items: ["Node.js", "Express", "MongoDB", "Firebase"]
            },
            video: {
              title: "ویڈیو ایڈیٹنگ",
              description: "سنیماٹک اثرات اور پرکشش کہانی سنانے کے ساتھ یوٹیوب، سوشل میڈیا اور مارکیٹنگ کنٹینٹ کے لیے پیشہ ورانہ ویڈیو ایڈیٹنگ۔",
              items: ["Premiere Pro", "After Effects", "CapCut", "DaVinci Resolve"]
            },
            mobile: {
              title: "موبائل ڈویلپمنٹ", 
              description: "iOS اور Android کے لیے React Native کے ساتھ بنائی گئی کراس پلیٹ فارم موبائل ایپلیکیشنز۔",
              items: ["React Native", "Expo", "Firebase", "ایپ اسٹور ڈپلائمنٹ"]
            },
            design: {
              title: "UI/UX ڈیزائن",
              description: "صارف کی مشغولیت اور اطمینان کو بڑھانے کے لیے ڈیزائن کی گئی خوبصورت، intuitive انٹرفیس۔",
              items: ["Figma", "Adobe XD", "یوزر فلوز", "پروٹوٹائپنگ"]
            },
            seo: {
              title: "SEO آپٹیمائزیشن",
              description: "تکنیکی اور کنٹینٹ SEO کی جامع حکمت عملیوں کے ساتھ اپنی سرچ رینکنگ اور آن لائن موجودگی کو بہتر بنائیں۔",
              items: ["کی ورڈ ریسرچ", "On-Page SEO", "تکنیکی SEO", "اینالیٹکس"]
            },
            consultation: "مفت مشاورت حاصل کریں"
          },
          
          // Projects Section
          projects: {
            title: "میرے پروجیکٹس",
            description: "یہاں میرے کچھ حالیہ پروجیکٹس ہیں۔ ہر ایک مخصوص چیلنجز کو حل کرنے اور غیر معمولی یوزر ایکسپیرئنس فراہم کرنے کے لیے ڈیزائن کیا گیا تھا۔",
            calculator: {
              title: "آخری ویب کیلکولیٹر",
              description: "بورنگ کیلکولیٹرز سے تنگ آچکے ہیں؟ اس خوبصورت، جدید اور مکمل طور پر responsive کیلکولیٹر سے ملیں جو نہ صرف شاندار لگتی ہے بلکہ پیچیدہ حسابات کو پیشہ ورانہ precision کے ساتھ ہینڈل کرتی ہے!"
            },
            weather: {
              title: "موسم کی ایپ", 
              description: "جدید ڈیزائن، ہموار animations اور خوبصورت gradient backgrounds کے ساتھ، یہ ایپ دنیا کے کسی بھی شہر کے لیے real-time موسم کی اپ ڈیٹس فراہم کرتی ہے۔"
            },
            teacafe: {
              title: "TeaCafe",
              description: "TeaCafe چائے کے شوقینوں کے لیے ڈیزائن کی گئی ایک جدید، responsive ای کامرس پلیٹ فارم ہے، جس میں elegant UI اور fluid animations ہیں۔"
            },
            liveDemo: "لائیو ڈیمو",
            viewCode: "کوڈ دیکھیں",
            viewAll: "تمام پروجیکٹس دیکھیں"
          },
          
          // Contact Section
          contact: {
            title: "رابطہ کریں",
            name: "آپ کا نام",
            email: "ای میل ایڈریس", 
            message: "آپ کا پیغام",
            namePlaceholder: "جان ڈو",
            emailPlaceholder: "آپکی.ای میل@example.com",
            messagePlaceholder: "ہیلو محمد، میں ایک پروجیکٹ کی موقع پر بات کرنا چاہوں گا...",
            sendMessage: "پیغام بھیجیں",
            contactInfo: "رابطے کی معلومات",
            alsoFindMe: "مجھے یہاں بھی تلاش کریں:",
            location: "کراچی ڈویژن، سندھ، پاکستان"
          },
          
          // Education Section
          education: {
            title: "تعلیم اور سرٹیفیکیشنز",
            smit: {
              institution: "ایس ایم آئی ٹی (سیلانی ماس آئی ٹی ٹریننگ)",
              degree: "MERN اسٹیک ڈویلپر سرٹیفیکیشن", 
              period: "جنوری 2023 - جنوری 2025",
              description: "React, Node.js, Express اور MongoDB سمیت جدید ویب ڈویلپمنٹ ٹیکنالوجیز میں جامع تربیت اور عملی منصوبے کا تجربہ۔"
            },
            cisco: {
              institution: "JavaScript Essentials 1",
              degree: "Cisco سرٹیفیکیشن",
              period: "2023", 
              description: "جدید ES6+ فیچرز اور بہترین طریقوں پر توجہ کے ساتھ JavaScript کے بنیادی اصولوں اور پروگرامنگ تصورات میں سرٹیفائیڈ۔"
            }
          },
          
          // Footer
          footer: {
            rights: "جملہ حقوق محفوظ ہیں",
            builtWith: "React, Tailwind CSS اور ❤️ کے ساتھ بنایا گیا"
          },
          
          // Language Names
          languages: {
            en: "English",
            es: "Español",
            fr: "Français",
            ar: "العربية",
            ur: "اردو",
            zh: "中文"
          }
        }
      },
      zh: {
        translation: {
          // Navigation
          nav: {
            home: '首页',
            about: '关于我',
            skills: '技能',
            projects: '项目',
            contact: '联系',
            services: '服务'
          },
          
          // Hero Section
          hero: {
            title: "你好，我是",
            name: "Muhammad Fuzail",
            roles: [
              'MERN 全栈开发者',
              '前端专家',
              '后端工程师',
              '视觉内容创作者',
              'YouTube 和 Reels 编辑',
              '创意问题解决者'
            ],
            description: "我使用 React、Node.js、MongoDB 和 Firebase 构建极速网络应用，同时创作包括 YouTube 视频、Reels、Shorts 和社交媒体编辑在内的引人入胜的视觉内容，通过吸引人的叙事、流畅转场和节奏把控让观众沉浸其中。",
            hireMe: "让我们合作", 
            viewWork: "查看我的作品"
          },
          
          // About Section
          about: {
            title: "关于我",
            whoIAm: "我是谁",
            intro: "我是 {{name}} — 一名全栈 MERN 开发者和视觉内容专家。我致力于帮助品牌、初创公司和创作者构建高性能网络应用和引人注目的内容，提供可衡量的成果。",
            description: "凭借在 React、Node.js、Express、MongoDB、Firebase、Supabase 和 Tailwind CSS 方面的深厚专业知识，我开发快速、安全、现代的应用程序，具有清晰的界面和无缝的用户体验。",
            additional: "我还通过为 YouTube 和社交媒体进行专业级视频编辑，将视觉故事变为现实 — 融合电影般的转场、策略性节奏和创意天赋来吸引注意力并强化您的品牌形象。",
            features: {
              speed: {
                title: "速度与性能",
                description: "通过懒加载、代码分割和现代缓存技术优化的应用程序。"
              },
              fullstack: {
                title: "全栈专业知识", 
                description: "安全、可扩展且视觉惊艳的网络应用的端到端开发。"
              },
              creative: {
                title: "创意问题解决",
                description: "将技术逻辑与创造性思维相结合，提供产生实际影响的解决方案。"
              },
              cloud: {
                title: "云和 Firebase",
                description: "与 Firebase、AWS 和现代云平台无缝集成，实现可扩展的解决方案。"
              }
            }
          },
          
          // Services Section
          services: {
            title: "我的服务",
            description: "我提供全面的数字解决方案，帮助您的业务在线蓬勃发展。从开发到内容创作，我都能满足您的需求。",
            webDev: {
              title: "网站开发",
              description: "使用 React、Next.js 和现代框架构建的定制、响应式网站，实现最佳性能和用户体验。",
              items: ["React/Next.js", "Tailwind CSS", "Redux", "TypeScript"]
            },
            backend: {
              title: "后端服务",
              description: "使用 Node.js、Express 和数据库集成的可扩展后端解决方案，适用于强大的网络应用。",
              items: ["Node.js", "Express", "MongoDB", "Firebase"]
            },
            video: {
              title: "视频编辑",
              description: "为 YouTube、社交媒体和营销内容提供具有电影效果和引人入胜叙事的专业视频编辑。",
              items: ["Premiere Pro", "After Effects", "CapCut", "DaVinci Resolve"]
            },
            mobile: {
              title: "移动开发", 
              description: "使用 React Native 为 iOS 和 Android 构建的跨平台移动应用程序。",
              items: ["React Native", "Expo", "Firebase", "应用商店部署"]
            },
            design: {
              title: "UI/UX 设计",
              description: "设计美观直观的界面，以增强用户参与度和满意度。",
              items: ["Figma", "Adobe XD", "用户流程", "原型设计"]
            },
            seo: {
              title: "SEO 优化",
              description: "通过全面的技术和内容 SEO 策略提高您的搜索排名和在线可见度。",
              items: ["关键词研究", "页面 SEO", "技术 SEO", "分析"]
            },
            consultation: "获取免费咨询"
          },
          
          // Projects Section
          projects: {
            title: "我的项目",
            description: "以下是我的一些近期项目。每个项目都旨在解决特定挑战，同时提供卓越的用户体验。",
            calculator: {
              title: "终极网络计算器",
              description: "厌倦了基础计算器？来认识这款时尚、现代且完全响应的计算器，它不仅外观惊艳，还能以专业精度处理复杂计算！"
            },
            weather: {
              title: "天气应用", 
              description: "具有现代界面、流畅动画和美丽渐变背景，此应用为全球任何城市提供实时天气更新。"
            },
            teacafe: {
              title: "TeaCafe",
              description: "TeaCafe 是一个现代、响应式的电子商务平台，专为茶爱好者设计，融合优雅的用户界面和流畅的动画。"
            },
            liveDemo: "在线演示",
            viewCode: "查看代码",
            viewAll: "查看所有项目"
          },
          
          // Contact Section
          contact: {
            title: "联系我",
            name: "您的姓名",
            email: "电子邮件地址", 
            message: "您的消息",
            namePlaceholder: "张三",
            emailPlaceholder: "您的邮箱@example.com",
            messagePlaceholder: "你好 Muhammad，我想讨论一个项目机会...",
            sendMessage: "发送消息",
            contactInfo: "联系信息",
            alsoFindMe: "也可以在这些平台找到我：",
            location: "卡拉奇专区，信德省，巴基斯坦"
          },
          
          // Education Section
          education: {
            title: "教育与认证",
            smit: {
              institution: "S.M.I.T (Saylani Mass I.T Training)",
              degree: "MERN 全栈开发者认证", 
              period: "2023年1月 - 2025年1月",
              description: "全面培训现代网络开发技术，包括 React、Node.js、Express 和 MongoDB，并具有实践项目经验。"
            },
            cisco: {
              institution: "JavaScript 基础 1",
              degree: "思科认证",
              period: "2023年", 
              description: "认证 JavaScript 基础知识和编程概念，重点关注现代 ES6+ 特性和行业最佳实践。"
            }
          },
          
          // Footer
          footer: {
            rights: "保留所有权利",
            builtWith: "使用 React、Tailwind CSS 和 ❤️ 构建"
          },
          
          // Language Names
          languages: {
            en: "English",
            es: "Español",
            fr: "Français",
            ar: "العربية",
            ur: "اردو",
            zh: "中文"
          }
        }
      }
    }
  });

export default i18n;