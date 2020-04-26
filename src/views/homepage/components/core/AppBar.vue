  <template>
  <v-app-bar app elevate-on-scroll class="v-app-bar v-app-bar-custom">
    <v-toolbar-title class="v-toolbar__title">
      <v-img src="@/assets/logo.jpg" class="logo"></v-img>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn to="/" text small>Home</v-btn>
    <v-btn text small>How it works</v-btn>
    <v-btn text small>Media & News</v-btn>
    <v-btn text small>About Us</v-btn>
    <v-btn text small>Contact</v-btn>
    <v-btn text small>Help</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "HompageCoreAppbar",
  data: () => ({}),
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