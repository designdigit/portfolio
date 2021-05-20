$(function(){
	var topPos=0;
	var t=0;
	var n=0;
	var firstFlag=false;
	var timer=0;

	$("#gnb li").eq(n).find("a").addClass("on");

	setTimeout(function(){
		$("html").animate({scrollTop:0},800, function(){
			firstFlag=true;
			$("#business").removeClass("active");
			$(window).trigger("scroll");
		});
	}, 10);

	$(window).scroll(function(){
		if(firstFlag == false){
			return;
		}
		clearTimeout(timer);

		timer=setTimeout(function(){
			t=$(window).scrollTop();

			if(t >= $("#header").offset().top && t < $("#business").offset().top){
				n=0;
			}
			else if(t >= $("#business").offset().top && t < $("#portfolio").offset().top){
				n=1;
			}
			else if(t >= $("#portfolio").offset().top && t < $("#service").offset().top){
				n=2;
			}
			else if(t >= $("#service").offset().top && t < $("#contact").offset().top){
				n=3;

				if($(document).height() == $(window).height()+t){
					n=4;
				}
			}
			else{
				n=4;
			}

			if(n == 0){
				$("#header").addClass("active")
				$(".btn_top").removeClass("active");
				$(".menu_zone").removeClass("active");
			}
			else{
				$("section").eq(n-1).addClass("active");
				$(".btn_top").addClass("active");
				$(".menu_zone").addClass("active");
			}
			$("#gnb a").removeClass("on");
			$("#gnb li").eq(n).find("a").addClass("on");
		}, 100);
	});
	$(".btn_top").click(function(e){
		e.preventDefault();
		$("html").animate({scrollTop:0}, 400);
	});
	$(".tab").click(function(e){
		e.preventDefault();
		$(".mobile").toggleClass("active");
		$(".tab").toggleClass("active");
		$(".dim").toggleClass("active");
	});
	$(".dim").click(function(){
		$(".mobile").removeClass("active");
		$(".tab").removeClass("active");
		$(".dim").removeClass("active");
	});
	$("#gnb li").click(function(e){
		e.preventDefault();
		n=$(this).index();

		if(n == 0){
			topPos=$("#header").offset().top;
		}
		else{
			topPos=$("section").eq(n-1).offset().top;
		}
		$("html").animate({scrollTop:topPos}, 400);
	});
	$("#m_gnb li").click(function(e){
		e.preventDefault();
		n=$(this).index();

		if(n == 0){
			topPos=$("#header").offset().top;
		}
		else{
			topPos=$("section").eq(n-1).offset().top+2;
		}
		$("html").animate({scrollTop:topPos}, 400, function(){
			$(".mobile").removeClass("active");
			$(".tab").removeClass("active");
			$(".dim").removeClass("active");
		});
	});

	var w;
	var h;

	$(window).resize(function(){
		w=$(window).width();

		if(w > 720){
			if($(".mobile").hasClass("active")){
				$(".dim").trigger("click");
			}
		}
	});
	$(window).trigger("resize");
});