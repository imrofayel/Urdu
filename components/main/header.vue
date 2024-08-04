<script setup lang="ts">
import { navbarData } from '../../data'


</script>

<template>
  <div class="py-5">
    <div class="flex px-6 container max-w-5xl justify-between mx-auto items-baseline ">
      <ul class="flex items-baseline space-x-5">
        <li class="text-2xl sm:text-4xl">
          <NuxtLink to="/">
            {{ navbarData.homeTitle }}
          </NuxtLink>
        </li>
      </ul>

      <ul class="flex items-center space-x-4 sm:space-x-6 text-xl" style="direction: ltr;">

        <li>
        </li>

        <li>
          
          <NuxtLink to="/categories" aria-label="science">
            <ElementsButton label="سائنس"/>
          </NuxtLink>
        </li>

        <li>
          <NuxtLink to="/categories" aria-label="tech">
            <ElementsButton label="ٹیکنالوجی"/>
          </NuxtLink>
        </li>

        <li>
          <NuxtLink to="/categories" aria-label="history">
            <ElementsButton label="تاریخ"/>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.router-link-active .router-link-exact-active  {
  @apply underline
}
</style>
