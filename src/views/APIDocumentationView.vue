<template>
  <div class="bg-gray-50 py-12">
    <div class="max-w-4xl mx-auto px-4">
      <h1 class="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        API Documentation
      </h1>
      <div class="mb-6">
        <Breadcrumb />
      </div>
      <div class="doxygendocs bg-white rounded-lg shadow-lg p-6">
        <DoxygenDocumentation version="latest" />
      </div>
    </div>
  </div>
</template>

<script setup>
import DoxygenDocumentation from '@/components/DoxygenDocumentation.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
</script>

<style>
/* Doxygen documentation styles */
.doxygendocs {
  font-family: system-ui, -apple-system, sans-serif;
  color: #374151;
  line-height: 1.6;
}

.doxygendocs h1 {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #1f2937;
}

.doxygendocs h2 {
  font-size: 1.875rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #1f2937;
}

.doxygendocs h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  color: #1f2937;
}

.doxygendocs h4 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 1.25rem;
  margin-bottom: 0.5rem;
  color: #1f2937;
}

.doxygendocs p {
  margin-bottom: 1rem;
}

.doxygendocs pre {
  background-color: #f3f4f6;
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
  margin: 1rem 0;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
}

.doxygendocs code {
  background-color: #f3f4f6;
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
  font-size: 0.875em;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
}

.doxygendocs table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}

.doxygendocs th {
  background-color: #f3f4f6;
  font-weight: 600;
  text-align: left;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
}

.doxygendocs td {
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
}

.doxygendocs a {
  color: #2563eb;
  text-decoration: none;
  transition: color 0.2s;
}

.doxygendocs a:hover {
  color: #1d4ed8;
  text-decoration: underline;
}

.doxygendocs a:not([href]) {
  cursor: pointer;

  &::before {
    content: "▶";
    display: inline-block;
    margin-right: 0.5rem;
    font-size: 0.75rem;
    transition: transform 0.3s ease;
  }
}

.doxygendocs ul, .doxygendocs ol {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.doxygendocs li {
  margin-bottom: 0.5rem;
}

.doxygendocs .memname {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  color: #2563eb;
}

.doxygendocs .memdoc {
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
}

.doxygendocs .paramname {
  font-weight: 600;
  color: #4b5563;
}

.doxygendocs .paramtype {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  color: #6b7280;
}

.doxygendocs .paramdir {
  color: #6b7280;
}

.doxygendocs .section {
  margin-bottom: 2rem;
}

.doxygendocs .section-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e5e7eb;
}
</style>
