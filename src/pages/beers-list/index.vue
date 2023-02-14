<script setup lang="ts">
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { beerModel, BeerItem } from "@/entities/beer";
import { BeerFilters } from "@/features/beer-filters";

const store = beerModel.useBeers();
const { beers, filteredBeers } = storeToRefs(store);

onMounted(async () => {
  await store.fetchBeers();
});
</script>

<template>
  <ul id="beerList">
    <div v-if="beers.loading">Loading...</div>
    <div v-if="!beers.loading">
      <BeerFilters />
      <BeerItem v-for="beer in filteredBeers" :beer="beer" :key="beer.id" />
    </div>
  </ul>
</template>
