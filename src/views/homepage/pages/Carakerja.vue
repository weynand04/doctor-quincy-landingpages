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
      <div v-for="a in section1" :key="a">
        <CarakerjaBanner
        :judul1="a.judul1"
        :desc1="a.text1"
        :judul2="a.judul2"
        :desc2="a.text2"
        :image="a.img"
        left="left"
        >
      </CarakerjaBanner>
    </div>
    <!--  -->
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
              transition="scale-transition"
              />
            </v-col>
            <v-col cols="4" md="2">
              <p class="font-weight-bold black--text">Medis</p>
              <div class="list__widu">
                <ul class="body-1">
                  <li class="mx-1" v-for="x in key1" v-bind:key="x">{{x}}</li>
                </ul>
              </div>
            </v-col>
            <v-col cols="4" md="2">
              <p class="font-weight-bold black--text">Dermatologi</p>
              <div class="list__widu">
                <ul class="body-1">
                 <li class="mx-1" v-for="x in key2" v-bind:key="x">{{x}}</li>
               </ul>
             </div>
           </v-col>
           <v-col cols="4" md="2">
            <p class="font-weight-bold black--text">Perikalu & Jiwa</p>
            <div class="list__widu">
              <ul class="body-1">
                <li class="mx-1" v-for="x in key3" v-bind:key="x">{{x}}</li>
              </ul>
            </div>
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
          transition="scale-transition"
          contain
          ></v-img>
          <v-img
          src="@/assets/image/download-on-the-app-store-apple.svg"
          position="center"
          max-height="50"
          max-width="199"
          aspect-ratio="1.7"
          transition="scale-transition"
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
import CarakerjaBanner from "../components/base/CarakerjaBanner";

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
    section1: [
    {
      judul1: "Daftar Sekarang",
      judul2: "Login Sekarang",
      text1: "Bergabunglah dengan jutaan orang yang telahterdaftar sebagai anggota kami untuk akses ke kunjungan dokter langsung dengan menggunakan smartphone, tablet atau laptop atau komputer mereka.",
      text2: "Jika kamu sudah menjadi anggota maka kamu tahu pasti bahwa seorang dokter siap untuk mengunjungi kamu dalam hitungan menit setelah permintaan dan mendapatkan resep obat ke apotek jika diperlukan secara medis.",
      img: require("@/assets/image/Mask Group 5.png"),
    }
    ],
    key1: [
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
    ],
    key2: [
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
    ],
    key3: [
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
    ],
  }),
  components: {
    CardWidu,
    CarakerjaBanner
  }
};
</script>