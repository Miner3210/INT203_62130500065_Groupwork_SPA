import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import Navibar from './components/Nav.vue'
import ListC from './components/List.vue'
import InputUser from './components/InputUser.vue'
import BaseButton from './components/BaseButton.vue'

const app = createApp(App)
app.component('Navibar',Navibar)
app.component('ListC',ListC)
app.component('InputUser',InputUser)
app.component('base-button', BaseButton)
app.use(router).mount('#app')

