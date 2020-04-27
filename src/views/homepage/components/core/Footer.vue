<template>
  <v-footer class="v-footer--padless">
    <v-row style="background-color:white;">
      <v-col md="3" sm="12" class="d-flex justify-space-around align-self-center">
        <v-card color="trasparent" flat>
          <v-img src="@/assets/logo.jpg" class="logo" aspect-ratio="1.4" contain></v-img>
        </v-card>
      </v-col>
      <v-col md="3" sm="12" class="d-flex justify-space-around">
        <v-card color="transparent" class="text-center" flat>
          <v-card-title class="display-1 justify-center">Have any questions ?</v-card-title>
          <v-card-text class="title black--text">(021-987869)</v-card-text>
          <v-card-actions class="justify-center">
            <v-img src="@/assets/image/Playstore.png" class="logo" aspect-ratio="1.4" contain></v-img>
            <v-img src="@/assets/image/AppStore.png" class="logo" aspect-ratio="1.4" contain></v-img>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col md="3" sm="6" class="d-flex justify-space-around">
        <v-card color="transparent" class="text-center" flat>
          <v-card-title class="display-1 justify-center">Contact Info</v-card-title>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="title">Single-line item</v-list-item-title>
              <v-list-item-title class="title">Single-line item</v-list-item-title>
              <v-list-item-title class="title">Single-line item</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col md="3" sm="6" class="d-flex justify-space-around">
        <v-card color="transparent" class="text-center" flat>
          <v-card-title class="display-1 justify-center">Important Link</v-card-title>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="title">Single-line item</v-list-item-title>
              <v-list-item-title class="title">Single-line item</v-list-item-title>
              <v-list-item-title class="title">Single-line item</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="text-center">
      <v-col>
        <p
          class="font-weight-medium mb-0 pb-0"
        >© 2019 Doctor Quincy - Hak cipta dilindungi undang-undang. Didukung oleh PT Kimia Farma (Persero)</p>
        <p
          class="font-weight-regular yellow--text text--darken-3 mb-0 pb-0"
        >Terms of Use l Privacy Policy l Disclaimer l Code of Conduct l Notice of Non-Discrimination l Compliance Hotline</p>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "HomepageCoreFooter",
  data: () => ({})
};
</script>