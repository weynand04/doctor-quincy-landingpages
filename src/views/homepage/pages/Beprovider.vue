<template>
  <div id="beprovider" tag="section">
    <div v-for="(section, insec) in sections" :key="insec">
      <!-- bannerTop -->
      <ContainerWidu v-for="(item, index) in section.bannerTop" :key="index">
        <v-row no-gutters class="pl-sm-6 pl-md-2 pl-lg-3">
          <v-col cols="12" md="6" sm="6" lg="6" xl="6" align-self="center">
            <subjudul :judul="item.judul" />
            <p class="body-1 font-weight-medium">{{item.teks}}</p>
            <v-btn rounded max-width="100" height="40" class="elevation-0" color="primary">Login</v-btn>
            <v-btn rounded outlined max-width="100" height="40" color="primary">Register</v-btn>
          </v-col>
          <v-col cols="12" md="6" sm="6" lg="6" xl="6">
            <v-img
              :src="item.gambar"
              max-height="1024"
              max-width="900"
              aspect-ratio="1.4"
              contain
              class="ma-4"
            />
          </v-col>
        </v-row>
      </ContainerWidu>

      <!-- ContentSatu -->
      <ContainerWidu
        style="background: #FCFCFC"
        v-for="(item, index) in section.ContentSatu"
        :key="index"
      >
        <v-row no-gutters class="pl-sm-6 pl-md-2 pl-lg-3">
          <v-col cols="12" md="6" sm="6" lg="6" xl="6">
            <v-img :src="item.gambar" max-height="305" max-width="859" aspect-ratio="1.6" contain />
          </v-col>
          <v-col cols="12" md="6" sm="6" lg="6" xl="6" align-self="center">
            <subjudul :subjudul="item.judul" />
            <p
              v-for="items in item.teks"
              :key="items.p"
              class="body-1 font-weight-medium"
            >{{items.p}}</p>
          </v-col>
        </v-row>
      </ContainerWidu>

      <!-- ContentDUa -->
      <ContainerWidu v-for="(item, index) in section.ContentDua" :key="index">
        <v-row no-gutters class="pl-sm-6 pl-md-2">
          <v-col cols="12" class="d-flex justify-space-around">
            <v-row justify="space-around">
              <v-col
                v-for="m in item.viedos"
                :key="m.src"
                cols="12"
                md="6"
                class="d-flex justify-space-around"
              >
                <iframe width="390" height="270" :src="m.src" frameborder="0" class="mx-5"></iframe>
                <!-- <v-img :src="m.src" max-width="669" max-height="377" aspect-ratio="2.4" contain /> -->
              </v-col>
            </v-row>
          </v-col>
          <v-col class="d-flex justify-space-around">
            <p class="body-1 font-weight-medium">{{item.teks}}</p>
          </v-col>
        </v-row>
      </ContainerWidu>

      <!-- ContentTiga -->
      <ContainerWidu
        v-for="(item,index) in section.ContentTiga"
        :key="index"
        style="background: #FCFCFC"
      >
        <Subjudul :subjudul="item.subjudul" class="text-center"></Subjudul>
        <v-row no-gutters>
          <v-col
            v-for="(data, index) in item.Dcard"
            :key="index"
            cols="12"
            md="6"
            class="d-flex justify-space-around"
          >
            <v-card max-width="480" max-height="650" class="elevation-1">
              <v-img :src="data.image">
                <div class="fill-height mygradient"></div>
              </v-img>
              <v-card-title class="justify-center text-break">{{data.title}}</v-card-title>
              <v-card-text class="body-1">
                <p v-for="(p, i) in data.text" :key="i">{{p.paragraf}}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </ContainerWidu>

      <!-- contentEmpat -->
      <ContainerWidu v-for="(item, index) in section.ContentEmpat" :key="index">
        <v-row>
          <v-col cols="12" md="6" align-self="center" class="fill-height d-flex justify-center">
            <v-img :src="item.logo" max-height="450" max-width="400" contain />
          </v-col>
          <v-col cols="12" md="6" align-self="center">
            <p v-for="(p, i) in item.teks" :key="i">{{p.paragraf}}</p>
          </v-col>
        </v-row>
      </ContainerWidu>

      <!-- contentLima -->
      <ContainerWidu
        style="background: #FCFCFC"
        v-for="(item, index) in section.ContentLima"
        :key="index"
      >
        <v-row>
          <v-col cols="12">
            <Subjudul :subjudul="item.subjudul" class="text-center"></Subjudul>
          </v-col>
          <v-col
            cols="12"
            md="4"
            v-for="(btn, index) in item.button"
            :key="index"
            class="d-flex justify-space-around"
          >
            <v-btn
              height="100"
              width="280"
              color="#F8B218"
              class="mx-2 body-1 font-weight-bold"
              :href="btn.link"
            >
              <span>{{btn.title}}</span>
              <v-spacer />
              <v-icon color="white">mdi-greater-than</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </ContainerWidu>
    </div>
    <!-- Component banner bottom -->
    <Bannerbot />
  </div>
