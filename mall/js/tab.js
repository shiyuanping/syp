/*
* @Author: Zoe
* @Date:   2018-01-09 13:38:32
* @Last Modified by:   Zoe
* @Last Modified time: 2018-01-09 13:54:12
*/
$('.tab li').click(function(){
	$(".tab-cont").hide().eq($(this).index()).show();
})