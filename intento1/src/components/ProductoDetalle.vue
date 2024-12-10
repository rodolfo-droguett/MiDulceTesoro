<template>
  <div class="min-h-screen w-full bg-gradient-to-b from-white to-[#D7EDC6] font-poppins">
    <!-- Formulario de Arrendamiento -->
    <div class="px-10 py-6 ">
      <div class="p-4 bg-white rounded-lg shadow-md">
        <h2 class="mb-4 text-xl font-bold">Ingresa los datos de arriendo:</h2>
        <div class="w-3/4 p-2 rounded-lg" style="background-color: #0A4878;">
          <form class="grid grid-cols-1 gap-4 md:grid-cols-4">
            <div>
              <label for="fecha" class="block font-medium text-white">Fecha:</label>
              <input type="date" id="fecha" class="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label for="hora" class="block font-medium text-white">Hora:</label>
              <input type="time" id="hora" class="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label for="direccion" class="block font-medium text-white">Dirección:</label>
              <input type="text" id="direccion" placeholder="Ingresa dirección" class="w-full p-2 border rounded-md" />
            </div>
            <div class="flex items-center pl-2">
              <button type="submit" class="w-3/4 py-4 text-white bg-green-600 rounded-lg hover:bg-green-700">
                Enviar
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>

    <!-- Detalle del Producto -->
    <div class="px-10 py-6">
      <div class="flex flex-col items-start p-6 bg-white rounded-lg shadow-md md:flex-row md:items-start"style="background-color: #eaf6de;">
        
        <!-- Información del Producto -->
        <div class="w-full md:w-2/3 md:pl-6">
          <div class="flex mb-4 space-x-2">
            <span class="font-semibold text-green-700">Disponible</span>
            <span class="font-semibold text-gray-400">/</span>
            <span class="font-semibold text-yellow-500">Mantenimiento</span>
            <span class="font-semibold text-gray-400">/</span>
            <span class="font-semibold text-red-500">No Disponible</span>
          </div>
          <h2 class="mb-2 text-2xl font-bold text-blue-700">{{ producto.nombre }}</h2>
          <p class="mb-4 text-gray-600">{{ producto.descripcion }}</p>
          <p class="mb-4 text-lg font-bold text-gray-800">Precio: ${{ producto.precio }}</p>
          <div class="pt-40">
            <button class="w-full px-20 py-2 text-white rounded-full md:w-auto hover:bg-blue-800" style="background-color: #0A4878;">
            Agregar al Carrito
          </button>
          </div>
        </div>
        <!-- Imagen del Producto -->
        <div class="w-full mb-4 md:w-2/4 md:mb-0">
          <img :src="producto.imagen" alt="Producto" class="object-cover w-full rounded-lg shadow-md h-fit" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductoDetalle",
  props: ["id"],
  data() {
    return {
      producto: {
        nombre: "Juego Inflable",
        descripcion: "Un inflable divertido para todas las edades.",
        imagen: "/src/assets/inflable1.png",
        precio: "50.000",
      },
    };
  },
};
</script>

<style scoped>
input {
  border-color: #ccc;
}
</style>
