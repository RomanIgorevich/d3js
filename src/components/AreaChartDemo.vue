<template>
  <div>
    <h1>Lorem, ipsum dolor.</h1>
    <area-chart :chartdata="data" :width="300" :height="300" />
  </div>
</template>

<script>
import AreaChart from "./AreaChart.vue";
function createData() {
  return [1, 5, 3, 10, 8];
}

export default {
  name: "",
  components: {
    AreaChart,
  },
  setup() {
    const data = createData();
    console.log("data", data)
    return data;
  },
};
</script>
