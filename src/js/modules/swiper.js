import {Swiper, Pagination, Keyboard} from "swiper";

export function swiperInit() {
    const presentation = document.querySelector('.presentation-swiper');
    const presentationSwiper = new Swiper(presentation, {
        modules: [Pagination, Keyboard],
        slidesPerView: 1,
        watchOverflow: true,
        grabCursor: true,
        spaceBetween: 50,
        pagination: {
            el: '.presentation-swiper__bullet-list',
            type: 'bullets',
            clickable: true,
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true
        }
    });

    const popular = document.querySelector('.popular-products');
    new Swiper(popular, {
        modules: [Pagination, Keyboard],
        slidesPerView: "auto",
        watchOverflow: true,
        spaceBetween: 20,
        breakpoints: {
            1000: {
                spaceBetween: 30
            },
            1500: {
                spaceBetween: 40
            }
        },
        grabCursor: true,
        pagination: {
            el: '.popular__bullet-list',
            type: 'bullets',
            clickable: true,
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true
        }
    })

    presentationSwiper.on('slideChange', () => {
        document.querySelector('.presentation-swiper__current-slide').innerHTML = String(presentationSwiper.realIndex + 1)
    })
}