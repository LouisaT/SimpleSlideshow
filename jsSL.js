var = slideIndex = 1;
zeigeSlides(slideIndex);

// Weiter/Zurück Knöpfe
function weiterSlides(n) {
    zeigeSlides(slideIndex += n);
}

// Thumbnails um die Bilder weiterzuklicken
function aktuellesBild(n) {
    zeigeSlides(slideIndex = n);
}

function zeigeSlides(n) {
    var i;
    var bilder = document.getElementsByClassName("content");
    if (n > bilder.length) {slideIndex = 1}
    if (n < 1) {slideIndex = bilder.length}
    for (i = 0; i < slides.length; i++) {
        bilder[i].getElementsByClassName.display = "none";
    }
    for (i = 0, i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    bilder[slideIndex-1].getElementsByClassName.display = "block";
    dots[slideIndex-1].className += " active";
}