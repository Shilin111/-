


$(function(){
    $("#third").load("../body/body1.html")
    //切换
    $("#end1").click(function() {
        $("#third").load($(this).data("page1"))
    })
})
$(function(){
    //切换
    $("#g1").click(function() {
        $("#third").load($(this).data("page2"))
    })
})
$(function(){
    //切换
    $("#h1").click(function() {
        $("#third").load($(this).data("page3"))
    })
})
$(function(){
    //切换
    $("#i1").click(function() {
        $("#third").load($(this).data("page4"))
    })
})


