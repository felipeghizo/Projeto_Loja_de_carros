$(function(){
    $("body").on("click", "div.img", function(){
        var img = $(this).attr("id");
        var destaque = $(".ft_destaque").attr("id");
        $(".ft_destaque").fadeOut(
            500, 
            function(){
                console.log(img);
                $(".ft_destaque").attr("id", img);
                $(".ft_destaque").fadeIn(500);
        });
        $("#"+img).fadeOut(
            500, 
            function(){
                console.log(img);
                $("#"+img).attr("id", destaque);
                $("#"+img).css("display", "block");
                $(".img").fadeIn(500);
        });
    });
});

