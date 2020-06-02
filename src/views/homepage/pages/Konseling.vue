<template>
  <div id="konseling" tag="section">
    <template v-for="section in sections">
      <div :key="section">
        <!-- Component banner top -->
        <div v-for="(item, index) in section.bannerTop" :key="index">
          <Bannertop
            :judul="item.judul"
            :desc="item.teks"
            :image="item.gambar"
            btn="btn"
            btnName="Register"
            left="left"
          ></Bannertop>
        </div>

        <!-- ContentSatu -->
        <ContainerWidu v-for="(item, index) in section.contentSatu" :key="index">
          <v-row>
            <v-col cols="12" class="text-left">
              <Judul :subjudul="item.judul" />
            </v-col>
            <v-col cols="12" md="4">
              <v-img :src="item.image" max-width="500"></v-img>
            </v-col>
            <v-col cols="12" md="8">
              <p class="body-1">{{item.teks}}</p>
            </v-col>
          </v-row>
        </ContainerWidu>

        <!-- ContentDua -->
        <ContainerWidu v-for="(item, index) in section.contentDua" :key="index">
          <v-row>
            <v-col cols="12" class="text-left">
              <Judul :subjudul="item.judul" />
            </v-col>
            <v-col cols="12" md="4">
              <v-img :src="item.image" max-height="160" position="top center" contain></v-img>
            </v-col>
            <v-col cols="12" md="8">
              <p v-for="p in item.teks1" :key="p" class="body-1">{{p.paragraf}}</p>
            </v-col>
            <v-col cols="12">
              <p v-for="p in item.teks2" :key="p" class="body-1">{{p.paragraf}}</p>
            </v-col>
          </v-row>
        </ContainerWidu>

        <!-- ContentTiga -->
        <ContainerWidu v-for="item in section.contentTiga" :key="item">
          <v-row v-for="d in item.list" :key="d">
            <v-col cols="12">
              <Judul :subjudul="d.judul" />
              <p class="body-1">{{d.teks}}</p>
            </v-col>
          </v-row>
        </ContainerWidu>
      </div>
    </template>
    <!-- Component banner bottom -->
    <Bannerbot />
  </div>
</template>

<script>
import Bannerbot from "../components/base/BannerBot";
import ContainerWidu from "../components/base/ContainerWidu";
import Judul from "../components/base/Judul";
import Bannertop from "../components/base/BannerTop";

