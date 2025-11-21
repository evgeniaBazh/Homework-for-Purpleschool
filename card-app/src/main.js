import { createApp, ref } from 'vue'
import './style.css'
import App from './App.vue'

const scores = ref(100)

// ✅ Создаем ОДНО приложение и настраиваем его
const app = createApp(App)

// ✅ Настраиваем приложение ДО монтирования
app.provide('scores', scores)

// ✅ Монтируем приложение
app.mount('#app')
