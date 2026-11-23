// Goutam Sikder — profile site
// Small helpers on top of Bootstrap's bundle (navbar collapse and scrollspy
// are wired up in index.html through data-bs-* attributes).

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    // Keep the footer year current.
    var year = document.getElementById('year');
    if (year) {
      year.textContent = new Date().getFullYear();
    }

    // On small screens, close the expanded menu after a link is chosen.
    var menu = document.getElementById('navLinks');
    if (menu && window.bootstrap) {
      menu.querySelectorAll('.nav-link').forEach(function (link) {
        link.addEventListener('click', function () {
          if (menu.classList.contains('show')) {
            window.bootstrap.Collapse.getOrCreateInstance(menu).hide();
          }
        });
      });
    }
  });
})();
