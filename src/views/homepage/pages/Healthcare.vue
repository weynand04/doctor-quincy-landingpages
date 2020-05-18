<style lang="scss" scope>
</style>
<template>
  <v-container fluid>
    <div class="list__widu">
      <v-col sm="12" class="d-flex justify-space-around">
        <v-card class="col-10" color="transparent" flat>
          <v-card-title
            class="title__widu font-weight-bold orange--text text-break"
          >Home Health Care</v-card-title>
          <v-card-text class="text__widu black--text text-break">
            <v-img
              src="@/assets/image/svg/gambar lain-02.svg"
              width="320px"
              height="240px"
              class="float-right mb-3"
            />
            <p>
              berbagai layanan perawatan kesehatan yang dapat diberikan di rumah untuk penyakit atau cedera.
              <br />Perawatan kesehatan di rumah ini biasanya lebih murah, lebih nyaman, dan sama efektifnya dengan perawatan yang kamu dapatkan di rumah sakit atau fasilitas perawatan terampil. Perawatan kesehatan di rumah dapat membantu siapa saja, terutama orang lanjut usia, bahkan dengan penyakit atau cedera.
            </p>
            <p>
              Perawatan kesehatan di rumah dapat mencakup terapi okupasi dan fisik, terapi wicara, dan keperawatan yang terampil.
              <br />Dapat membantu anak-anak, orang dewasa atau yang lebih tua dengan kegiatan hidup sehari-hari, seperti mandi, berpakaian, makan, minum obat dan memantau rejimen pengobatan seseorang.
            </p>
            <p>Sangat penting untuk memahami perbedaan antara perawatan kesehatan di rumah dan layanan perawatan di rumah, mungkin terdengar sedikit sama tetapi sama sekali tidak sama. Berikut adalah perbedaannya - perawatan kesehatan di rumah termasuk beberapa layanan perawatan kesehatan di rumah, yang bersifat medis atau berhubungan dengan perawatan kesehatan. Sedangkan layanan perawatan di rumah termasuk pekerjaan rumah pada umumnya seperti membersihkan rumah, memasak, mencuci pakaian, dan pekerjaan rumah tangga lainnya. Tetapi perawatan kesehatan di rumah biasanya melibatkan membantu seseorang untuk pulih dari penyakit atau cedera.</p>
            <br />
            <v-img
              src="@/assets/image/svg/gambar lain-09.svg"
              width="362px"
              height="306px"
              contain
              class="float-right"
            />
            <br />
            <br />
            <div class="box">HOME HEALTH CARE VS HOME CARE</div>
            <div>
              <br />
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
            </div>
            <br />
          </v-card-text>
        </v-card>
      </v-col>
      <!--  -->
      <div class="row" style="background-color: rgb(107, 107, 107);">
        <p
          class="text-center white--text"
        >Home Health Care ini dirancang khusus untuk pasien yang memiliki masalah meninggalkan rumah atau tidak dapat melangsungkan kegiatan sehari-hari dengan sendiri sebagaimana semestinya dan membutuhkan perawatan medis karena cedera atau penyakir.</p>
      </div>
      <div class="row">
        <!---->
        <div class="row justify-space-around">
          <div class="pl-12 ml-8">
            <p class="text-center">
              Profesional perawatan kesehatan di rumah ini sering kali adalah perawat berlisensi, terapis, atau asisten kesehatan rumah.
              <br />Sebagian besar dari mereka bekerja untuk klinik kesehatan umum, rumah sakit, atau lembaga kesehatan masyarakat lainnya, mereka terlatih dan bersertifikat.
            </p>
            <v-row class="justify-space-around">
              <v-col md="4" sm="12" align-self="rigth" class="justify-spcace-around">
                <v-img
                  src="@/assets/image/svg/gambar lain-03.svg"
                  aspect-ratio="1.2"
                  width="497px"
                  height="350px"
                  contain
                />
                <!-- * 344 -->
              </v-col>
              <v-col md="8" sm="12" align-self="start">
                <v-card flat>
                  <v-card-title class="title__widu font-weight-bold orange--text text-break">
                    Contoh Layanan Kesehatan
                    <br />Di Rumah Yang Terampil Meliputi:
                  </v-card-title>
                  <v-card-text class="body-1 font-weight black--text">
                    <ul id="example-1">
                      <li v-for="x in list" :key="x.text">{{ x.text }}</li>
                    </ul>
                    <br />
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>
      <!---->

      <div class="pl-12 ml-10">
        <img
          src="@/assets/image/svg/gambar lain-04.svg"
          style="float:right;"
          width="591"
          height="529"
        />
        <!-- 491 * 429 -->
        <p
          class="title__widu font-weight-bold orange--text text-break"
        >Contoh Apa Yang Harus Dilakukan Staf Kesehatan Di Rumah:</p>
        <ul id="example-1">
          <li v-for="x in list2" :key="x.text">{{ x.text }}</li>
        </ul>
        <br />
        <p
          class="title__widu font-weight-bold orange--text text-break"
        >Pilih Layanan Yang Sesuai Dengan Kebutuhan-mu</p>
        <p>Kamu dapat memilih untuk mengundang perawatan kesehatan di rumah untuk setiap situasi. Kami bangga menawarkan layanan perawatan rumah berkualitas tinggi yang tidak bisa kamu temukan di tempat lain, dan memberikannya dengan belas kasih, keunggulan, dan keandalan. Kami memiliki hak istimewa menyediakan perawatan di rumah untuk ribuan klien di seluruh negeri. Masing-masing klien memiliki kebutuhan unik masing-masing, dan kami telah bekerja dengan masing-masing klien untuk mengembangkan dan memberikan rencana perawatan yang dipersonalisasi berdasarkan tujuan kesehatan mereka.</p>
        <p>Kami bangga dengan semua layanan yang kami tawarkan, tetapi yang lebih penting daripada apa yang kami lakukan adalah bagaimana kami melakukannya. Di Dokter Quincy, kami ingin klien kami dan keluarga mereka merasa diperhatikan dan didukung. Kami ingin mereka dapat mengandalkan kami dan menjalani hidup mereka sepenuhnya, dengan rasa kesejahteraan, martabat, dan kepercayaan. Kami percaya klien kami dan keluarga mereka layak mendapatkan perawatan di rumah yang diberikan dengan belas kasih, keunggulan, dan keandalan.</p>
        <p>Berikut adalah beberapa layanan yang paling umum kami berikan kepada klien kami.</p>
      </div>
      <!--  -->
      <v-row class="justify-space-around">
        <v-col md="4" sm="12" align-self="rigth" class="justify-spcace-around">
          <v-img src="@/assets/image/svg/gambar lain-05.svg" aspect-ratio="1.2" contain />
        </v-col>
        <v-col md="8" sm="12" align-self="start">
          <v-card flat>
            <v-card-title
              class="title__widu font-weight-bold orange--text text-break"
            >Layanan Terapis Perawatan & Persahabatan</v-card-title>
            <v-card-text class="body-1 font-weight black--text">
              <p>Perawatan di rumah dengan kegiatan sehari-hari dapat menghadirkan kemandirian dan ketenangan pikiran, terutama bagi keluarga yang hidup dengan seorang lansia yang menderita penyakit Alzheimer atau Demensia. Perawatan dibagi dalam 3 shift hingga 24 jam sehari.</p>
              <ul id="example-1">
                <li v-for="x in list3" :key="x.text">{{ x.text }}</li>
              </ul>
              <br />
            </v-card-text>
            <v-card-title class="title__widu font-weight-bold orange--text text-break">
              Secara Umum, Tujuan Perawatan Kesehatan Di Rumah Ini Adalah
              <br />Untuk Mengobati Penyakit Atau Cedera. Perawatan Kesehatan Di Rumah Dapat Membantu Kamu Sebagai Berikut:
            </v-card-title>
            <v-card-text class="body-1 font-weight black--text">
              <ul id="example-1">
                <li v-for="x in list1" :key="x.text">{{ x.text }}</li>
              </ul>
              <br />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!--  -->
      <!--  -->
      <div class="pl-12 ml-10">
        <img
          src="@/assets/image/svg/gambar lain-06.svg"
          style="float:right;"
          width="491"
          height="429"
        />
        <p
          class="title__widu font-weight-bold orange--text text-break"
        >Layanan Perawatan Kesehatan Rumah Dengan Perawat Welas Asih</p>
        <p>Perawatan berkelanjutan, penuh kasih sayang untuk individu dengan cedera tulang belakang, cedera otak traumatis, ALS, MS, dan banyak lagi, diberikan setiap 4 jam oleh perawat selama 3 kali sehari.</p>
        <ul id="example-1">
          <li v-for="x in list4" :key="x.text">{{ x.text }}</li>
        </ul>
        <br />
        <p
          class="title__widu font-weight-bold orange--text text-break"
        >Perawatan Kesehatan Rumah Dengan Perhatian Khusus</p>
        <p>Dokter kami mengunjungi rumah kamu untuk perawatan berkelanjutan dan memberikan perawatan yang disesuaikan dengan resep dokter sebelumnya atau setelah meninggalkan rumah sakit. Penyakit, atau cedera untuk membantu kamu merehabilitasi dan mencapai tingkat kemandirian yang optimal — atau secara proaktif mengelola kondisi kesehatan kronis kamu untuk membantu mencegah rawat inap lagi di rumah sakit.</p>
      </div>
      <!--  -->
      <v-row class="justify-space-around">
        <v-col md="4" sm="12" align-self="rigth" class="justify-spcace-around">
          <v-img src="@/assets/image/svg/gambar lain-07.svg" aspect-ratio="1.2" contain />
        </v-col>
        <v-col md="8" sm="12" align-self="start">
          <v-card flat>
            <v-card-text class="body-1 font-weight black--text">
              <ul id="example-1">
                <li v-for="x in list5" :key="x.text">{{ x.text }}</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <!--  -->
      <!--  -->
      <v-row class="justify-space-around">
        <v-col md="4" sm="12" align-self="start">
          <v-card flat>
            <p
              class="title__widu font-weight-bold orange--text text-break"
            >Layanan Home Health Care Termasuk Berikut ini</p>
            <v-card-text class="body-1 font-weight black--text">
              <ul id="example-1">
                <li v-for="x in list6" :key="x.text">{{ x.text }}</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col md="5" sm="12">
          <v-img src="@/assets/image/svg/gambar lain-08.svg" aspect-ratio="1.2" contain />
        </v-col>
      </v-row>
      <!--  -->
      <!--  -->
      <v-row class="col-12">
        <v-img
          src="@/assets/image/Mask Group 9.png"
          aspect-ratio="2.4"
          position="top center"
          gradient="to top right, rgba(147, 158, 229, 0.48), rgba(147, 158, 229, 0.48)"
        >
          <br />
          <br />
          <p align="center" class="title__widu font-weight-bold orange--text text-break">
            Layanan Kesehatan Harusnya Sederhana, Cepat Dan Tidak Rumit
            <br />Temukan Sendiri Mengapa Begitu Banyak Orang Menyukai Doctor Quincy
          </p>
          <v-col cols="12" class="d-flex justify-space-around">
            <p class="text__widu text-center col-6 font-weight-bold black--text">
              Layanan kesehatan medis yang tersedia melalui Doctor Quincy disediakan oleh dokter-dokter berlisensi yang berpraktik dalam kelompok praktik profesional yang dimiliki secara independen dan secara kolektif dikenal sebagai "Dokter Profesional Sesuai Permintaan". Praktik profesional ini menyediakan layanan melalui platform Doctor Quincy. PT. Prima Shakti Multi Global, tidak dengan sendirinya menyediakan layanan dokter, kesehatan mental, atau penyedia layanan kesehatan lainnya.
              <br />
              <br />Doctor Quincy di bawah PT. Prima Shakti Multi Global, adalah layanan kesehatan online untuk perawatan, perawatan dokter di rumah, perawat, terapis dan fisioterapi di Indonesia. Dokter, perawat, terapis dan fisioterapi di Doctor Quincy adalah ahli dalam bidang mereka dan memiliki lisensi bersertifikat, jangkauan luas di kota-kota di seluruh Indonesia dan siap 24 jam. Pelanggan Doctor Quincy dapat memilih layanan yang sesuai dengan anggaran dan kebutuhan mereka.
            </p>
          </v-col>
          <p
            align="center"
            class="font-weight-bold red--text"
          >Percayalah Pada Perawatan Di Rumah Hanya Dengan Doctor Quincy Saja</p>
        </v-img>
      </v-row>
    </div>
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
        text:
          "Memantau penyakit serius dan status pasien yang Kesehatannya Tidak stabil."
      }
    ],
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
      }
    ],
    list2: [
      {
        text: "Periksa apa yang kamu makan dan minum"
      },
      {
        text: "Periksa tekanan darah, suhu, detak jantung, dan pernapasan kamu"
      },
      {
        text:
          "Periksa apakah kamu menggunakan resep dan obat-obatan serta perawatan lainnya dengan baik"
      },
      {
        text: "Tanyakan apakah kamu merasa sakit dan lain-lainnya"
      },
      {
        text: "Periksa keamanan kamu di rumah"
      },
      {
        text:
          "Ajari kamu tentang perawatan yang ada sehingga kamu bisa menjaga diri sendiri"
      },
      {
        text:
          "Koordinasikan perawatan kamuSelalu komunikasi dengan kamu dan dokter kamu secara teratur"
      }
    ],
    list3: [
      {
        text:
          "Membantu mandi, berpakaian, menggunakan toilet, menyikat gigi, menyikat rambut, dan merias wajah"
      },
      {
        text:
          "Membantu memberi makan, menyiapkan makanan, dan pengingat waktu minum obat"
      },
      {
        text:
          "Bantuan ambulan dan pemindahan ke rumah sakit untuk keadaan darurat"
      },
      {
        text: "Menjalankan tugas dengan barang-barang medis"
      },
      {
        text:
          "Bantuan fisik seperti naik/turun dari kursi roda, bantuan berdiri, tidur dan berjalan"
      }
    ],
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
        text:
          "Perawatan kateter Perawatan Ostomi (mis., Kolostomi dan urostomi)"
      },
      {
        text: "Administrasi obat-obatan dan suntikan"
      },
      {
        text: "Pemantauan medis yang ketat dan pelaporan kepada dokter"
      }
    ],
    list5: [
      {
        text: "Kunjungan perawatan untuk kebutuhan medis"
      },
      {
        text: "Kunjungan terapi fisik untuk membantu memulihkan mobilitas"
      },
      {
        text:
          "Kunjungan terapi okupasi untuk meningkatkan kemampuan melakukan aktivitas sehari-hari"
      },
      {
        text: "Kunjungan patologi kanker, wicara, dan lainnya"
      },
      {
        text:
          "Kunjungan dokter untuk membantu kamu dan keluarga terhubung dengan sumber daya masyarakat"
      },
      {
        text:
          "Membantu masalah bicara, suara, kognisi, tenggorokan, masalah menelan dan lainya"
      },
      {
        text:
          "Mempelajari penyakitnya, analisis, dan pengambilan sampel jaringan, sel, dan cairan tubuh"
      }
    ],
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
      }
    ],
    onboarding: 0
  })
};
</script>