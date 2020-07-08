const slider = document.querySelector('.slider');
const slider2 = document.querySelector('.slider2');
const instructors1 = document.querySelector('.instructors__slider--1');
const instructors2 = document.querySelector('.instructors__slider--2');
const testimonials = document.querySelector('.testimonials__slider');


let swiper = new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 30,
    slideClass: 'slider__figure',
    wrapperClass: 'slider__wrapper',
    centeredSlides: true,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
});

let swiper2 = new Swiper(slider2, {
    slidesPerView: 1,
    spaceBetween: 30,
    slideClass: 'slider__figure',
    wrapperClass: 'slider__wrapper',
    centeredSlides: true,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
});

let swiper__inst1 = new Swiper(instructors1, {
    slidesPerView: 1,
    spaceBetween: 30,
    slideClass: 'instructors__card',
    wrapperClass: 'swiper-wrapper',
    centeredSlides: true,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    loop: true,
});

let swiper__inst2 = new Swiper(instructors2, {
    slidesPerView: 1,
    spaceBetween: 30,
    slideClass: 'instructors__card',
    wrapperClass: 'swiper-wrapper',
    centeredSlides: true,
    autoplay: {
        delay: 15000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    loop: true,
});

let swiper__testimonials = new Swiper(testimonials, {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true
});




