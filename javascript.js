

$('#study').css('visibility','hidden');
$(window).scroll(function(){
	var windowHeight = $(window).height(),
	topWindow = $(window).scrollTop();
	$('#study').each(function(){
		var targetPosition = $(this).offset().top;
		if(topWindow > targetPosition - windowHeight + 400){
			$(this).addClass("fadeInDown");
		}
	});
});

$('#rota').css('visibility','hidden');
$(window).scroll(function(){
	var windowHeight = $(window).height(),
	topWindow = $(window).scrollTop();
	$('#rota').each(function(){
		var targetPosition = $(this).offset().top;
		if(topWindow > targetPosition - windowHeight + 400){
			$(this).addClass("rotate");				     }
		});
});

$('#rota').css('visibility','hidden');
$(window).scroll(function(){
	var windowHeight = $(window).height(),
	topWindow = $(window).scrollTop();
	$('#rota').each(function(){
		var targetPosition = $(this).offset().top;
		if(topWindow > targetPosition - windowHeight + 400){
			$(this).addClass("rotate");
		}
	});
});

$('#rota2').css('visibility','hidden');
$(window).scroll(function(){
	var windowHeight = $(window).height(),
	topWindow = $(window).scrollTop();
	$('#rota2').each(function(){
		var targetPosition = $(this).offset().top;
		if(topWindow > targetPosition - windowHeight + 400){
			$(this).addClass("rotate");
		}
	});
});

$(function () {
	"use strict";
	var flag = "view";

	$(window).on("scroll", function () {
			    // scrollTop()が「200」より大きい場合
			   //画面トップから、ナビゲーションメニューまでの高さ（ピクセル）を指定すれば、メニュースクロールで
			   //消えていくタイミングでヘッダが表示されて固定される。  

			   if ($(this).scrollTop() > 550) {
			   	if (flag === "view") {
			   		$(".fix-header").stop().css({opacity: '1.0'}).animate({
			   //”▲.fix-header”の部分は固定ヘッダとして表示させるブロックのID名もしくはクラス名に
			   top: 0
			}, 500);

			   		flag = "hide";
			   	}
			   } else {
			   	if (flag === "hide") {
			   		$(".fix-header").stop().animate({top:"-66px",opacity: 0}, 500);
					//上にあがり切ったら透過度を0%にして背景が生きるように
			        　　　　//”▲.fix-header”の部分は固定ヘッダとして表示させるブロックのID名もしくはクラス名に
			        flag = "view";
			    }
			}
		});
});

$('#search').css('visibility','hidden');
$(window).scroll(function(){
	var windowHeight = $(window).height(),
	topWindow = $(window).scrollTop();
	$('#search').each(function(){
		var targetPosition = $(this).offset().top;
		if(topWindow > targetPosition - windowHeight + 400){
			$(this).addClass("fadeInDown");
		}
	});
});

$(window).scroll(function () {
			    // クラスを追加するwindowの位置を設定
			    var scrollTop = $(this).scrollTop();
			    var scrollBottom = scrollTop + $(this).height();
			    var effectPos = scrollBottom - 50;
			    
			    // eachでliを順番に処理
			    $(".huwaitem").each(function (i) {
			    	if(effectPos > $(this).offset().top){
			    		var that = this;

			            // 0.2s毎にずれて表示
			            setTimeout(function () {
			            	$(that).addClass("fadein");
			            }, 200 * i);
			        }
			    });
			});

$('#arrival').css('visibility','hidden');
$(window).scroll(function(){
	var windowHeight = $(window).height(),
	topWindow = $(window).scrollTop();
	$('#arrival').each(function(){
		var targetPosition = $(this).offset().top;
		if(topWindow > targetPosition - windowHeight + 400){
			$(this).addClass("fadeInDown");
		}
	});
});

$(window).scroll(function () {
    // クラスを追加するwindowの位置を設定
    var scrollTop = $(this).scrollTop();
    var scrollBottom = scrollTop + $(this).height();
    var effectPos = scrollBottom - 50;
    
    // eachでliを順番に処理
    $(".huwaitem2").each(function (i) {
    	if(effectPos > $(this).offset().top){
    		var that = this;

            // 0.2s毎にずれて表示
            setTimeout(function () {
            	$(that).addClass("fadein2");
            }, 200 * i);
        }
    });
});

$('#newstab').css('visibility','hidden');
$(window).scroll(function(){
	var windowHeight = $(window).height(),
	topWindow = $(window).scrollTop();
	$('#newstab').each(function(){
		var targetPosition = $(this).offset().top;
		if(topWindow > targetPosition - windowHeight + 400){
			$(this).addClass("fadeInDown");
		}
	});
});

$('#sns1').css('visibility','hidden');
$(window).scroll(function(){
	var windowHeight = $(window).height(),
	topWindow = $(window).scrollTop();
	$('#sns1').each(function(){
		var targetPosition = $(this).offset().top;
		if(topWindow > targetPosition - windowHeight + 400){
			$(this).addClass("fadeInDown");
		}
	});
});

$('#rota3').css('visibility','hidden');
$(window).scroll(function(){
	var windowHeight = $(window).height(),
	topWindow = $(window).scrollTop();
	$('#rota3').each(function(){
		var targetPosition = $(this).offset().top;
		if(topWindow > targetPosition - windowHeight + 400){
			$(this).addClass("rotate");
		}
	});
});

$('#rota4').css('visibility','hidden');
$(window).scroll(function(){
	var windowHeight = $(window).height(),
	topWindow = $(window).scrollTop();
	$('#rota4').each(function(){
		var targetPosition = $(this).offset().top;
		if(topWindow > targetPosition - windowHeight + 400){
			$(this).addClass("rotate");
		}
	});
});