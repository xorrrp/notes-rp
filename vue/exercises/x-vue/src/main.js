import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Calculator from './components/Calculator.vue'

const app = createApp(App)
app.component('calculator', Calculator)
app.mount('#app')