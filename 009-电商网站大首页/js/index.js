//顶部下拉
(function($){
	//加载共通样式
	function loadHtmlContebnt($elem,callback){
		// var $layer=$elem.find('.dropdown-layer');
		var url=$elem.data('load');//得到数据地址
		var isLoadin=false;//是否加载完毕
		if(!url) return;
		if(!isLoadin){//第一次加载
			if(url){//有数据加载
			$.getJSON(url,function(data){
				// var html="";
				// console.log(data);
				// for(var i=0;i<data.length;i++){
				// 	html+="<li><a href="+data[i].url+">"+data[i].name+"</a></li>"
				// }
				// setTimeout(function(){//定时器
				// 	$layer.html(html);
				// 	isLoadin=true;
				// },1000)
				typeof callback=='function'&&callback(data);
					})
				}
			}
		}


	var $dropdownLi=$('.top .dropdown-li');
	// console.log($dropdownLi);
	$dropdownLi.dropdown({
		js:true,
		mode:'slide',
		delay:300//阻止用户快速滑动
		// eventm:'click'
	}); 
	//加载数据
	$dropdownLi.on('dropdown-show dropdown-shown dropdown-hide dropdown-hidden',function(ev){
		if(ev.type=='dropdown-show'){
			// var $elem=$(this);
			// var $layer=$elem.find('.dropdown-layer');
			// var url=$elem.data('load');//得到数据地址
			// var isLoadin=false;//是否加载完毕
			// if(!url) return;
			// if(!isLoadin){//第一次加载
			// 	if(url){//有数据加载
			// 	$.getJSON(url,function(data){
			// 		var html="";
			// 		// console.log(data);
			// 		for(var i=0;i<data.length;i++){
			// 			html+="<li><a href="+data[i].url+">"+data[i].name+"</a></li>"
			// 		}
			// 		setTimeout(function(){//定时器
			// 			$layer.html(html);
			// 			isLoadin=true;
			// 		},1000)
			// 			})
			// 		}
			// 	}
				loadHtmlContebnt($(this),function(data){
					// console.log(data);
					var $layer=$(this).find('.dropdown-layer');
					var html="";
					for(var i=0;i<data.length;i++){
						html+="<li><a href="+data[i].url+">"+data[i].name+"</a></li>"
					}
					setTimeout(function(){//定时器
						$layer.html(html);
						isLoadin=true;
					},1000)
				}.bind(this));
			}
			
	})

//头部搜索

	var $search=$('.search');
	 $search.search({});//初始化(第一次进入)
	 $search.on('getData',function(ev,data){
			var $elem=$(this);
			var $layer=$elem.find('.search-layer');
			var html= creatHTML(data,6);
			//2插入HTML
			$elem.search('appendLayer',html);
			//3显示HTML(成功)
			 if(html==''){
			 	$elem.search('hideLayer');
			}else{
				$elem.search('showLayer');
			}
	 })
	 $search.on('getNodata',function(ev){
	 	var $elem=$(this);
	 	$elem.search('appendLayer','');
		$elem.search('hideLayer');
	 })
	 function creatHTML(data,Max){
	 	var data=data.result;
	 	var html='';
			for(var i=0;i<data.length;i++){
				if(i>=Max) break;
				html+="<li class='search-Li'>"+data[i][0]+"</li>"
			};
			return html;
	 }

//焦点滑动

	var $focusDropdownLi=$('.focus .dropdown');
	// console.log($dropdownLi);
	 $focusDropdownLi.dropdown({
		js:true,
		mode:'fade',
		delay:300,//阻止用户快速滑动
		// eventm:'click'
	}); 
	 //数据加载
	 $focusDropdownLi.on('dropdown-show dropdown-shown dropdown-hide dropdown-hidden',function(ev){
		if(ev.type=='dropdown-show'){
			// var $elem=$(this);
			// var $layer=$elem.find('.dropdown-layer');
			// var url=$elem.data('load');//得到数据地址
			// var isLoadin=false;//是否加载完毕
			// if(!url) return;
			// if(!isLoadin){//第一次加载
			// 	if(url){//有数据加载
			// 	$.getJSON(url,function(data){
			// 		var html="";
			// 		// console.log(data);
			// 		for(var i=0;i<data.length;i++){
			// 			html += '<dl class="category-details">';
			// 			html +=	'	<dt class="category-details-title fl">';
			// 			html +=	'		<a href="#" class="category-details-title-link">'+data[i].title+'</a>';
			// 			html +=	'	</dt>';
			// 			html +=	'	<dd class="category-details-item fl">';
			// 			for(var j = 0;j<data[i].items.length;j++){
			// 				html +=	'		<a href="#" class="link">'+data[i].items[j]+'</a>';
			// 			}
			// 			html +=	'	</dd>';
			// 			html +=	'</dl>'
			// 		}
			// 		setTimeout(function(){//定时器
			// 			$layer.html(html);
			// 			isLoadin=true;
			// 		},1000)
			// 			})
			// 		}
			// 	}
				loadHtmlContebnt($(this),function(data){
					// console.log(data);
					var $layer=$(this).find('.dropdown-layer');
					var html="";
					// console.log(data);
					for(var i=0;i<data.length;i++){
						html += '<dl class="category-details">';
						html +=	'	<dt class="category-details-title fl">';
						html +=	'		<a href="#" class="category-details-title-link">'+data[i].title+'</a>';
						html +=	'	</dt>';
						html +=	'	<dd class="category-details-item fl">';
						for(var j = 0;j<data[i].items.length;j++){
							html +=	'		<a href="#" class="link">'+data[i].items[j]+'</a>';
						}
						html +=	'	</dd>';
						html +=	'</dl>'
					}
					setTimeout(function(){//定时器
						$layer.html(html);
						isLoadin=true;
					},1000)
				}.bind(this));
			}
		});
	 //轮播图逻辑开始
	 var $coursel=$('.carousel .carousel-wrap');
	 $coursel.coursel({});
	 //轮播图逻辑结束
})($)