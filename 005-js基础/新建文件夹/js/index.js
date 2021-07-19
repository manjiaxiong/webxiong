var oList=document.querySelectorAll("#list li");
	var oRder=document.querySelectorAll("#order li");
	// console.log(oSec);
	for(var i=0;i<oList.length;i++){
		oList[i].index=i;
		oList[i].onmouseover=function(){
			for(var j=0;j<oList.length;j++){
				ooRder[j].style.display='none';
			}
			oRder[this.index].style.display='block';
		}
		oRder[i].onmouseout=function(){
			this.style.display="none";
		}
	}