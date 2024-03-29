(function ($) {
  "use strict";

  // offcanvas-js
  $(".offcanvas-open").click(function () {
    $(".offcanvas-menu").addClass("active");
    $(".offcanvas-overlay").addClass("active");
  });
  $(".offcanvas-close").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(".close-offcanvas").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(document).mouseup(function (e) {
    var container = $(".offmenu");

    // If the target of the click isn't the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(".offcanvas-menu").removeClass("active");
      $(".offcanvas-overlay").removeClass("active");
    }
  });

  // search-canvas
  // offcanvas-js
  $(".search-canvas-open").click(function () {
    $(".search-canvas").addClass("active");
  });
  $(".search-canvas-close").click(function () {
    $(".search-canvas").removeClass("active");
  });

  // owl-carousel
  $(".brand-active").owlCarousel({
    loop: true,
    margin: 50,
    responsiveClass: true,
    nav: false,
    navText: [
      '<span class="fas fa-chevron-left fa-2x"></span>',
      '<span class="fas fa-chevron-right fa-2x"></span>',
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 4,
        nav: false,
        loop: false,
      },
    },
  });
  $(".slider-a-active").owlCarousel({
    loop: false,
    margin: 32,
    items: 5,
    responsiveClass: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="far fa-chevron-left"></i>',
      '<i class="far fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
        stagePadding: 43,
        margin: 20,
      },
      575: {
        items: 3,
        stagePadding: 0,
        margin: 20,
      },
      767: {
        items: 4,
        stagePadding: 0,
        margin: 20,
      },
      991: {
        items: 4,
        stagePadding: 0,
      },
      1400: {
        items: 5,
        stagePadding: 0,
      },
    },
  });
  $(".product-card__image__slider-active").owlCarousel({
    loop: false,
    margin: 0,
    items: 1,
    responsiveClass: true,
    nav: true,
    dots: true,
    navText: [
      '<i class="far fa-chevron-left"></i>',
      '<i class="far fa-chevron-right"></i>',
    ],
  });
  $(".sug-slider-active").owlCarousel({
    loop: false,
    margin: 32,
    items: 4,
    responsiveClass: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="far fa-chevron-left"></i>',
      '<i class="far fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
        stagePadding: 43,
        margin: 20,
      },
      575: {
        items: 2,
        stagePadding: 0,
        margin: 20,
      },
      767: {
        items: 3,
        stagePadding: 0,
        margin: 20,
      },
      991: {
        items: 3,
        stagePadding: 0,
        margin: 20,
      },
      1400: {
        items: 4,
        stagePadding: 0,
      },
    },
  });
  $(".testimonial-slider-active").owlCarousel({
    loop: false,
    margin: 0,
    items: 1,
    responsiveClass: true,
    nav: false,
    dots: true,
    navText: [
      '<i class="far fa-chevron-left"></i>',
      '<i class="far fa-chevron-right"></i>',
    ],
  });

  $(function () {
    var owl = $(".img-modal-slider-active");
    owl.owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      responsiveClass: true,
      nav: true,
      dots: false,
      navText: [
        '<i class="far fa-chevron-left"></i>',
        '<i class="far fa-chevron-right"></i>',
      ],
      onInitialized: counter, //When the plugin has initialized.
      onTranslated: counter, //When the translation of the stage has finished.
    });

    function counter(event) {
      var element = event.target; // DOM element, in this example .owl-carousel
      var items = event.item.count; // Number of items
      var item = event.item.index + 1; // Position of the current item

      // it loop is true then reset counter from 1
      if (item > items) {
        item = item - items;
      }
      $("#img-modal-counter").html(
        `${item} <span class="sm">/ ${items}</span>`
      );
    }
  });

  // gallery-grid-item
  $(".gallery__grid__item").click(function () {
    $(".img-modal").addClass("active");
  });
  $(".img-modal-close").click(function () {
    $(".img-modal").removeClass("active");
  });

  //range-slider
  $(function () {
    $("#slider-range").slider({
      range: true,
      min: 10000,
      max: 100000000,
      values: [20000, 40000000],
      slide: function (event, ui) {
        $("#min-amount").val("$" + ui.values[0]);
        $("#max-amount").val("$" + ui.values[1]);
      },
    });
    $("#min-amount").val("$" + $("#slider-range").slider("values", 0));
    $("#max-amount").val("$" + $("#slider-range").slider("values", 1));
  });
  //range-slider-mobile
  $(function () {
    $("#slider-range-mobile").slider({
      range: true,
      min: 10000,
      max: 100000000,
      values: [20000, 40000000],
      slide: function (event, ui) {
        $("#min-amount-mobile").val("$" + ui.values[0]);
        $("#max-amount-mobile").val("$" + ui.values[1]);
      },
    });
    $("#min-amount-mobile").val(
      "$" + $("#slider-range-mobile").slider("values", 0)
    );
    $("#max-amount-mobile").val(
      "$" + $("#slider-range-mobile").slider("values", 1)
    );
  });

  // slider-range-pd
  $(function () {
    $("#slider-range-pd").slider({
      range: true,
      min: 10000,
      max: 100000000,
      values: [20000, 40000000],
      slide: function (event, ui) {
        $("#min-amount-pd").val("$" + ui.values[0]);
        $("#max-amount-pd").val("$" + ui.values[1]);
      },
    });
    $("#min-amount-pd").val("$" + $("#slider-range-pd").slider("values", 0));
    $("#max-amount-pd").val("$" + $("#slider-range-pd").slider("values", 1));
  });

  // hero-dropdown
  $(".hero__search__a").click(function () {
    let thisIs = this;
    let thisItem = thisIs.closest(".hero__search__single");
    thisItem.classList.toggle("show");
    let allItem = $(".hero__search__single");

    for (var i in allItem) {
      if (allItem[i] == thisItem) {
        delete allItem[i];
      } else {
        allItem[i].classList.remove("show");
      }
    }
  });

  // drop__down
  $(".drop__toggle").click(function () {
    let thisIs = this;
    let thisItem = thisIs.closest(".drop__item");
    thisItem.classList.toggle("show");
    let allItem = $(".drop__item");

    for (var i in allItem) {
      if (allItem[i] == thisItem) {
        delete allItem[i];
      } else {
        allItem[i].classList.remove("show");
      }
    }
  });
  $(document).mouseup(function (e) {
    var container = $(".drop__item");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(".drop__item").removeClass("show");
    }
  });

  var wind = $(window);
  var sticky = $("#sticky-header");
  wind.on("scroll", function () {
    var scroll = wind.scrollTop();
    if (scroll < 5) {
      sticky.removeClass("sticky");
    } else {
      sticky.addClass("sticky");
    }
  });
  $(window).on("load resize", function () {
    $(".header-section").height($(".header-in").outerHeight());
    $("body").css("--header-height", $(".header-in").outerHeight() + "px");
  });
})(jQuery);

