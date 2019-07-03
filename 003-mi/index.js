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
	var timerList=document.querySelectorAll('.timer-num');
	var timers=null;
	var endingTimer=new Date('2019-6-30 22:00:00');
	function TheTime(){
		var allSecondes=Math.round(((endingTimer.getTime()-Date.now())/1000));
		var Hours=parseInt(allSecondes/3600);
		var Mintues=parseInt(allSecondes%3600/60);
		var Secondes=parseInt(allSecondes%3600%60);
		timerList[0].innerHTML=tostr(Hours);
		timerList[1].innerHTML=tostr(Mintues);
		timerList[2].innerHTML=tostr(Secondes);
	}
	TheTime();
	var timers= setInterval(TheTime,500);
	//优化时间
	function tostr(num){
			return	num<10? "0"+num:""+num;
	}
}
//6左右加载
FlashEvent();
function FlashEvent(){
	var leftBtn=document.querySelector('.flash-ctr');
	var rightBtn=document.querySelector('.flash-ctr-right');
	var productBox=document.querySelector('.product-list');
	leftBtn.onclick=function(){
		animate(productBox,{marginLeft:0},true)
		// productBox.style.marginLeft='0px';
	}
	rightBtn.onclick=function(){
		animate(productBox,{marginLeft:-960},true)
	}
}
//7家电
ElecEvent();
function ElecEvent(){
	var itemList=document.querySelectorAll('.more .tab-item');
	var itemCont=document.querySelector('.col2A');
	//默认加载第一条数据
	loaDing(0);
	for(var i=0;i<itemList.length;i++){
		itemList[i].index=i;
		// _this=this;
		itemList[i].onmouseenter=function(){
			for(var j=0;j<itemList.length;j++){
				itemList[j].className='tab-item';
			}
			this.className='item-enter tab-item';
			//加载数据
			loaDing(this.index);
			// loaDing(0);
		}
	}
	function loaDing(index){
		var html='';
		var date=ElecDate[index];
		html+='<ul>';
		for(var i=0;i<date.length-1;i++){
			html+='			<li class="product-item product-item-m">';
			html+='					<a href="'+date[i].url+'">';
			html+='						<img src="'+date[i].src+'" alt="">';
			html+='						<p class="product-item-name">'+date[i].name+'</p>';
			html+='						<p class="product-item-des">'+date[i].des+'</p>';
			html+='						<p class="product-item-price">';
			html+='							<strong>'+date[i].now+'</strong>';
			html+='							<del>'+date[i].pre+'</del>';
			html+='						</p>';
			html+='					</a>';
			html+=	'<span class="flag off-flag">'+date[i].flag+'</span>';
			if(date[i].views){
				html+='					<div class="views">';
				html+='						<p class="commen">'+date[i].views.commen+'</p>';
				html+='						<p class="author">'+date[i].views.author+'</p>';
				html+='					</div>';
			}
			
			html+='				</li>';
		}
			html+='	<li class="product-area">';
			html+='						<div class="product-area-top product-area-item">';
			html+='							<p class=" product-area-top-des">'+date[7].des+'</p>';
			html+='							<strong>'+date[7].now+'</strong>';
			html+='							<img src="'+date[7].src1+'" alt="">';
			html+='						</div>';
			html+='						<div class="product-area-item product-area-bottom">';
			html+='							<p class="product-area-bottom-name">'+date[7].name+'</p>';
			html+='							<p class="product-area-bottom-hot">'+date[7].hot+'</p>';
			html+='							<i class="iconfont">&#xe615;</i>'
			html+='						</div>';
			html+='					</li>';
		html+='</ul>';
		itemCont.innerHTML=html;
	}
} 