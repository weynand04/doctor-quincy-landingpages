<template>
  <div id="eventPage">
    <div v-for="(section, index) in event" :key="index">
      <!-- banner -->
      <v-container fluid v-for="item in section.banner" :key="item.judul">
        <v-row class="pl-md-12">
          <v-col cols="12">
            <v-img
              :src="item.image"
              aspect-ratio="3.2"
              max-height="100%"
              max-width="100%"
              position="left center"
              contain
            >
              <div class="col-md-6 float-md-right">
                <v-card-title class="title1__widu font-weight-bold black--text text-break">
                  {{item.judul}}
                  <br />
                  {{item.judul1}}
                </v-card-title>
                <v-card-text>
                  <p v-for="(p, index) in item.teks" :key="index" :class="p.class">{{p.paragraf}}</p>
                </v-card-text>
              </div>
            </v-img>
          </v-col>
        </v-row>
      </v-container>

      <!-- contentSatu -->
      <v-container
        v-for="item in section.contentSatu"
        :key="item.judul"
        style="background-color:#ffff;"
        fluid
      >
        <v-row class="pl-md-9">
          <v-col cols="6" md="6">
            <v-img
              :src="item.image"
              min-height="200"
              min-width="300"
              max-height="600"
              max-width="500"
              contain
              position="center center"
              class="float-md-right"
            ></v-img>
          </v-col>
          <v-col cols="6" md="6" align-self="center">
            <h1
              class="title__widu font-weight-bold primary--text darken-3 text-break"
            >{{item.judul}}</h1>
            <p
              v-for="p in item.teks"
              :key="p.paragraf"
              class="text__widu font-weight-bold py-1"
            >{{p.paragraf}}</p>
            <v-row></v-row>
          </v-col>
        </v-row>
      </v-container>

      <!-- contentDua -->
      <v-container
        v-for="item in section.contentDua"
        :key="item.judul"
        style="background-color:#FCFCFC;"
        fluid
      >
        <v-row class="pl-md-12">
          <v-col cols="12">
            <h1 class="title__widu font-weight-bold primary--text text-break">{{item.judul}}</h1>
            <p
              v-for="p in item.teks"
              :key="p.paragraf"
              class="text__widu font-weight-bold py-1"
            >{{p.paragraf}}</p>
            <h1 class="title__widu font-weight-bold primary--text text-break">{{item.judul1}}</h1>
            <p
              v-for="p in item.teks"
              :key="p.paragraf1"
              class="text__widu font-weight-bold py-1"
            >{{p.paragraf1}}</p>
            <!-- icon  -->
            <v-row class="spacer" align="center" v-for="x in list1" :key="x.icon1">
              <v-col sm="1"></v-col>
              <!-- bagian kiri -->
              <v-col md="1" sm="2">
                <v-avatar size="80">
                  <!-- <v-icon dark>{{ x.icon1 }}</v-icon> -->
                  <img :src="x.icon1" />
                </v-avatar>
              </v-col>
              <v-col class="hidden-xs-only" sm="6" md="4">
                <strong>{{ x.text1 }}</strong>
              </v-col>
              <!-- bagian kanan -->
              <v-col md="1" sm="2">
                <v-avatar size="80">
                  <!-- <v-icon dark>{{ x.icon2 }}</v-icon> -->
                  <img :src="x.icon2" />
                </v-avatar>
              </v-col>
              <v-col class="hidden-xs-only" sm="6" md="4">
                <strong>{{ x.text2 }}</strong>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>

      <!-- contentTiga -->
      <v-container
        v-for="item in section.contentTiga"
        :key="item.judul"
        style="background-color:#ffff;"
        fluid
      >
        <v-row class="pl-md-9">
          <v-col align-self="center">
            <h1
              class="title__widu font-weight-bold primary--text darken-3 text-break"
            >{{item.judul}}</h1>
            <p
              v-for="p in item.teks"
              :key="p.paragraf"
              class="text__widu font-weight-bold text-break"
            >{{p.paragraf}}</p>
            <v-card-title
              class="title__widu font-weight-bold orange--text"
            >Membangun Kepercayaan Layanan Kesehatan Di Setiap Komunitas</v-card-title>
            <p
              v-for="p in item.teks"
              :key="p.paragraf2"
              class="text__widu font-weight-bold"
            >{{p.paragraf2}}</p>
          </v-col>
        </v-row>
      </v-container>

      <!-- contentEmpat -->
      <v-row no-gutters>
        <v-container
          style="background:#F8F8F8"
          class="d-inline col-md-16"
          v-for="item in section.contentEmpat"
          :key="item.judul"
          fluid
        >
          <v-img
            src="@/assets/image/svg/gambar lain-12.svg"
            max-height="350"
            max-width="500"
            min-width="500"
            min-height="150"
            contain
            position="center center"
            class="float-md-left"
          />

          <v-container class="pl-md-12">
            <v-card-title
              class="title__widu font-weight-bold orange--text text-break"
            >Bergabunglah Dengan Kami Untuk Memperluas Perusahaan Anda Lebih Jauh</v-card-title>
            <v-card-text class="list__widu">
              <ul>
                <li
                  class="text__widu font-weight-medium"
                  v-for="x in list2"
                  :key="x.text"
                >{{ x.text }}</li>
              </ul>
            </v-card-text>
          </v-container>
        </v-container>
      </v-row>

      <!-- contentEmpat -->
      <v-row style="background: #FFFF" v-for="item in section.contentEmpat" :key="item.Image" fluid>
        <v-img class="pl-md-10 ml-md-7" width="25%" :src="item.image1" aspect-ratio="1.5" contain />
        <br />
        <v-img class="pl-md-10 ml-md-7" width="25%" :src="item.image2" aspect-ratio="1.5" contain />
        <br />
        <v-img class="pl-md-10 ml-md-7" width="25%" :src="item.image3" aspect-ratio="1.5" contain />
        <v-col cols="12" ml="6" class="d-flex justify-space-around">
          <v-card-actions>
            <v-btn rounded class="elevation-0" color="primary">Patner</v-btn>
            <v-btn rounded outlined color="primary">Investor</v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </div>
    <!-- Bannerbot -->
    <Bannerbot />
  </div>
