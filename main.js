document.addEventListener('DOMContentLoaded', () => {

    // 1. Inicializar Íconos Lucide
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Lógica FAQ (Plus a Minus)
    const faqCards = document.querySelectorAll('.faq-card');
    faqCards.forEach(card => {
        card.addEventListener('click', () => {
            const isActive = card.classList.contains('active');

            // Cerrar todos y resetear icono a plus
            faqCards.forEach(other => {
                other.classList.remove('active');
                const icon = other.querySelector('.lucide');
                if(icon) icon.setAttribute('data-lucide', 'plus');
            });

            // Si estaba cerrado, abrir y cambiar icono a minus
            if (!isActive) {
                card.classList.add('active');
                const icon = card.querySelector('.lucide');
                if(icon) icon.setAttribute('data-lucide', 'minus');
            }
            lucide.createIcons(); // Refrescar íconos
        });
    });

    // 4. Lógica de Precios (Mensual / Anual)
    const btnMonthly = document.getElementById('btn-monthly');
    const btnAnnual = document.getElementById('btn-annual');
    const priceProf = document.getElementById('price-prof');
    const pricePrem = document.getElementById('price-prem');
    const perPeriods = document.querySelectorAll('.per-period');
    const saveProf = document.getElementById('save-prof');
    const savePrem = document.getElementById('save-prem');

    btnAnnual.addEventListener('click', () => {
        btnMonthly.classList.remove('active');
        btnAnnual.classList.add('active');

        // Valores anuales exactos
        priceProf.innerText = '278.4';
        pricePrem.innerText = '758.4';

        perPeriods.forEach(p => p.innerText = '/ año');
        saveProf.classList.remove('hidden');
        savePrem.classList.remove('hidden');
    });

    btnMonthly.addEventListener('click', () => {
        btnAnnual.classList.remove('active');
        btnMonthly.classList.add('active');

        // Valores mensuales exactos
        priceProf.innerText = '29';
        pricePrem.innerText = '79';

        perPeriods.forEach(p => p.innerText = '/ mes');
        saveProf.classList.add('hidden');
        savePrem.classList.add('hidden');
    });

    // 5. Diccionario de Idioma (ES/EN)
    const translations = {
        es: {
            nav_home: "Inicio", nav_how: "Cómo funciona", nav_results: "Resultados", nav_plans: "Planes", nav_contact: "Contacto", nav_about: "Nosotros",
            hero_badge: "PLATAFORMA INTELIGENTE PARA CLÍNICAS VETERINARIAS", hero_title: "Gestiona tu clínica veterinaria de forma simple y eficiente", hero_desc: "Reduce el trabajo administrativo, mejora la atención médica y aumenta la rentabilidad de tu negocio con una solución todo en uno.",
            btn_try: "→ Probar gratis", btn_demo: "Ver demo", feat_install: "Sin instalación", feat_cloud: "100% en la nube", feat_support: "Soporte incluido",
            flow_badge: "FLUJO SIMPLE Y EFICIENTE", flow_title: "Todo lo que necesitas en un solo sistema", flow_desc: "Diseñado para veterinarios que buscan optimizar su tiempo y mejorar la atención.",
            exp_title: "Una experiencia continua.", exp_desc: "Simplificando el trabajo veterinario con herramientas modernas, intuitivas y accesibles desde cualquier dispositivo.", btn_learn: "Aprender más",
            steps_title: "Cuatro Simples Pasos", steps_desc: "Un flujo diseñado para que empieces a optimizar tu clínica desde el primer día.",
            step1_title: "Registra pacientes fácilmente", step1_desc: "Crea fichas digitales completas de cada mascota en segundos.", step2_title: "Gestiona tus citas", step2_desc: "Organiza tu agenda con un calendario claro y sin errores.",
            why_title: "Por Qué Elegir Vetalis", why_desc: "Herramientas diseñadas específicamente para el trabajo veterinario diario.",
            feat_card1_title: "Historial clínico centralizado", feat_card1_desc: "Toda la información médica en un solo lugar.", feat_card2_title: "Agenda inteligente", feat_card2_desc: "Evita conflictos y mejora tu organización diaria.", feat_card3_title: "Alertas automáticas", feat_card3_desc: "Nunca olvides una vacuna o tratamiento.", feat_card4_title: "Acceso en la nube", feat_card4_desc: "Disponible desde cualquier dispositivo.",
            res_badge: "RESULTADOS REALES", res_title: "Clínicas que ya optimizan su trabajo", res_desc: "Descubre cómo Vetalis transforma la gestión veterinaria.",
            res_card1_badge: "PRODUCTIVIDAD", res_card1_title: "Optimización de agenda", res_card1_desc: "Eliminación de citas duplicadas y mejor organización.",
            res_card2_badge: "ATENCIÓN MÉDICA", res_card2_title: "Mejora en consultas", res_card2_desc: "Acceso rápido al historial clínico.",
            res_card3_badge: "RENTABILIDAD", res_card3_title: "Control financiero", res_card3_desc: "Reducción de pérdidas por errores administrativos.", res_link: "Leer Caso →",
            plan_badge: "PLANES FLEXIBLES", plan_title: "Elige el plan ideal para tu clínica", plan_desc: "Escala tu negocio con herramientas profesionales.", plan_monthly: "Mensual", plan_annual: "Anual",
            plan1_name: "Básico", plan1_desc: "Ideal para veterinarios independientes", plan1_price: "Gratis", plan1_f1: "Gestión de pacientes", plan1_f2: "Agenda básica", plan1_f3: "Historial clínico", btn_start: "Empezar",
            plan_pop: "Más Popular", plan2_name: "Profesional", plan2_desc: "Para clínicas en crecimiento", per_month: "/ mes", plan2_f1: "Todo lo del plan básico", plan2_f2: "Alertas automáticas", plan2_f3: "Reportes", plan2_f4: "Multiusuario", btn_try_now: "Probar ahora",
            plan3_name: "Premium", plan3_desc: "Para clínicas avanzadas", plan3_f1: "Todo lo anterior", plan3_f2: "Inventario", plan3_f3: "Facturación", plan3_f4: "Soporte prioritario", plan3_f5: "Integraciones", btn_choose: "Elegir plan",
            contact_badge: "CONTÁCTANOS", contact_title: "Estamos para ayudarte", contact_desc: "Resolvemos tus dudas y te ayudamos a empezar.",
            form_title: "Envíanos un mensaje", form_name: "Tu Nombre", form_email: "Correo Electrónico", form_msg: "Tu Mensaje", form_btn: "Enviar Mensaje",
            info_title: "Información de Contacto", info_loc: "Nuestra Ubicación", info_mail: "Envíanos un correo", info_phone: "Llámanos",
            faq_title: "Preguntas Frecuentes", faq1_q: "¿Cómo empiezo?", faq1_a: "Regístrate gratis y comienza a usar Vetalis de inmediato.", faq2_q: "¿Ofrecen soporte?", faq2_a: "Sí, soporte incluido en todos los planes.", faq3_q: "¿Es seguro?", faq3_a: "Usamos estándares de seguridad para proteger tu información.", faq4_q: "¿Puedo cancelar?", faq4_a: "Sí, sin compromiso ni penalidades.",
            about_badge: "NUESTRA MISIÓN", about_title: "Transformando la gestión veterinaria", about_desc: "Innovación al servicio del cuidado animal.",
            about_prod: "Sobre el Producto", about_prod_desc: "Vetalis es una plataforma integral para clínicas veterinarias.", about_team: "Sobre el Equipo", about_team_desc: "Equipo enfocado en tecnología y salud animal.",
            footer_desc: "Vetalis simplifica la gestión veterinaria con herramientas digitales intuitivas para que los profesionales se enfoquen en el cuidado animal."
        },
        en: {
            nav_home: "Home", nav_how: "How it works", nav_results: "Results", nav_plans: "Pricing", nav_contact: "Contact", nav_about: "About",
            hero_badge: "SMART PLATFORM FOR VETERINARY CLINICS", hero_title: "Manage your clinic simply and efficiently", hero_desc: "Reduce administrative work, improve medical care, and increase your business profitability.",
            btn_try: "→ Try for free", btn_demo: "Watch demo", feat_install: "No installation", feat_cloud: "100% Cloud", feat_support: "Support included",
            flow_badge: "SIMPLE FLOW", flow_title: "Everything you need in one system", flow_desc: "Designed for veterinarians looking to optimize their time.",
            exp_title: "A seamless experience.", exp_desc: "Simplifying veterinary work with modern, intuitive tools.", btn_learn: "Learn more",
            steps_title: "Four Simple Steps", steps_desc: "A flow designed to optimize your clinic from day one.",
            step1_title: "Register easily", step1_desc: "Create complete digital records in seconds.", step2_title: "Manage appointments", step2_desc: "Organize your schedule with a clear calendar.",
            why_title: "Why Choose Vetalis", why_desc: "Tools designed specifically for daily work.",
            feat_card1_title: "Centralized history", feat_card1_desc: "All medical info in one place.", feat_card2_title: "Smart scheduling", feat_card2_desc: "Avoid conflicts.", feat_card3_title: "Automated alerts", feat_card3_desc: "Never forget a vaccine.", feat_card4_title: "Cloud access", feat_card4_desc: "Available from any device.",
            res_badge: "REAL RESULTS", res_title: "Clinics already optimizing their work", res_desc: "Discover how Vetalis transforms management.",
            res_card1_badge: "PRODUCTIVITY", res_card1_title: "Schedule optimization", res_card1_desc: "Elimination of double bookings.",
            res_card2_badge: "MEDICAL CARE", res_card2_title: "Consultation improvement", res_card2_desc: "Quick access to history.",
            res_card3_badge: "PROFITABILITY", res_card3_title: "Financial control", res_card3_desc: "Reduction of losses.", res_link: "Read Case →",
            plan_badge: "FLEXIBLE PLANS", plan_title: "Choose the ideal plan", plan_desc: "Scale your business with professional tools.", plan_monthly: "Monthly", plan_annual: "Annual",
            plan1_name: "Basic", plan1_desc: "Ideal for independent vets", plan1_price: "Free", plan1_f1: "Patient management", plan1_f2: "Basic scheduling", plan1_f3: "Medical history", btn_start: "Start",
            plan_pop: "Most Popular", plan2_name: "Professional", plan2_desc: "For growing clinics", per_month: "/ month", plan2_f1: "Everything in basic", plan2_f2: "Automated alerts", plan2_f3: "Reports", plan2_f4: "Multi-user", btn_try_now: "Try now",
            plan3_name: "Premium", plan3_desc: "For advanced clinics", plan3_f1: "Everything above", plan3_f2: "Inventory", plan3_f3: "Billing", plan3_f4: "Priority support", plan3_f5: "Integrations", btn_choose: "Choose plan",
            contact_badge: "CONTACT US", contact_title: "We are here to help", contact_desc: "We answer your questions and help you start.",
            form_title: "Send a message", form_name: "Your Name", form_email: "Email Address", form_msg: "Your Message", form_btn: "Send Message",
            info_title: "Contact Info", info_loc: "Our Location", info_mail: "Email us", info_phone: "Call us",
            faq_title: "FAQ", faq1_q: "How do I start?", faq1_a: "Register for free and start using Vetalis.", faq2_q: "Do you offer support?", faq2_a: "Yes, support included in all plans.", faq3_q: "Is it safe?", faq3_a: "We use security standards to protect your info.", faq4_q: "Can I cancel?", faq4_a: "Yes, no commitment or penalties.",
            about_badge: "OUR MISSION", about_title: "Transforming veterinary management", about_desc: "Innovation at the service of animal care.",
            about_prod: "About the Product", about_prod_desc: "Vetalis is a comprehensive platform.", about_team: "About the Team", about_team_desc: "Team focused on tech and health.",
            footer_desc: "Vetalis simplifies management with intuitive digital tools so you can focus on care."
        }
    };

    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            langButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            const lang = e.target.getAttribute('data-lang');
            const dict = translations[lang];

            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (dict[key]) {
                    if (el.tagName === 'BUTTON' && dict[key].includes('→')) {
                        el.innerText = dict[key];
                    } else {
                        el.textContent = dict[key];
                    }
                }
            });
            // Update period toggles if annual is active
            if(btnAnnual.classList.contains('active')) {
                document.querySelectorAll('.per-period').forEach(p => p.innerText = lang === 'en' ? '/ year' : '/ año');
            }
        });
    });
});