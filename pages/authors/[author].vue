<script lang="ts" setup>
const route = useRoute()

// Take the author's name from route params and process it
const author = computed(() => {
  const name = route.params.author || ''
  let strName = ''

  if (Array.isArray(name))
    strName = name.at(0) || ''
  else strName = name
  return strName
})

// Fetch articles by the specified author
const { data } = await useAsyncData(`author-data-${author.value}`, () =>
  queryContent('/blogs')
    .where({ author: author.value })
    .find(),
)

// Format the fetched data for display
const formattedData = computed(() => {
  return data.value?.map((article) => {
    return {
      path: article._path,
      title: article.title || 'No title available',
      description: article.description || 'No description available',
      date: article.date || 'No date available',
      tags: article.tags || [],
      published: article.published || false,
    }
  })
})

// Update the page's head section
useHead({
  title: author.value,
  meta: [
    {
      name: 'description',
      content: `You will find all the posts written by ${author.value} here`,
    },
  ],
})
</script>

<template>
  <main class="container max-w-5xl mx-auto text-[#3E2723] dark:text-zinc-300 px-4">
    <AuthorTopic />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <BlogCard
        v-for="post in formattedData"
        :key="post.title"
        :path="post.path"
        :title="post.title"
        :date="post.date"
        :description="post.description"
        :tags="post.tags"
        :published="post.published"
        class="transform hover:scale-105 duration-300 ease-in-out"
      />
      <BlogEmpty v-if="!data?.length" />
    </div>
  </main>
</template>
