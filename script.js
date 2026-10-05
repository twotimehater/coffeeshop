document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelectorAll('.card-btn');
  const icon = document.querySelector('.icon');

    icon.onclick = function() {
icon.style.animation = 'spin 2.5s ease 1';
icon.style.backgroundColor = '#f0f0f0';
};



  btn.forEach((btn) => {
    btn.addEventListener('click', async () => {
      btn.disabled = true;
      btn.innerHTML = 'Додано до кошику!';
      btn.style.transition = '0';

      setInterval(() => {
        btn.innerHTML = 'Замовити';
        btn.disabled = false;
        }, 1500);
    });
  });

  const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 15,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
});