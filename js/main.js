/* Gineve Music — site behaviour
   - mobile nav toggle + solid header on scroll
   - scroll reveal (IntersectionObserver, with failsafes)
   - city panels preselect the booking form
   - lite YouTube embeds (iframe loads on click)
   - booking form: AJAX submit to Formspree, inline success / error
*/
(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- Header ------------------------------------------------------ */
  var header = document.querySelector('.site-header');
  function onScroll() { if (header) { header.classList.toggle('is-solid', window.scrollY > 40); } }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');
  function setNav(open) {
    nav.setAttribute('data-open', String(open));
    toggle.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  }
  if (toggle && nav) {
    toggle.addEventListener('click', function () { setNav(nav.getAttribute('data-open') !== 'true'); });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) { setNav(false); } });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { setNav(false); } });
  }

  /* ---- Scroll reveal ----------------------------------------------- */
  var items = document.querySelectorAll('.rv, .rw');
  function revealAll() { items.forEach(function (el) { el.classList.add('in'); }); }

  if (reduce || !('IntersectionObserver' in window)) {
    revealAll();
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
    items.forEach(function (el) { io.observe(el); });
    // Failsafes: content must never stay hidden.
    window.addEventListener('load', function () { setTimeout(revealAll, 4000); });
    window.addEventListener('pageshow', function (e) { if (e.persisted) { revealAll(); } });
  }

  /* ---- City panels preselect the form ------------------------------ */
  document.querySelectorAll('[data-city]').forEach(function (el) {
    el.addEventListener('click', function () {
      var radio = document.querySelector('input[name="city"][value="' + el.getAttribute('data-city') + '"]');
      if (radio) { radio.checked = true; }
    });
  });

  /* ---- Lite YouTube ------------------------------------------------ */
  document.querySelectorAll('.yt[data-yt]').forEach(function (el) {
    el.addEventListener('click', function () {
      var iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube-nocookie.com/embed/' + el.getAttribute('data-yt') + '?autoplay=1&rel=0&playsinline=1';
      iframe.allow = 'autoplay; encrypted-media; picture-in-picture';
      iframe.allowFullscreen = true;
      iframe.title = el.getAttribute('data-title') || 'Video player';
      el.innerHTML = '';
      el.appendChild(iframe);
    }, { once: true });
  });

  /* ---- Booking form: AJAX submit to Formspree ---------------------- */
  var form = document.getElementById('booking-form');
  function showPanel(id) {
    var panel = document.getElementById(id);
    if (!panel) { return; }
    if (id === 'form-success') { form.hidden = true; }
    panel.hidden = false;
    panel.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
  }
  if (form) {
    var sending = false;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (sending) { return; }
      var btn = form.querySelector('button[type="submit"]');
      var label = btn ? btn.innerHTML : '';
      sending = true;
      if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
      fetch(form.action, { method: 'POST', headers: { 'Accept': 'application/json' }, body: new FormData(form) })
        .then(function (r) {
          if (!r.ok) { throw new Error('status ' + r.status); }
          var d = new FormData(form);
          if (window.gmTrack) { window.gmTrack('gm_lead', { content_name: d.get('event-type') || 'Booking enquiry', city: d.get('city') || '' }); }
          showPanel('form-success');
        })
        .catch(function () { showPanel('form-error'); })
        .then(function () { sending = false; if (btn) { btn.disabled = false; btn.innerHTML = label; } });
    });
  }

  var yr = document.getElementById('year');
  if (yr) { yr.textContent = new Date().getFullYear(); }
})();
