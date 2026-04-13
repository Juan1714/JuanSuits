/* ══════════════════════════════════════════════
   NAVBAR — scroll shadow
══════════════════════════════════════════════ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

/* ══════════════════════════════════════════════
   HAMBURGER MENU
══════════════════════════════════════════════ */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', open);
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

/* ══════════════════════════════════════════════
   SCROLL REVEAL — area cards
══════════════════════════════════════════════ */
const cards = document.querySelectorAll('.area-card');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = parseInt(entry.target.dataset.delay || 0);
        setTimeout(() => entry.target.classList.add('visible'), delay);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

cards.forEach(card => revealObserver.observe(card));

/* ══════════════════════════════════════════════
   CONTACT FORM — simple validation & feedback
══════════════════════════════════════════════ */
const submitBtn = document.getElementById('submitBtn');
const formNote = document.getElementById('formNote');

const fields = {
  nombre: document.getElementById('nombre'),
  asunto: document.getElementById('asunto'),
  mensaje: document.getElementById('mensaje'),
};

submitBtn.addEventListener('click', () => {
  // Basic validation
  let valid = true;
  Object.values(fields).forEach(f => {
    if (!f.value.trim()) {
      f.style.borderColor = '#e05c5c';
      valid = false;
    } else {
      f.style.borderColor = '';
    }
  });

  if (!valid) {
    formNote.style.color = '#e05c5c';
    formNote.textContent = 'Por favor complete todos los campos.';
    return;
  }

  // Simulate send
  submitBtn.disabled = true;
  submitBtn.textContent = 'Enviando…';

  const nombre = fields.nombre.value.trim();
  const asunto = fields.asunto.value.trim();
  const mensaje = fields.mensaje.value.trim();

  const texto = `Hola, mi nombre es ${nombre}.%0AAsunto: ${asunto}%0A%0A${mensaje}`;
  const numero = '528443062684'; // formato internacional sin +

  window.open(`https://wa.me/${numero}?text=${texto}`, '_blank');

  submitBtn.disabled = false;
  submitBtn.textContent = 'Enviar Consulta';
  Object.values(fields).forEach(f => (f.value = ''));
});

/* ══════════════════════════════════════════════
   SMOOTH ACTIVE NAV HIGHLIGHT
══════════════════════════════════════════════ */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === '#' + entry.target.id
          );
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach(s => sectionObserver.observe(s));
