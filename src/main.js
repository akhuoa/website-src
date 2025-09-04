import './assets/main.css'
import 'uno.css'
import '@unocss/reset/tailwind.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { installVue3DoxygenXml } from 'vue3-doxygen-xml'

const app = createApp(App)

app.use(router)
app.use(installVue3DoxygenXml)
app.mount('#app')
