const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

tabItem.forEach(function(element) {
  element.addEventListener('click', open);
})
function open(evt){
  const tabTarger = evt.currentTarget;
  const button = tabTarger.dataset.button;

tabItem.forEach(function(item){
  item.classList.remove('tabs__btn-item--active');

  }) 

  tabTarger.classList.add('tabs__btn-item--active');

  tabContent.forEach(function(item){
    item.classList.remove('tabs__content-item--active')
  })

  document.querySelector(`#${button}`).classList.add('tabs__content-item--active')}

const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    effect: "fade",
});
