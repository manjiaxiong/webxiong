<template>
<div id="table1">
<!-- <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      
      prop="date"
      label="日期"
      >
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      >
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      >
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      >
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      >
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      >
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      >
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table> -->
<span v-for="item in comps" :key='item'  @click="changeComp(item)">
{{item}}
</span>
<keep-alive>
  <component :is='comp' :tableData='tableData'></component>
</keep-alive>

</div>

  
</template>

<script>
import first from './first.vue'
import sennd from './sennd.vue'
import three from './three.vue'
import bus from './bus/bus.js'
  export default {
    name:'table1',
    components:{
      first,
      sennd,
      three
    },
    mounted(){
      this.$bus.$on('change-message',mes => {
      this.tableData = mes
    })
    },
    methods: {
      changeComp(item){
        this.comp=item
      },
      handleClick(row) {
        for(let key in row){
          console.log(key,row[key]);
        }
      }
    },

    data() {
      return {
        comps:['first','sennd','three'],
        comp:'first',
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    }
  }
</script>