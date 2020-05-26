<template>
  <div id="tidakditanganiPage">
    <div v-for="(section, index) in sections" :key="index">
      <!-- section #1 -->
      <v-container fluid v-for="(item, index) in section.banner" :key="index">
        <v-row class="pl-md-12">
          <v-img
            :src="item.image"
            aspect-ratio="2.1"
            max-height="90%"
            max-width="100%"
            position="center right 10%"
            contain
          >
            <v-col cols="12" md="6" class="d-flex fill-height">
              <div class="col-12 align-self-center">
                <Subjudul :judul="item.judul" />
                <p class="body-1 font-weight-medium pt-3">{{item.teks}}</p>
                <v-card-actions>
                  <v-btn rounded class="elevation-0" color="primary">Login</v-btn>
                  <v-btn rounded outlined color="primary">Partner</v-btn>
                </v-card-actions>
              </div>
            </v-col>
          </v-img>
        </v-row>
      </v-container>

      <!-- section #2 -->
      <v-container
        v-for="(item, index) in section.contentsatu"
        :key="index"
        style="background: #FCFCFC"
        fluid
      >
        <v-row no-gutters class="pl-md-12 ml-md-1">
          <v-col cols="12">
            <p class="body-1 pt-3">{{item.judul}}</p>
          </v-col>
          <v-col cols="12" md="6">
            <v-img :src="item.image" max-width="500" min-height="200" aspect-ratio="1.9" contain />
          </v-col>
          <v-col align-self="center" cols="12" md="6" class="list__widu">
            <ul v-for="(list, index) in item.list" :key="index">
              <li class="body-1 my-1">{{list.title}}</li>
            </ul>
          </v-col>
          <v-col cols="12">
            <p class="body-1 pt-3">{{item.teks}}</p>
          </v-col>
          <v-col cols="6" v-for="(list, index) in item.lists" :key="index" class="list__widu">
            <ul>
              <li>{{list.title}}</li>
            </ul>
          </v-col>
        </v-row>
      </v-container>

      <!-- section #3 -->
      <v-container fluid v-for="(item, index) in section.contentdua" :key="index">
        <v-row class="pl-md-12 ml-md-1">
          <v-col cols="12">
            <p class="body-1 pt-3">{{item.judul}}</p>
          </v-col>
          <v-col cols="12" md="5" class="body-1 list__widu">
            <ul v-for="(list, index) in item.list" :key="index">
              <li>{{list.title}}</li>
            </ul>
          </v-col>
          <v-col cols="12" md="7">
            <v-img :src="item.image" max-width="500" aspect-ratio="1.7" contain />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import Subjudul from "../components/base/Judul";

export default {
  name: "tidak-di-tangani",
  components: {
    Subjudul
  },
  data: () => ({
    sections: [
      {
        banner: [
          {
            judul: "Kondisi yang tidak Kami Tangani",
            teks:
              "Ini adalah kondisi yang saat ini tidak ditangani oleh penyedia kami. Kami menyarankan agar langsung ke rumah sakit terdekat, atau mengunjungi pusat perawatan gawat darurat terdekat, tergantung pada tingkat keparahan masalahnya.",
            image: require("@/assets/image/svg/gambar lain-11.svg")
          }
        ]
      },
      {
        contentsatu: [
          {
            judul:
              "Ini adalah kondisi yang saat ini tidak ditangani oleh penyedia kami. Kami menyarankan agar langsung ke rumah sakit terdekat, atau mengunjungi pusat perawatan gawat darurat terdekat, tergantung pada tingkat keparahan masalahnya.",
            image: require("@/assets/image/Mask Group 13.png"),
            list: [
              {
                title:
                  "Situasi gawat darurat (pendarahan parah, serangan jantung parah, dll)."
              },
              {
                title: "Keguguran spontan"
              },
              {
                title: "Pemikiran bunuh diri"
              },
              {
                title:
                  "Penyakit aneh yang tidak biasa atau berpotensi untuk menular"
              },
              {
                title: "Infeksi saluran kemih pada pria"
              },
              {
                title: "Infeksi saluran kemih pada wanita"
              },
              {
                title: "Wabah Penyakit Menular"
              },
              {
                title:
                  "Gigitan binatang berpotensi bahaya (mis. anjing, ular, dll.)"
              }
            ],
            teks:
              "Baik orang dewasa maupun anak-anak yang menderita demam berdarah menular harus segera dibawa ke rumah sakit terdekat. Anak-anak di bawah 12 tahun yang menderita sakit telinga dapat diobati jika sakitnya disebabkan oleh virus (mis. Pilek, alergi, atau infeksi eksternal). Jika ada kemungkinan besar itu adalah infeksi dalam bakteri yang membutuhkan antibiotic tertentu, diharuskan segera dibawa ke rumah sakit terdekat.",
            lists: [
              {
                title: "Anak di bawah usia 3 tahun dengan demam tinggi"
              },
              {
                title: "Anak di bawah 12 tahun dengan sakit telinga yang parah"
              }
            ]
          }
        ]
      },
      {
        contentdua: [
          {
            judul:
              "Walaupun dokter kami dapat mengobati bahkan penyakit berat, masih ada beberapa kondisi yang tidak dapat mereka lakukan. Dalam kasus seperti itu, kami dengan hormat menyarankan kamu untuk pergi ke rumah sakit saja.",
            list: [
              {
                title: "Tidak dapat melakukan bedah di rumah."
              },
              {
                title: "Tidak bisa melakukan aborsi."
              },
              {
                title: "Tidak dapat meresepkan pil aborsi."
              },
              {
                title: "Tidak dapat meresepkan obat-obatan yang masuk ke dalam."
              },
              {
                title: "kategori narkotika."
              },
              {
                title: "Tidak dapat meresepkan obat rambut rontok tertentu."
              },
              {
                title: "Tidak dapat meresepkan obat relaksan otot tertentu"
              },
              {
                title: "Tidak dapat meresepkan obat disfungsi ereksi tertentu."
              },
              {
                title: "Tidak dapat meresepkan obat anti virus tertentu."
              },
              {
                title: "Tidak dapat meresepkan medicinal ganja."
              },
              {
                title: "Tidak dapat meresepkan obat tidur tertentu."
              },
              {
                title:
                  "Tidak dapat meresepkan obat penurun berat badan tertentu."
              },
              {
                title: "Tidak dapat meresepkan obat suntik tertentu."
              },
              {
                title: "Tidak dapat meresepkan kodein atau oksikodon."
              }
            ],
            image: require("@/assets/image/Image 17.png")
          }
        ]
      }
    ]
  })
};
</script>