// ── Mobile Nav Toggle ──
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const isOpen = navLinks.classList.contains('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  // Close nav when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// ── FAQ Accordion ──
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item   = btn.closest('.faq-item');
    const answer = item.querySelector('.faq-answer');
    const isOpen = item.classList.contains('open');

    // Close all
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-answer').style.maxHeight = null;
    });

    // Open clicked (if it wasn't already open)
    if (!isOpen) {
      item.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});

// ── Form Submit Handler ──
function handleFormSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const btn  = form.querySelector('button[type="submit"]');
  const data = Object.fromEntries(new FormData(form));

  // Basic feedback while you wire up a real backend or Formspree
  btn.textContent = 'Sent! We\'ll be in touch soon.';
  btn.disabled = true;
  btn.style.background = '#5f6360';

  // TODO: Replace this with your form submission logic:
  // Option 1 — Formspree: fetch('https://formspree.io/f/YOUR_ID', { method:'POST', body: new FormData(form) })
  // Option 2 — EmailJS: emailjs.send('service_id', 'template_id', data)
  // Option 3 — Your own backend endpoint

  console.log('Form data:', data);
}

// ── Sticky nav shadow on scroll ──
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.site-nav');
  if (nav) {
    nav.style.boxShadow = window.scrollY > 10
      ? '0 2px 12px rgba(0,0,0,0.08)'
      : 'none';
  }
}, { passive: true });
