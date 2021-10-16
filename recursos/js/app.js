$(document).ready(function() {
    $('.sidenav').sidenav();
    $(".dropdown-trigger").dropdown({ constrainWidth: false });
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    }, setTimeout(autoplay, 4000));
});

function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4000);
}