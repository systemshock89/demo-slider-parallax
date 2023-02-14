import Swiper, { Mousewheel, Parallax, FreeMode } from 'swiper';

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    // пролистывание послайдово
    new Swiper('.slider', {
        modules: [Mousewheel, Parallax],
        // direction: 'vertical',
        speed: 2400,
        mousewheel: true,
        spaceBetween: 18,
        parallax: true,
        preloadImages: false
    });

    // FreeMode (раскомментировать transition в стилях)
    // new Swiper('.slider', {
    //     modules: [Mousewheel, Parallax, FreeMode],
    //     direction: 'vertical',
    //     speed: 2400,
    //     mousewheel: {
    //         enabled: true,
    //         sensitivity: 2.4
    //     },
    //     spaceBetween: 18,
    //     parallax: true,
    //     freeMode: true
    // });

});