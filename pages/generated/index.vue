<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm9
      md9
    >
      <v-container fluid>
        <v-row>
          <h1>AIが描いたドラえもん</h1>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6" offset-sm="3">
            <v-card flat>
              <v-img
                v-if="images.length > 0"
                :src="getRandomImg(images).url"
                :lazy-src="getRandomImg(images).url"
                alt="generated doraemon"
                aspect-ratio="auto"
                max-height="600px"
                class="grey lighten-2"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align-center
                    justify="center"
                  >
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "Images",
  head: () => ({
    title: "AI generated Doraemon"
  }),
  data: () => ({
    images: [],
    api_url: 'https://mochiduko-api.netlify.app/',
  }),
  // asyncDataに書き直す
  methods: {
    getRandomImg(images) {
      console.log(images[Math.floor(Math.random()*images.length)]);
      return images[Math.floor(Math.random()*images.length)]
    },
    async getImage() {
      this.$axios.$get(this.api_url + 'generated_doraemon_illust.json')
        .then(data => {
          console.log(data.data);
          this.images = data.data;
        });
    }
  },
  computed: {},
  created () {
    this.getImage()
  }
}
</script>
