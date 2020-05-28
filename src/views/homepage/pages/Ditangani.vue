<template>
  <div id="ditanganiPage">
    <div v-for="(section, index) in sections" :key="index">
      <!-- BannerTop -->
      <div v-for="(item, index) in section.bannerTop" :key="index">
        <Bannertop :judul="item.judul" :desc="item.teks" :image="item.image" left="left">
          <v-btn rounded outlined color="primary" class="elevation-0 mx-2">Register</v-btn>
          <v-btn rounded color="primary" class="elevation-0 mx-2">Login</v-btn>
        </Bannertop>
      </div>
      <!-- section  -->
      <ContainerWidu v-for="item in section.content" :key="item.judul" :style="item.bg">
        <v-row>
          <v-col cols="12" class="d-flex justify-space-around">
            <div>
              <Judul :subjudul="item.judul" />
              <p class="body-1">{{item.teks}}</p>
              <v-divider></v-divider>
            </div>
          </v-col>
          <v-col cols="12" class="d-flex justify-space-around">
            <div color="transparent" class="col-11 mt-n6">
              <v-expansion-panels hover>
                <v-expansion-panel v-for="(i, index) in item.list" :key="index">
                  <v-expansion-panel-header class="pt-0 pl-5 font-weight-bold">{{i.title}}</v-expansion-panel-header>
                  <v-expansion-panel-content class="pt-0 pa-5">{{i.desc}}</v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
          </v-col>
        </v-row>
      </ContainerWidu>
    </div>
  </div>
</template>

<script>
import Bannertop from "../components/base/BannerTop";
import ContainerWidu from "../components/base/ContainerWidu";
import Judul from "../components/base/Judul";

export default {
  name: "Ditangani",
  components: {
    Bannertop,
    Judul,
    ContainerWidu
  },
  data: () => ({
    sections: [
      {
        bannerTop: [
          {
            judul: "Penyakit Yang Kami Tangani",
            teks:
              "Kami berkomitmen untuk menawarkan kepada kamu dan keluarga kunjungan dokter terbaik. Daftarkan sekarang dan izinkan dokter-dokter kami membantu dengan lebih dari 200 penyakit baik yang ringan maupun yang berat, mulai dari pilek dan infeksi sinus hingga alergi dan banyak lagi.",
            image: require("@/assets/image/Group 1031.png")
          }
        ]
      },
      {
        content: [
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
              "Pendekatan kami adalah merawat dan memberi kamu dan keluarga sistem perawatan kesehatan yang fleksibel s aat dibutuhkan. Ketika kamu perlu mengelola kondisi kesehatan yang berkelanjutan atau kronis, Doctor Quincy membuatnya mudah hanya dengan satu sentuhan tombol.",
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
      }
    ]
  })
};
</script>