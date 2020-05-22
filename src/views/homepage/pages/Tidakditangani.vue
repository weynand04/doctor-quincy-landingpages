<template>
  <v-container fluid id="tidakditangani_page">
    <div v-for="(section, index) in sections" :key="index">
      <!-- section #1 -->
      <v-row v-for="(item, index) in section.banner" :key="index">
        <v-col cols="12" md="6" align-self="center">
          <v-container class="ml-12 pl-8">
            <v-card-title
              class="title1__widu font-weight-bold black--text text-break"
            >{{item.judul}}</v-card-title>
            <v-card-subtitle class="text__widu font-weight-medium pt-3">{{item.teks}}</v-card-subtitle>
            <v-card-actions>
              <v-btn rounded class="elevation-0" color="primary">Login</v-btn>
              <v-btn rounded outlined color="primary">Partner</v-btn>
            </v-card-actions>
          </v-container>
        </v-col>
        <v-col cols="12" md="6">
          <v-img :src="item.image" width="562px" height="506px" contain />
        </v-col>
      </v-row>

      <!-- section #2 -->
      <v-row
        v-for="(item, index) in section.contentsatu"
        :key="index"
        justify="center"
        style="background: #FCFCFC"
      >
        <v-container color="transparent" width="85%">
          <v-row>
            <v-col cols="12">
              <p class="text__widu font-weight-medium pt-3">{{item.judul}}</p>
            </v-col>
            <v-col cols="12" md="6">
              <v-img :src="item.image" contain />
            </v-col>
            <v-col cols="12" md="6" class="list__widu">
              <ul v-for="(list, index) in item.list" :key="index">
                <li>{{list.title}}</li>
              </ul>
            </v-col>
            <v-col cols="12">
              <p class="text__widu font-weight-medium pt-3">{{item.teks}}</p>
            </v-col>
            <v-col cols="6" v-for="(list, index) in item.lists" :key="index" class="list__widu">
              <ul>
                <li>{{list.title}}</li>
              </ul>
            </v-col>
          </v-row>
        </v-container>
      </v-row>

      <!-- section #3 -->
      <v-row v-for="(item, index) in section.contentdua" :key="index" justify="center">
        <v-container width="85%">
          <v-row>
            <v-col cols="12">
              <p class="text__widu font-weight-medium pt-3">{{item.judul}}</p>
            </v-col>
            <v-col cols="12" md="6" class="text__widu list__widu">
              <ul v-for="(list, index) in item.list" :key="index">
                <li>{{list.title}}</li>
              </ul>
            </v-col>
            <v-col cols="12" md="6">
              <v-img :src="item.image" contain />
            </v-col>
          </v-row>
        </v-container>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "tidak-di-tangani",
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