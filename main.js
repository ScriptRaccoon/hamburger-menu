$(".hamburger").click(toggleMenu);

$("#status").text("Try out the hamburger menu");

function toggleMenu() {
    $(".menu").toggleClass("menuOpen");
    $(".hamburger").toggleClass("cross");
}

$(".menuItem").click(clickMenuItem);

function clickMenuItem() {
    $(".hamburger").removeClass("cross");
    $(".menu").removeClass("menuOpen");
    const target = $(this).attr("data-item");
    $("#status").text(`You clicked ${target}`);
}
