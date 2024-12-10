<template>
    <div class="min-h-screen p-6 bg-gradient-to-b from-[#D7EDC6] to-white font-poppins">
        <h1 class="mb-6 text-2xl font-bold text-blue-700">Solicitudes</h1>
        <div class="p-6 bg-white rounded-lg shadow-md">
            <p class="text-gray-600">Aquí podrás gestionar las solicitudes de arriendo.</p>
            <!-- Tabla de ejemplo -->
            <table class="w-full mt-4 border border-collapse border-gray-300">
                <thead class="bg-gray-200">
                    <tr>
                        <th class="p-3 border border-gray-300">ID</th>
                        <th class="p-3 border border-gray-300">Cliente</th>
                        <th class="p-3 border border-gray-300">Estado</th>
                        <th class="p-3 border border-gray-300">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="p-3 text-center border border-gray-300">1</td>
                        <td class="p-3 text-center border border-gray-300">Juan Pérez</td>
                        <td class="p-3 text-center text-green-500 border border-gray-300">Aprobada</td>
                        <td class="p-3 text-center border border-gray-300">
                            <button class="px-4 py-2 text-white bg-blue-700 rounded-lg hover:bg-blue-800">Ver
                                Detalle</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: "Solicitudes",
};
</script>