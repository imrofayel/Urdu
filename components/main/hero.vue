<script setup lang="ts">

import { homePage } from '~/data'

</script>

<template>
  <div class="container m-10 items-center">
    <div class="grid grid-cols-1 sm:grid-cols-2 items-center">
      <div class="px-6 space-y-8">
        <h1 class="text-black dark:text-zinc-300 leading-tight text-4xl md:text-5xl my-5">
          {{ homePage.title }}
        </h1>
        <p class="dark:text-zinc-300 text-2xl">
          {{ homePage.description }}
        </p>
      </div>
    </div>
  </div>
</template>
