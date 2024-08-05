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
  <main class="container max-w-5xl mx-auto text-black dark:text-zinc-300">
    <MainHero class="mb-10"/>
    <MainRecent />
  </main>
</template>

