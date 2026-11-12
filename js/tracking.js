/* Gineve Music — consent-gated Google Tag Manager loader + dataLayer events

   Nothing from Google or Meta loads until the visitor clicks Accept.
   All vendor tags (Meta Pixel, GA4, ...) live inside the GTM container, not here.
   Container: GTM-WX77PSLW   (leave GTM_ID empty to switch everything off)

   dataLayer events pushed (only after Accept):
     gm_view_artist  {content_name}              artist page viewed
     gm_contact      {method}                    whatsapp | phone | email link clicked
     gm_lead         {content_name, city}        booking form successfully sent
     gm_stream_click {destination}               Spotify / Apple Music / YouTube link clicked
   Consent Mode: ad_storage / ad_user_data / ad_personalization / analytics_storage
   start 'denied' and are set to 'granted' on Accept, just before GTM loads.
*/
(function () {
  'use strict';
  var GTM_ID = 'GTM-WX77PSLW';

  var KEY = 'gm_consent';
  var active = false; /* true once the visitor accepted and GTM was loaded */
  function store(v) { try { if (v === undefined) { return localStorage.getItem(KEY); } localStorage.setItem(KEY, v); } catch (e) {} return null; }

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }

  /* Safe no-op until consent is given, so other scripts can always call it. */
  window.gmTrack = function (event, params) {
    if (!active) { return; }
    var o = { event: event };
    for (var k in params) { if (Object.prototype.hasOwnProperty.call(params, k)) { o[k] = params[k]; } }
    window.dataLayer.push(o);
  };

  function loadGTM() {
    if (active || !GTM_ID) { return; }
    active = true;
    gtag('consent', 'update', { ad_storage: 'granted', ad_user_data: 'granted', ad_personalization: 'granted', analytics_storage: 'granted' });
    /* Standard GTM loader */
    (function (w, d, s, l, i) {
      w[l] = w[l] || []; w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
      var f = d.getElementsByTagName(s)[0], j = d.createElement(s);
      j.async = true; j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i;
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', GTM_ID);
    if (document.body.hasAttribute('data-page-artist')) { window.gmTrack('gm_view_artist', { content_name: 'Gineve the Artist' }); }
  }

  /* Click events (no-ops until consent) */
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a) { return; }
    var href = a.getAttribute('href') || '';
    if (/^https:\/\/wa\.me\//.test(href)) { window.gmTrack('gm_contact', { method: 'whatsapp' }); }
    else if (/^tel:/.test(href)) { window.gmTrack('gm_contact', { method: 'phone' }); }
    else if (/^mailto:/.test(href)) { window.gmTrack('gm_contact', { method: 'email' }); }
    else if (/open\.spotify\.com|music\.apple\.com|youtube\.com/.test(href)) {
      window.gmTrack('gm_stream_click', { destination: href.replace(/^https?:\/\/(www\.)?/, '').split('/')[0] });
    }
  });

  /* Consent banner */
  function banner() {
    var el = document.createElement('div');
    el.className = 'consent'; el.setAttribute('role', 'region'); el.setAttribute('aria-label', 'Cookie notice');
    el.innerHTML = '<p>We use Google Tag Manager and a Meta (Facebook) Pixel to measure our ads and understand how visitors use this site. ' +
      '<a href="/privacy/">Privacy</a></p>' +
      '<div><button type="button" class="btn btn--sm" data-c="no">Decline</button>' +
      '<button type="button" class="btn btn--solid btn--sm" data-c="yes">Accept</button></div>';
    el.addEventListener('click', function (e) {
      var c = e.target.getAttribute && e.target.getAttribute('data-c');
      if (!c) { return; }
      store(c); el.remove();
      if (c === 'yes') { loadGTM(); }
    });
    document.body.appendChild(el);
  }

  /* Used by the "Cookie choices" button on the privacy page.
     GTM cannot be unloaded, so withdrawing consent reloads the page. */
  window.gmConsentReset = function () {
    if (!GTM_ID) { return; }
    var was = active;
    store('');
    if (was) { location.reload(); } else if (!document.querySelector('.consent')) { banner(); }
  };

  function init() {
    if (!GTM_ID) { return; }
    gtag('consent', 'default', { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'denied', wait_for_update: 500 });
    var c = store();
    if (c === 'yes') { loadGTM(); } else if (c !== 'no') { banner(); }
  }
  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', init); } else { init(); }
})();
