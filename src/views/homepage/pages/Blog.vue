<template>
  <div id="blog" tag="section">
    <div v-for="(section, insec) in sections" :key="insec">
      <!-- bannerTop -->
      <div v-for="(item, index) in section.bannerTop" :key="index">
        <Bannertop
          :judul="item.judul"
          :desc="item.teks"
          :image="item.gambar"
          btn="btn"
          btnName="Register"
          left="left"
        >
          <v-btn
            rounded
            color="primary"
            max-width="100"
            height="40"
            class="elevation-0 mx-2"
          >Register</v-btn>
          <v-btn rounded color="primary" max-width="100" height="40" class="elevation-0 mx-2">Login</v-btn>
        </Bannertop>
      </div>

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
              class="float-none float-sm-left float-md-left float-xl-left float-lg-left ma-2"
            ></v-img>
            <template v-for="(data, indat) in item.teks">
              <p :key="indat" class="body-1">{{data.p}}</p>
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
import Bannertop from "../components/base/BannerTop";

export default {
  name: "Help",
  components: {
    ContainerWidu,
    Subjudul,
    Bannertop
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