/*
* @Author: Zoe
* @Date:   2017-12-28 20:53:48
* @Last Modified by:   Zoe
* @Last Modified time: 2018-01-09 16:22:00
*/
$(function() {
	// $(".cate-list li").click(function(){
	// 	$(this).addClass("cate-active");
	// 	$(this).siblings("li").removeClass("cate-active");
	// });


	$.getJSON("data/catelist.json",function(data){
		var catelist=new Vue({
			el:"#cateId",
			data:{
				cates:data.catelist
			}
		})
	});

	$.getJSON("data/seckill.json",function(data){
		var seclist=new Vue({
			el:"#secId",
			data:{
				secs:data.seckill
			}
		})
	});

	$.getJSON("data/findgoods.json",function(data){
		var foodlist=new Vue({
			el:"#findId",
			data:{
				finds:data.foodlist
			}
		})
	});



    $('.banner').unslider();


})