<template>
  <div id="ourpartners" tag="section">
    <!-- section #1 -->
    <div v-for="a in section1" :key="a">
      <Bannertop
      :judul="a.judul"
      :desc="a.text"
      :image="a.img"
      >
      <v-btn rounded to="/mitra" color="primary" class="elevation-0">Mitra</v-btn>
      <v-btn rounded to="/investor" outlined color="primary">Investor</v-btn>
    </Bannertop>
  </div>
  <!-- section #2  -->
  <ContainerWidu>
    <v-row v-for="b in section2" :key="b">
     <v-col cols="12" md="6">
      <v-img :src="b.img" width="549" height="361" transition="scale-transition" contain />
    </v-col>
    <v-col cols="12" md="6" align-self="center">
      <v-card-title
      class="title__widu font-weight-bold orange--text text-break"
      >{{ b.judul }}</v-card-title>
      <v-card-text
      class="body-1 pt-3"
      >{{ b.text1 }}</v-card-text>
      <v-card-text
      class="body-1 pt-3"
      >{{ b.text2 }}</v-card-text>
    </v-col>
  </v-row>
</ContainerWidu>
<!--  -->

<!-- Section #3 -->
<ContainerWidu>
  <v-row class="justify-space-around">
    <v-col>
      <p
      class="body-1"
      >Ada begitu banyak perusahaan besar di Indonesia dengan ribuan karyawan, pegawai negeri sipil, atau seluruh masyarakat pada umumnya - Doctor Quincy dapat mengurangi biaya perawatan kesehatan mereka secara keseluruhan.</p>
      <p
      class="body-1"
      >Kami percaya bahwa ketika karyawan selalu mengambil cuti karena sakit, itu jelas akan berdampak pada semua orang yang dilayani oleh perusahaan itu. Doctor Quincy memperluas akses layanan kesehatan berkualitas tinggi dan terjangkau yang mudah dan nyaman digunakan.</p>
    </v-col>
  </v-row>
</ContainerWidu>
<!--  -->

<!-- Section #4 -->
<ContainerWidu style="background-color:#F2F2F2;">
  <v-row class="justify-space-around">
    <v-col cols="12">
      <Subjudul subjudul="Perawatan Yang Tepat Pada Waktu Yang Tepat!"></Subjudul>
      <p>Karena platform aman Doctor Quincy memastikan bahwa pasien kami akan memiliki akses langsung dan mudah ke salah satu jaringan penyedia telehealth satu-satunya dan terbesar di Indonesia melalui suara, video, dan perangkat seluler.</p>
    </v-col>
    <v-col cols="12">
      <Subjudul subjudul="Mengapa Berinvestasi Dengan Doctor Quincy?"></Subjudul>
      <p>Karena Doctor Quincy menyesuaikan paket investasi investor dengan solusi telehealth berkualitas, sesuai permintaan yang dirancang untuk bekerja bahu-membahu dengan program insentif kesehatan untuk mengurangi biaya perawatan kesehatan keseluruhan pasien dan membiarkan anggota kami mengambil kendali lebih besar atas kesehatan mereka. Hasilnya adalah anggota yang lebih sehat yang lebih produktif.</p>
    </v-col>
  </v-row>
</ContainerWidu>

<!-- section #5 -->
<ContainerWidu style="background-color:#F2F2F2;">
  <v-row v-for="x in list1" :key="x.icon1" class="justify-space-around">
    <v-col cols="12" md="5">
      <v-list-item>
        <v-list-item-avatar size="80">
          <v-img contain :src="x.icon1" transition="scale-transition"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="body-1 text-wrap" v-text="x.text1"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-col>
    <v-col cols="12" md="5">
      <v-list-item>
        <v-list-item-avatar size="80">
          <v-img :src="x.icon2" transition="scale-transition"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="body-1 text-wrap" v-text="x.text2"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-col>
  </v-row>
</ContainerWidu>
<!--  -->

