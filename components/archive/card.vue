<script lang="ts" setup>
interface Props {
  path?: string
  title?: string
  date?: string
  description?: string
  tags?: Array<string>
  published?: boolean
}

withDefaults(defineProps<Props>(), {
  path: '/',
  title: 'no-title',
  date: 'no-date',
  description: 'no-description',
  tags: () => [],
  published: false,
})
</script>

<template>
  <article class="group border-[1.5px] border-gray-200 dark:border-gray-700 m-2 overflow-hidden rounded-2xl shadow-sm text-zinc-900 dark:text-zinc-300">
    <NuxtLink :to="path">
      <div class="space-y-3 p-6">
        <h2 class="text-xl text-[#3E2723] dark:text-zinc-300 pb-1">
          {{ title }}
        </h2>
        <p class="text-ellipsis line-clamp-3 text-lg leading-loose">
          {{ description }}
        </p>
      </div>
    </NuxtLink>
  </article>
</template>
