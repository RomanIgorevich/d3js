<template>
  <div>
    <div id="page-wrap"></div>
  </div>
</template>

<script>
import * as d3 from "d3";
export default {
  async mounted() {
    const data = await d3.json("http://localhost:3000/tab");
    this.start(data);
  },
  methods: {
    start(data) {
      // сортировать по возрастанию
      var sortAscending = true;
      // добавляем элемент table в #page-wrap
      var table = d3.select("#page-wrap").append("table");
      // массив заголовков
      var titles = Object.keys(data[0]);

      var headers = table
        .append("thead")
        .append("tr")
        .selectAll("th")
        .data(titles)
        .enter()
        .append("th")
        .text(function (d) {
          return d;
        })
        .on("click", function (d) {
          headers.attr("class", "header");
          if (sortAscending) {
            rows.sort(function (a, b) {
              if (a[d.target.__data__] > b[d.target.__data__]) return 1;
              if (a[d.target.__data__] < b[d.target.__data__]) return -1;
              return 0;
            });
            sortAscending = false;
            this.className = "aes";
          } else {
            rows.sort(function (a, b) {
              if (a[d.target.__data__] < b[d.target.__data__]) return 1;
              if (a[d.target.__data__] > b[d.target.__data__]) return -1;
              return 0;
            });
            sortAscending = true;
            this.className = "des";
          }
        });

      var rows = table
        .append("tbody")
        .selectAll("tr")
        .data(data)
        .enter()
        .append("tr");

      rows
        .selectAll("td")
        .data(function (d) {
          return titles.map(function (key) {
            return {
              value: d[key],
              name: d,
            };
          });
        })
        .enter()
        .append("td")
        .attr("data-th", function (d) {
          return d.name.name;
        })
        .text(function (d) {
          return d.value;
        });
    },
  },
};
</script>

<style>
table {
  width: 60%;
  border-collapse: collapse;
  margin: 0px auto;
}
tr:nth-of-type(odd) {
  background: #eee;
}
th {
  background: #333;
  color: white;
  font-weight: bold;
  cursor: s-resize;
  background-repeat: no-repeat;
  background-position: 3% center;
}
td,
th {
  padding: 6px;
  border: 1px solid #ccc;
  text-align: left;
}
th.des:after {
  content: "\21E3";
}
th.aes:after {
  content: "\21E1";
}
</style>
