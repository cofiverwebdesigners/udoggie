function showmenu(){
	var mynav=document.getElementById("mynav");
	var my_hambagger=document.getElementById("ham");
	var felo=document.getElementById("felo");
	
	if(mynav.className==="mynav"){
		mynav.className+=" responsive";
		my_hambagger.style.display="none";
		felo.style.display="none";
	}else{
		mynav.className="mynav";
	}
	
}

function closemenu(){
	var mynav=document.getElementById("mynav");
	var my_hambagger=document.getElementById("ham");
	var felo=document.getElementById("felo");

	
	if (mynav.className.includes("responsive")){
		mynav.className=mynav.className.replace(" responsive","");
		my_hambagger.style.display="block";
		felo.style.display="block";
	}
	
}


