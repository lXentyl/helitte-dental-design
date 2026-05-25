/* ==========================================================================
   HELITTE DENTAL DESIGN — INTERACTIVE FUNCTIONS v2
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ─── 1. STICKY HEADER ────────────────────────────────────────────────
    const header = document.getElementById('header');
    const onScroll = () => {
        header.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // ─── 2. MOBILE MENU ──────────────────────────────────────────────────
    const toggle = document.getElementById('mobile-toggle');
    const menu = document.getElementById('nav-menu');
    const links = document.querySelectorAll('.nav-link');

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('open');
        menu.classList.toggle('open');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('open');
            menu.classList.remove('open');
        });
    });

    document.addEventListener('click', (e) => {
        if (!toggle.contains(e.target) && !menu.contains(e.target) && menu.classList.contains('open')) {
            toggle.classList.remove('open');
            menu.classList.remove('open');
        }
    });

    // ─── 3. BEFORE / AFTER SLIDER ────────────────────────────────────────
    const slider = document.getElementById('before-after-slider');

    if (slider) {
        const resize = slider.querySelector('.ba-resize');
        const handle = slider.querySelector('.ba-handle');
        let dragging = false;

        const adjust = (clientX) => {
            const rect = slider.getBoundingClientRect();
            let pos = ((clientX - rect.left) / rect.width) * 100;
            pos = Math.max(0, Math.min(100, pos));
            resize.style.width = `${pos}%`;
            handle.style.left = `${pos}%`;
        };

        // Mouse
        handle.addEventListener('mousedown', (e) => { dragging = true; e.preventDefault(); });
        window.addEventListener('mouseup', () => { dragging = false; });
        window.addEventListener('mousemove', (e) => { if (dragging) adjust(e.clientX); });

        // Touch
        handle.addEventListener('touchstart', () => { dragging = true; }, { passive: true });
        window.addEventListener('touchend', () => { dragging = false; });
        window.addEventListener('touchmove', (e) => {
            if (dragging && e.touches.length > 0) adjust(e.touches[0].clientX);
        }, { passive: true });

        // Click-to-jump
        slider.addEventListener('click', (e) => {
            if (!e.target.closest('.ba-handle')) adjust(e.clientX);
        });
    }

    // ─── 4. SCROLL REVEAL ────────────────────────────────────────────────
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

    if ('IntersectionObserver' in window) {
        const obs = new IntersectionObserver((entries, o) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    o.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        reveals.forEach(el => obs.observe(el));
    } else {
        reveals.forEach(el => el.classList.add('active'));
    }

    // ─── 5. TESTIMONIALS CAROUSEL ────────────────────────────────────────
    const cards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.testimonial-dot');
    let current = 0;
    let autoPlay;

    const showCard = (i) => {
        cards.forEach((c, idx) => {
            if (idx === i) {
                c.style.display = 'block';
                c.style.opacity = '0';
                requestAnimationFrame(() => { c.style.opacity = '1'; });
            } else {
                c.style.display = 'none';
            }
        });
        dots.forEach((d, idx) => d.classList.toggle('active', idx === i));
        current = i;
    };

    const next = () => showCard((current + 1) % cards.length);

    const startAuto = () => { autoPlay = setInterval(next, 5500); };

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            clearInterval(autoPlay);
            showCard(parseInt(dot.dataset.index));
            startAuto();
        });
    });

    if (cards.length > 0) {
        showCard(0);
        startAuto();
        const sliderWrap = document.querySelector('.testimonials-slider');
        sliderWrap.addEventListener('mouseenter', () => clearInterval(autoPlay));
        sliderWrap.addEventListener('mouseleave', startAuto);
    }

    // ─── 6. WHATSAPP DYNAMIC REDIRECT ────────────────────────────────────
    const phone = '18097084687';
    const waButtons = document.querySelectorAll('[data-wa-action]');

    waButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const action = btn.dataset.waAction;
            let msg = 'Hola Helitte Dental Design, ';

            switch (action) {
                case 'smile-design':
                    msg += 'estoy interesado/a en una consulta para Diseño de Sonrisa y carillas estéticas.';
                    break;
                case 'implants':
                    msg += 'me gustaría recibir información sobre Implantes Dentales.';
                    break;
                case 'orthodontics':
                    msg += 'quisiera información sobre Ortodoncia (brackets / alineadores invisibles).';
                    break;
                case 'whitening':
                    msg += 'me interesa un Blanqueamiento Dental Profesional. ¿Qué opciones tienen?';
                    break;
                case 'cleaning':
                    msg += 'me gustaría agendar una Limpieza Dental Ultrasónica.';
                    break;
                default:
                    msg += 'me gustaría más información sobre sus servicios y agendar una evaluación.';
            }

            window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
        });
    });
});
