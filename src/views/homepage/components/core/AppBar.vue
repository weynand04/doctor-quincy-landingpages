  <template>
  <v-app-bar app elevate-on-scroll class="v-app-bar v-app-bar-custom">
    <v-spacer></v-spacer>
    <v-toolbar-title class="pr-10">
      <v-img src="@/assets/logo.jpg" class="logo"></v-img>
    </v-toolbar-title>
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn text class="v-btn--flat font-weight-bold v-btn--text">Konseling</v-btn>
        <v-btn text v-on="on" class="v-btn--flat font-weight-bold v-btn--text">
          Be Our partner
          <v-icon icon>mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-speed-dial style="margin-bottom: -1124px;">
      <template v-slot:activator>
        <v-btn color="yellow darken-2" dark fab bottom right>
          <v-icon>mdi-arrow-up-bold</v-icon>
        </v-btn>
      </template>
    </v-speed-dial>
  </v-app-bar>
</template>

<script>
export default {
  name: "HompageCoreAppbar",
  data: () => ({
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" }
    ]
  }),
  methods: {}
};
</script>

<style>
.logo {
  float: left;
  width: 150px;
  text-align: center;
  margin-left: 7px;
  margin-right: 15px;
}

.v-app-bar-custom {
  background-color: white !important;
}
</style>