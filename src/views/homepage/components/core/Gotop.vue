<template>
  <div id="goto-Top">
    <v-btn
      v-scroll="onScroll"
      v-show="fab"
      fab
      dark
      fixed
      bottom
      right
      small
      color="primary"
      class="elevation-2"
      @click="toTop"
    >
      <v-icon large>mdi-chevron-up</v-icon>
    </v-btn>
  </div>
</template>
<script>
export default {
  name: "HomepageGototop",
  data: () => ({
    fab: false
  }),

  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    }
  }
};
</script>