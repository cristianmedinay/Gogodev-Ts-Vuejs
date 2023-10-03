import './ui/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueCookies from 'vue-cookies'
import VueSession from 'vue-session'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueCookies,{
    expires:'1d',
    path:'/',
    domain:'',
    /* secure:false, */

})
app.use(VueSession)

//$cookies set get remove iskey keys()
//$session start set get id renew destroy
app.mount('#app')
