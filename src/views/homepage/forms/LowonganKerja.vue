<template>
  <ContainerWidu>
    <!-- section #1 -->
    <v-row class="justify-space-around">
      <v-col>
        <p
        class="body-1"
        >Terima kasih atas minat anda pada Doctor Quincy! Kami sedang merekrut orang-orang yang mendorong perubahan. <br>Jika anda seorang pembuat perubahan, silahkan isi formuir di bawah ini:</p>
        <p
        class="body-1"
        >Mari kita bersama-sama menjadikan Indonesia negara yang SEHAT & HEBAT!</p>
      </v-col>
    </v-row>
    <!--  -->
    <v-row>
      <v-col cols="12">
        <base-material-card color="success" inline title="Formulir Lowongan Kerja" class="px-5 py-3">
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
              <v-text-field label="Kecamatan *" outlined class="ml-4" />
            </v-col>
            <v-col cols="4">
              <p />
              <v-text-field label="Kota *" outlined class="ml-4" />
            </v-col>
          </v-row>
          <!-- Section 4 -->
          <v-row no-gutters justify="center">
            <v-col cols="4">
              <p />
              <v-text-field label="Provinsi *" outlined class="ml-4" />
            </v-col>
            <v-col cols="4">
              <p />
              <v-text-field label="Kode Pos *" outlined class="ml-4" />
            </v-col>
          </v-row>
          <!-- Section #5 -->
          <v-row no-gutters justify="center">
            <v-col cols="4">
              <p />
              <v-text-field label="No Telepon 1 *" outlined class="ml-4" />
            </v-col>
            <v-col cols="4">
              <p />
              <v-text-field label="No Telepon 2 *" outlined class="ml-4" />
            </v-col>
          </v-row>
          <!-- section #6 -->
          <v-row>
            <v-col cols="2"></v-col>
            <strong >Posisi Perekrutan Saat ini:</strong>
          </v-row>
          <v-row>
            <v-col cols="2"></v-col>
            <strong>Pilih Area Fungsional </strong><span>(Boleh Lebih Dari Satu) *</span>
          </v-row>
          <!-- Section #7 -->
          <v-row no-gutters justify="center">
            <v-col cols="4">
              <v-checkbox label="Accounting" value class="mt-0 ml-4" />
              <v-checkbox label="Customer Services" value class="mt-0 ml-4" />
              <v-checkbox label="Internet And Social Media" value class="mt-0 ml-4" />
              <v-checkbox label="Internet / Dot Com/ ISP" value class="mt-0 ml-4" />
              <v-checkbox label="IT-Hardware / Networking" value class="mt-0 ml-4" />
              <v-checkbox label="IT-Software / Programming" value class="mt-0 ml-4" />
              <v-checkbox label="IT-Security / Enginner" value class="mt-0 ml-4" />
              <v-checkbox label="Media/Sales / Business Development" value class="mt-0 ml-4" />
              <v-checkbox label="Graphic Designer / Video Editor" value class="mt-0 ml-4" />
            </v-col>

            <v-col cols="4">
             <v-checkbox label="Administration / Operations" value class="mt-0 ml-4" />
             <v-checkbox label="Public Relation / Event Management" value class="mt-0 ml-4" />
             <v-checkbox label="Recruitment And Staff Placement" value class="mt-0 ml-4" />
             <v-checkbox label="Customer Care / Telecaller" value class="mt-0 ml-4" />
             <v-checkbox label="Merketing / Advertising (Digital & Offline)" value class="mt-0 ml-4" />
             <v-checkbox label="Strategi And Planning (Digital & Offline)" value class="mt-0 ml-4" />
             <v-checkbox label="Humman Resource / Training & Development" value class="mt-0 ml-4" />
             <v-checkbox label="Sectarial / Front Office / Computer Operator" value class="mt-0 ml-4" />
             <v-checkbox label="Cartoonist / Animator" value class="mt-0 ml-4" />
           </v-col>
         </v-row>
         <!-- section #8 -->
         <v-row justify="center" no-gutters>
          <v-col cols="12" md="6">
            <p />
            <v-textarea label="Jelaskan Tugas dan Tanggung Jawab Pekerjaan Anda*" outlined></v-textarea>
          </v-col>
        </v-row>
        <!-- Section 9 -->
        <v-row no-gutters justify="center">
          <v-col cols="4">
            <p />
            <v-text-field label="Institusi Pendidikan / Perguruan Tinggi Terakir*" outlined class="ml-4" />
          </v-col>
          <v-col cols="4">
            <p />
            <v-text-field label="Bagaimana Status Pekerjaan Saat Ini?*" outlined class="ml-4" />
          </v-col>
        </v-row>
        <!-- Section 10 -->
        <v-row no-gutters justify="center">
          <v-col cols="4">
            <p />
            <v-text-field label="Sumber (Dari mana mendengar tentang kami ?)*" outlined class="ml-4" />
          </v-col>
          <v-col cols="4">
            <p />
            <v-text-field label="Sumber (Dari mana mendengar tentang kami ?)*" outlined class="ml-4" />
          </v-col>
        </v-row>

        <!-- section #8 -->
        <v-row justify="center" no-gutters>
          <v-col cols="12" md="8">
            <p />
            <v-file-input label="Silahkan Unggah Salinan Kredensial Anda*"></v-file-input>
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