export default {
  name: "Konseling",
  components: {
    Bannertop,
    ContainerWidu,
    Judul,
    Bannerbot
  },
  data: () => ({
    sections: [
      {
        bannerTop: [
          {
            judul: "KONSELING",
            teks:
              "Ketika berhadapan dengan pergulatan hidup, ada baiknya mengajak seseorang untuk diajak bicara. Baik itu stres, kecemasan, depresi, atau kehilangan seseorang yang kamu cintai, kami dapat membantu. Bicaralah dengan terapis berlisensi dari privasi dan kenyamanan rumah sendiri. INGAT… kamu tidak sendirian, Dokter Quincy ada di sini untukmu!",
            gambar: require("@/assets/image/undraw/undraw_Meditation_o89g.svg")
          }
        ]
      },
      {
        contentSatu: [
          {
            judul:
              "Terbukalah Dan Bicara Dengan Terapis Kami Yang Bersedia Untuk Membantu Kamu",
            image: require("@/assets/image/konseling1.png"),
            teks:
              "Orang-orang mulai lebih terbuka tentang perjuangan pribadi dan masalah kesehatan mental mereka. Masalahnya tampaknya memudar perlahan. Jika kamu merasa perlu terapi, lakukanlah! Tetapkan jadwal dengan salah satu spesialis kami untuk pembicaraan langsung. Mereka ada disini untuk membantu kamu, dan kemungkinan besar itu akan membantu kamu untuk memulai beberapa dialog luar biasa penting."
          }
        ]
      },
      {
        contentDua: [
          {
            judul: "Sejuta Manfaat Dari Konseling Dan Terapi Bicara",
            image: require("@/assets/image/konseling2.png"),
            teks1: [
              {
                paragraf:
                  "Beberapa orang salah memahami apa sebenarnya Terapi Bicara."
              },
              {
                paragraf:
                  "Psikoterapi adalah alat yang menciptakan kesuksesan yang luar biasa. Banyak orang pintar menggunakannya. Dan terapi semacam ini bukan hanya sesuatu yang digunakan oleh orang pintar, akan tetapi sesuatu yang harus semua orang coba."
              },
              {
                paragraf:
                  "Banyak dari kita tumbuh di bawah kesan bahwa hal-hal internal tidak boleh dibahas - yah, itu pepatah lama dan harus disapu di bawah karpet. Menekan emosi dan tidak mengatasi masalah psikologis - terutama rasa sakit atau pelecehan yang serius di masa lalu - dapat berujung pada sejumlah masalah serius."
              }
            ],
            teks2: [
              {
                paragraf:
                  "Konseling seringkali merupakan yang pertama dan biasanya merupakan salah satu senjata terbaik yang kami miliki untuk melawan berbagai masalah psikologis seperti stres, depresi, kesedihan, dan kecemasan. Kamu boleh melakukan segalanya, menjalani kehidupan model, berolahraga dan mendapatkan semua nutrisi yang kamu butuhkan dalam diet, tetapi tidak ada yang bisa menggantikan manfaat yang akan kamu dapatkan dari interaksi manusia yang sebenarnya - itu adalah sumber dukungan yang sunggu-sunggu unik."
              },
              {
                paragraf:
                  "Kesehatan mental sering menjadi hal yang tabu untuk dibicarakan tetapi sekarang banyak orang mulai berbicara tentang kesehatan mental mereka secara terbuka. Tetapi, konseling tidak hanya untuk masalah kesehatan mental, tetapi juga bermanfaat untuk hal-hal seperti masalah hubungan, peristiwa kehidupan yang sulit, dan masalah perilaku lainnya."
              },
              {
                paragraf:
                  "Memiliki seseorang untuk diajak bicara, dan bersedia untuk mendengarkan kamu berbicara tentang perasaan kamu, adalah anugerah yang tak ternilai bagi banyak orang. "
              },
              {
                paragraf:
                  "Seringkali orang menemukan ketenangan dalam berbicara dengan teman atau anggota keluarga, tetapi bagi banyak orang, ini sebenarnya bisa menjadi penghalang untuk secara terbuka dan jujur untuk mendiskusikan masalah pribadi yang terdalam. Banyak orang merasa lebih nyaman berbicara dengan seorang profesional terlatih yang dapat ditawarkan melalui layanan konseling. Konselor pada dasarnya adalah orang asing (maksudnya: dia bukan seorang teman atau anggota keluarga) tetapi seorang profesional terlatih yang siap mendengarkan kamu tanpa penilaian. Mereka berpengalaman dalam terapi perilaku kognitif yang memastikan sesi konseling kamu akan dibimbing untuk membantu dengan penyakit mental sehingga kamu bisa mendapatkan lebih banyak manfaat, dan meningkatkan kualitas hidup kamu."
              },
              {
                paragraf:
                  "Konselor terbiasa membicarakan hampir semua hal atau tabu di bawah matahari, jadi tidak ada yang perlu kamu merasa malu untuk dibicarakan."
              }
            ]
          }
        ]
      },
      {
        contentTiga: [
          {
            list: [
              {
                judul: "1. Efek Terapi Bertahan Selama Jangka Panjang",
                image: require("@/assets/image/konseling2.png"),
                teks:
                  "Manfaat besar terapi bicara adalah efeknya tahan lama. Ini karena Anda tidak hanya mengerjakan hal-hal, tetapi Anda juga mengembangkan alat untuk membantu Anda menangani hal-hal yang akan datang. Perawatan psikodinamik tahan lama selama bertahun-tahun. Keuntungan positif berlanjut dan tumbuh seiring waktu seolah-olah beberapa pekerjaan semakin dikonsolidasikan setelah terapi dihentikan. Ini masuk akal karena ini menunjukkan bahwa kita terus menggunakan lensa reflektif dalam memikirkan, membicarakan, dan mengungkapkan perasaan tentang kehidupan batin kita setelah kita mengakhiri perawatan."
              },
              {
                judul: "2. Gejala Fisik Juga Dapat Diobati",
                image: require("@/assets/image/konseling2.png"),
                teks:
                  "Trauma psikologis, atau bahkan keresahan umum, dapat memicu gejala fisik - depresi serta kecemasan diketahui memiliki efek fisik yang signifikan dan terkadang melemahkan. Terapi dapat membantu masalah ini memudar. Ada beberapa penelitian yang menunjukkan bahwa banyak penyakit fisik membaik ketika seseorang melakukan terapi. Ketika orang tidak mengekspresikan perasaan mereka tetapi menelannya dan membuatnya terkubur didalam diri mereka, maka dengan tidak sadar, tubuh seseorang sering akan bereaksi. Karena itu, ia akan bertindak sebagai barometer yang berbunyi: BAHAYA! Ada yang salah dan perlu perhatian. Itu juga bisa berubah menjadi sakit perut, sakit kepala, masalah tidur, dan bisul dapat menjadi beberapa cara tubuh kita bereaksi terhadap stres dan nyeri psikis."
              },
              {
                judul:
                  "3. Emosi yang Ditekan Akan Kembali Menghantui Anda Di Kemudian Hari",
                image: require("@/assets/image/konseling2.png"),
                teks:
                  "Kelemahan paling serius dari tidak membicarakan hal-hal mungkin adalah perasaan dan trauma yang tidak terekspresikan dapat menumpuk dan meledak kemudian hari. Banyak orang menghindari membicarakan perasaan mereka tentang banyak hal. Tetapi menekan atau mengurangi perasaan seseorang tidak membuat perasaan itu hilang. Jika ada, mereka berlama-lama dan bernanah, hanya meledak ketika komentar yang tidak berbahaya dibuat. Tidak sepenuhnya memproses peristiwa masa lalu yang buruk dan emosi seringkali menciptakan pikiran negatif. Ini adalah alasan kegagalan hubungan baik dengan pasangan, orang tua, anak-anak, rekan kerja, dan bahkan dengan diri sendiri. Jadi mempelajari cara memprosesnya dapat membantu mengubah cara kamu melakukan manuver dengan baik."
              },
              {
                judul: "4. Memberi Kamu Perspektif Baru Tentang Orang Lain",
                image: require("@/assets/image/konseling2.png"),
                teks:
                  "Manfaat luar biasa dari terapi bicara adalah tidak hanya membantu kamu memahami diri sendiri dengan lebih baik, tetapi juga membantu kamu memahami orang lain. Ketika kita menahan pikiran negatif tanpa memprosesnya, maka akan menjadi tertanam sehingga kita melihat dunia melalui lensa itu - dan kita membuat banyak asumsi yang mungkin atau mungkin tidak benar. Kemudian ketika kamu benar-benar melakukan pengecekan realitas dengan bertanya kepada orang lain apa yang mereka pikirkan ketika kamu mengatakan sesuatu, kama akan terkejut mendengar bahwa mereka memiliki pandangan yang sama sekali berbeda."
              },
              {
                judul: "5. Dapat Menghidupkan Otak-mu Kembali",
                image: require("@/assets/image/konseling2.png"),
                teks:
                  "Salah satu hal paling keren tentang terapi bicara adalah terapi ini dapat membawa perubahan pada tingkat otak. Kita tahu bahwa obat dapat mengubah otak yang tertekan, tetapi ada bukti yang sangat meyakinkan bahwa terapi bicara melakukan hal yang sama. Dengan metode pencitraan otak, psikoterapi telah terbukti mengubah aktivitas di medial prefrontal cortex, anterior cingulate cortex, hippocampus, dan amygdala. Area-area ini terlibat dalam pemikiran rujukan-diri. Salah satu metode yang sangat efektif, terapi perilaku kognitif, membantu orang mengidentifikasi pola pikir negatif yang biasa mereka alami - dan menggantinya dengan kebiasaan mental yang baru dan lebih positif dan perubahan otak yang dapat diukur. Pengunaan obat-obatan untuk menangani hal-hal psikologis sangat umum. Tapi itu tidak benar-benar mengatasi apa yang sedang terjadi - justru hanya menutupinya saja. Ini juga menciptakan siklus kecanduan, yang dapat memperburuk masalah sebenarnya. Tapi terapi ini dapat benar-benar membantu kamu dengan cara yang luar biasa. Saat kamu tidak lagi hidup dengan hal-hal negatif di masa lalu, adalah kebebasan sejati. Berbicara dengan lantang dan mengucapkan pikiran dan emosimu secara verbal memungkinkan kamu melihatnya dari sudut pandang baru, bukan hanya di dalam pikiran kamu sendiri. Mengatakannya kepada orang lain juga membuat kamu mempertimbangkan apa pandangan mereka, artinya kamu bisa mendapatkan cara baru untuk memikirkan masalah orang lain juga. Dengan cara yang sama, membuat buku harian atau jurnal adalah bantuan besar bagi banyak orang - melihat masalah kamu ditulis di atas kertas memungkinkan kamu untuk memeriksanya berulang-ulang. Dalam beberapa kasus, orang menemukan bahwa kekhawatiran atau kegelisahan mereka tidak benar-benar didasarkan pada alasan nyata untuk kekhawatiran atau bahwa apa yang mereka pikirkan tidak benar-benar merupakan masalah yang sangat serius. Pada kenyataannya, tidak ada yang perlu dikhawatirkan - ini bisa sangat melegakan hati dan pikiran."
              },
              {
                judul: "6. Tetapkan Waktu Untuk Menghadapi Perasaan-mu",
                image: require("@/assets/image/konseling2.png"),
                teks:
                  "Hari-hari ini orang lebih sibuk daripada sebelumnya, karena perhatian kita ditarik dengan segala hal yang mungkin dari saat kita bangun pagi sampai saat kita tertidur lagi. Ini berarti kita jarang dapat menyediakan waktu untuk duduk dan memproses perasaan kita, atau mengintrospeksi diri kita sendiri. Konseling atau Terapi Bicara berarti kamu cukup meluangkan waktu untuk menghadapi masalah kamu. Ketika kamu punya janji dengan orang lain, kamu berkomitmen untuk mereka selama periode waktu janji itu, yang berarti kamu tidak dapat menunda atau melarikan diri dari menghadapi tanggung jawab itu. Sama halnya, kamu cenderung tidak terganggu ketika kamu menghadapi janji-janji itu karena bagi kamu janji adalah janji. Demikian pula, membiarkan hal-hal yang kamu simpan di dalam bisa menjadi pengalaman yang katarsis, membersihkan diri dari emosi yang terpendam, banyak orang merasa terbebas dari pikiran atau perasaan yang telah mereka pendam. Pelepasan seperti itu sering terasa seperti beban dari pikiran dan memungkinkan orang untuk mulai melepaskan perasaan yang telah mereka pegang di dalam."
              },
              {
                judul:
                  "7. Pasangan Mendapat Manfaat Dari Pihak Ketiga Yang Netral",
                image: require("@/assets/image/konseling2.png"),
                teks:
                  "Orang-orang dalam hubungan sering mendapat manfaat yang sangat positif dari hubungan tertentu atau konseling pasangan. Masalah dalam hubungan bisa menjadi sangat mengakar jika pasangan tidak dapat secara terbuka membahas masalahnya. Meluangkan waktu untuk membicarakan masalah-masalah seperti itu dengan pihak ketiga yang netral berarti kedua belah pihak dapat menyuarakan pandangan mereka sementara ada seseorang disitu untuk menengahi di antara mereka dan membantu mereka berdua untuk melihat argumentasi dari perspektif pihak lain."
              },
              {
                judul: "8. Kamu Tidak Sendirian Dalam Masalahnya",
                image: require("@/assets/image/konseling2.png"),
                teks:
                  "Seringkali orang merasa tidak dapat berbagi perasaan dalam mereka atau masalah mereka dengan keluarga mereka atau orang-orang terdekat mereka. Tapi bagaimana jika ada seseorang yang benar-benar netral, yang ingin mendengarkan kamu dan tidak akan pernah menilai kamu ini dan itu dan tidak akan menghakimi kamu, orang seperti itu dapat memberi kamu kebebasan untuk berbicara tentang hal-hal yang biasanya tidak kamu akui kepada teman dan anggota keluarga. Ini sangat membantu dalam membuat orang merasa mereka tidak sendirian dan tidak terisolasi dalam penderitaan mereka, terutama jika kamu orang yang pemalu dan merasa bahwa itu terlalu tabu dan malu untuk berdiskusi dengan orang-orang yang mengenal kamu."
              },
              {
                judul: "9. Lebih Mudah Mengatasi Kehidupan Sehari-hari",
                image: require("@/assets/image/konseling2.png"),
                teks:
                  "Membagikan dan membongkar emosi-mu melalui konseling dan berbicara berarti kamu dapat melanjutkan sisa hidupmu dan mengatasi masalah hidup dengan mudah, sehingga kamu tidak lagi hidup dalam kesuraman. Berat badan hidup kamu berkurang, dan kamu juga tahu bahwa jika masalan muncul lagi suatu hari nanti, kamu sudah memiliki seseorang terpecaya yang dapat kamu ajak bicara tentang masalah itu, tidak ada yang perlu kamu terlalu khawatirkan sebab kamu sudah menemukan orang yang dapat mendengarkan masalah kamu dan memberikan solusinya.  membebaskan kamu dari kekuatiran tentang masalah hidup sepanjang waktu. Artinya, kamu bisa fokus menjalani hidupmu lagi. Ini sering menghasilkan siklus yang sangat baik, karena dapat fokus pada kehidupan sehari-hari berarti kamu sudah mulai membuat perubahan positif dalam hidupmu, yang pada akhirnya mengangkat suasana hatimu, bahkan kembali ke jalan untuk mewujudkan impianmu dalam hidup."
              },
              {
                judul: "10. Bicarakan Beban Emosional Kamu",
                image: require("@/assets/image/konseling2.png"),
                teks:
                  "Memiliki satu orang yang dapat kamu curhat, siap mendengarkan kamu, siap meringankan masalah kamu dan selalu memikul beban perasaan emosional kamu adalah hal yang sangat luar biasa karena bisa memiliki efek tahan lama pada suasana hati dan perilaku kamu. Sebab masalah yang sudah lampau dapat menjadi akar penyebab semua jenis kekhawatiran. Kamu tidak bisa berjuang sendirian untuk memproses semua masalah emosional kamu, terutama jika masalahnya sangat memengaruhi kehidupan sehari-hari mu, menemui seorang penasihat profesional adalah kesempatan terbaik untuk kamu."
              },
              {
                judul:
                  "11. Terapi Bicara Dapat Memperbaiki Kesejahteraan Fisik-mu",
                image: require("@/assets/image/konseling2.png"),
                teks:
                  "Selalu disarankan untuk memeriksa emosi sendiri dan jika mungkin dengan seseorang yang profesional di bidangnya akan memungkinkan kamu melihat diri sendiri dari luar, sehingga meningkatkan kesadaran diri. Dan sekali diproses, ini dapat memiliki efek yang sangat bermanfaat dalam membuat seseorang merasa lebih damai dengan dirinya sendiri. Hal ini akan meningkatkan rasa percaya diri dan percaya pada orang lain."
              },
              {
                judul:
                  "12. Siapa Saja Yang Bisa Dapat Manfaat Dari Terapi Psikologis?",
                image: require("@/assets/image/konseling2.png"),
                teks:
                  "Siapa pun bisa dapat memperoleh manfaat dari konseling, kadang-kadang ada baiknya berbicara dengan seseorang yang memahami perasaanmu dan bersedia untuk membantu kamu. Orang-orang muda, setengah baya, dan lanjut usia telah diketahui mendapatkan manfaat dari terapi bicara, usia sama sekali tidak masalah. Apakah kamu menderita gangguan makan, gangguan bipolar, mengalami kesulitan dalam pernikahan, mencari konseling dalam hubungan atau hanya membutuhkan seseorang untuk diajak bicara melalui masa sulit, terapi ini bekerja untuk orang lain dan kami sangat yakin itu akan bekerja untuk kamu juga ."
              }
            ]
          }
        ]
      }
    ]
  })
};
</script>