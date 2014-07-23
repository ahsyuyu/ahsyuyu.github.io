var search=function(tofind,field){
	var field=field || "key"  ; //如果使用者沒有指定，就用 key 	
	var out=[];

	//var searchword="tofind";
	var searchword=new RegExp(tofind,"g");

	for(var i=0;i<idioms.length;i++){
		var find=idioms[i].field.match(searchword);
		if(find){
			idioms[i].field=idioms[i].field.replace(searchword,changecolor);
			out.push(idioms[i]);
			//out.replace(searchword_re, changecolor(searchword) );
		}
	}
	return out;
}

var changecolor=function(input){

	/*document.getElementById("change").innerHTML=input;
	var color=document.getElementById("change").innerHTML;
	return color;*/
	return '<span class="tofind">'+input+"</span>"
}
