<script setup lang="ts">
const { path } = useRoute()
const articles = await queryContent(path).findOne()

const links = articles?.body?.toc?.links || []
</script>

<template>
  <div class="lg:col-span-3 hidden lg:block justify-self-end" style="direction: rtl;">
    <div
      class="mt-8 rounded-xl"
    >
      <h1 class="text-[24px] pb-4 text-[#3E2723] dark:text-zinc-300" style="direction: rtl;">
        فہرست
      </h1>
      
      <NuxtLink
        v-for="link in links"
        :key="link.id"
        :to="`#${link.id}`"
        class="block text-[22px] mb-2 hover:underline" style="direction: rtl;"
      >
        {{ link.text }}
      </NuxtLink>
    </div>
  </div>
</template>
