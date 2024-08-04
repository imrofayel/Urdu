<script setup lang="ts">
import { categoryPage } from '~/data'
</script>

<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-1 sm:grid-cols-2 items-center">
      <div class="px-6">
        <h1 class="text-black dark:text-zinc-300 leading-tight text-2xl md:text-3xl my-5">
          {{ categoryPage.title }}
        </h1>
        <p class="dark:text-zinc-300" v-if="categoryPage.description">
          {{ categoryPage.description }}
        </p>
      </div>
    </div>
  </div>
</template>
