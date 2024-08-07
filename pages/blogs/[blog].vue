<script setup lang="ts">

import type { BlogPost } from '@/types/blog'

import { navbarData, seoData } from '~/data'

const { path } = useRoute()

const { data: articles, error } = await useAsyncData(`blog-post-${path}`, () => queryContent(path).findOne())

if (error.value) navigateTo('/404')

const data = computed<BlogPost>(() => {
  return {
    title: articles.value?.title || 'no-title available',
    description: articles.value?.description || 'no-description available',
    author: articles.value?.author || 'مصنف',
    date: articles.value?.date || 'not-date-available',
    tags: articles.value?.tags || [],
    published: articles.value?.published || false,
  }
})

useHead({
  title: data.value.title || '',
  meta: [
    { name: 'description', content: data.value.description },
    { property: 'og:site_name', content: navbarData.homeTitle },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    { property: 'og:url', content: `${seoData.mySite}/${path}` },
    { property: 'og:title', content: data.value.title },
    { property: 'og:description', content: data.value.description },
    { name: 'twitter:site', content: '@qdnvubp' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:url', content: `${seoData.mySite}/${path}` },
    { name: 'twitter:title', content: data.value.title },
    { name: 'twitter:description', content: data.value.description },
  ],
  link: [
    { rel: 'canonical', href: `${seoData.mySite}/${path}` },
  ],
})

</script>

<template>
  <div class="px-8 container md:max-w-5xl md:mx-auto mr-0 sm:grid grid-cols-12 gap-x-12 text-[#3E2723] dark:text-white/90" style="direction: ltr;">
    <div class="col-span-12 lg:col-span-9" style="direction: rtl;">
      <BlogHeader
        :title="data.title"
        :date="data.date"
        :author="data.author"
        :description="data.description"
        :tags="data.tags"

        class="mb-8"
      />

      <div
        class="article-content prose prose-pre:max-w-xs sm:prose-pre:max-w-full prose-p:text-[22px] prose-p:text-[#3E2723] dark:prose-p:text-white/90
        prose-h1:text-4xl max-w-5xl mx-auto prose-neutral dark:prose-invert prose-p:text-justify prose-p:leading-loose prose-headings:text-3xl prose-headings:no-underline prose-table:text-[22px] prose-table:text-[#3E2723] dark:prose-table:text-white/90 prose-td:font-normal prose-tr:font-normal prose-table:font-normal prose-thead:text-[24px], prose-thead:font-normal prose-table:w-full sm:prose-table:w-[70%] prose-headings:text-[#3E2723] dark:prose-headings:text-white/90"
      >
      
        <ContentRenderer v-if="articles" :value="articles">
          <template #empty>
            <p>No content found.</p>
          </template>
        </ContentRenderer>
      </div>
      
      <div class="flex w-full">
        <template v-for="tag in data.tags" :key="tag">
          <NuxtLink :to="`/categories/${tag.toLocaleLowerCase()}`" class="pl-3"><span class="bg-[#efebe930] dark:bg-slate-900 rounded-xl px-3 py-0 text-[21px]">{{ tag }}</span></NuxtLink>
        </template>
      </div>

    </div>
    <BlogToc />
  </div>
</template>

<style>
.prose table {
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #3E2723;
  border-radius: 0px;
  overflow: hidden;
  text-align: right;
}
.prose th,
.prose td {
  padding: 12px 15px;
  border-bottom: normal;
  font-weight: normal;
  background-color: transparent;
  border: 1px solid #3E2723;
  font-size: 22px;
}

.prose th {
  background-color: transparent;
  font-weight: normal;
  color: #3E2723;
}

.dark .prose table {
  border: 1px solid #c3c3c3d0;
}

.dark .prose th,
.dark .prose td {
  background-color: transparent;
  border: 1px solid #c3c3c3d0;
  color: currentColor;
}

.dark .prose th {
  background-color: transparent;
}

.dark .prose tr:hover td {
  background-color: transparent;
}
</style>