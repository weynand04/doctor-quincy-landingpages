<style scoped>
.mygradient {
  position: relative;
}
.mygradient::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 70px;
  bottom: 0;
  background-image: url("C:/xampp/htdocs/doctorquisy-fe/src/assets/wave.png");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="6" align-self="center">
        <v-card flat class="pl-12 ml-8">
          <v-card-title
            class="title1__widu font-weight-bold black--text text-break"
          >Lorem ipsum dolor sit amet.</v-card-title>
          <v-card-subtitle
            class="subtitle__widu font-weight-medium pt-3"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel in dignissimos, incidunt at sint magnam ipsam provident aut ullam. Expedita, eum laudantium doloremque quo corrupti mollitia quaerat deserunt adipisci natus!</v-card-subtitle>
          <v-card-actions>
            <v-btn
              rounded
              to="/pages/register"
              class="font-weight-bold elevation-1"
              color="#F8B218"
            >LOGIN</v-btn>
            <v-btn
              rounded
              flat
              to="/pages/register"
              class="font-weight-bold elevation-1"
              color="#F8B218"
            >REGISTER</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-img src="@/assets/image/gambar lain-11.png" width="562px" height="506px" contain />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex justify-space-around">
        <v-card v-for="(n, i) in dt_sec5" :key="i" width="350" class="mr-10">
          <v-img :src="n.image" class="mygradient" contain>
            <div class="fill-height mygradient"></div>
          </v-img>
          <v-card-title class="orange--text darken-3 text-left text-break">{{n.title}}</v-card-title>
          <v-card-text class="font-weight-light">{{n.text}}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Help",
  data: () => ({
    dt_sec5: [
      {
        title:
          "Perawatan Kesehatan Yang Berkualitas Dimulai Dengan Dokter Yang Berkualitas",
        text:
          "Kami menjamin kesehatan kamu dari A hingga Z dan Dokter Quincy disini untuk mendukung kesejahteraan kamu seiring waktu. Dari dokter hingga psikolog, kami membantu mendukung perjalanan kesehatan kamu. ",
        image: require("@/assets/Mask Group 4.png")
      },
      {
        title: "Biaya Terjangkau Dan Transparan",
        text:
          "Layanan Doctor Quincy tersedia secara nasional dan internasional, dengan atau tanpa asuransi. Gratis untuk bergabung, dan biaya dokter kunjungan kamu selalu ditampilkan di muka sehingga kamu tahu berapa biayanya, tanpa tagihan kejutan nanti.",
        image: require("@/assets/Image 18.png")
      },
      {
        title: "Biaya Terjangkau Dan Transparan",
        text:
          "Layanan Doctor Quincy tersedia secara nasional dan internasional, dengan atau tanpa asuransi. Gratis untuk bergabung, dan biaya dokter kunjungan kamu selalu ditampilkan di muka sehingga kamu tahu berapa biayanya, tanpa tagihan kejutan nanti. ",
        image: require("@/assets/Image 19.png")
      }
    ]
  })
};
</script>