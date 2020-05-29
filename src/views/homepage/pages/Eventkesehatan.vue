<template>
  <div id="eventPage">
    <div v-for="(section, index) in event" :key="index">
      <!-- banner -->
      <ContainerWidu v-for="item in section.banner" :key="item.judul">
        <v-row>
          <v-col cols="12" md="6" align-self="center">
            <v-img :src="item.image" min-width="360" min-height="360" transition="scale-transition" contain></v-img>
          </v-col>
          <v-col cols="12" md="6" align-self="center">
            <Subjudul :judul="item.judul" />
            <p v-for="(p, index) in item.teks" :key="index" :class="p.class">{{p.paragraf}}</p>
          </v-col>
        </v-row>
      </ContainerWidu>

      <!-- contentSatu -->
      <ContainerWidu
        v-for="item in section.contentSatu"
        :key="item.judul"
        style="background-color:#ffff;"
        fluid
      >
        <v-img :src="item.image" max-height="280" max-width="600" transition="scale-transition" contain class="float-md-left"></v-img>
        <Subjudul :subjudul="item.judul" />
        <p v-for="p in item.teks" :key="p.paragraf" class="body-1 py-2">{{p.paragraf}}</p>
      </ContainerWidu>

      <!-- contentDua -->
      <ContainerWidu
        v-for="item in section.contentDua"
        :key="item.judul"
        style="background-color:#FCFCFC;"
        fluid
      >
        <v-row>
          <v-col cols="12">
            <Subjudul :subjudul="item.judul" />
            <p v-for="p in item.teks" :key="p.paragraf" class="body-1 py-1">{{p.paragraf}}</p>
            <Subjudul :subjudul="item.judul1" />
            <p v-for="p in item.teks" :key="p.paragraf1" class="body-1 py-1">{{p.paragraf1}}</p>
            <v-row v-for="x in list1" :key="x.icon1" class="justify-space-around">
              <v-col cols="12" md="5">
                <v-list-item>
                  <v-list-item-avatar size="80">
                    <v-img contain :src="x.icon1"></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="body-1 text-wrap" v-text="x.text1"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
              <v-col cols="12" md="5">
                <v-list-item>
                  <v-list-item-avatar size="80">
                    <v-img :src="x.icon2"></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="body-1 text-wrap" v-text="x.text2"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </ContainerWidu>

      <!-- contentTiga -->
      <ContainerWidu v-for="(item, index) in section.contentTiga" :key="index">
        <p v-for="p in item.teks" :key="p.paragraf" class="body-1 text-break">{{p.paragraf}}</p>
        <Subjudul subjudul="Membangun Kepercayaan Layanan Kesehatan Di Setiap Komunitas" />
        <p v-for="p in item.teks" :key="p.paragraf2" class="body-1">{{p.paragraf2}}</p>
      </ContainerWidu>

      <!-- contentEmpat -->
      <ContainerWidu
        style="background:#F8F8F8"
        v-for="item in section.contentEmpat"
        :key="item.judul"
      >
        <v-row>
          <v-col cols="12" md="6">
            <v-img
              src="@/assets/image/svg/gambar lain-12.svg"
              max-width="500"
              max-height="350"
              transition="scale-transition"
              contain
            />
          </v-col>
          <v-col cols="12" md="6">
            <Subjudul
              subjudul="Bergabunglah Dengan Kami Untuk Memperluas Perusahaan Anda Lebih Jauh"
            />
            <div class="list__widu">
              <ul>
                <li class="body-1 py-1" v-for="x in list2" :key="x.text">{{ x.text }}</li>
              </ul>
            </div>
          </v-col>
        </v-row>
      </ContainerWidu>

      <!-- contentEmpat -->
      <ContainerWidu
        style="background: #FFFF"
        v-for="item in section.contentEmpat"
        :key="item.Image"
      >
        <v-row>
          <v-col cols="12" class="d-flex">
            <v-img
              class="pl-md-10 ml-md-7"
              width="25%"
              :src="item.image1"
              aspect-ratio="1.5"
              transition="scale-transition"
              contain
            />
            <v-img
              class="pl-md-10 ml-md-7"
              width="25%"
              :src="item.image2"
              aspect-ratio="1.5"
              transition="scale-transition"
              contain
            />
            <v-img
              class="pl-md-10 ml-md-7"
              width="25%"
              :src="item.image3"
              aspect-ratio="1.5"
              transition="scale-transition"
              contain
            />
          </v-col>
          <v-col cols="12" class="d-flex justify-space-around">
            <v-card-actions>
              <v-btn rounded class="elevation-0" color="primary">Patner</v-btn>
              <v-btn rounded outlined color="primary">Investor</v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </ContainerWidu>
    </div>

    <!-- Bannerbot -->
    <Bannerbot />
  </div>
