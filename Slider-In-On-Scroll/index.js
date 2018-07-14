'use strict';
import nodesToArray from './utils.js'
import debounce from './debounce.js';

(function (win, doc) {

    const $allImagesSlideIn = doc.querySelectorAll('[data-js="image-slide-in"]');
    const arrAllImagesSlideIn = nodesToArray($allImagesSlideIn);

    function handleScroll(e) {        
        arrAllImagesSlideIn.forEach(slideIn => {
            const slideInAt = (win.scrollY + win.innerHeight) - slideIn.height / 2;
            const isHalfShown = slideInAt > slideIn.offsetTop;
            const imageBottom = slideIn.offsetTop + slideIn.height;            
            const isNotScrolledPast = win.scrollY < imageBottom;           

            const method = (isHalfShown && isNotScrolledPast) ? 'add' : 'remove';
            slideIn.classList[method]('slide-in--active');
        });
    }

    win.addEventListener('scroll', debounce(handleScroll, 20), false);
    win.hasModule = true;
})(window, document);

