const { createApp } = Vue;

createApp({
    data() {
        return {
            // ----- INFORMACIÓN PERSONAL -----
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
                    image: 'src/descuento1.png',
                    liveUrl: '#',
                    repoUrl: 'https://github.com/hernandezmariana'
                },
                {
                    title: 'Sistema de Historial Clínico',
                    description: 'Aplicación web para la gestión de historiales clínicos de pacientes, permitiendo crear, consultar y actualizar registros de forma segura.',
                    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
                    image: 'appweb1.jpg',
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
                    technologies: ['SQL', 'mariaDB', 'Java', 'Eclipse']
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
            ],

            // ===================================================
            // CONSOLA
            // ===================================================
            terminalInput: '',

            terminalMenu: [
                { id: 1, label: 'Sobre mí' },
                { id: 2, label: 'Cómo trabajo' },
                { id: 3, label: 'Qué estoy aprendiendo' },
                { id: 4, label: 'Proyectos' },
                { id: 5, label: 'Fuera del código' },
                { id: 6, label: '¿Cómo me considero?' },
                { id: 7, label: '¿Qué puedo aportar?' },
                { id: 8, label: 'Contacto' }
            ],

            // Estado del easter egg "modo hincha"
            bocaActive: false
        }
    },

    mounted() {
        document.title = `Portfolio - ${this.name}`;

        // Secuencia secreta: ↑ ↑ ↓ ↓ ← → B A
        const secretCode = ['arrowup', 'arrowup', 'arrowdown', 'arrowdown', 'arrowleft', 'arrowright', 'b', 'a'];
        let sequence = [];

        window.addEventListener('keydown', (event) => {
            sequence.push(event.key.toLowerCase());

            if (sequence.length > secretCode.length) {
                sequence.shift();
            }

            if (sequence.join('|') === secretCode.join('|')) {
                this.activateBoca();
                sequence = [];
            }
        });
    },

    methods: {

        // ---------------------------------------------------------
        // FOCUS EN LA CONSOLA
        // ---------------------------------------------------------
        focusTerminal() {
            this.$nextTick(() => {
                if (this.$refs.terminalInput) {
                    this.$refs.terminalInput.focus();
                }
            });
        },

        // ---------------------------------------------------------
        // MODO HINCHA (BOCA)
        // ---------------------------------------------------------
        activateBoca() {
            if (this.bocaActive) return;

            this.bocaActive = true;

            setTimeout(() => {
                this.bocaActive = false;
                this.focusTerminal();
            }, 1100);
        },

        // ---------------------------------------------------------
        // AGREGAR LÍNEA A LA CONSOLA
        // ---------------------------------------------------------
        appendTerminalLine(text, className = '') {
            const element = document.createElement('div');
            element.className = 'terminal-line ' + className;
            element.textContent = text;
            this.$refs.terminalOutput.appendChild(element);
        },

        // ---------------------------------------------------------
        // ENTER EN LA CONSOLA
        // ---------------------------------------------------------
        submitTerminal() {
            const command = this.terminalInput.trim().toLowerCase();

            if (!command) return;

            this.appendTerminalLine(`guest@mariana-h:~$ ${command}`, 'prompt-line');

            if (command === 'clear') {
                this.$refs.terminalOutput.innerHTML = '';
            } else {
                this.runTerminalCommand(command);
            }

            this.terminalInput = '';

            this.$nextTick(() => {
                const body = document.querySelector('.terminal-body');
                if (body) body.scrollTop = body.scrollHeight;
                this.focusTerminal();
            });
        },

        // ---------------------------------------------------------
        // COMANDOS
        // ---------------------------------------------------------
        runTerminalCommand(command) {
            command = String(command).trim().toLowerCase();

            if (command === 'help' || command === 'menu') {
                this.appendTerminalLine('Comandos disponibles:', 'terminal-muted');
                this.appendTerminalLine('1-8 → preguntas sobre Mariana');
                this.appendTerminalLine('help → mostrar este menú');
                this.appendTerminalLine('clear → limpiar la consola');
                this.appendTerminalLine('boquita → activar easter egg ⚽');
                return;
            }

            if (command === 'boquita' || command === 'boca') {
                this.activateBoca();
                return;
            }

            if (command === 'clear') {
                this.$refs.terminalOutput.innerHTML = '';
                return;
            }

            const answers = {
                '1': [
                    '01 · SOBRE MÍ',
                    'Soy estudiante de Ingeniería en Computación. Me interesa el desarrollo web y también el mundo de los sistemas y el soporte técnico. Me gusta aprender construyendo proyectos y entender qué hay detrás de las herramientas que uso.'
                ],
                '2': [
                    '02 · CÓMO TRABAJO',
                    'Cuando algo no me sale, intento entender primero el problema, investigo, pruebo alternativas y vuelvo a intentar. No espero saber todo de antemano: para mí aprender también es parte del trabajo.'
                ],
                '3': [
                    '03 · QUÉ ESTOY APRENDIENDO',
                    'Actualmente estoy enfocándome en mejorar desarrollo web, backend, bases de datos y buenas prácticas. También me interesa seguir explorando cómo diseñar mejores experiencias para los usuarios.'
                ],
                '4': [
                    '04 · PROYECTOS',
                    'Construyo proyectos propios además de los trabajos de la universidad. Uno de los que más me interesa es un sistema de historial clínico pensado para una necesidad real, porque me permitió pensar no solo en código, sino también en cómo lo usaría una persona.'
                ],
                '5': [
                    '05 · FUERA DEL CÓDIGO',
                    'También participé en actividades de voluntariado en un merendero de barrio. No es una experiencia técnica, pero forma parte de las experiencias que me enseñaron a colaborar, adaptarme y trabajar con otras personas.'
                ],
                '6': [
                    '06 · ¿CÓMO ME CONSIDERO?',
                    'Curiosa, perseverante y con ganas de aprender. Todavía estoy construyendo mi camino profesional y valoro mucho las oportunidades donde pueda aprender de personas con más experiencia.'
                ],
                '7': [
                    '07 · ¿QUÉ PUEDO APORTAR?',
                    'Una combinación de formación en Ingeniería en Computación, experiencia práctica en desarrollo y soporte, curiosidad para aprender y ganas de involucrarme. Me interesa entender el problema completo, no solamente escribir código.'
                ],
                '8': [
                    '08 · CONTACTO',
                    'Podés encontrarme en GitHub, LinkedIn o escribirme directamente por email. Los accesos están disponibles en la sección de contacto.'
                ]
            };

            if (answers[command]) {
                this.appendTerminalLine(answers[command][0], 'answer-title');
                this.appendTerminalLine(answers[command][1], 'answer-text');
                return;
            }

            this.appendTerminalLine(`Comando no encontrado: ${command}`, 'error');
            this.appendTerminalLine('Probá con "help".', 'terminal-muted');
        }
    }
}).mount('#app');


