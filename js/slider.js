//  SLIDER

let slideIndex = 1;
showSlides(slideIndex);

// Función para cambiar de slide
function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Función para mostrar el slide actual
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Función principal para mostrar los slides
function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}