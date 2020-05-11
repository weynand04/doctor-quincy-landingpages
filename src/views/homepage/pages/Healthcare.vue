<style type="text/css">
.tab {
  position:absolute;left:300px
}
li,p{
 font-size:110%;
 color: #6B6B6B;
}
.stly{
  font-weight: bold;
  font-size:125%;
  color: #F8B218;
}
.box{
  width: 500px;
  height: 60px;
  padding: 15px;
  border-radius: 10px;
  background-color: #D32F3B;
  font-size:125%;
  color: #FFF;
  text-align: center;
}
ul {
  list-style: none;
}

ul li::before {
  content: "\2022";
  color: #F8B218;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}
.sleft{
  margin-left: 50px;
}
.srigth{
  margin-right: 200px;
}
.txtxyz {
  opacity: 0.6;
  filter: alpha(opacity=60); /* For IE8 and earlier */
}
</style>
<template>
  <v-container fluid>
    <v-card height="900">
     <v-card flat class="pl-12 ml-8">
      <v-card-title class="display-1 font-weight-bold black--text text-break">
        Home health care
      </v-card-title>
      <v-card-actions>
        <v-row class="justify-space-around">
          <v-col class="justify-space-around">
           <p class="text-sm-left">
             <img src="@/assets/image/gambar lain-02.png" style="float:right;" width="320" height="240"/>
             berbagai layanan perawatan kesehatan yang dapat diberikan di rumah untuk penyakit atau cedera. Perawatan kesehatan di rumah ini biasanya lebih murah, lebih nyaman, dan sama efektifnya dengan perawatan yang kamu dapatkan di rumah sakit atau fasilitas perawatan terampil. Perawatan kesehatan di rumah dapat membantu siapa saja, terutama orang lanjut usia, bahkan dengan penyakit ataucedera.
             <p class="text-sm-left">
              Perawatan kesehatan di rumah dapat mencakup terapi okupasi dan fisik, terapi wicara, dan keperawatan yang terampil. Dapat membantu anak-anak, orang dewasa atau yang lebih tua dengan kegiatan hidup sehari-hari, seperti mandi, berpakaian, makan, minum obat dan memantau rejimen pengobatan seseorang.
              <p class="text-sm-left">
                Sangat penting untuk memahami perbedaan antara perawatan kesehatan di rumah dan layanan perawatan di rumah, mungkin terdengar sedikit sama tetapi sama sekali tidak sama. Berikut adalah perbedaannya - perawatan kesehatan di rumah termasuk beberapa layanan perawatan kesehatan di rumah, yang bersifat medis atau berhubungan dengan perawatan kesehatan. Sedangkan layanan perawatan di rumah termasuk pekerjaan rumah pada umumnya seperti membersihkan rumah, memasak, mencuci pakaian, dan pekerjaan rumah tangga lainnya. Tetapi perawatan kesehatan di rumah biasanya melibatkan membantu seseorang untuk pulih dari penyakit atau cedera.
              </p>
            </v-col>
          </v-row>
        </v-card-actions>
        <div class="box">HOME HEALTH CARE VS HOME CARE</div>
        <img src="@/assets/image/gambar lain-09.png" style="float:right;" width="450" height="350" class="srigth" />
        <div><br>
          <ul type="Disc">
            <li class="tab">Pekerjaan Rumah Umum</li>
            <li>Keperawatan Terampil</li>
            <li class="tab">Membersihkan Rumah</li>
            <li>Kesehatan Rumah</li>
            <li class="tab">Pekjaan Rumah Tangga</li>
            <li>Terapi di Rumah</li>
            <li class="tab">Mencuci Pakaian</li>
            <li>Terapis Bersertifikat</li>
            <li class="tab">Non Medis</li>
            <li>Bersifat Medis</li>
          </ul>

        <!--
          <ul id="example-1">
            <li v-for="x in list" :key="x.text">
              {{ x.text }}
            </li>
        </ul>
      -->
    </div>
  </v-card>
</v-card>
<div class="row" style="background-color: rgb(107, 107, 107);">
  <p class="text-center white--text">
    Home Health Care ini dirancag khusus untuk pasien yang memiliki masalah meninggalkan rumah atau tidak dapat melangsungkan kegiatan sehari-hari dengan sendiri sebagaimana semestinya dan membutuhkan perawatan medis karena cedera atau penyakir.
  </p>
</div>
<div class="row">
 <!---->
 <div class="row justify-space-around">
  <div class="pl-12 ml-8">
    <p class="text-center">
      Profesional perawatan kesehatan di rumah ini sering kali adalah perawat berlisensi, terapis, atau asisten kesehatan rumah. <br>Sebagian besar dari mereka bekerja untuk klinik kesehatan umum, rumah sakit, atau lembaga kesehatan masyarakat lainnya, mereka terlatih dan bersertifikat.
    </p>
  </div>
  <div class="row pl-12 ml-8">
    <div class="justify-spcace-around col-sm-12 col-md-4 col align-self-center">
      <div class="v-responsive v-image">
        <div class="v-responsive__sizer" style="padding-bottom: 50%;">

        </div>

        <img src="@/assets/image/gambar lain-03.png" width="600" height="400" class="sleft" />
      </div>
    </div>
    <div class="col-sm-12 col-md-6 col align-self-start">
      <p class="stly">Contoh Layanan Kesehatan<br>Di Rumah Yang Terampil Meliputi:</p>

      <ul id="example-1">
        <li v-for="x in list" :key="x.text">
          {{ x.text }}
        </li>
      </ul><br>
      <p class="stly">Secara Umum, Tujuan Perawatan Kesehatan Di Rumah Ini Adalah Untuk Mengobati Penyakit Atau Cedera. Perawatan Kesehatan Di Rumah Dapat Membantu Kamu Sebagai Berikut:</p>
      <ul id="example-1">
        <li v-for="x in list1" :key="x.text">
          {{ x.text }}
        </li>
      </ul><br>
    </div>
  </div>
</div>
</div>
<!---->

<div class="pl-12 ml-10">
  <img src="@/assets/image/gambar lain-04.png" style="float:right;" width="600" height="450"/>
  <p class="stly">Contoh Apa Yang Harus Dilakukan Staf Kesehatan Di Rumah:</p>
  <ul id="example-1">
    <li v-for="x in list2" :key="x.text">
      {{ x.text }}
    </li>
  </ul><br>
  <p class="stly">Pilih Layanan Yang Sesuai Dengan Kebutuhan-mu</p>
  <p>Kamu dapat memilih untuk mengundang perawatan kesehatan di rumah untuk setiap situasi. Kami bangga menawarkan layanan perawatan rumah berkualitas tinggi yang tidak bisa kamu temukan di tempat lain, dan memberikannya dengan belas kasih, keunggulan, dan keandalan. Kami memiliki hak istimewa menyediakan perawatan di rumah untuk ribuan klien di seluruh negeri. Masing-masing klien memiliki kebutuhan unik masing-masing, dan kami telah bekerja dengan masing-masing klien untuk mengembangkan dan memberikan rencana perawatan yang dipersonalisasi berdasarkan tujuan kesehatan mereka.</p>
  <p>Kami bangga dengan semua layanan yang kami tawarkan, tetapi yang lebih penting daripada apa yang kami lakukan adalah bagaimana kami melakukannya. Di Dokter Quincy, kami ingin klien kami dan keluarga mereka merasa diperhatikan dan didukung. Kami ingin mereka dapat mengandalkan kami dan menjalani hidup mereka sepenuhnya, dengan rasa kesejahteraan, martabat, dan kepercayaan. Kami percaya klien kami dan keluarga mereka layak mendapatkan perawatan di rumah yang diberikan dengan belas kasih, keunggulan, dan keandalan.</p>
  <p>Berikut adalah beberapa layanan yang paling umum kami berikan kepada klien kami.</p>
</div>
<!--  -->
<div class="row pl-12 ml-8">
  <div class="justify-spcace-around col-sm-12 col-md-4 col align-self-center">
    <div class="v-responsive v-image">
      <div class="v-responsive__sizer" style="padding-bottom: 50%;">
      </div>
      <img src="@/assets/image/gambar lain-05.png" style="float:left;" width="400" height="300"/>
    </div>
  </div>
  <div class="col-sm-12 col-md-6 col align-self-start">
    <p class="stly">Layanan Terapis Perawatan & Persahabatan</p>
    <p>Perawatan di rumah dengan kegiatan sehari-hari dapat menghadirkan kemandirian dan ketenangan pikiran, terutama bagi keluarga yang hidup dengan seorang lansia yang menderita penyakit Alzheimer atau Demensia. Perawatan dibagi dalam 3 shift hingga 24 jam sehari.</p>

    <ul id="example-1">
      <li v-for="x in list3" :key="x.text">
        {{ x.text }}
      </li>
    </ul><br>
  </div>
</div>
<!--  -->
<!--  -->
<div class="pl-12 ml-10">
  <img src="@/assets/image/gambar lain-06.png" style="float:right;" width="500" height="400"/>
  <p class="stly">Layanan Perawatan Kesehatan Rumah Dengan Perawat Welas Asih</p>
  <p>Perawatan berkelanjutan, penuh kasih sayang untuk individu dengan cedera tulang belakang, cedera otak traumatis, ALS, MS, dan banyak lagi, diberikan setiap 4 jam oleh perawat selama 3 kali sehari.</p>
  <ul id="example-1">
    <li v-for="x in list4" :key="x.text">
      {{ x.text }}
    </li>
  </ul><br>
  <p class="stly">Perawatan Kesehatan Rumah Dengan Perhatian Khusus</p>
  <p>Dokter kami mengunjungi rumah kamu untuk perawatan berkelanjutan dan memberikan perawatan yang disesuaikan dengan resep dokter sebelumnya atau setelah meninggalkan rumah sakit. Penyakit, atau cedera untuk membantu kamu merehabilitasi dan mencapai tingkat kemandirian yang optimal — atau secara proaktif mengelola kondisi kesehatan kronis kamu untuk membantu mencegah rawat inap lagi di rumah sakit.</p>
</div>
<!--  -->
<div class="row pl-12 ml-8">
  <div class="justify-spcace-around col-sm-12 col-md-4 col align-self-center">
    <div class="v-responsive v-image">
      <div class="v-responsive__sizer" style="padding-bottom: 50%;">
      </div>
      <img src="@/assets/image/gambar lain-07.png" style="float:left;" width="400" height="300"/>
    </div>
  </div>
  <div class="col-sm-12 col-md-6 col align-self-start">
    <ul id="example-1">
      <li v-for="x in list5" :key="x.text">
        {{ x.text }}
      </li>
    </ul><br>
  </div>
</div>
<!--  -->
<!--  -->
<div class="pl-12 col-md-9 ml-8">
  <img src="@/assets/image/gambar lain-08.png" style="float:right;" width="500" height="300"/>
  <p class="stly">Layanan Home Health Care Termasuk Berikut ini:</p>
  <ul id="example-1">
    <li v-for="x in list6" :key="x.text">
      {{ x.text }}
    </li>
  </ul><br>
</div>
<!--  -->
<!--  -->
<v-row>
  <v-img
  src="@/assets/image/Mask Group 9.png"
  aspect-ratio="2.4"
  position="top center"
  gradient="to top right, rgba(147, 158, 229, 0.48), rgba(147, 158, 229, 0.48)"
  >
  <br><br>
 <p align="center" class="stly">Layanan Kesehatan Harusnya Sederhana, Cepat Dan Tidak Rumit <br>Temukan Sendiri Mengapa Begitu Banyak Orang Menyukai Doctor Quincy</p>
  <v-col cols="12" class="d-flex justify-space-around">
    <p class="text__widu text-center col-6 font-weight-bold black--text ">
     Layanan kesehatan medis yang tersedia melalui Doctor Quincy disediakan oleh dokter-dokter berlisensi yang berpraktik dalam kelompok praktik profesional yang dimiliki secara independen dan secara kolektif dikenal sebagai "Dokter Profesional Sesuai Permintaan". Praktik profesional ini menyediakan layanan melalui platform Doctor Quincy. PT. Prima Shakti Multi Global, tidak dengan sendirinya menyediakan layanan dokter, kesehatan mental, atau penyedia layanan kesehatan lainnya. <br><br>Doctor Quincy di bawah PT. Prima Shakti Multi Global, adalah layanan kesehatan online untuk perawatan, perawatan dokter di rumah, perawat, terapis dan fisioterapi di Indonesia. Dokter, perawat, terapis dan fisioterapi di Doctor Quincy adalah ahli dalam bidang mereka dan memiliki lisensi bersertifikat, jangkauan luas di kota-kota di seluruh Indonesia dan siap 24 jam. Pelanggan Doctor Quincy dapat memilih layanan yang sesuai dengan anggaran dan kebutuhan mereka.
   </p>
 </v-col>
 <p align="center" class="font-weight-bold red--text">
   Percayalah Pada Perawatan Di Rumah Hanya Dengan Doctor Quincy Saja
 </p>
</v-img>
</v-row>
<!--  -->
<!--  -->
</v-container>
</template>

<script>
export default {
  name: "Healthcare",
  data: () => ({
    list: [
    {
      text: "Perawatan luka atau luka bedah"
    },
    {
      text: "Pendidikan pasien dan pengasuh"
    },
    {
      text: "Terapi intravena atau nutrisi"
    },
    {
      text: "Suntikan (jika diperlukan) "
    },
    {
      text: "Memantau penyakit serius dan status pasien yang Kesehatannya Tidak stabil."
    }],
    list1: [
    {
      text: "Cepat sembuh "
    },
    {
      text: "Dapatkan kembali independensi kamu"
    },
    {
      text: "Menjadi swasembada mungkin"
    },
    {
      text: "Menjadi fungsional kembali dan mandiri"
    },
    {
      text: "Pemulihan cepat dari cedera"
    },
    {
      text: "Mampu mengelola diri sendiri dan menikmati hidup."
    }],
    list2: [
    {
      text: "Periksa apa yang kamu makan dan minum"
    },
    {
      text: "Periksa tekanan darah, suhu, detak jantung, dan pernapasan kamu"
    },
    {
      text: "Periksa apakah kamu menggunakan resep dan obat-obatan serta perawatan lainnya dengan baik"
    },
    {
      text: "Tanyakan apakah kamu merasa sakit dan lain-lainnya"
    },
    {
      text: "Periksa keamanan kamu di rumah"
    },
    {
      text: "Ajari kamu tentang perawatan yang ada sehingga kamu bisa menjaga diri sendiri"
    },
    {
      text: "Koordinasikan perawatan kamuSelalu komunikasi dengan kamu dan dokter kamu secara teratur"
    }],
    list3: [
    {
      text: "Membantu mandi, berpakaian, menggunakan toilet, menyikat gigi, menyikat rambut, dan merias wajah"
    },
    {
      text: "Membantu memberi makan, menyiapkan makanan, dan pengingat waktu minum obat"
    },
    {
      text: "Bantuan ambulan dan pemindahan ke rumah sakit untuk keadaan darurat"
    },
    {
      text: "Menjalankan tugas dengan barang-barang medis"
    },
    {
      text: "Bantuan fisik seperti naik/turun dari kursi roda, bantuan berdiri, tidur dan berjalan"
    }],
    list4: [
    {
      text: "Perawatan trakeostomi dan ventilator"
    },
    {
      text: "Perawatan gastrostomi (tabung makanan)"
    },
    {
      text: "Perawatan tabung Nasogastric (N-G)"
    },
    {
      text: "Perawatan kateter Perawatan Ostomi (mis., Kolostomi dan urostomi)"
    },
    {
      text: "Administrasi obat-obatan dan suntikan"
    },
    {
      text: "Pemantauan medis yang ketat dan pelaporan kepada dokter"
    }],
    list5: [
    {
      text: "Kunjungan perawatan untuk kebutuhan medis"
    },
    {
      text: "Kunjungan terapi fisik untuk membantu memulihkan mobilitas"
    },
    {
      text: "Kunjungan terapi okupasi untuk meningkatkan kemampuan melakukan aktivitas sehari-hari"
    },
    {
      text: "Kunjungan patologi kanker, wicara, dan lainnya"
    },
    {
      text: "Kunjungan dokter untuk membantu kamu dan keluarga terhubung dengan sumber daya masyarakat"
    },
    {
      text: "Membantu masalah bicara, suara, kognisi, tenggorokan, masalah menelan dan lainya"
    },
    {
      text: "Mempelajari penyakitnya, analisis, dan pengambilan sampel jaringan, sel, dan cairan tubuh"
    }],
    list6: [
    {
      text: "Kunjungan Dokter Spesialis"
    },
    {
      text: "Kunjungan Dokter Umum"
    },
    {
      text: "Kunjungan Dokter/Terapis Wicara, DLL"
    },
    {
      text: "Kunjungan Perawat Kunjungan Bidan"
    },
    {
      text: "Kunjungan Fisioterapi"
    },
    {
      text: "Pekerjaan Yang Berhubungan Dengan Terapi"
    },
    {
      text: "Ambulans & Evakuasi Medis"
    },
    {
      text: "Peralatan Medis"
    },
    {
      text: "ICU Di Rumah"
    }],
    onboarding: 0
  }),
};
</script>