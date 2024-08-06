<script setup lang="ts">
import { navbarData } from '../../data'


</script>

<template>
  <div class="py-5">
    <div class="flex px-6 container max-w-5xl justify-between mx-auto items-baseline ">
      <ul class="flex items-baseline space-x-5">
        <li class="text-3xl">
          <NuxtLink to="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" fill="none" viewBox="0 0 24 24" aria-label="library" class="inline"><path stroke="currentColor" d="M4.75 21.5h14.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25v18.5c0 .138.112.25.25.25Z"></path><path stroke="currentColor" stroke-linecap="round" d="M8 8.5h8M8 15.5h5M8 12h8"></path></svg><div class="inline p-1"></div>اردوفین ڈوم
          </NuxtLink>
        </li>
      </ul>

      <ul class="flex items-center space-x-4 sm:space-x-6 text-xl" style="direction: ltr;">

        <div class="rounded-lg bg-slate-300">He</div>

      </ul>
    </div>
  </div>
</template>

<style>
.router-link-active .router-link-exact-active  {
  @apply underline
}
</style>
