import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/style.css'
import { createPinia } from 'pinia'
import VueGtag from "vue-gtag"

const app = createApp(App)

app.use(router)
router.afterEach((to) => {
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: to.fullPath,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
});
app.use(createPinia())
app.use(VueGtag, {
  config: { id: "G-D2K2W3MHHW" }
}, router) // importante pasar el router si quieres tracking de rutas

app.mount('#app')