<!-- Section #6 -->
<ContainerWidu>
  <v-row>
    <v-col cols="12" class="d-flex justify-space-around">
      <v-card-text>
        <p
        class="text__widu font-weight-ligh"
        >Doctor Quincy bekerja bahu-membahu dengan pasien untuk mengembangkan solusi perawatan dan strategi kebutuhan kesehatan masing-masing pasien. Pengalaman telehealth yang komprehensif dan dapat disesuaikan untuk mengurangi biaya pengoperasian sambil meningkatkan efisiensi dan kualitas penyedia.</p>
        <p
        class="text__widu font-weight-ligh"
        >Platform dan antarmuka kami yang mudah digunakan memberikan pengalaman yang luarbiasa dan hubungan yang erat antara pasien dan penyedia kami, meningkatkan koordinasi perawatan, mengurangi beban penyedia dan akses perawatan kesehatan yang lebih baik. Dengan menggabungkan pengetahuan kami di industri kesehatan ini dan kekuatan AI (artificial intelligence) yang terus berkembang, hasil akhirnya adalah komunitas yang lebih sehat dengan perawatan yang terkoordinasi dengan baik sehingga terjadi hubungan yang lebih kuat dengan mitra and investor kami.</p>

        <Subjudul subjudul="Membangun Kepercayaan Layanan Kesehatan Di Setiap Komunitas" />
        <p
        class="text__widu font-weight-ligh"
        >Doctor Quincy bertujuan untuk melampaui cara tradisional pasien menerima perawatan medis. Kami terbuka untuk bermitra dengan organisasi lain besar atau kecil, perusahaan dan instansi pemerintahan, dan rumah sakit untuk membantu meningkatkan kualitas layanan kesehatan, mengurangi kasus ruang gawat darurat yang seharunya tidak perlu, mengurangi dan mencegah perawatan yang lebih mahal dan berisiko.</p>
        <p
        class="text__widu font-weight-ligh"
        >Kami hadir untuk semua komunitas, baik dengan populasi besar maupun yang kecil, dan daerah pedesaan yang berisiko. Solusi seluruh perusahaan termasuk buruh pabrik dan pegawai negeri sipil. Meningkatkan dan memperluas layanan kesehatan yang lebih baik bagi semua orang, meningkatkan kepuasan pasien dan mengurangi biaya dan ketidakefisienan.</p>
        <p
        class="text__widu font-weight-ligh"
        >Singkatnya, kami membantu menyediakan layanan kesehatan yang tepat pada waktu yang tepat - kapan dan di mana saja dibutuhkan.</p>
      </v-card-text>
    </v-col>
  </v-row>
</ContainerWidu>
<!--  -->

<!-- section #7  -->
<ContainerWidu style="background-color:#F2F2F2;">
  <v-row class="justify-space-around">
    <v-col cols="12" md="6">
      <v-img src="@/assets/image/svg/new-13.svg" width="549" height="361" transition="scale-transition" contain />
    </v-col>
    <v-col cols="12" md="6" align-self="center">
      <Subjudul
      subjudul="Bergabunglah Dengan Kami Untuk Memperluas Perusahaan Anda Lebih Jauh"
      />
      <div class="list__widu">
        <ul class="body-1 my-2">
          <li v-for="y in list2" :key="y.text">{{y.text}}</li>
        </ul>
      </div>
    </v-col>
  </v-row>
</ContainerWidu>
<!--  -->

<!-- section #8 -->
<ContainerWidu>
  <v-row>
    <v-col cols="12" class="d-flex">
      <template v-for="z in img">
        <v-img :key="z.image" :src="z.image" aspect-ratio="1.5" transition="scale-transition" contain />
      </template>
    </v-col>
    <v-col cols="12" class="d-flex justify-center">
      <v-btn rounded to="/mitra" color="primary" class="elevation-0">Mitra</v-btn>
      <v-btn rounded to="/investor" outlined color="primary">Investor</v-btn>
    </v-col>
  </v-row>
</ContainerWidu>
<!--  -->

<!-- Section #10 -->
<Bannerbot />
<!--  -->
</div>
</template>
<script>
import Bannerbot from "../components/base/BannerBot";
import ContainerWidu from "../components/base/ContainerWidu";
import Subjudul from "../components/base/Judul";
import Bannertop from "../components/base/BannerTop";

