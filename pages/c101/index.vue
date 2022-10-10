<template>
  <v-layout
    column
    justify-center
  >
    <v-flex
      xs12
      sm12
      md12
    >
      <v-container>
        <div class="section-bg"></div>
        <section class="section-bg">
          <h1 class="text-6rem">Headline</h1>
          <p>Content</p>
          <div class="title-container">
            <p class="l-title">藤子不二雄合同紙</p>
            <p class="l-subtitle">-もしも hoge hoge が hogehogeしたら-</p>
          </div>
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

h1, h2, h3, p {
  font-family: 'Klee One', cursive;
}

p.l-title {
  font-family: 'Klee One', cursive;
  font-weight: 800;
  font-size: 84px;
}

p.l-subtitle {
  font-family: 'Klee One', cursive;
  font-weight: 600;
  font-size: 48px;
}

section.section-bg {
  background: url("~@/static/perfectblue.jpg") no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  /* filter: blur(1.5px); */
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: darken;
}

.title-container {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
}
</style>