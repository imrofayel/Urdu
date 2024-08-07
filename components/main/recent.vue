<script lang="ts" setup>
// Get Last 6 Publish Post from the content/blog directory
const { data } = await useAsyncData('recent-post', () =>
  queryContent('/blogs').limit(3).sort({ _id: -1 }).find(),
)

const formattedData = computed(() => {
  return data.value?.map((articles) => {
    return {
      path: articles._path,
      title: articles.title || 'no-title available',
      description: articles.description || 'no-description available',
      alt: articles.alt || 'no alter data available',
      date: articles.date || 'not-date-available',
      tags: articles.tags || [],
      published: articles.published || false,
    }
  })
})

useHead({
  title: 'Home',
  meta: [
    {
      name: 'description',
      content:
        'Welcome To My Blog Site. Get Web Development, Javascript, Typescript, NodeJs, Vue, and Nuxt, Related Articles, Tips, Learning resources and more.',
    },
  ],
})
</script>

<template>
  <div class="pb-10 px-4">
    <div class="flex flex-row items-center pt-5 pb-3 mb-2">
      <Icon name="mdi:star-three-points-outline" size="1.5em" class="text-[#0a3459] dark:text-[#329fff] relative top-1"/>
      <div class="inline p-1"></div>
      <h2 class="text-[29px] text-[#0a3459] dark:text-[#329fff]">
        تازہ ترین تحاریر
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <template v-for="post in formattedData" :key="post.title">
        <BlogCard
          :path="post.path"
          :title="post.title"
          :date="post.date"
          :description="post.description"
          :alt="post.alt"
          :tags="post.tags"
          :published="post.published"

          class="trasform hover:scale-105 duration-300 ease-in-out"
        />
      </template>
      <template v-if="data?.length === 0">
        <BlogEmpty />
      </template>
    </div>
  </div>
</template>

<style>

</style>