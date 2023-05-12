
    let slideIndex = 1;
    /* Вызываем функцию, которая реализована ниже: */
    showSlides(slideIndex);

    /* Увеличиваем индекс на 1 — показываем следующий слайд: */
    function nextSlide() {
        showSlides(slideIndex += 1);
    }

    /* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
    function previousSlide() {
        showSlides(slideIndex -= 1);
    }

    /* Устанавливаем текущий слайд: */
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    /* Функция перелистывания: */
    function showSlides(n) {
        /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
        let slides = document.getElementsByClassName("item");

        /* Проверяем количество слайдов: */
        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }

        /* Проходим по каждому слайду в цикле for: */
        for (let slide of slides) {
            slide.style.display = "none";
        }
        /* Делаем элемент блочным: */
        slides[slideIndex - 1].style.display = "block";
    }
//
// _________________________________________________________________________________________________
// let sliders = document.querySelectorAll('.slider');
// // sliders - список всех элементов с классом class="slider"
// // sliders[0] — первый элемент, sliders[1] — второй, sliders[i] — i-тый.
//
// for (let i = 0; i < sliders.length; i++) {
//     // Перебирает все, вызывает функцию для каждого.
//     init_slider(sliders[i]);
// }
//
// function init_slider(slider) {
//     // Значение slider: Очередной sliders[i], переданный при вызове функции.
//
//     let slide = slider.querySelectorAll('.item');
//     // Вместо document.query... Получается список всех class="slide"
//     // которые находятся где-то внутри текущего элемента slider.
//
//     let next = slider.querySelector('.next');
//     // Кнопка next внутри этого slider.
//
//     let i = 0;
//     // Номер текущего "открытого" слайда.
//
//     next.addEventListener('click', function () {
//         slide[i].classList.remove('block');
//         // slide[i] - открытый слайд. Скрываем.
//
//         i = (i + 1) % slide.length; // (*1)
//
//         slide[i].classList.add('block');
//         // slide[i] - следующий слайд. Показываем.
//     });
// }

// _________________________________________________________________________________________________

let sliders = document.querySelectorAll('.slider');
// sliders - список всех элементов с классом class="slider"
// sliders[0] — первый элемент, sliders[1] — второй, sliders[i] — i-тый.

for (let i = 0; i < sliders.length; i++) {
    // Перебирает все, вызывает функцию для каждого.
    init_slider(sliders[i]);
}

function init_slider(slider) {
    // Значение slider: Очередной sliders[i], переданный при вызове функции.

    let slideIndex = 1;
    showSlides(slideIndex);

    function nextSlide() {
        showSlides(slideIndex += 1);
    }

    function previousSlide() {
        showSlides(slideIndex -= 1);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        const slides = document.getElementsByClassName("item");
        const dots = document.getElementsByClassName("dot");
        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace("active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += "active";
    }
}