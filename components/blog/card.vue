<script lang="ts" setup>
interface Props {
  path: string
  title: string
  date: string
  description: string
  alt: string
  tags: Array<string>
  published: boolean
}

withDefaults(defineProps<Props>(), {
  path: '/',
  title: 'no-title',
  date: 'no-date',
  description: 'no-description',
  alt: 'no-alt',
  tags: () => [],
  published: false,
})
</script>

<template>
  <article class="group border dark:border-gray-800  m-2 overflow-hidden rounded-2xl shadow-sm text-zinc-700 dark:text-zinc-300">
    <NuxtLink :to="path">
      <div class="px-3 pb-4 space-y-3">
        <div class="text-black dark:text-zinc-300 pt-3 pb-2 space-y-3">
          <div class="flex items-center">
            {{ date }}
          </div>
          <div class="flex items-center gap-1 flex-wrap">
            <LogoTag v-if="tags.length >= 1"/>
            <template v-if="tags.length >= 1" v-for="tag in tags" :key="tag">
              <span>{{ tag }}</span>
            </template>
          </div>
        </div>
        <h2 class="text-xl font-semibold  text-black dark:text-zinc-300   pb-1 group-hover:text-sky-700 dark:group-hover:text-sky-400">
          {{ title }}
        </h2>
        <p class="text-ellipsis line-clamp-2 text-base">
          {{ description }}
        </p>
      </div>
    </NuxtLink>
  </article>
</template>
