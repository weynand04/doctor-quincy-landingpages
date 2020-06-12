<template>
  <div id="help" tag="section">
    <!-- Component banner top -->
    <div v-for="(item, index) in bannerTop" :key="index">
      <Bannertop
        :judul="item.judul"
        :desc="item.teks"
        :image="item.gambar"
        btn="btn"
        btnName="Register"
        left="left"
      >
        <v-btn rounded color="primary" max-width="100" height="40" class="elevation-0 mx-2">Register</v-btn>
        <v-btn rounded color="primary" max-width="100" height="40" class="elevation-0 mx-2">Login</v-btn>
      </Bannertop>
    </div>
    <ContainerWidu>
      <v-card flat height="400"></v-card>
    </ContainerWidu>
    <!-- Component banner bottom -->
    <Bannerbot />
  </div>
</template>

<script>
import Bannerbot from "../components/base/BannerBot";
import ContainerWidu from "../components/base/ContainerWidu";
import Bannertop from "../components/base/BannerTop";

export default {
  name: "Help",
  components: {
    Bannertop,
    ContainerWidu,
    Bannerbot
  },
  data: () => ({
    bannerTop: [
      {
        judul: "List form yang sudah jadi",
        teks:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quas quasi cupiditate id? Animi ducimus laborum neque id expedita, possimus tempore, hic nam inventore enim itaque consequatur corrupti commodi quisquam!",
        gambar: require("@/assets/image/gambar lain-11.png")
      }
    ]
  })
};
</script>