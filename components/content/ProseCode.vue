<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

// component props
defineProps({
  code: {
    type: String,
    default: '',
  },
  filename: {
    type: String,
    default: null,
  },
  class: {
    type: String,
    default: null,
  },
})

// component hooks for clipboard
const { copy, copied } = useClipboard()

// timer for copied message
const showCopiedMessage = ref(false)
onMounted(() => {
  if (copied) {
    showCopiedMessage.value = true
    setTimeout(() => {
      showCopiedMessage.value = false
    }, 3000)
  }
})
</script>

<template>
  <div class="custom-code-block">
    <div class="dark:bg-[#1F2937] border shadow-lg bg-neutral-200 my-5 rounded-md pt-3 px-5 group">
      <div class="flex sm:grid sm:grid-cols-3 mb-3 justify-between items-center">
        <!-- the three colored dots mac style -->
        <div class="hidden sm:flex gap-2.5">
          <div class="size-3 rounded-full bg-[#FE5F57] hidden group-hover:block" />
          <div class="size-3 rounded-full bg-[#FEBC2E] hidden group-hover:block" />
          <div class="size-3 rounded-full bg-[#28C840] hidden group-hover:block" />
          <div class="size-3 rounded-full dark:bg-gray-600 bg-neutral-400 group-hover:hidden" />
          <div class="size-3 rounded-full dark:bg-gray-600 bg-neutral-400 group-hover:hidden" />
          <div class="size-3 rounded-full dark:bg-gray-600 bg-neutral-400 group-hover:hidden" />
        </div>
        <!-- filename -->
        <div class="border-b font-mono text-xs text-center dark:text-white/60 max-sm:truncate">
          {{ filename }}
        </div>
        <!-- copy button -->
        <div class="flex justify-end">
          <Copy v-if="!copied" class="cursor-pointer opacity-50" :size="16" @click="copy(code)" />
          <div v-else class="text-xs opacity-50">
            Copied!
          </div>
        </div>
      </div>
      <!-- code block -->
      <pre class="my-0 font-[500] bg-transparent leading-normal font-mono custom-pre" :class="$props.class"><slot /></pre>
    </div>
  </div>
</template>

<style scoped>
.custom-code-block pre,
.custom-code-block code {
  background-color: transparent !important; /* Override default background */
  color: inherit; /* Inherit color from parent */
  /* Add any additional styles you want to apply */
}

.custom-code-block .dark pre,
.custom-code-block .dark code {
  background-color: transparent !important;
}

/* Specific targeting for dark mode, if necessary */
.dark .custom-code-block pre,
.dark .custom-code-block code {
  background-color: transparent !important;
}
</style>
