<template>
  <v-container>
    <v-row class="col-12 d-flex justify-space-around">
      <v-col md="4" sm="12">
        <v-card color="transparent" flat>
          <v-card-title class="v-card__title display-3">Web Design Solution for our Doctors</v-card-title>
          <v-card-subtitle class="v-card__subtitle mt-5" style="font-size:25px;">Be Our Partner</v-card-subtitle>
          <v-card-actions class="v-card__actions">
            <v-spacer></v-spacer>
            <v-btn rounded outlined color="#F8B218">PARTNER</v-btn>
            <v-btn rounded color="#F8B218">MEMBER</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col md="8" sm="12">
        <v-card class="mt-0" flat>
          <v-img src="@/assets/image/undraw_doctors_hwty.svg" aspect-ratio="1.4" contain></v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss">
.v-card {
  .v-card__title {
    text-align: left;
    font: Bold 50px/75px Corbel;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
  }
}
</style>