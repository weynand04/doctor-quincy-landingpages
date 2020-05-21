<template>
  <v-container style="height: 40rem" class="error-page" fill-height tag="section">
    <v-row>
      <v-col cols="12">
        <subjudul
          class="text-uppercase text-center"
          subjudul="Sorry, This page is under Construction"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import subjudul from "../components/base/Judul";

export default {
  name: "UnderConstruct",
  data: () => ({}),
  components: {
    subjudul
  }
};
</script>