<template>
  <div id="app">
    <button @click="getIssues">click</button>
    <!-- <chart :issues="issues" /> -->
    <hr/>
    <test :issues="issues" />
  </div>
</template>

<script>
import axios from "axios";

// import Chart from "./components/Chart.vue";
import Test from "./components/Test.vue";

export default {
  name: "app",
  components: {
    // Chart,
    Test,
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
