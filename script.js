const { createApp } = Vue;

createApp({
    data() {
        return {
            // ----- INFORMACIÓN PERSONAL: Cambia estos datos -----
            name: 'Mariana Hernandez',
            headline: 'Estudiante de Ingeniería en Computación',
            social: {
                github: 'https://github.com/hernandezmariana',
                linkedin: 'https://linkedin.com/in/tu-usuario'
            },
            about: {
                description: 'Soy un estudiante apasionado por la tecnología, con un fuerte interés en el desarrollo de software y la resolución de problemas complejos. Busco oportunidades para aplicar mis conocimientos y seguir aprendiendo en un entorno profesional.',
                city: 'Bahía Blanca, Argentina',
                email: 'hernandez0mariana0@gmail.com',
                cv_path: './CV_TuNombre.pdf' // Asegúrate de que tu CV esté en la misma carpeta
            },
            experience: [
                {
                    title: 'Mantenimiento y soporte técnico',
                    company: 'Kleppe S.A',
                    period: '2024 - 2025',
                    description: 'Tareas de mantenimiento de PC, instalación de SO y software. Soporte presencial y remoto para empleados'
                },
                {
                    title: 'Dictado de Clases en "Redes sociales y Uso del celular"',
                    company: 'Upami',
                    period: '2023 - 2024',
                    description: 'Planificación y dictado de clases sobre el uso de redes sociales, aplicaciones y herramientas digitales, orientado a adultos mayores'
                }
            ],
            education: [
                {
                    degree: 'Ingeniería en Computación',
                    institution: 'Universidad Nacional del Sur',
                    period: 'Presente',
                    description: 'Estudios universitarios en curso.'
                }
            ],
            courses: [
                  {
                            name: 'Certificación Profesional de Ciberseguridad de Google',
                            institution: 'Coursera / Google',
                            status: 'Completado',
                            description: 'Certificación profesional de 8 meses que cubre la gestión de riesgos, redes, Linux, Python para automatización, SIEM y más.',
                            modules: [
                                'Curso 1: Foundations of Cybersecurity',
                                'Curso 2: Play it Safe: Manage Security',
                                'Curso 3: Connect and Protect: Networks and Network Security',
                                'Curso 4: Tools of the Trade: Linux and SQL',
                                'Curso 5: Assets, Threats, and Vulnerabilities',
                                'Curso 6: Sound the Alarm: Detection and Responses',
                                'Curso 7: Automate Cybersecurity Tasks with Python',
                                'Curso 8: Put It to Work: Prepare for Cybersecurity Jobs',
                                // (Aquí puedes agregar el 9no si falta)
                            ]
                        },
                 {
                    name: 'Curso Next Education F2 T4 Back-end',
                    institution: 'Oracle'
                },
                {
                    name: 'Curso Front-end',
                    institution: 'Potrero digital'
                },
                 {
                    name: 'Curso Back-end',
                    institution: 'Potrero digital'
                }
            ],
            webProjects: [
                {
                    title: 'Página Web de Descuentos',
                    description: 'Una página web donde se publican descuentos y cupones en distintas paginas ',
                    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
                    image: 'https://placehold.co/600x400/343a40/ffffff?text=Captura+Web',
                    liveUrl: '#', // Enlace a la página desplegada
                    repoUrl: 'https://github.com/hernandezmariana'  // Enlace al repositorio de GitHub
                },
                {
                    title: 'Sistema de Historial Clínico',
                    description: 'Aplicación web para la gestión de historiales clínicos de pacientes, permitiendo crear, consultar y actualizar registros de forma segura.',
                    technologies: ['HTML', 'CSS', 'JavaScript',  'Node.js'],
                    image: 'https://placehold.co/600x400/343a40/ffffff?text=Captura+App',
                    liveUrl: '#',
                    repoUrl: '#'
                },
                {
                    title: 'Tienda',
                    description: 'Venta de artículos deportivos',
                    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'SQL'],
                    image: 'https://placehold.co/600x400/343a40/ffffff?text=Captura+App',
                    liveUrl: '#',
                    repoUrl: '#'
                }
            ],
            universityProjects: [
                {
                    course: 'Base de Datos',
                    title: 'Sistema de Parquímetros',
                    description: 'Diseño e implementación de una base de datos relacional para gestionar un sistema de parquímetros. Incluye una aplicación de escritorio en Java para interactuar con la BD, realizando operaciones CRUD.',
                    technologies: ['SQL','mariaDB', 'Java', 'Eclipse']
                },
                {
                    course: 'Arquitectura de Computadoras',
                    title: 'Proyecto con Verilog',
                    description: 'Diseño y simulación de un componente de hardware (ej. una ALU, un procesador simple) utilizando el lenguaje de descripción de hardware Verilog.',
                    technologies: ['Verilog', 'ModelSim/Vivado']
                },
                {
                    course: 'Optativa: Realidad Virtual y Aumentada',
                    title: 'Aplicación de Realidad Aumentada con Vuforia',
                    description: 'Desarrollo de una aplicación móvil con Unity y Vuforia que reconoce marcadores en el mundo real para superponer modelos 3D interactivos, creando una experiencia de realidad aumentada.',
                    technologies: ['Unity', 'C#', 'Vuforia Engine']
                }
            ]
        }
    },
    mounted() {
        // Actualiza el título de la página con el nombre del data
        document.title = `Portfolio - ${this.name}`;
    }
}).mount('#app');
