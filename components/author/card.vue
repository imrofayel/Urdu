<script setup lang="ts">
interface Props {
  title: string
  count: number
}

withDefaults(defineProps<Props>(), {
  title: 'No title available',
  count: 0,
})

// some random color for tags
const colors = [
  { bg: '#E3F2FD', text: '#1565C0' },
  { bg: '#FFFDE7', text: '#F9A825' },
  { bg: '#FBE9E7', text: '#D84315' },
  { bg: '#F3E5F5', text: '#6A1B9A' },
  { bg: '#EDE7F6', text: '#4527A0' },
  { bg: '#F3E5F5', text: '#C62828' },
  { bg: '#E8F5E9', text: '#2E7D32' }
];

// Function to get a random index
function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Select a random color
const randomColor = colors[getRandomInt(0, colors.length - 1)];
const picAColor = ref(randomColor);

</script>

<template>
  <div
    class="text-white px-2 rounded-3xl hover:scale-110 ease-in-out duration-300" :style="{ backgroundColor: picAColor.bg, color: picAColor.text }"
  >
    <NuxtLink :to="`/authors/${title.toLocaleLowerCase()}`" class="text-lg">
      <div class="space-x-4 p-1" style="direction: ltr;"><div class="inline font-Inter"> {{ count }}</div><div class="inline">{{ title }}</div></div>
    </NuxtLink>
  </div>
</template>

<style scoped>

</style>
