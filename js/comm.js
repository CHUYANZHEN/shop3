$(function () {
    $.ajax({
        url: "http://127.0.0.1:5500/header.html",
        type: "get",
        success: function (result) {
            $("header").replaceWith(result);
        }
    })

    $.ajax({
        url: "http://127.0.0.1:5500/footer.html",
        type: "get",
        success: function (result) {
            $("footer").replaceWith(result);
        }
    })

})