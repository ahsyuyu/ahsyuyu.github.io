$(document).ready(function (){
    $(".slist").click(function (item){
    	var sec = item.currentTarget.id;
        $('html, body').animate({
            scrollTop: $("div[sec='" + sec + "']" ).offset().top - 20
        }, 1000);
    });
});

$(document).ready(function (){
    $(".top").click(function (item){
    	var sec = item.currentTarget.id;
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });
});

$(document).ready(function (){
    $(".elist").click(function (item){
        var sec = item.currentTarget.id;
        $('html, body').animate({
            scrollTop: $("div[sec='" + sec + "']" ).offset().top - 20
        }, 1000);
    });
});