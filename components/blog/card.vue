<script lang="ts" setup>
interface Props {
  path: string
  title: string
  author: string
  date: string
  description: string
  tags: Array<string>
  published: boolean
}

withDefaults(defineProps<Props>(), {
  path: '/',
  title: 'no-title',
  date: 'no-date',
  author: 'مصنف',
  description: 'no-description',
  alt: 'no-alt',
  tags: () => [],
  published: false,
})
</script>

<template>
  <article class="group border-[1.5px] card border-gray-200 dark:border-gray-700 m-2 overflow-hidden rounded-xl text-zinc-900 dark:text-zinc-300">
    <NuxtLink :to="path">
      <div class="space-y-3 p-6">
        <h2 class="text-xl pb-1">
          {{ title }}
        </h2>
        <p class="text-ellipsis line-clamp-3 text-lg leading-loose">
          {{ description }}
        </p>
      </div>
    </NuxtLink>
  </article>
</template>

<style>

.card {
  color: #6d4c41 !important;
  background-color: #efebe91c;
  border: 1px solid #efebe9b8;
}

.dark .card {
  color: #329fff !important;
  background-color: rgba(0, 110, 255, 0.014);
  border: 1px solid rgba(0, 21, 255, 0.055);
}

</style>