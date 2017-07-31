$(document).ready(function(){
	$(".pagination li").click(function(){
		$(".pagination li").eq($(this).index()).addClass("active").siblings().removeClass("active");
	})
})
