import { createApp } from 'vue'
import Toaster from '@meforma/vue-toaster'
import VTooltip from 'v-tooltip'
import Router from "./router/index"
import App from './App.vue'
import VueGtag from "vue-gtag-next"

import './index.css'

const app = createApp(App);

app.use(VTooltip);
app.use(Toaster);
app.use(Router);

app.use(VueGtag, {
  property: {
    id: ""
  }
});


app.mount("#app");
