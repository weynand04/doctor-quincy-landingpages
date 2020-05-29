<template>
  <div id="investor" tag="section">
    <div v-for="(section, insec) in sections" :key="insec">
      <!-- bannerTop -->
      <div v-for="(item, index) in section.bannerTop" :key="index">
        <Bannertop
          :judul="item.judul"
          :desc="item.teks"
          :image="item.gambar"
          btn="btn"
          btnName="Register"
          left="left"
        >
          <v-btn
            rounded
            color="primary"
            max-width="100"
            height="40"
            class="elevation-0 mx-2"
          >Register</v-btn>
          <v-btn rounded color="primary" max-width="100" height="40" class="elevation-0 mx-2">Login</v-btn>
        </Bannertop>
      </div>

      <!-- ContentSatu -->
      <ContainerWidu v-for="(item, index) in section.ContentSatu" :key="index">
        <v-row>
          <v-col cols="12" sm="6" md="4" lg="4" v-for="(data, index) in item.cards" :key="index">
            <v-card max-width="412" max-height="550">
              <v-img contain :src="data.image" gradient="rgba(237,145,17), rgba(237,145,17)">
                <div class="fill-height mygradient"></div>
              </v-img>
              <v-card-title class="justify-center pb-4">{{data.title}}</v-card-title>
              <v-card-subtitle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore saepe deserunt quod harum facere ea ad ex minima accusamus dolore?</v-card-subtitle>
              <v-card-text>
                <p>
                  <span>
                    <v-icon>mdi-email</v-icon>
                  </span>
                  www.mitra.com
                </p>
                <p>
                  <span>
                    <v-icon>mdi-phone</v-icon>
                  </span>
                  089-222-222
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </ContainerWidu>
    </div>
    <!-- Component banner bottom -->
    <Bannerbot />
  </div>
</template>

<script>
import ContainerWidu from "../components/base/ContainerWidu";
import Bannerbot from "../components/base/BannerBot";
import Bannertop from "../components/base/BannerTop";

export default {
  name: "Help",
  components: {
    ContainerWidu,
    Bannerbot,
    Bannertop
  },
  data: () => ({
    sections: [
      {
        bannerTop: [
          {
            judul: "Mitra",
            teks:
              "Tujuan dan sasaran utama Doctor Quincy, adalah untuk meningkatkan pemberian layanan kesehatan kepada populasi yang kurang terlayani secara medis di seluruh negeri, membangun dan mempertahankan praktik-praktik di daerah pedesaan yang tidak terlayani.",
            gambar: require("@/assets/image/svg/new-14.svg")
          }
        ]
      },
      {
        ContentSatu: [
          {
            cards: [
              {
                title: "Mitra 1",
                text: "",
                image: require("@/assets/image/mitra.png")
              },
              {
                title: "Mitra 2",
                text: "",
                image: require("@/assets/image/mitra.png")
              },
              {
                title: "Mitra 3",
                text: "",
                image: require("@/assets/image/mitra.png")
              },
              {
                title: "Mitra 4",
                text: "",
                image: require("@/assets/image/mitra.png")
              },
              {
                title: "Mitra 5",
                text: "",
                image: require("@/assets/image/mitra.png")
              },
              {
                title: "Mitra 6",
                text: "",
                image: require("@/assets/image/mitra.png")
              }
            ]
          }
        ]
      }
    ]
  })
};
</script>

<style lang="scss">
.mygradient {
  position: relative;
}
.mygradient::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 70px;
  bottom: 0;
  background-image: url("C:/xampp/htdocs/doctorquisy-fe/src/assets/image/wave.svg");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>