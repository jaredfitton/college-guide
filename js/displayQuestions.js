$(document).ready(function(){
	for(index = 1;index < 8;index++){
		console.log(index);
		$("#q"+ index).delay(800).fadeIn("slow");
	}
});