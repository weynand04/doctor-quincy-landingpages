<template>
  <v-container id="landing" tag="section">
    <v-row class="col-12" style="backgorund-color:#FFFF">
      <v-col md="4">
        <v-card color="transparent" flat>
          <v-card-title class="display-2 font-weight-black black--text">
            Web Solutions
            <br />Designed for our
            <br />Doctors
          </v-card-title>
          <v-card-subtitle class="title font-weight-regular pt-3">Be Our Patner</v-card-subtitle>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn rounded outlined color="#F8B218">PARTNER</v-btn>
            <v-btn rounded color="#F8B218">MEMBER</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card color="transparent" flat>
          <v-img src="@/assets/image/undraw_doctors_hwty.svg" aspect-ratio="1.7" contain />
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
