<template>
  <v-app>
    <Homepage-Core-AppBar />

    <Homepage-Core-View />

    <Homepage-Core-Footer />

    <homepage-gototop />
  </v-app>
</template>

<script>
export default {
  name: "hompageIndex",
  components: {
    HomepageCoreAppBar: () => import("./components/core/AppBar"),
    HomepageCoreView: () => import("./components/core/View"),
    HomepageGototop: () => import("./components/core/Gotop"),
    HomepageCoreFooter: () => import("./components/core/Footer")
  }
};
</script>