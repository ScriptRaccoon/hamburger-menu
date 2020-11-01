$(".hamburger").click(toggleMenu);

$("#status").text("Try out the hamburger menu");

function toggleMenu() {
    $(".menu").toggle();
}

$(".menuItem").click(clickMenuItem);

function clickMenuItem() {
    $(".menu").hide();
    const target = $(this).attr("data-item");
    $("#status").text(`You clicked ${target}`);
}
