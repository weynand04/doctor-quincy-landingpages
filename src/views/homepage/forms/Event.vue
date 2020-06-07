<template>
  <ContainerWidu>
      <v-row>
      <v-col cols="12">
        <base-material-card color="success" inline title="Formulir Even Kesehatan" class="px-5 py-3">
          <v-subheader class="display-1 mt-3">Pendaftaran Even Kesehatan</v-subheader>

          <v-form class="pt-1">
            <v-row no-gutters>
            <v-col cols="4">
              <p />
            <v-text-field label="Nama Depan *" outlined class="ml-4" />
              </v-col>
             <v-col cols="4">
              <p />
            <v-text-field label="Nama Belakang *" outlined class="ml-4" />
            </v-col>
            </v-row>

            <v-col cols="4" lg="3">
               <v-subheader class="ont-weight-bold black--text mt-1">Jenis Kelamin *</v-subheader>
                <v-radio-group column class="ml-4 mt-0">
                  <v-radio label="Ya" value="radio-1" />

                  <v-radio label="Tidak" value="radio-2" />
                </v-radio-group>
              </v-col>

            <v-col cols="4">
              <p />
            <v-text-field label="Berapa Orang Yang Ikut Dengan Anda Dalam Acara Ini ?" outlined class="ml-4" />
            </v-col>

            <v-col cols="4">
              <p />
            <v-text-field label="Alamat *" outlined class="ml-4" />
            </v-col>

            <v-col cols="4">
              <p />
            <v-text-field label="Alamat Email*" outlined class="ml-4" />
            </v-col>

            <v-col cols="4">
              <p />
            <v-text-field label="Nomor Telepon  * (harus nomor telepon yang anda daftarkan di sistem kami)" outlined class="ml-4" />
            </v-col>

            <v-col cols="4">
              <p />
            <v-text-field label="Nama Perusahaan / Organisasi" outlined class="ml-4" />
            </v-col>

              <v-col cols="4" lg="3">
               <v-subheader class="font-weight-bold black--text mt-1">Apakah Anda Pasti Menghadiri Acara Ini ?</v-subheader>
                <v-radio-group column class="ml-4 mt-0">
                  <v-radio label="Ya" value="radio-1" />
                  <v-radio label="Tidak" value="radio-2" />
                  <v-radio label="Mungkin" value="radio-3" />
                </v-radio-group>
              </v-col>

            <v-col cols="4">
              <p />
            <v-text-field label="Mengapa Anda Ingin Menghadiri Acara Ini ?" outlined class="ml-4" />
            </v-col>

            <v-col cols="4">
              <p />
            <v-text-field label="Darimana Anda Tahu Tentang Acara Ini?" outlined class="ml-4" />
            </v-col>

            <v-col cols="12">
             <p class="red--text">
               Dengan menghadiri acara ini, anda memberi kami ijin bebas-royalti, tanpa batas untuk gambar, pribadi, dan rupa anda, dalam rekaman visual apa pun yang akan diambil atau diambil dari anda oleh atau atas nama organisasi kami selama acara berlangsung. Ijin ini mencakup hak untuk mereproduksi, menyimpan, memodifikasi, membuat karya turunan, dan menggunakan konten secara keseluruhan atau sebagian, dengan cara apa pun untuk kegiatan pemasaran dan promosi.
             </p>
            </v-col>

            <v-col cols="4" lg="3">
               <v-subheader class="font-weight-bold black--text mt-1">Saya Setuju Dengan Syarat Dan Ketentuan Di Atas*</v-subheader>
                <v-radio-group column class="ml-4 mt-0">
                  <v-radio label="Ya" value="radio-1" />
                </v-radio-group>
              </v-col>
            <v-btn rounded color="primary" max-width="100" height="40" class="elevation-0 mx-2" type="submit">Submit</v-btn>
          </v-form>
        </base-material-card>
      </v-col>
    </v-row>
 </ContainerWidu>
</template>

<script>
import ContainerWidu from "../components/base/ContainerWidu";

export default {
  name: "formEvenkesehatan",
  components: {
    ContainerWidu
  },
  data: () => ({})
};
</script>