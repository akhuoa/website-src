import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],
  shortcuts: {
    // Theme colors
    'theme-color': 'text-blue-600',
    'theme-bg': 'bg-blue-600',
    'theme-hover': 'hover:text-[#a93caf]',
    'theme-bg-hover': 'hover:bg-[#8a2f8f]',

    // Common transitions
    'theme-transition': 'transition-colors duration-200',

    // Common layouts
    'container': 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    'content': 'max-w-4xl mx-auto px-4',

    // Common components
    'btn': 'px-4 py-2 rounded-md shadow-lg transition-all duration-200',
    'btn-primary': 'bg-[#a93caf] text-white hover:bg-[#8a2f8f]',
    'btn-icon': 'p-3 rounded-full shadow-lg transition-all duration-200',

    'card': 'bg-white rounded-lg shadow-lg p-6',
  },
  theme: {
    colors: {
      primary: '#a93caf',
      'primary-dark': '#8a2f8f',
    },
  },
})
