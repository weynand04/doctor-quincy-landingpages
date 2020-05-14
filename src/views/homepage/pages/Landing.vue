<template>
  <v-container fluid>
    <!-- section #1 -->
    <v-row class="d-flex mt-5 mb-n12">
      <v-col cols="12" md="4">
        <v-card flat class="pl-12 ml-8">
          <v-card-title
            class="title1__widu font-weight-bold black--text text-break"
          >Web Solutions Designed for our Doctors</v-card-title>
          <v-card-subtitle class="subtitle__widu font-weight-medium pt-3">Be Our Partner</v-card-subtitle>
          <v-card-actions>
            <v-btn
              rounded
              to="/pages/register"
              class="font-weight-bold elevation-1"
              color="#F8B218"
            >PARTNER</v-btn>
            <v-btn
              rounded
              flat
              to="/pages/register"
              class="font-weight-bold elevation-1"
              color="#F8B218"
            >MEMBER</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="8">
        <v-img src="@/assets/image/artwork-01.png" max-width="1106px" max-height="734px" contain></v-img>
      </v-col>
    </v-row>

    <!-- section #2 -->
    <v-row>
      <v-col md="6">
        <v-card flat color="transparent">
          <v-img
            src="@/assets/image/artwork-02-cp.png"
            style="margin-left: 80px"
            max-width="649px"
            max-height="461px"
            contain
          ></v-img>
        </v-card>
      </v-col>
      <v-col md="6" align-self="center">
        <v-card flat color="transparent">
          <v-card-title class="title__widu font-weight-bold orange--text darken-3">Apa Itu Dr.Quincy</v-card-title>
          <v-card-subtitle class="subtitle2__widu">The Envolving Benefits Of Telemedicine</v-card-subtitle>
          <v-card-actions class="d-flex align-content-start">
            <v-img
              src="@/assets/image/google-play-badge.svg"
              position="left"
              max-height="50"
              max-width="199"
              aspect-ratio="1.7"
              contain
            ></v-img>
            <v-img
              src="@/assets/image/download-on-the-app-store-apple.svg"
              position="left center"
              max-height="50"
              max-width="199"
              aspect-ratio="1.7"
              contain
            ></v-img>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- section #3 -->
    <v-row id="section_3">
      <v-col sm="12" class="d-flex justify-space-around">
        <v-card class="col-10" color="transparent" flat>
          <v-card-title
            class="title__widu font-weight-bold orange--text text-break"
          >Kamu Akan Jauh Merasa Lebih Baik Dengan Dokter Quincy</v-card-title>
          <v-card-text class="text__widu font-weight-light">
            <iframe
              width="340"
              height="185"
              src="https://www.youtube.com/embed/pZHiIGFLN8Y"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              class="float-left mb-1 mr-4"
            ></iframe>
            <!-- <v-img
              src="@/assets/image/Image 1.png"
              max-height="185px"
              max-width="495px"
              class="float-left mb-3"
            />-->
            <p v-for="n in dt_sec3" :key="n.text">{{n.text}}</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" align="center" class="mt-n12">
        <v-card flat color="transparent" width="50%">
          <v-card-text>
            <p
              class="text__widu font-weight-bold red--text"
            >Dokter Quincy Juga Menawarkan Program “CrystalCare” Generasi-Baru Perawatan Kesehatan Primer Untuk Pegawai Pengusahaan & Pegawai Negeri</p>
            <p>
              <a
                class="text__widu blue--text"
                href="http://"
                target="_blank"
              >Klik disini untuk detail lebih lanjut</a>
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Section #4 -->
    <v-row>
      <v-col cols="12" style="background-color:#F8F8F8;" class="d-flex justify-space-around">
        <p
          class="text__widu text-center col-6"
        >Bukankah Sudah Saatnya Kamu Benar-Benar Mulai Memikirkan Kembali Cara Kamu Menerima Perawatan Kesehatan?</p>
      </v-col>
      <v-col cols="12" style="background-color:#6B6B6B" class="d-flex justify-space-around">
        <p
          class="text__widu text-center white--text col-8"
        >Pendekatan kami terhadap perawatan kesehatan adalah membuatnya mudah dan bebas repot untuk semua orang,meruntuhkan penghalang birokrasi dengan mendukung kesehatan kamu dimanapun kamu berada. Dokter dan psikolog berlisensi kami tersedia 24 jam setiap hari.</p>
      </v-col>
    </v-row>

    <!-- Section #5 -->
    <v-row>
      <v-img
        src="@/assets/image/Mask Group 9.png"
        aspect-ratio="2.4"
        position="top center"
        gradient="to top right, rgba(248, 178, 24, 0.7), rgba(248, 178, 24, 0.7)"
      >
        <v-col class="d-flex justify-center">
          <v-card v-for="(n, i) in dt_sec5" :key="i" width="350" class="mr-10">
            <v-card-title class="title__widu orange--text darken-3 text-left text-break">{{n.title}}</v-card-title>
            <v-card-text class="text__widu font-weight-light">{{n.text}}</v-card-text>
          </v-card>
        </v-col>
      </v-img>
    </v-row>

    <!-- section #6 -->
    <v-row class="d-flex justify-center">
      <v-col cols="12" md="6">
        <v-img
          src="@/assets/image/gambar lain-01.png"
          style="margin-left: 85px"
          max-height="601"
          max-width="566"
          contain
        />
      </v-col>
      <v-col cols="12" md="6" align-self="center">
        <v-card flat width="450">
          <v-card-text class="text__widu font-weight-ligh">
            <p v-for="n in dt_sec6" :key="n.text">{{n.text}}</p>
            <p
              class="red--text font-weight-bold"
            >Kendalikan Kesehatan Kamu Hari Ini Juga! Bergabunglah Dengan Jutaan Orang Yang Memiliki Akses Dokter Quincy 24 Jam Sehari, 365 Hari Setahun</p>
            <p class="blue--text">Sekarang Giliran Kamu!</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col style="background-color:#F8F8F8;" cols="12" class="d-flex justify-space-around">
        <v-card flat color="transparent" width="70%">
          <v-card-text class="text-center text__widu font-weight-ligh">
            <p
              class="text__widu"
            >Gunakan Dokter Quincy Saat Bepergian Dengan Aplikasi Seluler Kami Unduh Sekarang Aplikasi Gratis Kami Dapatkan Akses Perawatan Medis Kapan Saja Di Smartphone Kamu</p>
            <p
              class="text__widu red--text"
            >Dokter Quincy Dirancang Untuk Menjadi Teman Medis Online-mu</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Section #7 -->
    <v-row>
      <v-col cols="12" class="d-flex justify-space-around">
        <v-card width="80%" flat>
          <v-card-title
            class="title__widu orange--text darken-3 text-left text-break"
          >Layanan Kesehatan Harusnya Sederhana, Cepat Dan Tidak Rumit Temukan Sendiri Mengapa Begitu Banyak Orang Menyukai Doctor Quincy</v-card-title>
          <v-card-text class="text__widu font-weight-ligh">
            <p v-for="n in dt_sec7" :key="n.text">{{n.text}}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    dt_sec3: [
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
      },
      {
        text:
          "Mengatasi faktor sosial yang paling mendesak berkontribusi pada kesehatan masyarakat. Di Doctor Quincy, misi kami memanggil kami untuk menjadi agen perubahan radikal dalam hal kesehatan. Kami akan menjadi sumber cinta penyembuhan dan mercusuar harapan … untuk negara, dan untuk setiap komunitas yang kami layani, dan untuk setiap orang yang kami temui - terutama mereka yang paling rentan dalam masyarakat kami karena kondisi sosial. Untuk melakukan ini, kami membuat poros penting dari perawatan kesehatan, untuk mendukung kondisi masyarakat demi kesehatan dan kesejahteraan yang optimal. Untuk menjalani komitmen kami untuk menjadi mitra dalam bidang kesehatan, kami harus melakukan sesuatu yang berbeda. Layanan kesehatan tradisional pada umumnya hanya berfokus pada rumah sakit dan klinik yang secara geografis berlabuh dengan semua titik sentuh perawatan pasien di sekitar rumah sakit. Tetapi fokus kami lebih pada mendukung orang-orang sakit dengan serangkaian perawatan kesehatan, program, intervensi, dan layanan berbasis masyarakat. Kami bermitra dengan dokter-dokter lokal di seluruh negeri, memungkinkan kami untuk memasang jaring yang lebih luas dan lebih dalam. Meningkatkan kesehatan masyarakat kita adalah hal mendasar dan komitmen yang mengakar kuat pada warisan dan tujuan kami. Misi kami memanggil kami untuk tabah dalam melayani semua dengan perhatian yang sama. Keyakinan inti ini mendorong program yang kami bangun, investasi yang kami buat, dan strategi yang kami terapkan."
      }
    ],
    dt_sec5: [
      {
        title:
          "Perawatan Kesehatan Yang Berkualitas Dimulai Dengan Dokter Yang Berkualitas",
        text:
          "Kami menjamin kesehatan kamu dari A hingga Z dan Dokter Quincy disini untuk mendukung kesejahteraan kamu seiring waktu. Dari dokter hingga psikolog, kami membantu mendukung perjalanan kesehatan kamu. Tim dokter kami yang penuh kasih dan tepercaya berasal dari berbagai latar belakang dan spesialisasi. Mereka akan menciptakan jenis hubungan baru dengan kamu dengan meluangkan waktu untuk mendengarkan dan memperhatikan detail masalah kesehatan kamu. Dokter kami sedang merevolusi akses layanan kesehatan yang berkualitas. Mereka dilatih secara profesional untuk menggunakan teknologi virtual untuk menangani banyak kondisi non-darurat. Tim ahli medis kami adalah para dokter dengan pengalaman bertahun-tahun."
      },
      {
        title: "Biaya Terjangkau Dan Transparan",
        text:
          "Layanan Doctor Quincy tersedia secara nasional dan internasional, dengan atau tanpa asuransi. Gratis untuk bergabung, dan biaya dokter kunjungan kamu selalu ditampilkan di muka sehingga kamu tahu berapa biayanya, tanpa tagihan kejutan nanti. Kami bekerja dengan asuransi lainnya termasuk BPJS, pegawai pengusahaan dan pegawai negeri. Doctor Quincy menawarkan akses kesehatan yang terjangkau, transparan, lebih mudah dan tidak merepotkan untuk semua orang. Kami baru saja memulai perjalanan merevolusi layanan kesehatan di Indonesia dan menjadikannya lebih mudah diakses oleh orang-orang di mana saja. Inovasi kesehatan digital mengubah hidup kita menjadi lebih baik dan inovatif, solusi kesehatan generasi baru ini akan membantu memecahkan banyak tantangan dalam perawatan kesehatan primer dan mengatasi kebutuhan pasien, dokter, dan masih banyak lagi."
      }
    ],
    dt_sec6: [
      {
        text:
          "Dokter Quincy memberikan layanan langsung kepada konsumen, puluhan juta orang Indonesia akan menikmati kunjungan kesehatan medis termasuk layanan kesehatan jiwa, perawatan pencegahan, perawatan kronis, perawatan darurat, dan kesehatan perilaku."
      },
      {
        text:
          "Misi Doctor Quincy adalah meningkatkan kesehatan masyarakat melalui perawatan dan inovasi yang penuh kasih. Untuk mengakses Doctor Quincy, kamu dapat mengunduh aplikasi kami secara gratis di (iTunes atau Google Play)."
      },
      {
        text:
          "Dokter Quincy secara langsung sedang mengubah kehidupan lebih dari 100 juta jiwa orang dengan akses melalui layanan kesehatan berkualitas tanpa harus meninggalkan rumah mereka."
      }
    ],
    dt_sec7: [
      {
        text:
          "Layanan kesehatan medis yang tersedia melalui Doctor Quincy disediakan oleh dokter-dokter dan terapis berlisensi yang berpraktik dalam kelompok praktik profesional yang dimiliki secara independen dan secara kolektif dikenal sebagai “Doctor Quincy” – ini adalah dokter-dokter profesional sesuai permintaan pasien. Praktik profesional ini menyediakan layanan melalui platform Doctor Quincy. PT. Prima Shakti Multi Global, tidak dengan sendirinya menyediakan layanan dokter, kesehatan mental, atau penyedia layanan kesehatan lainnya, melainkan melalui tim profesional dokter ini kepada pasien di seluruh Indonesia. Kapan Dan Dimana Saja Mereka Membutuhkannya."
      },
      {
        text:
          "Doctor Quincy di bawah PT. Prima Shakti Multi Global, adalah layanan kesehatan online untuk perawatan, perawatan dokter di rumah, perawat, terapis dan fisioterapi di Indonesia. Dokter, perawat, terapis dan fisioterapi di Doctor Quincy adalah ahli dalam bidang mereka dan memiliki lisensi bersertifikat, jangkauan luas di kota-kota di seluruh Indonesia dan siap 24 jam. Pelanggan Doctor Quincy dapat memilih layanan yang sesuai dengan anggaran dan kebutuhan mereka."
      }
    ]
  }),
  props: []
};
</script>
