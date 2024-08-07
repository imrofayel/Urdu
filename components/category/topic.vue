<script setup lang="ts">

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

</script>

<template>
  <div>
      <div class="p-6 my-4 mx-2 text-2xl md:text-3xl text-[#3E2723] dark:text-zinc-300"><div class="inline">{{ category }} &ensp;&ensp;</div>
      <span class="inline-flex relative -top-[9px] text-[22px]">{{ data?.length }}</span>
    </div>
  </div>
</template>
