<script setup lang="ts">
import { blogsPage } from '~/data'
</script>

<template>
  <div class="container mx-auto mb-5">
    <div class="grid grid-cols-1 sm:grid-cols-2 items-center">
      <div class="px-6">
        <h1 class="text-[#3E2723] dark:text-zinc-300 leading-tight text-2xl md:text-3xl my-5">
          {{ blogsPage.title }}
        </h1>
        <p class="text-[#3E2723] dark:text-zinc-300" v-if="blogsPage.description.length >= 1">
          {{ blogsPage.description }}
        </p>
      </div>
      <div class="px-6 justify-self-center">
      </div>
    </div>
  </div>
</template>
