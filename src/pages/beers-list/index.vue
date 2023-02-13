<script setup lang="ts">
  import { RouterLink } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import { onMounted } from 'vue';
  import { beerModel } from '@/entities/beer';


  const store = beerModel.useBeers()
  const { beers } = storeToRefs(store)

  onMounted(async () => {
  await store.fetchBeers();
});


</script>

<template>
  <main>
    <p v-if="beers.loading">Loading beers...</p>
    <p v-if="beers.list.length > 0" v-for="beer in beers.list" :key="beer.id">
      <RouterLink :to="`/beer/${beer.id}`">{{ beer.name }}</RouterLink>
      <p>{{ beer.first_brewed }}</p>
    </p>
  </main>
</template>