window.onload = function () {
    $("#more").click(function () {
        $("#menus li:nth-child(n+19)").toggleClass("toggle");
        $(this).toggleClass("up");
    })
}



