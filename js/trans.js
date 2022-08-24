$(document).ready(function(){
    $(".thumbnail img").on({
        mouseenter: function() {
            $("#mainImg").attr("src", $(this).attr("src"))
    }
    })
})
