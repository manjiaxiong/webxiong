//1购物车处理
CartEvent();
function CartEvent(){
	//获取元素
	var oCart=document.querySelector('.cart');
	var oCartBox=document.querySelector('.cart .cart-box');
	var oCartCont=document.querySelector('.cart .cart-content');
	var oLoading=document.querySelector('.cart .cart-content .loading');
	oCartBox.onmouseenter=function(){//出现
		oLoading.style.display='block';//加载出现
		animate(oCartCont,{height:100},false,function(){
			oLoading.style.display='none';//高度100是加载消失
		});
		console.log(1);
	}
	oCart.onmouseleave=function(){//消失
		animate(oCartCont,{height:0},false);
	}
}
//2处理导航栏
NavEvent();
function NavEvent(){
	//获取元素
	var aHeaderNav=document.querySelectorAll('.header-nav li');
	var oHeaderCont=document.querySelector('.header-content');
	var oHeaderBox=document.querySelector('.header-box');
	var loading=document.querySelector('.header-content .loading');
	var hideTimer=null;
	var loadTimer=null;
	for(var i=0;i<aHeaderNav.length-2;i++){//遍历前8个li
		aHeaderNav[i].index=i;
		aHeaderNav[i].onmouseenter=function(){//出现
			var _this=this;
			clearTimeout(hideTimer);
			oHeaderCont.style.borderTop="1px solid #ccc";//移入上边框出现
			// 加载图标
			oHeaderCont.innerHTML= "<div class='loading' ></div>";
			//动态加载数据
			// loaDing(this.index);
			animate(oHeaderCont,{height:230},false,function(){		
				oHeaderCont.style.overflow="visible";//移入overflow恢复默认值
			});
			clearTimeout(loadTimer);
			loadTimer= setTimeout(function(){
				loaDing(_this.index);
			},1000)
			// loaDing(this.index);
		}
	}
	oHeaderBox.onmouseleave=function(){//移出消失
		oHeaderCont.style.borderTop="none";//移出上边框消失
		hideTimer=setTimeout(function(){
			oHeaderCont.style.overflow="hidden";//移出overflow:hidden
			animate(oHeaderCont,{height:0},false);
		},500)
	}
	//加载数据函数
	function loaDing(index){
		var html='';
		var date=NavDate[index];
		html+='			<ul>'
		for(var i=0;i<date.length;i++){
			html+='			<li>'
			html+='			<a href="'+date[i].url+'">'
			html+='				<div class="img-box"><img src="'+date[i].src+'" alt=""></div>'
			if(date[i].tag){
				html+='				<div class="tag">'+date[i].tag+'</div>'
			}
			
			html+='				<p class="name">'+date[i].name+'</p>'
			html+='				<p class="price">'+date[i].price+'</p>'
			html+='			</a>'
			html+='			</li>'
		}
		
		html+='		</ul>'
		oHeaderCont.innerHTML=html;
	}
}
//3轮播图
handleCoursel();
function handleCoursel(){
	new Curosul({
		id:"coursel",
		width:1234,
		height:460,
		img:["./images/b1.jpg","./images/b2.jpg","./images/b3.jpg"]
	})
}
//4面板设置
mianEvent();
function mianEvent(){
	var oCate=document.querySelector('.cate-box');
	var aCatelist=document.querySelectorAll('.cate-list li');
	var oCateCont=document.querySelector('.cate-content');
	var ContHide=null;
	for(var i=0;i<aCatelist.length;i++){
		aCatelist[i].index=i;
		aCatelist[i].onmouseenter=function(){//移入出现内容
			clearTimeout(ContHide);
			oCateCont.style.display='block';
			//加载数据
			loaDing1(this.index);
		}
	}
	oCate.onmouseleave=function(){
		ContHide= setTimeout(function(){
			oCateCont.style.display='none'
		},600)	
	}
	//加载数据函数
	function loaDing1(index){
		var html='';
		var date=CateDate[index];
			html+='	 <ul>'
			for(var i=0;i<date.length;i++){
				html+=		'		<li>'
				html+=		'			<a href="'+date[i].url+'">'
				html+=				'	<img src="'+date[i].src+'" alt="">'
				html+=					'<span >'+date[i].name+'</span>'
				html+=			'		</a>'
				html+=			'	</li>'
			}
			html+=		'	</ul> '
		oCateCont.innerHTML=html;
	}
}
//5倒计时
endTime();
function endTime(){
	
}