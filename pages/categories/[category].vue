<script lang="ts" setup>
const route = useRoute()

// take category from route params & make first char upper
const category = computed(() => {
  const name = route.params.category || ''
  let strName = ''

  if (Array.isArray(name))
    strName = name.at(0) || ''
  else strName = name
  return strName
})

const { data } = await useAsyncData(`category-data-${category.value}`, () =>
  queryContent('/blogs')
    .where({ tags: { $contains: category.value } })
    .find(),
)

const formattedData = computed(() => {
  return data.value?.map((articles) => {
    return {
      path: articles._path,
      title: articles.title || 'no-title available',
      description: articles.description || 'no-description available',
      date: articles.date || 'not-date-available',
      tags: articles.tags || [],
      published: articles.published || false,
    }
  })
})

useHead({
  title: category.value,
  meta: [
    {
      name: 'description',
      content: `You will find all the ${category.value} related post here`,
    },
  ],
})

</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600 px-4">
    <CategoryTopic />
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

        class="trasform hover:scale-105 duration-300 ease-in-out"
      />
      <BlogEmpty v-if="data?.length === 0" />
    </div>
  </main>
</template>
