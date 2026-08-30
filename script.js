document.querySelectorAll('.service').forEach((service) => {
  service.addEventListener('click', () => {
    document.querySelectorAll('.service').forEach((item) => item.classList.remove('active'));
    service.classList.add('active');
  });
});
