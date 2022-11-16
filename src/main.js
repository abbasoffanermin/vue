import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { createApp } from 'vue'
import App from './App.vue'

import axios from 'axios'
createApp(App).config.globalProperties.axios=axios


createApp(App).mount('#app')
