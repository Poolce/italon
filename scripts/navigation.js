$(document).ready(function () {
    $(".hide-onload").hide();
    progs_right_swap();
})
$("#ps-nav-right").click(function () {
    progs_right_swap();
});
$("#ps-nav-left").click(function () {
    progs_left_swap();
});

local_pageX = 0;
document.getElementById("program-display").addEventListener('touchstart', function (e) {
    local_pageX = e.changedTouches[0].pageX;
}, false);

document.getElementById("program-display").addEventListener('touchend', async function (e) {
    if (e.changedTouches[0].pageX < local_pageX)
    progs_right_swap();
    else if (e.changedTouches[0].pageX > local_pageX)
    progs_left_swap();
}, false);



$(".s-image").click(function () {
    $(this).clone().appendTo("#hider");
    $('#hider').fadeIn("slow");
    lockScroll();
});
$("#hider").click(function () {
    $('#hider').fadeOut("slow", function () {
        $('#hider').empty();
        unlockScroll();
    });
});

var header_content_flag = 0;
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    pos = $("#header-adres").position().top;
    if (scroll > pos && header_content_flag == 0) {
        $("#nav-bar-logo").fadeIn("slow");
        header_content_flag = 1
    }
    else if (scroll < pos && header_content_flag == 1) {
        $("#nav-bar-logo").fadeOut("slow");
        header_content_flag = 0
    }
});
$("#About").click(function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#about-section").offset().top
    }, 1000);
});
$("#Sertification").click(function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#sertification-section").offset().top
    }, 1000);
});
$("#Contacts").click(function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#contacts-section").offset().top
    }, 1000);
});
$("#Programs").click(function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#programs-section").offset().top
    }, 1000);
});
$("#nav-bar-logo").click(function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("body").offset().top
    }, 1000);
});
var tel_nomber_flag = 0;
$("#tel-nomber-img").click(function () {
    if (tel_nomber_flag == 0) {
        $('#tel-nomber-nom').fadeIn("fast");
        $("#tel-nomber").stop().animate({ "width": "40vw" }, 500);
        tel_nomber_flag = 1;
    }
    else {
        $('#tel-nomber-nom').fadeOut("fast");
        $("#tel-nomber").stop().animate({ "width": "8vw" }, 500);
        tel_nomber_flag = 0;
    }
});