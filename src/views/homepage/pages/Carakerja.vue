<style lang="scss" scoped>
.bannerWidu {
  width: 100%;
  height: 50px;
  background-color: #f8b218;
  position: -webkit-sticky;
  position: sticky;
  top: 50px;
  z-index: 1;
}
</style>
<template>
  <div id="carakerjaPage">
    <v-banner class="bannerWidu hidden-sm-and-down d-md-flex text-center mt-0 font-weight-bold">
      <v-container fluid>
        <div
          class="pl-md-8"
        >Selamat datang di sumber daya 24 / 7 untuk perawatan kesehatan yang mudah dan nyaman</div>
      </v-container>
    </v-banner>

    <v-container fluid>
      <!-- 1 -->
      <v-row class="pl-md-12">
        <v-img
          src="@/assets/image/Mask Group 5.png"
          max-height="500"
          contain
          position="right center"
        >
          <v-row class="d-flex align-content-center fill-height">
            <v-col cols="12" md="4">
              <div>
                <v-card-title
                  class="title1__widu font-weight-bold black--text text-break"
                >Daftar Sekarang</v-card-title>
                <v-spacer />
                <v-card-subtitle
                  class="text__widu font-weight-medium pt-1"
                >Bergabunglah dengan jutaan orang yang telahterdaftar sebagai anggota kami untuk akses ke kunjungan dokter langsung dengan menggunakan smartphone, tablet atau laptop atau komputer mereka.</v-card-subtitle>
                <v-card-actions>
                  <v-btn rounded color="primary" class="elevation-0">Register</v-btn>
                </v-card-actions>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <div>
                <v-card-title
                  class="title1__widu font-weight-bold black--text text-break"
                >Login Sekarang</v-card-title>
                <v-spacer />
                <v-card-subtitle
                  class="text__widu font-weight-medium pt-1"
                >Jika kamu sudah menjadi anggota maka kamu tahu pasti bahwa seorang dokter siap untuk mengunjungi kamu dalam hitungan menit setelah permintaan dan mendapatkan resep obat ke apotek jika diperlukan secara medis.</v-card-subtitle>
                <v-card-actions>
                  <v-btn rounded outlined color="primary">Member</v-btn>
                </v-card-actions>
              </div>
            </v-col>
          </v-row>
        </v-img>
      </v-row>

      <!-- 2 -->
      <v-container fluid>
        <v-row class="pl-md-8">
          <v-col cols="12">
            <p class="title__widu font-weight-text orange--text darken-3">Daftar Sekarang</p>
            <p>Kamu tidak bisa membuat rencana saat kamu jatuh sakit, akan tetapi kamu dapat memiliki Doctor Quincy setiap saat, dan mendapatkan layanan kesehatan yang kamu butuhkan di manapun saja kamu berada.</p>
          </v-col>
          <v-row>
            <CardWidu v-for="(n, i) in langka_kerja" :key="i" v-bind:dataCard="n" />
          </v-row>
        </v-row>
      </v-container>

      <!-- 3 -->
      <v-container fluid>
        <v-row no-gutters>
          <v-col cols="12" class="mb-4">
            <h1 class="orange--text">Para Dokter-Dokter Kami Di Sini Siap Untuk Membantu</h1>
            <p>Kami berkomitmen untuk menawarkan kepada kamu dan keluarga kunjungan dokter terbaik. Daftarkan sekarang dan izinkan dokter-dokter kami membantu dengan lebih dari 200 penyakit baik yang ringan maupun yang berat, mulai dari pilek dan infeksi sinus hingga alergi dan banyak lagi.</p>
          </v-col>
          <v-col class="mt-8">
            <v-row class="d-flex justify-center">
              <v-col cols="12" md="4">
                <v-img
                  src="@/assets/image/Mask Group 11.png"
                  aspect-ratio="1.2"
                  width="497px"
                  max-height="350px"
                  contain
                  class="ml-md-n8 mt-n8"
                  position="center center"
                />
              </v-col>
              <v-col cols="4" md="2">
                <p class="font-weight-bold black--text">Medis</p>
                <ul>
                  <li>Pilek</li>
                  <li>Alergi</li>
                  <li>Sembelit</li>
                  <li>Diare</li>
                  <li>Demam</li>
                  <li>Asma</li>
                  <li>Gigi</li>
                  <li>Sakit Kepala</li>
                  <li>Muntah</li>
                  <li>Mata Merah Mudah</li>
                  <li>Sakit Tenggorokan</li>
                  <li>DLL</li>
                </ul>
              </v-col>
              <v-col cols="4" md="2">
                <p class="font-weight-bold black--text">Dermatologi</p>
                <ul type="Disc">
                  <li>Jerawat</li>
                  <li>Ruam</li>
                  <li>Bintik-Bintik</li>
                  <li>Eksim</li>
                  <li>Kutil</li>
                  <li>Rosacea</li>
                  <li>Psorias</li>
                  <li>Folikel Rambut</li>
                  <li>Gigitan Serangga</li>
                  <li>Luka Dingin</li>
                  <li>Luka Kulit</li>
                  <li>Seluitis</li>
                  <li>DLL</li>
                </ul>
              </v-col>
              <v-col cols="4" md="2">
                <p class="font-weight-bold black--text">Perikalu & Jiwa</p>
                <ul>
                  <li>Kecanduan</li>
                  <li>Gangguan bipolar</li>
                  <li>Depresi</li>
                  <li>Stres</li>
                  <li>Gangguan Jiwa</li>
                  <li>Trauma & PTSD</li>
                  <li>Gangguan Makan</li>
                  <li>Hubungan</li>
                  <li>Gangguan panik</li>
                  <li>Duka dan Kehilangan</li>
                  <li>Dukungan LGBTQ</li>
                  <li>Kegelisahan</li>
                  <li>DLL</li>
                </ul>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>

      <!-- 4 -->
      <v-row class="mt-1" no-gutters>
        <v-col md="4" sm="12" class="justify-spcace-around"></v-col>
        <v-col cols="12" md="6">
          <div>
            <v-card-actions class="text-xs-center">
              <v-img
                src="@/assets/image/google-play-badge.svg"
                position="center"
                max-height="50"
                max-width="199"
                aspect-ratio="1.7"
                contain
              ></v-img>
              <v-img
                src="@/assets/image/download-on-the-app-store-apple.svg"
                position="center"
                max-height="50"
                max-width="199"
                aspect-ratio="1.7"
                contain
              ></v-img>
            </v-card-actions>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CardWidu from "../components/base/CardWidu";

