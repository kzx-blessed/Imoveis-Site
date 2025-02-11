document.querySelectorAll('.img-icon').forEach(icon => {
    icon.addEventListener('click', function () {
      const title = this.getAttribute('data-title');
      const content = this.getAttribute('data-content');

      document.getElementById('infoModalLabel').innerText = title;
      document.querySelector('#infoModal .modal-body').innerText = content;
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".flip-card").forEach(card => {
      const frontImg = card.querySelector(".flip-card-front img");
      const back = card.querySelector(".flip-card-back");
  
      if (frontImg && back) {
        const imgSrc = frontImg.src;
        back.style.backgroundImage = `url('${imgSrc}')`;
        back.style.backgroundSize = "cover"; // Ajuste para cobrir toda a área corretamente
        back.style.backgroundPosition = "center"; // Centraliza a imagem
      }
    });
  });
