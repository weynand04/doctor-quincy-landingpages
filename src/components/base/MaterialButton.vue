<template>
  <v-btn
    :outlined="test"
    @mouseover="test = true"
    @mouseleave="test = false"
    rounded
    depressed
    class="elevation-1 font-weight-bold"
    color="primary"
  >
    <slot />
  </v-btn>
</template>
<script>
export default {
  name: "MaterialButton",
  data: () => ({
    test: false
  }),
  props: {
    text: {
      type: String,
      default: ""
    }
  }
};
</script>