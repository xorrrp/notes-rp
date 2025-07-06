import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import Calculator from './components/Calculator.vue'
import ToDoList from './components/ToDoList.vue'
const app = createApp(App)

app.component('calculator', Calculator)
app.component('todolist', ToDoList)

app.mount('#app')