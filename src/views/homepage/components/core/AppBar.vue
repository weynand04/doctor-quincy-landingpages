<style lang="scss" scoped>
.v-application {
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
    height: 2px;
    background: #f8b218;
    transition: width 0.3s;
  }
  a:hover::after {
    width: 100%;
    transition: width 0.3s;
  }
}
</style>
  <template>
  <v-app-bar app elevate-on-scroll color="#FFFF">
    <v-toolbar flat dense>
      <!-- logo FIX -->
      <div class="ml-12 pl-12">
        <v-toolbar-title class="logo__title">Dr. Quincy</v-toolbar-title>
      </div>
      <!-- menu mitra dan konseling -->
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <router-link v-for="n in toolitems" :key="n.title" :to="n.path">{{n.title}}</router-link>
      </v-toolbar-items>
      <v-spacer></v-spacer>

      <!-- menu expand FIX -->
      <v-toolbar-items>
        <v-menu offset-x offset-y left transition="slide-y-transition" v-model="expand">
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" @click="expand = !expand" icon>
              <v-icon x-large>{{ expand ? 'mdi-close' : 'mdi-menu' }}</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(Menuitem, index) in Menuitem" :key="index">
              <v-list-item-title>
                <router-link :to="Menuitem.path">{{Menuitem.title}}</router-link>
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
    expand: false,
    Menuitem: [
      { title: "Cara kerja", path: "/carakerja" },
      { title: "Penyakit yang kami tangani", path: "/yang-di-tangani" },
      {
        title: "Penyakit yang tidak kami tangani",
        path: "/tidak-di-tangani"
      },
      { title: "Home health care", path: "/health-care" },
      {
        title: "Penyedia layanan kesehatan",
        path: "/penyedia-lanyanan-kesehatan"
      }
    ],
    toolitems: [
      {
        path: "/",
        title: "Home"
      },
      {
        path: "/#",
        title: "Be our Partner"
      },
      {
        path: "/help",
        title: "Help"
      }
    ]
  })
};
</script>
