  <template>
  <v-app-bar app elevate-on-scroll color="#FFFF">
    <v-container>
      <v-toolbar flat dense>
        <!-- logo -->
        <v-toolbar-title class="d-none d-sm-none d-md-flex">
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
        <v-spacer></v-spacer>

        <!-- menu mitra dan konseling -->
        <v-toolbar-items>
          <v-btn class="text-capitalize" text to="/">Home</v-btn>
        </v-toolbar-items>
        <v-toolbar-items>
          <v-menu offset-y transition="scale-transition">
            <template v-slot:activator="{on}">
              <v-btn text v-on="on" class="text-capitalize">Jadilah Mitra kami</v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in items" :key="index">
                <v-list-item-title>
                  <v-btn text class="text-capitalize">{{item.title}}</v-btn>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar-items>
        <v-toolbar-items>
          <v-btn class="ml-2 pl-2 text-capitalize" text to="/help">help</v-btn>
        </v-toolbar-items>

        <v-spacer></v-spacer>

        <!-- menu expand -->
        <v-toolbar-items>
          <v-menu offset-x offset-y left transition="slide-y-transition" v-model="menu">
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" icon>
                <v-icon large>mdi-menu</v-icon>
                <!-- <v-icon v-else>mdi-close</v-icon> -->
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(Menuitem, index) in Menuitem" :key="index">
                <v-list-item-title>
                  <v-btn
                    text
                    block
                    class="justify-start text-capitalize"
                    :to="Menuitem.link"
                  >{{ Menuitem.title }}</v-btn>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar-items>
      </v-toolbar>
    </v-container>
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
      { title: "Cara kerja", link: "/carakerja" },
      { title: "Penyakit yang kami tangani", link: "/yang-kami-tangani" },
      {
        title: "Penyakit yang tidak kami tangani",
        link: "/tidak-kami-tangani"
      },
      { title: "Home health care", link: "/home-health-care" },
      { title: "Media & Berita", link: "/blog" },
      { title: "Awesome promo", link: "/prom" },
      { title: "Lowongan kerja", link: "/loker" },
      { title: "Even kesehatan", link: "/event" }
    ]
  })
};
</script>