export default {
  name: "Ourpartners",
  components: {
    Bannertop,
    Bannerbot,
    ContainerWidu,
    Subjudul
  },
  data: () => ({
    list1: [
    {
      icon1: require("@/assets/image/Group 2684@2x.png"),
      text1:
      "Meningkatkan pelayanan kesehatan yang lebih baik dengan teknologi end-to-end untuk populasi berisiko.",
      icon2: require("@/assets/image/Group 2689@2x.png"),
      text2:
      "Perhatian medis yang baik dan kemampuan untuk mengoptimalkan jadwal antara dokter dan pasien."
    },
    {
      icon1: require("@/assets/image/Group 2685@2x.png"),
      text1:
      "Berfokus pada pasien dan mutu layanan kesehatan yang baik, ini adalah prinsip yang tidak dapat dinegosiasikan.",
      icon2: require("@/assets/image/Group 2690@2x.png"),
      text2:
      "Strategi pemasaran berkelanjutan untuk meningkatkan jangkauan layanan, bahkan ke daerah paling terpencil di seluruh negeri."
    },
    {
      icon1: require("@/assets/image/Group 2693@2x.png"),
      text1:
      "Sistem ini dirancang untuk mengurangi biaya perawatan kesehatan dan merestrukturisasi pelayanan kesehatan.",
      icon2: require("@/assets/image/Group 2691@2x.png"),
      text2:
      "Solusi Telehealth yang disesuaikan dan dapat diukur untuk semua organisasi besar atau kecil. Efisien dan tanpa khawatir."
    },
    {
      icon1: require("@/assets/image/Group 2687@2x.png"),
      text1:
      "Layanan kesehatan kapan saja dimana saja. Dapat mendorong peningkatan produktivitas. Mengurangi absensi kerja.",
      icon2: require("@/assets/image/Group 2692@2x.png"),
      text2:
      "Platform kami membantu mempromosikan dan meningkatkan kesadaran merek mitra dan investor kami, serta loyalitas pelanggan."
    },
    {
      icon1: require("@/assets/image/Group 2688@2x.png"),
      text1:
      "Kunjungan dokter mengurangi biaya 'ER'. Perawatan sesuai permintaan, mudah diakses kapan saja, dimana saja.",
      icon2: require("@/assets/image/Group 2693@2x.png"),
      text2:
      "Platform kami menciptakan dan memberikan pertumbuhan ekonomi baru untuk mitra bisnis dan investor kami."
    }
    ],
    list2: [
    {
      text:
      "Hilangkan hambatan untuk perawatan berkualitas di area yang kurang terlayani"
    },
    {
      text: "Mengatasi kesenjangan kritis dalam perawatan"
    },
    {
      text:
      "Mengurangi biaya dan memperluas pendapatan jarak lintas perusahaan anda"
    },
    {
      text: "Tingkatkan kepuasan pasien dan alur kerja penyedia"
    },
    {
      text:
      "Meningkatkan koordinasi perawatan dan layanan kesehatan berbasis nilai"
    },
    {
      text:
      "Gunakan alat otomatisasi perawatan berbasis AI (artificial intelligence)"
    },
    {
      text:
      "Memastikan perawatan berkualitas tinggi melalui protokol berbasis bukti"
    }
    ],
    img: [
    {
      image: require("@/assets/image/Mask Group 19@2x.png")
    },
    {
      image: require("@/assets/image/Mask Group 20@2x.png")
    },
    {
      image: require("@/assets/image/Mask Group 21@2x.png")
    }
    ],
    section1: [
    {
      judul:
      "Mitra & Investor",
      text:
      "Tujuan dan sasaran utama Doctor Quincy, adalah untuk meningkatkan pemberian layanan kesehatan kepada populasi yang kurang terlayani secara medis di seluruh negeri, membangun dan mempertahankan praktik-praktik di daerah pedesaan yang tidak terlayani",
      img: require("@/assets/image/svg/new-12.svg")
    },
    ],
    section2: [
    {
      judul: "Perawatan Yang Tepat Pada Waktu Yang Tepat!",
      text1: "Teknologi dan strategi online Doctor Quincy memberikan solusi perawatan virtual yang komprehensif, langsung dan ujung-ke-ujung yang memungkinkan organisasi kami menciptakan strategi digital pintu depan digital yang holistik. Sistem ini dirancang untuk mengurangi biaya perawatan kesehatan pasien.",
      text2: "Kami membutuhkan Mitra dan Investor untuk bergabung dengan kami untuk mencapai tujuan ini sepenuhnya. Sistem ini juga dirancang untuk mempercepat pendapatan dan meningkatkan akses sambil menghilangkan hambatan antara pasien dengan memberikan perawatan kesehatan yang sangat baik dan berkelanjutan - Kapan Dan Dimana Saja Mereka Membutuhkannya.",
      img: require("@/assets/image/artwork-02-cp.png")
    }
    ],
  })
};
</script>