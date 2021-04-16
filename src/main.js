import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import Navibar from './components/Nav.vue'

const app = createApp(App)
app.component('Navibar',Navibar)
app.use(router).mount('#app')
