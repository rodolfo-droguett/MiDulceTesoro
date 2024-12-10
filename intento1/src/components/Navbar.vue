<template>
  <nav class="fixed top-0 left-0 z-50 flex items-center justify-between w-full h-20 px-4 text-white shadow-md font-poppins" style="background-color: #8CCF83;">
    <!-- Logo -->
    <div class="flex items-center">
      <img src="/src/assets/logo.png" alt="Logo" class="mr-2 w-52 h-15" />
    </div>
    <!-- Navegación -->
    <div class="flex items-center">
      <!-- Botón -->
      <router-link to="/login" class="px-12 py-2 ml-4 text-white rounded-lg shadow-md" style="background-color: #0A4878;">Ingresar</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
