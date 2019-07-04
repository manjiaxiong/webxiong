(function($){
	var $DropLi=$('.dropdown-li');
	$DropLi.hover(function(){
		$DropLi.addClass('menu-active');
		// console.log(this); 这个this是DOM节点
	},function(){
		$DropLi.removeClass('menu-active');
	})
})(jQuery)