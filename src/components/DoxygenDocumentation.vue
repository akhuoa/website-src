<template>
<div class="doxygendocs">
    <doxygen-xml :baseURL="baseURL" />
</div>
</template>

<script setup>
import { DoxygenXml } from 'vue3-doxygen-xml'
import { computed } from 'vue'

const props = defineProps(['version'])

const baseURL = computed(() => {
  const basePath = import.meta.env.BASE_URL
  return `${basePath}documentation/api/${props.version}`
})
</script>
