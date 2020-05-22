<template>
  <v-footer id="Footer" padless>
    <!-- Disclaimer -->
    <v-row no-gutters style="background-color: grey;" class="mb-1">
      <v-col cols="12" class="d-flex justify-space-around">
        <v-breadcrumbs :items="claimitems" divider="|" class="my-0 py-0"></v-breadcrumbs>
      </v-col>
    </v-row>

    <!-- app contact dan link penting -->
    <v-row no-gutters style="background: #6B6B6B" class="col-12">
      <!-- Get our application -->
      <v-col cols="12" md="6" sm="12">
        <h1 class="pl-md-12 display-2 font-weight-bold white--text">GET APP</h1>
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
      </v-col>

      <!-- questions -->
      <v-col md="2" sm="4">
        <v-subheader class="white--text font-weight-bold body-1 justify-left">Ada pertanyaan?</v-subheader>
        <v-list dense flat color="transparent">
          <v-list-item>
            <v-list-item-title>
              <a class="pl-0 font-regular body-2">(021-987869)</a>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-col>

      <!-- Sosial media Info -->
      <v-col md="2" sm="4">
        <v-subheader class="white--text font-weight-bold body-1 justify-left">Sosial media</v-subheader>
        <v-list dense flat color="transparent">
          <v-list-item v-for="(s, i) in sosialitems" :key="i">
            <v-list-item-title>
              <a class="pl-0 font-regular body-2" :href="s.link">{{s.text}}</a>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-col>

      <!-- Important link -->
      <v-col md="2" sm="4">
        <v-subheader class="white--text font-weight-bold body-1 justify-left">Link penting</v-subheader>
        <v-list dense flat color="transparent">
          <v-list-item v-for="(l, i) in linkitems" :key="i">
            <v-list-item-title>
              <a class="pl-0 font-regular body-2" href="#">{{l.text}}</a>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>

    <!-- Copyrigth-->
    <v-row no-gutters class="col-12 pb-0 mb-0 body-2" justify="center" style="background: #000000">
      <p
        class="font-weigth-regular white--text"
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
        link: "#",
        text: "Facebook"
      },
      {
        color: "#FFFFFF",
        link: "#",
        text: "Twitter"
      },
      {
        color: "#FFFFFF",
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