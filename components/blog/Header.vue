<script setup lang="ts">
interface Props {
  title: string
  description: string
  author: string
  date: string
  tags: Array<string>
}

withDefaults(defineProps<Props>(), {
  title: 'no-title',
  description: 'no description',
  author: 'مصنف',
  date: 'no-date',
  tags: () => ([]),
})
</script>

<template>
  <header>
    <h1 class="dark:text-zinc-300 text-4xl m-7">
      {{ title || '' }}
    </h1>
    <p class="text-[22px] pr-8 text-black/90 dark:text-white/90">
      {{ description }}
    </p>
    <div class="flex w-full text-lg my-4">
      <div class="flex text-black dark:text-zinc-300 content-center gap-4">

        <div class="flex items-center gap-2 flex-wrap my-5">
            <span class="bg-gray-200/30 dark:bg-slate-900 rounded-xl px-3 py-1 text-[21px]">{{ author }}</span>
        </div>

        <div class="flex items-center gap-2 flex-wrap my-5">
          <template v-for="tag in tags" :key="tag">
            <NuxtLink :to="`/categories/${tag.toLocaleLowerCase()}`"><span class="bg-gray-200/30 dark:bg-slate-900 rounded-xl px-3 py-1 text-[21px]">{{ tag }}</span></NuxtLink>
          </template>
        </div>
      </div>
    </div>
  </header>
</template>
