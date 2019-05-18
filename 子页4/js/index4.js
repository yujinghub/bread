$span = $(".celan_nav span");
$spans = $(".bread_nav span");
$dls = $(".bread_content_jieshao dl")
console.log($dls);
$span.click(function(e) {
	e = e || window.event;
	var target = e.target || e.srcElement;
	if($(target).parent().hasClass("closed")) {
		$(target).parent().attr("class", "open");
		$(target).parent().prev().attr("class", "closed");
		$(target).css("color", "#92120f");
	} else {
		$(target).parent().attr("class", "closed");
		$(target).css("color", "");
	}
	$j = $(target).attr("zdy");
	for(var i = 0; i < $spans.length; i++) {
		$spans[i].className = "";
	}
	$spans[$j].className = "active"
	for(var i = 0; i < $dls.length; i++) {
		$dls[i].className = "";
	}
	$dls[$j].className = "active"
})