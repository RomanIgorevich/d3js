<template>
  <div>
    Scale X: {{ scaleX(0) }} <br />
    Scale Y: {{ scaleY(0) }}
  </div>
</template>

<script>
import {scaleLinear} from 'd3-scale'
import {max} from 'd3-array'
import {computed} from 'vue'
const MARGIN = 25;

export default {
  props: {
    chartdata: {
      type: Array,
      default: () => [1, 5, 3, 10, 8],
    },
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
  },
  setap(props) {
    const scaleX = computed(() => {
      return scaleLinear()
        .domain([0, props.chartdata.length - 1])
        .range([MARGIN, props.width - MARGIN]);
    });

    const scaleY = computed(() => {
      return scaleLinear()
        .domain([0, max(props.chartdata) ?? 0])
        .range([props.height - MARGIN, MARGIN]);
    });

    return {
      scaleX,
      scaleY,
    };
  },
};
</script>
