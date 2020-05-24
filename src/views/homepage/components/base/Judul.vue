<template>
  <div class="display-1 font-weight-light col-12 text-left pa-0 text-break">
    <h5 class="font-weight-bold black--text">{{ judul }}</h5>

    <h5 class="font-weight-bold primary--text">{{ subjudul }}</h5>
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
    judul: {
      type: String,
      default: ""
    }
  }
};
</script>
