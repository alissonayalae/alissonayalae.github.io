import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// @ts-ignore
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

// Inicializamos AOS
AOS.init({
  duration: 1000,
  once: false, // Permite reanimar al volver a hacer scroll
  offset: 100, // espera antes de activar
  easing: 'ease-out'
})

// Reinicia AOS cada vez que cambies de ruta
router.afterEach(() => {
  setTimeout(() => {
    AOS.refreshHard()
  }, 500)
})
