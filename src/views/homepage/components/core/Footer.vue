<template>
  <v-footer dark padless>
    <!-- app contact dan link penting -->
    <v-row no-gutters class="col-12">
      <!-- logo -->
      <v-col md="6" sm="12" align-self="center">
        <v-card flat color="transparent" class="d-flex justify-space-around">
          <v-card-title class="display-2 font-weight-bold white--text">GET APP</v-card-title>
          <v-img
            src="@/assets/image/Playstore.png"
            max-height="40"
            max-width="199"
            aspect-ratio="1.7"
            contain
          ></v-img>
          <v-img
            src="@/assets/image/AppStore.png"
            max-height="40"
            max-width="199"
            aspect-ratio="1.7"
            contain
          ></v-img>
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

    <!-- Disclaimer & Copyrigth-->
    <v-row no-gutters class="col-12" style="background: #9E9E9E">
      <v-col cols="12" class="text-center body-1">
        <p>© 2019 Doctor Quincy - Hak cipta dilindungi undang-undang. Didukung oleh PT Kimia Farma (Persero)</p>
        <p>
          <a v-for="(d, i) in claimitems" :key="i" :href="d.link">{{d.name}}</a>
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