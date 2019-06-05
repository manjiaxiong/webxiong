//1处理购物车

handelCart();
function handelCart(){
	var oCartBox=document.querySelector(".cart-box");
	var oCart=document.querySelector(".cart");
	var oCartContent=document.querySelector(".cart-content");
	var oLoader=document.querySelector('.cart-content .loading');
	var oEmptyCsrt=document.querySelector('.cart-content empty-cart')
	oCart.onmouseenter=function(){
		// oCartContent.style.height=100+"px"
		oLoader.style.display="block";
		animation(oCartContent,{height:100},true,function(){
			oLoader.style.display="none";
			oEmptyCsrt.style.display="block"
		})
	}
	oCartBox.onmouseleave=function(){
		animation(oCartContent,{height:0},true,function(){
			oLoader.style.display="none";
			oEmptyCsrt.style.display="none"
		})
	}
}
//2处理导航列表
handelNav();
function handelNav(){
	//获取元素
	var aNavLi=document.querySelectorAll('.nav li');
	var oNavContent=document.querySelector('.header-nav-content');
	var oContainer=oNavContent.querySelector('.container');
	var timer=null;
	var timerloading=null;
	//2.循环遍历,绑定事件
	for(var i=0;i<aNavLi.length-2;i++){
		aNavLi[i].index=i;
		aNavLi[i].onmouseenter=function(){
		//js显示上边框
			clearTimeout(timer);
			clearTimeout(timerloading);//优化不必要加载
			var index=this.index;
			oNavContent.style.borderTop="1px solid #ccc";
			oContainer.innerHTML='<div class="loading"></div>';
			//动画显示下拉列表
			animation(oNavContent,{height:200},false,function(){
				oNavContent.style.overflow="visible";
				// loadDate(index);
			});
			//动态加载数据
			// console.log(111);
			timerloading= setTimeout(function(){
				loadDate(index);
			},1000)
			
		}
		
		aNavLi[i].onmouseleave=function(){
			// timer= setTimeout(function(){
			// 	oNavContent.style.borderTop="none";
			// 	oNavContent.style.overflow="hidden"
			// 	animation(oNavContent,{height:0},false,function(){
				
			// 	})
			// },300)
			hideNav();	
		}

	}
	//鼠标移入导航下拉列表显示内容
	oNavContent.onmouseenter=function(){
		clearTimeout(timer);
	}
	//鼠标出导航下拉列表隐藏内容
	oNavContent.onmouseleave=function(){
		// timer= setTimeout(function(){
		// 		oNavContent.style.borderTop="none";
		// 		oNavContent.style.overflow="hidden"
		// 		animation(oNavContent,{height:0},false,function(){
				
		// 		})
		// 	},300)	
		hideNav();
		}
		//加载数据共通函数
		function loadDate(n){
			var date=aNavDate[n];
			var html='';
			html+='		<ul>';
			for(var i=0;i<date.length;i++){
				html+='				<li>';
				html+='					<a href="'+date[i].url+'">';
				if(date[i].tag){html+='					<div class="tag">'+date[i].tag+'</div>'} ;
				html+='					<div class="img-box">';
				html+='						<img src="'+date[i].src+'" alt="">';
				html+='					</div>';
				html+='					<p class="header-nav-content-name">'+date[i].name+'</p>';
				html+='					<p class="header-nav-content-price">'+date[i].price+'</p>';
				html+='					</a>';
				html+='				</li>';
			}
			html+='		</ul>					';
			oContainer.innerHTML=html;
			console.log(111)
		}

	//隐藏列表共同同属性
	function hideNav(){
		timer = setTimeout(function(){
				oNavContent.style.borderTop="none";
				oNavContent.style.overflow="hidden"
				animation(oNavContent,{height:0},false,function(){
				
				})
			},300)	
		}
	}

//3轮播图效果
new Curosul({
		id:"coursel",
		width:1234,
		height:460,
		img:["../images/b1.jpg","../images/b2.jpg","../images/b3.jpg"]
	})
//4选项卡
toSelector(); 
function toSelector(){
	var oList=document.querySelector('.home .list');
	var aBTnLi=oList.querySelectorAll('li');
	var oBancontent=document.querySelector('.banner-content');
	var timer=null;
	console.log(oBancontent);
	console.log(aBTnLi)
	for(var i=0;i<aBTnLi.length;i++){//选项卡按钮变色
		aBTnLi[i].index=i;
		aBTnLi[i].onmouseenter=function(){
			clearTimeout(timer);
			var index=this.index;
			for(var j=0;j<aBTnLi.length;j++){
				aBTnLi[j].style.backgroundColor="rgba(0,0,0,0.1)";
			}
			oBancontent.style.display='block';
			loadDing(index);
			this.style.backgroundColor="#ff6700";
		}
		oBancontent.onmouseleave=function(){
		timer=	setTimeout(function(){//延迟消失
				oBancontent.style.display='none';
			},300)
			
		}
	}
	//加载函数
	function loadDing(n){
		var html='';
		var date=aBanCont[n];
		console.log(date.length);
		html+='			<ul>';
		for(var i=0;i<date.length;i++){
			html+='			<li>';
			html+='<a href="'+date[i].url+'">';
			html+='<img src="'+date[i].src+'" alt="">';
			html+='<span>'+date[i].name+'</span>';
			html+='</a>';
			html+='</li>';
		}		
		html+='				</ul>';
		oBancontent.innerHTML=html;
	}
}
//5家电选项卡
houseSelector();
function houseSelector(){
	var aHouseLi=document.querySelectorAll('.more li');
	for(var i=0;i<aHouseLi.length;i++){
		aHouseLi[i].onmouseenter=function(){
			console.log(111)
			for(var j=0;j<aHouseLi.length;j++){
				aHouseLi[j].className="";
			}
			this.className="houseLi";
		}
	}
}







