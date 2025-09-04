<template>
  <nav class="flex" aria-label="Breadcrumb">
    <ol class="flex items-center space-x-2">
      <li>
        <router-link to="/" class="text-gray-500 hover:text-blue-600 transition-colors duration-200">
          Home
        </router-link>
      </li>
      <li v-for="(item, index) in breadcrumbs" :key="index" class="flex items-center">
        <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        </svg>
        <router-link 
          v-if="item.path && index !== breadcrumbs.length - 1"
          :to="item.path"
          class="ml-2 text-gray-500 hover:text-blue-600 transition-colors duration-200"
        >
          {{ item.name }}
        </router-link>
        <span v-else class="ml-2 text-gray-900 font-medium">{{ item.name }}</span>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const breadcrumbs = computed(() => {
  const paths = route.path.split('/').filter(Boolean)
  const result = []
  
  // Add API Documentation as the first item
  if (paths[0] === 'documentation') {
    result.push({
      name: 'API Documentation',
      path: '/documentation/api'
    })
  }

  // Add remaining path segments
  let currentPath = ''
  paths.forEach((segment, index) => {
    currentPath += `/${segment}`
    if (index > 0) { // Skip the first segment as it's already added
      result.push({
        name: formatSegment(segment),
        path: index === paths.length - 1 ? null : currentPath
      })
    }
  })

  return result
})

const formatSegment = (segment) => {
  // Convert kebab-case or snake_case to Title Case
  return segment
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase())
}
</script> 