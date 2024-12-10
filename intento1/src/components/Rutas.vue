<template>
    <div class="min-h-screen p-6 bg-gradient-to-b from-[#D7EDC6] to-white font-poppins">
      <h1 class="mb-6 text-2xl font-bold text-blue-700">Rutas</h1>
      <div class="p-6 bg-white rounded-lg shadow-md">
        <p class="text-gray-600">Aquí puedes visualizar y asignar las rutas de entrega.</p>
        <!-- Sección para asignar rutas -->
        <form class="mt-6">
          <label for="chofer" class="block mb-2 text-sm font-bold">Chofer</label>
          <select id="chofer" class="w-full p-2 mb-4 border border-gray-300 rounded-lg">
            <option value="">Selecciona un chofer</option>
            <option value="chofer1">Juan</option>
            <option value="chofer2">María</option>
          </select>
          <label for="ruta" class="block mb-2 text-sm font-bold">Ruta</label>
          <input
            type="text"
            id="ruta"
            placeholder="Escribe la ruta"
            class="w-full p-2 border border-gray-300 rounded-lg"
          />
          <button class="px-4 py-2 mt-4 text-white bg-blue-700 rounded-lg hover:bg-blue-800">
            Asignar Ruta
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Rutas",
  };
  </script>
  