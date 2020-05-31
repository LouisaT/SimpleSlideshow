var slideIndex = 1;
zeigeBilder(slideIndex);

// Next/previous controls
function plusSlides(n) {
  zeigeBilder(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  zeigeBilder(slideIndex = n);
}

function zeigeBilder(n) {
  var x;
  var bilder = document.getElementsByClassName("content");
  var dots = document.getElementsByClassName("dot");
  if (n > bilder.length) {slideIndex = 1}
  if (n < 1) {slideIndex = bilder.length}
  for (x = 0; x < bilder.length; x++) {
      bilder[x].style.display = "none";
  }
  for (x = 0; x < dots.length; x++) {
      dots[x].className = dots[x].className.replace(" active", "");
  }
  bilder[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 