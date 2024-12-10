<template>
  <div>
    <nav
      class="fixed top-20 left-0 w-[260px] h-[calc(100vh-16px)] shadow-md z-40 transition-all duration-300 font-poppins"
      :class="{ 'translate-x-0': isSidebarOpen, '-translate-x-full': !isSidebarOpen }"
      style="background-color: #BFE7A0;"
    >
      <perfect-scrollbar :options="{ swipeEasing: true, wheelPropagation: false }" class="relative h-full">
        <ul class="relative font-semibold pt-10 space-y-0.5 p-4 py-0 pb-10">
          <!-- Inicio -->
          <li class="nav-item" :class="{ 'bg-white/70 rounded-lg shadow-md': $route.path === '/home' }">
            <router-link to="/home" class="group">
              <div class="flex items-center p-3">
                <img src="/src/assets/Home.png" class="w-6 h-6 mr-10" />
                <span style="color: #5B70B4;">Inicio</span>
              </div>
            </router-link>
          </li>

          <!-- Juegos (oculto si es admin) -->
          <li
            v-if="!isAdmin"
            class="nav-item"
            :class="{ 'bg-white/70 rounded-lg shadow-md': $route.path === '/catalogo' }"
          >
            <router-link to="/catalogo" class="group">
              <div class="flex items-center p-3">
                <img src="/src/assets/Widget.png" class="w-6 h-6 mr-10" />
                <span style="color: #5B70B4;">Juegos</span>
              </div>
            </router-link>
          </li>

          <!-- Carrito (oculto si es admin) -->
          <li
            v-if="!isAdmin"
            class="nav-item"
            :class="{ 'bg-white/70 rounded-lg shadow-md': $route.path === '/carrito' }"
          >
            <router-link to="/carrito" class="group">
              <div class="flex items-center p-3">
                <img src="/src/assets/Cart.png" class="w-6 h-6 mr-10" />
                <span style="color: #5B70B4;">Carrito</span>
              </div>
            </router-link>
          </li>

          <!-- Ayuda (oculto si es admin) -->
          <li
            v-if="!isAdmin"
            class="nav-item"
            :class="{ 'bg-white/70 rounded-lg shadow-md': $route.path === '/catalogo' }"
          >
            <router-link to="/catalogo" class="group">
              <div class="flex items-center p-3">
                <img src="/src/assets/info.png" class="w-6 h-6 mr-10" />
                <span style="color: #5B70B4;">Ayuda</span>
              </div>
            </router-link>
          </li>

          <!-- Opciones adicionales para Admin -->
          <template v-if="isAdmin">
            <!-- Juegos -->
            <li class="nav-item" :class="{ 'bg-white/70 rounded-lg shadow-md': $route.path === '/juegos' }">
              <router-link to="/juegos" class="group">
                <div class="flex items-center p-3">
                  <img src="/src/assets/widget.png" class="w-6 h-6 mr-10" />
                  <span style="color: #5B70B4;">Juegos</span>
                </div>
              </router-link>
            </li>
            <!-- Solicitudes -->
            <li class="nav-item" :class="{ 'bg-white/70 rounded-lg shadow-md': $route.path === '/solicitudes' }">
              <router-link to="/solicitudes" class="group">
                <div class="flex items-center p-3">
                  <img src="/src/assets/solicitudes.png" class="w-6 h-6 mr-10" />
                  <span style="color: #5B70B4;">Solicitudes</span>
                </div>
              </router-link>
            </li>

            <!-- Rutas -->
            <li class="nav-item" :class="{ 'bg-white/70 rounded-lg shadow-md': $route.path === '/rutas' }">
              <router-link to="/rutas" class="group">
                <div class="flex items-center p-3">
                  <img src="/src/assets/rutas.png" class="w-6 h-6 mr-10" />
                  <span style="color: #5B70B4;">Rutas</span>
                </div>
              </router-link>
            </li>

            <!-- Agenda -->
            <li class="nav-item" :class="{ 'bg-white/70 rounded-lg shadow-md': $route.path === '/agenda' }">
              <router-link to="/agenda" class="group">
                <div class="flex items-center p-3">
                  <img src="/src/assets/agenda.png" class="w-6 h-6 mr-10" />
                  <span style="color: #5B70B4;">Agenda</span>
                </div>
              </router-link>
            </li>

            <!-- Clientes -->
            <li class="nav-item" :class="{ 'bg-white/70 rounded-lg shadow-md': $route.path === '/clientes' }">
              <router-link to="/clientes" class="group">
                <div class="flex items-center p-3">
                  <img src="/src/assets/clientes.png" class="w-6 h-6 mr-10" />
                  <span style="color: #5B70B4;">Clientes</span>
                </div>
              </router-link>
            </li>
          </template>
        </ul>
      </perfect-scrollbar>
    </nav>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Sidebar",
  computed: {
    ...mapState(["isSidebarOpen", "isAdmin"]),
  },
  methods: {
    ...mapActions(["toggleSidebar"]),
  },
};
</script>
