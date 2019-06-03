<<<<<<< HEAD
//1处理购物车
=======
//1处购物车
>>>>>>> de380339caafa4f0be9135d75b66dbaf88985409
handelCart();
function handelCart(){
	var oCartBox=document.querySelector(".cart-box");
	var oCart=document.querySelector(".cart");
	var oCartContent=document.querySelector(".cart-content");
<<<<<<< HEAD
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
	var oNavContent=document.querySelector('.header-nav-content')
	var timer=null;
	//2.循环遍历,绑定事件
	for(var i=0;i<aNavLi.length;i++){
		aNavLi[i].onmouseenter=function(){
		//js显示上边框
			clearTimeout(timer);
			oNavContent.style.borderTop="1px solid #ccc"
			//动画显示下拉列表
			animation(oNavContent,{height:200},false,function(){
				oNavContent.style.overflow="visible"
			})
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

	function hideNav(){
		timer = setTimeout(function(){
				oNavContent.style.borderTop="none";
				oNavContent.style.overflow="hidden"
				animation(oNavContent,{height:0},false,function(){
				
				})
			},300)	
		}
	}
//隐藏列表共同同属性



=======
	oCart.onmouseenter=function(){
		// oCartContent.style.height=100+"px"
		animation(oCartContent,{height:100},true)
	}
	oCartBox.onmouseleave=function(){
		animation(oCartContent,{height:0},true)
	}
}
>>>>>>> de380339caafa4f0be9135d75b66dbaf88985409
