
(() => {
  document.querySelectorAll('form[data-demo-form]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const status = form.querySelector('.form-status');
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      status.textContent = 'Thank you. Your request has been captured in this demo. Connect the form to your preferred booking or email service before launch.';
      status.classList.add('show');
      form.reset();
    });
  });
})();
