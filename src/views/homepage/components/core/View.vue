<template>
  <v-content style="background-color:white;">
    <router-view />

    <HomepageCoreFooter />
  </v-content>
</template>

<script>
import HomepageCoreFooter from "./Footer";

export default {
  name: "HompageCoreView",
  components: {
    HomepageCoreFooter
  },
  methods: {}
};
</script>