document.addEventListener("DOMContentLoaded", function() {
    const slides = [
        {
            "image":"slide1.jpg",
            "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
        },
        {
            "image":"slide2.jpg",
            "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
        },
        {
            "image":"slide3.jpg",
            "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
        },
        {
            "image":"slide4.png",
            "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
        },
    ];

    const banner = document.getElementById("banner");
    const bannerImg = document.querySelector(".banner-img");
    const arrowLeft = document.querySelector(".arrow_left");
    const arrowRight = document.querySelector(".arrow_right");
    const tagLine = document.querySelector("#banner p");
    const dotsContainer = document.querySelector(".dots");

    let currentIndex = 0;

    // Fonction pour changer le slide
    function changeSlide(index) {
        const slide = slides[index];
        bannerImg.src = "./assets/images/slideshow/" + slide.image;
        tagLine.innerHTML = slide.tagLine;
        updateActiveDot(index);
    }

    // Fonction pour mettre à jour le point actif
    function updateActiveDot(index) {
        const dots = document.querySelectorAll(".dot");
        dots.forEach((dot, i) => {
            dot.classList.remove("dot_selected");
            if (i === index) {
                dot.classList.add("dot_selected");
            }
        });
    }

    // Event listener pour la flèche gauche
    arrowLeft.addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        changeSlide(currentIndex);
    });

    // Event listener pour la flèche droite
    arrowRight.addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % slides.length;
        changeSlide(currentIndex);
    });

    // Création des bullet points
    slides.forEach((slide, index) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (index === 0) {
            dot.classList.add("dot_selected");
        }
        dot.addEventListener("click", function() {
            currentIndex = index;
            changeSlide(currentIndex);
        });
        dotsContainer.appendChild(dot);
    });
});

