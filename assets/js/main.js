(function ($) {
  'use strict';

  //===== Prealoder

  $(window).on('load', function (event) {
    $('.preloader').delay(500).fadeOut(500);
  });

  //===== Mobile Menu

  $('.navbar-toggler').on('click', function () {
    $(this).toggleClass('active');
  });

  $('.navbar-nav a').on('click', function () {
    $('.navbar-toggler').removeClass('active');
  });

  //===== close navbar-collapse when a  clicked

  $('.navbar-nav a').on('click', function () {
    $('.navbar-collapse').removeClass('show');
  });

  //===== Sticky

  $(window).on('scroll', function (event) {
    var scroll = $(window).scrollTop();
    if (scroll < 10) {
      $('.navigation').removeClass('sticky');
    } else {
      $('.navigation').addClass('sticky');
    }
  });

  //===== Section Menu Active

  var scrollLink = $('.page-scroll');
  // Active link switching
  $(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function () {
      var sectionOffset = $(this.hash).offset().top - 73;

      if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    });
  });

  // Parallaxmouse js

  function parallaxMouse() {
    if ($('#parallax').length) {
      var scene = document.getElementById('parallax');
      var parallax = new Parallax(scene);
    }
  }
  parallaxMouse();

  //===== Progress Bar

  if ($('.progress-line').length) {
    $('.progress-line').appear(
      function () {
        var el = $(this);
        var percent = el.data('width');
        $(el).css('width', percent + '%');
      },
      { accY: 0 }
    );
  }

  //===== Counter Up

  $('.counter').counterUp({
    delay: 10,
    time: 1600,
  });

  //===== SweetAlert2

  document.getElementById('pop-up-1').onclick = function () {
    Swal.fire({
      title: 'Preparación',
      html:
        '<section class= "popupsweet"' +
        '<ul>' +
        '<li>Cuatrovientos establece en su Plan Estratégico 18-21 la acción: 1.1.5 Analizar la RSE del CI' +
        'Cuatrovientos <br></li>' +
        '<li>Diagnóstico con la metodología <b>INNOVARSE</b> del Gobierno de Navarra (2019), que' +
        'concluye: <i>La Dimensión Ambiental es la dimensión que ofrece mayores márgenes de mejora' +
        '(oportunidades)</i></li>' +
        '<li>Desde el equipo de Internacionalización se solicita y se concede liderar un proyecto Erasmus sobre' +
        'La huella de Carbono, con el fin de desarrollar la dimensión ambiental del Centro.</li>' +
        '<li>Dirección nombra un equipo responsable de la dinamización del proyecto, compuesto por ' +
        'el equipo de ejes: <b>internacionalización, compromiso e innovación + un asesor medioambiental externo.</b>' +
        '</li>' +
        '<li> Se analiza la situación del Centro y se define el RETO del Proyecto: <b>“SER CENTRO NEUTRO EN' +
        'EMISIONES</b></li>' +
        '<li> Organización Gymkana de sensibilización: 21 septiembre al 16 de octubre (4 semanas).</li>' +
        '<li>Analizar la situación del Centro, que cuenta con la participación del alumnado: ' +
        'miden la huella de Carbono del Centro y ' +
        'proponen posibles acciones para reducir y compensar las emisiones</li>' +
        '<li>Como producto de esa jornada y con la colaboración del equipo coordinador, Dirección y nuestro' +
        ' asesor medioambiental establecen:' +
        '<ul>' +
        '<li>Una Declaración Medioambiental de Cuatrovientos</li>' +
        '<li>Un informe sobre la huella de carbono y su certificación MEC.</li>' +
        '<li>' +
        '<a href="http://www.cuatrovientos.org/proyecto-stop-co2-memoria/">Un plan de reducción y compensación de emisiones </a></li>' +
        '</ul>' +
        '</li>' +
        '</ul>' +
        '</section>',
      width: '75rem',
      confirmButtonColor: '#01d091',
    });
  };

  document.getElementById('pop-up-2').onclick = function () {
    Swal.fire({
      title: 'Desarrollo',
      html:
        '<section class= "popupsweet"' +
        '<ul>' +
        '<li>La Dirección del Centro y el equipo coordinador ponen en marcha diferentes medidas:' +
        ' certificación energética 100% renovable, instalación de sistema de producción de energía renovable en el edificio y plantación de 100 árboles.' +
        '</li>' +
        '<li> En la semana cultural del Centro se realizan actividades encaminadas a conseguir el reto (<b>Art Recyclers, Formación ODS</b>)</li>' +
        '<li>Se introduce en el módulo de proyecto de 2º de los CCSS la variable medioambiental.</li>' +
        '<li>El alumnado de 1º de cada ciclo realizará un trabajo en el aula (jornada de trabajo) en el que' +
        ' desarrollen algún producto que contribuya a las medidas propuestas en el <b>Plan de reducción y' +
        ' compensación</b>.</li>' +
        '</ul>' +
        '</section>',
      width: '75rem',
      confirmButtonColor: '#01d091',
    });
  };

  document.getElementById('pop-up-3').onclick = function () {
    Swal.fire({
      title: 'Cierre',
      html:
        '<section class= "popupsweet"' +
        '<img src="800px-Proyecto_en_construccion.jpg">' +
        '</section>',
      width: '75rem',
      confirmButtonColor: '#01d091',
    });
  };

  document.getElementById('pop-up-erasmus').onclick = function () {
    Swal.fire({
      text:
        'El proyecto “STOP CO2” está cofinanciado por el programa' +
        ' Erasmus+ de la Unión Europea. El contenido de esta página' +
        ' es responsabilidad exclusiva de Cuatrovientos' +
        ' y ni la Comisión' +
        'Europea, ni el Servicio Español para la Internacionalización de la Educación' +
        '(SEPIE) son responsables del uso que pueda hacerse de la información aquí' +
        'difundida.',
    });
  };

  //===== Magnific Popup

  $('.image-popup').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true,
    },
  });

  $('.video-1').magnificPopup({
    type: 'iframe',
    iframe: {
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: 'v=',
          src: 'https://www.youtube.com/embed/4my4nqS_CeE',
        },
      },
    },
  });

  $('.video-2').magnificPopup({
    type: 'iframe',
    iframe: {
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: 'v=',
          src: 'https://www.youtube.com/embed/cP389HOHrzU',
        },
      },
    },
  });

  //===== Back to top

  // Show or hide the sticky footer button
  $(window).on('scroll', function (event) {
    if ($(this).scrollTop() > 600) {
      $('.back-to-top').fadeIn(0);
    } else {
      $('.back-to-top').fadeOut(200);
    }
  });

  //Animate the scroll to yop
  $('.back-to-top').on('click', function (event) {
    event.preventDefault();

    $('html, body').animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });

  //=====
})(jQuery);
