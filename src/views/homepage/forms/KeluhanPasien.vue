<template>
  <ContainerWidu>
    <v-row>
      <v-col cols="12">
        <base-material-card color="success" inline title="Formulir Keluhan Pasien" class="px-5 py-3">
        <!-- <v-subheader class="display-1 mt-3">Pendaftaran Even Kesehatan</v-subheader> -->

        <v-form class="pt-1">
          <v-row no-gutters justify="center">
            <v-col cols="4">
              <p />
              <v-text-field label="Nama Depan *" outlined class="ml-4" />
            </v-col>
            <v-col cols="4">
              <p />
              <v-text-field label="Nama Belakang *" outlined class="ml-4" />
            </v-col>
          </v-row>
          <!-- section #2 -->
          <v-row no-gutters justify="center">
            <v-col cols="8">
              <p />
              <v-text-field label="Alamat Permanent atau Tempat Tinggal Saat Ini *" outlined class="ml-4" />
            </v-col>
          </v-row>
          <!-- Section 3 -->
          <v-row no-gutters justify="center">
            <v-col cols="4">
              <p />
              <v-text-field label="Alamat Email *" outlined class="ml-4" />
            </v-col>
            <v-col cols="4">
              <p />
              <v-text-field label="Nomor Telepon *" outlined class="ml-4" />
            </v-col>
          </v-row>
          <!-- Section 4 -->
          <v-row no-gutters justify="center">
            <v-col cols="4">
              <p />
              <v-text-field type="date" label="Tanggal Pengaduan Ini *" outlined class="ml-4" />
            </v-col>
            <v-col cols="4">
              <p />
              <v-text-field type="date" label="Tanggal Kejadian Yg Dilaporkan *" outlined class="ml-4" />
            </v-col>
          </v-row>
          <!-- section #5 -->
          <v-row justify="center" no-gutters>
            <v-col cols="12" md="6">
              <p />
              <v-textarea label="Silahkan Sebutkan Keluhan Anda Disini *" outlined></v-textarea>
            </v-col>
          </v-row>
          <!-- section #6 -->
          <v-row justify="center" no-gutters>
            <v-col cols="12" md="8">
              <p />
              <v-file-input label="Silahkan Unggah Dokumen/Gambar Pendukung, Jika Ada"></v-file-input>
              <span>File Yang Ditermia: * Hanya Berformat Pdf, Doc, Docx, Txt (Max 1MB)</span>
            </v-col>
          </v-row>
          <!-- section #7 -->
          <v-row no-gutters>
            <v-col cols="9"></v-col>
            <v-btn rounded color="primary" max-width="100" height="40" class="elevation-0 mx-2" type="submit">Submit</v-btn>
          </v-row>
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