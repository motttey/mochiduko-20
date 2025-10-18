<template>
  <v-app dark class="d-flex flex-column">
    <v-app-bar
      :clipped-left="clipped"
      color="teal-darken-6"
      :image="img_source"
    >
      <template v-slot:image>
        <v-img
          gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-toolbar-title
        class="title font-weight-bold"
        @click="$router.push('/')"
        style="cursor:pointer;"
      >
        {{ title }}
      </v-toolbar-title>

      <v-spacer />

      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>fas fa-bars</v-icon>
      </v-btn>

    </v-app-bar>

    <v-main class="flex-grow-1">
      <div class="bg" />
      <div class="bg-img" />
      <v-container>
        <slot />
      </v-container>
    </v-main>

    <v-navigation-drawer
      v-model="rightDrawer"
      location="right"
      fixed
      temporary
      theme="dark"
      image="/drawer-bg.webp"
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="'to' + i.toString()"
          :href="item.to"
          link
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
        <v-list-item
          v-for="(item, i) in linkItems"
          :key="'href' + i.toString()"
          :href="item.href"
          link
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-footer
      :absolute="!fixed"
      app
      color="rgba(2,136,209,.5)"
    >
      <span>&copy; {{ new Date().getFullYear() }} Tagosaku Mochiduki</span>
    </v-footer>
  </v-app>
</template>

<style>
  @media (max-width: 600px) {
      .bg-img {
        background-size: 125px auto;
      }
  }

  .bg-img {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-position: 100% 100%;
    background-size: 250px auto;
    background-image: url("/site-bg.webp");
    background-repeat: no-repeat;
    filter: blur(1.5px);
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: darken;
    z-index: -1;
  }

  .bg {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-size: cover;
    background:
      linear-gradient(120deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),
      linear-gradient(185deg, rgba(0, 40, 141, 0.5), rgba(255, 255, 255, 0)),
      linear-gradient(340deg, rgba(0, 91, 140, 0.5), rgba(255, 255, 255, 0));
  }

  a, a:hover {
    text-decoration: none;
  }

  .v-application .title {
      font-family: "M Plus 1p" !important;
      font-weight: bold;
  }

  .theme--dark.v-data-table {
    background-color: rgba(30, 30, 30, 0.5);
  }

  .gradient-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(to top right, rgba(2,136,209,.7), rgba(0,0,0,1.0));
  }
</style>

<script setup>
import { ref } from 'vue'

const clipped = ref(false)
const fixed = ref(false)
const items = ref([
  { title: 'Top', to: '#NameCard' },
  { title: 'Gallery', to: '#Gallery' },
  { title: 'Works', to: '#Works' },
  { title: 'Link', to: '#LinkCards' }
])
const linkItems = ref([
  { title: 'Links (external)', href: '/link' },
  { title: 'Stories', href: '/stories' },
  { title: 'Chat', href: '/chat' },
  { title: 'AI generated', href: '/generated' }
])
const rightDrawer = ref(false)
const title = ref('モチヅ庫')
const img_source = ref('http://embed.pixiv.net/decorate.php?illust_id=76601058')

useHead({
  title: "Top"
})
</script>
