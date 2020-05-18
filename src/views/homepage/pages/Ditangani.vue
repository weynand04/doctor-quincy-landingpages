<template>
  <v-container id="Ditangani_page" fluid>
    <!-- section #1 -->
    <v-row>
      <v-col cols="12" md="6" align-self="center">
        <v-card flat class="pl-12 ml-8">
          <v-card-title
            class="title1__widu font-weight-bold black--text text-break"
          >Penyakit Yang Kami Tangani</v-card-title>
          <v-card-subtitle
            class="text__widu font-weight-medium pt-3"
          >Kami berkomitmen untuk menawarkan kepada kamu dan keluarga kunjungan dokter terbaik. Daftarkan sekarang dan izinkan dokter-dokter kami membantu dengan lebih dari 200 penyakit baik yang ringan maupun yang berat, mulai dari pilek dan infeksi sinus hingga alergi dan banyak lagi.</v-card-subtitle>
          <v-card-actions>
            <v-btn rounded color="primary" class="elevation-0">Login</v-btn>
            <v-btn rounded outlined color="primary">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-img src="@/assets/image/Group 1031.png" width="562px" height="506px" cont ain />
      </v-col>
    </v-row>

    <!-- section #2  -->
    <v-row v-for="item in section_2" :key="item.judul" :style="item.bg">
      <v-col cols="12" class="d-flex justify-space-around">
        <v-card flat color="transparent" width="90%">
          <v-card-title class="title__widu font-weight-bold orange--text">{{item.judul}}</v-card-title>
          <v-card-text class="text__widu font-weight-ligh">
            <p class="text__widu">{{item.teks}}</p>
          </v-card-text>
          <v-divider></v-divider>
        </v-card>
      </v-col>
      <v-col cols="12" class="d-flex justify-space-around">
        <v-card flat color="transparent" width="90%">
          <v-row>
            <v-col cols="12">
              <v-expansion-panels focusable>
                <v-expansion-panel v-for="(i, index) in item.list" :key="index">
                  <v-expansion-panel-header class="pt-0 pl-4 pr-4 pt-0">{{i.title}}</v-expansion-panel-header>
                  <v-expansion-panel-content class="pt-0 pl-4 pr-4 pt-0">{{i.desc}}</v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Ditangani",
  data: () => ({
    section_2: [
      {
        bg: "background: #FCFCFC",
        judul: "Perawatan medis",
        teks:
          "Ketika kamu atau anggota keluarga sakit dan perlu menemui dokter, tim dokter kami siap siaga setiap saat. Tersedia 24/7, tim penyedia dokter kami dapat membantu kamu bahkan dengan resep obat, jika diperlukan.",
        list: [
          {
            title: "Perawatan Medis",
            desc:
              "Ketika kamu atau anggota keluarga sakit dan perlu menemui dokter, tim dokter kami siap siaga setiap saat. Tersedia 24/7, tim penyedia dokter kami dapat membantu kamu bahkan dengan resep obat, jika diperlukan."
          },
          {
            title: "Masalah kulit",
            desc:
              "Ketika kamu atau anggota keluarga sakit dan perlu menemui dokter, tim dokter kami siap siaga setiap saat. Tersedia 24/7, tim penyedia dokter kami dapat membantu kamu bahkan dengan resep obat, jika diperlukan."
          },
          {
            title: "Kesehatan Wanita",
            desc:
              "Ketika kamu atau anggota keluarga sakit dan perlu menemui dokter, tim dokter kami siap siaga setiap saat. Tersedia 24/7, tim penyedia dokter kami dapat membantu kamu bahkan dengan resep obat, jika diperlukan."
          },
          {
            title: "Kesehatan Pria",
            desc:
              "Ketika kamu atau anggota keluarga sakit dan perlu menemui dokter, tim dokter kami siap siaga setiap saat. Tersedia 24/7, tim penyedia dokter kami dapat membantu kamu bahkan dengan resep obat, jika diperlukan."
          }
        ]
      },
      {
        bg: "background: #F7F7F7",
        judul: "Perilaku & Jiwa",
        teks:
          "Tim kami yang beraneka ragam dari psikolog berlisensi dan psikiater bersertifikat memberikan dukungan emosional yang kamu butuhkan dari privasi dan kemudahan rumah. Dari terapi bicara hingga manajemen pengobatan, tim kami ada disini, siap untuk mendukung kesehatan mental kamu sepenuhnya.",
        list: [
          {
            title: "Perawatan Medis"
          },
          {
            title: "Masalah kulit"
          },
          {
            title: "Kesehatan Wanita"
          },
          {
            title: "Kesehatan Pria"
          }
        ]
      },
      {
        bg: "background: #EFEFEF",
        judul: "Perawatan Kesehatan Preventif",
        teks:
          "Tim layanan kesehatan kami yang penuh perhatian ada disini untuk mendukung kesehatan kamu dan rutinitas perawatan-diri sehari-hari. Dari makan sehat hingga pemeriksaan laboratorium preventif, Doctor Quincy menyatukan penyedia tepercaya dengan solusi yang benar-benar bekerja di dunia nyata.",
        list: [
          {
            title: "Kujungan kesehatan"
          },
          {
            title: "Kesehatan Keluarga "
          },
          {
            title: "Kebugaran Wanita"
          },
          {
            title: "Kebugaran Pria"
          },
          {
            title: "Diet & Nutrisi"
          },
          {
            title: "Manajemen Obat-obatan"
          }
        ]
      },
      {
        bg: "background: #E9E9E9",
        judul: "Perawatan Kronis",
        teks:
          "Pendekatan kami adalah merawat dan memberi kamu dan keluarga sistem perawatan kesehatan yang fleksibel s aat dibutuhkan. Ketika kamu perlu mengelola kondisi kesehatan yang berkelanjutan atau kronis, Dokter Quincy membuatnya mudah hanya dengan satu sentuhan tombol.",
        list: [
          {
            title: "Asma"
          },
          {
            title: "Kolesterol Tinggi"
          },
          {
            title: "Tekanan Darah Tinggi"
          },
          {
            title: "Manajemen Berat Badan"
          },
          {
            title: "Diabetes"
          },
          {
            title: "Masalah Tiroid"
          }
        ]
      }
    ]
  })
};
</script>