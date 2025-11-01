<template>
  <div>
    <!-- Navbar condicional según la ruta -->
    <NavbarHome v-if="route.path === '/'" />
    <NavbarDefault v-else />

    <!-- Aquí se renderizan las páginas -->
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

// Importa los dos navbars que creaste
import NavbarHome from '@/assets/Navbar.vue'
import NavbarDefault from '@/assets/NavbarDef.vue'

// Obtener la ruta actual
const route = useRoute()
</script>

<style>
/* Opcional: scroll suave para el home */
html {
  scroll-behavior: smooth;
}
</style>

