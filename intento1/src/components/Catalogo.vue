<template>
  <div class="min-h-screen w-full bg-gradient-to-b from-[#D7EDC6] to-white font-poppins pb-10">
    <!-- Encabezado -->
    <div class="px-10 pt-10">
      <div class="mb-8 text-center">
        <!-- Imagen del banner -->
        <img src="/src/assets/banner.png" alt="Banner" class="shadow-md mx-auto mb-4 w-[100%] max-w-5xl h-auto" />
        <h1 class="text-3xl font-bold text-green-700">Catálogo de Juegos</h1>
        <p class="mt-2 text-gray-600">Descubre nuestra amplia variedad de juegos inflables y de mesa.</p>
      </div>

      <!-- Sección de juegos inflables -->
      <div class="px-10">
        <h2 class="mb-4 text-2xl font-bold" style="color: #0A4878;">Juegos</h2>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
          <div class="overflow-hidden bg-white rounded-lg shadow-md">
            <img src="/src/assets/inflable1.png" alt="Inflable 1" class="object-cover w-full h-60" />
            <div class="p-4">
              <p class="text-left text-gray-800">Descripción</p>
            </div>
          </div>
          <div class="overflow-hidden bg-white rounded-lg shadow-md">
            <img src="/src/assets/inflable2.png" alt="Inflable 2" class="object-cover w-full h-60" />
            <div class="p-4">
              <p class="text-left text-gray-800">Descripción</p>
            </div>
          </div>
          <div class="overflow-hidden bg-white rounded-lg shadow-md">
            <img src="/src/assets/inflable3.png" alt="Inflable 3" class="object-cover w-full h-60" />
            <div class="p-4">
              <p class="text-left text-gray-800">Descripción</p>
            </div>
          </div>
          <div class="overflow-hidden bg-white rounded-lg shadow-md">
            <img src="/src/assets/inflable4.png" alt="Inflable 4" class="object-cover w-full h-60" />
            <div class="p-4">
              <p class="text-left text-gray-800">Descripción</p>
            </div>
          </div>
        </div>
      </div>

      <div class="px-10 mt-8">
        <div class="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
          <div class="overflow-hidden bg-white rounded-lg shadow-md">
            <img src="/src/assets/mesa1.png" alt="Juego de mesa 1" class="object-cover w-full h-60" />
            <div class="p-4">
              <p class="text-left text-gray-800">Descripción</p>
            </div>
          </div>
          <div class="overflow-hidden bg-white rounded-lg shadow-md">
            <img src="/src/assets/mesa2.png" alt="Juego de mesa 2" class="object-cover w-full h-60" />
            <div class="p-4">
              <p class="text-left text-gray-800">Descripción</p>
            </div>
          </div>
          <div class="overflow-hidden bg-white rounded-lg shadow-md">
            <img src="/src/assets/mesa3.png" alt="Juego de mesa 3" class="object-cover w-full h-60" />
            <div class="p-4">
              <p class="text-left text-gray-800">Descripción</p>
            </div>
          </div>
          <div class="overflow-hidden bg-white rounded-lg shadow-md">
            <img src="/src/assets/juego1.png" alt="Juego 1" class="object-cover w-full h-60" />
            <div class="p-4">
              <p class="text-left text-gray-800">Descripción</p>
            </div>
          </div>
        </div>
      </div>

      <div class="px-10 mt-8">

        <div class="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
          <div class="overflow-hidden bg-white rounded-lg shadow-md">
            <img src="/src/assets/inflable1.png" alt="Inflable 1" class="object-cover w-full h-60" />
            <div class="p-4">
              <p class="text-left text-gray-800">Descripción</p>
            </div>
          </div>
          <div class="overflow-hidden bg-white rounded-lg shadow-md">
            <img src="/src/assets/inflable2.png" alt="Inflable 2" class="object-cover w-full h-60" />
            <div class="p-4">
              <p class="text-left text-gray-800">Descripción</p>
            </div>
          </div>
          <div class="overflow-hidden bg-white rounded-lg shadow-md">
            <img src="/src/assets/inflable3.png" alt="Inflable 3" class="object-cover w-full h-60" />
            <div class="p-4">
              <p class="text-left text-gray-800">Descripción</p>
            </div>
          </div>
          <div class="overflow-hidden bg-white rounded-lg shadow-md">
            <img src="/src/assets/inflable4.png" alt="Inflable 4" class="object-cover w-full h-60" />
            <div class="p-4">
              <p class="text-left text-gray-800">Descripción</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Catalogo",
};
</script>
