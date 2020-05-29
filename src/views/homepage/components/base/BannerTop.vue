<template>
  <div id="bannertop">
    <ContainerWidu>
      <v-img
        :src="image"
        :position="position"
        :max-height="max_h"
        transition="scale-transition"
        contain
      >
        <v-row class="d-flex align-content-center fill-height img-opacity">
          <v-col v-if="right = right" cols="6"></v-col>
          <v-col cols="12" md="6">
            <Subjudul :judul="judul" />
            <p class="body-1">{{desc}}</p>
            <div>
              <slot />
            </div>
          </v-col>
          <v-col v-if="left = left" cols="6"></v-col>
        </v-row>
      </v-img>
    </ContainerWidu>
  </div>
</template>
<script>
import ContainerWidu from "./ContainerWidu";
import Subjudul from "./Judul";

export default {
  name: "bannertop",
  components: {
    ContainerWidu,
    Subjudul
  },
  props: {
    judul: {
      type: String,
      default: "Judul"
    },
    desc: {
      type: String,
      default: ""
    },
    image: {
      type: String,
      default: require("@/assets/image/svg/new-12.svg")
    },
    position: {
      type: String,
      default: "right center"
    },
    left: {
      type: Boolean,
      default: true
    },
    right: {
      type: Boolean,
      default: false
    },
    max_h: {
      type: Number,
      default: 500
    }
  }
};
</script>
<style lang="scss" scoped>
@media only screen and (max-width: 600px) {
  .img-opacity {
    background-color: rgba(255, 255, 255, 0.6);
  }
}
@media only screen and (max-width: 960px) {
  .img-opacity {
    background-color: rgba(255, 255, 255, 0.4);
  }
}
</style>