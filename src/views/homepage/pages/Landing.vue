<template>
  <v-container id="landing" tag="section" style="background-color: #ffff">
    <v-row class="col-12">
      <v-col md="4">
        <v-card color="transparent" flat>
          <v-card-title class="display-2 font-weight-medium black--text">
            Web Solutions
            <br />Designed for our
            <br />Doctors
          </v-card-title>
          <v-card-subtitle class="title font-weight-regular pt-3">Be Our Patner</v-card-subtitle>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn rounded color="#F8B218">PARTNER</v-btn>
            <v-btn rounded outlined color="#F8B218">MEMBER</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card color="transparent" flat>
          <v-img
            src="@/assets/image/undraw_doctors_hwty.svg"
            position="right 35% "
            contain
            aspect-ratio="1.7"
          ></v-img>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="col-12" style="background-color:#FCFCFC;">
      <v-col md="6">
        <v-card flat color="transparent">
          <v-img
            src="@/assets/image/undraw_mobile_development_8gyo.svg"
            position="center"
            contain
            aspect-ratio="2"
          ></v-img>
        </v-card>
      </v-col>
      <v-col md="6">
        <v-card flat color="transparent">
          <v-card-title>Apa Itu Dr.Quincy</v-card-title>
          <v-card-subtitle>The Envolving Benefits Of Telemedicine</v-card-subtitle>
          <v-card-text class="d-flex align-content-start">
            <v-img
              src="@/assets/image/google-play-badge.svg"
              position="left"
              max-height="40"
              max-width="199"
              aspect-ratio="1.7"
              contain
            ></v-img>
            <v-img
              src="@/assets/image/download-on-the-app-store-apple.svg"
              position="left"
              max-height="40"
              max-width="199"
              aspect-ratio="1.7"
              contain
            ></v-img>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row></v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home"
};
</script>
