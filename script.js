document.querySelectorAll('.img-icon').forEach(icon => {
    icon.addEventListener('click', function () {
      const title = this.getAttribute('data-title');
      const content = this.getAttribute('data-content');

      document.getElementById('infoModalLabel').innerText = title;
      document.querySelector('#infoModal .modal-body').innerText = content;
    });
  });

