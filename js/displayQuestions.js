var i = 1;
var str = "";
$(document).ready(function(){
	//first question
	$("#small").click(function(){
		str = "You want to attend a small school,<br>";
		//switching question(sp)
		$("#q"+i).fadeOut("slow");
		i+=1;
		$("#q"+i).fadeIn("slow");
	})
	$("#medium").click(function(){
		str = "You want to attend a medium sized school,<br>";
		//sq
		$("#q"+i).fadeOut("slow");
		i+=1;
		$("#q"+i).fadeIn("slow");
	})
	$("#large").click(function(){
		str = "You want to attend a large school,<br>";
		//sq
		$("#q"+i).fadeOut("slow");
		i+=1;
		$("#q"+i).fadeIn("slow");
	})
	
	//second question
	$("#uc").click(function(){
		str += "that is a university,<br>"
		//sq
		$("#q"+i).fadeOut("slow");
		i+=1;
		$("#q"+i).fadeIn("slow");
	})
	$("#cc").click(function(){
		str += " that is a community college,<br>"
		//sq
		$("#q"+i).fadeOut("slow");
		i+=1;
		$("#q"+i).fadeIn("slow");
	})
	$("#pc").click(function(){
		str += " that is a private university,<br>"
		//sq
		$("#q"+i).fadeOut("slow");
		i+=1;
		$("#q"+i).fadeIn("slow");
	})
	
	//thrird question transition cuz answer doesn't really matter
	$("#are").click(function(){
		$("#q"+i).fadeOut("slow");
		i+=1;
		$("#q"+i).fadeIn("slow");
	})
	$("#not").click(function(){
		$("#q"+i).fadeOut("slow");
		i+=1;
		$("#q"+i).fadeIn("slow");
	})
	
	
	//fourth question
	$("#Christian").click(function(){
		str += "and is affiliated with Christianity."
		$("#type").append(str);
		//sq
		$("#q"+i).fadeOut("slow");
		i+=1;
		$("#q"+i).fadeIn("slow");
	})
	$("#Islam").click(function(){
		str += "and is affiliated with Islam."
		$("#type").append(str);
		//sq
		$("#q"+i).fadeOut("slow");
		i+=1;
		$("#q"+i).fadeIn("slow");
	})
	$("#Atheist").click(function(){
		str += "and is not affiliated with any religion or it doesn't matter."
		$("#type").append(str);
		//sq
		$("#q"+i).fadeOut("slow");
		i+=1;
		$("#q"+i).fadeIn("slow");
	})
	$("#NotListed").click(function(){
		str += "and is religiously affiliated."
		$("#type").append(str);
		//sq
		$("#q"+i).fadeOut("slow");
		i+=1;
		$("#q"+i).fadeIn("slow");
	})
});

