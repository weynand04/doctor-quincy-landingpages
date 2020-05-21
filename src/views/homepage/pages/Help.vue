<template>
  <v-container style="background: red" class="pl-md-12">
    <v-row no-gutters style="background: blue;" justify="space-between">
      <v-col
        cols="12"
        md="4"
        align-self="center"
        class="d-flex justify-space-between"
        style="background: blue;"
      >
        <v-card style="background: green">
          <v-card-title
            class="title1__widu font-weight-bold black--text text-break"
          >Lorem ipsum dolor sit amet.</v-card-title>
          <v-card-subtitle
            class="text__widu font-weight-medium pt-3"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel in dignissimos, incidunt at sint magnam ipsam provident aut ullam. Expedita, eum laudantium doloremque quo corrupti mollitia quaerat deserunt adipisci natus!</v-card-subtitle>
          <v-card-actions>
            <v-btn rounded color="primary" class="elevation-0">Login</v-btn>
            <v-btn rounded outlined color="primary">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" style="background: yellow;">
        <v-img src="@/assets/image/svg/gambar lain-11.svg" width="562px" height="506px" contain />
      </v-col>
    </v-row>
    <v-content>
      <v-card height="300">jlll</v-card>
    </v-content>
  </v-container>
</template>

<script>
export default {
  name: "Help"
};
</script>