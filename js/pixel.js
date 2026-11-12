/* Gineve Music — Meta Pixel (loads only after the visitor accepts)

   SET THE PIXEL ID BELOW. Leave it empty and nothing loads, no banner shows.
   Create the Pixel / dataset in Meta Events Manager -> Connect data -> Web,
   then paste its numeric ID here.

   Events sent:
     PageView                      every page (after consent)
     ViewContent  (artist page)    visitor looked at the artist page
     Contact      {method}         WhatsApp / call / email links clicked
     Lead         {content_name,…} booking form successfully sent
     StreamClick  (custom)         Spotify / Apple Music / YouTube link clicked
*/
(function () {
  'use strict';
  var PIXEL_ID = '';

  var KEY = 'gm_consent';
  function store(v) { try { if (v === undefined) { return localStorage.getItem(KEY); } localStorage.setItem(KEY, v); } catch (e) {} return null; }

  /* Safe no-op until the Pixel is loaded, so other scripts can always call it. */
  window.gmTrack = function () { if (window.fbq) { window.fbq.apply(null, arguments); } };

  function loadPixel() {
    if (window.fbq || !PIXEL_ID) { return; }
    /* Standard Meta Pixel base code */
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = [];
      t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', PIXEL_ID);
    window.fbq('track', 'PageView');
    if (document.body.hasAttribute('data-page-artist')) { window.fbq('track', 'ViewContent', { content_name: 'Gineve the Artist' }); }
  }

  /* Click events (no-ops until the Pixel is loaded) */
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a) { return; }
    var href = a.getAttribute('href') || '';
    if (/^https:\/\/wa\.me\//.test(href)) { window.gmTrack('track', 'Contact', { method: 'whatsapp' }); }
    else if (/^tel:/.test(href)) { window.gmTrack('track', 'Contact', { method: 'phone' }); }
    else if (/^mailto:/.test(href)) { window.gmTrack('track', 'Contact', { method: 'email' }); }
    else if (/open\.spotify\.com|music\.apple\.com|youtube\.com/.test(href)) {
      window.gmTrack('trackCustom', 'StreamClick', { destination: href.replace(/^https?:\/\/(www\.)?/, '').split('/')[0] });
    }
  });

  /* Consent banner */
  function banner() {
    var el = document.createElement('div');
    el.className = 'consent'; el.setAttribute('role', 'region'); el.setAttribute('aria-label', 'Cookie notice');
    el.innerHTML = '<p>We use a Meta (Facebook) Pixel to measure our ads and understand how visitors use this site. ' +
      '<a href="/privacy/">Privacy</a></p>' +
      '<div><button type="button" class="btn btn--sm" data-c="no">Decline</button>' +
      '<button type="button" class="btn btn--solid btn--sm" data-c="yes">Accept</button></div>';
    el.addEventListener('click', function (e) {
      var c = e.target.getAttribute && e.target.getAttribute('data-c');
      if (!c) { return; }
      store(c); el.remove();
      if (c === 'yes') { loadPixel(); }
    });
    document.body.appendChild(el);
  }

  /* Used by the "Cookie choices" button on the privacy page */
  window.gmConsentReset = function () { store('') ; if (PIXEL_ID && !document.querySelector('.consent')) { banner(); } };

  function init() {
    if (!PIXEL_ID) { return; }
    var c = store();
    if (c === 'yes') { loadPixel(); } else if (c !== 'no') { banner(); }
  }
  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', init); } else { init(); }
})();
