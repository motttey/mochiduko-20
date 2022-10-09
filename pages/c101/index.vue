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
            <h1 class="text-6rem">Description</h1>
            <h2>発売日: 2022/XX/XX</h2>
            <p>Content</p>

          </section>
          <section>
            <h1 class="text-6rem">Section 2</h1>
            <carousel 
              :perPage="1"
              :touchDrag="true"
              :navigationEnabled="true"
              @slideclick="handleSlideClick"
            >
              <slide v-for="slideContent in slideContentList" v-bind:key="slideContent.id">
                {{slideContent.content}}
              </slide>
            </carousel>
          </section>
          <section>
            <h1>Copyright</h1>
            <p>関連リンクや詳細など</p>
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
  },
  methods: {
    handleSlideClick: (dataset) => {
      console.log(dataset.index, dataset.name)
    }
  },
  data () {
    return {
      slideContentList: [
        {
          id: 0,
          content: "Slide 1 Content"
        },
        {
          id: 1,
          content: "Slide 2 Content"
        },
        {
          id: 2,
          content: "Slide 3 Content"
        },
        {
          id: 3,
          content: "Slide 4 Content"
        }
      ]
    }
  }
}

</script>

<style scoped>
section {
    height: calc(100vh - 75px);
}
</style>