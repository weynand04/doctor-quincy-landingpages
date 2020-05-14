<template>
  <div id="settings-wrapper">
    <v-card
      class="py-2 px-4"
      color="rgba(248, 178, 24, 0.39)"
      dark
      link
      min-width="100"
      style="position: fixed; top: 80%; right: -35px; border-radius: 8px;"
    >
      <v-btn icon square title="Go to top" @click="$vuetify.goTo(0)">
        <v-icon x-large>mdi-chevron-up</v-icon>
      </v-btn>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "HomepageGototop"
};
</script>