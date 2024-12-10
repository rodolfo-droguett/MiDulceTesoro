<template>
  <div class="flex flex-col min-h-screen">
    <!-- Navbar -->
    <Navbar v-if="!isLoginPage" />
    <div class="flex flex-1">
      <!-- Sidebar -->
      <Sidebar v-if="!isLoginPage" />
      <!-- Contenido Principal -->
      <main
        :class="[
          { 'pt-16 pl-64': !isLoginPage }, // Márgenes sólo si no es la página de login
          'flex-1',
        ]"
      >
        <router-view />
      </main>
    </div>
    <!-- Footer -->
    <Footer v-if="!isLoginPage" />
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Sidebar,
    Footer,
  },
  setup() {
    const route = useRoute();
    // Detectar si estamos en la página de inicio de sesión
    const isLoginPage = computed(() => route.path === "/login");
    return {
      isLoginPage,
    };
  },
};
</script>
