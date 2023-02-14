<script setup lang="ts">
import { beerModel } from "@/entities/beer";

const store = beerModel.useBeers();
const props = defineProps<{ id: number }>();

const onClick = () => {
  console.log("onClick", props.id);
  store.likeBeer(props.id);
};
</script>

<template>
  <div class="like">
    <button @click="onClick">Like</button>
  </div>
</template>
