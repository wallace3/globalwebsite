// stores/useCartStore.js
import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import Cookies from 'js-cookie'

export const useCartStore = defineStore('cart', () => {
  // Intenta cargar desde cookies
  const carrito = ref([])

  const cookieData = Cookies.get('carrito')
  if (cookieData) {
    try {
      carrito.value = JSON.parse(cookieData)
    } catch (e) {
      carrito.value = []
    }
  }

  function agregar(producto) {
    if (!carrito.value.some(p => p.idProduct === producto.idProduct)) {
      carrito.value.push(producto)
    }
  }

  function quitar(id) {
    carrito.value = carrito.value.filter(p => p.idProduct !== id)
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
    total
  }
})
