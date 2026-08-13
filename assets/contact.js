// Contact popup — shared across all pages.
(function () {
  const modal = document.getElementById('contactModal');
  if (!modal) return;

  function onKey(e) { if (e.key === 'Escape') close(); }
  function open(e) {
    if (e) e.preventDefault();
    modal.hidden = false;
    document.addEventListener('keydown', onKey);
  }
  function close() {
    modal.hidden = true;
    document.removeEventListener('keydown', onKey);
  }

  document.querySelectorAll('[data-contact]').forEach((el) => el.addEventListener('click', open));
  modal.querySelectorAll('[data-close]').forEach((el) => el.addEventListener('click', close));
})();
