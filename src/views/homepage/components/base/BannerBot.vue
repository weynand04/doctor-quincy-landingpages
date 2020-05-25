<template>
  <div id="bannerbot">
    <ContainerWidu v-for="(item, index) in bannerbot" :key="index" class="bg-img">
      <v-row no-gutters justify="center">
        <v-col cols="12" md="10">
          <Subjudul :subjudul="item.subjudul" class="text-center my-4" />
          <template v-for="(data, index) in item.teks">
            <p :key="index" :class="data.cls">{{data.p}}</p>
          </template>
        </v-col>
      </v-row>
    </ContainerWidu>
  </div>
</template>
<script>
import ContainerWidu from "./ContainerWidu";
import Subjudul from "./Judul";

export default {
  name: "bannerbot",
  components: {
    ContainerWidu,
    Subjudul
  },
  data: () => ({
    bannerbot: [
      {
        subjudul:
          "Layanan Kesehatan Harusnya Sederhana, Cepat Dan Tidak Rumit Temukan Sendiri Mengapa Begitu Banyak Orang Menyukai Doctor Quincy",
        teks: [
          {
            p:
              "Layanan kesehatan medis yang tersedia melalui Doctor Quincy disediakan oleh dokter-dokter berlisensi yang berpraktik dalam kelompok praktik profesional yang dimiliki secara independen dan secara kolektif dikenal sebagai Dokter Profesional Sesuai Permintaan Praktik profesional ini menyediakan layanan melalui platform Doctor Quincy.",
            cls: "body-1"
          },
          {
            p:
              "PT. Prima Shakti Multi Global, tidak dengan sendirinya menyediakan layanan dokter, kesehatan mental, atau penyedia layanan kesehatan lainnya. Doctor Quincy di bawah PT. Prima Shakti Multi Global, adalah layanan kesehatan online untuk perawatan, perawatan dokter di rumah, perawat, terapis dan fisioterapi di Indonesia. Dokter, perawat, terapis dan fisioterapi di Doctor Quincy adalah ahli dalam bidang mereka dan memiliki lisensi bersertifikat, jangkauan luas di kota-kota di seluruh Indonesia dan siap 24 jam. Pelanggan Doctor Quincy dapat memilih layanan yang sesuai dengan anggaran dan kebutuhan mereka.",
            cls: "body-1"
          },
          {
            p:
              "Percayalah Pada Perawatan Di Rumah Hanya Dengan Doctor Quincy Saja",
            cls: "title font-weight-bold red--text text-center"
          }
        ]
      }
    ]
  })
};
</script>
<style lang="scss">
.bg-img {
  background-image: url("C:/xampp/htdocs/doctorquisy-fe/src/assets/image/Image 14.png"),
    linear-gradient(rgba(230, 172, 47, 0.178), rgba(216, 160, 40, 0.301));
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 20%;
}
</style>