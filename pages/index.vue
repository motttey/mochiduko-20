<template>
  <v-row
    justify="center"
  >
    <v-col
      cols="12"
      sm="12"
      md="12"
    >
      <name-card />
      <v-divider class="my-4" />
      <!--
      <time-line />
      <v-divider class="my-4" />
      -->
      <gallery />
      <v-divider class="my-4" />
      <works />
      <v-divider class="my-4" />
      <link-cards />
      <v-divider class="my-4" />
      <contact-info />
    </v-col>
  </v-row>
</template>

<script setup>
import NameCard from '~/components/NameCard.vue'
// import TimeLine from '~/components/TimeLine.vue'
import Gallery from '~/components/Gallery.vue'
import Works from '~/components/Works.vue'
import LinkCards from '~/components/LinkCards.vue'
import ContactInfo from '~/components/ContactInfo.vue'
</script>
