$(document).ready(function(){
	//for(index = 1;index < 8;index++){
		//console.log(index);
		//$("#q"+ index).delay(800).fadeIn("slow");
	//}
	$("#1").click(function(){
		$("#1").addClass("active");
		$("#2").removeClass("active");
		$("#3").removeClass("active");
	})
	$("#2").click(function(){
		$("#2").addClass("active");
		$("#1").removeClass("active");
		$("#3").removeClass("active");
	})
	$("#3").click(function(){
		$("#3").addClass("active");
		$("#2").removeClass("active");
		$("#1").removeClass("active");
	})
});