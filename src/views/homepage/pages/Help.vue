
<template>
  <v-container id="help" fluid>
    <v-row>
      <v-col cols="12" md="6" align-self="center">
        <v-container class="pl-12 ml-8">
          <v-card-title
            class="title1__widu font-weight-bold black--text text-break"
          >Lorem ipsum dolor sit amet.</v-card-title>
          <v-card-subtitle
            class="text__widu font-weight-medium pt-3"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel in dignissimos, incidunt at sint magnam ipsam provident aut ullam. Expedita, eum laudantium doloremque quo corrupti mollitia quaerat deserunt adipisci natus!</v-card-subtitle>
          <v-card-actions>
            <v-btn rounded color="primary" class="elevation-0">Login</v-btn>
            <v-btn rounded outlined color="primary">Register</v-btn>
          </v-card-actions>
        </v-container>
      </v-col>
      <v-col cols="12" md="6">
        <v-img src="@/assets/image/svg/gambar lain-11.svg" width="562px" height="506px" contain />
      </v-col>
    </v-row>

    <v-row>
      <v-col align-self="center" class="d-flex justify-space-around">
        <v-container>
          <v-row align="center">
            <v-col cols="12" class="d-flex justify-space-around">
              <CardWidu v-for="(n, i) in dt_sec5" :key="i" v-bind:dataCard="n" />
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols="12" class="d-flex justify-space-around">
        <v-container color="transparent" width="88%">
          <v-card-title
            class="title1__widu font-weight-bold black--text text-break"
          >Home Health Care</v-card-title>
          <v-card-text>
            <v-img
              src="@/assets/image/svg/gambar lain-02.svg"
              height="328px"
              width="389px"
              class="float-right"
            />
            <p
              class="title font-weight-regular text-break"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus omnis aliquam excepturi magnam eum incidunt blanditiis, velit impedit recusandae repudiandae beatae quisquam fugiat doloribus dolorum labore dolorem perferendis, similique cupiditate libero quas, et quis. Eos, optio modi! Facere aliquid deserunt amet voluptatum eligendi distinctio optio quis deleniti placeat, modi nam?</p>
            <p
              class="title font-weight-regular text-break"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit officia, asperiores cumque eaque eligendi sit pariatur corporis fugit suscipit aliquid magnam hic excepturi accusamus voluptate! Neque ipsam nostrum sed odio officiis, sequi laudantium dicta laborum sapiente doloremque! Dolores tenetur aut natus ad quos sed alias. Pariatur nemo officiis placeat sequi?</p>
            <p
              class="title font-weight-regular text-break"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam aliquam, laborum tenetur adipisci dolores numquam tempore quos repudiandae libero laudantium atque possimus ipsum aut dolorem cum illum dicta? Omnis nisi beatae minus soluta reprehenderit, unde non, iusto eligendi pariatur porro culpa magni maiores voluptatem est praesentium consectetur magnam, laborum et libero inventore minima. Quas earum officiis blanditiis et? Expedita commodi illum fugit repudiandae eligendi quisquam illo iure. Tempora sed, sunt voluptate quis facilis dolorem saepe aspernatur maxime totam provident similique quod debitis placeat praesentium dolore iusto deleniti pariatur quae molestias architecto nam a eius? Officia est sapiente incidunt minima ea?</p>
          </v-card-text>
        </v-container>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-container color="transparent" width="85%" class="d-flex justify-space-around">
        <v-col cols="12" md="6" class="d-flex justify-space-around">
          <v-container class="d-inline justify-space-around col-12">
            <v-row style="background: red" class="elevation-2">
              <v-col>
                <v-card-title
                  class="title font-weight-bold text-break text-center white--text"
                >HOME HEALTH CARE</v-card-title>
              </v-col>
              <v-col cols="2">
                <v-card-title class="title font-weight-bold text-break text-center white--text">VS</v-card-title>
              </v-col>
              <v-col>
                <v-card-title
                  class="title font-weight-bold text-break text-center white--text"
                >HOME CARE</v-card-title>
              </v-col>
            </v-row>
            <v-spacer />
            <v-row class="list__widu">
              <v-col>
                <ul>
                  <li class="subtitle__widu font-weight-medium">Single-line item</li>
                  <li class="subtitle__widu font-weight-medium">Single-line item</li>
                  <li class="subtitle__widu font-weight-medium">Single-line item</li>
                </ul>
              </v-col>
              <v-col cols="2"></v-col>
              <v-col>
                <ul>
                  <li class="subtitle__widu font-weight-medium">Single-line item</li>
                  <li class="subtitle__widu font-weight-medium">Single-line item</li>
                  <li class="subtitle__widu font-weight-medium">Single-line item</li>
                </ul>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col cols="12" md="6">
          <v-img src="@/assets/image/svg/gambar lain-09.svg" width="562px" height="506px" contain />
        </v-col>
      </v-container>
    </v-row>
  </v-container>
</template>

<script>
import CardWidu from "../components/CardWidu";

export default {
  name: "Help",
  data: () => ({
    dt_sec5: [
      {
        title:
          "Perawatan Kesehatan Yang Berkualitas Dimulai Dengan Dokter Yang Berkualitas",
        text:
          "Kami menjamin kesehatan kamu dari A hingga Z dan Dokter Quincy disini untuk mendukung kesejahteraan kamu seiring waktu. Dari dokter hingga psikolog, kami membantu mendukung perjalanan kesehatan kamu. ",
        image: require("@/assets/image/Mask Group 4.png")
      },
      {
        title: "Biaya Terjangkau Dan Transparan",
        text:
          "Layanan Doctor Quincy tersedia secara nasional dan internasional, dengan atau tanpa asuransi. Gratis untuk bergabung, dan biaya dokter kunjungan kamu selalu ditampilkan di muka sehingga kamu tahu berapa biayanya, tanpa tagihan kejutan nanti.",
        image: require("@/assets/image/Image 18.png")
      },
      {
        title: "Biaya Terjangkau Dan Transparan",
        text:
          "Layanan Doctor Quincy tersedia secara nasional dan internasional, dengan atau tanpa asuransi. Gratis untuk bergabung, dan biaya dokter kunjungan kamu selalu ditampilkan di muka sehingga kamu tahu berapa biayanya, tanpa tagihan kejutan nanti. ",
        image: require("@/assets/image/Image 19.png")
      }
    ]
  }),
  components: {
    CardWidu
  }
};
</script>