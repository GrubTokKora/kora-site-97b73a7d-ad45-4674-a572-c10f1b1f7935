/* Sleepy Tattoos: site behaviour (scroll reveals, homepage anchor links). */
(function () {
  "use strict";

  var root = document.documentElement;
  var isHome = document.body && document.body.getAttribute("data-page") === "home";

  /* The shared header/footer link to index.html#section so they work from every page.
     On the homepage itself, turn them into in-page anchors so they scroll instead of reloading. */
  if (isHome) {
    document.querySelectorAll('a[href^="index.html#"]').forEach(function (a) {
      a.setAttribute("href", a.getAttribute("href").replace("index.html", ""));
    });
  }

  /* Highlight today's row in the opening hours (shop time, America/New_York). */
  var today;
  try {
    today = new Intl.DateTimeFormat("en-US", { weekday: "short", timeZone: "America/New_York" }).format(new Date()).toLowerCase();
  } catch (e) {
    today = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"][new Date().getDay()];
  }
  var row = document.querySelector('.hours-list [data-day="' + today + '"]');
  if (row) row.classList.add("is-today");

  /* Scroll reveals. Content is visible by default; only hidden once this script has marked <html> with .js. */
  var items = document.querySelectorAll(".reveal");
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!items.length || reduce || !("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("is-in"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-in");
      io.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -40px 0px", threshold: 0.08 });
  items.forEach(function (el) {
    var siblings = el.parentElement ? el.parentElement.querySelectorAll(":scope > .reveal") : [];
    if (siblings.length > 1) el.style.transitionDelay = (Array.prototype.indexOf.call(siblings, el) % 4) * 70 + "ms";
    io.observe(el);
  });
  root.classList.add("js");
})();
