
(() => {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.mobile-toggle');
  if (nav && toggle) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      document.body.classList.toggle('nav-open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      document.body.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      item.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(item.classList.contains('open')));
    });
  });

  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  const reveal = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.animate(
          [{opacity:0, transform:'translateY(18px)'},{opacity:1,transform:'translateY(0)'}],
          {duration:520, easing:'ease-out', fill:'both'}
        );
        reveal.unobserve(entry.target);
      }
    });
  }, {threshold:.08});
  document.querySelectorAll('.service-card,.info-card,.split-card,.resource-card,.step').forEach(el => reveal.observe(el));
})();
