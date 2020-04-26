<template>
  <v-container fluid class="container" tag="section">
    <v-row justify="space-around">
      <v-col md="4" sm="12">
        <v-card class="mt-0" flat>
          <v-card-title class="display-1">Web Design Solution for our Doctors</v-card-title>
          <v-card-subtitle class="v-card__subtitle mt-5" style="font-size:25px;">Be Our Partner</v-card-subtitle>
          <v-card-actions class="v-card__actions">
            <v-spacer></v-spacer>
            <v-btn rounded color="warning">PARTNER</v-btn>
            <v-btn rounded color="warning">MEMBER</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col class="align-content-center">
        <v-card class="mt-0" height="500" flat>
          <v-img src="@/assets/image/undraw_doctors_hwty.svg" aspect-ratio="2" contain></v-img>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="space-around" style="background-color:#edece8;">
      <v-col>
        <v-card class="mt-0" flat color="transparent">
          <v-img src="@/assets/image/undraw_medical_care_movn.svg" aspect-ratio="1.7" contain></v-img>
        </v-card>
      </v-col>
      <v-col md="6" sm="12">
        <v-card class="mt-0" flat color="transparent">
          <v-card-title class="v-card__title yellow--text text--darken-3">How is Our service</v-card-title>
          <v-card-text
            class="v-card__text"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus aliquid est incidunt repudiandae? Accusantium debitis suscipit id, maxime, iusto quod et ratione ut nesciunt cum, reprehenderit fugit aspernatur mollitia? Placeat?</v-card-text>
          <v-card-actions class="v-card__actions darken-1">
            <v-btn rounded color="warning">Read more..</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-row id="bg">
      <v-col md="12">
        <v-row justify="center" class="mt-10 mb-10">
          <h1
            class="heading yellow--text text--darken-3"
          >Cover All Aspect of Your Clinics Online Presense</h1>
        </v-row>
        <v-row class="text-center text">
          <v-col md="3" sm="6">
            <v-card class="mt-0">
              <v-img src="@/assets/image/slider1.jpg" aspect-ratio="2" contain></v-img>
              <v-card-title class="justify-center">Medical Treatmen</v-card-title>
              <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsam architecto saepe voluptatum. Sed, non!</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn rounded color="warning">Read more..</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col md="3" sm="6">
            <v-card class="mt-0">
              <v-img src="@/assets/image/slider2.jpg" aspect-ratio="2" contain></v-img>
              <v-card-title class="justify-center">Behavior & Psychiatric</v-card-title>
              <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsam architecto saepe voluptatum. Sed, non!</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn rounded color="warning">Read more..</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col md="3" sm="6">
            <v-card class="mt-0">
              <v-img src="@/assets/image/slider3.jpg" aspect-ratio="2" contain></v-img>
              <v-card-title class="justify-center">Preventive Healt Care</v-card-title>
              <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsam architecto saepe voluptatum. Sed, non!</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn rounded color="warning">Read more..</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col md="3" sm="6">
            <v-card class="mt-0">
              <v-img
                src="@/assets/image/jovial-male-doctor-smiling-to-camera-picture-id938442864.jpg"
                aspect-ratio="2"
                contain
              ></v-img>
              <v-card-title class="justify-center">Chronic Care</v-card-title>
              <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsam architecto saepe voluptatum. Sed, non!</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn rounded color="warning">Read more..</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style>
.container {
  background-color: white !important;
}
#bg {
  margin-top: 8px;
  background-color: lemonchiffon;
  background-size: cover;
}
</style>