<script setup lang="ts"></script>

<template>
  <nav class="fixed top-0 left-0 w-full z-50 text-white shadow-md backdrop-blur-md bg-white/1">
    <div
      class="absolute w-[25px] h-[28px] bg-landaVERDELIGHT/100 rounded-full blur-[10px] ml-50 mt-5 z-0"
    ></div>
    <div class="relative max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <div class="text-xl font-bold select-none">Alisson Ayala</div>

      <!-- Menú de navegación -->
      <ul class="hidden md:flex space-x-8 font-semibold">
        <!-- Ruta a home -->
        <li>
          <router-link to="/" class="hover:text-green-400 transition-colors"> Home </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
