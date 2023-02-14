<script setup lang="ts">
import { beerModel } from "@/entities/beer";
import { ABV } from "@/entities/beer/model";
import { storeToRefs } from "pinia";

const store = beerModel.useBeers();
const { currenFilter } = storeToRefs(store);

const onChange = (e: Event) => {
  const newValue = (e.target as HTMLInputElement).value as ABV;
  store.setFilter(newValue);
};
</script>

<template>
  <div class="custom-control custom-radio">
    <input
      type="radio"
      name="filter"
      id="all"
      class="custom-control-input"
      :checked="currenFilter === ABV.All"
      :value="ABV.All"
      @change="onChange"
    />
    <label class="custom-control-label" for="all">All</label>
  </div>
  <div class="custom-control custom-radio">
    <input
      type="radio"
      name="filter"
      id="light"
      class="custom-control-input"
      :checked="currenFilter === ABV.Light"
      :value="ABV.Light"
      @change="onChange"
    />
    <label class="custom-control-label" for="light">Light</label>
  </div>
  <div class="custom-control custom-radio">
    <input
      type="radio"
      name="filter"
      id="strong"
      class="custom-control-input"
      :checked="currenFilter === ABV.Strong"
      :value="ABV.Strong"
      @change="onChange"
    />
    <label class="custom-control-label" for="strong">Strong</label>
  </div>
</template>