export default {
  name: "Carakerja",
  data: () => ({
    langka_kerja: [
      {
        image: require("@/assets/image/Mask Group 6.png"),
        title: "Langkah 1",
        text:
          "Menyiapkan akun aman kamu hanya membutuhkan waktu sekitar 15 menit. Kemudian, kamu sudah siap untuk dikunjungi oleh dokter berdasarkan pada permintaan kamu. Jangan lupa mengunduh aplikasi gratis kami dan selalu siap di mana saja kapan saja."
      },
      {
        image: require("@/assets/image/Mask Group 9.png"),
        title: "Langkah 2",
        text:
          "Telusuri melalui jaringan dokter- dokter berkualifikasi kami dan pilih yang tepat untuk kamu. Kemudian buat permintaan dan tunggu dokter akan segera mengunjungi kamu atau boleh buat jadwal atau janji dengan dokter-nya untuk waktu yang sesuai buat kamu"
      },
      {
        image: require("@/assets/image/Mask Group 10.png"),
        title: "Langkah 3",
        text:
          "Bicaralah dengan dokter-nya tentang masalah kesehatan kamu. Dokter akan memeriksa kamu untuk cari tahu apa gejala atau penyakitnya. dokter akan merekomendasikan perawatan dan bahkan dapat memberikan resep obat ke apotek terdekat jika kamu memerlukannya"
      }
    ],
    list_bantuan: [
      {
        title: "Medis",
        data: [
          "Pilek",
          "Alergi",
          "Sembelit",
          "Diare",
          "Demam",
          "Asma",
          "Gigi",
          "Sakit Kepala",
          "Muntah",
          "Mata Merah Mudah",
          "Sakit Tenggorokan",
          "DLL"
        ]
      },
      {
        title: "Perikalu & Jiwa",
        data: [
          "Kecanduan",
          "Gangguan bipolar",
          "Depresi",
          "Stres",
          "Gangguan Jiwa",
          "Trauma & PTSD",
          "Gangguan Makan",
          "Hubungan",
          "Gangguan panik",
          "Duka dan Kehilangan",
          "Dukungan LGBTQ",
          "Kegelisahan",
          "DLL"
        ]
      },
      {
        title: "Dermatologi",
        data: [
          "Jerawat",
          "Ruam",
          "Bintik-Bintik",
          "Eksim",
          "Kutil",
          "Rosacea",
          "Psorias",
          "Folikel Rambut",
          "Gigitan Serangga",
          "Luka Dingin",
          "Luka Kulit",
          "Seluitis",
          "DLL"
        ]
      }
    ]
  }),
  components: {
    CardWidu
  }
};
</script>