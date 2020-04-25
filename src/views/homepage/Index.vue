<template>
  <v-app>
    <HomepageCoreAppBar />
    <HompageCoreView />
    <HomepageCoreFooter />
  </v-app>
</template>

<script>
import HomepageCoreAppBar from "./components/core/AppBar";
import HompageCoreView from "./components/core/View";
import HomepageCoreFooter from "./components/core/Footer";

export default {
  name: "hompageIndex",
  components: {
    HomepageCoreAppBar,
    HompageCoreView,
    HomepageCoreFooter
  },
  methods: {}
};
</script>
