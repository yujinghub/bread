$btns = $(".banner_button button");
$imgs = $(".banner_img img");
$lis = $(".banner_dian li");
$j = 0;
function Right(){
	for(var i = 0; i < $imgs.length; i++) {
			$imgs[i].className = "";
		}
		for(var i = 0; i < $lis.length; i++) {
			$lis[i].className = "";
		}
		$j++;
		if($j == 3) {
			$j = 0;
		}
			$imgs[$j].className = "active";
			$lis[$j].className = "active";
}
function Left(){
	for(var i = 0; i < $imgs.length; i++) {
			$imgs[i].className = "";
		}
		for(var i = 0; i < $lis.length; i++) {
			$lis[i].className = "";
		}
		$j--;
		if($j == -1) {
			$j = 2;
		}
			$imgs[$j].className = "active";
			$lis[$j].className = "active";
}
$btns.click(function(e) {
	e = e || window.event;
	var target = e.target || e.srcElement;
	if($(target).html() == "&gt;") {
		Right();
	} else {
		Left();
	}
})
$lis.click(function(e) {
	e = e || window.event;
	var target = e.target || e.srcElement;
	for(var i = 0; i < $lis.length; i++) {
		$lis[i].className = "";
	}
		$(target).attr("class", "active");
	for(var i = 0; i < $imgs.length; i++) {
		$imgs[i].className = "";
	}
		$j = $(target).attr("zdy");
		$imgs[$j].className = "active";
})
timer=setInterval(function(){
	Right();
},2000)
bannerWrap.onmouseenter=function(){
	clearInterval(timer);
	timer=null;
}
bannerWrap.onmouseleave=function(){
	timer=setInterval(function(){
	Right();
},2000)
}
