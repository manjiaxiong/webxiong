//1处购物车
handelCart();
function handelCart(){
	var oCartBox=document.querySelector(".cart-box");
	var oCart=document.querySelector(".cart");
	var oCartContent=document.querySelector(".cart-content");
	oCart.onmouseenter=function(){
		// oCartContent.style.height=100+"px"
		animation(oCartContent,{height:100},true)
	}
	oCartBox.onmouseleave=function(){
		animation(oCartContent,{height:0},true)
	}
}