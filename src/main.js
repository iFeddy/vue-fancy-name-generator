import { createApp } from 'vue'
import Toaster from '@meforma/vue-toaster'
import VTooltip from 'v-tooltip'
import Router from "./router/index"
import App from './App.vue'
import './index.css'

createApp(App).use(VTooltip).use(Toaster).use(Router).mount('#app')
