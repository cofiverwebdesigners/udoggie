function showmenu(){
	var mynav=document.getElementById("mynav");
	var my_hambagger=document.getElementById("ham");
	
	if(mynav.className==="mynav"){
		mynav.className+=" responsive";
	}else{
		mynav.className="mynav";
	}
	my_hambagger.style.display="none";
}

function closemenu(){
}
