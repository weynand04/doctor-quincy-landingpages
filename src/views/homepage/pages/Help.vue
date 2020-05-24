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
      <ContainerWidu v-for="(item, index) in section.bannerbawah" :key="index" class="bg-img">
        <Subjudul :subjudul="item.subjudul" />
        <template v-for="(data, index) in item.teks">
          <p :key="index">{{data.p}}</p>
        </template>
      </ContainerWidu>
    </template>
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
    linear-gradient(
      top right,
      rgba(230, 172, 47, 0.178),
      rgba(216, 160, 40, 0.301)
    );
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 20%;
}
</style>