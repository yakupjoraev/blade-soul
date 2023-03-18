// Custom scripts


// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  //снять классы при клике на элементы меню
  const menuItems = document.querySelectorAll('.menu__item')

  menuItems.forEach(item => {
    item.addEventListener('click', function () {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    })
  });

  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerMenu()


// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector('nav')

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 1
  if (window.scrollY >= breakpoint) {
    nav.classList.add('fixed__nav')
  } else {
    nav.classList.remove('fixed__nav')
  }
}
window.addEventListener('scroll', fixedNav)


const swiper = new Swiper(".slider__container", {
  spaceBetween: 20,
  slidesPerView: 'auto',
  // loop: true,
  grabCursor: true,
  centeredSlides: true,
  slideActiveClass: "active",
  navigation: {
    nextEl: ".slider__arrow-next",
    prevEl: ".slider__arrow-prev",
  },
  pagination: {
    el: ".slider__pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});
AOS.init();
const modal = new GraphModal();

var customStopVideo = () => {
  var iframe = document.querySelectorAll('iframe');
  Array.prototype.forEach.call(iframe, iframe => {
    iframe.contentWindow.postMessage(JSON.stringify({
      event: 'command',
      func: 'stopVideo'
    }), '*');
  });
}

window.addEventListener('click', function (event) {
  var target = event.target
  const btnCLose = this.document.querySelector('.js-modal-close')
  if (!btnCLose.contains(event.target) || btnCLose === target) {
    customStopVideo();
  }
})
