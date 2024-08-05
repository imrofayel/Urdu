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
    success: 'circle-check'
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

<div :class="`${colorMode.value}--${type} prosed--${type}`" class="rounded-xl pr-8 pt-3 pl-8 my-4 mx-1 md:ml-52">

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
  color: #1e88e5;
  background-color: #E3F2FD;
  border: 1px solid #BBDEFB;
}

.dark--info {
  color: #329fff;
  background-color: #0e141b;
  border: 1px solid rgb(49, 49, 49);
}

.prosed--info p, h1, h2, h3, h4, h6 table {
  color: #1e88e5;
}

.dark .prosed--info p, h1, h2, h3, h4, h6 table {
  color: #329fff;
}

.light--warning {
  color: #FFA000;
  background-color: #FFF8E1;
  border: 1px solid #FFECB3;
}

.dark--warning {
  color: #F9A825;
  background-color: #1c190f;
  border: 1px solid rgb(49, 32, 1);
}

.prosed--warning p, h1, h2, h3, h4, h6 table {
  color: #FBC02D;
}

.dark .prosed--warning p, h1, h2, h3, h4, h6 table {
  color: #F9A825;
}

.light--success {
  color: #00C853;
  background-color: #E8F5E9;
  border: 1px solid #E8F5E9;
}

.dark--success {
  color: #54de5a;
  background-color: #00fa6812;
  border: 1px solid #00fa6819;
}

.prosed--success p, h1, h2, h3, h4, h6 table {
  color: #00C853;
}

.dark .prosed--success p, h1, h2, h3, h4, h6 table {
  color: #54de5a;
}

.light--danger {
  color: #D32F2F;
  background-color: #FFEBEE;
  border: 1px solid #FFEBEE;
}

.dark--danger {
  color: #fc4444;
  background-color: #fa000012;
  border: 1px solid #fa000019;
}

.prosed--danger p, h1, h2, h3, h4, h6 table {
  color: #D32F2F;
}

.dark .prosed--danger p, h1, h2, h3, h4, h6 table {
  color: #fc4444;
}

</style>