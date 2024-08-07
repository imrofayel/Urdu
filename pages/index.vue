<script lang="ts" setup>
useHead({
  title: 'Home',
  meta: [
    {
      name: 'description',
      content:
        'سیو',
    },
  ],
})
</script>

<template>
  <main class="text-black dark:text-zinc-300">
    <MainHero class="mb-10"/>
    <MainRecent class="md:m-6"/>
  </main>
</template>

