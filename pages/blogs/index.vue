<script lang="ts" setup>
const { data } = await useAsyncData('home', () => queryContent('/blogs').sort({ _id: -1 }).find())

const elementPerPage = ref(8)
const pageNumber = ref(1)
const searchTest = ref('')

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
  }) || []
})

const searchData = computed(() => {
  return formattedData.value.filter((data) => {
    const lowerTitle = data.title.toLocaleLowerCase()
    if (lowerTitle.search(searchTest.value) !== -1)
      return true
    else return false
  }) || []
})

const paginatedData = computed(() => {
  return searchData.value.filter((data, idx) => {
    const startInd = ((pageNumber.value - 1) * elementPerPage.value)
    const endInd = (pageNumber.value * elementPerPage.value) - 1

    if (idx >= startInd && idx <= endInd)
      return true
    else return false
  }) || []
})

function onPreviousPageClick() {
  if (pageNumber.value > 1)
    pageNumber.value -= 1
}

const totalPage = computed(() => {
  const ttlContent = searchData.value.length || 0
  const totalPage = Math.ceil(ttlContent / elementPerPage.value)
  return totalPage
})

function onNextPageClick() {
  if (pageNumber.value < totalPage.value)
    pageNumber.value += 1
}

useHead({
  title: 'Archive',
  meta: [
    {
      name: 'description',
      content: 'Here you will find all the blog posts I have written & published on this site.',
    },
  ],
})

</script>

<template>
  <main class="container max-w-5xl mx-auto">
    <ArchiveHero />

    <div class="px-8">
      <input
        v-model="searchTest"
        placeholder="تلاش کریں"
        type="text"
        class="block w-full text-xl bg-transparent rounded-xl border-[1.5px] border-gray-200 dark:border-gray-900 focus:border-indigo-300 focus:border-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      >
    </div>

    <ClientOnly>
      <div v-auto-animate class="my-8 px-4 grid grid-cols-3">
        <template v-for="post in paginatedData" :key="post.title">
          <ArchiveCard
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

        <ArchiveCard
          v-if="paginatedData.length <= 0"
          title="کوئی مضمون نہیں مل سکا"
        />
      </div>

      <template #fallback>
        <!-- this will be rendered on server side -->
        <BlogLoader />
        <BlogLoader />
      </template>
    </ClientOnly>

    <div class="flex space-x-6 font-spacegrotesk text-zinc-900 dark:text-zinc-300" style="direction: ltr;">
      <button :disabled="pageNumber <= 1" @click="onPreviousPageClick">
        <Icon name="lucide:chevron-left" size="23" :class="{ 'text-zinc-900 dark:text-zinc-300': pageNumber > 1 }" />
      </button>
      <p>{{ pageNumber }} / {{ totalPage }}</p>
      <button :disabled="pageNumber >= totalPage" @click="onNextPageClick">
        <Icon name="lucide:chevron-right" size="23" :class="{ 'text-zinc-900 dark:text-zinc-300': pageNumber < totalPage }" />
      </button>
    </div>
  </main>
</template>
