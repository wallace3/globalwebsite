// stores/useCartStore.js
import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import Cookies from 'js-cookie'
import axios from 'axios'

export const useCartStore = defineStore('cart', () => {
  // Intenta cargar desde cookies
  const carrito = ref([])
  const mostrarCarrito = ref(false) 

  const cookieData = Cookies.get('carrito')
  if (cookieData) {
    try {
      carrito.value = JSON.parse(cookieData)
    } catch (e) {
      carrito.value = []
    }
  }

const cargarDelServidor = async () => {
    const res = await axios.get(`http://localhost:8080/cart/get/1`)
    carrito.value = res.data
    console.log(carrito);
    console.log("carga de lservidor");
    
}

cargarDelServidor();

const agregar = async (producto) => {
    if (!carrito.value.some(p => p.idProduct === producto.idProduct)) {
      carrito.value.push(producto)
        await axios.post('http://localhost:8080/cart', {
          idUser: 1,
          idProduct: producto.idProduct
    })
  }
}

const quitar = async (id) => {
  carrito.value = carrito.value.filter(p => p.idCart !== id)
  await axios.delete(`http://localhost:8080/cart/${id}`)
}

  function toggleCarrito() {
    mostrarCarrito.value = !mostrarCarrito.value
    console.log(mostrarCarrito.value);
    
  }

  const total = computed(() =>
    carrito.value.reduce((acc, p) => acc + parseFloat(p.price), 0)
  )

  // Guarda automáticamente el carrito en cookies cada vez que cambia
  watch(carrito, (newValue) => {
    Cookies.set('carrito', JSON.stringify(newValue), { expires: 7 }) // Dura 7 días
  }, { deep: true })

  return {
    carrito,
    agregar,
    quitar,
    total,
    mostrarCarrito,
    toggleCarrito,
    cargarDelServidor
  }
})
