window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });
});

const slider = tns({
    container: '.carousel__slider',
    items: 1,
    slideBy: 'page',
    nav: false,
    controls: false
  });

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev'); 
});

document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next'); 
});

(function($) {
    $(function() {
      
      $('ul.content__tabs').on('click', 'li:not(.content__active)', function() {
        $(this)
          .addClass('content__active').siblings().removeClass('content__active')
          .closest('div.container').find('div.content__page').removeClass('content__page_active').eq($(this).index()).addClass('content__page_active');
      });
    });
})(jQuery);

function toggleSlide(item) {
    $(item).each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.content__item_global').eq(i).toggleClass('content__item_global_active');
            $('.content__item_list').eq(i).toggleClass('content__item_list_active');
        })
    });
};
toggleSlide('.content__item_link');
toggleSlide('.content__item_back');
    







