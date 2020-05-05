<style lang="scss" scoped>
.v-application {
  a {
    color: black !important;
    margin: auto 10px !important;
    font-size: 15px !important;
    text-decoration: none;
  }
  a:focus,
  a:hover {
    font-size: 14px !important;
    font-weight: bold;
    border-bottom: 3px solid #f8b218;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  a:hover,
  a:focus {
    color: #f8b218 !important;
  }
}
</style>
  <template>
  <v-app-bar app elevate-on-scroll color="#FFFF">
    <v-toolbar flat dense>
      <!-- logo FIX -->
      <div class="ml-12 pl-8">
        <v-toolbar-title class="d-none d-sm-none d-md-flex">
          <v-img
            src="@/assets/logo.jpg"
            class="logo"
            aspect-ratio="1.7"
            height="52"
            width="199"
            contain
          ></v-img>
        </v-toolbar-title>
      </div>
      <v-spacer></v-spacer>

      <!-- menu mitra dan konseling -->
      <v-toolbar-items>
        <router-link to="/">Home</router-link>
        <router-link to="#">
          Be our Partners
          <v-icon small>mdi-chevron-down</v-icon>
        </router-link>
        <router-link to="help">Help</router-link>
      </v-toolbar-items>
      <v-spacer></v-spacer>

      <!-- menu expand FIX -->
      <v-toolbar-items>
        <v-menu offset-x offset-y left transition="slide-y-transition" v-model="show">
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" @click="show = !show" icon>
              <v-icon>{{ show ? 'mdi-close' : 'mdi-menu' }}</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(Menuitem, index) in Menuitem" :key="index">
              <v-list-item-title>
                <router-link :to="Menuitem.link">{{Menuitem.title}}</router-link>
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
    show: false,
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
