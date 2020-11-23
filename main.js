$(".hamburger").click(toggleMenu);

function toggleMenu() {
    $(".menu").toggleClass("menuOpen");
    $(".hamburger").toggleClass("cross");
}

$(".menuItem").click(clickMenuItem);

function clickMenuItem() {
    $(".hamburger").removeClass("cross");
    $(".menu").removeClass("menuOpen");
    const target = $(this).attr("data-item");
    const offset = $(`.${target}`).offset().top;
    $("html, body").animate({ scrollTop: offset }, "slow");
}
