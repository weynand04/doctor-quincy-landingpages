<template>
  <div id="pelankes_page">
    <div v-for="(section, index) in pelankes" :key="index">
      <!-- banner -->
      <v-container v-for="item in section.banner" :key="item.judul">
        <v-row>
          <v-col cols="12">
            <v-img
              :src="item.image"
              aspect-ratio="2.4"
              max-height="100%"
              max-width="100%"
              position="left center"
              contain
            >
              <div class="col-md-5 float-md-right">
                <v-card-title
                  class="title1__widu font-weight-bold black--text text-break"
                >{{item.judul}}</v-card-title>
                <div class="list__widu">
                  <ul class="text__widu font-weight-medium">
                    <li v-for="(li, index) in item.teks" :key="index" class="mx-1">{{li.list}}</li>
                  </ul>
                </div>
              </div>
            </v-img>
          </v-col>
          <v-col cols="12" class="d-flex justify-center" style="background:#FCFCFC">
            <v-container width="88%" color="transparent">
              <p
                v-for="(s, index) in item.stiker"
                :key="index"
                class="body-1 font-weight-medium ma-5"
              >{{s.paragraf}}</p>
            </v-container>
          </v-col>
        </v-row>
      </v-container>

      <!-- contentSatu -->
      <v-container
        v-for="item in section.contentSatu"
        :key="item.judul"
        style="background-color:#F2F2F2;"
        fluid
      >
        <v-row class="pl-md-12">
          <v-col cols="12">
            <v-card-title
              class="title__widu font-weight-bold text orange--text darken-3 ma-n4"
            >{{item.judul}}</v-card-title>
            <v-row>
              <CardWidu v-for="(card, index) in item.cards" :key="index" v-bind:dataCard="card" />
            </v-row>
          </v-col>
        </v-row>
      </v-container>

      <!-- contentDua -->
      <v-container>
        <v-row class="pl-md-12 pl-4">
          <p
            v-for="(item, index) in section.contentDua"
            :key="index"
            class="body-1 font-weight-medium"
          >{{item.paragraf}}</p>
        </v-row>
      </v-container>

      <!-- contentTiga -->
      <v-container fluid v-for="item in section.contentTiga" :key="item.judul">
        <v-row class="pl-md-12">
          <v-col cols="12">
            <v-card-title
              class="title font-weight-bold primary--text text-break col-md-10"
            >{{item.judul}}</v-card-title>
            <v-card-text>
              <p v-for="(p, index) in item.teks" :key="index" :class="p.class">{{p.paragraf}}</p>
            </v-card-text>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import CardWidu from "../components/base/CardWidu";

