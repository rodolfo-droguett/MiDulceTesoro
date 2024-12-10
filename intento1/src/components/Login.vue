<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#8CCF83] to-white font-poppins">
    <div class="relative flex items-center w-4/5 max-w-4xl">
      <!-- Formulario de inicio de sesión -->
      <div class="w-1/2 p-10 bg-white rounded-lg shadow-lg">
        <h2 class="mb-4 text-3xl font-bold text-left">Inicia Sesión</h2>
        <p class="mb-8 text-left text-gray-500">Accede a tu cuenta para continuar</p>
        <button
          class="flex items-center justify-center w-full px-4 py-2 mb-4 bg-white border-2 rounded-lg border-gray text-gray hover:bg-gray"
        >
          <img src="/src/assets/google-icon.png" alt="Google" class="w-5 h-5 mr-2" />
          Continuar con Google
        </button>
        <div class="flex items-center justify-center mb-4">
          <div class="flex-1 border-t border-gray-300"></div>
          <p class="px-4 text-sm text-gray-400">o usa tu correo</p>
          <div class="flex-1 border-t border-gray-300"></div>
        </div>
        <form @submit.prevent="handleLogin">
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Correo Electrónico</label>
            <input
              v-model="email"
              type="email"
              placeholder="Ingresa tu correo"
              class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Contraseña</label>
            <input
              v-model="password"
              type="password"
              placeholder="Ingresa tu contraseña"
              class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div class="flex items-center justify-between mb-4">
            <label class="flex items-center">
              <input type="checkbox" class="mr-2" />
              <span class="text-sm text-gray-600">Recuérdame</span>
            </label>
            <a href="#" class="text-sm text-blue-600 hover:underline">¿Olvidaste tu contraseña?</a>
          </div>
          <button
            type="submit"
            class="w-full px-4 py-2 text-white rounded-lg"
            style="background-color: #0A4878;"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
      <!-- Imagen del logo -->
      <div class="absolute right-[-10%] w-1/2 hidden md:block">
        <img src="/src/assets/logo2.png" alt="Logo" class="object-contain h-full" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleLogin() {
      // Simula un usuario administrador con datos ficticios
      const adminEmail = "admin@example.com";
      const adminPassword = "admin123";

      // Valida el correo y contraseña
      if (this.email === adminEmail && this.password === adminPassword) {
        // Usuario administrador
        this.$store.dispatch("updateAdminStatus", true);
        alert("Inicio de sesión exitoso como Administrador");
        this.$router.push("/home");
      } else if (this.email && this.password) {
        // Usuario regular
        this.$store.dispatch("updateAdminStatus", false);
        alert("Inicio de sesión exitoso como Usuario");
        this.$router.push("/home");
      } else {
        alert("Por favor, ingresa un correo y contraseña válidos.");
      }
    },
  },
};
</script>

<style scoped>
input::placeholder {
  color: #a0aec0;
}
</style>
