<template>
  <v-btn
    :outlined="btnOutline"
    rounded
    class="elevation-1 font-weight-bold text-center"
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
    btnOutline: {
      type: Boolean,
      default: false
    }
  }
};
</script>