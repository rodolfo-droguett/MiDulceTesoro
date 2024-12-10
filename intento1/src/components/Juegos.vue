<template>
    <div class="min-h-screen bg-gradient-to-b from-[#D7EDC6] to-white font-poppins p-6">
      <div class="flex">
        <!-- Tabla de productos -->
        <div class="flex-1">
          <div class="flex items-center justify-between mb-4">
            <input
              type="text"
              placeholder="Buscar..."
              class="w-1/3 p-2 border border-gray-300 rounded-lg focus:outline-none"
            />
            <div class="flex items-center space-x-2">
              <select class="p-2 border border-gray-300 rounded-lg">
                <option value="no">Filtro: No</option>
                <option value="si">Filtro: Sí</option>
              </select>
              <button
                @click="mostrarModalAgregar"
                class="p-2 text-white bg-green-500 rounded-lg hover:bg-green-600"
              >
                Agregar Item +
              </button>
            </div>
          </div>
          <table class="w-full text-left border border-gray-300">
            <thead class="bg-gray-200">
              <tr>
                <th class="p-4 border-b border-gray-300">ID</th>
                <th class="p-4 border-b border-gray-300">Producto</th>
                <th class="p-4 border-b border-gray-300">Precio</th>
                <th class="p-4 border-b border-gray-300">Stock</th>
                <th class="p-4 border-b border-gray-300">Acción</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="producto in productos"
                :key="producto.id"
                @click="seleccionarProducto(producto)"
                class="cursor-pointer hover:bg-green-50"
              >
                <td class="p-4 border-b border-gray-300">{{ producto.id }}</td>
                <td class="flex items-center p-4 border-b border-gray-300">
                  <img
                    :src="producto.imagen"
                    alt="Producto"
                    class="w-10 h-10 mr-4 rounded"
                  />
                  {{ producto.nombre }}
                </td>
                <td class="p-4 border-b border-gray-300">${{ producto.precio }}</td>
                <td
                  class="p-4 border-b border-gray-300"
                  :class="{ 'text-green-700': producto.stock === 'Disponible' }"
                >
                  {{ producto.stock }}
                </td>
                <td class="flex p-4 space-x-2 border-b border-gray-300">
                  <button class="p-2 text-gray-600 hover:text-blue-600">
                    <img src="/src/assets/pen.png" alt="Editar" class="w-5 h-5" />
                  </button>
                  <button class="p-2 text-gray-600 hover:text-red-600">
                    <img src="/src/assets/trash.png" alt="Eliminar" class="w-5 h-5" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <!-- Recuadro azul para producto seleccionado -->
        <div
          v-if="productoSeleccionado"
          class="w-1/3 p-6 ml-6 text-white rounded-lg shadow-lg"
          style="background-color: #0A4878;"
        >
          <h2 class="mb-4 text-xl font-bold">Vista previa del producto</h2>
          <img
            :src="productoSeleccionado.imagen"
            alt="Producto"
            class="object-cover w-full mb-4 rounded-lg h-80"
          />
          <p><strong>ID:</strong> {{ productoSeleccionado.id }}</p>
          <p><strong>Nombre:</strong> {{ productoSeleccionado.nombre }}</p>
          <p><strong>Precio:</strong> ${{ productoSeleccionado.precio }}</p>
          <p><strong>Estado:</strong> {{ productoSeleccionado.stock }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Swal from "sweetalert2";
  
  export default {
    name: "Juegos",
    data() {
      return {
        productos: [
          {
            id: "01",
            nombre: "Juego 1",
            precio: "40.000",
            stock: "Disponible",
            imagen: "/src/assets/juego1.png",
          },
          {
            id: "02",
            nombre: "Juego 2",
            precio: "40.000",
            stock: "Disponible",
            imagen: "/src/assets/inflable1.png",
          },
          {
            id: "03",
            nombre: "Juego 3",
            precio: "40.000",
            stock: "Disponible",
            imagen: "/src/assets/inflable2.png",
          },
        ],
        productoSeleccionado: null,
      };
    },
    methods: {
      seleccionarProducto(producto) {
        this.productoSeleccionado = producto;
      },
      mostrarModalAgregar() {
        Swal.fire({
          title: "Agregar Nuevo Producto",
          html: `
            <input type="text" id="nombre" class="swal2-input" placeholder="Nombre del Producto">
            <input type="text" id="precio" class="swal2-input" placeholder="Precio">
            <select id="stock" class="swal2-select">
              <option value="Disponible">Disponible</option>
              <option value="No Disponible">No Disponible</option>
            </select>
            <input type="text" id="imagen" class="swal2-input" placeholder="URL de la Imagen">
          `,
          focusConfirm: false,
          preConfirm: () => {
            const nombre = Swal.getPopup().querySelector("#nombre").value;
            const precio = Swal.getPopup().querySelector("#precio").value;
            const stock = Swal.getPopup().querySelector("#stock").value;
            const imagen = Swal.getPopup().querySelector("#imagen").value;
  
            if (!nombre || !precio || !stock || !imagen) {
              Swal.showValidationMessage("Por favor completa todos los campos");
            }
  
            return { nombre, precio, stock, imagen };
          },
        }).then((result) => {
          if (result.isConfirmed) {
            const nuevoProducto = {
              id: String(this.productos.length + 1).padStart(2, "0"),
              nombre: result.value.nombre,
              precio: result.value.precio,
              stock: result.value.stock,
              imagen: result.value.imagen,
            };
  
            this.productos.push(nuevoProducto);
            Swal.fire("Producto agregado", "", "success");
          }
        });
      },
    },
  };
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th,
  td {
    padding: 12px;
    text-align: left;
  }
  
  th {
    font-weight: bold;
  }
  
  tr:hover {
    background-color: #f0f0f0;
  }
  
  button {
    cursor: pointer;
  }
  </style>
  