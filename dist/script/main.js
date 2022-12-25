$(window).on("load", function () {
  // home section slideshow
  let slideIndex = $(".slide#active").index();
  const slideLen = $(".slide").length;

  function slideShow() {
    $(".slide").removeAttr("id").eq(slideIndex).attr("id", "active");
    if (slideIndex == slideLen - 1) {
      slideIndex = 0;
    } else {
      slideIndex++;
    }
    setTimeout(slideShow, 5000);
  }
  slideShow();

  // playing music
  $(".musik")[0].play();
  $(".play").click(function () {
    $(".musik")[0].play();
    $(".play").addClass("hidden");
    $(".pause").removeClass("hidden");
  });

  $(".pause").click(function () {
    $(".musik")[0].pause();
    $(".pause").addClass("hidden");
    $(".play").removeClass("hidden");
  });
});

$(document).ready(function () {
  // header scroll and back to top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("header").attr("id", "scroll");
      $(".keAtas").removeClass("hidden");
    } else {
      $("header").removeAttr("id");
      $(".keAtas").addClass("hidden");
    }
  });

  $(".keAtas").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });

  // toggle navigation
  $("#hamburger").click(function () {
    $("#menu").slideToggle();
  });
  $("#menu li a").click(function () {
    if ($(window).width() < 768) {
      $("#menu").slideToggle();
    }
  });

  // scrollIt
  $.scrollIt({
    topOffset: -70,
  });

  // AOS
  AOS.init();

  // copying text 1
  $("#copy1").click(function () {
    const temp = $("<input>");
    $("body").append(temp);

    temp.val($("#adress").text()).select();
    document.execCommand("copy");
    temp.remove();

    $("#copy1").text("Berhasil disalin");
    setTimeout(function () {
      $("#copy1").text("Salin Alamat");
    }, 1000);
  });

  // copying text 2
  $("#copy2").click(function () {
    const temp = $("<input>");
    $("body").append(temp);

    temp.val($("#norek").text()).select();
    document.execCommand("copy");
    temp.remove();

    $("#copy2").text("Berhasil disalin");
    setTimeout(function () {
      $("#copy2").text("Salin No. Rekening");
    }, 1000);
  });

  // copying text 3
  $("#copy3").click(function () {
    const temp = $("<input>");
    $("body").append(temp);

    temp.val($("#notel").text()).select();
    document.execCommand("copy");
    temp.remove();

    $("#copy3").text("Berhasil disalin");
    setTimeout(function () {
      $("#copy3").text("Salin No. Telepon");
    }, 1000);
  });

  // toggle of gift
  $("#angpau").click(function () {
    $("#tf").slideToggle("hidden");
  });

  $("#hadiah").click(function () {
    $("#alamat").slideToggle("hidden");
  });

  // countdown timer
  const dateTo = new Date("Dec 7, 2025 08:00:00").getTime();

  const countDown = setInterval(function () {
    const now = new Date().getTime();
    const gap = dateTo - now;

    const day = Math.floor(gap / (1000 * 60 * 60 * 24));
    const hour = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minute = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
    const second = Math.floor((gap % (1000 * 60)) / 1000);

    $("#hari").text(day);
    $("#jam").text(hour);
    $("#menit").text(minute);
    $("#detik").text(second);

    if (gap <= 0) {
      clearInterval(countDown);
      $("#hari").text("00");
      $("#jam").text("00");
      $("#menit").text("00");
      $("#detik").text("00");
    }
  }, 1000);
});
