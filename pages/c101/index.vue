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
            <section>
                <h1 class="text-6rem">Headline</h1>
                <p>Content</p>
            </section>
            <section>
                Section 2
                <carousel perPage=1>
                  <slide>
                    Slide 1 Content
                  </slide>
                  <slide>
                    Slide 2 Content
                  </slide>
                  <slide>
                    Slide 3 Content
                  </slide>
                  <slide>
                    Slide 4 Content
                  </slide>
                  <slide>
                    Slide 5 Content
                  </slide>
                  <slide>
                    Slide 6 Content
                  </slide>
                </carousel>
            </section>
            <section>
                <p>Copyright</p>
            </section>
        </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: "C101",
  head: () => ({
    title: " C101"
  }),
  components: {
    Carousel,
    Slide
  }
}

</script>

<style scoped>
section {
    height: 100vh;
}
</style>