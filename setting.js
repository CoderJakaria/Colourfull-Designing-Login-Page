document.querySelector("#inpTag").addEventListener("input",function(){

	if(this.value.length>10){
		document.querySelector("#invName").style.display="block"
	}

})