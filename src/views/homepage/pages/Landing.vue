<template>
  <v-container id="homepage" tag="section" fluid>
    <v-row class="col-12 d-flex">
      <v-col md="4">
        <v-card color="transparent" flat>
          <v-card-title class="display-2 font-weight-medium black--text">
            Web Solutions
            <br />Designed for our
            <br />Doctors
          </v-card-title>
          <v-card-subtitle class="title font-weight-regular pt-3">Be Our Patner</v-card-subtitle>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn rounded color="#F8B218">PARTNER</v-btn>
            <v-btn rounded outlined color="#F8B218">MEMBER</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card color="transparent" flat>
          <v-img
            src="@/assets/image/undraw_doctors_hwty.svg"
            position="right 35% "
            contain
            aspect-ratio="1.7"
          ></v-img>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="col-12 d-flex" style="background-color:#FCFCFC;">
      <v-col md="6">
        <v-card flat color="transparent">
          <v-img
            src="@/assets/image/undraw_mobile_development_8gyo.svg"
            position="center"
            contain
            aspect-ratio="2"
          ></v-img>
        </v-card>
      </v-col>
      <v-col md="6">
        <v-card flat color="transparent">
          <v-card-title>Apa Itu Dr.Quincy</v-card-title>
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

    <v-row class="cols-12 d-flex">
      <v-col>
        <v-card flat>
          <v-card-title>Kamu Akan Jauh Merasa Lebih Baik Dengan Dokter Quincy</v-card-title>
          <v-card-text>
            <p>Sekarang kamu dapat memiliki dokter sesuai permintaan dengan mudah dan bebas repot mengunjungi kamu dalam hitungan menit sesuai kenyamanan kamu, hanya dengan menggunakan ponsel cerdas, tablet, atau laptop kamu 24 jam sehari.</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-img src="@/assets/image/component.png" aspect-ratio="2" contain></v-img>
    </v-row>

    <v-row style="background-color:#FCFCFC;">
      <v-col cols="12">
        <p
          class="text-center"
        >Bukankah Sudah Saatnya Kamu Benar-Benar Mulai Memikirkan Kembali Cara Kamu Menerima Perawatan Kesehatan?</p>
      </v-col>
      <v-col cols="12">
        <p
          class="text-center"
        >Pendekatan kami terhadap perawatan kesehatan adalah membuatnya mudah dan bebas repot untuk semua orang,meruntuhkan penghalang birokrasi dengan mendukung kesehatan kamu dimanapun kamu berada. Dokter dan psikolog berlisensi kami tersedia 24 jam setiap hari.</p>
      </v-col>
      <v-col md="12" sm="6" class="d-flex justify-space-around">
        <v-card flat>
          <v-card-title>Perawatan Kesehatan Yang Berkualitas Dimulai Dengan Dokter Yang Berkualitas</v-card-title>
          <v-card-text>Kami menjamin kesehatan kamu dari A hingga Z dan Dokter Quincy disini untuk mendukung kesejahteraan kamu seiring waktu. Dari dokter hingga psikolog, kami membantu mendukung perjalanan kesehatan kamu. Tim dokter kami yang penuh kasih dan tepercaya berasal dari berbagai latar belakang dan spesialisasi. Mereka akan menciptakan jenis hubungan baru dengan kamu dengan meluangkan waktu untuk mendengarkan dan memperhatikan detail masalah kesehatan kamu. Dokter kami sedang merevolusi akses layanan kesehatan yang berkualitas. Mereka dilatih secara profesional untuk menggunakan teknologi virtual untuk menangani banyak kondisi non-darurat. Tim ahli medis kami adalah para dokter dengan pengalaman bertahun-tahun.</v-card-text>
        </v-card>
        <v-card flat>
          <v-card-title>Biaya Terjangkau Dan Transparan</v-card-title>
          <v-card-text>Layanan Doctor Quincy tersedia secara nasional dan internasional, dengan atau tanpa asuransi. Gratis untuk bergabung, dan biaya dokter kunjungan kamu selalu ditampilkan di muka sehingga kamu tahu berapa biayanya, tanpa tagihan kejutan nanti. Kami bekerja dengan asuransi lainnya termasuk BPJS, pegawai pengusahaan dan pegawai negeri. Doctor Quincy menawarkan akses kesehatan yang terjangkau, transparan, lebih mudah dan tidak merepotkan untuk semua orang. Kami baru saja memulai perjalanan merevolusi layanan kesehatan di Indonesia dan menjadikannya lebih mudah diakses oleh orang-orang di mana saja. Inovasi kesehatan digital mengubah hidup kita menjadi lebih baik dan inovatif, solusi kesehatan generasi baru ini akan membantu memecahkan banyak tantangan dalam perawatan kesehatan primer dan mengatasi kebutuhan pasien, dokter, dan masih banyak lagi.</v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="col-12" style="background-color:#FCFCFC;">
      <v-col md="6">
        <v-card flat color="transparent">
          <v-img
            src="@/assets/image/undraw_sentiment_analysis_jp6w.svg"
            position="center"
            contain
            aspect-ratio="2"
          ></v-img>
        </v-card>
      </v-col>
      <v-col md="6">
        <v-card flat color="transparent">
          <v-card-text
            class="d-flex align-content-start"
          >Dokter Quincy memberikan layanan langsung kepada konsumen, puluhan juta orang Indonesia akan menikmati kunjungan kesehatan medis termasuk layanan kesehatan jiwa, perawatan pencegahan, perawatan kronis, perawatan darurat, dan kesehatan perilaku. Misi Doctor Quincy adalah meningkatkan kesehatan masyarakat melalui perawatan dan inovasi yang penuh kasih. Untuk mengakses Doctor Quincy, kamu dapat mengunduh aplikasi kami secara gratis di (iTunes atau Google Play). Dokter Quincy secara langsung sedang mengubah kehidupan lebih dari 100 juta jiwa orang dengan akses melalui layanan kesehatan berkualitas tanpa harus meninggalkan rumah mereka.</v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <p
          class="text-center"
        >Gunakan Dokter Quincy Saat Bepergian Dengan Aplikasi Seluler Kami Unduh Sekarang Aplikasi Gratis Kami Dapatkan Akses Perawatan Medis Kapan Saja Di Smartphone Kamu</p>
      </v-col>
      <v-col cols="12">
        <p class="text-center">Dokter Quincy Dirancang Untuk Menjadi Teman Medis Online-mu</p>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        cols="12"
      >Layanan Kesehatan Harusnya Sederhana, Cepat Dan Tidak Rumit Temukan Sendiri Mengapa Begitu Banyak Orang Menyukai Doctor Quincy</v-col>
      <v-col
        cols="12"
      >Layanan kesehatan medis yang tersedia melalui Doctor Quincy disediakan oleh dokter-dokter dan terapis berlisensi yang berpraktik dalam kelompok praktik profesional yang dimiliki secara independen dan secara kolektif dikenal sebagai “Doctor Quincy” – ini adalah dokter-dokter profesional sesuai permintaan pasien. Praktik profesional ini menyediakan layanan melalui platform Doctor Quincy. PT. Prima Shakti Multi Global, tidak dengan sendirinya menyediakan layanan dokter, kesehatan mental, atau penyedia layanan kesehatan lainnya, melainkan melalui tim profesional dokter ini kepada pasien di seluruh Indonesia. Kapan Dan Dimana Saja Mereka Membutuhkannya. Doctor Quincy di bawah PT. Prima Shakti Multi Global, adalah layanan kesehatan online untuk perawatan, perawatan dokter di rumah, perawat, terapis dan fisioterapi di Indonesia. Dokter, perawat, terapis dan fisioterapi di Doctor Quincy adalah ahli dalam bidang mereka dan memiliki lisensi bersertifikat, jangkauan luas di kota-kota di seluruh Indonesia dan siap 24 jam. Pelanggan Doctor Quincy dapat memilih layanan yang sesuai dengan anggaran dan kebutuhan mereka.</v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home"
};
</script>
