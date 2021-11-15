<template>
  <div>
    <button @click="changeСolor()">Изменить цвет</button>
    <h2 class="title">Lorem, ipsum dolor.</h2>
    <p>Lorem, ipsum dolor.</p>
    <p>Lorem ipsum dolor sit amet.</p>
    <p>Lorem, ipsum dolor.</p>
  </div>
</template>

<script>
import * as d3 from "d3";

export default {
  name: "Page-0",
  methods: {
    changeСolor() {
      d3.select(".title").style("color", "red");
      d3.selectAll("p").style("color", function () {
        return "hsl(" + Math.random() * 360 + ",100%, 50%)";
      });
      d3.selectAll("p")
        .data([16, 24, 32])
        .style("font-size", function (d) {
          return d + "px";
        });
    },
  },
};
</script>


