var focus_on=function(img_src){
  var focus_img=document.getElementById("focus_img");
  focus_img.src=img_src;
  var focus=document.getElementById("focus");
  focus.style.height="100%";
}
var focus_off=function(){
  var focus=document.getElementById("focus_img");
  var focus=document.getElementById("focus");
  focus.style.height="0";
}
