// stores/useCartStore.js
import { defineStore } from 'pinia'
import { ref, computed} from 'vue'
import { useUserStore } from '@/stores/userStore'
import axios from 'axios'


export const useCartStore = defineStore('cart', () => {
  // Intenta cargar desde cookies
  const carrito = ref([])
  const mostrarCarrito = ref(false) 

const cargarDelServidor = async () => {
    const userStore = useUserStore();
    if (!userStore.isAuthenticated || !userStore.user.user.idUser) return
    const res = await axios.get(`http://localhost:8080/cart/get/${userStore.user.user.idUser}`)
    carrito.value = res.data
}

cargarDelServidor();

const agregar = async (producto) => {
  const userStore = useUserStore();
  if (!carrito.value.some(p => p.idProduct === producto.idProduct)) {
      carrito.value.push(producto)
        await axios.post('http://localhost:8080/cart', {
          idUser: userStore.user.user.idUser,
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
  }

  function vaciarCarrito(){
    carrito.value = [];
  }

  const total = computed(() =>
    carrito.value.reduce((acc, p) => acc + parseFloat(p.price), 0)
  )

  return {
    carrito,
    agregar,
    quitar,
    total,
    mostrarCarrito,
    toggleCarrito,
    cargarDelServidor,
    vaciarCarrito
  }
})
