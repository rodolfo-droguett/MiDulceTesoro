<template>
    <div class="min-h-screen bg-gradient-to-b from-[#D7EDC6] to-white font-poppins p-6">
      <div class="flex space-x-6">
        <!-- Calendario -->
        <div class="w-1/3 p-4 bg-white rounded-lg shadow-md">
          <div class="flex items-center justify-between mb-4">
            <button class="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600">
              + Nuevo
            </button>
            <div class="flex items-center space-x-4">
              <button @click="cambiarMes(-1)" class="p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                <img src="/src/assets/arrow-left.png" alt="Anterior" class="w-4 h-4" />
              </button>
              <div class="text-sm text-gray-600">{{ nombreMes(mesActual) }} {{ anioActual }}</div>
              <button @click="cambiarMes(1)" class="p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                <img src="/src/assets/arrow-right.png" alt="Siguiente" class="w-4 h-4" />
              </button>
            </div>
          </div>
          <table class="w-full text-center">
            <thead>
              <tr>
                <th class="p-2 text-gray-500">D</th>
                <th class="p-2 text-gray-500">L</th>
                <th class="p-2 text-gray-500">M</th>
                <th class="p-2 text-gray-500">M</th>
                <th class="p-2 text-gray-500">J</th>
                <th class="p-2 text-gray-500">V</th>
                <th class="p-2 text-gray-500">S</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="semana in semanas" :key="semana">
                <td
                  v-for="dia in semana"
                  :key="dia.fecha"
                  class="p-2 rounded-full cursor-pointer"
                  :class="{
                    'bg-green-200': dia.eventos.length > 0,
                    'text-gray-400': dia.mes !== mesActual,
                  }"
                  @click="seleccionarDia(dia)"
                >
                  {{ dia.dia }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <!-- Eventos del día -->
        <div class="w-2/3 p-6 bg-white rounded-lg shadow-md">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-xl font-bold">
              {{ diaSeleccionado.fecha ? formatearFecha(diaSeleccionado.fecha) : "Selecciona un día" }}
            </h2>
          </div>
          <div v-if="diaSeleccionado.eventos.length > 0" class="space-y-4">
            <div
              v-for="evento in diaSeleccionado.eventos"
              :key="evento.id"
              :class="evento.clase"
              class="p-4 rounded-lg"
            >
              <h3 class="text-lg font-semibold">{{ evento.titulo }}</h3>
              <p class="text-sm text-gray-500">{{ evento.hora }}</p>
            </div>
          </div>
          <p v-else class="text-gray-500">No hay eventos para este día.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Agenda",
    data() {
      return {
        mesActual: new Date().getMonth(),
        anioActual: new Date().getFullYear(),
        semanas: [],
        diaSeleccionado: { fecha: "", eventos: [] },
        eventos: [
          {
            id: 1,
            titulo: "Alquiler de Inflable Castillo",
            descripcion: "Fiesta de cumpleaños - Cliente: Juan Pérez",
            fecha: "2024-04-08",
            hora: "10:00 AM a 1:00 PM",
            clase: "bg-purple-100 text-purple-700",
          },
          {
            id: 2,
            titulo: "Alquiler de Tobogán Inflable",
            descripcion: "Evento escolar - Escuela Primaria Los Pinos",
            fecha: "2024-04-08",
            hora: "2:00 PM a 5:00 PM",
            clase: "bg-yellow-100 text-yellow-700",
          },
          {
            id: 3,
            titulo: "Alquiler de Inflable Básico",
            descripcion: "Evento comunitario - Plaza San Martín",
            fecha: "2024-04-15",
            hora: "4:00 PM a 6:00 PM",
            clase: "bg-pink-100 text-pink-700",
          },
        ],
      };
    },
    mounted() {
      this.generarCalendario();
    },
    methods: {
      generarCalendario() {
        const diasEnMes = new Date(this.anioActual, this.mesActual + 1, 0).getDate();
        const primerDiaSemana = new Date(this.anioActual, this.mesActual, 1).getDay();
        let dia = 1 - primerDiaSemana;
        this.semanas = [];
        while (dia <= diasEnMes) {
          const semana = [];
          for (let i = 0; i < 7; i++) {
            if (dia > 0 && dia <= diasEnMes) {
              const fecha = `${this.anioActual}-${String(this.mesActual + 1).padStart(2, "0")}-${String(dia).padStart(
                2,
                "0"
              )}`;
              const eventosDia = this.eventos.filter((evento) => evento.fecha === fecha);
              semana.push({ dia, fecha, mes: this.mesActual, eventos: eventosDia });
            } else {
              semana.push({ dia: "", fecha: "", eventos: [] });
            }
            dia++;
          }
          this.semanas.push(semana);
        }
      },
      seleccionarDia(dia) {
        this.diaSeleccionado = dia;
      },
      cambiarMes(incremento) {
        this.mesActual += incremento;
        if (this.mesActual < 0) {
          this.mesActual = 11;
          this.anioActual -= 1;
        } else if (this.mesActual > 11) {
          this.mesActual = 0;
          this.anioActual += 1;
        }
        this.generarCalendario();
      },
      nombreMes(mes) {
        const meses = [
          "Enero",
          "Febrero",
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre",
        ];
        return meses[mes];
      },
      formatearFecha(fecha) {
        const [anio, mes, dia] = fecha.split("-");
        return `${dia} de ${this.nombreMes(Number(mes) - 1)} del ${anio}`;
      },
    },
  };
  </script>
  
  <style scoped>
  table {
    border-collapse: collapse;
    width: 100%;
  }
  
  td {
    padding: 10px;
    transition: background-color 0.2s;
  }
  
  td:hover {
    background-color: #f0f0f0;
    border-radius: 50%;
  }
  </style>
  