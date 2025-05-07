// stores/useCartStore.js
import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import Cookies from 'js-cookie'
import axios from 'axios'

export const useWishlistStore = defineStore('wishlist', () => {
  // Intenta cargar desde cookies
  const wishlist = ref([])
  const mostrarWishlist = ref(false) 

  const cookieData = Cookies.get('wishlist')
  if (cookieData) {
    try {
      wishlist.value = JSON.parse(cookieData)
    } catch (e) {
      wishlist.value = []
    }
  }

const cargarDelServidor = async () => {
    const res = await axios.get(`http://localhost:8080/wishlist/get/1`)
    wishlist.value = res.data
    console.log(wishlist);
}

cargarDelServidor();

const agregar = async (producto) => {
    if (!wishlist.value.some(p => p.idProduct === producto.idProduct)) {
      wishlist.value.push(producto)
        await axios.post('http://localhost:8080/wishlist', {
          idUser: 1,
          idProduct: producto.idProduct
    })
  }
}

const quitar = async (id) => {
  wishlist.value = wishlist.value.filter(p => p.idWishList !== id)
  await axios.delete(`http://localhost:8080/wishlist/${id}`)
}

  function togglewishlist() {
    mostrarWishlist.value = !mostrarWishlist.value
    console.log(mostrarWishlist.value);
    
  }

  const total = computed(() =>
    wishlist.value.reduce((acc, p) => acc + parseFloat(p.price), 0)
  )

  // Guarda automáticamente el wishlist en cookies cada vez que cambia
  watch(wishlist, (newValue) => {
    Cookies.set('wishlist', JSON.stringify(newValue), { expires: 7 }) // Dura 7 días
  }, { deep: true })

  return {
    wishlist,
    agregar,
    quitar,
    total,
    mostrarWishlist,
    togglewishlist,
    cargarDelServidor
  }
})