</template>

<script>
import Bannerbot from "../components/base/BannerBot";

export default {
  name: "event",
  components: {
    Bannerbot
  },
  data: () => ({
    list1: [
      {
        icon1: require("@/assets/image/Group2684.png"),
        text1:
          "Meningkatkan pelayanan kesehatan yang lebih baik dengan teknologi end-to-end untuk populasi berisiko.",
        icon2: require("@/assets/image/Group2689.png"),
        text2:
          "Perhatian medis yang baik dan kemampuan untuk mengoptimalkan jadwal antara dokter dan pasien."
      },
      {
        icon1: require("@/assets/image/Group2685.png"),
        text1:
          "Berfokus pada pasien dan mutu layanan kesehatan yang baik, ini adalah prinsip yang tidak dapat dinegosiasikan.",
        icon2: require("@/assets/image/Group2690.png"),
        text2:
          "Strategi pemasaran berkelanjutan untuk meningkatkan jangkauan layanan, bahkan ke daerah paling terpencil di seluruh negeri."
      },
      {
        icon1: require("@/assets/image/Group2693.png"),
        text1:
          "Sistem ini dirancang untuk mengurangi biaya perawatan kesehatan dan merestrukturisasi pelayanan kesehatan.",
        icon2: require("@/assets/image/Group2691.png"),
        text2:
          "Solusi Telehealth yang disesuaikan dan dapat diukur untuk semua organisasi besar atau kecil. Efisien dan tanpa khawatir."
      },
      {
        icon1: require("@/assets/image/Group2687.png"),
        text1:
          "Layanan kesehatan kapan saja dimana saja. Dapat mendorong peningkatan produktivitas. Mengurangi absensi kerja.",
        icon2: require("@/assets/image/Group2692.png"),
        text2:
          "Platform kami membantu mempromosikan dan meningkatkan kesadaran merek mitra dan investor kami, serta loyalitas pelanggan."
      },
      {
        icon1: require("@/assets/image/Group2688.png"),
        text1:
          "Kunjungan dokter mengurangi biaya 'ER'. Perawatan sesuai permintaan, mudah diakses kapan saja, dimana saja.",
        icon2: require("@/assets/image/Group2693.png"),
        text2:
          "Platform kami menciptakan dan memberikan pertumbuhan ekonomi baru untuk mitra bisnis dan investor kami."
      }
    ],
    list2: [
      {
        text: "Periksa apa yang kamu makan dan minum"
      },
      {
        text: "Periksa tekanan darah, suhu, detak jantung, dan pernapasan kamu"
      },
      {
        text:
          "Periksa apakah kamu menggunakan resep dan obat-obatan serta perawatan lainnya dengan baik"
      },
      {
        text: "Tanyakan apakah kamu merasa sakit dan lain-lainnya"
      },
      {
        text: "Periksa keamanan kamu di rumah"
      },
      {
        text:
          "Ajari kamu tentang perawatan yang ada sehingga kamu bisa menjaga diri sendiri"
      },
      {
        text:
          "Koordinasikan perawatan kamuSelalu komunikasi dengan kamu dan dokter kamu secara teratur"
      }
    ],
    event: [
      {
        banner: [
          {
            judul: "Kalender Event",
            judul1: "Kesehatan Doctor Quincy",
            image: require("@/assets/image/Group 2683.png"),
            teks: [
              {
                class: "body-1 font-weight-medium",
                paragraf:
                  "Informasi lengkap kalender kesehatan Doctor Quincy dan pemberdayaan masyarakat tentang hari kesehatan dalam format kalender"
              }
            ]
          }
        ]
      },
      {
        contentSatu: [
          {
            judul: "Perawatan Yang Tepat Pada Waktu Yang Tepat",
            image: require("@/assets/image/artwork-02-cp.png"),
            teks: [
              {
                paragraf:
                  "Teknologi dan strategi online Doctor Quincy memberikan solusi perawatan virtual yang komprehensif, langsung dan ujung-ke-ujung yang memungkinkan organisasi kami menciptakan strategi digital pintu depan digital yang holistik. Sistem ini dirancang untuk mengurangi biaya perawatan kesehatan pasien."
              },
              {
                paragraf:
                  "Kami membutuhkan Mitra dan Investor untuk bergabung dengan kami untuk mencapai tujuan ini sepenuhnya. Sistem ini juga dirancang untuk mempercepat pendapatan dan meningkatkan akses sambil menghilangkan hambatan antara pasien dengan memberikan perawatan kesehatan yang sangat baik dan berkelanjutan - Kapan Dan Dimana Saja Mereka Membutuhkannya."
              },
              {
                paragraf:
                  "Ada begitu banyak perusahaan besar di Indonesia dengan ribuan karyawan, pegawai negeri sipil, atau seluruh masyarakat pada umumnya - Doctor Quincy dapat mengurangi biaya perawatan kesehatan mereka secara keseluruhan. Kami percaya bahwa ketika karyawan selalu mengambil cuti karena sakit, itu jelas akan berdampak pada semua orang yang dilayani oleh  perusahaan itu. Dokter Quincy memperluas akses layanan kesehatan berkualitas tinggi dan terjangkau yang mudah dan nyaman digunakan."
              }
            ]
          }
        ]
      },
      {
        contentDua: [
          {
            judul: "Mengapa Bermitra Dengan Dokter Quincy ?",
            judul1: "Mengapa Berinvestasi Dengan Dokter Quincy ?",
            image: require("@/assets/image/Image 1.png"),
            teks: [
              {
                paragraf:
                  "Karena platform aman Doctor Quincy memastikan bahwa pasien kami akan memiliki akses langsung dan mudah ke salah satu jaringan penyedia telehealth satu-satunya dan terbesar di Indonesia melalui suara, video, dan perangkat seluler."
              },
              {
                paragraf1:
                  "Karena Dokter Quincy menyesuaikan paket investasi investor dengan solusi telehealth berkualitas, sesuai permintaan yang dirancang untuk bekerja bahu-membahu dengan program insentif kesehatan untuk mengurangi biaya perawatan kesehatan keseluruhan pasien dan membiarkan anggota kami mengambil kendali lebih besar atas kesehatan mereka. Hasilnya adalah anggota yang lebih sehat yang lebih produktif."
              }
            ]
          }
        ]
      },
      {
        contentTiga: [
          {
            judul: "",
            teks: [
              {
                class: "text__widu body-1 font-weight-medium",
                paragraf:
                  "Dokter Quincy bekerja bahu-membahu dengan pasien untuk mengembangkan solusi perawatan dan strategi kebutuhan kesehatan masing-masing pasien. Pengalaman telehealth yang komprehensif dan dapat disesuaikan untuk mengurangi biaya pengoperasian sambil meningkatkan efisiensi dan kualitas penyedia."
              },
              {
                class: "text__widu body-1 font-weight-medium",
                paragraf:
                  "Platform dan antarmuka kami yang mudah digunakan memberikan pengalaman yang luarbiasa dan hubungan yang erat antara pasien dan penyedia kami, meningkatkan koordinasi perawatan, mengurangi beban penyedia dan akses perawatan kesehatan yang lebih baik. Dengan menggabungkan pengetahuan kami di industri kesehatan ini dan kekuatan AI (artificial intelligence) yang terus berkembang, hasil akhirnya adalah komunitas yang lebih sehat dengan perawatan yang terkoordinasi dengan baik sehingga terjadi hubungan yang lebih kuat dengan mitra and investor kami."
              },
              {
                class: "text__widu body-1 font-weight-medium",
                paragraf2:
                  "Dokter Quincy bertujuan untuk melampaui cara tradisional pasien menerima perawatan medis. Kami terbuka untuk bermitra dengan organisasi lain besar atau kecil, perusahaan dan instansi pemerintahan, dan rumah sakit untuk membantu meningkatkan kualitas layanankesehatan, mengurangi kasus ruang gawat darurat yang seharunya tidak perlu, mengurangi dan mencegah perawatan yang lebih mahal dan berisiko."
              },
              {
                class: "text__widu body-1 font-weight-medium",
                paragraf2:
                  "Kami hadir untuk semua komunitas, baik dengan populasi besar maupun yang kecil, dan daerah pedesaan yang berisiko. Solusi seluruh perusahaan termasuk buruh pabrik dan pegawai negeri sipil. Meningkatkan dan memperluas layanan kesehatan yang lebih baik bagi semua orang, meningkatkan kepuasan pasien dan mengurangi biaya dan ketidakefisienan."
              }
            ]
          }
        ]
      },
      {
        contentEmpat: [
          {
            judul:
              "Bergabunglah Dengan Kami Untuk Memperluas Perusahaan Anda Lebih Jauh",
            image: require("@/assets/image/svg/gambar lain-12.svg"),
            image1: require("@/assets/image/Mask Group 19.png"),
            image2: require("@/assets/image/Mask Group 20.png"),
            image3: require("@/assets/image/Mask Group 21.png"),
            teks: [
              {
                class: "body-1 font-weight-medium",
                paragraf:
                  "Dokter Quincy bekerja bahu-membahu dengan pasien untuk mengembangkan solusi perawatan dan strategi kebutuhan kesehatan masing-masing pasien. Pengalaman telehealth yang komprehensif dan dapat disesuaikan untuk mengurangi biaya pengoperasian sambil meningkatkan efisiensi dan kualitas penyedia."
              },
              {
                class: "body-1 font-weight-medium",
                paragraf:
                  "Platform dan antarmuka kami yang mudah digunakan memberikan pengalaman yang luarbiasa dan hubungan yang erat antara pasien dan penyedia kami, meningkatkan koordinasi perawatan, mengurangi beban penyedia dan akses perawatan kesehatan yang lebih baik. Dengan menggabungkan pengetahuan kami di industri kesehatan ini dan kekuatan AI (artificial intelligence) yang terus berkembang, hasil akhirnya adalah komunitas yang lebih sehat dengan perawatan yang terkoordinasi dengan baik sehingga terjadi hubungan yang lebih kuat dengan mitra and investor kami."
              }
            ]
          }
        ]
      }
    ]
  })
};
</script>