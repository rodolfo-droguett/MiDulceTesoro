// store/index.js
import { createStore } from 'vuex';

const store = createStore({
  state: {
    isSidebarOpen: true,
    isAdmin: false, // Nuevo estado para identificar si el usuario es administrador
  },
  mutations: {
    toggleSidebar(state) {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    setAdmin(state, isAdmin) {
      state.isAdmin = isAdmin; // Actualiza el estado de admin
    },
  },
  actions: {
    toggleSidebar({ commit }) {
      commit('toggleSidebar');
    },
    updateAdminStatus({ commit }, isAdmin) {
      commit('setAdmin', isAdmin); // Acción para actualizar el estado admin
    },
  },
});

export default store;
