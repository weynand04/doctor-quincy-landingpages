<template>
  <ContainerWidu>
      <v-row>
      <v-col cols="12">
        <base-material-card color="success" inline title="Formulir Permintaan Dokter" class="px-5 py-3">
          <v-subheader class="display-1 mt-3">Informasi Pasien</v-subheader>

          <v-form class="pt-1">
            <v-row no-gutters>
            <v-col cols="4">
            <v-text-field label="Nama Lengkap *(harus sesuai yang anda daftarkan di sistem kami)" outlined class="ml-4" />
              </v-col>
            </v-row>

            <v-col cols="4">
              <p />
            <v-text-field label="Lokasi Anda Saat Ini *" outlined class="ml-4" />
            </v-col>

            <v-col cols="4">
            <v-text-field label="Keluhan *(mohon lebih detail)" outlined class="ml-4" />
            </v-col>

            <v-col cols="12" lg="3">
                <v-subheader class="font-weight-bold black--text mt-1">Kepada Siapa Permintaan Dokter Ini *</v-subheader>
                <v-radio-group row class="ml-4 mt-0">
                  <v-radio label="Pria (dewasa)" value="radio-1" />
                  <v-radio label="Wanita (dewasa)" value="radio-2" />
                  <v-radio label="Anak-Anak" value="radio-3" />
                </v-radio-group>
            </v-col>

            <v-col cols="12" lg="3">
                <v-subheader class="font-weight-bold black--text mt-1">Jika Orang Lain, Berikan Detail *</v-subheader>
                <v-radio-group row class="ml-4 mt-0">
                  <v-radio label="Saya Sendiri" value="radio-1" />
                  <v-radio label="Orang Lain" value="radio-2" />
                </v-radio-group>
            </v-col>

            <v-col cols="4">
              <p />
            <v-text-field label="Umur *" outlined class="ml-4" />
            </v-col>

            <v-col cols="4">
              <p />
            <v-text-field label="Alamat / Tempat *(mohon berikan deskripsi alamat lengkap)" outlined class="ml-4" />
            </v-col>

            <v-col cols="4">
              <p />
            <v-text-field label="No. Handphone *" outlined class="ml-4" />
            </v-col>

              <v-col cols="12" lg="3">
               <v-subheader class="font-weight-bold black--text mt-1">Jika Orang Lain, Berikan Detail *</v-subheader>
                <v-radio-group row class="ml-4 mt-0">
                  <v-radio label="Ya" value="radio-1" />
                  <v-radio label="Tidak" value="radio-2" />
                </v-radio-group>
              </v-col>

            <v-col cols="4">
              <p />
            <v-text-field label="Dokter Pilihan (Biarkan kosong jika anda tidak memiliki dokter pilihan)" outlined class="ml-4" />
            </v-col>

            <v-col cols="4">
              <p />
            <v-text-field label="Mohon, Sebutkan Jam Berapa Anda Ingin Dokter Mengunjungi Anda *" outlined class="ml-4" />
            </v-col>  <v-col cols="4">
            <v-btn rounded color="primary" max-width="100" height="40" class="elevation-0 mx-2" type="submit">Submit</v-btn></v-col>
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