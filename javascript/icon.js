var axis=0;//角度変数
/*回転関数*/
var rotate=function(icon_name){
  /*icon_nameは動かすアイコンのid名*/
  var icon=document.getElementById(icon_name);//アイコンのプロパティを取得
  icon.style.transform="rotate("+axis+"deg)";//transformが定義されている前提で書き換える
  axis=axis+120;//角度を+120°
  /*角度が360°を超えた時点で0°にする*/
  if(axis>=360){
    axis=0;
  }
}
