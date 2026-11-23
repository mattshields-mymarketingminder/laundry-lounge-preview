// Mobile menu toggle
(function () {
  var header = document.querySelector('.site-header');
  var btn = document.querySelector('.menu-btn');
  if (!header || !btn) return;
  function setOpen(open) {
    header.classList.toggle('nav-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  btn.addEventListener('click', function () {
    setOpen(!header.classList.contains('nav-open'));
  });
  header.querySelectorAll('.hdr-nav a').forEach(function (a) {
    a.addEventListener('click', function () { setOpen(false); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });
})();
