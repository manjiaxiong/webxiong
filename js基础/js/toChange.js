// var oBox1=document.getElementById('box1');
// 	var oBox2=document.getElementById('box2');
// 	var oBox3=document.getElementById('box3');
// 	var oBox4=document.getElementById('box4');
	var iSpeed=0;
	function toChange(obj,arry,iTage){
		clearInterval(obj.timer);//开始前清除之前的定时器
			obj.timer=setInterval(function(){
				var crry=parseFloat(getComputedStyle(obj,false)[arry]);//获取当前值
				if(arry=='opacity'){
					crry=Math.round((crry)*100);//如果为透明度转换成100制
				}
				if(crry<iTage){//判断速度
					iSpeed=5;
				}else{
					iSpeed=-5;
				}//运动
				if(arry=='opacity'){//判断是否为透明度
					if (Math.abs(crry-iTage)<Math.abs(iSpeed)) {
							obj.style[arry]=iTage/100;
							clearInterval(obj.timer);
					}else{
							obj.style[arry]=(crry+iSpeed)/100;
					}
				}else{
					if (Math.abs(crry-iTage)<Math.abs(iSpeed)) {
							obj.style[arry]=iTage+'px';
							clearInterval(obj.timer);
					}else{
							obj.style[arry]=(crry+iSpeed)+'px';
					}
				}
		},30)
	}
	function getClienth(){
		if(document.compatMode='CSS1Compat'){
			return document.documentElement.clientHeight;
		}else{
			return document.body.clientHeight;
		}
	}
	function getScrolltop(){
		return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop
	}