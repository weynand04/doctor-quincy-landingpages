<template>
  <v-content>
    <router-view />

    <Homepage-Core-Footer />
  </v-content>
</template>

<script>
export default {
  name: "HompageCoreView",
  components: {
    HomepageCoreFooter: () => import("./Footer")
  }
};
</script>