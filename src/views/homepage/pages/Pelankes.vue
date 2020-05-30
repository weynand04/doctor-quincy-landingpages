<template>
  <div id="pelankesPage" tag="section">
    <div v-for="(section, index) in pelankes" :key="index">
      <!-- banner -->
      <v-container v-for="item in section.banner" :key="item.judul">
        <v-row>
          <v-col cols="12">
              <Bannertop
              :judul="item.judul"
              :image="item.image"
               right="right"
               position="left center"
            > <v-col>
              <div class="col-ml-2 float-ml-right">
                <div class="list__widu">
                  <ul class="body-1">
                    <li v-for="(li, index) in item.teks" :key="index" class="mx-1">{{li.list}}</li>
                  </ul>
                </div>
              </div>
            </v-col></Bannertop>
          </v-col>
          </v-row>
      </v-container>

      <!-- contentNol -->
      <v-container v-for="item in section.contentNol"
        :key="item.judul"
        style="background: #FCFCFC;"
        color="transparent" class="body-1" fluid>
          <v-col cols="12" class="d-flex justify-center" style="background:#FCFCFC">
            <v-container >
              <p v-for="(s, index) in item.stiker" :key="index" class="body-1 ma-5">{{s.paragraf}}</p>
            </v-container>
          </v-col> </v-container>

      <!-- contentSatu -->
      <v-container
        v-for="item in section.contentSatu"
        :key="item.judul"
        style="background-color:#F2F2F2;"
        fluid
      >
        <v-row class="pl-12">
          <v-col cols="12">
            <Subjudul :subjudul="item.judul" />
            <v-row>
              <CardWidu v-for="(card, index) in item.cards" :key="index" v-bind:dataCard="card" />
            </v-row>
          </v-col>
        </v-row>
      </v-container>

      <!-- contentDua -->
      <v-container>
        <v-row class="pl-6">
          <p
            v-for="(item, index) in section.contentDua"
            :key="index"
            class="body-1"
          >{{item.paragraf}}</p>
        </v-row>
      </v-container>
    </div>
    <!-- banner bottom -->
    <Bannerbot />
  </div>
</template>

<script>
import CardWidu from "../components/base/CardWidu";
import Bannerbot from "../components/base/BannerBot";
import Subjudul from "../components/base/Judul";
import Bannertop from "../components/base/BannerTop";

export default {
  name: "pelankes",
  components: {
    CardWidu,
    Bannerbot,
    Bannertop,
    Subjudul
  },
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
            ]
          }
        ]
      },
      {
      contentNol: [
        {
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
      }
    ]
  })
};
</script>