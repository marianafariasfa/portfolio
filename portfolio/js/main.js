/* ========================================
   PORTFOLIO JAVASCRIPT
   Custom cursor, scroll animations, nav, form
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- CUSTOM CURSOR ---- */
  const cursor = document.querySelector('.cursor');
  const follower = document.querySelector('.cursor-follower');

  if (cursor && follower) {
    let mx = 0, my = 0, fx = 0, fy = 0;

    document.addEventListener('mousemove', (e) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';
    });

    // Smooth follower
    const animateFollower = () => {
      fx += (mx - fx) * 0.12;
      fy += (my - fy) * 0.12;
      follower.style.left = fx + 'px';
      follower.style.top = fy + 'px';
      requestAnimationFrame(animateFollower);
    };
    animateFollower();

    // Cursor grow on interactive elements
    document.querySelectorAll('a, button, .collage-card, .project-card, .project-masonry-card, .soft-skill-card').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(2)';
        follower.style.transform = 'translate(-50%, -50%) scale(1.4)';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        follower.style.transform = 'translate(-50%, -50%) scale(1)';
      });
    });
  }

  /* ---- HAMBURGER MENU ---- */
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });

    // Close on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  /* ---- ACTIVE NAV LINK ---- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ---- SCROLL REVEAL ---- */
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, (entry.target.dataset.delay || 0));
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  revealEls.forEach((el, i) => {
    el.dataset.delay = (i % 4) * 100;
    revealObserver.observe(el);
  });

  /* ---- SKILL BAR ANIMATION ---- */
  const skillBars = document.querySelectorAll('.skill-bar-fill');

  if (skillBars.length) {
    const barObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const pct = bar.dataset.pct || '80';
          setTimeout(() => {
            bar.style.width = pct + '%';
          }, 200);
          barObserver.unobserve(bar);
        }
      });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => barObserver.observe(bar));
  }

  /* ---- CONTACT FORM VALIDATION ---- */
  const form = document.getElementById('contact-form');

  if (form) {
    const fields = {
      name: { el: document.getElementById('name'), err: document.getElementById('name-error') },
      email: { el: document.getElementById('email'), err: document.getElementById('email-error') },
      message: { el: document.getElementById('message'), err: document.getElementById('message-error') }
    };

    const validate = {
      name: v => v.trim().length >= 2,
      email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
      message: v => v.trim().length >= 10
    };

    const errorMessages = {
      name: 'Por favor, insira seu nome (mínimo 2 caracteres).',
      email: 'Por favor, insira um e-mail válido.',
      message: 'A mensagem deve ter pelo menos 10 caracteres.'
    };

    // Live validation
    Object.keys(fields).forEach(key => {
      const { el, err } = fields[key];
      if (!el) return;
      el.addEventListener('blur', () => {
        if (!validate[key](el.value)) {
          err.textContent = errorMessages[key];
          err.classList.add('show');
          el.style.borderColor = 'rgba(255,107,107,0.6)';
        } else {
          err.classList.remove('show');
          el.style.borderColor = '';
        }
      });
      el.addEventListener('input', () => {
        if (validate[key](el.value)) {
          err.classList.remove('show');
          el.style.borderColor = 'rgba(124,92,191,0.4)';
        }
      });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      Object.keys(fields).forEach(key => {
        const { el, err } = fields[key];
        if (!el) return;
        if (!validate[key](el.value)) {
          err.textContent = errorMessages[key];
          err.classList.add('show');
          el.style.borderColor = 'rgba(255,107,107,0.6)';
          isValid = false;
        } else {
          err.classList.remove('show');
          el.style.borderColor = '';
        }
      });

      if (isValid) {
        const btn = form.querySelector('.form-submit');
        btn.disabled = true;
        btn.textContent = 'Enviando...';

        // Simulate send (replace with real backend)
        setTimeout(() => {
          form.style.display = 'none';
          const success = document.getElementById('form-success');
          if (success) {
            success.classList.add('show');
          }
        }, 1200);
      }
    });
  }

  /* ---- SMOOTH PAGE TRANSITIONS ---- */
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto')) return;

    link.addEventListener('click', (e) => {
      e.preventDefault();
      const transition = document.querySelector('.page-transition');
      if (transition) {
        transition.classList.add('entering');
        setTimeout(() => {
          window.location.href = href;
        }, 420);
      } else {
        window.location.href = href;
      }
    });
  });

  // Fade in on load
  const transition = document.querySelector('.page-transition');
  if (transition) {
    transition.classList.add('leaving');
    setTimeout(() => {
      transition.style.display = 'none';
    }, 500);
  }

  /* ---- PARALLAX on hero mountain ---- */
  const mountain = document.querySelector('.hero-mountain');
  const mountain2 = document.querySelector('.hero-mountain-2');

  if (mountain) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      mountain.style.transform = `translateY(${scrollY * 0.15}px)`;
      if (mountain2) mountain2.style.transform = `translateY(${scrollY * 0.08}px)`;
    }, { passive: true });
  }

  /* ---- NAV SCROLL EFFECT ---- */
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        nav.style.background = 'rgba(13,15,26,0.92)';
      } else {
        nav.style.background = 'rgba(13,15,26,0.6)';
      }
    }, { passive: true });
  }

});
