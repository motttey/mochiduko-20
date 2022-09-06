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
                Section 1
            </section>
            <section>
                Section 2
            </section>
        </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
    name: "C101",
}

</script>

<style scoped>
section {
    height: 100vh;
}
</style>