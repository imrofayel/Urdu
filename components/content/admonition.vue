<script setup lang="ts">

const colorMode = useColorMode()

type AdmonitionType = 'warning' | 'info' | 'danger' | 'success';

// accept the type prop
defineProps<{ type: AdmonitionType }>()

const useIconMap = () => {
  type AdmonitionIcon = (typeof icons)[keyof typeof icons]

  // map the type to an icon
  const icons = {
    warning: 'message-circle-warning',
    info: 'info',
    danger: 'biohazard',
    success: 'message-circle-question'
  } as const

  // return the icon name
  const getIcon = (type: AdmonitionType): AdmonitionIcon => {
    return icons?.[type]
  }

  // return the icon name function
  return { getIcon }
}

const { getIcon } = useIconMap()

function typeUrdu(type: string){
  if(type == 'info'){
    return 'مزید جانیں'
  }
  else if(type == 'warning'){
    return 'وارننگ'
  }
  else if(type == 'danger'){
    return 'خطرہ'
  }
  else if(type == 'success'){
    return 'کیاآپ جانتے ہیں؟'
  }
}

</script>

<template>

<div :class="`${colorMode.value}--${type} prosed--${type}`" class="rounded-xl px-4 pt-2 my-2 md:mx-8">

  <div>
    <icon
      :name="`lucide:${getIcon(type)}`"
      size="23px"
      class="relative top-1"
    />

    <div class="inline p-1"></div>

    <div class="text-xl inline">
      {{ typeUrdu(type) }}
    </div>
  </div>
  <slot/>
</div>

</template>

<style>

.light--info {
  color: #0561b2;
  background-color: #e3f2fd2c;
  border: 1px solid #bbdefb4e;
}

.dark--info {
  color: #329fff;
  background-color: rgba(9, 13, 18, 0.297);
  border: 1px solid rgba(49, 49, 49, 0.185);
}

.prosed--info p, h1, h2, h3, h4, h6 table {
  color: #0561b2;
}

.dark .prosed--info p, h1, h2, h3, h4, h6 table {
  color: #329fff;
}

.light--warning {
  color: #7e6203;
  background-color: #fff8e14e;
  border: 1px solid #ffecb357;
}

.dark--warning {
  color: #F9A825;
  background-color: #1c190f50;
  border: 1px solid rgba(49, 32, 1, 0.215);
}

.prosed--warning p, h1, h2, h3, h4, h6 table {
  color: #7e6203;
}

.dark .prosed--warning p, h1, h2, h3, h4, h6 table {
  color: #F9A825;
}

.light--success {
  color: #07ac4c;
  background-color: #e8f5e947;
  border: 1px solid #c8e6c95a;
}

.dark--success {
  color: #54de5a;
  background-color: #00461e2a;
  border: 1px solid #013e1a22;
}

.prosed--success p, h1, h2, h3, h4, h6 table {
  color: #07ac4c;
}

.dark .prosed--success p, h1, h2, h3, h4, h6 table {
  color: #54de5a;
}

.light--danger {
  color: #cc0a0a;
  background-color: #ffebee41;
  border: 1px solid #ffcdd24c;
}

.dark--danger {
  color: #fc4444;
  background-color: #5304041b;
  border: 1px solid #3f010133;
}

.prosed--danger p, h1, h2, h3, h4, h6 table {
  color: #cc0a0a;
}

.dark .prosed--danger p, h1, h2, h3, h4, h6 table {
  color: #fc4444;
}

</style>