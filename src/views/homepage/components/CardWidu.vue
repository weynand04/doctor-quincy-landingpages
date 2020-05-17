<template>
  <v-card width="350" class="ma-5 elevation-1" id="rounded-card">
    <v-img :src="dataCard.image">
      <div class="fill-height mygradient"></div>
    </v-img>
    <v-card-title class="orange--text darken-3 text-left text-break">{{dataCard.title}}</v-card-title>
    <v-card-text class="font-weight-light">{{dataCard.text}}</v-card-text>
  </v-card>
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
  background-image: url("C:/xampp/htdocs/doctorquisy-fe/src/assets/wave1.svg");
  background-size: cover;
  background-repeat: no-repeat;
}
#rounded-card {
  border-radius: 10px;
}
</style>