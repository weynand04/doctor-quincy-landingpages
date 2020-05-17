<template>
  <v-container id="landing_page" fluid>
    <div v-for="(section, index) in landingpage" :key="index">
      <!-- Banner -->
      <v-row v-for="item in section.banner" :key="item.judul">
        <v-col cols="12" md="4" class="d-flex">
          <v-card flat class="pl-12 ml-8 align-self-start">
            <v-card-title
              class="title1__widu font-weight-bold black--text text-break"
            >{{item.judul}}</v-card-title>
            <v-card-subtitle class="subtitle__widu font-weight-medium pt-3">{{item.teks}}</v-card-subtitle>
            <v-card-actions>
              <v-btn rounded color="primary" class="elevation-0">Member</v-btn>
              <v-btn rounded outlined color="primary">Partner</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" md="8" class="d-flex right">
          <v-img :src="item.image" width="600" height="600" position="right center" />
        </v-col>
      </v-row>

      <!-- Content #1 -->
      <v-row v-for="item in section.contentSatu" :key="item.judul" style="background: #FCFCFC;">
        <v-col cols="12" md="6">
          <v-img :src="item.image" height="400" contain></v-img>
        </v-col>
        <v-col cols="12" md="6" align-self="center">
          <v-card flat color="transparent">
            <v-card-title class="title__widu font-weight-bold orange--text darken-3">{{item.judul}}</v-card-title>
            <v-card-subtitle class="subtitle2__widu">{{item.teks}}</v-card-subtitle>
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

      <!-- Content #2 -->
      <v-row v-for="item in section.contentDua" :key="item.judul">
        <v-col sm="12" class="d-flex justify-space-around mb-n12">
          <v-card class="col-11" color="transparent" flat>
            <v-card-title
              class="title__widu font-weight-bold orange--text text-break"
            >{{item.judul}}</v-card-title>
            <v-card-text class="text__widu font-weight-light">
              <v-img
                :src="item.image"
                max-height="185px"
                max-width="495px"
                class="float-left mb-3"
              />
              <div v-for="p in item.teks" :key="p.paragraf">
                <p>{{p.paragraf}}</p>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          align="center"
          v-for="stiker in item.stikers"
          :key="stiker.tag"
          :style="stiker.style"
        >
          <p :class="stiker.class">{{stiker.tag}}</p>
        </v-col>
      </v-row>

      <!-- Content #3 -->
      <v-row v-for="item in section.contentTiga" :key="item.image">
        <v-img
          :src="item.image"
          aspect-ratio="2.4"
          position="top center"
          gradient="to top right, rgba(248, 178, 24, 0.7), rgba(248, 178, 24, 0.7)"
        >
          <v-col class="d-flex justify-center">
            <v-card v-for="card in item.cards" :key="card.judul" width="350" class="mr-10">
              <v-card-title
                class="title__widu orange--text darken-3 text-left text-break"
              >{{card.judul}}</v-card-title>
              <v-card-text>
                <p
                  class="text__widu font-weight-light"
                  v-for="p in card.teks"
                  :key="p.paragraf"
                >{{p.paragraf}}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-img>
      </v-row>

      <!-- Content #4 -->
      <v-row
        v-for="(item, index) in section.contentEmpat"
        :key="index"
        class="d-flex justify-center"
      >
        <v-col cols="12" md="6">
          <v-img
            :src="item.image"
            style="margin-left: 85px"
            max-height="601"
            max-width="566"
            contain
          />
        </v-col>
        <v-col cols="12" md="6" align-self="center">
          <v-card flat width="450">
            <v-card-text>
              <p v-for="p in item.teks" :key="p.paragraf" :class="p.class">{{p.paragraf}}</p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" style="background-color:#F8F8F8;" align="center" class="ma-4">
          <p v-for="stiker in item.stikers" :key="stiker.teks" :class="stiker.class">{{stiker.teks}}</p>
        </v-col>
      </v-row>

      <!-- Content #5 -->
      <v-row v-for="item in section.contentLima" :key="item.judul">
        <v-col cols="12" class="d-flex justify-space-around">
          <v-card width="85%" flat>
            <v-card-title
              class="title__widu orange--text darken-3 text-left text-break"
            >{{item.judul}}</v-card-title>
            <v-card-text>
              <p
                class="text__widu font-weight-ligh"
                v-for="p in item.teks"
                :key="p.paragraf"
              >{{p.paragraf}}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    landingpage: [
      {
        banner: [
          {
            judul: "Web Solutions Designed for our Doctors",
            teks: "Be Our Patner",
            image: require("@/assets/image/artwork-01.png")
          }
        ]
      },
      {
        contentSatu: [
          {
            judul: "Apa Itu Dr.Quincy",
            teks: "The Envolving Benefits Of Telemedicine",
            image: require("@/assets/image/artwork-02-cp.png")
          }
        ]
      },
      {
        contentDua: [
          {
            judul: "Kamu Akan Jauh Merasa Lebih Baik Dengan Dokter Quincy",
            image: require("@/assets/image/Image 1.png"),
            teks: [
              {
                paragraf:
                  "Sekarang kamu dapat memiliki dokter sesuai permintaan dengan mudah dan bebas repot mengunjungi kamu dalam hitungan menit sesuai kenyamanan kamu, hanya dengan menggunakan ponsel cerdas, tablet, atau laptop kamu 24 jam sehari."
              },
              {
                paragraf:
                  "Layanan kesehatan harusnya sederhana, cepat dan tidak rumit. Dokter Quincy memudahkan dokter mengunjungi kamu dalam beberapa menit melalui aplikasi seluler kami dan online."
              },
              {
                paragraf:
                  "Dapatkan akses ke layanan kesehatan berkualitas tanpa harus meninggalkan rumah, pekerjaan, atau dimanapun kamu berada. Betapa mudahnya menerima perawatan yang terjangkau dan berkualitas tanpa bepergian ke rumah sakit! Resep obat dapat dikirim langsung ke apotek jika diperlukan secara medis."
              },
              {
                paragraf:
                  "Mengatasi faktor sosial yang paling mendesak berkontribusi pada kesehatan masyarakat. Di Doctor Quincy, misi kami memanggil kami untuk menjadi agen perubahan radikal dalam hal kesehatan. Kami akan menjadi sumber cinta penyembuhan dan mercusuar harapan … untuk negara, dan untuk setiap komunitas yang kami layani, dan untuk setiap orang yang kami temui - terutama mereka yang paling rentan dalam masyarakat kami karena kondisi sosial. Untuk melakukan ini, kami membuat poros penting dari perawatan kesehatan, untuk mendukung kondisi masyarakat demi kesehatan dan kesejahteraan yang optimal. Untuk menjalani komitmen kami untuk menjadi mitra dalam bidang kesehatan, kami harus melakukan sesuatu yang berbeda. Layanan kesehatan tradisional pada umumnya hanya berfokus pada rumah sakit dan klinik yang secara geografis berlabuh dengan semua titik sentuh perawatan pasien di sekitar rumah sakit. Tetapi fokus kami lebih pada mendukung orang-orang sakit dengan serangkaian perawatan kesehatan, program, intervensi, dan layanan berbasis masyarakat. Kami bermitra dengan dokter-dokter lokal di seluruh negeri, memungkinkan kami untuk memasang jaring yang lebih luas dan lebih dalam. Meningkatkan kesehatan masyarakat kita adalah hal mendasar dan komitmen yang mengakar kuat pada warisan dan tujuan kami. Misi kami memanggil kami untuk tabah dalam melayani semua dengan perhatian yang sama. Keyakinan inti ini mendorong program yang kami bangun, investasi yang kami buat, dan strategi yang kami terapkan."
              }
            ],
            stikers: [
              {
                tag:
                  "Dokter Quincy Juga Menawarkan Program “CrystalCare” Generasi-Baru Perawatan Kesehatan Primer Untuk Pegawai Pengusahaan & Pegawai Negeri",
                class: "text__widu font-weight-bold red--text col-4 ma-n5",
                style: ""
              },
              {
                tag: "Klik disini untuk detail lebih lanjut",
                class: "text__widu font-weight-bold blue--text mb-10",
                style: ""
              },
              {
                tag:
                  "Bukankah Sudah Saatnya Kamu Benar-Benar Mulai Memikirkan Kembali Cara Kamu Menerima Perawatan Kesehatan?",
                class: "text__widu font-weight-bold col-5",
                style: "background-color:#F8F8F8;"
              },
              {
                tag:
                  "Pendekatan kami terhadap perawatan kesehatan adalah membuatnya mudah dan bebas repot untuk semua orang,meruntuhkan penghalang birokrasi dengan mendukung kesehatan kamu dimanapun kamu berada. Dokter dan psikolog berlisensi kami tersedia 24 jam setiap hari.",
                class: "text__widu white--text font-weight-medium col-10",
                style: "background-color:#6B6B6B"
              }
            ]
          }
        ]
      },
      {
        contentTiga: [
          {
            image: require("@/assets/image/Mask Group 9.png"),
            cards: [
              {
                judul:
                  "Perawatan Kesehatan Yang Berkualitas Dimulai Dengan Dokter Yang Berkualitas",
                teks: [
                  {
                    paragraf:
                      "Kami menjamin kesehatan kamu dari A hingga Z dan Dokter Quincy disini untuk mendukung kesejahteraan kamu seiring waktu. Dari dokter hingga psikolog, kami membantu mendukung perjalanan kesehatan kamu. Tim dokter kami yang penuh kasih dan tepercaya berasal dari berbagai latar belakang dan spesialisasi. Mereka akan menciptakan jenis hubungan baru dengan kamu dengan meluangkan waktu untuk mendengarkan dan memperhatikan detail masalah kesehatan kamu. Dokter kami sedang merevolusi akses layanan kesehatan yang berkualitas. Mereka dilatih secara profesional untuk menggunakan teknologi virtual untuk menangani banyak kondisi non-darurat. Tim ahli medis kami adalah para dokter dengan pengalaman bertahun-tahun."
                  }
                ]
              },
              {
                judul: "Biaya Terjangkau Dan Transparan",
                teks: [
                  {
                    paragraf:
                      "Layanan Doctor Quincy tersedia secara nasional dan internasional, dengan atau tanpa asuransi. Gratis untuk bergabung, dan biaya dokter kunjungan kamu selalu ditampilkan di muka sehingga kamu tahu berapa biayanya, tanpa tagihan kejutan nanti. Kami bekerja dengan asuransi lainnya termasuk BPJS, pegawai pengusahaan dan pegawai negeri. Doctor Quincy menawarkan akses kesehatan yang terjangkau, transparan, lebih mudah dan tidak merepotkan untuk semua orang."
                  },
                  {
                    paragraf:
                      " Kami baru saja memulai perjalanan merevolusi layanan kesehatan di Indonesia dan menjadikannya lebih mudah diakses oleh orang-orang di mana saja. Inovasi kesehatan digital mengubah hidup kita menjadi lebih baik dan inovatif, solusi kesehatan generasi baru ini akan membantu memecahkan banyak tantangan dalam perawatan kesehatan primer dan mengatasi kebutuhan pasien, dokter, dan masih banyak lagi."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        contentEmpat: [
          {
            image: require("@/assets/image/gambar lain-01.png"),
            teks: [
              {
                class: "text__widu font-weight-medium",
                paragraf:
                  "Dokter Quincy memberikan layanan langsung kepada konsumen, puluhan juta orang Indonesia akan menikmati kunjungan kesehatan medis termasuk layanan kesehatan jiwa, perawatan pencegahan, perawatan kronis, perawatan darurat, dan kesehatan perilaku. "
              },
              {
                class: "text__widu font-weight-medium",
                paragraf:
                  "Misi Doctor Quincy adalah meningkatkan kesehatan masyarakat melalui perawatan dan inovasi yang penuh kasih. Untuk mengakses Doctor Quincy, kamu dapat mengunduh aplikasi kami secara gratis di (iTunes atau Google Play)."
              },
              {
                class: "text__widu font-weight-medium",
                paragraf:
                  "Dokter Quincy secara langsung sedang mengubah kehidupan lebih dari 100 juta jiwa orang dengan akses melalui layanan kesehatan berkualitas tanpa harus meninggalkan rumah mereka."
              },
              {
                class: "text__widu font-weight-bold blue--text",
                paragraf:
                  "Kendalikan Kesehatan Kamu Hari Ini Juga! Bergabunglah Dengan Jutaan Orang Yang Memiliki Akses Dokter Quincy 24 Jam Sehari, 365 Hari Setahun"
              },
              {
                class: "text__widu font-weight-medium red--text",
                paragraf: "Sekarang Giliran Kamu!"
              }
            ],
            stikers: [
              {
                class: "col-6 font-weight-bold ",
                teks:
                  "Gunakan Dokter Quincy Saat Bepergian Dengan Aplikasi Seluler Kami Unduh Sekarang Aplikasi Gratis Kami Dapatkan Akses Perawatan Medis Kapan Saja Di Smartphone Kamu"
              },
              {
                class: "red--text font-weight-bold",
                teks:
                  "Dokter Quincy Dirancang Untuk Menjadi Teman Medis Online-mu"
              }
            ]
          }
        ]
      },
      {
        contentLima: [
          {
            judul:
              "Layanan Kesehatan Harusnya Sederhana, Cepat Dan Tidak Rumit Temukan Sendiri Mengapa Begitu Banyak Orang Menyukai Doctor Quincy",
            teks: [
              {
                paragraf:
                  "Layanan kesehatan medis yang tersedia melalui Doctor Quincy disediakan oleh dokter-dokter dan terapis berlisensi yang berpraktik dalam kelompok praktik profesional yang dimiliki secara independen dan secara kolektif dikenal sebagai “Doctor Quincy” – ini adalah dokter-dokter profesional sesuai permintaan pasien. Praktik profesional ini menyediakan layanan melalui platform."
              },
              {
                paragraf:
                  "Doctor Quincy. PT. Prima Shakti Multi Global, tidak dengan sendirinya menyediakan layanan dokter, kesehatan mental, atau penyedia layanan kesehatan lainnya, melainkan melalui tim profesional dokter ini kepada pasien di seluruh Indonesia. Kapan Dan Dimana Saja Mereka Membutuhkannya. Doctor Quincy di bawah PT. Prima Shakti Multi Global, adalah layanan kesehatan online untuk perawatan, perawatan dokter di rumah, perawat, terapis dan fisioterapi di Indonesia. Dokter, perawat, terapis dan fisioterapi di Doctor Quincy adalah ahli dalam bidang mereka dan memiliki lisensi bersertifikat, jangkauan luas di kota-kota di seluruh Indonesia dan siap 24 jam. Pelanggan Doctor Quincy dapat memilih layanan yang sesuai dengan anggaran dan kebutuhan mereka."
              }
            ]
          }
        ]
      }
    ]
  })
};
</script>
