/*
* @Author: Zoe
* @Date:   2017-12-18 14:42:55
* @Last Modified by:   Zoe
* @Last Modified time: 2017-12-22 11:18:20
*/

(function(){
	var Util = (function(){
		var prefix = 'html5_reader_'; 
		var StorageGetter = function(key){
			return localStorage.getItem(prefix+key);
		}
		var StorageSetter = function(key,val){
			return localStorage.setItem(prefix+key,val);
		}
		return{
			StorageSetter:StorageSetter,
			StorageGetter:StorageGetter
		}
	})();

	var Dom = {
		top_nav : $("#top-nav"),
		bottom_nav : $(".bottom_nav"),
		font_pannel : $(".font-pannel"),
		fition_container :$("#fition_container"),
		night_button : $("#night-button")
	}
	var Win = $(window);
	var initFontsize = Util.StorageGetter("font_size");
	initFontsize = parseInt(initFontsize);
	if (!initFontsize) {
		initFontsize = 14;
	}
	Dom.fition_container.css("font-size",initFontsize);

	function main(){
		var nightMode=false;

		EventHandler();
		FontSwitch();


		function FontSwitch(){
			var colorArr=[{
				value : "#f7eee5",
				name : "米白",
			},{
				value : '#e9dfc7',
				name : '纸张',
				id : 'day'
			},{
				value : '#a4a4a4',
				name : '浅灰',
			},{
				value : "#cdefce",
				name : "护眼",
			},{
				value : '#283548',
				name : '灰蓝',
			},{
				value : '#0f1410',
				name : '夜间',
				font : '#4e534f',
				id : 'night'
			}];
			var color = Util.StorageGetter('background_color');
			if (color) {
				$('body').css("background-color",color);
			}
			for(var i=0;i<colorArr.length;i++){
				var display = "none";
				if (color==colorArr[i].value) {
					display="";
				}
				$("#bg-container").append('<div class="bg-container" data-color="'+colorArr[i].value+'" data-font="'+colorArr[i].font+'" id="'+colorArr[i].id+'" style="background-color:'+colorArr[i].value+'"><div class="bg-container-current" style="display:'+display+'"></div></div>');
			}
			$(".bg-container").click(function(){
				$("#bg-container").find(".bg-container-current").hide();
				$(this).find(".bg-container-current").show();
				var color = $(this).data('color');
				var font = $(this).data('font');
				$('body').css("background-color",color);
				Util.StorageSetter("background_color",color);
				//夜间模式
				if(font=="#4e534f"){
					nightMode = true;
					$("#night_icon").hide();
					$('#day_icon').show();
				}else{
					nightMode = false;
					$("#night_icon").show();
					$('#day_icon').hide();
				}
			});
		}

		//简单事件交互
		function EventHandler(){
			$("#mid").click(function(){
				if(Dom.top_nav.css("display")=="none"){
					Dom.top_nav.show();
					Dom.bottom_nav.show();
				}else{
					Dom.top_nav.hide();
					Dom.bottom_nav.hide();
					Dom.font_pannel.hide();
					$(".icon-ft").removeClass("icon-fto");
				}
			})		
			$("#font-button").click(function(){
				if(Dom.font_pannel.css("display")=="none"){
					Dom.font_pannel.show();
					$(".icon-ft").addClass("icon-fto");
				}else{
					Dom.font_pannel.hide();
					$(".icon-ft").removeClass("icon-fto");
				}
			})
			$("#large-font").click(function(){

				initFontsize += 1;
				Dom.fition_container.css("font-size",initFontsize);
				Util.StorageSetter("font_size",initFontsize);
			})
			$("#small-font").click(function(){

				initFontsize -= 1;
				Dom.fition_container.css("font-size",initFontsize);
				Util.StorageSetter("font_size",initFontsize);
			})
			//日间模式和夜间模式的切换
			Dom.night_button.click(function() {
				if (nightMode) {
					$('#day_icon').hide();
					$('#night_icon').show();
					$('#day').trigger('click');
					nightMode = false;
				} else {
					$('#day_icon').show();
					$('#night_icon').hide();
					$('#night').trigger('click');
					nightMode = true;
				}
			});
			Win.scroll(function(){
				Dom.top_nav.hide();
				Dom.bottom_nav.hide();
				Dom.font_pannel.hide();
				$(".icon-ft").removeClass("icon-fto");
			})
		}
	}
	main();

})();
