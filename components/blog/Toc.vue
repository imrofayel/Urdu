<script setup lang="ts">
const { path } = useRoute()
const articles = await queryContent(path).findOne()

const links = articles?.body?.toc?.links || []
</script>

<template>
  <div class="lg:col-span-3 fixed hidden lg:block justify-self-end" style="direction: rtl;">
    <div
      class="mt-8 p-3 rounded-xl min-w-[230px] max-h-[430px] overflow-auto scrollbar-hidden"
    >
      <h1 class="text-[24px] pb-4 text-zinc-900 dark:text-zinc-300" style="direction: rtl;">
        فہرست
      </h1>
      <NuxtLink
        v-for="link in links"
        :key="link.id"
        :to="`#${link.id}`"
        class="block text-[20px] mb-4 hover:underline" style="direction: rtl;"
      >
        {{ link.text }}
      </NuxtLink>
    </div>
  </div>
</template>
