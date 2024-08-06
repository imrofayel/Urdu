<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

// Get the current route
const route = useRoute()

// Extract the author from the route params and format the name
const author = computed(() => {
  const name = route.params.author || ''
  let strName = ''

  if (Array.isArray(name))
    strName = name.at(0) || ''
  else strName = name

  return strName.charAt(0).toUpperCase() + strName.slice(1)
})

// Fetch data for the given author
const { data } = await useAsyncData(`author-data-${author.value}`, () =>
  queryContent('/blogs')
    .where({ author: { $contains: author.value } })
    .find()
)

</script>

<template>
  <div>
    <div class="p-6 my-4 mx-2 text-2xl md:text-3xl text-zinc-900 dark:text-zinc-300">
      <div class="inline">{{ author }} &ensp;&ensp;</div>
      <span class="inline-flex relative -top-[9px] text-[22px]">{{ data?.length }}</span>
    </div>
  </div>
</template>
