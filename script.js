document.querySelectorAll('.service').forEach((service) => {
  service.addEventListener('click', () => {
    document.querySelectorAll('.service').forEach((item) => {
      item.classList.remove('active');
      item.setAttribute('aria-pressed', 'false');
    });
    service.classList.add('active');
    service.setAttribute('aria-pressed', 'true');
  });
});
