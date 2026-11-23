// Goutam Sikder — profile site
// Small helpers on top of Bootstrap's bundle (navbar collapse and scrollspy
// are wired up in index.html through data-bs-* attributes).

(function () {
  'use strict';

  // Year the career started. Years of experience are counted from here.
  var CAREER_START_YEAR = 2009;

  document.addEventListener('DOMContentLoaded', function () {
    // Keep the years of experience current. The number in the HTML is the
    // fallback shown when JavaScript is off.
    var experience = new Date().getFullYear() - CAREER_START_YEAR;
    document.querySelectorAll('.exp-years').forEach(function (el) {
      el.textContent = experience;
    });
    var description = document.querySelector('meta[name="description"]');
    if (description) {
      description.content = description.content.replace(/\d+ years/, experience + ' years');
    }

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
