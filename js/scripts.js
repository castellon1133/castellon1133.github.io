var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });


  $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,  // El carrusel se repetirá una vez llegues al final
        margin: 10,  // Espacio entre los ítems
        nav: true,   // Muestra los botones de siguiente/anterior
        dots: true,  // Muestra los puntos de navegación
        autoplay: true,  // Reproducción automática de las imágenes
        autoplayTimeout: 3000,  // Tiempo entre cada imagen (3 segundos)
        autoplayHoverPause: true,  // Pausa cuando se pasa el mouse por encima
        responsive: {  // Configuración responsiva
            0: {
                items: 1  // En pantallas pequeñas muestra 1 imagen
            },
            600: {
                items: 2  // En pantallas medianas muestra 2 imágenes
            },
            1000: {
                items: 3  // En pantallas grandes muestra 3 imágenes
            }
        }
    });
  });
  