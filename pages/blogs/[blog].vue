<script setup lang="ts">
import type { BlogPost } from '@/types/blog'
import { navbarData, seoData } from '~/data'

const { path } = useRoute()

const { data: articles, error } = await useAsyncData(`blog-post-${path}`, () => queryContent(path).findOne())

if (error.value)
  navigateTo('/404')

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
    {
      name: 'description',
      content: data.value.description,
    },
    // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
    { property: 'og:site_name', content: navbarData.homeTitle },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    {
      property: 'og:url',
      content: `${seoData.mySite}/${path}`,
    },
    {
      property: 'og:title',
      content: data.value.title,
    },
    {
      property: 'og:description',
      content: data.value.description,
    },
    // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
    { name: 'twitter:site', content: '@qdnvubp' },
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:url',
      content: `${seoData.mySite}/${path}`,
    },
    {
      name: 'twitter:title',
      content: data.value.title,
    },
    {
      name: 'twitter:description',
      content: data.value.description,
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: `${seoData.mySite}/${path}`,
    },
  ],
})
</script>

<template>
  <div class="px-8 container max-w-6xl mx-auto sm:grid grid-cols-12 gap-x-12" style="direction: ltr;">
    <div class="col-span-12 lg:col-span-9" style="direction: rtl;">
      <BlogHeader
        :title="data.title"
        :date="data.date"
        :author="data.author"
        :description="data.description"
        :tags="data.tags"
      />
      <div
        class="prose prose-pre:max-w-xs sm:prose-pre:max-w-full prose-p:text-[22px] prose-p:text-black/90 dark:prose-p:text-white/90
        prose-h1:text-4xl prose-h1:font-normal max-w-5xl mx-auto prose-neutral dark:prose-invert prose-p:text-justify prose-p:leading-loose prose-headings:text-3xl prose-headings:no-underline prose-table:text-[22px] prose-table:text-black/90 dark:prose-table:text-white/90 prose-td:font-normal prose-tr:font-normal prose-table:font-normal prose-thead:text-[24px], prose-thead:font-normal dark:prose-table:bg-slate-800 prose-table:w-full sm:prose-table:w-[60%]"
      >
        <ContentRenderer v-if="articles" :value="articles">
          <template #empty>
            <p>No content found.</p>
          </template>
        </ContentRenderer>
      </div>
    </div>
    <BlogToc />
  </div>
</template>

<style>
/* Global CSS file or component-specific CSS */
/* Global CSS file or component-specific CSS */
.prose table {
  border-collapse: separate;
  border-spacing: 0;
  border: none;
  border-radius: 14px;
  overflow: hidden;
  text-align: right; /* Align text to the right */
}

.prose th, .prose td {
  padding: 12px 15px;
  border-bottom: normal;
  font-weight: normal;
  background-color: #f9f9f9d8; /* Light mode background */
  border: 1px solid #f7f7f7;
}

.prose th {
  background-color: #f9f9f9d8; /* Light mode header */
  font-weight: normal;
}

.prose tr:nth-child(even) td {
  background-color: #f8f8f8ea; /* Light mode zebra stripes */
  border: 1px solid #f7f7f7;
}

.prose tr:hover td {
  background-color: #f7f7f7; /* Light mode hover effect */
}

/* Dark mode styles */
.dark .prose table {
  border: 1px solid #080d1c
}

.dark .prose th, .dark .prose td {
  background-color: rgb(4, 8, 21);
  border: 1px solid #080d1c
}

.dark .prose th {
  background-color: rgb(4, 8, 21); /* Dark mode header */
}

.dark .prose tr:nth-child(even) td {
  background-color: #080d1c; /* Dark mode zebra stripes */
  border: 1px solid #080d1c
}

.dark .prose tr:hover td {
  background-color: #040714e0; /* Dark mode hover effect */
}


</style>