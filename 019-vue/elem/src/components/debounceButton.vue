
<template>
  <el-button
    v-bind="$attrs"
    :loading="loadingStatus && autoLoading"
    :disabled="disabledStatus && autoDisabled"
    @click="handleClick"
  >
    <slot/>
  </el-button>
</template>
<script>
/***
 * 使用$attrs已经接收父组件传过来作用在button的属性
 * 注意！！！
 *  父组件调用方法实例： <debounceButton circle type="success" ref="btn1" :auto-loading="false" @click="(done)=>submit(done,aa)" :time='400'>按钮</debounceButton>
 * submit(done,...arguments) { 父组件调用done时会清除loading或者done状态 所以在数据处理完成后(表单等处理完成后调用done函数)
      done(()=>{})
    }
 */
export default {
  name: 'pl-button',
  props: {
    time:{//默认防抖时间
      type:Number,
      default: 400
    },
    autoLoading: {// 是否支持防抖 默认不支持
      type: Boolean,
      default: false
    },
    autoDisabled: {// 是否支持与disabled 默认支持
      type: Boolean,
      default: true
    },
  },
  data() {
    return {
      timeId:null,
      loadingStatus: false,
      disabledStatus:false
    }
  },
  beforeDestroy(){
    this.clearTimeoutFn()
  },
  mounted(){
  },
  methods: {
    handleClick(event) {
      event.stopPropagation()
      this.clearTimeoutFn()
      this.changeStatus(true)
      this.$emit('click',event, (callback) => { // callback回调函数 这个回调函数在loading或disabled状态改变后执行
        this.timeId = setTimeout(()=>{
           this.changeStatus(false)
           callback ? callback() : ''
        },this.time)
      })
    },
    clearTimeoutFn(){
      clearTimeout(this.timeId)
    },
    changeStatus(flag){
      this.autoLoading ? this.loadingStatus = flag : '' //改变loading状态
      this.autoDisabled ? this.disabledStatus = flag : ''// 改变disabled状态
    }
  }
}
</script>
