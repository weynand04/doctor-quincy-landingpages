  <template>
  <v-app-bar app color="white" elevate-on-scroll>
    <v-spacer></v-spacer>
    <v-toolbar-title class="v-toolbar__title">
      <Strong>Dr. Quicy</Strong>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn to="/" text small>Home</v-btn>
    <v-btn text small>How it works</v-btn>
    <v-btn text small>Media & News</v-btn>
    <v-btn to="/about" text small>About Us</v-btn>
    <v-btn text small>Contact</v-btn>
    <v-btn to="/help" text small>Help</v-btn>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
export default {
  name: "HompageCoreAppbar",
  data: () => ({}),
  methods: {}
};
</script>