<template>
  <div >
    <form action="#" @submit.prevent="getIssues">...</form>
    <chart :issues="issues"></chart>
  </div>
</template>
<script>
import * as d3 from "d3";
import _ from "lodash";
export default {
  props: ["issues"],
  data() {
    return { chart: null };
  },
  watch: {
    issues(val) {
      if (this.chart != null) this.chart.remove();
      this.renderChart(val);
    },
  },
  methods: {
    renderChart(issues_val) {
      const margin = 60;
      const svg_width = 1000;
      const svg_height = 600;
      const chart_width = 1000 - 2 * margin;
      const chart_height = 600 - 2 * margin;
      const svg = d3
        .select("svg")
        .attr("width", svg_width)
        .attr("height", svg_height);
      this.chart = svg
        .append("g")
        .attr("transform", `translate(${margin}, ${margin})`);
      const yScale = d3
        .scaleLinear()
        .range([chart_height, 0])
        .domain([0, _.maxBy(issues_val, "issues").issues]);
      this.chart
        .append("g")
        .call(d3.axisLeft(yScale).ticks(_.maxBy(issues_val, "issues").issues));
      const xScale = d3
        .scaleBand()
        .range([0, chart_width])
        .domain(issues_val.map((s) => s.day))
        .padding(0.2);
      this.chart
        .append("g")
        .attr("transform", `translate(0, ${chart_height})`)
        .call(d3.axisBottom(xScale));
    },
  },
};
</script>
