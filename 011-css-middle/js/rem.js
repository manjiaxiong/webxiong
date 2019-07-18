(function(win,doc){
	var root=doc.getElementsByTagName('html')[0];//根元素
	// console.log(root);
	function refresh(){
		var width=doc.documentElement.clientWidth||doc.body.clientWidth;
		// console.log(width)
		var fontSize=width/10+'px';
		root.style.fontSize=fontSize;
	}
	win.addEventListener('DOMContentLoaded',refresh,false);
	win.addEventListener('resize',refresh,false);
})(window,document)