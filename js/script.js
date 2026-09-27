$(document).ready(function () {

  "use strict";

  // Body Height

  $("body").height($(window).height());

  $(window).on("resize", function () {

    $("body").height($(window).height());

  });

  // Change Coordinate In The very very very small device

  if ($(window).width() <= 430) {

    $(".functions h1").hide();

    $(".mobile").show();

    $(".mobile .functions .f_row_mobile").css({
      marginBottom: "30px",
      marginRight: "2px"
    });

  } else {

    $(".functions h1").show();

    $(".mobile").hide();

  }

  $(window).on("resize", function () {

    if ($(window).width() <= 430) {

      $(".functions h1").hide();

      $(".mobile").show();

      $(".mobile .functions .f_row_mobile").css({
        marginBottom: "30px",
        marginRight: "2px"
      });

    } else {

      $(".functions h1").show();

      $(".mobile").hide();

    }

  });

});
