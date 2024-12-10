<template>
    <div class="min-h-screen pt-10 w-full bg-gradient-to-b from-[#D7EDC6] to-white font-poppins">
        <div class="px-10 py-6">
            <!-- Carro de Arriendo y Detalle de Tarjeta -->
            <div class="flex w-full p-6 bg-white rounded-lg shadow-md">
                <!-- Carro de Arriendo -->
                <div class="w-2/3 pr-4">
                    <!-- Volver al catálogo -->
                    <div class="mb-4">
                        <router-link to="/catalogo" class="flex items-center text-blue-700 hover:underline">
                            <img src="/src/assets/Arrow-left.png" alt="Volver" class="w-5 h-5 mr-2" />
                            Volver al catálogo
                        </router-link>
                    </div>
                    <hr class="my-4 h-0.5 border-t-0 bg-neutral-200 dark:bg-white/10" />
                    <h2 class="mb-2 text-2xl font-bold">Carro de arriendo</h2>
                    <p class="mb-4 text-gray-600">Tienes 3 productos en tu carro</p>

                    <!-- Lista de Productos -->
                    <div class="pb-4 space-y-4">
                        <!-- Producto 1 -->
                        <div class="flex items-center p-4 bg-gray-100 rounded-lg shadow-sm">
                            <img src="/src/assets/inflable1.png" alt="Producto" class="w-20 h-20 mr-4 rounded-md" />
                            <div class="flex-1">
                                <h3 class="font-bold text-gray-800">Nombre</h3>
                                <p class="text-gray-600">Descripción</p>
                            </div>
                            <div class="flex items-center space-x-2">
                                <button
                                    class="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300">
                                    <img src="/src/assets/arrow-down.png" alt="Disminuir" class="w-4 h-4" />
                                </button>
                                <span class="font-bold">1</span>
                                <button
                                    class="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300">
                                    <img src="/src/assets/arrow-up.png" alt="Aumentar" class="w-4 h-4" />
                                </button>
                            </div>
                            <p class="ml-6 font-bold text-gray-800">$50.000</p>
                            <button
                                class="flex items-center justify-center w-8 h-8 ml-4 bg-red-100 rounded-full hover:bg-red-200">
                                <img src="/src/assets/trash.png" alt="Eliminar" class="w-4 h-4" />
                            </button>
                        </div>
                        <!-- Producto 2 -->
                        <div class="flex items-center p-4 bg-gray-100 rounded-lg shadow-sm">
                            <img src="/src/assets/inflable2.png" alt="Producto" class="w-20 h-20 mr-4 rounded-md" />
                            <div class="flex-1">
                                <h3 class="font-bold text-gray-800">Nombre</h3>
                                <p class="text-gray-600">Descripción</p>
                            </div>
                            <div class="flex items-center space-x-2">
                                <button
                                    class="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300">
                                    <img src="/src/assets/arrow-down.png" alt="Disminuir" class="w-4 h-4" />
                                </button>
                                <span class="font-bold">1</span>
                                <button
                                    class="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300">
                                    <img src="/src/assets/arrow-up.png" alt="Aumentar" class="w-4 h-4" />
                                </button>
                            </div>
                            <p class="ml-6 font-bold text-gray-800">$50.000</p>
                            <button
                                class="flex items-center justify-center w-8 h-8 ml-4 bg-red-100 rounded-full hover:bg-red-200">
                                <img src="/src/assets/trash.png" alt="Eliminar" class="w-4 h-4" />
                            </button>
                        </div>

                        <!-- Producto 3 -->
                        <div class="flex items-center p-4 bg-gray-100 rounded-lg shadow-sm">
                            <img src="/src/assets/mesa1.png" alt="Producto" class="w-20 h-20 mr-4 rounded-md" />
                            <div class="flex-1">
                                <h3 class="font-bold text-gray-800">Nombre</h3>
                                <p class="text-gray-600">Descripción</p>
                            </div>
                            <div class="flex items-center space-x-2">
                                <button
                                    class="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300">
                                    <img src="/src/assets/arrow-down.png" alt="Disminuir" class="w-4 h-4" />
                                </button>
                                <span class="font-bold">1</span>
                                <button
                                    class="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300">
                                    <img src="/src/assets/arrow-up.png" alt="Aumentar" class="w-4 h-4" />
                                </button>
                            </div>
                            <p class="ml-6 font-bold text-gray-800">$20.000</p>
                            <button
                                class="flex items-center justify-center w-8 h-8 ml-4 bg-red-100 rounded-full hover:bg-red-200">
                                <img src="/src/assets/trash.png" alt="Eliminar" class="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    <!-- Botón de Enviar Solicitud -->
                    <div class="mt-6">
                        <button class="w-full py-3 text-white rounded-lg hover:bg-blue-800"
                            style="background-color: #0A4878;" @click="togglePago">
                            Enviar solicitud
                        </button>
                    </div>
                </div>

                <!-- Detalle de Tarjeta -->
                <div v-if="mostrarPago" class="w-1/3 p-6 text-white bg-blue-700 rounded-lg shadow-md"
                    style="background-color: #0A4878;">
                    <h2 class="mb-4 text-xl font-bold">Detalle de tarjeta</h2>
                    <div class="flex mb-4 space-x-2">
                        <img src="/src/assets/visa.png" alt="Visa" class="w-12 h-auto" />
                        <img src="/src/assets/mastercard.png" alt="Mastercard" class="w-12 h-auto" />
                    </div>
                    <div class="space-y-4">
                        <div>
                            <label class="block mb-1 text-sm font-medium">Nombre</label>
                            <input type="text" placeholder="Nombre" class="w-full p-2 text-black rounded-md" />
                        </div>
                        <div>
                            <label class="block mb-1 text-sm font-medium">Número de tarjeta</label>
                            <input type="text" placeholder="1111 2222 3333 4444"
                                class="w-full p-2 text-black rounded-md" />
                        </div>
                        <div class="flex space-x-4">
                            <div>
                                <label class="block mb-1 text-sm font-medium">Fecha expiración</label>
                                <input type="text" placeholder="mm/yy" class="w-full p-2 text-black rounded-md" />
                            </div>
                            <div>
                                <label class="block mb-1 text-sm font-medium">CVV</label>
                                <input type="text" placeholder="123" class="w-full p-2 text-black rounded-md" />
                            </div>
                        </div>
                    </div>
                    <hr class="my-4 border-gray-300" />
                    <div class="space-y-2">
                        <p class="flex justify-between">
                            <span>Subtotal</span> <span>$120.000</span>
                        </p>
                        <p class="flex justify-between">
                            <span>Despacho</span> <span>$15.000</span>
                        </p>
                        <p class="flex justify-between font-bold">
                            <span>Total (Tax incl.)</span> <span>$135.000</span>
                        </p>
                    </div>
                    <div class="mt-6">
                        <button class="w-full py-3 text-white rounded-lg hover:bg-green-500"
                            style="background-color: #8CCF83;">
                            Pagar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Carrito",
    data() {
        return {
            mostrarPago: false,
        };
    },
    methods: {
        togglePago() {
            this.mostrarPago = !this.mostrarPago;
        },
    },
};
</script>