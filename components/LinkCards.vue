<template>
  <v-container fluid id="LinkCards">
    <h1>Links</h1>
    <h3>望月田吾作の各種SNSのアカウントです。</h3>

    <v-row dense class="mb-6">
      <v-col cols="12" sm="8" offset-sm="2">
        <v-container fluid>
          <v-row>
            <v-col
              :cols="card.flex"
              :key="card.title"
              v-for="card in cards"
            >
              <v-hover v-slot="{ hover }">
                <v-card
                  :class="{ 'on-hover': hover }"
                >
                  <a :href="card.url" target="_blank">
                    <v-img
                      class="white--text align-end"
                      :src="card.src"
                      :alt="card.title + 'のアイコン'"
                      :elevation="hover ? 12 : 2"
                      loading="lazy"
                      position='50% 80%'
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.8)"
                      height="250px"
                      aspect-ratio="1"
                    >
                      <v-btn
                        text
                        color="#0288D1"
                      >
                        <h2>{{ card.title }}</h2>
                      </v-btn>
                    </v-img>
                  </a>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-container>
       </v-col>
     </v-row>
   </v-container>
</template>
<script setup>
import { ref } from 'vue';

const config = useRuntimeConfig();
const cards = ref([
  { title: 'pixiv', src: config.public.pixivApiUrl +  '?illust_id=56266129',
  url: 'https://www.pixiv.net/users/415546', flex: 12 },
  { title: 'BOOTH', src: config.public.pixivApiUrl +  '?illust_id=58885220',
  url: 'https://motitago.booth.pm/', flex: 6 },
  { title: 'Skeb',  src: config.public.pixivApiUrl + '?illust_id=86992637',
  url: 'https://skeb.jp/@mt_tg', flex: 6 },
  { title: 'deviantART', src: config.public.pixivApiUrl +  '?illust_id=49554002',
  url: 'https://www.deviantart.com/motttey', flex: 6 },
  { title: 'weibo',  src: config.public.pixivApiUrl + '?illust_id=56608401',
  url: 'https://weibo.com/7310121728', flex: 6 },
  { title: 'X (Twitter)',  src: config.public.pixivApiUrl + '?illust_id=98419049',
  url: 'https://twitter.com/mt_tg', flex: 12 },
  { title: 'Instagram',  src: config.public.pixivApiUrl + '?illust_id=49339965',
  url: 'https://www.instagram.com/tagosaku_mochiduki', flex: 6 },
  { title: 'Blog',  src: config.public.pixivApiUrl + '?illust_id=83975466',
  url: 'http://motttey.hatenablog.com/', flex: 6 },
  { title: 'Threads',  src: config.public.pixivApiUrl + '?illust_id=110011678',
  url: 'https://www.threads.net/@tagosaku_mochiduki', flex: 6 },
  { title: 'Misskey.io',  src: config.public.pixivApiUrl + '?illust_id=98440437',
  url: 'https://misskey.io/@mt_tg', flex: 6 }
]);
</script>

<style scoped>
.v-card {
  transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
 }
</style>
