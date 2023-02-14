<script setup lang="ts">
import { BeerLikes } from "@/features/beer-likes";
import type { Beer } from "@/shared/api";
import { RouterLink } from "vue-router";

const props = defineProps<{
  beer: Beer;
}>();
</script>

<template>
  <div id="beerItem">
    <RouterLink :to="{ path: `/beer/${props.beer.id}` }">
      <p>{{ props.beer.name }}</p>
      <p>{{ beer.first_brewed }}</p></RouterLink
    >
    <BeerLikes :id="props.beer.id" />
  </div>
</template>
