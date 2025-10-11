<template>
  <v-row
    justify="center"
  >
    <v-col
      cols="12"
      sm="9"
      md="9"
    >
      <v-container fluid>
        <v-row>
          <h1>リンク集</h1>
        </v-row>
        <v-row>
          <v-col>
            <div
              v-for="(links, category) in categoryLinks"
              v-bind:key="category"
            >
              <v-divider class="my-3"></v-divider>
              <v-row v-if="links.length > 0">
                <h2>{{ category }}</h2>
              </v-row>
              <v-row>
                <LinkTable :links="links" />
              </v-row>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref, computed } from 'vue';
import LinkTable from '~/components/LinkTable.vue'

useHead({
  title: "Links"
})

const config = useRuntimeConfig()
const { data: links, error } = await useFetch(config.public.linksApiUrl)

if (error.value) {
  console.error('Failed to fetch links:', error.value)
}

const categoryLinks = computed(() => {
  const categories = {
    "official": [],
    "fanart": []
  };
  if (links.value) {
    links.value.forEach((link) => {
      if (Object.keys(categories).includes(link["category"])) {
        categories[link["category"]].push(link);
      }
    });
  }
  return categories;
});

const headers = ref([
  {
    text: "タイトル",
    value: "title"
  },
  {
    text: "カテゴリ",
    value: "category"
  },
  {
    text: "紹介",
    value: "description"
  }
]);
</script>
