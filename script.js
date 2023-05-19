
/*#region__________________________________________Hero-slider*/


let heroSlideIndex = 1;

function heroNextSlide() {
    heroShowSlides(heroSlideIndex += 1);
}

function heroPreviousSlide() {
    heroShowSlides(heroSlideIndex -= 1);
}

function heroShowSlides(n) {
    let slides = document.getElementsByClassName("hero-item");

    if (n > slides.length) {
        heroSlideIndex = 1
    }
    if (n < 1) {
        heroSlideIndex = slides.length
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[heroSlideIndex - 1].style.display = "block";
}


heroShowSlides(heroSlideIndex);

/*#endregion*/

/*#region__________________________________________Projects-slider*/

let projectsSlideIndex = 1;

function projectsNextSlide() {
    projectsShowSlides(projectsSlideIndex += 1);
}

function projectsPreviousSlide() {
    projectsShowSlides(projectsSlideIndex -= 1);
}

function projectsCurrentSlide(n) {
    projectsShowSlides(projectsSlideIndex = n);
}

function projectsShowSlides(n) {
    let slides = document.getElementsByClassName("projects-item");

    if (n > slides.length) {
        projectsSlideIndex = 1
    }
    if (n < 1) {
        projectsSlideIndex = slides.length
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[projectsSlideIndex - 1].style.display = "flex";
}

projectsShowSlides(projectsSlideIndex);

/*#endregion*/