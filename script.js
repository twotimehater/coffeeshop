document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelectorAll('.card-btn');
  const icon = document.querySelector('.icon');

    icon.onclick = function() {
icon.style.animation = 'spin 2.5s ease 1';
icon.style.backgroundColor = '#f0f0f0';
};



 btn.forEach((btn) => {
    btn.addEventListener('click', async () => {

          gtag('event', 'order_click', {
        button_text: btn.textContent
      });

      btn.disabled = true;
      btn.innerHTML = 'Додано до замовлення!';
      btn.style.transition = '0';

      setTimeout(() => {
        btn.innerHTML = 'Замовити';
        btn.disabled = false;
        }, 2000);
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

function addToCart(name, price) {

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.push({
        name: name,
        price: price
    });

    localStorage.setItem('cart', JSON.stringify(cart));

}
let cart = JSON.parse(localStorage.getItem('cart')) || [];

const cartList = document.getElementById('cart-list');

let total = 0;

cart.forEach(item => {

    const h3 = document.createElement('h3');

    h3.textContent =
        `${item.name} - ${item.price} грн`;

    cartList.appendChild(h3);

    total += item.price;

});

document.getElementById('total').textContent = total;

function clearCart() {

    localStorage.removeItem('cart');

    location.reload();

}

