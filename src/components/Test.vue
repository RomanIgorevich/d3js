<template>
  <div><svg></svg></div>
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
      //  придает нашему графику некоторые отступы
      const margin = 60;
      // ширина и высота созданного свг
      const svg_width = 1000;
      const svg_height = 600;
      const chart_width = 1000 - 2 * margin;
      const chart_height = 600 - 2 * margin;
      const svg = d3
        //    select вернет первый соответствующий элемент,
        // а selectAll вернет все соответствующие элементы.
        .select("svg")
        .attr("width", svg_width)
        .attr("height", svg_height);
      this.chart = svg
        //При работе с D3 для любого элемента,
        //   который мы хотим добавить в SVG, мы обычно вызываем метод append ,
        //   а затем определяем атрибуты для этого нового элемента.
        .append("g")
        //   Чтобы добавить атрибуты к элементу, мы обычно вызываем метод attr
        //  который принимает два параметра. Первый параметр — это атрибут,
        //   который мы хотим применить к выбранному элементу DOM,
        //   а второй параметр — это требуемое значение или функция
        //   обратного вызова, которая возвращает желаемое значение.
        //   Здесь мы перемещаем начало графика в позицию 60, 60 SVG

        .attr("transform", `translate(${margin}, ${margin})`);
      //рисуем ось у
      const yScale = d3
        //   создает шкалу с линейной зависимостью между вводом и выводом.
        .scaleLinear()
        // возвращает массив чисел с равными интервалами. В простейшей форме он возвращает целые числа от нуля до указанного конца минус один.
        .range([chart_height, 0])
        // domain обозначает минимальное и максимальное значения входных данных. Для этого конкретного набора данных мы хотим начать с нуля до самого высокого значения в нашем наборе данных. Думайте о домене как о входе, а о диапазоне — как о выходе.
        .domain([0, _.maxBy(issues_val, "issues").issues]);
      this.chart
        .append("g")
        // y-шкалы мы используем эту шкалу для рисования оси, вызывая метод axisLeft , который принимает y-scale в качестве аргумента.
        .call(d3.axisLeft(yScale).ticks(_.maxBy(issues_val, "issues").issues));
      // рисуем ось х
      const xScale = d3
        //  Для xScale мы используем функцию scaleBand , которая помогает разбить диапазон на полосы и вычислить координаты и ширину полос с дополнительным заполнением.
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
