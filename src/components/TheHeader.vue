<template>
  <header class="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <router-link to="/" class="flex items-center group hover:bg-transparent">
            <div class="w-8 h-8 rounded-lg flex items-center justify-center">
              <img src="https://avatars.githubusercontent.com/u/112673382?s=48&v=4" alt="Continuum Modelling Libraries" width="32" height="32" />
            </div>
            <span class="ml-2 text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
              CMLibs
            </span>
          </router-link>
        </div>

        <div class="flex items-center space-x-4">
          <router-link
            v-for="link in navigationLinks"
            :key="link.path"
            :to="link.path"
            class="relative inline-flex text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            active-class="text-blue-600 font-semibold"
            :class="{ 'text-blue-600 font-semibold': isActiveLink(link) }"
          >
            <span
              class="relative after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-0 after:w-full after:h-0.5 after:bg-blue-600 after:transform after:scale-x-0 after:transition-transform after:duration-200"
              :class="{ 'after:scale-x-100': isActiveLink(link) }"
            >
              {{ link.label }}
            </span>
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const navigationLinks = [
  {
    path: '/',
    label: 'Home',
    exact: true
  },
  {
    path: '/documentation/api',
    label: 'API Docs',
    exact: false
  },
  {
    path: '/about',
    label: 'About',
    exact: true
  }
]

const isActiveLink = (link) => {
  if (link.exact) {
    return route.path === link.path
  } else {
    return route.path.startsWith(link.path)
  }
}
</script>
