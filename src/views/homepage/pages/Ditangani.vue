<template>
  <v-container id="Ditangani_page" fluid>
    <!-- section #1 -->
    <v-row>
      <v-col cols="12" md="6" align-self="center">
        <v-container class="pl-12 ml-8">
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
        </v-container>
      </v-col>
      <v-col cols="12" md="6">
        <v-img src="@/assets/image/Group 1031.png" width="562px" height="506px" cont ain />
      </v-col>
    </v-row>

    <!-- section #2  -->
    <v-row v-for="item in section_2" :key="item.judul" :style="item.bg">
      <v-col cols="12" class="d-flex justify-space-around">
        <v-container color="transparent" width="90%">
          <v-card-title class="title__widu font-weight-bold orange--text">{{item.judul}}</v-card-title>
          <v-card-text class="text__widu font-weight-ligh">
            <p class="text__widu">{{item.teks}}</p>
          </v-card-text>
          <v-divider></v-divider>
        </v-container>
      </v-col>
      <v-col cols="12" class="d-flex justify-space-around">
        <v-container color="transparent" class="col-11 mt-n6">
          <v-expansion-panels hover>
            <v-expansion-panel v-for="(i, index) in item.list" :key="index">
              <v-expansion-panel-header class="pt-0 pl-5 font-weight-bold">{{i.title}}</v-expansion-panel-header>
              <v-expansion-panel-content class="pt-0 pa-5">{{i.desc}}</v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-container>
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
            title: "Perawatan Medis",
            desc:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi reiciendis quis, veritatis vitae fuga voluptatem itaque iure suscipit architecto commodi id aspernatur eius minima. Facere natus consectetur eveniet commodi harum!"
          },
          {
            title: "Masalah kulit",
            desc:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi reiciendis quis, veritatis vitae fuga voluptatem itaque iure suscipit architecto commodi id aspernatur eius minima. Facere natus consectetur eveniet commodi harum!"
          },
          {
            title: "Kesehatan Wanita",
            desc:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi reiciendis quis, veritatis vitae fuga voluptatem itaque iure suscipit architecto commodi id aspernatur eius minima. Facere natus consectetur eveniet commodi harum!"
          },
          {
            title: "Kesehatan Pria",
            desc:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi reiciendis quis, veritatis vitae fuga voluptatem itaque iure suscipit architecto commodi id aspernatur eius minima. Facere natus consectetur eveniet commodi harum!"
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
            title: "Kujungan kesehatan",
            desc:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi reiciendis quis, veritatis vitae fuga voluptatem itaque iure suscipit architecto commodi id aspernatur eius minima. Facere natus consectetur eveniet commodi harum!"
          },
          {
            title: "Kesehatan Keluarga ",
            desc:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi reiciendis quis, veritatis vitae fuga voluptatem itaque iure suscipit architecto commodi id aspernatur eius minima. Facere natus consectetur eveniet commodi harum!"
          },
          {
            title: "Kebugaran Wanita",
            desc:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi reiciendis quis, veritatis vitae fuga voluptatem itaque iure suscipit architecto commodi id aspernatur eius minima. Facere natus consectetur eveniet commodi harum!"
          },
          {
            title: "Kebugaran Pria",
            desc:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi reiciendis quis, veritatis vitae fuga voluptatem itaque iure suscipit architecto commodi id aspernatur eius minima. Facere natus consectetur eveniet commodi harum!"
          },
          {
            title: "Diet & Nutrisi",
            desc:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi reiciendis quis, veritatis vitae fuga voluptatem itaque iure suscipit architecto commodi id aspernatur eius minima. Facere natus consectetur eveniet commodi harum!"
          },
          {
            title: "Manajemen Obat-obatan",
            desc:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi reiciendis quis, veritatis vitae fuga voluptatem itaque iure suscipit architecto commodi id aspernatur eius minima. Facere natus consectetur eveniet commodi harum!"
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
            title: "Asma",
            desc:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi reiciendis quis, veritatis vitae fuga voluptatem itaque iure suscipit architecto commodi id aspernatur eius minima. Facere natus consectetur eveniet commodi harum!"
          },
          {
            title: "Kolesterol Tinggi",
            desc:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi reiciendis quis, veritatis vitae fuga voluptatem itaque iure suscipit architecto commodi id aspernatur eius minima. Facere natus consectetur eveniet commodi harum!"
          },
          {
            title: "Tekanan Darah Tinggi",
            desc:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi reiciendis quis, veritatis vitae fuga voluptatem itaque iure suscipit architecto commodi id aspernatur eius minima. Facere natus consectetur eveniet commodi harum!"
          },
          {
            title: "Manajemen Berat Badan",
            desc:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi reiciendis quis, veritatis vitae fuga voluptatem itaque iure suscipit architecto commodi id aspernatur eius minima. Facere natus consectetur eveniet commodi harum!"
          },
          {
            title: "Diabetes",
            desc:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi reiciendis quis, veritatis vitae fuga voluptatem itaque iure suscipit architecto commodi id aspernatur eius minima. Facere natus consectetur eveniet commodi harum!"
          },
          {
            title: "Masalah Tiroid",
            desc:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi reiciendis quis, veritatis vitae fuga voluptatem itaque iure suscipit architecto commodi id aspernatur eius minima. Facere natus consectetur eveniet commodi harum!"
          }
        ]
      }
    ]
  })
};
</script>