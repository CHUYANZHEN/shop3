$(function () {
    //图片展示,小图大图切换
    $("#smallimg").on("mouseenter", "li", function () {
        var $li = $(this);
        var img = $li.children("img");
        console.log();
        $("#bigimg").prop("src", img.prop("src"));
        $li.addClass("hover");
        $li.siblings().removeClass("hover");
    })
    //数量加减
    //获取input中现存的数值
    $("#reduce").click(function () {
        var num = $("#counts").val();
        if (num > 1) {
            num--;
            $("#counts").val(num);
        }
    })
    $("#add").click(function () {
        var num = $("#counts").val();
        num++;
        $("#counts").val(num);
    })
    //切换零食详情/零食点评/配送支付/服务保障
    $("#list").on("click", "li", function () {
        $(this).addClass("onchecked").siblings().removeClass("onchecked");
        var listid = $(this).attr("data-idx");
        $(`#${listid}`).removeClass("display-none").siblings().addClass("display-none");
    })
})