
<template>
  <div>
    <v-banner
      style="width: 100%; height: 50px; background-color: #f8b218; position: -webkit-sticky; position: sticky; top: 56px; z-index: 1;"
    >Selamat datang di sumber daya 24 / 7 untuk perawatan kesehatan yang mudah dan nyaman</v-banner>
    <v-container fluid>
      <!-- 1 -->
      <v-row>
        <v-col cols="12">
          <v-img
            src="@/assets/image/Mask Group 5.png"
            max-height="500"
            contain
            position="right bottom"
          >
            <v-row class="ml-10 pl-10">
              <v-col cols="12" md="4">
                <v-card flat color="transparent">
                  <v-card-title
                    class="title1__widu font-weight-bold black--text text-break"
                  >Daftar Sekarang</v-card-title>
                  <v-card-subtitle
                    class="text__widu font-weight-medium pt-1"
                  >Bergabunglah dengan jutaan orang yang telahterdaftar sebagai anggota kami untuk akses ke kunjungan dokter langsung dengan menggunakan smartphone, tablet atau laptop atau komputer mereka.</v-card-subtitle>
                  <v-card-actions>
                    <v-btn rounded color="primary" class="elevation-0">Register</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col cols="12" md="4">
                <v-card flat color="transparent">
                  <v-card-title
                    class="title1__widu font-weight-bold black--text text-break"
                  >Login Sekarang</v-card-title>
                  <v-card-subtitle
                    class="text__widu font-weight-medium pt-1"
                  >Jika kamu sudah menjadi anggota maka kamu tahu pasti bahwa seorang dokter siap untuk mengunjungi kamu dalam hitungan menit setelah permintaan dan mendapatkan resep obat ke apotek jika diperlukan secara medis.</v-card-subtitle>
                  <v-card-actions>
                    <v-btn rounded outlined color="primary">Member</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-img>
        </v-col>
      </v-row>

      <!-- 2 -->
      <v-row class="justify-space-around">
        <v-col cols="10">
          <p class="display-1 font-weight-text orange--text darken-3">Daftar Sekarang</p>
          <p>Kamu tidak bisa membuat rencana saat kamu jatuh sakit, akan tetapi kamu dapat memiliki Dokter Quincy setiap saat, dan mendapatkan layanan kesehatan yang kamu butuhkan di manapun saja kamu berada.</p>
        </v-col>
        <v-col cols="10">
          <v-row>
            <v-col cols="12" class="d-flex justify-space-around">
              <CardWidu v-for="(n, i) in langka_kerja" :key="i" v-bind:dataCard="n" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <!-- 3 -->
      <v-row no-gutters class="justify-space-around">
        <v-col cols="10">
          <p
            class="display-1 font-weight-text orange--text darken-3"
          >Para Dokter-Dokter Kami Di Sini Siap Untuk Membantu</p>
          <p>Kami berkomitmen untuk menawarkan kepada kamu dan keluarga kunjungan dokter terbaik. Daftarkan sekarang dan izinkan dokter-dokter kami membantu dengan lebih dari 200 penyakit baik yang ringan maupun yang berat, mulai dari pilek dan infeksi sinus hingga alergi dan banyak lagi.</p>
        </v-col>
        <v-col cols="10" class="d-flex my-0 py-0 elevation-2">
          <v-card flat class="col-4">
            <v-img
              class="ml-n12 pl-n12"
              src="@/assets/image/Mask Group 11.png"
              aspect-ratio="1.2"
              width="497px"
              height="350px"
              contain
            />
          </v-card>
          <v-card flat class="col-8 d-flex">
            <v-card flat>
              <v-card-text class="list__widu body-1 font-weight black--text">
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
                  <!-- Pilek Alergi Sembelit Batuk Diare Demam Asma Gigi Sakit kepala Muntah Mata Merah Muda Sakit tenggorokan Dll -->
                </ul>
              </v-card-text>
            </v-card>
            <v-card flat>
              <v-card-text class="list__widu body-1 font-weight black--text">
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
              </v-card-text>
            </v-card>
            <v-card flat>
              <v-card-text class="list__widu body-1 font-weight black--text">
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
                  <!-- Jerawat Ruam Bintik-bintik Eksim Kutil Rosacea Psorias Folikel rambut Gigitan serangga Luka dingin Luka kulit Selulitis DLL -->
                </ul>
              </v-card-text>
            </v-card>
          </v-card>
        </v-col>
      </v-row>

      <!-- 4 -->
      <v-row class="mt-1" no-gutters>
        <v-col md="4" sm="12" align-self="rigth" class="justify-spcace-around"></v-col>
        <v-col cols="12" md="6">
          <v-card flat color="transparent">
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
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CardWidu from "../components/CardWidu";

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