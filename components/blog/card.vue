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
  <article class="group border-[1.5px] border-gray-200 dark:border-gray-900 m-2 overflow-hidden rounded-2xl text-zinc-700 dark:text-zinc-300">
    <NuxtLink :to="path">
      <div class="px-3 pb-4 space-y-3">
        <div class="text-black dark:text-zinc-300 pt-3 pb-2 space-y-3">
          <div class="flex items-center">
            {{ date }}
          </div>
        </div>
        <h2 class="text-xl text-black dark:text-zinc-300 pb-1">
          {{ title }}
        </h2>
        <p class="text-ellipsis line-clamp-2 text-base">
          {{ description }}
        </p>
      </div>
    </NuxtLink>
  </article>
</template>
