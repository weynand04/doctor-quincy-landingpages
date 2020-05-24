<template>
  <div id="blog" tag="section">
    <div v-for="(section, insec) in sections" :key="insec">
      <!-- bannerTop -->
      <ContainerWidu v-for="(item, index) in section.bannerTop" :key="index">
        <v-row no-gutters class="pl-sm-6 pl-md-2">
          <v-col cols="12" md="6" sm="6" lg="6" xl="6">
            <v-img :src="item.gambar" max-height="848" max-width="832" aspect-ratio="1.2" contain />
          </v-col>
          <v-col cols="12" md="6" sm="6" lg="6" xl="6" align-self="center">
            <subjudul :judul="item.judul" />
            <p class="body-1 font-weight-medium">{{item.teks}}</p>
            <v-btn rounded max-width="100" height="40" color="primary">DAFTAR</v-btn>
          </v-col>
        </v-row>
      </ContainerWidu>

      <!-- ContentSatu -->
      <ContainerWidu v-for="(item, index) in section.ContentSatu" :key="index">
        <v-row>
          <v-col cols="12" sm="2" md="4" lg="4" v-for="(data, index) in item.cards" :key="index">
            <v-card max-width="412" max-height="550">
              <v-img contain :src="data.image" gradient="rgba(237,145,17), rgba(237,145,17)">
                <div class="fill-height mygradient"></div>
              </v-img>
              <v-card-title class="justify-center">{{data.title}}</v-card-title>
              <v-card-subtitle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore saepe deserunt quod harum facere ea ad ex minima accusamus dolore?</v-card-subtitle>
              <v-card-text>
                <p>
                  <span>
                    <v-icon>mdi-email</v-icon>
                  </span>
                  www.mitra1.com
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

      <!-- Component banner bottom -->
      <ContainerWidu v-for="(item, index) in section.bannerbawah" :key="index" class="bg-img">
        <Subjudul :subjudul="item.subjudul" />
        <template v-for="(data, index) in item.teks">
          <p :key="index">{{data.p}}</p>
        </template>
      </ContainerWidu>
    </div>
  </div>
</template>

<script>
import ContainerWidu from "../components/base/ContainerWidu";
import Subjudul from "../components/base/Judul";

export default {
  name: "Help",
  components: {
    ContainerWidu,
    Subjudul
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
      },
      {
        bannerbawah: [
          {
            subjudul:
              "Layanan Kesehatan Harusnya Sederhana, Cepat Dan Tidak Rumit Temukan Sendiri Mengapa Begitu Banyak Orang Menyukai Doctor Quincy",
            teks: [
              {
                p:
                  "Layanan kesehatan medis yang tersedia melalui Doctor Quincy disediakan oleh dokter-dokter berlisensi yang berpraktik dalam kelompok praktik profesional yang dimiliki secara independen dan secara kolektif dikenal sebagai Dokter Profesional Sesuai Permintaan Praktik profesional ini menyediakan layanan melalui platform Doctor Quincy."
              },
              {
                p:
                  "PT. Prima Shakti Multi Global, tidak dengan sendirinya menyediakan layanan dokter, kesehatan mental, atau penyedia layanan kesehatan lainnya. Doctor Quincy di bawah PT. Prima Shakti Multi Global, adalah layanan kesehatan online untuk perawatan, perawatan dokter di rumah, perawat, terapis dan fisioterapi di Indonesia. Dokter, perawat, terapis dan fisioterapi di Doctor Quincy adalah ahli dalam bidang mereka dan memiliki lisensi bersertifikat, jangkauan luas di kota-kota di seluruh Indonesia dan siap 24 jam. Pelanggan Doctor Quincy dapat memilih layanan yang sesuai dengan anggaran dan kebutuhan mereka."
              },
              {
                p:
                  "Percayalah Pada Perawatan Di Rumah Hanya Dengan Doctor Quincy Saja"
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
.bg-img {
  background-image: url("C:/xampp/htdocs/doctorquisy-fe/src/assets/image/Image 14.png"),
    linear-gradient(rgba(230, 172, 47, 0.178), rgba(216, 160, 40, 0.301));
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 20%;
}
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