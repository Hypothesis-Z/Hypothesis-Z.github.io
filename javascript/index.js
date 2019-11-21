$(document).ready(function(){

    $('#nav ul li').each(function(index){
        $(this).click(function() {
            $("#nav ul li").eq(index).addClass("nav-selected").siblings().removeClass("nav-selected");
            $("#sections > div").eq(index).addClass("show").removeClass("hide").siblings().addClass("hide").removeClass("show");
        });
    });

    $.ajax({
        type: "get",
        url: "https://api.github.com/users/hypothesis-z/repos",    
        dataType: "json",
        success: function(data){
            var repositories = $("#sections > div").eq($("#nav ul li").index($("#repositories")));
            $.each(data, function(i, item){
                function getHashCode(str,caseSensitive){
                    if(!caseSensitive){
                        str = str.toLowerCase();
                    }
                    // 1315423911=b'1001110011001111100011010100111'
                    var hash  =   1315423911,i,ch;
                    for (i = str.length - 1; i >= 0; i--) {
                        ch = str.charCodeAt(i);
                        hash ^= ((hash << 5) + ch + (hash >> 2));
                    }
                    return  (hash & 0x7FFFFFFF);
                };
                var repo = $(".repo").first().clone();
                repo.find(".name").empty().append(item.name);;
                repo.find(".language").empty().append(item.language);
                var colorCode = "#" + (getHashCode(item.language, false) & 0xffffff).toString(16);
                repo.find(".language-color").css("background-color" , colorCode);
                repo.find(".create-date").empty().append(item.created_at);
                repo.find(".stars").empty().append(item.stargazers_count);
                repo.addClass("show").removeClass("hide");
                repo.attr("onclick", "window.open('"+item.html_url+"')");
                repositories.append(repo);
            });
        },
        error: function(err){
            alert(err);
        },
    });
    
    $('#foot').text("©" + (new Date()).getFullYear() +  " Zeqing Z. All Rights Reserved.");
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