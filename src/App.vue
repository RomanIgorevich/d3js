<template>
  <div>
    <button @click="goColor">go color</button>

    <h2 class="h">Lorem, ipsum dolor.</h2>

    <p>Lorem, ipsum dolor.</p>
    <p>Lorem ipsum dolor sit amet.</p>
    <p>Lorem, ipsum dolor.</p>
    <!-- <button @click="drawingGraph">Отрисовка графика</button> -->
    <div class="chartHtml"></div>
  </div>
</template>

<script>
import axios from "axios";
import * as d3 from "d3";

export default {
  name: "app",
  mounted() {
    this.drawingGraph();
  },
  data() {
    return {
      issues: [],
    };
  },
  methods: {
    getIssues() {
      axios.get(`http://localhost:3000/arr`).then((response) => {
        console.log(response.data);
        this.issues = response.data;
      });
    },
    goColor() {
      d3.select(".h").style("color", "red");
      d3.selectAll("p").style("color", function () {
        return "hsl(" + Math.random() * 360 + ",100%, 50%)";
      });
      d3.selectAll("p")
        .data([16, 24, 32])
        .style("font-size", function (d) {
          return d + "px";
        });
    },
    drawingGraph() {
      const data = [8, 10, 16, 14, 28, 8];
      let x = d3.scaleLinear()
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
