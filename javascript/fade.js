var start_cnt1=1;
var start_cnt2=2;
var end_cnt=10;
var vectol1=0;
var vectol2=0;
var opacity1=1.0;
var opacity2=0.5
var fade1=function(){
  var img_src1=document.getElementById("photo1");
  if(vectol1==0 && opacity1<=0.01){
    vectol1=1;
    if(start_cnt1>=end_cnt){
      start_cnt1=1;
    }
    start_cnt1=start_cnt1+1;
    img_src1.src="./image/album/album_"+start_cnt1+".jpg";
  }else if(vectol1==1 && opacity1>=1.0){
    vectol1=0;
  }
  if(vectol1==0){
    opacity1=opacity1-0.01;
  }else if(vectol1==1){
    opacity1=opacity1+0.01;
  }
  img_src1.style.opacity=opacity1;
}
var fade2=function(){
  var img_src2=document.getElementById("photo2");
  if(vectol2==0 && opacity2<=0.01){
    vectol2=1;
    if(start_cnt2>=end_cnt){
      start_cnt2=1;
    }
    start_cnt2=start_cnt2+1;
    img_src2.src="./image/album/album_"+start_cnt2+".jpg";
  }else if(vectol2==1 && opacity2>=1.0){
    vectol2=0;
  }
  if(vectol2==0){
    opacity2=opacity2-0.01;
  }else if(vectol2==1){
    opacity2=opacity2+0.01;
  }
  img_src2.style.opacity=opacity2;
}
