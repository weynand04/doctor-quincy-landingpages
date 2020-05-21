<template>
  <div class="display-1 font-weight-light col-12 text-left pa-0 text-break">
    <h5 class="font-weight-bold orange--text">
      {{ subjudul }}
      <template v-if="text">
        <span class="subtitle-1" v-text="text" />
      </template>
    </h5>

    <div class="pt-2">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Subjudul",

  props: {
    subjudul: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    }
  }
};
</script>
