<template>
  <v-container id="tidakditangani_page" fluid>
    <!-- section #1 -->
    <v-row>
      <v-col cols="12" md="6" align-self="center">
        <v-card flat class="ml-12 pl-8">
          <v-card-title
            class="title1__widu font-weight-bold black--text text-break"
          >Kondisi yang tidak Kami Tangani</v-card-title>
          <v-card-subtitle
            class="text__widu font-weight-medium pt-3"
          >Ini adalah kondisi yang saat ini tidak ditangani oleh penyedia kami. Kami menyarankan agar langsung ke rumah sakit terdekat, atau mengunjungi pusat perawatan gawat darurat terdekat, tergantung pada tingkat keparahan masalahnya.</v-card-subtitle>
          <v-card-actions>
            <v-btn rounded class="font-weight-bold" color="#F8B218">LOGIN</v-btn>
            <v-btn rounded class="font-weight-bold" color="#F8B218">REGISTER</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-img src="@/assets/image/gambar lain-11.png" width="562px" height="506px" contain />
      </v-col>
    </v-row>

    <!-- section #2 -->
    <v-row justify="center" style="background: #FCFCFC">
      <v-card color="transparent" flat width="85%">
        <v-row>
          <v-col cols="12">
            <p
              class="text__widu font-weight-medium pt-3"
            >Ini adalah kondisi yang saat ini tidak ditangani oleh penyedia kami. Kami menyarankan agar langsung ke rumah sakit terdekat, atau mengunjungi pusat perawatan gawat darurat terdekat, tergantung pada tingkat keparahan masalahnya.</p>
          </v-col>
          <v-col cols="12" md="6">
            <v-img src="@/assets/image/Mask Group 13.png" contain />
          </v-col>
          <v-col cols="12" md="6">
            <v-list color="transparent">
              <v-list-item-group>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-circle</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Single Link Option</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>
          <v-col cols="12">
            <p
              class="text__widu font-weight-medium pt-3"
            >Baik orang dewasa maupun anak-anak yang menderita demam berdarah menular harus segera dibawa ke rumah sakit terdekat. Anak-anak di bawah 12 tahun yang menderita sakit telinga dapat diobati jika sakitnya disebabkan oleh virus (mis. Pilek, alergi, atau infeksi eksternal). Jika ada kemungkinan besar itu adalah infeksi dalam bakteri yang membutuhkan antibiotic tertentu, diharuskan segera dibawa ke rumah sakit terdekat.</p>
          </v-col>
          <v-col cols="6">
            <v-list color="transparent">
              <v-list-item-group>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-circle</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Single Link Option</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>
          <v-col cols="6">
            <v-list color="transparent">
              <v-list-item-group>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-circle</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Single Link Option</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>
        </v-row>
      </v-card>
    </v-row>

    <!-- section #3 -->
    <v-row justify="center">
      <v-card flat width="85%">
        <v-row>
          <v-col cols="12">
            <p
              class="text__widu font-weight-medium pt-3"
            >Walaupun dokter kami dapat mengobati bahkan penyakit berat, masih ada beberapa kondisi yang tidak dapat mereka lakukan. Dalam kasus seperti itu, kami dengan hormat menyarankan kamu untuk pergi ke rumah sakit saja.</p>
          </v-col>
          <v-col cols="12" md="6">
            <v-list>
              <v-list-item-group>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-circle</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Single Link Option</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>
          <v-col cols="12" md="6">
            <v-img src="@/assets/image/Image 17.png" contain />
          </v-col>
        </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "tidak-di-tangani"
};
</script>