</template>

<script>
import ContainerWidu from "../components/base/ContainerWidu";
import Subjudul from "../components/base/Judul";
import Bannerbot from "../components/base/BannerBot";

export default {
  name: "Help",
  components: {
    ContainerWidu,
    Subjudul,
    Bannerbot
  },
  data: () => ({
    sections: [
      {
        bannerTop: [
          {
            judul: "Menjadi Penyedia",
            teks:
              "Apakah anda seorang Dokter berlisensi (dokter penyakit dalam, dokter unit gawat darurat, dokter keluarga, atau pediatri, dll.). Psikiater, Psikolog atau memenuhi syarat sebagai Terapis Kesehatan Perilaku. Dermatologis, Perawat, Terapis bersertifikat, dan Fisioterapi atau Bidan. Masyarakat Indonesia membutuhkanmu, mohon bergabunglah dengan kami untuk perawatan kesehatan masyarakat Indonesia yang lebih baik dan SEHAT!",
            gambar: require("@/assets/image/Image 26@2x.png")
          }
        ]
      },
      {
        ContentSatu: [
          {
            judul: "Karier",
            teks: [
              {
                p:
                  "Dokter Quincy terus memberikan model layanan kesehatan generasi baru dan inovatif, serta memperbaiki hambatan dan meningkatkan aksesibilitas layanan kesehatan yang lebih baik. Kepuasan dokter, kualitas layanan, dan (Patient-Doctor Relationships) hubungan pasien-dokter yang bermakna adalah prioritas utama kami."
              },
              {
                p:
                  "Lingkungan yang fleksibel, gesit, dan respon cepat terhadap masalah kesehatan memungkinkan dokter, psikolog, dan psikiater kami untuk merawat pasien lebih cepat daripada model perawatan kesehatan tradisional. Silahkan isi posisi yang tercantum di bawah ini dan kami sangat yakin bahwa niat baik anda untuk bergabung dengan kami dapat meningkatkan kesehatan masyarakat Indonesia melalui perawatan dan inovasi yang welas asih."
              }
            ],
            gambar: require("@/assets/image/Group 2694@2x.png")
          }
        ]
      },
      {
        ContentDua: [
          {
            viedos: [
              {
                src: "https://www.youtube.com/embed/8dlUqlMDkR4"
              },
              {
                src: "https://www.youtube.com/embed/P6D5VgyI_Ms"
              }
            ],
            teks:
              "Video yang menunjukkan bagaimana seorang dokter dengan penuh kasih memperkenalkan dirinya kepada seorang pasien sebelum kunjungan pertemuan yang sebenarnya."
          }
        ]
      },
      {
        ContentTiga: [
          {
            subjudul: "Mengapa Bergabung Dengan Doctor Quincy?",
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
        ContentEmpat: [
          {
            logo: require("@/assets/image/logo.svg"),
            teks: [
              {
                paragraf:
                  "Bergabunglah dengan Dokter Quincy, karena perawatan kesehatan yang lebih baik bagi masyarakat berarti negara yang sehat. Mari kita menjadikan Indonesia negara yang sehat dan hebat"
              },
              {
                paragraf:
                  "Jika anda seorang dokter berlisensi praktek yang ingin membuat masa depan perawatan kesehatan di Indonesia lebih baik, cukup isi formulir di bawah ini, dan spesialis rekrutmen dokter dari Doctor Quincy akan segera menghubungi anda."
              }
            ]
          }
        ]
      },
      {
        ContentLima: [
          {
            subjudul: "Siap Bergabung Dengan Kami? Mari Kita Memulai!",
            button: [
              {
                title: "Dokter",
                link: ""
              },
              {
                title: "Psikiater/Psikolog",
                link: ""
              },
              {
                title: "Psikiater/Psikolog",
                link: ""
              },
              {
                title: "Ahli Gizi",
                link: ""
              },
              {
                title: "Perawat/Bidan",
                link: ""
              },
              {
                title: "Fisioterapi",
                link: ""
              }
            ]
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
</style>