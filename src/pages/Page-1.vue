<template>
  <div class="chartHtml"></div>
</template>

<script>
import * as d3 from "d3";

export default {
  name: "Page-1",
  mounted() {
    this.drawingGraph();
  },
  methods: {
    drawingGraph() {
      const data = [8, 10, 16, 14, 28, 8];
      let x = d3
        .scaleLinear()
        .domain([0, d3.max(data)])
        .range([0, 350]);

      d3.select(".chartHtml")
        .selectAll("div")
        .data(data)
        .enter()
        .append("div")
        .style("width", function (d) {
          return x(d) + "px";
        })
        .text(function (d) {
          return d;
        });
    },
  },
};
</script>

<style>
.chartHtml div {
  font: 10px sans-serif;
  background: blue;
  text-align: center;
  padding: 3px;
  margin: 1px;
  color: white;
}
</style>
