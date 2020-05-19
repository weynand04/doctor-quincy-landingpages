<template>
  <v-container class="error-page" fill-height tag="section">
    <v-row class="text-center" justify="center">
      <v-card height="400px" flat>
        <v-row cols="auto" class="justify-center">
          <v-img src="@/assets/image/artwork-02-cp.png" max-height="20%" max-width="20%" />
          <div class="display-3 mb-5 mt-10">Next Development</div>
        </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PagesOnDev"
};
</script>

<style lang="sass">
.error-page
  h1
    font-size: 12rem
</style>
