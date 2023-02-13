<script setup lang="ts">
import { Routing } from "@/pages";
</script>

<template>
  <header>
    <Routing />
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
