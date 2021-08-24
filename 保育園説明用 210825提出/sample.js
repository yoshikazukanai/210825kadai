function rand(n){
    var r = Math.floor(Math.random()*n+1);
 return r;
}

var t = rand(10);
$("#rand").html(t);



const r = Math.ceil( Math.random()*5);
alert (r);

var g = Math.floor(Math.random()*7+1);
alert(g)

//足し算関数を定義
function add(a1,a2,en){
    if(en=="+"){
var n = a1 + a2;
    }

return n;
}

var t = add(10,40);
alert(t);


function strfnc(){
    var str = "関数知らない"
    alert(str)

}

strfnc();
strfnc();
strfnc();

$(function() {
$(".c-button").click(function(){
window.open("https://kato-shoten.jp/","_blank","top=50,left=50,width=500,height=500,scrollbars=1,location=0,menubar=0,toolbar=0,status=1,directories=0,resizable=1");
    return false;
    });
});

function new_page(){
    window.open(“url”,””,”“);
   };

   window.open(“任意のurl”,”ウインドウ名”,”プロパティ”);
   width=800,height=600

   function back_page(){
    history.back();
   };

   function next_page(){
    history.forward();
   };

   $('#c-button').on('click', function () {
    const data = {
    title: $('#input').val(),
    text: $('#text_area').val(),
    };
   const jsonData = JSON.stringify(data);
   localStorage.setItem('memo', jsonData);
  });

  $("#c-button").on("click",function(){
      $("body").css("background","#000000");

  });

//カーソルつくる
  var
cursor = $(".cursor"),
cWidth = 20, //カーソルの大きさ
mouseX = 0, //マウスのX座標
mouseY = 0; //マウスのY座標

$(document).on('mousemove', function(e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
  cursor.css({
    //カーソルの真ん中に座標軸が来るよう、
    //カーソルの大きさの半分を引きます
    left: mouseX - (cWidth / 2),
    top: mouseY - (cWidth / 2)
  })
});

//カーソルの遅延アニメーション
//ほんの少ーーーしだけ遅延させる 0.001秒
TweenMax.to({}, .001, {
    repeat: -1,
    onRepeat: function() {
      posX += (mouseX - posX) / delay;
      posY += (mouseY - posY) / delay;
      
      TweenMax.set(follower, {
          css: {    
            left: posX - (fWidth / 2),
            top: posY - (fWidth / 2)
          }
      });
      
      TweenMax.set(cursor, {
          css: {    
            left: mouseX - (cWidth / 2),
            top: mouseY - (cWidth / 2)
          }
      });
    }
  });
  
  //マウス座標を取得
  $(document).on("mousemove", function(e) {
      mouseX = e.pageX;
      mouseY = e.pageY;
  });
  
  $("a").on({
    "mouseenter": function() {
      cursor.addClass("is-active");
      follower.addClass("is-active");
    },
    "mouseleave": function() {
      cursor.removeClass("is-active");
      follower.removeClass("is-active");
    }
  });

  