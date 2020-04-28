<template>
  <v-app>
    <link
      href="https://fonts.googleapis.com/css?family=Corbel:100,300,400,500,700,900"
      rel="stylesheet"
    />
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