<template>
  <div id="first">
    first
    <div v-for="item in tableData" :key="item.dtae" @click="changeComp(item)">
      {{ item.name }}
    </div>
    <div></div>
  </div>
</template>

<script>
import bus from "./bus/bus.js";

export default {
  name: "first",
  props: {
    tableData: Array,
  },
  mounted() {
    // this.$bus.$emit('change-message',this.tableData.splice(1))
  },
  methods: {},

  data() {
    return {};
  },
};
</script>