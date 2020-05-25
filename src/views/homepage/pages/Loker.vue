<template>
  <div id="beprovider" tag="section">
    <div v-for="(section, insec) in sections" :key="insec">
      <!-- bannerTop -->

      <ContainerWidu v-for="(item, index) in section.bannerTop" :key="index" class="bg-banner">
        <v-row no-gutters>
          <v-col cols="6">
            <SubJudul :judul="item.subjudul" class="mb-2" />

            <template v-for="(data, index) in item.teks">
              <p :key="index" :class="data.cls">{{data.p}}</p>
            </template>
          </v-col>
        </v-row>
      </ContainerWidu>

      <!-- ContentSatu -->
      <ContainerWidu
        v-for="(item,index) in section.ContentSatu"
        :key="index"
        style="background: #FCFCFC"
      >
        <v-row no-gutters>
          <v-col
            v-for="(data, index) in item.Dcard"
            :key="index"
            cols="12"
            md="6"
            class="d-flex justify-space-around"
          >
            <v-card max-width="380" max-height="650" class="elevation-1">
              <v-img :src="data.image">
                <div class="fill-height mygradient"></div>
              </v-img>
              <v-card-title class="justify-center text-break">{{data.title}}</v-card-title>
              <v-card-text>
                <p v-for="(p, i) in data.text" :key="i">{{p.paragraf}}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </ContainerWidu>
      <ContainerWidu v-for="(i, index) in section.infoBergabung" :key="index">
        <v-row>
          <v-col cols="12">
            <SubJudul :subjudul="i.tag" class="text-center" />
          </v-col>
          <v-col class="d-flex justify-center">
            <v-btn rounded color="primary" elevation="0" class>{{i.btn}}</v-btn>
          </v-col>
        </v-row>
      </ContainerWidu>
    </div>
  </div>
</template>
<script>
import ContainerWidu from "../components/base/ContainerWidu";
import SubJudul from "../components/base/Judul";

