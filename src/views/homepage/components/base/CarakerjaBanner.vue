<template>
  <div id="carakerjabanner">
    <ContainerWidu>
      <v-img
      :src="image"
      :position="position"
      :max-height="430"
      transition="scale-transition"
      contain
      >
      <v-row class="d-flex align-content-center fill-height img-opacity">
        <v-col v-if="right = right" cols="4"></v-col>
        <v-col cols="12" md="4">
          <!-- <Subjudul :judul1="judul1" /> -->
          <div class="title1__widu font-weight-bold black--text text-break">{{judul1}}</div>
          <p class="body-1">{{desc1}}</p>
          <v-btn rounded color="primary" class="elevation-0">Register</v-btn>
          <div>
            <slot />
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <!-- <Subjudul :judul2="judul2" /> -->
          <div class="title1__widu font-weight-bold black--text text-break">{{judul2}}</div>
          <p class="body-1">{{desc2}}</p>
          <v-btn rounded outlined color="primary">Member</v-btn>
          <div>
            <slot />
          </div>
        </v-col>
        <v-col v-if="left = left" cols="4"></v-col>
      </v-row>
    </v-img>
  </ContainerWidu>
</div>
</template>
<script>
import ContainerWidu from "./ContainerWidu";
// import Subjudul from "./Judul";

export default {
  name: "carakerjabanner",
  components: {
    ContainerWidu,
    // Subjudul
  },
  props: {
    judul1: {
      type: String,
      default: ""
    },
    judul2: {
      type: String,
      default: ""
    },
    desc1: {
      type: String,
      default: ""
    },
    desc2: {
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