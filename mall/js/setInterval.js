/*
* @Author: Zoe
* @Date:   2018-01-09 12:15:13
* @Last Modified by:   Zoe
* @Last Modified time: 2018-01-09 13:59:36
*/
function TimeDown(){
	var NowTime = new Date();
	var EndTime = new Date('2018/01/10 15:04:00');
	var t = EndTime.getTime() - NowTime.getTime();
	var h = 00;
	var m = 0;
	var s = 0;
	if(t >= 0){
		h = Math.floor(t/1000/60/60%24);
		m = Math.floor(t/1000/60%60);
		s = Math.floor(t/1000%60);
	}
	document.getElementById("t_h").innerHTML=h;
	document.getElementById("t_m").innerHTML=m;
	document.getElementById("t_s").innerHTML=s;
}
setInterval(TimeDown,0);


