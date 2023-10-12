$(function(){
    var currentValue = 0;
    var Draging = false;   
    var preco_max = 70000;
    var preco_atual = 0;
    
    $("#pointer_barra").mousedown(function(){
        Draging = true;
    });
    $("#pointer_barra").mouseup(function(){
        Draging = false;
        enableTextSeletion();
    });
     
    $("#barra_preco").mousemove(function(e){
        if(Draging){
            disableTextSeletion();
            var el_base = $(this);
            var mouseX = e.pageX - el_base.offset().left;
            if(mouseX < 0){
                mouseX = 0;
            }
            if (mouseX > el_base.width()){
                mouseX = el_base.width();
            }

            $("#pointer_barra").css("left", (mouseX-13)+"px");
            currentValue = (mouseX/el_base.width()) * 100;
            $("#barra_preco_fill").css("width", currentValue+"%");

            preco_atual = (currentValue/100) * preco_max;
            preco_atual =  preco_atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
            $("#preco_pesquisa").html(preco_atual);

        }
    });

    function disableTextSeletion(){
        $("body").css("-webkit-user-select", "none");
        $("body").css("-moz-user-select", "none");
        $("body").css("-ms-user-select", "none");
        $("body").css("-o-user-select", "none");
        $("body").css("user-select", "none");
    }

    function enableTextSeletion(){
        $("body").css("-webkit-user-select", "auto");
        $("body").css("-moz-user-select", "auto");
        $("body").css("-ms-user-select", "auto");
        $("body").css("-o-user-select", "auto");
        $("body").css("user-select", "auto");
    }
    
});