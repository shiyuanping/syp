/*
* @Author: Zoe
* @Date:   2017-12-28 20:53:48
* @Last Modified by:   Zoe
* @Last Modified time: 2017-12-29 18:03:47
*/
$(function() {
	// $(".cate-list li").click(function(){
	// 	$(this).addClass("cate-active");
	// 	$(this).siblings("li").removeClass("cate-active");
	// });


	$.getJSON("data/catelist.json",function(data){
		var catejson=data.catelist;
		var catelist=new Vue({
			el:"#cateId",
			data:{
				cates:catejson
			}
		})
	})

    $('.banner').unslider();


})