</template>

<script>
import ContainerWidu from "../components/base/ContainerWidu";
import Subjudul from "../components/base/Judul";
import Bannerbot from "../components/base/BannerBot";

export default {
  name: "event",
  components: {
    Bannerbot,
    ContainerWidu,
    Subjudul
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
            judul: "Kalender Event Kesehatan Doctor Quincy",
            image: require("@/assets/image/Group 2683.png"),
            teks: [
              {
                class: "body-1",
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
                  "Ada begitu banyak perusahaan besar di Indonesia dengan ribuan karyawan, pegawai negeri sipil, atau seluruh masyarakat pada umumnya - Doctor Quincy dapat mengurangi biaya perawatan kesehatan mereka secara keseluruhan."
              },
              {
                paragraf:
                  "Kami percaya bahwa ketika karyawan selalu mengambil cuti karena sakit, itu jelas akan berdampak pada semua orang yang dilayani oleh  perusahaan itu. Doctor Quincy memperluas akses layanan kesehatan berkualitas tinggi dan terjangkau yang mudah dan nyaman digunakan."
              }
            ]
          }
        ]
      },
      {
        contentDua: [
          {
            judul: "Mengapa Bermitra Dengan Doctor Quincy ?",
            judul1: "Mengapa Berinvestasi Dengan Doctor Quincy ?",
            image: require("@/assets/image/Image 1.png"),
            teks: [
              {
                paragraf:
                  "Karena platform aman Doctor Quincy memastikan bahwa pasien kami akan memiliki akses langsung dan mudah ke salah satu jaringan penyedia telehealth satu-satunya dan terbesar di Indonesia melalui suara, video, dan perangkat seluler."
              },
              {
                paragraf1:
                  "Karena Doctor Quincy menyesuaikan paket investasi investor dengan solusi telehealth berkualitas, sesuai permintaan yang dirancang untuk bekerja bahu-membahu dengan program insentif kesehatan untuk mengurangi biaya perawatan kesehatan keseluruhan pasien dan membiarkan anggota kami mengambil kendali lebih besar atas kesehatan mereka. Hasilnya adalah anggota yang lebih sehat yang lebih produktif."
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
                  "Doctor Quincy bekerja bahu-membahu dengan pasien untuk mengembangkan solusi perawatan dan strategi kebutuhan kesehatan masing-masing pasien. Pengalaman telehealth yang komprehensif dan dapat disesuaikan untuk mengurangi biaya pengoperasian sambil meningkatkan efisiensi dan kualitas penyedia."
              },
              {
                class: "text__widu body-1 font-weight-medium",
                paragraf:
                  "Platform dan antarmuka kami yang mudah digunakan memberikan pengalaman yang luarbiasa dan hubungan yang erat antara pasien dan penyedia kami, meningkatkan koordinasi perawatan, mengurangi beban penyedia dan akses perawatan kesehatan yang lebih baik. Dengan menggabungkan pengetahuan kami di industri kesehatan ini dan kekuatan AI (artificial intelligence) yang terus berkembang, hasil akhirnya adalah komunitas yang lebih sehat dengan perawatan yang terkoordinasi dengan baik sehingga terjadi hubungan yang lebih kuat dengan mitra and investor kami."
              },
              {
                class: "text__widu body-1 font-weight-medium",
                paragraf2:
                  "Doctor Quincy bertujuan untuk melampaui cara tradisional pasien menerima perawatan medis. Kami terbuka untuk bermitra dengan organisasi lain besar atau kecil, perusahaan dan instansi pemerintahan, dan rumah sakit untuk membantu meningkatkan kualitas layanankesehatan, mengurangi kasus ruang gawat darurat yang seharunya tidak perlu, mengurangi dan mencegah perawatan yang lebih mahal dan berisiko."
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
                  "Doctor Quincy bekerja bahu-membahu dengan pasien untuk mengembangkan solusi perawatan dan strategi kebutuhan kesehatan masing-masing pasien. Pengalaman telehealth yang komprehensif dan dapat disesuaikan untuk mengurangi biaya pengoperasian sambil meningkatkan efisiensi dan kualitas penyedia."
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