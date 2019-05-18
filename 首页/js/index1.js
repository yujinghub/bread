var imgs = ["images/banner1.jpg", "images/banner2.jpg", "images/banner3.jpg"];
var i = 0;
$("button").click(function() {
	if(!$(".banner_img ol img").is(":animated")) {
		if($(this).html() == "&gt;") {
			i++;
			if(i == 3) {
				i = 0;
			}
			$(".banner_img ol").append($(`<img class='r_img' src='${imgs[i]}'>`));
			$(".banner_img ol img:nth-of-type(1)").animate({
				"left": "-100%"
			}, 1000, function() {
				$(this).remove();
			})
			$(".banner_img ol img:nth-of-type(2)").animate({
				"left": "0"
			}, 1000)
			$(".banner_dian li").eq(i).attr("class", "active");
			$(".banner_dian li").eq(i).siblings().attr("class", " ");
		} else {
			i--;
			if(i == -1) {
				i = 2;
			}
			$(".banner_img ol").append($(`<img class='l_img' src='${imgs[i]}'>`));
			$(".banner_img ol img:nth-of-type(1)").animate({
				"left": "100%"
			}, 1000, function() {
				$(this).remove();
			})
			$(".banner_img ol img:nth-of-type(2)").animate({
				"left": "0"
			}, 1000)
			$(".banner_dian li").eq(i).attr("class", "active");
			$(".banner_dian li").eq(i).siblings().attr("class", " ");
		}
	}
})

$(".banner_dian li").click(function() {
	if(!$(".banner_img ol img").is(":animated")) {
		var zdy = $(this).attr("zdy");
		if(i < zdy) {
			i = zdy;
			$(".banner_img ol").append($(`<img class='r_img' src='${imgs[i]}'>`));
			$(".banner_img ol img:nth-of-type(1)").animate({
				"left": "-100%"
			}, 1000, function() {
				$(this).remove();
			});
			$(".banner_img ol img:nth-of-type(2)").animate({
				"left": "0"
			}, 1000);
			$(".banner_dian li").eq(i).attr("class", "active");
			$(".banner_dian li").eq(i).siblings().attr("class", " ");
		} else {
			i = zdy;
			$(".banner_img ol").append($(`<img class='l_img' src='${imgs[i]}'>`));
			$(".banner_img ol img:nth-of-type(1)").animate({
				"left": "100%"
			}, 1000, function() {
				$(this).remove();
			});
			$(".banner_img ol img:nth-of-type(2)").animate({
				"left": "0"
			}, 1000);
			$(".banner_dian li").eq(i).attr("class", "active");
			$(".banner_dian li").eq(i).siblings().attr("class", " ");
		}
	}
})
timer = setInterval(function() {
	i++;
	if(i == 3) {
		i = 0;
	}
	$(".banner_img ol").append($(`<img class='r_img' src='${imgs[i]}'>`));
	$(".banner_img ol img:nth-of-type(1)").animate({
		"left": "-100%"
	}, 1000, function() {
		$(this).remove();
	})
	$(".banner_img ol img:nth-of-type(2)").animate({
		"left": "0"
	}, 1000)
	$(".banner_dian li").eq(i).attr("class", "active");
	$(".banner_dian li").eq(i).siblings().attr("class", " ");
}, 2000);



$(".banner")[0].onmouseenter = function() {
	clearInterval(timer);
	timer = null;
}

$(".banner")[0].onmouseleave = function() {
	timer = setInterval(function() {
	i++;
	if(i == 3) {
		i = 0;
	}
	$(".banner_img ol").append($(`<img class='r_img' src='${imgs[i]}'>`));
	$(".banner_img ol img:nth-of-type(1)").animate({
		"left": "-100%"
	}, 1000, function() {
		$(this).remove();
	})
	$(".banner_img ol img:nth-of-type(2)").animate({
		"left": "0"
	}, 1000)
	$(".banner_dian li").eq(i).attr("class", "active");
	$(".banner_dian li").eq(i).siblings().attr("class", " ");
}, 2000);
}