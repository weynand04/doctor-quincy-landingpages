<template>
  <v-footer color="#9E9E9E">
    <v-row style="background-color:#6B6B6B;">
      <!-- logo -->
      <v-col md="6" sm="12" class="d-flex justify-center">
        <v-card flat color="transparent" class="d-flex justify-space-around align-self-center">
          <v-img src="@/assets/logo.jpg" height="40" width="199" aspect-ratio="2" contain></v-img>
          <v-img
            src="@/assets/image/Playstore.png"
            height="40"
            width="199"
            aspect-ratio="2"
            contain
          ></v-img>
          <v-img src="@/assets/image/AppStore.png" height="40" width="199" aspect-ratio="2" contain></v-img>
        </v-card>
      </v-col>

      <!-- questions -->
      <v-col md="2" sm="4">
        <v-card color="transparent" flat>
          <v-subheader class="white--text subtitle-1 justify-center">Ada pertanyaan?</v-subheader>
          <!-- <v-card-text class="white--text font-weight-regular text-center"></v-card-text> -->
          <v-list dense color="transparent">
            <v-list-item>
              <v-list-item-content class="white--text font-weight-regular text-center">
                <v-list-item-title style="margin-top:-5px; margin-bottom:5px">(021-987869)</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>

      <!-- Contact Info -->
      <v-col md="2" sm="4">
        <v-card color="transparent" flat>
          <v-subheader class="white--text subtitle-1 justify-left">Ikuti sosial media Kami</v-subheader>
          <v-list dense color="transparent">
            <v-list-item>
              <v-list-item-content class="white--text font-weight-regular">
                <div v-for="(s, i) in sosialitems" :key="i">
                  <v-list-item-title style="margin-top:-5px; margin-bottom:5px">
                    <v-icon small :color="s.color" v-text="s.icon" />
                    <a class="white--text" :href="s.link">{{ s.text }}</a>
                  </v-list-item-title>
                </div>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>

      <!-- Important link -->
      <v-col md="2" sm="4">
        <v-card color="transparent" flat>
          <v-subheader class="white--text subtitle-1 justify-left">Link penting</v-subheader>
          <v-list dense color="transparent">
            <v-list-item>
              <v-list-item-content class="white--text font-weight-regular">
                <div v-for="(l, i) in linkitems" :key="i">
                  <v-list-item-title style="margin-top:-5px; margin-bottom:5px">
                    <a class="white--text pl-0" href="#">{{ l.text}}</a>
                  </v-list-item-title>
                </div>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>

    <!-- Disclaimer -->
    <v-row class="d-flex text-center">
      <v-col md="12" sm="12">
        <p
          class="font-weight-medium mb-0 pb-0"
        >© 2019 Doctor Quincy - Hak cipta dilindungi undang-undang. Didukung oleh PT Kimia Farma (Persero)</p>
        <p
          class="font-weight-regular white--text text--lighten-1 mb-0 pb-0"
        >Terms of Use l Privacy Policy l Disclaimer l Code of Conduct l Notice of Non-Discrimination l Compliance Hotline</p>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "HomepageCoreFooter",
  data: () => ({
    sosialitems: [
      {
        color: "#3B5998",
        icon: "mdi-facebook",
        link: "https://www.facebook.com",
        text: "Facebook"
      },
      {
        color: "#55ACEE",
        icon: "mdi-twitter",
        link: "https://www.twitter.com",
        text: "Twitter"
      },
      {
        color: "#E52D27",
        icon: "mdi-youtube",
        link: "https://www.youtube.com",
        text: "Youtube"
      }
    ],
    linkitems: [
      {
        text: "Tentang Dr.Quincy"
      },
      {
        text: "Contact Us"
      },
      {
        text: "Partner"
      }
    ]
  })
};
</script>

<style>
a:link {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>