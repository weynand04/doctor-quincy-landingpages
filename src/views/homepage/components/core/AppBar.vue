  <template>
  <v-app-bar app elevate-on-scroll color="#FFFF">
    <v-toolbar flat dense>
      <!-- logo FIX -->
      <div class="ml-12 pl-8">
        <v-toolbar-title class="d-none d-sm-none d-md-flex">
          <a href="/" target="_blank">
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
      </div>
      <v-spacer></v-spacer>

      <!-- menu mitra dan konseling -->
      <v-toolbar-items>
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="#">Be our Partner</v-btn>
        <v-btn text to="#">Help</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>

      <!-- menu expand -->
      <v-toolbar-items>
        <v-menu offset-x offset-y left transition="slide-y-transition" v-model="menu">
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" icon>
              <v-icon>mdi-menu</v-icon>
              <!-- <v-icon v-else>mdi-close</v-icon> -->
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(Menuitem, index) in Menuitem" :key="index">
              <v-list-item-title>
                <a :href="Menuitem.link">{{Menuitem.title}}</a>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
  </v-app-bar>
</template>

<script>
export default {
  name: "HompageCoreAppbar",
  data: () => ({
    Menuitem: [
      { title: "Cara kerja", link: "/carakerja" },
      { title: "Penyakit yang kami tangani", link: "/yang-di-tangani" },
      {
        title: "Penyakit yang tidak kami tangani",
        link: "/tidak-di-tangani"
      },
      { title: "Home health care", link: "/health-care" }
    ]
  })
};
</script>
