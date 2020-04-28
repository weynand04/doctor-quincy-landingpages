<template>
  <v-footer id="footer" padless color="#9E9E9E">
    <v-row class="align-content-center" style="background-color:#6B6B6B;">
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
          <v-list color="transparent">
            <v-subheader class="white--text font-weight-bold body-1 justify-center">Ada pertanyaan?</v-subheader>
            <v-list-item class="white--text font-regular body-2 text-center">
              <v-list-item-content>
                <v-list-item-title style="margin-top:-5px; margin-bottom:5px">
                  <a href="#">(021-987869)</a>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>

      <!-- Sosial media Info -->
      <v-col md="2" sm="4">
        <v-card color="transparent" flat>
          <v-list color="transparent">
            <v-subheader
              class="white--text font-weight-bold body-1 justify-left"
            >Ikuti sosial media Kami</v-subheader>
            <v-list-item v-for="(s, i) in sosialitems" :key="i" class="font-regular body-2">
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
      <v-col md="2" sm="4">
        <v-card color="transparent" flat>
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

    <!-- Disclaimer -->
    <v-row class="d-flex text-center align-content-center" style="height: 86px;">
      <v-col md="12" sm="12">
        <p
          class="font-weight-medium mb-0 pb-0"
        >© 2019 Doctor Quincy - Hak cipta dilindungi undang-undang. Didukung oleh PT Kimia Farma (Persero)</p>
        <p class="font-weight-regular white--text text--lighten-1 mb-0 pb-0">
          <a
            v-for="(d, i) in claimitems"
            :key="i"
            :href="d.link"
            class="font-regular pl-1 pt-2"
          >{{d.name}}</a>
        </p>
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
        // color: "#FFFFFF",
        // icon: "mdi-facebook",
        link: "#",
        text: "Facebook"
      },
      {
        // color: "#FFFFFF",
        // icon: "mdi-twitter",
        link: "#",
        text: "Twitter"
      },
      {
        // color: "#FFFFFF",
        // icon: "mdi-youtube",
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
        name: "Terms of Use",
        link: "https://www.mdlive.com/terms-of-use/"
      },
      {
        name: "Privacy Policy",
        link: "https://www.mdlive.com/privacy-policy/"
      },
      {
        name: "Disclaimer",
        link: "https://www.mdlive.com/disclaimer/"
      },
      {
        name: "ADA Policy",
        link: "https://www.mdlive.com/ada-policy/"
      },
      {
        name: "Notice of Non-Discrimination",
        link: "https://www.mdlive.com/notice-of-non-discrimination/"
      },
      {
        name: "Compliance Hotline",
        link:
          "https://secure.ethicspoint.com/domain/media/en/gui/55030/index.html"
      }
    ]
  })
};
</script>

<style>
#footer a {
  color: #ffffff;
}
a:link {
  text-decoration: none;
}
#footer a:hover {
  text-decoration-color: #f8b218;
  text-shadow: 0.1px 0px;
  color: #f8b218;
  opacity: 0.8;
}
</style>