export default {
  name: "Help",
  components: {
    ContainerWidu,
    SubJudul
  },
  data: () => ({
    sections: [
      {
        bannerTop: [
          {
            subjudul: "Lowongan Kerja",
            teks: [
              {
                p:
                  "Peluang kerja menanti mereka yang luar biasa, energik, keterampilan manajemen yang baik, dan dorongan sukses yang tak terbatas!",
                cls: "body-1"
              },
              {
                p:
                  "Bergabunglah dengan kami, karena kami sedang Membentuk Masa Depan Perawatan Kesehatan.",
                cls: "body-1"
              },
              {
                p:
                  "Industri kesehatan sedang berkembang, dan Doctor Quincy berada di garis depan di Indonesia. Sebagai pelopor dalam Telehealth Online, kami menciptakan dan menerapkan solusi perawatan virtual yang memungkinkan dokter mengunjungi pasien, 24/7/365, menggunakan ponsel cerdas, laptop, atau PC mereka. Kami juga memungkinkan individu untuk berkonsultasi dengan terapis dan psikiater berlisensi melalui video langsung, dengan privasi dan kenyamanan mereka.",
                cls: "body-1"
              },
              {
                p:
                  "Komitmen kami terhadap perawatan kesehatan berkualitas, ditambah dengan adopsi kami terhadap teknologi terbaru, telah menciptakan peluang luar biasa bagi para profesional yang memiliki beragam latar belakang dan keahlian. Jelajahilah masa depan kamu, sembari membentuk masa depan layanan kesehatan yang lebih baik..",
                cls: "body-1"
              }
            ]
          }
        ]
      },
      {
        ContentSatu: [
          {
            Dcard: [
              {
                image: require("@/assets/image/Mask Group 24@2x.png"),
                title: "Tetapkan Jadwal Anda Sendiri",
                text: [
                  {
                    paragraf:
                      "Karena Doctor Quincy 24/7/365, maka anda akan menikmati kebebasan untuk mengunjungi dan merawat pasien berdasarkan jadwal waktu yang anda tetapkan, sesuai keinginan anda."
                  },
                  {
                    paragraf:
                      "Peningkatan ketersediaan dan menghilangkan hambatan untuk akses layanan kesehatan, memungkinkan dokter untuk mengunjungi pasien yang mungkin tidak mau antri dengan birokrasi rumah sakit dan menunggu lama sebelum bertemu dokter, atau karena tidak dapat meninggalkan rumah, memiliki jadwal yang sibuk, atau sedang bepergian."
                  }
                ]
              },
              {
                image: require("@/assets/image/Mask Group 25@2x.png"),
                title: "Hubungan Pasien-Dokter",
                text: [
                  {
                    paragraf:
                      "Hindari ketidaknyamanan bergegas untuk menghadiri pasien di rumah sakit dan masuk-keluar dari satu kamar pasien ke kamar pasien lainnya Anda dapat dengan mudah mengunjungi dan merawat pasien dalam kenyamanan rumah mereka sendiri."
                  },
                  {
                    paragraf:
                      "Hubungan Pasien-Dokter yang langsung dan penuh perhatian, sehingga terjadi suatu kepercayaan antara pasien dan dokter. Kami memberikan dukungan sentuhan tinggi kepada dokter kami, hal ini memungkinkan para dokter untuk fokus pada pasien dan mengelola perawatan pasien melalui teknologi terbaru dari platform kami."
                  }
                ]
              },
              {
                image: require("@/assets/image/Mask Group 26@2x.png"),
                title: "Kemudahan Penggunaan Teknologi",
                text: [
                  {
                    paragraf:
                      "Platform teknologi kami memberi dokter EMR atau EHR (Electronic Medical Record atau Electronic Health Record) yang mudah digunakan dan kemampuan streaming video canggih. Informasi dibagikan secara efektif antara penyedia kami, apotek, perawatan kesehatan medis dan mental. Fungsionalitas perutean panggilan kami menjaga waktu tunggu pasien minimum, sambil memberikan dokter waktu yang tepat untuk menyelesaikan kunjungan yang bermakna dan berkualitas."
                  },
                  {
                    paragraf:
                      "Apple ... Android ... aplikasi Doctor Quincy memudahkan pasien untuk terhubung dengan dokter, dan mengurangi waktu tunggu."
                  }
                ]
              },
              {
                image: require("@/assets/image/Mask Group 27@2x.png"),
                title: "Fleksibilitas Dan Kebebasan",
                text: [
                  {
                    paragraf:
                      "Melayani pasien tanpa gangguan dari kenyamanan rumah mereka sendiri, kantor atau lokasi yang nyaman - dari mana saja di Indonesia. Pengalaman mengurangi tugas administratif dan pembuatan grafik tanpa kertas yang efisien. "
                  },
                  {
                    paragraf:
                      "Keseimbangan dan fleksibilitas kehidupan kerja adalah pilar inti dari model para dokter kami dengan opsi penjadwalan yang sesuai dengan kehidupan setiap orang. Kesehatan untuk Indonesia yang Lebih Baik berpusat pada keyakinan yang membimbing bahwa kesehatan adalah hak asasi manusia. Kami percaya bahwa setiap orang pantas mendapat kesempatan and menjalani kehidupan yang lebih sehat."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        infoBergabung: [
          {
            tag:
              "Bergabunglah Dengan Tim Yang Sedang Mengubah Layanan Kesehatan Di Seluruh Indonesia",
            btn: "Klik disini untuk melanjutkan"
          }
        ]
      }
    ]
  })
};
</script>

<style lang="scss">
.mygradient {
  position: relative;
}
.mygradient::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 70px;
  bottom: 0;
  background-image: url("C:/xampp/htdocs/doctorquisy-fe/src/assets/image/wave.svg");
  background-size: cover;
  background-repeat: no-repeat;
}
.bg-banner {
  background-image: url("C:/xampp/htdocs/doctorquisy-fe/src/assets/image/bg_banner_loker.png"),
    linear-gradient(rgba(230, 172, 47, 0.178), rgba(216, 160, 40, 0.301));
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
}
</style>