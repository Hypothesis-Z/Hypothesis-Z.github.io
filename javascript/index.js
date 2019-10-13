$(function(){
    $('#nav ul li').each(function(index){
        $(this).click(function() {
            $("#nav ul li").eq(index).addClass("nav_selected").siblings().removeClass("nav_selected");
            $("#sections > div").eq(index).addClass("section_show").removeClass("section_hide").siblings().addClass("section_hide").removeClass("section_show");
        });
    });
    /*
    var tabs = $('.nav ul li').getElementsByTagName('li')
    var elements = this.document.getElementsByClassName('section');

    for (var i = 0; i < tabs.length; i++){
        var t = tabs[i];
        t.onclick = function(){
            for (var j = 0; j < tabs.length; j++){
                var t2 = tabs[j];
                t2.style.background="#"
            }
        }
    }
    */
});