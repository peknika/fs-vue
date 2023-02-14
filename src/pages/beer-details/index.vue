<script setup lang="ts">
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";

import { beerModel } from "@/entities/beer";

const route = useRoute();
const id = Number(route.params.id);
const store = beerModel.useBeers();

const { currentBeer } = storeToRefs(store);

onMounted(async () => {
  await store.fetchBeerById(id);
});

</script>

<template>
  <div id="beer">
    {{ currentBeer }}
  </div>
</template>
