<template>
  <v-container fluid>
    <v-row dense align="stretch" class="d-flex">
      <v-col md="4" sm="12">
        <v-card flat class="pl-12 ml-8">
          <v-card-title
            class="display-1 font-weight-bold black--text text-break"
          >Web Solutions Designed for our Doctors</v-card-title>
          <v-card-subtitle class="title font-weight-regular pt-3">Be Our Patner</v-card-subtitle>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn rounded color="#F8B218">PARTNER</v-btn>
            <v-btn rounded outlined color="#F8B218">MEMBER</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col md="8" sm="12">
        <v-img
          src="@/assets/image/undraw_doctors_hwty.svg"
          aspect-ratio="1.6"
          contain
          position="center"
        ></v-img>
      </v-col>
    </v-row>

    <v-row class="d-flex" style="background-color:#FCFCFC;">
      <v-col md="6" sm="12" align-self="center">
        <v-card flat color="transparent">
          <v-img
            src="@/assets/image/undraw_mobile_development_8gyo.svg"
            position="center"
            contain
            aspect-ratio="2"
          ></v-img>
        </v-card>
      </v-col>
      <v-col md="6" sm="12" align-self="center">
        <v-card flat color="transparent">
          <v-card-title class="font-weight-black orange--text darken-3">Apa Itu Dr.Quincy</v-card-title>
          <v-card-subtitle>The Envolving Benefits Of Telemedicine</v-card-subtitle>
          <v-card-text class="d-flex align-content-start">
            <v-img
              src="@/assets/image/google-play-badge.svg"
              position="left"
              max-height="40"
              max-width="199"
              aspect-ratio="1.7"
              contain
            ></v-img>
            <v-img
              src="@/assets/image/download-on-the-app-store-apple.svg"
              position="left"
              max-height="40"
              max-width="199"
              aspect-ratio="1.7"
              contain
            ></v-img>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="justify-space-around">
      <v-col md="12" sm="12"></v-col>
      <v-col md="4" sm="12" align-self="center" class="justify-spcace-around">
        <v-img src="@/assets/image/undraw_medical_research_qg4d.svg" aspect-ratio="2" contain />
      </v-col>
      <v-col md="8" sm="12" align-self="start">
        <v-card height="200" flat>
          <v-card-title
            class="font-weight-black orange--text darken-3"
          >Kamu Akan Jauh Merasa Lebih Baik Dengan Dokter Quincy</v-card-title>
          <v-window v-model="onboarding" reverse>
            <v-window-item v-for="n in length" :key="n.text">
              <v-card-text class="body-1 font-weight-light">{{n.text}}</v-card-text>
            </v-window-item>
          </v-window>
        </v-card>
        <v-divider></v-divider>
        <v-card-actions class="justify-center">
          <v-btn text @click="prev">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-item-group v-model="onboarding" class="text-center" mandatory>
            <v-item v-for="(n, i) in length" :key="`btn-${i}`" v-slot:default="{ active, toggle }">
              <v-btn :input-value="active" icon @click="toggle">
                <v-icon small>mdi-record</v-icon>
              </v-btn>
            </v-item>
          </v-item-group>
          <v-btn text @click="next">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-card-actions>
      </v-col>
      <v-col md="12" align="center">
        <v-card width="598" flat>
          <v-card-text>
            <p
              class="body-1 font-weight-bold red--text"
            >Dokter Quincy Juga Menawarkan Program “CrystalCare” Generasi-Baru Perawatan Kesehatan Primer Untuk Pegawai Pengusahaan & Pegawai Negeri</p>
            <p>
              <a
                class="blue--text"
                href="http://"
                target="_blank"
              >Klik disini untuk detail lebih lanjut</a>
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" style="background-color:#F8F8F8;" class="d-flex justify-space-around">
        <p
          class="text-center col-6"
        >Bukankah Sudah Saatnya Kamu Benar-Benar Mulai Memikirkan Kembali Cara Kamu Menerima Perawatan Kesehatan?</p>
      </v-col>
      <v-col cols="12" style="background-color:#6B6B6B" class="d-flex justify-space-around">
        <p
          class="text-center white--text col-8"
        >Pendekatan kami terhadap perawatan kesehatan adalah membuatnya mudah dan bebas repot untuk semua orang,meruntuhkan penghalang birokrasi dengan mendukung kesehatan kamu dimanapun kamu berada. Dokter dan psikolog berlisensi kami tersedia 24 jam setiap hari.</p>
      </v-col>
    </v-row>

    <v-row>
      <v-img src="@/assets/image/slider1.jpg" aspect-ratio="2.4" position="top">
        <v-col class="d-flex justify-space-around">
          <v-card width="350">
            <v-card-title
              class="font-weight-bold orange--text darken-3 text-left text-break"
            >Perawatan Kesehatan Yang Berkualitas Dimulai Dengan Dokter Yang Berkualitas</v-card-title>
            <v-card-text
              class="body-1 font-weight-light"
            >Kami menjamin kesehatan kamu dari A hingga Z dan Dokter Quincy disini untuk mendukung kesejahteraan kamu seiring waktu. Dari dokter hingga psikolog, kami membantu mendukung perjalanan kesehatan kamu. Tim dokter kami yang penuh kasih dan tepercaya berasal dari berbagai latar belakang dan spesialisasi. Mereka akan menciptakan jenis hubungan baru dengan kamu dengan meluangkan waktu untuk mendengarkan dan memperhatikan detail masalah kesehatan kamu. Dokter kami sedang merevolusi akses layanan kesehatan yang berkualitas. Mereka dilatih secara profesional untuk menggunakan teknologi virtual untuk menangani banyak kondisi non-darurat. Tim ahli medis kami adalah para dokter dengan pengalaman bertahun-tahun.</v-card-text>
          </v-card>
          <v-card width="350">
            <v-card-title
              class="font-weight-bold orange--text darken-3 text-left text-break"
            >Biaya Terjangkau Dan Transparan</v-card-title>
            <v-card-text
              class="body-1 font-weight-light"
            >Layanan Doctor Quincy tersedia secara nasional dan internasional, dengan atau tanpa asuransi. Gratis untuk bergabung, dan biaya dokter kunjungan kamu selalu ditampilkan di muka sehingga kamu tahu berapa biayanya, tanpa tagihan kejutan nanti. Kami bekerja dengan asuransi lainnya termasuk BPJS, pegawai pengusahaan dan pegawai negeri. Doctor Quincy menawarkan akses kesehatan yang terjangkau, transparan, lebih mudah dan tidak merepotkan untuk semua orang. Kami baru saja memulai perjalanan merevolusi layanan kesehatan di Indonesia dan menjadikannya lebih mudah diakses oleh orang-orang di mana saja. Inovasi kesehatan digital mengubah hidup kita menjadi lebih baik dan inovatif, solusi kesehatan generasi baru ini akan membantu memecahkan banyak tantangan dalam perawatan kesehatan primer dan mengatasi kebutuhan pasien, dokter, dan masih banyak lagi.</v-card-text>
          </v-card>
        </v-col>
      </v-img>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    length: [
      {
        text:
          "Sekarang kamu dapat memiliki dokter sesuai permintaan dengan mudah dan bebas repot mengunjungi kamu dalam hitungan menit sesuai kenyamanan kamu, hanya dengan menggunakan ponsel cerdas, tablet, atau laptop kamu 24 jam sehari."
      },
      {
        text:
          "Layanan kesehatan harusnya sederhana, cepat dan tidak rumit. Dokter Quincy memudahkan dokter mengunjungi kamu dalam beberapa menit melalui aplikasi seluler kami dan online."
      },
      {
        text:
          "Dapatkan akses ke layanan kesehatan berkualitas tanpa harus meninggalkan rumah, pekerjaan, atau dimanapun kamu berada. Betapa mudahnya menerima perawatan yang terjangkau dan berkualitas tanpa bepergian ke rumah sakit! Resep obat dapat dikirim langsung ke apotek jika diperlukan secara medis."
      }
    ],
    onboarding: 0
  }),

  methods: {
    next() {
      this.onboarding =
        this.onboarding + 1 === this.length ? 0 : this.onboarding + 1;
    },
    prev() {
      this.onboarding =
        this.onboarding - 1 < 0 ? this.length - 1 : this.onboarding - 1;
    }
  }
};
</script>