export default {
  name: "pelankes",
  data: () => ({
    pelankes: [
      {
        banner: [
          {
            judul: "Penyedia Layanan Kesehatan",
            image: require("@/assets/image/Group 2569.png"),
            teks: [
              {
                list: "Meningkatkan perawatan kesehatan"
              },
              {
                list:
                  "Memperbaiki & memperbarui akses kesehatan yang lebih baik"
              },
              {
                list:
                  "Mengurangi biaya & membantu mencegah rawat inap di rumah sakit"
              },
              {
                list:
                  "Jaringan penyedia kami adalah yang terbesar di negara ini dan terdiri dari dokter-dokter yang Bersertifikat dalam Penyakit Dalam, Praktek Keluarga, Dokter Unit Darurat dan Pediatri; serta para profesional kesehatan mental berlisensi dan terlatih yang menyediakan layanan konseling dan perilaku kesehatan."
              },
              {
                list:
                  "Semua penyedia kami menjalani pemeriksaan latar belakang dengan verifikasi sumber primer melalui Data Doktr Nasional (DDN) dan Indonesian Medical Association atau “Ikatan Dokter Indonesia” (IDI) untuk lisensi medis, pelatihan dan pendidikan, sejarah kerja dan sejarah malpraktik."
              }
            ],
            stiker: [
              {
                paragraf:
                  "Kesehatan untuk Indonesia yang Lebih Baik berpusat pada keyakinan yang membimbing bahwa kesehatan adalah hak asasi manusia. Kami percaya bahwa setiap orang pantas mendapat kesempatan and menjalani kehidupan yang lebih sehat. Itulah sebabnya kami terus berinovasi untuk menciptakan akses bagi semua dan menumbuhkan komunitas yang lebih sehat. Kami percaya bahwa untuk membuat dampak terbesar kami perlu bermitra dengan dokter-dokter lokal dengan niat baik yang secara langsung menangani kebutuhan mendasar dengan melayani di luar klinik atau rumah sakit"
              },
              {
                paragraf:
                  "Kita perlu memahami dan mengatasi akar penyebab kesehatan yang buruk di Negara ini dan menemukan cara holistik bagi masyarakat untuk meningkatkan kesejahteraan secara keseluruhan. Kami membutuhkan keberanian dan fleksibilitas untuk membantu mereka yang paling rentan dan berkomitmen untuk menyediakan perawatan kesehatan yang aman, berkualitas dan terjangkau bagi semua. Bersama-sama, warisan ini adalah dasar bagi komitmen kami untuk terus maju."
              }
            ]
          }
        ]
      },
      {
        contentSatu: [
          {
            judul: "Dokter Kami Yang Ramah Dan Walas Asih",
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
        contentDua: [
          {
            paragraf:
              "Penyedia kami adalah di antara para ahli terkemuka negara dalam penyakit jantung, kanker, pengendalian penyakit, cedera, tulang belakang, masalah kulit, masalah perilaku, kelebihan berat badan atau kondisi terkait obesitas, diabetes, stroke dan berbagai macam perawatan kesehatan lainnya. Dengan penyedia yang tersebar di seluruh negeri, kami memanfaatkan sumber daya dan jangkauan geografis kami untuk membentuk jaringan spesialis terpadu dengan akses teknologi terbaru dalam kemajuan medis."
          },
          {
            paragraf:
              "Penyedia kami mendukung pendidikan kesehatan masyarakat, berpartisipasi dalam penelitian klinis, dan melayani populasi berisiko individu yang tidak diasuransikan atau kurang diasuransikan. Singkatnya, penyedia kami menjawab panggilan masyarakat Indonesia dengan memastikan akses yang lebih besar untuk perawatan kesehatan yang terjangkau, berkualitas tinggi dan pengalaman pasien yang luar biasa."
          }
        ]
      },
      {
        contentTiga: [
          {
            image: require("@/assets/image/Mask Group 9.png"),
            judul:
              "Layanan Kesehatan Harusnya Sederhana, Cepat Dan Tidak Rumit Temukan Sendiri Mengapa Begitu Banyak Orang Menyukai Doctor Quincy",
            teks: [
              {
                class: "body-1 font-weight-medium",
                paragraf:
                  "Layanan kesehatan medis yang tersedia melalui Doctor Quincy disediakan oleh dokter-dokter dan terapis berlisensi yang berpraktik dalam kelompok praktik profesional yang dimiliki secara independen dan secara kolektif dikenal sebagai “Doctor Quincy” – ini adalah dokter-dokter profesional sesuai permintaan pasien.Praktik profesional ini menyediakan layanan melalui platform Doctor Quincy. PT. Prima Shakti Multi Global, tidak dengan sendirinya menyediakan layanan dokter, kesehatan mental, atau penyedia layanan kesehatan lainnya, melainkan melalui tim profesional dokter ini kepada pasien di seluruh Indonesia. Kapan Dan Dimana Saja Mereka Membutuhkannya."
              },
              {
                class: "body-1 font-weight-medium",
                paragraf:
                  "Doctor Quincy di bawah PT. Prima Shakti Multi Global, adalah layanan kesehatan online untuk perawatan, perawatan dokter di rumah, perawat, terapis dan fisioterapi di Indonesia. Dokter, perawat, terapis dan fisioterapi di Doctor Quincy adalah ahli dalam bidang mereka dan memiliki lisensi bersertifikat, jangkauan luas di kota-kota di seluruh Indonesia dan siap 24 jam. Pelanggan Doctor Quincy dapat memilih layanan yang sesuai dengan anggaran dan kebutuhan mereka."
              },
              {
                class: "red--text body-1 font-weight-bold text-center",
                paragraf:
                  "Percayalah Pada Perawatan Di Rumah Hanya Dengan Doctor Quincy Saja"
              }
            ]
          }
        ]
      }
    ]
  }),
  components: {
    CardWidu
  }
};
</script>