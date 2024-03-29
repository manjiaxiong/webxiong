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
	this.itemWidth=parseFloat(this.$courselItems.css('width'));
	this.timer1=null;
	// console.log(this.length)
	//2.初始化
	this.init();
	// console.log(this.$elem)

}
Coursel.prototype = {
	constructor:Coursel,
	init:function(){
		var _this=this;
		this.$elem.trigger('courselShow',[this.now,this.$courselItems.eq(this.now)]);
			if(this.options.slide){//左右滑动
				//1显示默认图片，移出所有图片
				this.$elem.addClass('slide');
				this.$courselItems.eq(this.now).css({
					left:0
				});
				this.$courselItems.on('move',function(){
					var index=_this.$courselItems.index(this);
					if(_this.now!=index){
						_this.$elem.trigger('courselShow',[index,this]);//trigger传入多个参数时要用数组的形式
					}
				})
				//2底部按钮默认被选中
				this.$courselBtns.eq(this.now).addClass('active');
				//3左右按钮移入移出
				this.$elem.hover(function(){
					this.$courselControls.show();
				}.bind(this),function(){
					this.$courselControls.hide();
				}.bind(this));
				//初始化轮播图图片
				this.$courselItems.move(this.options);
				//4左右点击改变轮播图(事件委托)
				this.$elem.on('click','.control-left',function(ev){
					this._trggle(this.getCorrentindex(this.now-1),-1);
					ev.stopPropagation();
				}.bind(this));
				this.$elem.on('click','.control-right',function(ev){
					this._trggle(this.getCorrentindex(this.now+1),1);
					ev.stopPropagation();
				}.bind(this));
				//5自动轮播
				
				if(this.options.autotime){//判断是否轮播
					this.autoplay();
					this.$elem.hover(function(){//存值方法只能用用匿名回掉函数方法
						_this.pause()
					},function(){
						_this.autoplay()
						// console.log(11)
					});
				}
				//6点击下标切换
				this.$courselBtns.on('click',function(){
				//获取当前索引值
					var index = _this.$courselBtns.index(this);
					_this._trggle(index);
				});
			}else{//fade
				//1显示默认图片，隐藏所有图片
				this.$elem.addClass('fade');
				this.$courselItems.eq(this.now).show();
				this.$courselItems.on('move',function(){
					var index=_this.$courselItems.index(this);
					if(_this.now!=index){
						_this.$elem.trigger('courselShow',[index,this]);//trigger传入多个参数时要用数组的形式
					}
				})
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
		_trggle:function(index,deirction){
			//如果当前图片与要显示的图片一致无需执行下列代码
			if(index==this.now) return;
			
			// console.log(this.itemWidth)
			if(index>this.now){
				deirction=1;
			}else{
				deirction=-1;
			}
			//将即将出现的图片放到指定位置
			this.$courselItems.eq(index).css({
				left:deirction*this.itemWidth
			});
			//移出当前图片
			this.$courselItems.eq(this.now).move('x',-1*deirction*this.itemWidth);
			//显示下一张图片
			this.$courselItems.eq(index).move('x',0);
			//改变下标属性
			this.$courselBtns.eq(this.now).removeClass('active');
			this.$courselBtns.eq(index).addClass('active');
			//改变this.now值
			this.now=index;
		}
		,
		_fade:function(index){
			//如果当前图片与要显示的图片一致无需执行下列代码
			if(index==this.now) return;
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
	slide:true,
	activeIndex:0,//默认显示
	js:true,
	mode:'fade',
	autotime:1000
}


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