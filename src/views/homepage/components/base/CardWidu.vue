<template>
  <v-col cols="12" md="4" sm="6" align-self="center" class="d-flex justify-space-between">
    <v-card max-width="280" height="400" class="elevation-1 fill-height" id="rounded-card">
      <v-img :src="dataCard.image">
        <div class="fill-height mygradient"></div>
      </v-img>
      <v-card-title class="title justify-center text-center text-break">{{dataCard.title}}</v-card-title>
      <v-card-text class="font-weight-light">{{dataCard.text}}</v-card-text>
    </v-card>
  </v-col>
</template>
<script>
export default {
  name: "CardWidu",
  props: ["dataCard"]
};
</script>
<style scoped>
.mygradient {
  position: relative;
}
.mygradient::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 70px;
  bottom: 0;
  background-image: url("C:/xampp/htdocs/doctorquisy-fe/src/assets/image/wave.svg");
  background-size: cover;
  background-repeat: no-repeat;
}
#rounded-card {
  border-radius: 10px;
}
</style>