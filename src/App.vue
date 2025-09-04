<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import BackToTop from '@/components/BackToTop.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex flex-col relative">

    <div class="relative flex flex-col min-h-screen">
      <TheHeader />

      <main class="container w-full mx-auto px-4 py-6 flex-1">
        <router-view />
      </main>

      <TheFooter />
    </div>
    <BackToTop />
  </div>
</template>
