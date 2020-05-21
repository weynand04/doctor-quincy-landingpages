<style lang="scss" scoped>
.v-application {
  a.router-link-active {
    color: #f8b218;
  }
  a.router-link-active::after {
    color: #f8b218;
    width: 100%;
  }
  a {
    color: black;
    margin: auto 10px !important;
    font-size: 16px !important;
    text-decoration: none;
  }
  a::after {
    content: "";
    display: block;
    width: 0;
    height: 3px;
    background: #f8b218;
    transition: width 0.3s;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  a:hover {
    color: #f8b218;
  }
  a:focus::after {
    width: 100%;
  }
}
</style>
  <template>
  <v-app-bar app elevate-on-scroll height="50" class="elevation-1" color="#FFF">
    <v-row no-gutters class="d-flex">
      <!-- logo FIX -->
      <v-col cols="4" align-self="center">
        <v-toolbar-title class="d-flex justify-center">
          <v-img src="@/assets/image/logo.svg" max-height="35" contain></v-img>
        </v-toolbar-title>
      </v-col>
      <v-col cols="4" class="hidden-md-and-down d-md-flex justify-center">
        <router-link v-for="n in toolitems" :key="n.title" :to="n.path" exact>{{n.title}}</router-link>
      </v-col>
      <v-spacer />
      <v-col cols="4" align-self="center" class="d-flex justify-end">
        <v-menu offset-x offset-y left transition="slide-y-transition" v-model="expand">
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" @click="expand = !expand" icon>
              <v-icon color="black">{{ expand ? 'mdi-close' : 'mdi-menu' }}</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(Menuitem, index) in Menuitem" :key="index" :class="Menuitem.cls">
              <v-list-item-title>
                <router-link :to="Menuitem.path">{{Menuitem.title}}</router-link>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  name: "HompageCoreAppbar",

  data: () => ({
    expand: false,
    Menuitem: [
      {
        title: "Home",
        path: "/",
        cls: "hidden-md-and-up"
      },
      {
        title: "Be our Partner",
        path: "bepartners",
        cls: "hidden-md-and-up"
      },
      { title: "Help", path: "/*", cls: "hidden-md-and-up" },
      { title: "Cara kerja", path: "/carakerja" },
      { title: "Home health care", path: "/health-care" },
      { title: "Penyakit yang kami tangani", path: "/yang-di-tangani" },
      { title: "Penyakit yang tidak kami tangani", path: "/tidak-di-tangani" },
      { title: "Penyedia layanan kesehatan", path: "/pelankes" },
      { title: "Menjadi penyedia", path: "/beprovider" },
      { title: "Mitra & Investor", path: "/ourpartners" },
      { title: "Media dan Berita", path: "/blog" },
      { title: "Lowongan kerja", path: "/carrer" },
      { title: "Event kesehatan", path: "/event" },
      { title: "Awesome promo", path: "/promo" }
    ],
    toolitems: [
      { path: "/", title: "Home" },
      { path: "/bepartners", title: "Be our Partner" },
      { path: "/help", title: "Help" }
    ]
  }),
  methods: {
    curLoc: function() {
      return window.location.href;
    }
  }
};
</script>
