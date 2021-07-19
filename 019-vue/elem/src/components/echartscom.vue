<!-- echartscom.vue -->
<template>
  <div class="charttest">
    <div style="width:400px;height:400px;" :id="echarts" class="echarts" ref="echarts">
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    name:'echartscom',
    data() {
      return {};
    },
    methods: {
      drawCharts() {
        var myChart = echarts.init(document.getElementById(this.echarts));
        myChart.setOption({
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            x: 'left',
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [
                { value: 335, name: '直接访问' },
                { value: 310, name: '邮件营销' },
                { value: 234, name: '联盟广告' },
                { value: 135, name: '视频广告' },
                { value: 1548, name: '搜索引擎' }
              ]
            }
          ]
        });
      }
    },
    computed: {
      echarts() {
        return 'echarts' + Math.random() * 100000;
      }
    },
    mounted() {
      this.drawCharts();
    },
    components: {}
  };
</script>

<style></style>