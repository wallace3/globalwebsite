<template>
    <form @submit.prevent="enviarFactura" class="p-4 space-y-4">
      <input v-model="form.nombre" placeholder="Nombre Receptor" class="border p-2 w-full" />
      <input v-model="form.rfc" placeholder="RFC Receptor" class="border p-2 w-full" />
      <input v-model="form.descripcion" placeholder="Descripción" class="border p-2 w-full" />
      <input v-model.number="form.precio" placeholder="Precio" class="border p-2 w-full" />
      <button type="submit" class="bg-blue-500 text-white px-4 py-2">Generar factura</button>
  
      <div v-if="respuesta" class="mt-4">
        <p>Factura generada:</p>
        <pre>{{ respuesta }}</pre>
      </div>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const form = ref({
    descripcion: 'Beisbol',
    precio: 100
  });
  
  const enviarFactura = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/factura', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form.value)
      });
  
      const data = await response.json();
  
      if (data.base64 && data.filename) {
        const blob = base64ToBlob(data.base64, 'application/pdf');
        const url = URL.createObjectURL(blob);
  
        const link = document.createElement('a');
        link.href = url;
        link.download = data.filename;
        document.body.appendChild(link);  // 👈 asegúrate de que el link esté en el DOM
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      } else {
        console.error('Respuesta inesperada:', data);
        alert('Error: No se pudo generar la factura.');
      }
    } catch (error) {
      console.error('Error al enviar factura:', error);
      alert('Hubo un error al generar la factura.');
    }
  };
  
  // 🔁 Utilidad para convertir base64 a blob
  function base64ToBlob(base64, mime) {
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length).fill(0).map((_, i) => byteCharacters.charCodeAt(i));
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: mime });
  }
  </script>