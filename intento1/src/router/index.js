import { createRouter, createWebHistory } from "vue-router";
import store from "../store"; // Asegúrate de importar la tienda Vuex

import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import ProductoDetalle from "../components/ProductoDetalle.vue";
import Catalogo from "../components/Catalogo.vue";
import Carrito from "../components/Carrito.vue";
import Juegos from "../components/Juegos.vue"; // Vista de juegos
import Solicitudes from "../components/Solicitudes.vue"; // Vista de solicitudes
import Rutas from "../components/Rutas.vue"; // Vista de rutas
import Agenda from "../components/Agenda.vue"; // Vista de agenda

const routes = [
  { path: "/", component: Home },
  { path: "/catalogo", component: Catalogo },
  { path: "/product/:id", component: ProductoDetalle, props: true },
  { path: "/home", name: "Home", component: Home },
  { path: "/carrito", name: "Carrito", component: Carrito },
  { path: "/login", name: "Login", component: Login },
  // Rutas para administradores
  { path: "/juegos", component: Juegos, meta: { requiresAdmin: true } },
  { path: "/solicitudes", component: Solicitudes, meta: { requiresAdmin: true } },
  { path: "/rutas", component: Rutas, meta: { requiresAdmin: true } },
  { path: "/agenda", component: Agenda, meta: { requiresAdmin: true } },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Verifica permisos antes de cada navegación
router.beforeEach((to, from, next) => {
  const isAdmin = store.state.isAdmin;

  if (to.meta.requiresAdmin && !isAdmin) {
    // Si la ruta requiere permisos de admin y no es admin, redirige a Home
    next("/home");
  } else {
    next(); // Permite la navegación
  }
});

export default router;
