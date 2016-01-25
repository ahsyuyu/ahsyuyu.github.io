// var gotoSec = function(section) {
// 	console.log(section);
// 	var position = $("div[sec='" + section + "']").position().top;
// 	$("html, body").scrollTop( 600 );
// }

$(document).ready(function (){
    $(".menuItem").click(function (item){
    	var sec = item.currentTarget.id;
        $('html, body').animate({
            scrollTop: $("div[sec='" + sec + "']" ).offset().top - 20
        }, 1000);
    });
});