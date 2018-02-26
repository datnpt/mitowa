function CountdownTimer(elm,tl,mes){
 this.initialize.apply(this,arguments);
}
CountdownTimer.prototype={
 initialize:function(elm,tl,mes) {
  this.elem = document.getElementById(elm);
  this.tl = tl;
  this.mes = mes;
 },countDown:function(){
  var timer='<span class="after">あと</span>';
  var today=new Date();
  var day=Math.floor((this.tl-today)/(24*60*60*1000));
  var hou=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*60*1000));
  var min=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*1000))%60;
  var sec=Math.floor(((this.tl-today)%(24*60*60*1000))/1000)%60%60;
  var mil=Math.floor(((this.tl-today)%(24*60*60*1000))/10)%100;
  var me=this;

  if( ( this.tl - today ) > 0 ){
   if (day) timer += '<span class="day">'+day+'</span><span class="nichi">日と</span>';
   if (hou) timer += '<span class="hou">'+hou+'</span><span class="jikan">時間</span>';
   timer += '<span class="min">'+this.addZero(min)+'</span><span class="hun">分</span><span class="sec">'+this.addZero(sec)+'</span><span class="byou">秒</span>';
   this.elem.innerHTML = timer;
   tid = setTimeout( function(){me.countDown();},10 );
  }else{
   this.elem.innerHTML = this.mes;
   return;
  }
 },addZero:function(num){ return ('0'+num).slice(-2); }
}
function CDT(){
	var DD      = new Date();
	var year    = DD.getFullYear();
	var month   = DD.getMonth() + 1;
	var today   = DD.getDate();
	var DD2     = new Date(year,month,0);
	var lastday = DD2.getDate();
if(today < 22){
	var tl = new Date(year + '/' + month + '/' + today + ' 23:59:59');
	var cptxt = "";
}else{
	var tl = new Date(year + '/' + month + '/' + today + ' 23:59:59');
	var cptxt = "";
}

document.getElementById("txt").innerHTML = cptxt;
var timer = new CountdownTimer('CDT',tl,'0時間00分00秒');
timer.countDown();
}
window.onload=function(){
	CDT();
}
/*----------- Shining Effect ----------------*/
var shinyObj = '.hvr-wobble-top span.shiny';
var shinySpeed = 1600;
var interval = 2500;

$(function() { setTimeout('shinybutton()', 500 ); });
function shinybutton(){
  $(shinyObj).animate({left:'+=960px'},shinySpeed).animate({left:'-35%'}, 0);
  setTimeout('shinybutton()',interval);
}