$(document).ready(function () {
  // scroll up
  $(function () {
    $.scrollUp();
  });

  // nice-select
  $(".nice-select").niceSelect();

  // preloader
  $("#preloader").fadeOut(500);
});

// custom-nice-input
$(".nice-input")
  .siblings(".minus-button")
  .click(function () {
    if (
      $(this).siblings(".nice-input").attr("value") >
      $(this).siblings(".nice-input").attr("min") * 1
    ) {
      $(this)
        .siblings(".nice-input")
        .attr("value", $(this).siblings(".nice-input").attr("value") - 1);
      var source = $(this)
        .parents(".shopping-bag-item")
        .find(".option.price .currency");
      var target = $(this)
        .parents(".shopping-bag-item")
        .find(".option.subtotal .currency");
      target.text(target.text() - source.text() * 1);
    }
  });
$(".nice-input")
  .siblings(".plus-button")
  .click(function () {
    if (
      $(this).siblings(".nice-input").attr("value") <
      $(this).siblings(".nice-input").attr("max") * 1
    ) {
      $(this)
        .siblings(".nice-input")
        .attr("value", $(this).siblings(".nice-input").attr("value") - -1);
      var source = $(this)
        .parents(".shopping-bag-item")
        .find(".option.price .currency");
      var target = $(this)
        .parents(".shopping-bag-item")
        .find(".option.subtotal .currency");
      target.text(target.text() - source.text() * -1);
    }
  });
