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
          <h1>コミックス概説</h1>
        </v-row>
        <v-row>
          <v-col>
            <!-- ストーリーの一覧 -->
            <v-row>
              <StoryTable
                v-if="stories"
                :stories="stories"
              />
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script setup>
import StoryTable from '~/components/StoryTable.vue'

useHead({
  title: "Stories"
})

const config = useRuntimeConfig()
const { data: stories, error } = await useFetch(config.public.storiesApiUrl)

if (error.value) {
  console.error('Failed to fetch stories:', error.value)
}
</script>
