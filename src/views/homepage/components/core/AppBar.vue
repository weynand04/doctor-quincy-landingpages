  <template>
  <v-app-bar app elevate-on-scroll color="white" class="appbar">
    <!-- logo -->
    <v-toolbar-title>
      <a href="/">
        <v-img
          src="@/assets/logo.jpg"
          class="logo"
          aspect-ratio="1.7"
          height="52"
          width="199"
          contain
        ></v-img>
      </a>
    </v-toolbar-title>

    <!-- menu mitra dan Konseling -->
    <v-menu offset-y transition="scale-transition">
      <template v-slot:activator="{ on }">
        <v-btn text class="font-weight-bold" to="help">Konseling</v-btn>
        <v-btn text v-on="on" class="font-weight-bold">
          Jadilah Mitra kami
          <v-icon icon>mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-title class="fucek">
            <a href="#">{{ item.title }}</a>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-spacer />

    <!-- menu expand -->
    <v-menu offset-x offset-y left transition="slide-y-transition" v-model="menu">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" icon>
          <v-icon large>mdi-menu</v-icon>
          <!-- <v-icon v-else>mdi-close</v-icon> -->
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(Menuitem, index) in Menuitem" :key="index">
          <v-list-item-title class="fucek">
            <a>{{ Menuitem.title }}</a>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: "HompageCoreAppbar",
  data: () => ({
    items: [{ title: "Penyedia Layanan" }, { title: "Mitra & Investor" }],
    fav: true,
    menu: false,
    message: false,
    hints: true,
    Menuitem: [
      { title: "Cara kerja" },
      { title: "Penyakit yang kami tangani" },
      { title: "Penyakit yang tidak kami tangani" },
      { title: "Home health care" },
      { title: "Media & Berita" },
      { title: "Awesome promo" },
      { title: "Lowongan kerja" },
      { title: "Even kesehatan" }
    ]
  })
};
</script>

<style>
.appbar {
  padding-left: 65px !important;
  padding-right: 70px !important;
}
.fucek a {
  color: black;
}
</style>