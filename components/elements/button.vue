<template>
  
  <button class="border-[1.5px] border-gray-200 dark:border-gray-900 px-3 py-2 rounded-2xl hover:scale-110 hover:bg-opacity-90 transition-transform duration-300 ease-in-out space-x-2 items-center justify-center" @click="handleClick">
    <span v-if="icon" v-html="icon" class="inline-flex top-[2px] relative"></span>
    <span class="inline-flex relative -top-[1.5px] text-xl" v-if="label">{{ label }}</span>
  </button>
  
</template>

<script setup>

import { defineProps, defineEmits } from 'vue';

const props = defineProps({
label: {
type: String,
required: false
},
icon: {
type: String,
required: false,
default: '',
},

});

const emits = defineEmits(['click']);

const handleClick = (event) => {
emits('click', event);
};
</script>