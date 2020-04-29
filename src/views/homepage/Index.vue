<template>
  <v-app>
    <Homepage-Core-AppBar />

    <Homepage-Core-View />
  </v-app>
</template>

<script>
export default {
  name: "hompageIndex",
  components: {
    HomepageCoreAppBar: () => import("./components/core/AppBar"),
    HomepageCoreView: () => import("./components/core/View")
  }
};
</script>