document.addEventListener('DOMContentLoaded', () => {
    
    const canvas = document.getElementById('miJuego');
    
    if (!canvas) return; 

    const ctx = canvas.getContext('2d');

    const spriteSheet = new Image();
    spriteSheet.src = 'sprite_boca.png'; 

    const FRAME_W = 677; 
    const FRAME_H = 369; 
    const ESCALA = 0.25; //antes 0.25
    const DRAW_W = FRAME_W * ESCALA; 
    const DRAW_H = FRAME_H * ESCALA; 
    const PISO_Y = 270; //antes 200

    let personaje = {
        x: 50,
        y: PISO_Y - DRAW_H,
        vy: 0,
        gravedad: 0.8,
        fuerzaSalto: -14,
        enElSuelo: true
    };

    let obstaculos = [];
    let frames = 0;
    let velocidadJuego = 10;
    let juegoTerminado = false;

    // --- CONTROLES ---
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
            e.preventDefault(); 
            
            if (juegoTerminado) {
                obstaculos = [];
                juegoTerminado = false;
                personaje.y = PISO_Y - DRAW_H;
                personaje.vy = 0;
                frames = 0;
                velocidadJuego = 5;
                loopJuego(); 
            } else if (personaje.enElSuelo) {
                personaje.vy = personaje.fuerzaSalto;
                personaje.enElSuelo = false;
            }
        }
    });

    // --- LÓGICA PRINCIPAL ---
    function actualizar() {
        personaje.vy += personaje.gravedad;
        personaje.y += personaje.vy;

        if (personaje.y >= PISO_Y - DRAW_H) {
            personaje.y = PISO_Y - DRAW_H;
            personaje.vy = 0;
            personaje.enElSuelo = true;
        }

        if (frames % 120 === 0) { 
            obstaculos.push({ x: canvas.width, y: PISO_Y - 40, width: 30, height: 40 });
        }

        for (let i = 0; i < obstaculos.length; i++) {
            let obs = obstaculos[i];
            obs.x -= velocidadJuego;

            let hitboxPersonajeX = personaje.x + 50; 
            let hitboxPersonajeW = DRAW_W - 100;
            let hitboxPersonajeY = personaje.y + 20;
            let hitboxPersonajeH = DRAW_H - 20;

            if (
                hitboxPersonajeX < obs.x + obs.width &&
                hitboxPersonajeX + hitboxPersonajeW > obs.x &&
                hitboxPersonajeY < obs.y + obs.height &&
                hitboxPersonajeY + hitboxPersonajeH > obs.y
            ) {
                juegoTerminado = true;
            }
        }

        obstaculos = obstaculos.filter(obs => obs.x + obs.width > 0);
        if (frames % 400 === 0) velocidadJuego += 0.5;
    }

    // --- DIBUJAR EN PANTALLA ---
    function dibujar() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        let sx = 0; 
        
        if (juegoTerminado) {
            sx = 0 * FRAME_W; 
        } else if (!personaje.enElSuelo) {
            sx = 2 * FRAME_W; 
        } else {
            sx = 1 * FRAME_W; 
        }

        ctx.drawImage(
            spriteSheet, 
            sx, 0, FRAME_W, FRAME_H, 
            personaje.x, personaje.y, DRAW_W, DRAW_H 
        );

        ctx.fillStyle = '#ff0033'; 
        obstaculos.forEach(obs => {
            ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
        });

        if (juegoTerminado) {
            ctx.fillStyle = '#00ff00';
            ctx.font = '24px monospace';
            ctx.fillText('¡BUG ENCONTRADO! GAME OVER', canvas.width/2 - 170, canvas.height/2 - 20);
            ctx.font = '16px monospace';
            ctx.fillText('Presiona ESPACIO para reintentar', canvas.width/2 - 160, canvas.height/2 + 20);
        }
    }

    // --- LOOP DEL JUEGO ---
    function loopJuego() {
        if (!juegoTerminado) {
            actualizar();
            dibujar();
            frames++;
            requestAnimationFrame(loopJuego);
        } else {
            dibujar(); 
        }
    }

    // Empezar todo cuando la imagen cargue
    spriteSheet.onload = () => {
        loopJuego();
    };
}); // CIERRE DEL DOMContentLoaded
