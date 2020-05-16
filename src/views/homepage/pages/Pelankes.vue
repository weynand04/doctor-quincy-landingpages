<style type="text/css" scoped>
.box {
  width: 350px;
  height: 60px;
  padding: 15px;
  border-radius: 0px;
  background-color: #2a2926;
  box-shadow: 0cm 15px 20px rgba(0, 0, 0, 0.2);
  font-size: 125%;
  color: #fff;
  text-align: center;
}

.boxhead {
  width: 1850px;
  height: 60px;
  padding: 15px;
  border-radius: 0px;
  background-color: rgba(17, 10, 10, 0.897);
  box-shadow: 0cm 15px 20px rgba(0, 0, 0, 0.2);
  font-size: 125%;
  color: #fff;
  text-align: right;
}
</style>
<template>
  <v-container fluid>
    <v-row class="justify-space-around">
      <v-col class="col-md-5 justify-spcace-around col-11">
        <v-img
          src="@/assets/image/pelkes.png"
          style="float:center;"
          width="700"
          height="400"
          contain
        />
      </v-col>
      <v-col class="col-sm-14 col-md-7 align-self-start">
        <v-card flat>
          <v-card-title
            class="display-1 font-weight-bold orange--text darken-3"
          >Dokter Dan Terapis Yang Dapat Kamu & Keluarga Percayai</v-card-title>
          <v-card-text class="body-1 font-weight-bold black--text list__widu">
            <ul type="Disc">
              <li>Meningkatkan perawatan kesehatan</li>
              <li>Memperbaiki & memperbarui akses kesehatan yang lebih baik</li>
              <li>Mengurangi biaya & membantu mencegah rawat inap di rumah sakit</li>
              <li>Jaringan penyedia kami adalah yang terbesar di negara ini dan terdiri dari dokter-dokter yang Bersertifikat dalam Penyakit Dalam, Praktek Keluarga, Dokter Unit Darurat dan Pediatri; serta para profesional kesehatan mental berlisensi dan terlatih yang menyediakan layanan konseling dan perilaku kesehatan.</li>
              <li>Semua penyedia kami menjalani pemeriksaan latar belakang dengan verifikasi sumber primer melalui Data Doktr Nasional (DDN) dan Indonesian Medical Association atau “Ikatan Dokter Indonesia” (IDI) untuk lisensi medis, pelatihan dan pendidikan, sejarah kerja dan sejarah malpraktik.</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="justify-space-around" style="background-color:#F8F8F8;">
      <v-col class="col-md-40 col-sm-20 align-self-start col-11">
        <p class="body-1 black--text">
          Kesehatan untuk Indonesia yang Lebih Baik berpusat pada keyakinan yang membimbing bahwa kesehatan adalah hak asasi manusia. Kami percaya bahwa
          setiap orang pantas mendapat kesempatan and menjalani kehidupan yang lebih sehat. Itulah sebabnya kami terus berinovasi untuk menciptakan akses
          bagi semua dan menumbuhkan komunitas yang lebih sehat. Kami percaya bahwa untuk membuat dampak terbesar kami perlu bermitra dengan dokter-dokter
          lokal dengan niat baik yang secara langsung menangani kebutuhan mendasar dengan melayani di luar klinik atau rumah sakit.
        </p>
        <br />
        <p class="body-1 black--text">
          Kita perlu memahami dan mengatasi akar penyebab kesehatan yang buruk di Negara ini dan menemukan cara holistik bagi masyarakat untuk meningkatkan kesejahteraan secara keseluruhan. Kami membutuhkan keberanian dan fleksibilitas untuk membantu mereka yang paling rentan dan berkomitmen untuk menyediakan perawatan kesehatan yang aman, berkualitas dan terjangkau bagi semua. Bersama-sama, warisan ini adalah dasar bagi komitmen kami untuk
          terus maju
        </p>
      </v-col>
    </v-row>

    <v-row class="justify-space-around" style="background-color:#F2F2F2;">
      <v-col class="col-md-11 align-self-start">
        <p
          class="display-1 font-weight-text orange--text darken-3"
        >Dokter Kami Yang Ramah Dan Walas Asih</p>
      </v-col>
      <v-col class="d-flex justify-space-around">
        <v-card width="350">
          <v-col>
            <v-img src="@/assets/image/laman.png" aspect-ratio="1.5" />
          </v-col>
          <v-card-title
            class="box font-weight-bold orange--text darken-3 text-left text-break"
          >Berpengalaman</v-card-title>
          <v-card-text class="body-1 font-weight-light">
            Pengalaman sangat penting bagi kami.
            Penyedia kami memiliki pengalaman yang
            sudah bertahun-tahun. Karena perawatan
            kesehatan yang berkualitas mulai dengan
            dokter yang berkualitas.
          </v-card-text>
        </v-card>

        <v-card width="350">
          <v-col>
            <v-img src="@/assets/image/lisensi.png" aspect-ratio="1.5" />
          </v-col>
          <v-card-title
            class="box font-weight-bold orange--text darken-3 text-left text-break"
          >Berlisensi dan Bersertifikat</v-card-title>
          <v-card-text class="body-1 font-weight-light">
            Penyedia kami bersertifikat IDI, mereka
            adalah praktisi berlisensi Negara dan
            telah memenuhi persyaratan. Dokter
            kami terus mengukur kompetensi praktek
            dokter di setiap spesialisasinya.
          </v-card-text>
        </v-card>

        <v-card width="350">
          <v-col>
            <v-img src="@/assets/image/keamana.png" aspect-ratio="1.5" />
          </v-col>
          <v-card-title
            class="box font-weight-bold orange--text darken-3 text-left text-break"
          >Perlindungan & Keamanan</v-card-title>
          <v-card-text class="body-1 font-weight-light">
            Informasi pribadi dan riwayat kesehatan
            kamu dilindungi dengan aman. Semua
            pertemuan diarsipkan secara digital dengan
            tingkat keamanan tertinggi dan hanya dapat
            diakses oleh kamu dan dokter-nya.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="justify-space-around">
      <v-col class="col-md-40 col-sm-20 align-self-start col-11">
        <p class="body-1 black--text">
          Penyedia kami adalah di antara para ahli terkemuka negara dalam penyakit jantung, kanker, pengendalian penyakit, cedera, tulang belakang, masalah kulit,
          masalah perilaku, kelebihan berat badan atau kondisi terkait obesitas, diabetes, stroke dan berbagai macam perawatan kesehatan lainnya. Dengan penyedia
          yang tersebar di seluruh negeri, kami memanfaatkan sumber daya dan jangkauan geografis kami untuk membentuk jaringan spesialis terpadu dengan akses
          teknologi terbaru dalam kemajuan medis.
        </p>
        <p class="body-1 black--text">
          Penyedia kami mendukung pendidikan kesehatan masyarakat, berpartisipasi dalam penelitian klinis, dan melayani populasi berisiko individu yang tidak
          diasuransikan atau kurang diasuransikan. Singkatnya, penyedia kami menjawab panggilan masyarakat Indonesia dengan memastikan akses yang lebih besar
          untuk perawatan kesehatan yang terjangkau, berkualitas tinggi dan pengalaman pasien yang luar biasa.
        </p>
      </v-col>
    </v-row>

    <v-row class="justify-space-around" style="background-color:#FFD067;">
      <v-col class="col-md-40 col-sm-20 align-self-start col-11">
        <p class="font-weight-bold text-center darken-3">
          Layanan Kesehatan Harusnya Sederhana, Cepat Dan Tidak Rumit
          <br />Temukan Sendiri Mengapa Begitu Banyak Orang Menyukai Doctor Quincy
        </p>
        <p class="body-1 black--text">
          Layanan kesehatan medis yang tersedia melalui Doctor Quincy disediakan oleh dokter-dokter dan terapis berlisensi yang berpraktik dalam
          kelompok praktik profesional yang dimiliki secara independen dan secara kolektif dikenal sebagai “Doctor Quincy” – ini adalah dokter-dokter
          profesional sesuai permintaan pasien.Praktik profesional ini menyediakan layanan melalui platform Doctor Quincy. PT. Prima Shakti Multi Global,
          tidak dengan sendirinya menyediakan layanan dokter, kesehatan mental, atau penyedia layanan kesehatan lainnya, melainkan melalui tim
          profesional dokter ini kepada pasien di seluruh Indonesia. Kapan Dan Dimana Saja Mereka Membutuhkannya.
        </p>

        <p class="body-1 black--text">
          Doctor Quincy di bawah PT. Prima Shakti Multi Global, adalah layanan kesehatan online untuk perawatan, perawatan dokter di rumah, perawat,
          terapis dan fisioterapi di Indonesia. Dokter, perawat, terapis dan fisioterapi di Doctor Quincy adalah ahli dalam bidang mereka dan memiliki lisensi
          bersertifikat, jangkauan luas di kota-kota di seluruh Indonesia dan siap 24 jam. Pelanggan Doctor Quincy dapat memilih layanan yang sesuai dengan
          anggaran dan kebutuhan mereka.
        </p>

        <p
          class="body-1 red--text text-center"
        >Percayalah Pada Perawatan Di Rumah Hanya Dengan Doctor Quincy Saja</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "pelankes"
};
</script>