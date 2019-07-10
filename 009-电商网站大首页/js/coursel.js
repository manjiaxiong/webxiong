(function($){
 
function Coursel($elem,options){
	//1.罗列属性
	this.$elem = $elem;
	this.options = options;
	this.$courselItems = this.$elem.find('.carousel-item');
	this.$courselBtns = this.$elem.find('.btn-item');
	this.$courselControls = this.$elem.find('.control');
	this.length=this.$courselItems.length;
	this.now = this.getCorrentindex(this.options.activeIndex);

	this.timer1=null;
	// console.log(this.length)
	//2.初始化
	this.init();
	// console.log(this.$elem)

}
Coursel.prototype = {
	constructor:Coursel,
	init:function(){
			if(this.options.slide){//左右滑动

			}else{//fade
				//1显示默认图片，隐藏所有图片
				this.$elem.addClass('fade');
				this.$courselItems.eq(this.now).show();
				//2底部按钮默认被选中
				this.$courselBtns.eq(this.now).addClass('active');
				//3左右按钮移入移出
				this.$elem.hover(function(){
					this.$courselControls.show();
				}.bind(this),function(){
					this.$courselControls.hide();
				}.bind(this));
				//初始化轮播图图片
				this.$courselItems.showHide(this.options);

				//4左右点击改变轮播图(事件委托)
				this.$elem.on('click','.control-left',function(ev){
					this._fade(this.getCorrentindex(this.now-1));
					ev.stopPropagation();
				}.bind(this));
				this.$elem.on('click','.control-right',function(ev){
					this._fade(this.getCorrentindex(this.now+1));
					ev.stopPropagation();
				}.bind(this));
				//5自动轮播
				_this=this;
				if(this.options.autotime){//判断是否轮播
					this.autoplay();
					this.$elem.hover(function(){//存值方法只能用用匿名回掉函数方法
						_this.pause()
					},function(){
						_this.autoplay()
						// console.log(11)
					});
				}
				// if(this.options.autotime){//判断是否轮播
				// 	this.autoplay();
				// 	this.$elem.hover($.proxy(this.pause(),this),$.proxy(this.autoplay(),this));
				// }
				
				
				//6点击下标切换
				this.$courselBtns.on('click',function(){
				//获取当前索引值
					var index = _this.$courselBtns.index(this);
					_this._fade(index);
				});
			}
		},
		_fade:function(index){
			//消失当前图片
			this.$courselItems.eq(this.now).showHide('hide');
			//显示下一张图片
			this.$courselItems.eq(index).showHide('show');
			//改变下标属性
			this.$courselBtns.eq(this.now).removeClass('active');
			this.$courselBtns.eq(index).addClass('active');
			//改变this.now值
			this.now=index;
		},getCorrentindex:function(index){
			if(index>=this.length) return 0;
			if(index<0) return this.length-1;
			return index;
		},
		autoplay:function(){
			// _this=this;
			// console.log(this.options.autotime)
			clearInterval(this.timer1);
			this.timer1= setInterval(function(){
				this.$courselControls.eq(1).trigger('click')
			}.bind(this),this.options.autotime);
		},
		pause:function(){
			clearInterval(this.timer1);
		}
	
	}
	


//当不传参数时的默认配置信息
Coursel.DEFAULTS = {
	slide:false,
	activeIndex:0,//默认显示
	js:true,
	mode:'fade',
	autotime:1000
}

//封装dropdown插件
// $.fn.extend({
// 	dropdown:function(options){
// 		//1.实现隐式迭代
// 		this.each(function(){
// 			var $elem = $(this);
// 			options = $.extend({},Dropdown.DEFAULTS,options);
// 			new Dropdown($elem,options);
// 		})
// 	}
// })
$.fn.extend({
	coursel:function(options){
		//1.实现隐式迭代
		return this.each(function(){//实现单例模式
			var $elem = $(this);
			var coursel = $elem.data('coursel');
			if(!coursel){
				options = $.extend({},Coursel.DEFAULTS,options);
				coursel = new Coursel($elem,options);
				//将实例信息存储在当前dom节点上
				$elem.data('coursel',coursel);
			}
			//第二次调用coursel则是调用实例上的方法
			if(typeof coursel[options] == 'function'){
				coursel[options]();
			}
		})
	}
})


})(jQuery);