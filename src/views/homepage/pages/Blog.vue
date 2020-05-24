<template>
  <div id="blog" tag="section">
    <div v-for="(section, insec) in sections" :key="insec">
      <!-- bannerTop -->
      <ContainerWidu v-for="(item, index) in section.bannerTop" :key="index">
        <v-row no-gutters class="pl-sm-6 pl-md-2 pl-lg-3">
          <v-col cols="12" md="6" sm="6" lg="6" xl="6" align-self="center">
            <subjudul :judul="item.judul" />
            <p class="body-1 font-weight-medium">{{item.teks}}</p>
            <v-btn rounded max-width="100" height="40" color="primary">Login</v-btn>
            <v-btn rounded outlined max-width="100" height="40" color="primary">Register</v-btn>
          </v-col>
          <v-col cols="12" md="6" sm="6" lg="6" xl="6">
            <v-img
              :src="item.gambar"
              max-height="848"
              max-width="832"
              aspect-ratio="1.2"
              position="center right"
              contain
            />
          </v-col>
        </v-row>
      </ContainerWidu>

      <!-- content bottom -->
      <ContainerWidu
        v-for="(item, incont) in section.ContentSatu"
        :key="incont"
        style="background: #FCFCFC"
      >
        <v-row>
          <v-col>
            <Subjudul :subjudul="item.subjudul" class="mb-2" />
            <v-img
              :src="item.image"
              max-width="300"
              max-height="300"
              position="left center"
              contain
              class="float-none float-sm-left float-md-left float-xl-left float-lg-left mr-2"
            ></v-img>
            <template v-for="(data, indat) in item.teks">
              <p :key="indat" class="body-1 font-weight-medium">{{data.p}}</p>
            </template>
          </v-col>
          <v-pagination :length="5" disabled></v-pagination>
        </v-row>
      </ContainerWidu>
    </div>
  </div>
</template>

<script>
import ContainerWidu from "../components/base/ContainerWidu";
import Subjudul from "../components/base/Judul";

export default {
  name: "Help",
  components: {
    ContainerWidu,
    Subjudul
  },
  data: () => ({
    sections: [
      {
        bannerTop: [
          {
            judul: "Media & Berita",
            teks:
              "Kami Juga memberikan berita dan informasi terbaru seputar kesehatan, agar pengunjung kami tidak ketinggalan berita terbaru",
            gambar: require("@/assets/image/gambar lain-10.png")
          }
        ]
      },
      {
        ContentSatu: [
          {
            subjudul:
              "IT Kesehatan atau Health IT (teknologi informasi kesehatan)",
            image: require("@/assets/image/Image 15.png"),
            teks: [
              {
                p:
                  "IT Kesehatan atau Health IT (teknologi informasi kesehatan) adalah bidang IT yang melibatkan desain, pengembangan, pembuatan, penggunaan dan pemeliharaan sistem informasi untuk industri kesehatan. Sistem informasi perawatan kesehatan otomatis dan interoperable akan terus meningkatkan perawatan medis dan kesehatan masyarakat, menurunkan biaya, meningkatkan efisiensi, mengurangi kesalahan dan meningkatkan kepuasan pasien, sementara juga mengoptimalkan penggantian untuk penyedia layanan kesehatan rawat jalan dan rawat inap."
              },
              {
                p:
                  "Saat ini di Indonesia, pentingnya IT kesehatan belum tercapai karena perubahan kebijakan pemerintah dan kualitas perawatan"
              },
              {
                p:
                  "pasien masih lebih dari mimpi saja. Agar tujuan ini dapat tercapai, perlu ada dorongan, dukungan pemerintah atas insentif bagi semua rumah sakit untuk mengadopsi sistem catatan kesehatan elektronik (EHR)."
              }
            ]
          }
        ]
      }
    ]
  })
};
</script>