<template>
  <div class="infinite-list-wrapper" id="Myload">
    <!-- <div class="proscss">
      <el-steps :active="2" align-center>
      <el-step
        title="步骤1"
        description="这是一段很长很长很长的描述性文字"
      ></el-step>
      <el-step
        title="步骤2"
        description="这是一段很长很长很长的描述性文字"
      ></el-step>
      <el-step
        title="步骤4"
        description="这是一段很长很长很长的描述性文字"
      ></el-step>
    </el-steps>
    </div>
    <div class="main-detail">
      <div class="detail-list">
        <div class="detail-item" v-for="item in list" :key="item">{{item}}</div>
      </div>
    </div> -->
    <div id="myCharts" ref="myCharts"></div>
  </div>
</template>

<script>
export default {
  name: "Myload",
  data() {
    return {
      count: 10,
      active: 0,
      loading: false,
      list: [1, 2, 3, 4, 5, 6, 7],
    };
  },
  mounted() {
    //以下三步即可完成echarts的初始化使用,代码注释的详解别忘了看看
    const myCharts = this.$echarts.init(this.$refs.myCharts);
    let options = {
      title: {
        text: "未来一周气温变化", //图表顶部的标题
        subtext: "纯属虚构", //副标题
      },
      tooltip: {
        //鼠标悬浮框的提示文字
        trigger: "axis",
      },
      legend: {
        data: ["最高气温", "最低气温"],
      },
      xAxis: [
        {
          //x轴坐标数据
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        },
      ],
      yAxis: [
        {
          //y轴坐标数据
          type: "value",
          axisLabel: {
            formatter: "{value} °C",
          },
        },
      ],
      series: [
        //驱动图表生成的数据内容数组，几条折现，数组中就会有几个对应对象，来表示对应的折线
        {
          name: "最高气温",
          type: "line", //pie->饼状图  line->折线图  bar->柱状图
          data: [11, 11, 15, 13, 12, 13, 10],
        },
        {
          name: "最低气温",
          type: "line", //pie->饼状图  line->折线图  bar->柱状图
          data: [1, -2, 2, 5, 3, 2, 0],
        },
      ],
    };

    myCharts.setOption(options);
  },
  computed: {
    noMore() {
      return this.count >= 20;
    },
    disabled() {
      return this.loading || this.noMore;
    },
  },
  methods: {
    next() {
      if (this.active++ > 2) this.active = 0;
    },
    load() {
      this.loading = true;
      setTimeout(() => {
        this.count += 2;
        this.loading = false;
      }, 2000);
    },
  },
};
</script>
<style lang="less">
#Myload {
  height: 150px;
}
.detail-list {
  padding: 15px;
  margin-bottom: 40px;
  display: flex;
  flex-wrap: wrap;
}
.detail-item {
  width: 33.333%;
  text-align: center;
}
</style>