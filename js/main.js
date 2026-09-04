/* Gineve Music — site behaviour
   - mobile nav toggle
   - scroll reveal (IntersectionObserver)
   - lite YouTube embeds (load iframe only on click)
   - booking form: inline success message
*/
(function () {
  'use strict';

  /* ---- Mobile nav ------------------------------------------------- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.getAttribute('data-open') === 'true';
      nav.setAttribute('data-open', String(!open));
      toggle.setAttribute('aria-expanded', String(!open));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.setAttribute('data-open', 'false');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---- Scroll reveal ------------------------------------------------
     IntersectionObserver drives the staggered animation, but it is
     never load-bearing: a timeout and the load event both force every
     item visible, so a throttled/stalled observer can't hide content. */
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var reveals = document.querySelectorAll('.reveal');

  function revealAll() {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  if (reduce || !('IntersectionObserver' in window)) {
    revealAll();
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    reveals.forEach(function (el) { io.observe(el); });

    // Failsafes — content must never stay hidden.
    window.addEventListener('load', function () { setTimeout(revealAll, 1200); });
    setTimeout(revealAll, 2500);
    window.addEventListener('pageshow', function (e) { if (e.persisted) { revealAll(); } });
  }

  /* ---- Lite YouTube -------------------------------------------------- */
  document.querySelectorAll('.lite-yt[data-yt]').forEach(function (el) {
    el.setAttribute('role', 'button');
    el.setAttribute('tabindex', '0');
    function play() {
      var id = el.getAttribute('data-yt');
      var iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0&playsinline=1';
      iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      iframe.title = el.getAttribute('data-title') || 'Video player';
      el.innerHTML = '';
      el.appendChild(iframe);
      el.classList.add('is-playing');
    }
    el.addEventListener('click', play);
    el.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); play(); }
    });
  });

  /* ---- Booking form: AJAX submit to Formspree -------------------- */
  var form = document.getElementById('booking-form');
  if (form) {
    var sending = false;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (sending) { return; }
      var btn = form.querySelector('button[type="submit"]');
      sending = true;
      if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
      fetch(form.action, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      }).then(function (r) {
        if (r.ok) { revealPanel('form-success'); }
        else { throw new Error('status ' + r.status); }
      }).catch(function () {
        revealPanel('form-error');
      }).then(function () {
        sending = false;
        if (btn) { btn.disabled = false; btn.textContent = 'Send Inquiry'; }
      });
    });
  }
  function revealPanel(id) {
    var panel = document.getElementById(id);
    if (!panel) { return; }
    if (id === 'form-success') { form.hidden = true; }
    panel.hidden = false;
    panel.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
  }

  /* ---- Footer year ---------------------------------------------- */
  var yr = document.getElementById('year');
  if (yr) { yr.textContent = new Date().getFullYear(); }
})();
