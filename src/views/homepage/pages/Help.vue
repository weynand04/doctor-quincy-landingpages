<template>
  <div id="help" tag="section">
    <template v-for="(section, index) in sections">
      <ContainerWidu :key="index">
        <v-row
          v-for="(item, index) in section.bannerTop"
          :key="index"
          no-gutters
          class="pl-sm-6 pl-md-2 pl-lg-3"
        >
          <v-col cols="12" md="4" sm="4" lg="4" xl="4" align-self="center">
            <subjudul :judul="item.judul" />
            <p>{{item.teks}}</p>
            <v-btn rounded color="primary" class="elevation-0">Login</v-btn>
            <v-btn rounded outlined color="primary">Register</v-btn>
          </v-col>
          <v-col cols="12" md="8" sm="8" lg="8" xl="8" class="mt-5">
            <v-img
              :src="item.gambar"
              max-height="706"
              max-width="662"
              aspect-ratio="1.6"
              position="center right 20%"
              contain
            />
          </v-col>
        </v-row>
      </ContainerWidu>

      <!-- Component banner bottom -->
    </template>
    <Bannerbot />
  </div>
</template>

<script>
import Bannerbot from "../components/base/BannerBot";
import Subjudul from "../components/base/Judul";
import ContainerWidu from "../components/base/ContainerWidu";

export default {
  name: "Help",
  components: {
    ContainerWidu,
    Subjudul,
    Bannerbot
  },
  data: () => ({
    sections: [
      {
        bannerTop: [
          {
            judul: "Lorem ipsum dolor sit.",
            teks:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quas quasi cupiditate id? Animi ducimus laborum neque id expedita, possimus tempore, hic nam inventore enim itaque consequatur corrupti commodi quisquam!",
            gambar: require("@/assets/image/Group 1031.png")
          }
        ]
      },
      {
        contentSatu: [
          {
            subjudul: "Stok Card Widu",
            cards: [
              {
                title: "Berpengalaman",
                text:
                  "Pengalaman sangat penting bagi kami. Penyedia kami memiliki pengalaman yang sudah bertahun-tahun. Karena perawatan kesehatan yang berkualitas mulai dengan dokter yang berkualitas.",
                image: require("@/assets/image/Image 19.png")
              },
              {
                title: "Berlisensi dan Bersertifikat",
                text:
                  "Penyedia kami bersertifikat IDI, mereka adalah praktisi berlisensi Negara dan telah memenuhi persyaratan. Dokter kami terus mengukur kompetensi praktek dokter di setiap spesialisasinya.",
                image: require("@/assets/image/Mask Group 9.png")
              },
              {
                title: "Perlindungan & Keamanan",
                text:
                  "Informasi pribadi dan riwayat kesehatan kamu dilindungi dengan aman. Semua pertemuan diarsipkan secara digital dengan tingkat keamanan tertinggi dan hanya dapat diakses oleh kamu dan dokter-nya.",
                image: require("@/assets/image/Mask Group 6.png")
              }
            ]
          }
        ]
      }
    ]
  })
};
</script>