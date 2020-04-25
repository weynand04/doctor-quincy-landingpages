  <template>
  <div>
    <v-carousel :show-arrows="true" hide-delimiters>
      <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
import slider1 from "@/assets/image/slider1.jpg";
import slider2 from "@/assets/image/slider2.jpg";
import slider3 from "@/assets/image/slider3.jpg";

export default {
  name: "Slider",
  data() {
    return {
      items: [
        {
          src: slider1
        },
        {
          src: slider2
        },
        {
          src: slider3
        }
      ]
    };
  },
  methods: {}
};
</script>