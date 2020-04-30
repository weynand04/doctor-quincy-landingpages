<template>
  <v-footer id="Footer" padless>
    <!-- Disclaimer -->
    <v-row no-gutters class="col-12 mb-1" justify="center" style="background: #9E9E9E">
      <v-breadcrumbs :items="claimitems" divider="|" class="mb-0 pb-0 mt-0 pt-0"></v-breadcrumbs>
    </v-row>

    <!-- app contact dan link penting -->
    <v-row no-gutters style="background: #6B6B6B" class="col-12">
      <!-- Get our application -->
      <v-col md="6" sm="12">
        <v-card flat color="transparent">
          <v-card-title class="ml-5 display-2 font-weight-bold white--text">GET APP</v-card-title>
          <v-card-text class="d-flex">
            <v-img
              src="@/assets/image/google-play-badge.svg"
              max-height="40"
              max-width="199"
              aspect-ratio="1.7"
              contain
            ></v-img>
            <v-img
              src="@/assets/image/download-on-the-app-store-apple.svg"
              max-height="40"
              max-width="199"
              aspect-ratio="1.7"
              contain
            ></v-img>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- questions -->
      <v-col md="2" sm="4" class="d-flex justify-center">
        <v-card flat color="transparent" class="align-self-start">
          <v-list color="transparent">
            <v-subheader class="white--text font-weight-bold body-1 justify-center">Ada pertanyaan?</v-subheader>
            <v-list-item class="white--text font-regular body-2 text-center">
              <v-list-item-content>
                <v-list-item-title>
                  <a href="#">(021-987869)</a>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>

      <!-- Sosial media Info -->
      <v-col md="2" sm="4" class="d-flex justify-center">
        <v-card flat color="transparent" class="align-self-start">
          <v-list color="transparent">
            <v-subheader
              class="white--text font-weight-bold body-1 justify-left"
            >Ikuti sosial media Kami</v-subheader>
            <v-list-item v-for="(s, i) in sosialitems" :key="i" class="font-regular body-2">
              <v-list-item-icon>
                <v-icon :color="s.color" v-text="s.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>
                  <a class="pl-0" :href="s.link">{{s.text}}</a>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>

      <!-- Important link -->
      <v-col md="2" sm="4" class="d-flex justify-center">
        <v-card flat color="transparent" class="align-self-start">
          <v-list color="transparent">
            <v-subheader class="white--text font-weight-bold body-1 justify-left">Link penting</v-subheader>
            <v-list-item v-for="(l, i) in linkitems" :key="i" class="font-regular body-2">
              <v-list-item-content>
                <v-list-item-title>
                  <a class="pl-0" href="#">{{l.text}}</a>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>

    <!-- Copyrigth-->
    <v-row
      no-gutters
      class="col-12 pb-0 mb-0 body-2 font-weigth-regular white--text"
      justify="center"
      style="background: #000000"
    >
      <p
        class="custome"
      >© 2019 Doctor Quincy - Hak cipta dilindungi undang-undang. Didukung oleh PT Kimia Farma (Persero)</p>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "HomepageCoreFooter",
  data: () => ({
    sosialitems: [
      {
        color: "#FFFFFF",
        icon: "mdi-facebook",
        link: "#",
        text: "Facebook"
      },
      {
        color: "#FFFFFF",
        icon: "mdi-twitter",
        link: "#",
        text: "Twitter"
      },
      {
        color: "#FFFFFF",
        icon: "mdi-youtube",
        link: "#",
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
    ],
    claimitems: [
      {
        text: "Terms of Use",
        href: "https://www.mdlive.com/terms-of-use/"
      },
      {
        text: "Privacy Policy",
        href: "https://www.mdlive.com/privacy-policy/"
      },
      {
        text: "Disclaimer",
        href: "https://www.mdlive.com/disclaimer/"
      },
      {
        text: "ADA Policy",
        href: "https://www.mdlive.com/ada-policy/"
      },
      {
        text: "Notice of Non-Discrimination",
        href: "https://www.mdlive.com/notice-of-non-discrimination/"
      },
      {
        text: "Compliance Hotline",
        href:
          "https://secure.ethicspoint.com/domain/media/en/gui/55030/index.html"
      }
    ]
  })
};
</script>

<style scoped>
.v-footer a {
  font-family: "Source Sans Pro", sans-serif !important;
  text-decoration: none;
  color: #ffffff;
}
.v-footer a:hover {
  color: #fdfad3;
  text-decoration: underline;
}
</style>