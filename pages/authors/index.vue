<script lang="ts" setup>
import { makeFirstCharUpper } from '@/utils/helper'

// Fetch all blog posts and group them by author
const { data } = await useAsyncData('all-blog-post-for-category', () =>
  queryContent('/blogs').sort({ _id: -1 }).find()
)

const allAuthors = new Map()

data.value?.forEach((blog) => {
  const author: string = blog.author || 'Unknown'
  if (allAuthors.has(author)) {
    const cnt = allAuthors.get(author)
    allAuthors.set(author, cnt + 1)
  } else {
    allAuthors.set(author, 1)
  }
})

useHead({
  title: 'Categories',
  meta: [
    {
      name: 'description',
      content: 'Below All the authors are listed who have written blogs or will write blogs in the near future.',
    },
  ],
})
</script>

<template>
  <main class="container mx-auto text-zinc-600">
    <AuthorHero />
    <div class="flex flex-wrap px-6 mt-6 gap-3">
      <AuthorCard
        v-for="author in allAuthors"
        :key="author[0]"
        :title="makeFirstCharUpper(author[0])"
        :count="author[1]"
      />
    </div>
  </main>
</template>
