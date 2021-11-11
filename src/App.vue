<template>
  <div id="app">
    <button @click="getIssues">click</button>
    <chart :issues="issues" />
  </div>
</template>

<script>
import axios from "axios";

import Chart from "./components/Chart.vue";

export default {
  name: "app",
  components: {
    Chart,
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
  },
};
</script>
