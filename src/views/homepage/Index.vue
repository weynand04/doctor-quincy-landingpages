<template>
  <v-app id="App">
    <HomepageCoreAppBar />
    <HompageCoreView />
  </v-app>
</template>

<script>
import HomepageCoreAppBar from "./components/core/AppBar";
import HompageCoreView from "./components/core/View";

export default {
  name: "hompageIndex",
  components: {
    HomepageCoreAppBar,
    HompageCoreView
  },
  methods: {}
};
</script>