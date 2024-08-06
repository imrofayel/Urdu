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

const search  = ref('')

const results = await searchContent(search)

function getHighlightedText(content: string, match: any): string {
  const term = Object.keys(match)[0]
  const startIndex = content.toLowerCase().indexOf(term.toLowerCase())
  const snippetStart = Math.max(startIndex - 45, 0)
  const snippetEnd = Math.min(startIndex + 45 + term.length, content.length)

  return content.substring(snippetStart, snippetEnd)
}

</script>

<template>
  <main class="container max-w-5xl mx-auto">
    <ArchiveHero />

    <div class="px-8">

      <input
        v-model="search"
        placeholder="تلاش کریں"
        type="text"
        class="block w-full md:w-6/12 text-xl bg-transparent rounded-2xl border-[1.5px] border-gray-200 dark:border-gray-700 focus:border-indigo-300 focus:border-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mb-8 placeholder-zinc-900 dark:placeholder-zinc-200"
      >

      <div class="search-results">

    <div v-if="results.length > 0">

      <div
        v-for="result in results"
        :key="result.id"
        class="result-item pb-6 sm:pb-4"
      >
      
        <NuxtLink :to= result.id><div class="inline-flex transform hover:scale-[1.1] ease-in-out duration-500">
          <div class="text-lg text-zinc-800 dark:text-zinc-200 leading-[2.5rem]">
            <div class="inline p-1">...</div>{{ getHighlightedText(result.content, result.match) }}<div class="inline p-1">...</div><span class="sm:p-4 p-2 pr-0 block sm:inline">({{ result.title }})</span>
          </div>
        </div></NuxtLink>

      </div>

    </div>

    <div v-else>
      <p class="text-lg my-6">کچھ نہیں مل سکا</p>
    </div>

  </div>

    </div>

    <ClientOnly>
      <div v-auto-animate class="my-8 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3" v-if="results.length < 1">
        <template v-for="post in paginatedData" :key="post.title">
          <ArchiveCard
            :path="post.path"
            :title="post.title"
            :date="post.date"
            :description="post.description"
            :tags="post.tags"
            :published="post.published"

            class="trasform hover:scale-105 duration-300 ease-in-out"
          />
        </template>

        <ArchiveCard
          v-if="paginatedData.length <= 0"
          title="کوئی مضمون نہیں مل سکا"
          date=""
          description=""
        />
      </div>

      <template #fallback>
        <!-- this will be rendered on server side -->
        <BlogLoader />
        <BlogLoader />
      </template>
    </ClientOnly>

    <div class="flex space-x-6 justify-center font-Inter text-zinc-900 dark:text-zinc-300" style="direction: ltr;" v-if="results.length < 1">
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
