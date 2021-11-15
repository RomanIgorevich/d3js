<template>
  <div>
    <page-0 />
    <page-1 />
    <page-2 />
  </div>
</template>

<script>
import Page0 from "./pages/Page-0.vue";
import Page1 from "./pages/Page-1.vue";
import Page2 from "./pages/Page-2.vue";
export default {
  name: "app",
  components: {
    Page0,
    Page1,
    Page2,
  },
};
</script>
